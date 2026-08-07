import AnimateOnScroll from "./AnimateOnScroll";
import PlanVisitModal from "./PlanVisitModal";

const services = [
  {
    day: "Sunday",
    title: "Small Groups",
    time: "9:00 AM",
    detail: "Age-appropriate groups for children, teens, and adults",
  },
  {
    day: "Sunday",
    title: "Morning Worship",
    time: "10:00 AM",
    detail: "Congregational hymns, special music, and preaching from the Bible",
  },
  {
    day: "Wednesday",
    title: "Bible Study, Teens & kids4Truth",
    time: "7:00 PM",
    detail: "Adult Bible study with dedicated ministries for teens and children",
  },
];

const expectations = [
  {
    title: "A Warm Welcome",
    body: "Greeters meet you at the door, the Welcome Center has an information packet for you, and an usher will help you find a seat. You'll never be singled out or put on the spot.",
  },
  {
    title: "Bible Preaching",
    body: "Hymn singing, special music, and clear preaching straight from the Bible, followed by an invitation for anyone who'd like prayer.",
  },
  {
    title: "Come As You Are",
    body: "There's no dress code at Liberty. A nursery is available for ages 2 and under, and the offering is our gift to guests — never expected.",
  },
];

export default function ServiceTimes() {
  return (
    <section id="services" className="py-24 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              Plan Your Visit
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug">
              Join Us This <em className="text-brown-light italic">Week</em>
            </h2>
            <p className="text-text-body mt-3 max-w-2xl mx-auto">
              At Liberty Baptist you&rsquo;ll find a church family that loves the Lord and loves
              people. Here&rsquo;s when we gather at 4249 Bahia Vista Street &mdash; and what to
              expect when you visit.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Service times */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 100}>
              <div className="h-full p-7 bg-warm-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-cream-dark">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-2">
                  {s.day}
                </p>
                <h3 className="font-serif text-xl font-semibold text-text-dark mb-1">
                  {s.title}
                </h3>
                <p className="font-serif text-3xl font-bold text-brown-light mb-3">
                  {s.time}
                </p>
                <p className="text-sm text-text-light leading-relaxed">{s.detail}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* What to expect — compact supporting row */}
        <AnimateOnScroll delay={200}>
          <div className="mt-10 grid sm:grid-cols-3 gap-x-8 gap-y-6 rounded-2xl border border-cream-dark bg-warm-white px-8 py-9">
            {expectations.map((item, i) => (
              <div key={item.title} className="flex gap-4">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold-dark font-serif font-bold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-text-dark leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-body leading-relaxed mt-1">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <div className="text-center mt-12">
            <PlanVisitModal variant="primary" className="px-9 py-3.5" label="Let Us Know You’re Coming" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
