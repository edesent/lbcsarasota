import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import { staff, founder } from "@/lib/staff";

export const metadata: Metadata = {
  title: "Our Pastor",
  description:
    "Meet Pastor Anthony Aiken and the leadership of Liberty Baptist Church in Sarasota, Florida — an old-fashioned, King James Bible, gospel-preaching church.",
  alternates: { canonical: "/staff" },
  openGraph: {
    title: "Our Pastor | Liberty Baptist Church",
    description: "Meet the pastor and leadership who serve the Liberty family.",
    url: "/staff",
    type: "website",
  },
};

export default function StaffPage() {
  const lead = staff.find((m) => m.lead) ?? staff[0];

  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Our Pastor & Leadership"
          title="Meet Our Pastor"
          subtitle="Devoted to the Lord and to caring for our church family"
        />

        <section className="py-24 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Lead pastor */}
            <Link
              href={`/staff/${lead.slug}`}
              className="group grid md:grid-cols-[0.85fr_1fr] gap-10 lg:gap-14 items-center"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={lead.photo}
                  alt={lead.names}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-2">
                  {lead.role}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-tight mb-2">
                  {lead.names}
                </h2>
                <div className="w-16 h-[3px] bg-gold rounded mb-5" />
                <p className="text-lg text-text-body leading-relaxed mb-6">{lead.bio[0]}</p>
                <span className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full group-hover:bg-brown group-hover:-translate-y-0.5 transition-all">
                  Read Their Story
                </span>
              </div>
            </Link>

            {/* Founding pastor — honored (no detail page) */}
            <div className="mt-20 pt-16 border-t border-cream-dark">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                  {founder.role} &middot; {founder.years}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-tight mb-5">
                  Honoring {founder.names}
                </h2>
                <div className="space-y-4 text-lg text-text-body leading-relaxed">
                  {founder.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
