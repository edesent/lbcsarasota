import { escapeHtml, sendChurchEmail } from "@/lib/email";

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

  const firstName = String(body.first_name ?? "").trim();
  const lastName = String(body.last_name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!firstName || !email || !message) {
    return Response.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 }
    );
  }

  const fullName = `${firstName} ${lastName}`.trim();

  const result = await sendChurchEmail({
    subject: `New website message from ${fullName}`,
    replyTo: email,
    text:
      `Name: ${fullName}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || "—"}\n\n` +
      `${message}\n`,
    html:
      `<p><strong>Name:</strong> ${escapeHtml(fullName)}</p>` +
      `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` +
      `<p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>` +
      `<p><strong>Message:</strong></p>` +
      `<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
  });

  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ success: true });
}
