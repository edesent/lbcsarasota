import { chatConfig, clean, signThread, slack } from "@/lib/chat";

export async function POST(request: Request) {
  const cfg = chatConfig();
  if (!cfg) {
    return Response.json(
      { error: "Chat isn't switched on yet. Please call us at (941) 371-8239." },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill this; real visitors never see it.
  if (body.botcheck) {
    return Response.json({ token: "ignored", messages: [] });
  }

  const name = clean(body.name, 80);
  const email = clean(body.email, 160);
  const message = clean(body.message);

  if (!name || !message) {
    return Response.json(
      { error: "Please tell us your name and what you'd like to ask." },
      { status: 400 }
    );
  }

  const posted = await slack("chat.postMessage", cfg.token, {
    channel: cfg.channel,
    text: `💬 New website chat from ${name}`,
    blocks: [
      {
        type: "header",
        text: { type: "plain_text", text: "💬 New website chat", emoji: true },
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*Name*\n${name}` },
          { type: "mrkdwn", text: `*Email*\n${email || "—"}` },
        ],
      },
      { type: "section", text: { type: "mrkdwn", text: message } },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: "Reply *in this thread* and they'll see it on the website.",
          },
        ],
      },
    ],
  });

  if (!posted) {
    return Response.json(
      { error: "Sorry, we couldn't start the chat. Please call (941) 371-8239." },
      { status: 502 }
    );
  }

  return Response.json({
    token: signThread(String(posted.ts), cfg.token),
    messages: [{ from: "visitor", text: message, at: String(posted.ts) }],
  });
}
