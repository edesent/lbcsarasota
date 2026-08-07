import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const programs = [
  {
    eyebrow: "Wednesdays · 7:00 PM",
    title: "kids4Truth",
    detail:
      "A Bible-centered Wednesday program that helps children learn what the Bible teaches and understand why they believe it.",
  },
  {
    eyebrow: "Teens",
    title: "Student Ministry",
    detail:
      "Bible teaching, friendships, activities, camps, and conferences that help middle and high school students grow in Christ.",
  },
  {
    eyebrow: "Sundays · 9:00 AM",
    title: "Small Groups",
    detail:
      "Age-appropriate groups for children, teens, and adults with practical Bible teaching and opportunities to build real relationships.",
  },
  {
    eyebrow: "Christian Education",
    title: "Liberty Baptist Academy",
    detail:
      "Distinctively Christian education built around Biblical truth, individual academic progress, character, and a caring school community.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              Programs at Liberty
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark leading-snug">
              There&rsquo;s a Place for <em className="text-brown-light italic">Your Family.</em>
            </h2>
            <p className="text-text-body mt-4 leading-relaxed">
              From children and teens to adults and Christian education, our weekly programs are designed to help people know God&rsquo;s Word, build relationships, and grow in faith.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {programs.map((program, i) => (
            <AnimateOnScroll key={program.title} delay={i * 80}>
              <div className="h-full p-7 bg-warm-white rounded-2xl border border-cream-dark shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <p className="text-xs font-bold tracking-[0.16em] uppercase text-gold-dark mb-2">
                  {program.eyebrow}
                </p>
                <h3 className="font-serif text-xl font-semibold text-text-dark mb-3 leading-tight">
                  {program.title}
                </h3>
                <p className="text-sm text-text-body leading-relaxed">{program.detail}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={250}>
          <div className="text-center mt-10">
            <Link
              href="/ministries"
              className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full hover:bg-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Explore Programs &amp; Ministries
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
