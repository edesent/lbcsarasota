import { notifyChurch } from "@/lib/notify";

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

  const result = await notifyChurch({
    emoji: isPrivate ? "🔒" : "🙏",
    kind: "Prayer Request",
    headline: isPrivate
      ? `Private prayer request from ${name} — pastor only`
      : `Prayer request from ${name}`,
    replyTo: email,
    fields: [
      { label: "Name", value: name },
      { label: "Email", value: email },
      {
        label: "Privacy",
        value: isPrivate ? "🔒 PRIVATE — for the pastor only" : "May be shared with the prayer list",
      },
    ],
    body: { label: "Prayer Request", value: request_text },
  });

  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ success: true });
}
