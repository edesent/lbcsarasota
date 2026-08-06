import AnimateOnScroll from "./AnimateOnScroll";

type Pillar = {
  label: string;
  photo: string;
  alt: string;
  detail: string;
};

/* The church's own three pillars, taken from their banner artwork. */
const pillars: Pillar[] = [
  {
    label: "Biblical Preaching",
    photo: "/pastor-preaching.jpg",
    alt: "Pastor Anthony Aiken preaching at Liberty Baptist Church",
    detail:
      "Pastor Aiken preaches expository messages — working straight through the Scriptures a passage at a time, explaining what the text says and what it means for Monday morning. You'll always know where we are and why it matters.",
  },
  {
    label: "Compassionate Community",
    photo: "/congregation.jpg",
    alt: "The Liberty Baptist Church family gathered for a Sunday service",
    detail:
      "Liberty is small enough that you'll be known by name and big enough that there's something for everyone in your family. People here carry each other's burdens — and they'll carry yours.",
  },
  {
    label: "Reverent Worship",
    photo: "/choir.jpg",
    alt: "The choir leading worship at Liberty Baptist Church",
    detail:
      "Congregational hymns, a choir, and special music in a conservative, reverent style. The volume stays where you can hear the person next to you — and hear yourself worship.",
  },
];

export default function Distinctives() {
  return (
    <section id="distinctives" className="relative py-24 md:py-28 bg-brown-deep overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(62,186,227,0.16),transparent_62%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-gold-light mb-3">
              What You&rsquo;ll Find Here
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-snug">
              Simple, Steady, and{" "}
              <em className="text-gold-light italic">Worth Driving To.</em>
            </h2>
            <p className="text-white/70 mt-5 leading-relaxed">
              You don&rsquo;t need a church background to feel at home at Liberty. Here&rsquo;s
              what Sunday actually looks like.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6 md:gap-7">
          {pillars.map((p, i) => (
            <AnimateOnScroll key={p.label} delay={i * 120}>
              <div className="h-full flex flex-col rounded-2xl overflow-hidden bg-white/[0.05] border border-white/10 shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.photo}
                    alt={p.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-deep/85 via-brown-deep/10 to-transparent" />
                  <h3 className="absolute bottom-0 left-0 right-0 px-6 pb-5 font-serif text-2xl font-semibold text-white leading-tight drop-shadow">
                    {p.label}
                  </h3>
                </div>
                <div className="flex-grow px-6 py-6">
                  <p className="text-white/70 leading-relaxed">{p.detail}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
