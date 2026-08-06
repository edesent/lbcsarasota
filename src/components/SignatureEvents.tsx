import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const events = [
  {
    label: "Missions Conference",
    detail:
      "Once a year the missionaries we support come home to Liberty. Services, testimonies, and a look at what God is doing in over 100 countries.",
  },
  {
    label: "Christmas & Easter",
    detail:
      "Our biggest Sundays of the year, with special music from the choir and a service built for the friend or family member you've been wanting to bring.",
  },
  {
    label: "Fellowships & Church Family Days",
    detail:
      "Meals together, ladies' and men's events, and days on the calendar that exist for no reason except getting to know each other better.",
  },
];

export default function SignatureEvents() {
  return (
    <section id="events" className="py-24 md:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              Big Days at Liberty
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark leading-snug">
              There&rsquo;s Always Something{" "}
              <em className="text-brown-light italic">Worth Showing Up For.</em>
            </h2>
            <p className="text-text-body mt-4 leading-relaxed">
              Some of the best days at Liberty aren&rsquo;t Sundays at all. If you&rsquo;ve been
              looking for an easy first step through our doors, start with one of these.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Featured — the Car Show */}
        <AnimateOnScroll>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brown via-brown-deep to-burgundy-dark p-9 md:p-14 shadow-xl mb-6 md:mb-8">
            <div className="absolute -top-20 -right-16 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-14 items-center">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-gold-light mb-4">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 17H3v-5l2-5h14l2 5v5h-2" />
                    <path d="M5 12h14" />
                    <circle cx="7.5" cy="17" r="2" />
                    <circle cx="16.5" cy="17" r="2" />
                  </svg>
                  Our Signature Community Event
                </span>
                <h3 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                  The Liberty Car Show
                </h3>
                <p className="text-white/75 leading-relaxed mb-4">
                  Every year we open the lot, roll out the classics, and Sarasota shows up.
                  Chrome, engines, food, and hundreds of neighbors on our campus for an
                  afternoon &mdash; free to attend, free to enter, and about as easy an
                  introduction to Liberty Baptist Church as there is.
                </p>
                <p className="text-white/75 leading-relaxed">
                  Bring the car you&rsquo;ve been working on, or just bring the family and walk
                  the rows. Either way, you&rsquo;ll leave having met somebody.
                </p>
              </div>

              <div className="rounded-2xl bg-white/[0.07] border border-white/12 p-7 backdrop-blur-sm">
                <p className="font-serif text-xl font-semibold text-white leading-tight mb-3">
                  Want this year&rsquo;s date?
                </p>
                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  Dates are announced from the pulpit and on our Facebook page. Call the office
                  or follow along and we&rsquo;ll make sure you know before it rolls around.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://facebook.com/LBCsarasota"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-7 py-3.5 rounded-full hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg transition-all"
                  >
                    Follow on Facebook
                  </a>
                  <a
                    href="tel:+19413718239"
                    className="inline-block text-center text-white font-semibold text-sm tracking-wide uppercase px-7 py-3.5 rounded-full border-2 border-white/40 hover:bg-white/10 hover:border-white transition-all"
                  >
                    Call (941) 371-8239
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Supporting events */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12">
          {events.map((e, i) => (
            <AnimateOnScroll key={e.label} delay={i * 90}>
              <div className="h-full p-7 bg-cream rounded-2xl border border-cream-dark shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <h3 className="font-serif text-xl font-semibold text-text-dark mb-2 leading-tight">
                  {e.label}
                </h3>
                <p className="text-sm text-text-body leading-relaxed">{e.detail}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={200}>
          <div className="text-center">
            <Link
              href="/events"
              className="inline-block text-brown-light font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-brown-light/40 hover:border-brown-light hover:-translate-y-0.5 transition-all"
            >
              See the Full Church Calendar
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
