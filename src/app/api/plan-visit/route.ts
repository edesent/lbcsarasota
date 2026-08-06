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
  const phone = String(body.phone ?? "").trim();
  const service = String(body.service ?? "").trim();
  const partySize = String(body.party_size ?? "").trim();
  const kids = String(body.kids ?? "").trim();
  const notes = String(body.notes ?? "").trim();

  if (!name || !email) {
    return Response.json(
      { error: "Please give us your name and email so we can look for you." },
      { status: 400 }
    );
  }

  const result = await sendToSlack({
    subject: "🙌 Someone is planning a visit",
    name,
    contact: [email, phone].filter(Boolean).join(" · "),
    fields: [
      ["Service", service],
      ["How many coming", partySize],
      ["Kids & ages", kids],
    ],
    message: notes,
  });

  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ success: true });
}
