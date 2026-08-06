import { chatConfig, clean, slack, verifyThread } from "@/lib/chat";

export async function POST(request: Request) {
  const cfg = chatConfig();
  if (!cfg) return Response.json({ error: "Chat is off." }, { status: 503 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const thread = verifyThread(clean(body.token, 200), cfg.token);
  if (!thread) {
    return Response.json({ error: "That chat has expired." }, { status: 401 });
  }

  const message = clean(body.message);
  if (!message) {
    return Response.json({ error: "Message is empty." }, { status: 400 });
  }

  const posted = await slack("chat.postMessage", cfg.token, {
    channel: cfg.channel,
    thread_ts: thread,
    text: message,
  });

  if (!posted) {
    return Response.json({ error: "Couldn't send that." }, { status: 502 });
  }

  return Response.json({ success: true });
}
