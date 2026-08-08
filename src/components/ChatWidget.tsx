"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { CHAT } from "@/config/chat";

export default function ChatWidget() {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setShowChat(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (!showChat) return null;

  return (
    <Script
      src={`${CHAT.origin}/widget/wbc-chat.js`}
      data-api={CHAT.origin}
      data-key={CHAT.apiKey}
      data-auto-open="desktop"
      data-auto-open-delay="12000"
      data-auto-close-delay="8000"
      data-remember-dismissal="session"
      strategy="afterInteractive"
    />
  );
}
