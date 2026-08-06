import { escapeHtml, sendChurchEmail } from "./email";
import { mention } from "./chat";

// ── Where form submissions go ────────────────────────────────────────────────
// Slack is the primary destination. Configure it EITHER way:
//
//   1. Bot token (preferred — lets you pick/change the channel by id)
//        SLACK_BOT_TOKEN   xoxb-…  with the chat:write scope, app in the channel
//        SLACK_CHANNEL_ID  C…      the channel messages land in
//
//   2. Incoming webhook (simplest — the channel is baked into the URL)
//        SLACK_WEBHOOK_URL https://hooks.slack.com/services/…
//
// Email via Resend is the optional second copy. It only works once
// lbcsarasota.com is verified in Resend, so a submission counts as delivered if
// EITHER channel succeeds. That way the forms are live before DNS is sorted.

export type NotifyField = { label: string; value: string };

type Result = { ok: true } | { ok: false; status: number; error: string };

const GENERIC_ERROR =
  "Sorry, that couldn't be sent. Please try again, or call us at (941) 371-8239.";

async function postToSlack(opts: {
  emoji: string;
  kind: string;
  headline: string;
  fields: NotifyField[];
  body?: NotifyField;
}): Promise<boolean> {
  const token = process.env.SLACK_BOT_TOKEN;
  const channel = process.env.SLACK_CHANNEL_ID;
  const webhook = process.env.SLACK_WEBHOOK_URL;
  if (!webhook && !(token && channel)) return false;

  const ping = mention();
  const blocks: unknown[] = [
    {
      type: "header",
      text: { type: "plain_text", text: `${opts.emoji} ${opts.kind}`, emoji: true },
    },
    {
      type: "section",
      text: { type: "mrkdwn", text: `${ping ? `${ping} ` : ""}*${opts.headline}*` },
    },
  ];

  if (opts.fields.length) {
    // Slack allows at most 10 fields per section.
    blocks.push({
      type: "section",
      fields: opts.fields
        .slice(0, 10)
        .map((f) => ({ type: "mrkdwn", text: `*${f.label}*\n${f.value || "—"}` })),
    });
  }

  if (opts.body?.value) {
    blocks.push({ type: "divider" });
    blocks.push({
      type: "section",
      text: { type: "mrkdwn", text: `*${opts.body.label}*\n${opts.body.value}` },
    });
  }

  blocks.push({
    type: "context",
    elements: [{ type: "mrkdwn", text: "Sent from lbcsarasota.com" }],
  });

  const fallbackText = `${ping ? `${ping} ` : ""}${opts.emoji} ${opts.headline}`;

  try {
    // Bot token wins when both are configured — the channel stays changeable
    // without minting a new webhook.
    if (token && channel) {
      const res = await fetch("https://slack.com/api/chat.postMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ channel, text: fallbackText, blocks }),
      });
      // Slack returns HTTP 200 even for API-level failures; check `ok`.
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!json.ok) {
        console.error("Slack chat.postMessage failed:", json.error);
        return false;
      }
      return true;
    }

    const res = await fetch(webhook as string, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: fallbackText, blocks }),
    });
    if (!res.ok) {
      console.error("Slack webhook responded", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("Slack delivery failed:", err);
    return false;
  }
}

/**
 * Deliver a form submission to the church — Slack first, email as a second
 * copy. Succeeds when at least one channel accepts it.
 */
export async function notifyChurch(opts: {
  emoji: string;
  /** Short label for the type of submission, e.g. "Plan a Visit". */
  kind: string;
  /** One-line summary, e.g. "Jane Doe is planning a visit". */
  headline: string;
  fields: NotifyField[];
  /** Free-text block shown last, e.g. the message or prayer request. */
  body?: NotifyField;
  replyTo?: string;
}): Promise<Result> {
  const slackOk = await postToSlack(opts);

  const lines = opts.fields.map((f) => `${f.label}: ${f.value || "—"}`).join("\n");
  const emailResult = await sendChurchEmail({
    subject: `${opts.kind} — ${opts.headline}`,
    replyTo: opts.replyTo,
    text:
      `${lines}\n` +
      (opts.body?.value ? `\n${opts.body.label}:\n${opts.body.value}\n` : ""),
    html:
      opts.fields
        .map(
          (f) =>
            `<p><strong>${escapeHtml(f.label)}:</strong> ${escapeHtml(
              f.value || "—"
            )}</p>`
        )
        .join("") +
      (opts.body?.value
        ? `<p><strong>${escapeHtml(opts.body.label)}:</strong></p><p>${escapeHtml(
            opts.body.value
          ).replace(/\n/g, "<br>")}</p>`
        : ""),
  });

  if (slackOk || emailResult.ok) return { ok: true };

  console.error("No delivery channel is configured (SLACK_WEBHOOK_URL / RESEND_API_KEY).");
  return { ok: false, status: 500, error: GENERIC_ERROR };
}
