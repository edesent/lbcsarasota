import AnimateOnScroll from "./AnimateOnScroll";

type Ministry = {
  label: string;
  detail: string;
  icon: React.ReactNode;
};

const icon = (path: React.ReactNode) => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {path}
  </svg>
);

const ministries: Ministry[] = [
  {
    label: "Nursery",
    detail: "Loving, secure care for babies and toddlers ages 2 and under during every service.",
    icon: icon(<><path d="M12 21c4.97 0 9-3.58 9-8a9 9 0 1 0-18 0c0 4.42 4.03 8 9 8Z" /><path d="M9 10h.01M15 10h.01M9.5 14a3.5 3.5 0 0 0 5 0" /></>),
  },
  {
    label: "Sunday School",
    detail: "Age-graded Bible study groups for ages 3 through 12th grade, Sundays at 9:00 AM.",
    icon: icon(<><path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2V5Z" /><path d="M18 3v16" /></>),
  },
  {
    label: "Junior Church",
    detail: "A service designed just for children ages 3–11 during Sunday morning worship.",
    icon: icon(<><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>),
  },
  {
    label: "kids4Truth & Patch the Pirate",
    detail: "Wednesday-night discipleship clubs and Sunday-evening fun that plant God's Word in young hearts.",
    icon: icon(<><path d="M12 3 4 6v5c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>),
  },
  {
    label: "Youth4Truth",
    detail: "Teens dig into the Bible, build lasting friendships, and are challenged to follow Christ.",
    icon: icon(<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" /></>),
  },
  {
    label: "Music Ministry",
    detail: "Congregational hymn singing, choir, and special music that lift up the name of the Lord.",
    icon: icon(<><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></>),
  },
];

export default function Connect() {
  return (
    <section id="groups" className="py-24 md:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-12 md:mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              From the Nursery to Adults
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark leading-snug">
              A Church for the <em className="text-brown-light italic">Whole Family.</em>
            </h2>
            <p className="text-text-body mt-4 max-w-2xl mx-auto leading-relaxed">
              There&rsquo;s a place for every member of your family at Liberty. From the youngest
              child to the oldest saint, we&rsquo;re here to help you grow in the grace and
              knowledge of the Lord Jesus Christ.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {ministries.map((m, i) => (
            <AnimateOnScroll key={m.label} delay={i * 70}>
              <div className="group h-full flex flex-col p-7 bg-cream rounded-2xl border border-cream-dark shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-brown-deep transition-colors">
                  {m.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-text-dark mb-2 leading-tight">
                  {m.label}
                </h3>
                <p className="text-sm text-text-body leading-relaxed">{m.detail}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
