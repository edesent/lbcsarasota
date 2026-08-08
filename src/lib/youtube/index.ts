// ─────────────────────────────────────────────────────────────────────────
//  YouTube plugin — logic (no API key required)
//
//  Three capabilities, keyed off the channelId in ./config.ts:
//    • getLiveStatus()      – is the channel live right now? (+ live videoId)
//    • getRecentVideos()    – latest uploads from the public RSS feed
//    • getPastLivestreams() – completed streams from the channel Streams tab
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

/** Is the channel streaming right now? Reads youtube.com/channel/<id>/live. */
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

function textFromRuns(value: any): string {
  if (!value) return "";
  if (typeof value.simpleText === "string") return value.simpleText;
  if (Array.isArray(value.runs)) return value.runs.map((r: any) => r?.text || "").join("");
  return "";
}

/** Pull one balanced JSON object out of YouTube's page source. */
function extractJsonAfterMarker(html: string, marker: string): any | null {
  const markerIndex = html.indexOf(marker);
  if (markerIndex < 0) return null;
  const start = html.indexOf("{", markerIndex + marker.length);
  if (start < 0) return null;

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = start; i < html.length; i += 1) {
    const ch = html[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (ch === "\\") escaped = true;
      else if (ch === '"') inString = false;
      continue;
    }

    if (ch === '"') inString = true;
    else if (ch === "{") depth += 1;
    else if (ch === "}") {
      depth -= 1;
      if (depth === 0) {
        try {
          return JSON.parse(html.slice(start, i + 1));
        } catch {
          return null;
        }
      }
    }
  }
  return null;
}

function collectVideoRenderers(node: any, found: any[] = []): any[] {
  if (!node || typeof node !== "object") return found;
  if (node.videoRenderer?.videoId) found.push(node.videoRenderer);
  if (node.gridVideoRenderer?.videoId) found.push(node.gridVideoRenderer);
  if (node.richItemRenderer?.content?.videoRenderer?.videoId) {
    found.push(node.richItemRenderer.content.videoRenderer);
  }
  for (const value of Object.values(node)) collectVideoRenderers(value, found);
  return found;
}

function isCompletedLivestream(renderer: any) {
  const published = textFromRuns(renderer.publishedTimeText).toLowerCase();
  const badges = JSON.stringify(renderer.badges || []).toLowerCase();
  const overlays = renderer.thumbnailOverlays || [];
  const duration = overlays
    .map((o: any) => o?.thumbnailOverlayTimeStatusRenderer)
    .find((o: any) => o);
  const durationText = textFromRuns(duration?.text);

  if (renderer.upcomingEventData) return false;
  if (badges.includes("live now") || badges.includes('"style":"live"')) return false;
  if (duration?.style === "LIVE" || duration?.style === "UPCOMING") return false;

  // YouTube labels completed livestreams as “Streamed … ago”. The duration
  // fallback keeps older completed streams if YouTube omits that label.
  return published.includes("streamed") || /^\d{1,2}:\d{2}(?::\d{2})?$/.test(durationText);
}

/** Completed videos from YouTube's Past live streams / Streams tab. */
export async function getPastLivestreams(
  limit = 12,
  channelId: string = youtube.channelId,
): Promise<SermonVideo[]> {
  try {
    const res = await fetch(`https://www.youtube.com/channel/${channelId}/streams`, {
      next: { revalidate: 300 },
      headers: { "User-Agent": UA, "Accept-Language": "en-US,en;q=0.9" },
    });
    if (!res.ok) return [];

    const html = await res.text();
    const data =
      extractJsonAfterMarker(html, "var ytInitialData =") ||
      extractJsonAfterMarker(html, "ytInitialData =") ||
      extractJsonAfterMarker(html, '"contents":');

    if (!data) return [];

    const seen = new Set<string>();
    const renderers = collectVideoRenderers(data).filter((renderer) => {
      if (!renderer.videoId || seen.has(renderer.videoId)) return false;
      seen.add(renderer.videoId);
      return isCompletedLivestream(renderer);
    });

    return renderers.slice(0, limit).map((renderer) => {
      const id = renderer.videoId;
      const title = textFromRuns(renderer.title);
      const published = textFromRuns(renderer.publishedTimeText);
      const thumbnails = renderer.thumbnail?.thumbnails || [];
      const thumbnail =
        thumbnails[thumbnails.length - 1]?.url || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

      return {
        id,
        title,
        url: `https://www.youtube.com/watch?v=${id}`,
        published,
        isoDate: "",
        thumbnail,
        description: textFromRuns(renderer.descriptionSnippet),
      };
    });
  } catch {
    return [];
  }
}

/** Latest uploads from the channel's public RSS feed. */
export async function getRecentVideos(
  limit = 12,
  channelId: string = youtube.channelId,
): Promise<SermonVideo[]> {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
      { next: { revalidate: 1800 } },
    );
    if (!res.ok) return [];

    const xml = await res.text();
    const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) || [];

    return entries.slice(0, limit).map((entry) => {
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
    });
  } catch {
    return [];
  }
}

export { youtube };
