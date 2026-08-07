import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const ministries = [
  {
    label: "Children",
    detail: "Nursery, Junior Church, Small Groups, and kids4Truth help children know God's Word and grow in faith.",
  },
  {
    label: "Teens",
    detail: "Bible teaching, strong friendships, activities, conferences, and camps for middle and high school students.",
  },
  {
    label: "Small Groups",
    detail: "Age-appropriate groups for children, teens, and adults every Sunday at 9:00 AM.",
  },
  {
    label: "Music",
    detail: "Congregational hymns, choir, instrumentalists, and special music in a reverent worship setting.",
  },
  {
    label: "Liberty Baptist Academy",
    detail: "Distinctively Christian education for families seeking Biblical instruction, character, and academic growth.",
  },
  {
    label: "Church Family",
    detail: "Fellowships, outreach events, service opportunities, and meaningful relationships beyond the weekly services.",
  },
];

export default function Connect() {
  return (
    <section id="groups" className="py-20 md:py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-12 md:mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              Ministries for Every Age
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark leading-snug">
              Find Your Place at <em className="text-brown-light italic">Liberty.</em>
            </h2>
            <p className="text-text-body mt-4 max-w-2xl mx-auto leading-relaxed">
              From children to senior adults, Liberty offers practical ways to learn Scripture, build authentic relationships, and serve together.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {ministries.map((ministry, i) => (
            <AnimateOnScroll key={ministry.label} delay={i * 70}>
              <div className="h-full p-7 bg-cream rounded-2xl border border-cream-dark shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <h3 className="font-serif text-xl font-semibold text-text-dark mb-2 leading-tight">
                  {ministry.label}
                </h3>
                <p className="text-sm text-text-body leading-relaxed">{ministry.detail}</p>
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
              Explore All Ministries
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
