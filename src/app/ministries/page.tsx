import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "Programs & Ministries for Every Age",
  description:
    "Explore ministries for children, teens, adults, and families at Liberty Baptist Church in Sarasota, Florida — including Small Groups, kids4Truth, teen ministry, music, and Liberty Baptist Academy.",
  alternates: { canonical: "/ministries" },
  openGraph: {
    title: "Ministries | Liberty Baptist Church Sarasota",
    description: "A place to grow, connect, and serve at every stage of life.",
    url: "/ministries",
    type: "website",
  },
};

type Ministry = {
  title: string;
  eyebrow: string;
  photo: string;
  alt: string;
  body: string;
  external?: { href: string; label: string };
  internal?: { href: string; label: string };
};

const ministries: Ministry[] = [
  {
    title: "Small Groups",
    eyebrow: "Sundays at 9:00 AM",
    photo: "/congregation.jpg",
    alt: "Liberty Baptist Church family gathered together",
    body: "Sunday mornings begin with age-appropriate Small Groups for children, teens, and adults. These smaller settings make it easier to learn the Bible, ask questions, build friendships, and grow together.",
  },
  {
    title: "Children's Ministry",
    eyebrow: "Nursery · Junior Church · kids4Truth",
    photo: "/academy-event.jpg",
    alt: "Children participating in an event at Liberty Baptist Church",
    body: "We want children to know God's Word, understand what they believe, and learn why they believe it. Nursery care is available, and Junior Church is offered during the Sunday morning service. Children are dismissed from the auditorium following the music service, and parents can pick them up in the education building after the morning service. On Wednesdays, kids4Truth uses memorable, age-appropriate Bible teaching to help children build a strong doctrinal foundation.",
    external: {
      href: "https://learnabout.kids4truth.com/",
      label: "Learn About kids4Truth",
    },
  },
  {
    title: "Teen Ministry",
    eyebrow: "Bible Teaching · Activities · Camps",
    photo: "/youth-conference.jpg",
    alt: "Teenagers from Liberty Baptist Church attending a youth conference",
    body: "Liberty has an active teen ministry where students study Scripture, develop strong Christian friendships, serve together, and participate in activities, conferences, and camps throughout the year. More than 30 Liberty teens attended Teen Extreme camp together — a picture of the strong student community God has given our church.",
  },
  {
    title: "Music Ministry",
    eyebrow: "Reverent Worship",
    photo: "/choir.jpg",
    alt: "Liberty Baptist Church choir singing",
    body: "Music at Liberty is designed to draw attention to Christ and prepare hearts for God's Word. Congregational hymns, choir music, instrumentalists, and special music all have a place in our worship services.",
  },
  {
    title: "Liberty Baptist Academy",
    eyebrow: "Christian Education",
    photo: "/academy-gym.jpg",
    alt: "Students at Liberty Baptist Academy",
    body: "Liberty Baptist Academy is a ministry of Liberty Baptist Church serving families who desire a distinctly Christian education. Our school combines individual academic progress with Biblical instruction, character development, and a caring school community.",
    internal: { href: "/#academy", label: "Explore the Academy" },
  },
  {
    title: "Church Family & Outreach",
    eyebrow: "Connect · Serve · Invite",
    photo: "/car-show.jpg",
    alt: "Community outreach event at Liberty Baptist Church",
    body: "Some of Liberty's best-known ministries happen beyond the weekly schedule. Friend Days, community events, fellowships, missions emphasis, and seasonal outreach give our church family regular opportunities to invite friends, build relationships, and share the gospel.",
    internal: { href: "/events", label: "See Upcoming Events" },
  },
];

export default function MinistriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Ministries"
          title="A Place for Every Age"
          subtitle="Grow in God's Word, build lasting relationships, and find meaningful ways to serve."
        />

        <section className="py-20 md:py-24 bg-warm-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-lg md:text-xl text-text-body leading-relaxed max-w-3xl mx-auto">
              Church is more than a service you attend. At Liberty, we want every person in your family to have a place to learn Scripture, develop authentic relationships, and become part of the life of the church.
            </p>
          </div>
        </section>

        <section className="pb-24 md:pb-28 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-7">
            {ministries.map((ministry) => (
              <article
                key={ministry.title}
                className="overflow-hidden rounded-3xl border border-cream-dark bg-cream shadow-sm"
              >
                <div className="aspect-[16/9] overflow-hidden bg-brown-deep">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ministry.photo}
                    alt={ministry.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7 md:p-9">
                  <p className="text-xs font-bold tracking-[0.18em] uppercase text-gold-dark mb-2">
                    {ministry.eyebrow}
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark mb-4">
                    {ministry.title}
                  </h2>
                  <p className="text-text-body leading-relaxed">{ministry.body}</p>

                  {ministry.external ? (
                    <a
                      href={ministry.external.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-6 text-brown-light font-semibold text-sm tracking-wide uppercase border-b-2 border-gold/60 hover:border-gold transition-colors"
                    >
                      {ministry.external.label}
                    </a>
                  ) : ministry.internal ? (
                    <Link
                      href={ministry.internal.href}
                      className="inline-block mt-6 text-brown-light font-semibold text-sm tracking-wide uppercase border-b-2 border-gold/60 hover:border-gold transition-colors"
                    >
                      {ministry.internal.label}
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-20 bg-brown-deep">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-gold-light mb-3">
              Come See for Yourself
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-5">
              There's a Place for You at Liberty.
            </h2>
            <p className="text-white/75 leading-relaxed max-w-2xl mx-auto mb-8">
              Join us Sunday at 9:00 AM for Small Groups and 10:00 AM for Morning Worship, or Wednesday at 7:00 PM for Bible Study, Teens, and kids4Truth.
            </p>
            <a
              href="/#services"
              className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full hover:bg-gold-light hover:-translate-y-0.5 transition-all"
            >
              Plan Your Visit
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
