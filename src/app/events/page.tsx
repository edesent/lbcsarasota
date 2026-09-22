import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import { weeklyEvents, type ChurchEvent } from "@/lib/events";

export const metadata: Metadata = {
  title: "Church Calendar",
  description:
    "Service times, weekly gatherings, and ministries at Liberty Baptist Church in Sarasota, Florida.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Church Calendar | Liberty Baptist Church",
    description: "Weekly gatherings and ministries at Liberty Baptist Church.",
    url: "/events",
    type: "website",
    images: ["/events/cb1c9990-fc72-4144-b8ae-43129a92665f.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Church Calendar | Liberty Baptist Church",
    description: "Weekly gatherings and ministries at Liberty Baptist Church.",
    images: ["/events/cb1c9990-fc72-4144-b8ae-43129a92665f.png"],
  },
};

// To show a live Google Calendar instead of (or above) the lists, paste the
// calendar's embed src here, e.g.
//   "https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America%2FNew_York"
// Leave it "" to show the schedule lists below.
const GCAL_EMBED_SRC = "";

const octoberEvents: (ChurchEvent & { date: string })[] = [
  { date: "2026-10-03", when: "Saturday, October 3", title: "Outreach Ministry", detail: "9:30 AM" },
  { date: "2026-10-04", when: "Sunday, October 4", title: "Mission Conference", detail: "Evangelist Mike Pelletier; Potluck Missions Breakfast at 9:00 AM" },
  { date: "2026-10-06", when: "Tuesday, October 6", title: "LBA Away Game vs. Sarasota Heat", detail: "4:00 PM" },
  { date: "2026-10-07", when: "Wednesday, October 7", title: "Missionary John Gardner — Amazing Grace Mission", detail: "Dinner at 5:30 PM; LBA Fundraiser; Deacons’ Meeting" },
  { date: "2026-10-08", when: "Thursday, October 8", title: "LBA Chapel — Missionary John Gardner", detail: "11:30 AM" },
  { date: "2026-10-10", when: "Saturday, October 10", title: "Outreach Ministry", detail: "9:30 AM" },
  { date: "2026-10-11", when: "Sunday, October 11", title: "Mission Conference — Commitment Sunday", detail: "New missionary James Dare to the Military & Servicemen; International Potluck Luncheon" },
  { date: "2026-10-14", when: "Wednesday, October 14", title: "Church Meeting", detail: "Dinner at 5:30 PM; LBA Fundraiser" },
  { date: "2026-10-15", when: "Thursday, October 15", title: "LBA Chapel — Pensacola Christian College", detail: "11:30 AM" },
  { date: "2026-10-16", when: "Friday, October 16", title: "LBA Away Game vs. Faith", detail: "4:00 PM" },
  { date: "2026-10-17", when: "Saturday, October 17", title: "Outreach Ministry", detail: "9:30 AM" },
  { date: "2026-10-21", when: "Wednesday, October 21", title: "Pastor Ethan Green Speaking", detail: "Dinner at 5:30 PM; LBA Fundraiser" },
  { date: "2026-10-23", when: "Friday, October 23", title: "LBA Away Game vs. East Bay", detail: "4:00 PM" },
  { date: "2026-10-24", when: "Saturday, October 24", title: "Outreach Ministry", detail: "9:30 AM" },
  { date: "2026-10-25", when: "Sunday, October 25", title: "Outreach Ministry Trunk or Treat", detail: "4:30–6:30 PM" },
  { date: "2026-10-28", when: "Wednesday, October 28", title: "LBA Fundraiser", detail: "Dinner at 5:30 PM" },
  { date: "2026-10-31", when: "Saturday, October 31", title: "Outreach Ministry", detail: "9:30 AM; Birthday Party for Martha Jackson at Der Dutchman, 10:00 AM" },
];

function getUpcomingEvents<T extends ChurchEvent & { date: string }>(events: T[]) {
  const today = new Date();
  const easternToday = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(today);

  return events.filter((event) => event.date >= easternToday);
}

function EventList({ items }: { items: ChurchEvent[] }) {
  return (
    <div className="divide-y divide-cream-dark border-y border-cream-dark">
      {items.map((e) => (
        <div key={e.title} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-5">
          <p className="sm:w-60 flex-shrink-0 text-xs font-bold tracking-[0.16em] uppercase text-gold-dark">
            {e.when}
          </p>
          <div className="sm:flex-grow">
            <h3 className="font-serif text-xl font-semibold text-text-dark leading-tight">
              {e.title}
            </h3>
            {e.detail && <p className="text-sm text-text-body mt-0.5">{e.detail}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function EventsPage() {
  const upcomingSeptemberEvents = getUpcomingEvents(septemberEvents);

  return (
    <>
      <Navbar />
      <main>
        <div className="bg-blue overflow-hidden">
          <img
            src="/events/cb1c9990-fc72-4144-b8ae-43129a92665f.png"
            alt="Liberty Baptist Church Events"
            className="w-full h-auto block"
          />
        </div>

        <section className="py-24 bg-warm-white">
          <div className="max-w-5xl mx-auto px-6">
            {GCAL_EMBED_SRC ? (
              <div className="rounded-2xl border border-cream-dark shadow-sm overflow-hidden bg-white mb-16">
                <iframe
                  title="Liberty Baptist Church Calendar"
                  src={GCAL_EMBED_SRC}
                  className="w-full h-[700px] border-0"
                  loading="lazy"
                />
              </div>
            ) : null}

            <h2 className="font-serif text-3xl font-bold text-text-dark mb-8">
              September 2026 Events
            </h2>
            <EventList items={upcomingSeptemberEvents} />

            <h2 className="font-serif text-3xl font-bold text-text-dark mt-16 mb-8">
              Weekly Gatherings
            </h2>
            <EventList items={weeklyEvents} />

            <div className="mt-16 p-8 bg-cream rounded-2xl border border-cream-dark text-center">
              <h3 className="font-serif text-2xl font-bold text-text-dark mb-3">
                Special Events &amp; Announcements
              </h3>
              <p className="text-text-body leading-relaxed mb-6 max-w-2xl mx-auto">
                Retreats, fellowships, baby showers, holiday services, and other special events are
                announced from the pulpit and on our Facebook page. Follow along so you never miss
                what&rsquo;s happening in the church family — and call the office anytime for the
                most current calendar.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://facebook.com/LBCsarasota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  Follow on Facebook
                </a>
                <a
                  href="tel:+19413718239"
                  className="inline-block text-brown-light font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light/40 hover:border-brown-light transition-all"
                >
                  Call (941) 371-8239
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
