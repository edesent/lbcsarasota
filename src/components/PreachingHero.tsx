"use client";

import { useEffect, useState } from "react";

const heroImages = [
  "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/Qh4Fsf9nB8_N5ncIbYhW8Naff5IQ_qdv/2026-07-12%2010.11.42-1-XnrbYPWpP3arkaOUjdAAxKpfGF8VD2.jpeg",
  "/hero-slides/2026-07-12-10-18-20-1.jpeg",
  "/hero-slides/img-1855.jpeg",
  "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/EsS02eUUUxWJskJazILwtuvl2Bkfj-3s/2026-07-12%2010.08.53-1-asmmygyQdcwggQYREGvV7A8rI7hm7w.jpeg",
  "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/0JJIvsjivFhU70icl_mWV6Anl8RtOyoc/2026-07-12%2012.36.40-1-DFWVx807EX20I9ycobOkunwzQi02K1.jpeg",
  "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/p3nQSZblftAgjRsJllI9guU-Sb_yiYt-/2026-07-19%2008.26.20-cqPsVYrUcfTsUiHrG7bQEL8Yb2m7fJ.jpeg",
];

export default function PreachingHero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(Math.floor(Math.random() * heroImages.length));

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <header
      id="home"
      className="relative min-h-[calc(100vh+5rem)] md:min-h-[calc(100vh+8rem)] flex items-center justify-start overflow-hidden"
    >
      {/* Background slideshow — text and overlays remain stationary */}
      <div className="absolute inset-0 z-0 bg-brown-deep">
        {heroImages.map((src, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt="Liberty Baptist Church in Sarasota"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              index === activeImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Navy overlays — darker on the left for legible text, lighter on the
          right so the sanctuary stays visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-brown-deep/90 via-brown-deep/65 to-brown-deep/30 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-brown-deep/80 via-transparent to-brown-deep/25 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] w-full max-w-7xl mx-auto px-6">
       {/* Top padding clears the fixed navbar; the bottom padding keeps the
           buttons clear of the Welcome panel, which pulls up over the hero
           (-mt-28 / -mt-44). */}
       <div className="text-left text-white max-w-2xl pt-28 md:pt-32 pb-40 md:pb-60">
        <p className="text-sm font-semibold tracking-[0.25em] uppercase text-gold-light mb-3 animate-fade-up animation-delay-200">
          Welcome to
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-5 animate-fade-up animation-delay-400">
          Liberty<br />Baptist Church
        </h1>
        <div className="w-20 h-[3px] bg-gold mb-6 rounded animate-fade-up animation-delay-600" />
        <p className="font-serif text-2xl md:text-3xl italic text-white leading-relaxed max-w-xl mb-3 animate-fade-up animation-delay-800">
          Biblical Preaching. Compassionate Community. Reverent Worship.
        </p>
        <p className="text-sm md:text-base text-white/85 max-w-xl mb-9 animate-fade-up animation-delay-900">
          Helping people know Christ, grow in His Word, and connect in biblical community.
        </p>
        <div className="flex gap-4 justify-start flex-wrap animate-fade-up animation-delay-1000">
          <a
            href="#services"
            className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-gold hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            Plan Your Visit
          </a>
          <a
            href="/messages"
            className="inline-block text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-white/50 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 transition-all"
          >
            Watch Online
          </a>
          <a
            href="/give"
            className="inline-block text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-white/50 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 transition-all"
          >
            Give
          </a>
        </div>
       </div>
      </div>
    </header>
  );
}
