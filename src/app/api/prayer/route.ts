import { sendToSlack } from "@/lib/slack-form";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill this; real visitors never see it. Pretend success.
  if (body.botcheck) {
    return Response.json({ success: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const request_text = String(body.request ?? "").trim();
  const isPrivate = Boolean(body.private);

  if (!name || !email || !request_text) {
    return Response.json(
      { error: "Please fill in your name, email, and prayer request." },
      { status: 400 }
    );
  }

  const result = await sendToSlack({
    subject: isPrivate ? "🔒 Private prayer request" : "🙏 New prayer request",
    name,
    contact: email,
    fields: isPrivate ? [["Privacy", "PRIVATE — for the pastor only"]] : [],
    message: request_text,
  });

  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ success: true });
}
