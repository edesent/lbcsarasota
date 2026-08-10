import AnimateOnScroll from "./AnimateOnScroll";
import ServiceCountdown from "./ServiceCountdown";
import SermonPlayer from "./SermonPlayer";
import { getRecentLivestreams, youtube } from "@/lib/youtube";

export default async function LatestSermon() {
  const recentVideos = await getRecentLivestreams(15);
  const latest = recentVideos[0];

  return (
    <section id="sermon" className="py-24 md:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
            Livestream &amp; Messages
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug">
            Watch <em className="text-brown-light italic">Online</em>
          </h2>
        </div>
        <div className="mb-12 md:mb-14">
          <ServiceCountdown />
        </div>
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <AnimateOnScroll>
            {latest ? (
              <SermonPlayer
                videoId={latest.id}
                title={latest.title}
                thumbnail={latest.thumbnail}
              />
            ) : (
              <a
                href={youtube.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-video rounded-2xl overflow-hidden shadow-xl bg-brown-deep group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brown to-brown-deep" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(62,186,227,0.18),transparent_70%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform mb-4">
                    <svg className="w-8 h-8 text-brown-deep ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white/80 text-sm">
                    Watch our services on YouTube
                  </p>
                </div>
              </a>
            )}
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div>
              {latest ? (
                <div className="mb-6">
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-gold-dark mb-1">
                    {latest.published}
                  </p>
                  <p className="font-serif text-xl font-semibold text-text-dark leading-snug">
                    {latest.title}
                  </p>
                </div>
              ) : null}

              <p className="text-text-body leading-relaxed mb-8">
                Catch the most recent message and our full library of sermons on the sermons page —
                updated automatically each week. We&rsquo;d also love to have you join us in person.
              </p>
              <a
                href="/messages"
                className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Watch Sermons
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
