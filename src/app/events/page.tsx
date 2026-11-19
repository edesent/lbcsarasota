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

const novemberEvents: (ChurchEvent & { date: string })[] = [
  { date: "2026-11-04", when: "Wednesday, November 4", title: "Deacons’ Meeting", detail: "Church leadership meeting" },
  { date: "2026-11-07", when: "Saturday, November 7", title: "Hope Children’s Home Food Delivery", detail: "9:00 AM" },
  { date: "2026-11-07", when: "Saturday, November 7", title: "Outreach Ministry", detail: "9:30 AM" },
  { date: "2026-11-11", when: "Wednesday, November 11", title: "Deacons’ Meeting", detail: "Veterans Day" },
  { date: "2026-11-14", when: "Saturday, November 14", title: "Outreach Ministry", detail: "9:30 AM" },
  { date: "2026-11-15", when: "Sunday, November 15", title: "Christmas Village Meeting", detail: "Following the morning service" },
  { date: "2026-11-18", when: "Wednesday, November 18", title: "Church Meeting", detail: "" },
  { date: "2026-11-19", when: "Thursday, November 19", title: "Trustees’ Meeting", detail: "5:00 PM" },
  { date: "2026-11-22", when: "Sunday, November 22", title: "Thanksgiving Praise Service", detail: "10:00 AM; no Small Groups" },
  { date: "2026-11-25", when: "Wednesday, November 25", title: "No Wednesday Service", detail: "Thanksgiving week" },
  { date: "2026-11-26", when: "Thursday, November 26", title: "Thanksgiving Day", detail: "" },
];
const decemberEvents: (ChurchEvent & { date: string })[] = [
  { date: "2026-12-04", when: "Friday, December 4", title: "Teen Christmas Progressive Dinner", detail: "5:00–9:00 PM" },
  { date: "2026-12-06", when: "Sunday, December 6", title: "Pastor & Alaina’s 12th Wedding Anniversary", detail: "" },
  { date: "2026-12-09", when: "Wednesday, December 9", title: "Deacons’ Meeting", detail: "" },
  { date: "2026-12-10", when: "Thursday, December 10", title: "Pastor Troy Masterson in LBA Chapel", detail: "11:30 AM" },
  { date: "2026-12-12", when: "Saturday, December 12", title: "Outreach Ministry", detail: "9:30 AM" },
  { date: "2026-12-13", when: "Sunday, December 13", title: "Christmas Village", detail: "5:30–7:30 PM" },
  { date: "2026-12-16", when: "Wednesday, December 16", title: "Annual Church Meeting & Vote", detail: "" },
  { date: "2026-12-18", when: "Friday, December 18", title: "LBA Half Day", detail: "" },
  { date: "2026-12-18", when: "Friday, December 18", title: "Trustees’ Meeting", detail: "5:00 PM" },
  { date: "2026-12-19", when: "Saturday, December 19", title: "No Outreach Ministry", detail: "" },
  { date: "2026-12-20", when: "Sunday, December 20", title: "Christmas Service & Christmas Offering", detail: "One service at 10:00 AM" },
  { date: "2026-12-22", when: "Tuesday, December 22", title: "Pastor & Martha’s 54th Wedding Anniversary", detail: "" },
  { date: "2026-12-23", when: "Wednesday, December 23", title: "No Wednesday Service", detail: "" },
  { date: "2026-12-24", when: "Thursday, December 24", title: "Christmas Eve Candlelight Service", detail: "5:00 PM" },
  { date: "2026-12-26", when: "Saturday, December 26", title: "No Outreach Ministry", detail: "" },
  { date: "2026-12-27", when: "Sunday, December 27", title: "New Year’s Service", detail: "One service at 10:00 AM" },
  { date: "2026-12-30", when: "Wednesday, December 30", title: "No Wednesday Service", detail: "" },
];
const allDatedEvents = [...novemberEvents, ...decemberEvents];

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
  const upcomingNovemberEvents = getUpcomingEvents(novemberEvents);

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

            <div className="mb-16 overflow-hidden rounded-3xl border border-cream-dark bg-cream shadow-sm">
              <img
                src="/events/att-lasdiary62rrgqnz2mbjfvol-eypilbox7oc3b-fif0.jpeg"
                alt="Thanksgiving Praise Service — Sunday, November 22 at 10 AM"
                className="w-full h-auto block"
              />
              <div className="p-8 md:p-10">
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-gold-dark mb-2">Sunday, November 22 · 10:00 AM</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-4">Thanksgiving Praise Service</h2>
                <p className="text-text-body leading-relaxed max-w-3xl">Join us as we give thanks and praise to God together. No Small Groups that morning.</p>
              </div>
            </div>

            <div className="mb-12 p-7 rounded-2xl border border-cream-dark bg-cream">
              <h2 className="font-serif text-2xl font-bold text-text-dark mb-3">Thanksgiving Week Schedule</h2>
              <p className="text-text-body leading-relaxed">No Wednesday service on November 25. The church office will be closed and Liberty Baptist Academy will be on Thanksgiving break November 23–27. There will be no Outreach Ministry on November 21 or 28.</p>
            </div>

            <h2 className="font-serif text-3xl font-bold text-text-dark mb-8">
              Other Upcoming Events
            </h2>
            <EventList items={upcomingNovemberEvents} />

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