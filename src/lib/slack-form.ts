import { CHAT } from "@/config/chat";

// Deliver a website form into the church's Slack channel through the WBC Chat
// backend — the same connection the chat bubble uses.
//
// Why Slack and not email: this path needs no API key or verified domain, so it
// works the day it ships, and it reaches the pastor's phone in seconds.

type SendResult = { ok: true } | { ok: false; status: number; error: string };

const FAILURE =
  "Sorry, that didn't send. Please try again, or call us at (941) 371-8239.";

export interface SlackFormPayload {
  /** Bold headline in Slack, e.g. "🙌 Someone is planning a visit". */
  subject: string;
  name: string;
  /** Email, or "email · phone" — whatever the pastor should reply to. */
  contact: string;
  /** Label/value pairs printed above the message, in order. */
  fields?: [string, string][];
  /** The visitor's own words. */
  message?: string;
}

export async function sendToSlack(payload: SlackFormPayload): Promise<SendResult> {
  const lines = [
    ...(payload.fields ?? [])
      .filter(([, value]) => value)
      .map(([label, value]) => `*${label}:* ${value}`),
    ...(payload.message ? ["", payload.message] : []),
  ];

  try {
    const response = await fetch(`${CHAT.origin}/api/chat/contact-form`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apiKey: CHAT.apiKey,
        subject: payload.subject,
        name: payload.name,
        contact: payload.contact,
        // The backend rejects an empty message.
        message: lines.join("\n").trim() || "No extra details given.",
      }),
    });

    if (!response.ok) {
      console.error("Slack form failed:", response.status, await response.text());
      return { ok: false, status: 502, error: FAILURE };
    }
  } catch (error) {
    console.error("Slack form error:", error);
    return { ok: false, status: 502, error: FAILURE };
  }

  return { ok: true };
}
