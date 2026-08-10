"use client";

import { useState } from "react";

// Click-to-play: the thumbnail is just an image until someone asks for the
// video, so YouTube's player (and its cookies) never load for people who
// scroll past. Pressing play swaps in the embed and starts it.
export default function SermonPlayer({
  videoId,
  title,
  thumbnail,
}: {
  videoId: string;
  title: string;
  thumbnail: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-brown-deep">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play: ${title}`}
      className="relative block w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-brown-deep group cursor-pointer"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbnail}
        alt=""
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brown-deep/70 via-brown-deep/10 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
          <svg className="w-8 h-8 text-brown-deep ml-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 text-left">
        <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold-light bg-brown-deep/60 rounded-full px-3 py-1">
          Latest Sermon
        </span>
      </div>
    </button>
  );
}
