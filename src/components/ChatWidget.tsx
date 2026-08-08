"use client";

import Script from "next/script";
import { CHAT } from "@/config/chat";

export default function ChatWidget() {
  return (
    <Script
      src={`${CHAT.origin}/widget/wbc-chat.js`}
      data-api={CHAT.origin}
      data-key={CHAT.apiKey}
      data-auto-open="none"
      data-remember-dismissal="session"
      strategy="afterInteractive"
    />
  );
}
