import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const stats = [
  { value: "30+", label: "Missionaries Supported" },
  { value: "200+", label: "Countries & Territories Reached" },
  { value: "1978", label: "Sending the Gospel Since" },
];

export default function Missions() {
  return (
    <section id="missions" className="py-24 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brown via-brown-deep to-burgundy-dark shadow-xl">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[320px] lg:min-h-[560px] overflow-hidden bg-brown-deep">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/2026-06-22-11-59-28.jpeg"
                  alt="Liberty Baptist Church Missions Conference with international flags in the sanctuary"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-deep/55 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-brown-deep/30" />
              </div>

              <div className="relative p-9 md:p-12 lg:p-14 flex flex-col justify-center">
                <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />
                <div className="relative">
                  <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-gold-light mb-3">
                    World Missions
                  </span>
                  <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
                    Taking the Gospel to <em className="text-gold-light italic">the World.</em>
                  </h2>
                  <p className="text-white/78 leading-relaxed mb-5">
                    Liberty Baptist Church is committed to fulfilling the Great Commission. Through faithful missionary partnerships, our church helps take the gospel into <strong className="text-white font-semibold">more than 200 countries and territories</strong> around the world.
                  </p>
                  <p className="text-white/70 leading-relaxed mb-7">
                    We support missionaries financially and in prayer, regularly hear from missionaries, and gather for a Missions Conference that keeps the needs of the world before our church family.
                  </p>
                  <p className="font-serif italic text-white/60 text-sm mb-8">
                    &ldquo;Go ye into all the world, and preach the gospel to every creature.&rdquo;
                    <span className="block mt-1">&mdash; Mark 16:15</span>
                  </p>
                  <Link
                    href="/missions"
                    className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg transition-all"
                  >
                    Explore World Missions
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 px-9 md:px-14 py-9">
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
