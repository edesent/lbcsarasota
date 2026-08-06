import AnimateOnScroll from "./AnimateOnScroll";

const stats = [
  { value: "30+", label: "Missionaries Supported" },
  { value: "100+", label: "Countries Reached" },
  { value: "1978", label: "Sending the Gospel Since" },
];

export default function Missions() {
  return (
    <section id="missions" className="py-24 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brown via-brown-deep to-burgundy-dark p-10 md:p-16 shadow-xl">
            <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative text-center max-w-3xl mx-auto">
              <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-gold-light mb-3">
                World Missions
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
                Taking the Gospel to <em className="text-gold-light italic">the World.</em>
              </h2>
              <p className="text-white/75 leading-relaxed mb-4">
                Liberty Baptist Church partners with <strong className="text-white font-semibold">more
                than 30 missionaries representing over 100 countries</strong>, praying for and supporting
                them every single month. From Sarasota to the ends of the earth, we believe every
                person deserves to hear the good news of Jesus Christ.
              </p>
              <p className="font-serif italic text-white/60 text-sm">
                &ldquo;Go ye into all the world, and preach the gospel to every creature.&rdquo;
                <span className="block mt-1">&mdash; Mark 16:15</span>
              </p>
            </div>

            <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-serif text-4xl md:text-5xl font-bold text-gold-light">
                    {s.value}
                  </p>
                  <p className="text-xs font-bold tracking-[0.16em] uppercase text-white/60 mt-2">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
