"use client";

import Script from "next/script";
import { CHAT } from "@/config/chat";

// The chat bubble greets visitors with "Have a Question for Pastor Aiken?".
// The widget shows it once per visitor: never for someone with a live thread,
// and not again for 14 days after they close the bubble.

export default function ChatWidget() {
  return (
    <Script
      src={`${CHAT.origin}/widget/wbc-chat.js`}
      data-api={CHAT.origin}
      data-key={CHAT.apiKey}
      data-greeting-message="Have a Question for Pastor Aiken?"
      data-agent-icon-url="/pastor-avatar.jpg"
      data-dismiss-days="14"
      strategy="afterInteractive"
    />
  );
}
