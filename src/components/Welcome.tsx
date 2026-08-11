import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

function getYearsServing() {
  const founded = { year: 1978, month: 8, day: 6 };
  const today = new Date();
  let years = today.getFullYear() - founded.year;
  const beforeAnniversary =
    today.getMonth() + 1 < founded.month ||
    (today.getMonth() + 1 === founded.month && today.getDate() < founded.day);

  if (beforeAnniversary) years -= 1;
  return years;
}

export default function Welcome() {
  const yearsServing = getYearsServing();

  return (
    <section
      id="welcome"
      className="relative z-10 -mt-28 md:-mt-44 bg-warm-white rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-24px_50px_rgba(11,39,64,0.25)] pt-32 md:pt-40 pb-24 md:pb-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Text */}
          <AnimateOnScroll>
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                A Warm Welcome
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark leading-snug mb-6">
                Come As You Are &mdash; <em className="text-brown-light italic">You&rsquo;re Family Here.</em>
              </h2>
              <p className="text-lg text-text-body leading-relaxed mb-5">
                You don&rsquo;t have to know anybody, dress a certain way, or know your way
                around a Bible to fit in here. We sing the great hymns of the faith, we open
                the Scriptures and explain them plainly, and we&rsquo;ll welcome you the moment
                you walk through the doors.
              </p>
              <p className="text-lg text-text-body leading-relaxed mb-8">
                Our church family is led by <strong className="text-text-dark font-semibold">Pastor
                Anthony Aiken</strong>, who joined Liberty Baptist Church in 2026.
                Whether you&rsquo;re exploring faith for the very first time or looking for a
                church home after years away, there&rsquo;s a warm seat waiting for you this
                Sunday &mdash; and nobody will put you on the spot.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/plan-your-visit" className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-brown hover:-translate-y-0.5 transition-all">Plan Your Visit</Link>
                <Link
                  href="/about-us#pastor"
                  className="inline-block text-brown-light font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light/40 hover:border-brown-light hover:-translate-y-0.5 transition-all"
                >
                  Meet Our Pastor
                </Link>
              </div>

              <p className="mt-8 text-sm text-text-light">
                <span className="font-semibold text-gold-dark">Est. 1978</span> &middot; Founded by
                Dr. Gary Jackson &middot; Serving Sarasota for {yearsServing} years
              </p>
            </div>
          </AnimateOnScroll>

          {/* Photo — the Aiken family */}
          <AnimateOnScroll delay={150}>
            <figure className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/pastor-family.jpg"
                  alt="Pastor Anthony and Alaina Aiken and their family"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <figcaption className="absolute -bottom-4 left-4 right-4 md:left-6 md:right-auto bg-brown-deep text-white rounded-xl px-5 py-3 shadow-lg">
                <p className="font-serif text-lg font-semibold leading-tight">The Aiken Family</p>
                <p className="text-xs tracking-[0.15em] uppercase text-gold-light mt-0.5">
                  Our Pastor &amp; His Family
                </p>
              </figcaption>
            </figure>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
