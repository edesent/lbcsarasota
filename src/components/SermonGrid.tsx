"use client";

import type { SermonVideo } from "@/lib/youtube";

export default function SermonGrid({ videos }: { videos: SermonVideo[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((v) => (
        <a
          key={v.id}
          href={`https://www.youtube.com/watch?v=${v.id}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Watch ${v.title} on YouTube (opens in a new tab)`}
          className="group block text-left overflow-hidden rounded-2xl border border-cream-dark bg-warm-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
        >
          <div className="relative aspect-video overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={v.thumbnail}
              alt={v.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-brown-deep/55 via-transparent to-transparent" />
            <span className="absolute right-3 bottom-3 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-brown-deep shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
          <div className="p-5">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-gold-dark">
              {v.published}
            </p>
            <h3 className="mt-2 font-serif text-lg font-semibold text-text-dark leading-snug line-clamp-2">
              {v.title}
            </h3>
          </div>
        </a>
      ))}
    </div>
  );
}
