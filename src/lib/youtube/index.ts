// ─────────────────────────────────────────────────────────────────────────
//  YouTube plugin — logic (no API key required)
//
//  Capabilities:
//    • getLiveStatus()       – is the channel live right now? (+ live videoId)
//    • getRecentVideos()     – latest uploads from the public RSS feed
//    • getRecentLongVideos() – latest uploads longer than 3 minutes
//
//  None of these calls needs a Google API key.
// ─────────────────────────────────────────────────────────────────────────

import { youtube } from "./config";

export interface LiveStatus {
  isLive: boolean;
  videoId: string | null;
}

export interface SermonVideo {
  id: string;
  title: string;
  url: string;
  published: string;
  isoDate: string;
  thumbnail: string;
  description: string;
}

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

export async function getLiveStatus(
  channelId: string = youtube.channelId,
): Promise<LiveStatus> {
  try {
    const res = await fetch(
      `https://www.youtube.com/channel/${channelId}/live`,
      {
        next: { revalidate: 30 },
        headers: { "User-Agent": UA, "Accept-Language": "en-US,en;q=0.9" },
      },
    );
    if (!res.ok) return { isLive: false, videoId: null };

    const html = await res.text();
    const videoId =
      html.match(
        /<link rel="canonical" href="https:\/\/www\.youtube\.com\/watch\?v=([A-Za-z0-9_-]+)"/,
      )?.[1] ?? null;

    const isOffline =
      /"status":"LIVE_STREAM_OFFLINE"/.test(html) || /"isUpcoming":true/.test(html);
    const isLive = !isOffline && /"isLive":true/.test(html);

    return { isLive, videoId };
  } catch {
    return { isLive: false, videoId: null };
  }
}

function matchTag(block: string, tag: string) {
  return block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`))?.[1]?.trim() || "";
}

function decodeXml(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripHtml(value: string) {
  return decodeXml(value).replace(/<[^>]+>/g, "").trim();
}

function entryToVideo(entry: string): SermonVideo {
  const id = matchTag(entry, "yt:videoId");
  const isoDate = matchTag(entry, "published");
  return {
    id,
    title: stripHtml(matchTag(entry, "title")),
    url:
      entry.match(/<link[^>]*href="([^"]+)"[^>]*rel="alternate"/)?.[1] ||
      `https://www.youtube.com/watch?v=${id}`,
    isoDate,
    published: new Date(isoDate).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    thumbnail:
      entry.match(/<media:thumbnail[^>]*url="([^"]+)"/)?.[1] ||
      `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    description: stripHtml(matchTag(entry, "media:description")),
  };
}

export async function getRecentVideos(
  limit = 12,
  channelId: string = youtube.channelId,
): Promise<SermonVideo[]> {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
      { next: { revalidate: 900 } },
    );
    if (!res.ok) return [];

    const xml = await res.text();
    const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) || [];
    return entries.slice(0, limit).map(entryToVideo);
  } catch {
    return [];
  }
}

async function getDurationSeconds(videoId: string): Promise<number | null> {
  try {
    const res = await fetch(`https://www.youtube.com/watch?v=${videoId}`, {
      next: { revalidate: 86400 },
      headers: { "User-Agent": UA, "Accept-Language": "en-US,en;q=0.9" },
    });
    if (!res.ok) return null;
    const html = await res.text();
    const value = html.match(/"lengthSeconds":"(\d+)"/)?.[1];
    return value ? Number(value) : null;
  } catch {
    return null;
  }
}

interface StreamEntry {
  id: string;
  title: string;
  /** YouTube's own relative wording, e.g. "Streamed 2 days ago". */
  relative: string;
}

/**
 * The channel's livestreams, newest first, scraped from its /streams tab.
 *
 * This is the only source that actually knows which videos were livestreams.
 * The RSS feed lists every upload with no way to tell them apart, which is why
 * filtering by duration only ever removed Shorts — regular uploads still got
 * through.
 */
