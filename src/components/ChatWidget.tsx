"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { CHAT } from "@/config/chat";

// The widget now owns dismissal itself: a small x on the bubble that hides the
// whole thing for data-dismiss-days, always visible on touch devices.
//
// What it still doesn't decide is *when* the greeting is allowed to appear —
// its own guard only lasts one page load, so the popup would return on every
// navigation. That policy is ours: homepage only, once per visitor.

const SEEN_KEY = "lbc-chat-greeting-seen";

export default function ChatWidget() {
  const pathname = usePathname();

  useEffect(() => {
    const onHomepage = pathname === "/";

    const handle = (popup: HTMLElement) => {
      if (popup.dataset.lbcHandled) return;
      popup.dataset.lbcHandled = "1";

      let seen = false;
      try {
        seen = window.localStorage.getItem(SEEN_KEY) === "1";
      } catch {
        /* private mode — treat as unseen */
      }

      if (!onHomepage || seen) {
        popup.remove();
        return;
      }

      try {
        window.localStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* nothing to do */
      }
    };

    const existing = document.getElementById("wbc-greeting-popup");
    if (existing) handle(existing);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement && node.id === "wbc-greeting-popup") {
            handle(node);
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
