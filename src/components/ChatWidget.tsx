"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Message = { from: "visitor" | "church"; text: string; at: string };

const GREETING =
  "Hi! Thanks for stopping by Liberty Baptist Church. Ask us anything — service times, the academy waiting list, or planning your first visit.";

const STORAGE_KEY = "lbc-chat-token";

const inputClass =
  "w-full px-4 py-2.5 rounded-lg bg-cream border border-cream-dark text-text-dark text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unread, setUnread] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const openRef = useRef(open);
  openRef.current = open;

  // Resume an in-progress conversation across page loads.
  useEffect(() => {
    const saved = window.sessionStorage.getItem(STORAGE_KEY);
    if (saved) setToken(saved);
  }, []);

  const poll = useCallback(async (t: string) => {
    try {
      const res = await fetch(`/api/chat/poll?token=${encodeURIComponent(t)}`);
      if (!res.ok) return;
      const json = (await res.json()) as { messages?: Message[] };
      if (!json.messages) return;
      setMessages((prev) => {
        const opening = prev.slice(0, 1);
        const next = [...opening, ...json.messages!];
        const wasChurch = prev.filter((m) => m.from === "church").length;
        const isChurch = next.filter((m) => m.from === "church").length;
        if (!openRef.current && isChurch > wasChurch) {
          setUnread((u) => u + (isChurch - wasChurch));
        }
        return next;
      });
    } catch {
      /* transient — the next tick will retry */
    }
  }, []);

  // Poll while a conversation is live. Slower when the panel is closed.
  useEffect(() => {
    if (!token) return;
    poll(token);
    const id = setInterval(() => poll(token), open ? 4000 : 20000);
    return () => clearInterval(id);
  }, [token, open, poll]);

  useEffect(() => {
    if (open) setUnread(0);
  }, [open, messages.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const startChat = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/chat/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.token) {
        setError(json.error ?? "Couldn't start the chat.");
      } else {
        window.sessionStorage.setItem(STORAGE_KEY, json.token);
        setToken(json.token);
        setMessages(json.messages ?? []);
      }
    } catch {
      setError("Couldn't start the chat. Please call (941) 371-8239.");
    } finally {
      setSending(false);
    }
  };

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text || !token) return;
    setDraft("");
    setMessages((prev) => [...prev, { from: "visitor", text, at: `local-${Date.now()}` }]);
    try {
      const res = await fetch("/api/chat/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, message: text }),
      });
      if (!res.ok) setError("That message didn't send.");
      else poll(token);
    } catch {
      setError("That message didn't send.");
    }
  };

  return (
    <>
      {/* Bubble */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Chat with us"}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-[90] w-14 h-14 rounded-full bg-gold text-brown-deep shadow-xl flex items-center justify-center hover:bg-gold-light hover:-translate-y-0.5 transition-all"
      >
        {open ? (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.3 5.71 12 12.01l-6.29-6.3-1.42 1.42 6.3 6.29-6.3 6.29 1.42 1.42 6.29-6.3 6.3 6.3 1.42-1.42-6.3-6.29 6.3-6.29z" />
          </svg>
        ) : (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
          </svg>
        )}
        {unread > 0 && !open && (
          <span className="absolute -top-1 -right-1 min-w-6 h-6 px-1.5 rounded-full bg-red-600 text-white text-xs font-bold flex items-center justify-center">
            {unread}
          </span>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-[90] w-[calc(100vw-2.5rem)] max-w-sm rounded-2xl bg-warm-white shadow-2xl border border-cream-dark overflow-hidden flex flex-col max-h-[min(32rem,calc(100vh-8rem))]">
          <div className="bg-brown-deep px-5 py-4 flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-white.png" alt="" aria-hidden="true" className="w-9 h-9" />
            <div>
              <p className="font-serif text-base font-bold text-white leading-tight">
                Liberty Baptist Church
              </p>
              <p className="text-xs text-gold-light">We&rsquo;re here for you.</p>
            </div>
          </div>

          {!token ? (
            <form onSubmit={startChat} className="p-5 space-y-3 overflow-y-auto">
              <p className="text-sm text-text-body leading-relaxed">{GREETING}</p>
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <input name="name" required placeholder="Your name" className={inputClass} />
              <input
                name="email"
                type="email"
                placeholder="Email (so we can follow up)"
                className={inputClass}
              />
              <textarea
                name="message"
                required
                rows={3}
                placeholder="How can we help?"
                className={`${inputClass} resize-none`}
              />
              {error && <p className="text-sm text-red-700">{error}</p>}
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-6 py-3 rounded-full hover:bg-brown transition-all disabled:opacity-60"
              >
                {sending ? "Starting…" : "Start Chatting"}
              </button>
            </form>
          ) : (
            <>
              <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-3">
                {messages.map((m, i) => (
                  <div
                    key={`${m.at}-${i}`}
                    className={`flex ${m.from === "visitor" ? "justify-end" : "justify-start"}`}
                  >
                    <p
                      className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                        m.from === "visitor"
                          ? "bg-brown-light text-white rounded-br-sm"
                          : "bg-cream text-text-dark rounded-bl-sm"
                      }`}
                    >
                      {m.text}
                    </p>
                  </div>
                ))}
                <p className="text-xs text-text-muted text-center pt-2">
                  Someone from the church will reply here. You can close this and
                  come back &mdash; we&rsquo;ll keep your place.
                </p>
              </div>

              <form onSubmit={sendMessage} className="p-3 border-t border-cream-dark flex gap-2">
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Type a message…"
                  aria-label="Message"
                  className={inputClass}
                />
                <button
                  type="submit"
                  aria-label="Send"
                  className="flex-shrink-0 w-11 h-11 rounded-full bg-brown-light text-white flex items-center justify-center hover:bg-brown transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
