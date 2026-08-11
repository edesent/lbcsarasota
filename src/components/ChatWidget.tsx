"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { CHAT } from "@/config/chat";

// Keep the chat icon available without unsolicited greeting popups or sounds.
// Visitors can still open the chat themselves whenever they want it.

export default function ChatWidget() {
  const pathname = usePathname();

  useEffect(() => {
    const originalPlay = HTMLMediaElement.prototype.play;

    HTMLMediaElement.prototype.play = function () {
      if (this instanceof HTMLAudioElement) {
        return Promise.resolve();
      }
      return originalPlay.call(this);
    };

    return () => {
      HTMLMediaElement.prototype.play = originalPlay;
    };
  }, []);

  useEffect(() => {
    const removeGreeting = (popup: HTMLElement) => {
      popup.remove();
    };

    const existing = document.getElementById("wbc-greeting-popup");
    if (existing) removeGreeting(existing);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement && node.id === "wbc-greeting-popup") {
            removeGreeting(node);
          }
        }
      }
    });
    observer.observe(document.body, { childList: true });
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <Script
      src={`${CHAT.origin}/widget/wbc-chat.js`}
      data-api={CHAT.origin}
      data-key={CHAT.apiKey}
      data-agent-icon-url="/pastor-avatar.jpg"
      data-dismiss-days="14"
      strategy="afterInteractive"
    />
  );
}
