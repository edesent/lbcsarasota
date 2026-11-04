import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const upcomingEvents = [
  { label: "Christmas Village Meeting", detail: "Sunday, November 15 — following the morning service." },
  { label: "Outreach Ministry", detail: "Saturday, November 7 and 14 at 9:30 AM. No outreach November 21 or 28." },
  { label: "Thanksgiving Week", detail: "No Wednesday service November 25; church office closed and LBA on Thanksgiving break November 23–27." },
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
                  src="/events/att-lasdiary62rrgqnz2mbjfvol-eypilbox7oc3b-fif0.jpeg"
                  alt="Thanksgiving Praise Service at Liberty Baptist Church"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-deep/65 via-brown-deep/10 to-transparent" />
              </div>

              <div className="p-9 md:p-14 flex flex-col justify-center">
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-light mb-4">
                  Sunday, November 22 · 10:00 AM
                </span>
                <h3 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
                  Thanksgiving Praise Service
                </h3>
                <p className="font-serif text-xl md:text-2xl italic text-gold-light mb-5">
                  A Special Sunday of Thanksgiving
                </p>
                <p className="text-white/78 leading-relaxed mb-7 max-w-2xl">
                  Join us for a special morning of praise and thanksgiving as we give thanks to God together. There will be no Small Groups that morning.
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-white/80 mb-8">
                  <span className="rounded-full border border-white/20 px-4 py-2">November 22</span>
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