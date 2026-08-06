import { createHmac, timingSafeEqual } from "crypto";

// ── Live chat, backed by a Slack thread ──────────────────────────────────────
// A visitor's conversation IS a Slack thread — no database. The first message
// opens the thread; every later message is a reply on it; staff answers are the
// replies posted by real people in that channel.
//
// Needs SLACK_BOT_TOKEN (scopes: chat:write, channels:history — or
// groups:history for a private channel, and the app invited to the channel)
// plus SLACK_CHANNEL_ID.

export type ChatMessage = { from: "visitor" | "church"; text: string; at: string };

export function chatConfig() {
  const token = process.env.SLACK_BOT_TOKEN;
  const channel = process.env.SLACK_CHANNEL_ID;
  if (!token || !channel) return null;
  return { token, channel };
}

/**
 * The thread id is handed to the browser, so it's signed. Without this anyone
 * could poll an arbitrary timestamp and read another visitor's conversation.
 * The bot token doubles as the HMAC secret so there's no extra var to set.
 */
export function signThread(ts: string, secret: string) {
  const mac = createHmac("sha256", secret).update(ts).digest("base64url");
  return `${ts}.${mac}`;
}

export function verifyThread(tokenValue: string, secret: string): string | null {
  const dot = tokenValue.lastIndexOf(".");
  if (dot < 1) return null;
  const ts = tokenValue.slice(0, dot);
  const given = tokenValue.slice(dot + 1);
  const expected = createHmac("sha256", secret).update(ts).digest("base64url");
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  return ts;
}

type SlackResponse = Record<string, unknown> & { ok?: boolean; error?: string };

export async function slack(
  method: string,
  token: string,
  body: Record<string, unknown>
): Promise<SlackResponse | null> {
  try {
    const res = await fetch(`https://slack.com/api/${method}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    // Slack answers HTTP 200 even when the call failed; `ok` is the real check.
    const json = (await res.json()) as SlackResponse;
    if (!json.ok) {
      console.error(`Slack ${method} failed:`, json.error);
      return null;
    }
    return json;
  } catch (err) {
    console.error(`Slack ${method} threw:`, err);
    return null;
  }
}

export async function slackGet(
  method: string,
  token: string,
  params: Record<string, string>
): Promise<SlackResponse | null> {
  try {
    const url = `https://slack.com/api/${method}?${new URLSearchParams(params)}`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const json = (await res.json()) as SlackResponse;
    if (!json.ok) {
      console.error(`Slack ${method} failed:`, json.error);
      return null;
    }
    return json;
  } catch (err) {
    console.error(`Slack ${method} threw:`, err);
    return null;
  }
}

/** Trim and cap anything a visitor typed before it reaches Slack. */
export function clean(value: unknown, max = 2000) {
  return String(value ?? "").trim().slice(0, max);
}

/**
 * Slack mention for whoever should be pinged on a new chat or form, from
 * SLACK_NOTIFY_USER_ID (a member id like U0BNN8RBQ8L). Empty when unset.
 */
export function mention() {
  const id = process.env.SLACK_NOTIFY_USER_ID;
  return id ? `<@${id}>` : "";
}
