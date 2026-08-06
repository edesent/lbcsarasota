import AnimateOnScroll from "./AnimateOnScroll";

type Pillar = {
  label: string;
  detail: string;
  icon: React.ReactNode;
};

const icon = (path: React.ReactNode) => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {path}
  </svg>
);

const pillars: Pillar[] = [
  {
    label: "Preaching That Explains the Bible",
    detail:
      "We work through the Scriptures a passage at a time, so you always know where we are and why it matters. No hype, no guesswork — just the Bible explained plainly and applied to real life.",
    icon: icon(
      <>
        <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3H10a2 2 0 0 1 2 2v14a1.5 1.5 0 0 0-1.5-1.5H4.5A2.5 2.5 0 0 1 2 15V5.5Z" />
        <path d="M22 5.5A2.5 2.5 0 0 0 19.5 3H14a2 2 0 0 0-2 2v14a1.5 1.5 0 0 1 1.5-1.5h6A2.5 2.5 0 0 0 22 15V5.5Z" />
      </>
    ),
  },
  {
    label: "Music You Can Sing",
    detail:
      "Congregational hymns, a choir, and special music in a conservative, reverent style. The volume stays where you can hear the person next to you — and hear yourself worship.",
    icon: icon(
      <>
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </>
    ),
  },
  {
    label: "A Church Family, Not a Crowd",
    detail:
      "Liberty is small enough that you'll be known by name and big enough that there's something for everyone in your family. People here carry each other's burdens — and they'll carry yours.",
    icon: icon(
      <>
        <path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1l1.7 1.7L12 21.5l7.1-7.1 1.7-1.7a5 5 0 0 0 0-7.1Z" />
      </>
    ),
  },
];

export default function Distinctives() {
  return (
    <section id="distinctives" className="relative py-24 md:py-28 bg-brown-deep overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(43,179,214,0.16),transparent_62%)]" />
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

        <div className="grid md:grid-cols-3 gap-10 md:gap-0">
          {pillars.map((p, i) => (
            <AnimateOnScroll key={p.label} delay={i * 120}>
              <div
                className={`h-full md:px-9 ${
                  i > 0 ? "md:border-l md:border-white/12" : ""
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-gold/15 text-gold-light flex items-center justify-center mb-6">
                  {p.icon}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-white leading-tight mb-3">
                  {p.label}
                </h3>
                <p className="text-white/70 leading-relaxed">{p.detail}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
