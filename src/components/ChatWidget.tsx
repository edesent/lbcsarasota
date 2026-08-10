"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { CHAT } from "@/config/chat";

// The WBC widget pops its greeting 2.5s after it loads, from the greeting set
// on the chat site's server config — NOT from a data attribute, which is why
// removing the attribute never stopped it. It also has no dismiss button and
// never auto-hides; it only goes away if you click it (which opens the chat).
//
// The widget exposes no option for any of that, so we watch for the popup and
// take it over: gone entirely off the homepage, once per visitor, with a real
// X to dismiss and an automatic fade if it's ignored.

const SEEN_KEY = "lbc-chat-greeting-seen";
const VISIBLE_MS = 9000;
const FADE_MS = 400;

export default function ChatWidget() {
  const pathname = usePathname();

  useEffect(() => {
    const onHomepage = pathname === "/";

    const fadeOut = (popup: HTMLElement) => {
      popup.style.transition = `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease`;
      popup.style.opacity = "0";
      popup.style.transform = "translateY(6px)";
      window.setTimeout(() => popup.remove(), FADE_MS);
    };

    const handle = (popup: HTMLElement) => {
      if (popup.dataset.lbcHandled) return;
      popup.dataset.lbcHandled = "1";

      let seen = false;
      try {
        seen = window.localStorage.getItem(SEEN_KEY) === "1";
      } catch {
        /* private mode — treat as unseen */
      }

      // Anywhere but the homepage, or on a repeat visit, it never appears.
      if (!onHomepage || seen) {
        popup.remove();
        return;
      }

      try {
        window.localStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* nothing to do */
      }

      // Room for the X so the text doesn't run under it.
      popup.style.paddingRight = "34px";

      const close = document.createElement("button");
      close.type = "button";
      close.setAttribute("aria-label", "Dismiss message");
      close.textContent = "×";
      close.style.cssText = [
        "position:absolute",
        "top:6px",
        "right:8px",
        "width:22px",
        "height:22px",
        "padding:0",
        "border:0",
        "border-radius:50%",
        "background:transparent",
        "color:#8a94a3",
        "font-size:18px",
        "line-height:22px",
        "cursor:pointer",
      ].join(";");
      close.onmouseenter = () => (close.style.color = "#192531");
      close.onmouseleave = () => (close.style.color = "#8a94a3");
      // Stop the click bubbling to the popup, which would open the chat.
      close.onclick = (event) => {
        event.stopPropagation();
        fadeOut(popup);
      };
      popup.appendChild(close);

      window.setTimeout(() => {
        if (document.body.contains(popup)) fadeOut(popup);
      }, VISIBLE_MS);
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
      strategy="afterInteractive"
    />
  );
}