export async function getPastLivestreams(
  channelId: string = youtube.channelId,
): Promise<StreamEntry[]> {
  try {
    const res = await fetch(`https://www.youtube.com/channel/${channelId}/streams`, {
      next: { revalidate: 1800 },
      headers: { "User-Agent": UA, "Accept-Language": "en-US,en;q=0.9" },
    });
    if (!res.ok) return [];

    const html = await res.text();
    const raw = html.match(/var ytInitialData\s*=\s*(\{[\s\S]*?\});<\/script>/)?.[1];
    if (!raw) return [];

    const data: unknown = JSON.parse(raw);
    const entries: StreamEntry[] = [];
    const seen = new Set<string>();

    // YouTube renders these as lockupViewModel now (it used to be
    // videoRenderer), so read whichever shape comes back.
    const walk = (node: unknown): void => {
      if (Array.isArray(node)) {
        node.forEach(walk);
        return;
      }
      if (!node || typeof node !== "object") return;
      const obj = node as Record<string, unknown>;

      const lockup = obj.lockupViewModel as Record<string, unknown> | undefined;
      if (lockup && typeof lockup.contentId === "string") {
        const id = lockup.contentId;
        const meta = (lockup.metadata as Record<string, unknown> | undefined)
          ?.lockupMetadataViewModel as Record<string, unknown> | undefined;
        const title =
          ((meta?.title as Record<string, unknown> | undefined)?.content as string) ?? "";
        // "Streamed 2 days ago" lives in the metadata rows beside the view count.
        const relative = JSON.stringify(meta?.metadata ?? "").match(
          /"content":"(Streamed [^"]+)"/,
        )?.[1];
        if (id && title && !seen.has(id)) {
          seen.add(id);
          entries.push({ id, title, relative: relative ?? "" });
        }
      }

      const legacy = obj.videoRenderer as Record<string, unknown> | undefined;
      if (legacy && typeof legacy.videoId === "string") {
        const id = legacy.videoId;
        const title =
          ((legacy.title as Record<string, unknown> | undefined)?.runs as
            | Array<{ text?: string }>
            | undefined)?.[0]?.text ?? "";
        if (id && title && !seen.has(id)) {
          seen.add(id);
          entries.push({ id, title, relative: "" });
        }
      }

      Object.values(obj).forEach(walk);
    };

    walk(data);
    return entries;
  } catch {
    return [];
  }
}

/**
 * Recent livestreams as sermon entries.
 *
 * The /streams tab decides *which* videos count; the RSS feed supplies the
 * exact publish date and description for the ones it still carries (it holds
 * roughly the latest 15 uploads). Older streams fall back to YouTube's own
 * "Streamed N ago" wording rather than showing an invented date.
 *
 * If the scrape fails, this falls back to the old duration filter so the
 * sermon page degrades to "recent long videos" instead of going blank.
 */
export async function getRecentLivestreams(
  limit = 12,
  channelId: string = youtube.channelId,
): Promise<SermonVideo[]> {
  const [streams, feed] = await Promise.all([
    getPastLivestreams(channelId),
    getRecentVideos(15, channelId),
  ]);

  if (streams.length === 0) return getRecentLongVideos(limit, channelId);

  const byId = new Map(feed.map((video) => [video.id, video]));

  // A church sermon/service should never be a short-form clip. YouTube's
  // /streams page occasionally exposes unrelated video lockups in its page data,
  // so verify duration as a second guard instead of trusting the tab alone.
  const checkedStreams = await Promise.all(
    streams.slice(0, Math.max(limit * 2, 15)).map(async (stream) => ({
      stream,
      duration: await getDurationSeconds(stream.id),
    })),
  );

  return checkedStreams
    .filter(({ duration }) => duration === null || duration >= 600)
    .slice(0, limit)
    .map(({ stream: { id, title, relative } }) => {
      const fromFeed = byId.get(id);
      if (fromFeed) return fromFeed;
      return {
        id,
        title,
        url: `https://www.youtube.com/watch?v=${id}`,
        isoDate: "",
        published: relative,
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        description: "",
      };
    });
}

/**
 * Latest full-length uploads. YouTube Shorts can now be up to 3 minutes long,
 * so anything at or under 180 seconds is excluded. If YouTube does not expose
 * a duration for a video, we keep it rather than accidentally hiding a sermon.
 *
 * Kept as the fallback for getRecentLivestreams.
 */
export async function getRecentLongVideos(
  limit = 12,
  channelId: string = youtube.channelId,
): Promise<SermonVideo[]> {
  const candidates = await getRecentVideos(15, channelId);
  const checked = await Promise.all(
    candidates.map(async (video) => ({
      video,
      duration: await getDurationSeconds(video.id),
    })),
  );

  return checked
    .filter(({ duration }) => duration === null || duration > 180)
    .map(({ video }) => video)
    .slice(0, limit);
}

export { youtube };
