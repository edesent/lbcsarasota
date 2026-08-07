"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-cream border border-cream-dark text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all";
const labelClass =
  "block text-xs font-bold tracking-[0.15em] uppercase text-text-light mb-2";

type Variant = "primary" | "outline-light" | "outline-dark" | "accent";

const triggerClasses: Record<Variant, string> = {
  primary:
    "bg-brown-light text-white border-2 border-brown-light hover:bg-brown hover:border-brown",
  accent:
    "bg-gold text-brown-deep border-2 border-gold hover:bg-gold-light hover:border-gold-light",
  "outline-light":
    "text-white border-2 border-white/50 hover:bg-white/10 hover:border-white",
  "outline-dark":
    "text-brown-light border-2 border-brown-light/40 hover:border-brown-light",
};

export default function PlanVisitModal({
  label = "Plan Your Visit",
  variant = "primary",
  className = "",
}: {
  label?: string;
  variant?: Variant;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setTimeout(() => setStatus("idle"), 300);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    try {
      const res = await fetch("/api/plan-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-block font-semibold text-sm tracking-wide uppercase rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all ${triggerClasses[variant]} ${className}`}
      >
        {label}
      </button>

      {mounted &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Plan your visit"
          >
            <div
              className="absolute inset-0 bg-brown-deep/70 backdrop-blur-sm animate-fade-up"
              onClick={close}
            />

            <div className="relative w-full max-w-lg bg-warm-white rounded-2xl shadow-2xl p-7 md:p-9 max-h-[90vh] overflow-y-auto">
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full text-text-light hover:bg-cream-dark hover:text-text-dark transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.3 5.71 12 12.01l-6.29-6.3-1.42 1.42 6.3 6.29-6.3 6.29 1.42 1.42 6.29-6.3 6.3 6.3 1.42-1.42-6.3-6.29 6.3-6.29z" />
                </svg>
              </button>

              {status === "success" ? (
                <div className="text-center py-6">
                  <svg
                    className="w-14 h-14 mx-auto mb-4 text-gold-dark"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <h3 className="font-serif text-2xl font-bold text-text-dark mb-2">
                    We&rsquo;ll be watching for you.
                  </h3>
                  <p className="text-text-body mb-6">
                    Someone from our church family will reach out before you come. If
                    you&rsquo;d rather just show up unannounced &mdash; that&rsquo;s
                    perfectly welcome too.
                  </p>
                  <button
                    type="button"
                    onClick={close}
                    className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown transition-all"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6 pr-8">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark leading-snug">
                      Let Us Know <em className="text-brown-light italic">You&rsquo;re Coming.</em>
                    </h2>
                    <p className="text-text-body mt-2 text-sm leading-relaxed">
                      Tell us a little and we&rsquo;ll be looking for you at the door,
                      save you a seat, and have the nursery or kids&rsquo; classes ready.
                      Nothing here is required &mdash; you&rsquo;re welcome to just walk in.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot — hidden from people, tempting to bots. */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    <div>
                      <label htmlFor="visit-name" className={labelClass}>
                        Your Name
                      </label>
                      <input
                        id="visit-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Doe"
                        className={inputClass}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="visit-email" className={labelClass}>
                          Email
                        </label>
                        <input
                          id="visit-email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="visit-phone" className={labelClass}>
                          Phone
                        </label>
                        <input
                          id="visit-phone"
                          name="phone"
                          type="tel"
                          placeholder="(941) 555-0123"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="visit-service" className={labelClass}>
                        Which service?
                      </label>
                      <select id="visit-service" name="service" className={inputClass} defaultValue="">
                        <option value="">I&rsquo;m not sure yet</option>
                        <option>Sunday Small Groups — 9:00 AM</option>
                        <option>Sunday Morning Worship — 10:00 AM</option>
                        <option>Wednesday Midweek Service — 7:00 PM</option>
                      </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="visit-party" className={labelClass}>
                          How many coming?
                        </label>
                        <input
                          id="visit-party"
                          name="party_size"
                          type="text"
                          placeholder="Just me / 2 adults"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="visit-kids" className={labelClass}>
                          Kids &amp; ages
                        </label>
                        <input
                          id="visit-kids"
                          name="kids"
                          type="text"
                          placeholder="2 kids, 4 and 9"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="visit-notes" className={labelClass}>
                        Anything we should know?
                      </label>
                      <textarea
                        id="visit-notes"
                        name="notes"
                        rows={3}
                        placeholder="Questions, accessibility needs, or how you heard about us."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                        Oops — that didn&rsquo;t go through. Please try again, or call us
                        at (941) 371-8239.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {status === "sending" ? "Sending…" : "Let Them Know I'm Coming"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
