import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const upcomingEvents = [
  {
    label: "Missions Conference",
    detail:
      "A focused time to hear from missionaries, learn what God is doing around the world, and renew our commitment to the Great Commission.",
  },
  {
    label: "The Liberty Car Show",
    detail:
      "Our annual community event brings classic cars, families, food, and neighbors together on the Liberty campus.",
  },
];

export default function SignatureEvents() {
  return (
    <section id="events" className="py-24 md:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              What&rsquo;s Next at Liberty
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark leading-snug">
              Join Us for Our <em className="text-brown-light italic">Next Big Day.</em>
            </h2>
            <p className="text-text-body mt-4 leading-relaxed">
              We&rsquo;d love to have you with us. Here&rsquo;s the next special Sunday on the calendar at Liberty.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="relative overflow-hidden rounded-3xl bg-brown-deep shadow-xl mb-8">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[320px] lg:min-h-[470px] overflow-hidden bg-brown-deep">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/2026-07-12-21-34-45.jpeg"
                  alt="Anniversary Sunday and Friend Day at Liberty Baptist Church"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-deep/65 via-brown-deep/10 to-transparent" />
              </div>

              <div className="p-9 md:p-14 flex flex-col justify-center">
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-light mb-4">
                  Sunday, September 13 · 10:00 AM
                </span>
                <h3 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
                  Anniversary Sunday &amp; Friend Day
                </h3>
                <p className="font-serif text-xl md:text-2xl italic text-gold-light mb-5">
                  Celebrating 48 Years of God&rsquo;s Faithfulness
                </p>
                <p className="text-white/78 leading-relaxed mb-7 max-w-2xl">
                  Join us as we celebrate Liberty Baptist Church&rsquo;s 48th anniversary, welcome friends from our community, and honor the faithful ministry of our founding pastor, Dr. Gary Jackson. We&rsquo;ll enjoy a special morning of worship, preaching, memories, and fellowship together.
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-white/80 mb-8">
                  <span className="rounded-full border border-white/20 px-4 py-2">Special Service</span>
                  <span className="rounded-full border border-white/20 px-4 py-2">10:00 AM</span>
                  <span className="rounded-full border border-white/20 px-4 py-2">Sarasota, Florida</span>
                </div>
                <a
                  href="#services"
                  className="inline-block self-start bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  Plan Your Visit
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12">
          {upcomingEvents.map((event, i) => (
            <AnimateOnScroll key={event.label} delay={i * 90}>
              <div className="h-full p-7 bg-cream rounded-2xl border border-cream-dark shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-gold-dark mb-2">
                  Coming Up
                </p>
                <h3 className="font-serif text-xl font-semibold text-text-dark mb-2 leading-tight">
                  {event.label}
                </h3>
                <p className="text-sm text-text-body leading-relaxed">{event.detail}</p>
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
