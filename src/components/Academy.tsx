import AnimateOnScroll from "./AnimateOnScroll";

const highlights = [
  {
    title: "Accelerated Christian Education",
    text: "Students work at their own pace through the A.C.E. curriculum with caring faculty guiding their academic progress.",
  },
  {
    title: "Step Up For Students",
    text: "Liberty Baptist Academy accepts Step Up For Students scholarship funding to help make Christian education accessible to Florida families.",
  },
  {
    title: "Hawks Athletics",
    text: "Students have opportunities to compete, grow, and build school spirit through the LBA Hawks athletic program.",
  },
];

export default function Academy() {
  return (
    <section id="academy" className="py-24 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="relative overflow-hidden rounded-3xl bg-warm-white border border-cream-dark shadow-sm">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-gold via-gold-light to-gold" />
            <div className="p-9 md:p-12 lg:p-14">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                  Christian Education
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-8">
                  Liberty Baptist Academy
                </h2>
              </div>

              <figure className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl aspect-[16/9] mb-9">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/2026-05-22-09-15-00.jpeg"
                  alt="Students at Liberty Baptist Academy"
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-text-body leading-relaxed mb-10">
                  Right here on our campus, Liberty Baptist Academy gives Sarasota families a
                  Christian education that&rsquo;s small on purpose. Every student is known,
                  every student is challenged, and the Bible isn&rsquo;t a class period &mdash;
                  it&rsquo;s the foundation of the whole school day.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-cream-dark bg-cream/40 p-6 text-center"
                  >
                    <h3 className="font-serif text-lg font-semibold text-text-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-body leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a
                  href="/academy"
                  className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}