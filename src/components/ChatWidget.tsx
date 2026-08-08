"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { CHAT } from "@/config/chat";

export default function ChatWidget() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      setShowGreeting(false);
      return;
    }

    const openTimer = window.setTimeout(() => setShowGreeting(true), 12000);
    const closeTimer = window.setTimeout(() => setShowGreeting(false), 20000);

    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(closeTimer);
    };
  }, [isDesktop]);

  return (
    <>
      <Script
        src={`${CHAT.origin}/widget/wbc-chat.js`}
        data-api={CHAT.origin}
        data-key={CHAT.apiKey}
        data-auto-open="none"
        data-remember-dismissal="session"
        strategy="afterInteractive"
      />

      {showGreeting && (
        <div className="fixed right-6 bottom-24 z-[9998] hidden md:block w-[360px] max-w-[calc(100vw-3rem)] rounded-2xl bg-white px-6 py-5 text-[17px] leading-relaxed text-slate-800 shadow-2xl border border-slate-200">
          Hi! Thanks for stopping by Liberty Baptist Church. Ask us anything — service times, the academy waiting list, or planning your first visit.
          <span className="absolute right-7 -bottom-3 h-6 w-6 rotate-45 bg-white border-r border-b border-slate-200" aria-hidden="true" />
        </div>
      )}
    </>
  );
}
