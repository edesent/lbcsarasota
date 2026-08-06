import { chatConfig, clean, slackGet, verifyThread, type ChatMessage } from "@/lib/chat";

type SlackReply = {
  ts?: string;
  text?: string;
  bot_id?: string;
  subtype?: string;
};

export async function GET(request: Request) {
  const cfg = chatConfig();
  if (!cfg) return Response.json({ error: "Chat is off." }, { status: 503 });

  const url = new URL(request.url);
  const thread = verifyThread(clean(url.searchParams.get("token"), 200), cfg.token);
  if (!thread) {
    return Response.json({ error: "That chat has expired." }, { status: 401 });
  }

  const res = await slackGet("conversations.replies", cfg.token, {
    channel: cfg.channel,
    ts: thread,
    limit: "100",
  });

  if (!res) {
    return Response.json({ error: "Couldn't load messages." }, { status: 502 });
  }

  const replies = (res.messages as SlackReply[] | undefined) ?? [];

  const messages: ChatMessage[] = replies
    // Index 0 is the thread parent — the visitor's opening message, which the
    // browser already has.
    .slice(1)
    .filter((m) => m.text && !m.subtype)
    .map((m) => ({
      // Anything the bot posted is the visitor's own message echoed back;
      // anything from a real Slack account is the church answering.
      from: m.bot_id ? "visitor" : "church",
      text: String(m.text),
      at: String(m.ts ?? ""),
    }));

  return Response.json({ messages });
}
