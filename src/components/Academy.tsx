import AnimateOnScroll from "./AnimateOnScroll";

export default function Academy() {
  return (
    <section id="academy" className="py-24 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="relative overflow-hidden rounded-3xl bg-warm-white border border-cream-dark shadow-sm">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-gold via-gold-light to-gold" />

            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center p-9 md:p-12 lg:p-14">
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                  Our School
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-6">
                  Liberty Baptist Academy
                </h2>
                <p className="text-lg text-text-body leading-relaxed mb-7">
                  Right here on our campus, Liberty Baptist Academy gives Sarasota families a
                  Christian education that&rsquo;s small on purpose. Every student is known,
                  every student is challenged, and the Bible isn&rsquo;t a class period &mdash;
                  it&rsquo;s the foundation of the whole school day.
                </p>
                <a
                  href="/ministries#academy"
                  className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  Learn More
                </a>
              </div>

              <figure className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/academy-gym.jpg"
                  alt="Students at Liberty Baptist Academy"
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
