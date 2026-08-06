import AnimateOnScroll from "./AnimateOnScroll";

const facts = [
  {
    label: "Accelerated Christian Education",
    detail:
      "Students work at their own pace through the A.C.E. curriculum, with ACE-trained faculty guiding every step.",
  },
  {
    label: "Abeka Kindergarten",
    detail:
      "Our youngest students start with the Abeka program — phonics, reading, and a love for learning from day one.",
  },
  {
    label: "Step Up For Students",
    detail:
      "We accept Step Up For Students scholarship funding, which puts a Christian education within reach for many Florida families.",
  },
  {
    label: "Go Hawks",
    detail:
      "LBA Hawks athletics play out of our own gym — and our flag football team are champions.",
  },
];

export default function Academy() {
  return (
    <section id="academy" className="py-24 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="relative overflow-hidden rounded-3xl bg-warm-white border border-cream-dark shadow-sm">
            {/* Sky-blue spine */}
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-gold via-gold-light to-gold" />

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 p-9 md:p-12 lg:p-14">
              {/* Copy */}
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                  Our School
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-2">
                  Liberty Baptist Academy
                </h2>
                <p className="text-sm font-semibold tracking-[0.15em] uppercase text-text-light mb-6">
                  LBA Sarasota &middot; Home of the Hawks
                </p>

                <p className="text-lg text-text-body leading-relaxed mb-5">
                  Right here on our campus, Liberty Baptist Academy gives Sarasota families a
                  Christian education that&rsquo;s small on purpose. Every student is known,
                  every student is challenged, and the Bible isn&rsquo;t a class period &mdash;
                  it&rsquo;s the foundation of the whole school day.
                </p>

                {/* Enrollment cap — the hook */}
                <div className="rounded-2xl bg-brown-deep text-white p-6 md:p-7 mb-7">
                  <div className="flex items-baseline gap-4 mb-2">
                    <p className="font-serif text-5xl font-bold text-gold-light leading-none">
                      37
                    </p>
                    <div>
                      <p className="text-xs font-bold tracking-[0.18em] uppercase text-gold-light/80">
                        Student Enrollment Cap
                      </p>
                      <p className="text-sm font-semibold text-white">
                        Small classes, on purpose.
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">
                    We cap enrollment at 37 so no child gets lost in a crowd. That means seats
                    are limited &mdash; but our waiting list is open, and spots do come
                    available. Get your family&rsquo;s name on it and we&rsquo;ll call you the
                    moment one does.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+19413718239"
                    className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
                  >
                    Join the Waiting List
                  </a>
                  <a
                    href="mailto:office@lbcsarasota.com?subject=Liberty%20Baptist%20Academy%20%E2%80%94%20Waiting%20List"
                    className="inline-block text-brown-light font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light/40 hover:border-brown-light hover:-translate-y-0.5 transition-all"
                  >
                    Email the Office
                  </a>
                </div>
              </div>

              {/* Photo + facts */}
              <div className="lg:pl-4">
                <figure className="rounded-2xl overflow-hidden shadow-md mb-7 aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/academy-gym.jpg"
                    alt="The LBA Hawks gym during a Liberty Baptist Academy event"
                    className="w-full h-full object-cover"
                  />
                </figure>

                <div className="divide-y divide-cream-dark border-y border-cream-dark">
                  {facts.map((f) => (
                    <div key={f.label} className="py-5">
                      <h3 className="font-serif text-lg font-semibold text-text-dark leading-tight mb-1">
                        {f.label}
                      </h3>
                      <p className="text-sm text-text-body leading-relaxed">{f.detail}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-text-light leading-relaxed">
                  A full Liberty Baptist Academy website is on the way. Until then, call the
                  church office at{" "}
                  <a
                    href="tel:+19413718239"
                    className="font-semibold text-brown-light hover:underline"
                  >
                    (941) 371-8239
                  </a>{" "}
                  and we&rsquo;ll walk you through tuition, scholarships, and a tour.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
