import { escapeHtml, sendChurchEmail } from "./email";

// ── Where form submissions go ────────────────────────────────────────────────
// Slack is the primary destination and works the day you paste the webhook in:
// create an Incoming Webhook at https://api.slack.com/messaging/webhooks, then
// save the URL as SLACK_WEBHOOK_URL on the hosting (never in a file).
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
  const webhook = process.env.SLACK_WEBHOOK_URL;
  if (!webhook) return false;

  const blocks: unknown[] = [
    {
      type: "header",
      text: { type: "plain_text", text: `${opts.emoji} ${opts.kind}`, emoji: true },
    },
    {
      type: "section",
      text: { type: "mrkdwn", text: `*${opts.headline}*` },
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

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: `${opts.emoji} ${opts.headline}`, blocks }),
    });
    if (!res.ok) {
      console.error("Slack webhook responded", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("Slack webhook failed:", err);
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
