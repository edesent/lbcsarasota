import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const ministries = [
  {
    label: "Small Groups",
    photo: "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/2RukBFfOmc2KfYONvFdXt4lZKwO3KUim/2026-07-12%2009.48.26-3-qAhFZnI6KcF0vUTGepQJT7ZiBS2oNv.jpeg",
    alt: "Three ladies visiting together in the Liberty Baptist Church lobby",
    detail: "Age-appropriate groups for children, teens, and adults every Sunday at 9:00 AM, with practical Bible teaching and opportunities to build real relationships.",
  },
  {
    label: "Children",
    photo: "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/XrYVvk7MNGsCQv1ulb6kNVlzBifr8YYI/2026-07-01%2019.29.20-iZFP8cVrXgR4CpmR6CtiLZhZdwjTEp.jpeg",
    alt: "Children learning in a jungle-themed class at Liberty Baptist Church",
    detail: "Nursery, Small Groups, Junior Church, and kids4Truth help children know God's Word and grow in faith. Junior Church is available during the Sunday morning service.",
  },
  {
    label: "Teens",
    photo: "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/7f-QQXlFH-0IPAQ691QyqkytCPDbgK5g/2026-06-25%2014.43.55-2-JJDP28Vese3qmIyT4RPSPRYLaWFSdB.jpeg",
    alt: "Liberty Baptist Church teens together at a roller skating activity",
    detail: "Bible teaching, strong friendships, activities, conferences, and camps for middle and high school students.",
  },
  {
    label: "Music",
    photo: "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/r0-FP3_AZuxUkuXgN5-n4CEnfgaNl0Y8/2026-07-12%2010.12.46-2-arb7MjpQlkfGxntiAFH075VaidO0Dk.jpeg",
    alt: "Brian playing tuba as part of the music ministry at Liberty Baptist Church",
    detail: "Congregational hymns, choir, instrumentalists, and special music in a reverent worship setting.",
  },
  {
    label: "Liberty Baptist Academy",
    photo: "/images/2026-06-22-12-03-57-1.jpeg",
    alt: "Liberty Baptist Academy students and school life",
    detail: "Distinctively Christian education for families seeking Biblical instruction, character, and academic growth.",
  },
  {
    label: "Church Family",
    photo: "/sanctuary.jpg",
    alt: "The full Liberty Baptist Church auditorium during a service",
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
              There&rsquo;s a Place for <em className="text-brown-light italic">Your Family.</em>
            </h2>
            <p className="text-text-body mt-4 max-w-2xl mx-auto leading-relaxed">
              From children and teens to adults and senior adults, Liberty offers practical ways to learn Scripture, build authentic relationships, and serve together.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {ministries.map((ministry, i) => (
            <AnimateOnScroll key={ministry.label} delay={i * 70}>
              <div className="h-full overflow-hidden bg-cream rounded-2xl border border-cream-dark shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="aspect-[16/9] overflow-hidden bg-brown-deep">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ministry.photo}
                    alt={ministry.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-xl font-semibold text-text-dark mb-2 leading-tight">
                    {ministry.label}
                  </h3>
                  <p className="text-sm text-text-body leading-relaxed">{ministry.detail}</p>
                </div>
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
