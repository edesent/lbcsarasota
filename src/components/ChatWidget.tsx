"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { CHAT } from "@/config/chat";

export default function ChatWidget() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (isDesktop === null) return null;

  return (
    <Script
      key={isDesktop ? "chat-desktop" : "chat-mobile"}
      src={`${CHAT.origin}/widget/wbc-chat.js`}
      data-api={CHAT.origin}
      data-key={CHAT.apiKey}
      data-auto-open={isDesktop ? "desktop" : "none"}
      data-auto-open-delay={isDesktop ? "12000" : undefined}
      data-auto-close-delay={isDesktop ? "8000" : undefined}
      data-remember-dismissal="session"
      strategy="afterInteractive"
    />
  );
}
