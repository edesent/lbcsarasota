import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Give your tithes and offerings to Liberty Baptist Church of Sarasota, Florida — securely online through Tithe.ly, by mail, or in person.",
  alternates: { canonical: "/give" },
  openGraph: {
    title: "Give | Liberty Baptist Church",
    description: "Give securely online to Liberty Baptist Church in Sarasota, Florida.",
    url: "/give",
    type: "website",
  },
};

const tithelyButtonStyle = {
  backgroundColor: "#0b57b8",
  fontFamily: "inherit",
  fontWeight: 700,
  fontSize: "14px",
  letterSpacing: "0.04em",
  textTransform: "uppercase" as const,
  padding: "14px 32px",
  borderRadius: "9999px",
  cursor: "pointer",
  backgroundImage: "none",
  color: "#ffffff",
  textShadow: "none",
  display: "inline-block",
  float: "none" as const,
  border: "2px solid #0b57b8",
};

export default function GivePage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Giving"
          title="Give"
          subtitle="&ldquo;Every man according as he purposeth in his heart, so let him give.&rdquo; — 2 Cor 9:7"
          bgImage="/sanctuary.jpg"
        />

        <section className="py-24 bg-warm-white">
          <div className="max-w-3xl mx-auto px-6 mb-14 text-center">
            <p className="text-lg text-text-body leading-relaxed">
              Giving is an act of worship. Your tithes and offerings help Liberty Baptist Church
              proclaim the Gospel in Sarasota, support missionaries around the world, disciple
              believers, and carry out the ongoing work of the ministry. Thank you for giving
              faithfully and cheerfully.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-cream rounded-2xl border border-cream-dark">
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-gold-dark mb-2">
                Tithe.ly
              </p>
              <h2 className="font-serif text-2xl font-bold text-text-dark mb-3">Give Online</h2>
              <p className="text-text-body leading-relaxed mb-6">
                Make a one-time gift or set up recurring giving securely through Tithe.ly —
                anytime, from anywhere.
              </p>
              <button
                className="tithely-give-button transition-all hover:-translate-y-0.5 hover:shadow-lg"
                data-form="3608be89-18a4-4a12-aba4-745b0f962654"
                style={tithelyButtonStyle}
              >
                Give Now
              </button>
            </div>

            <div className="p-8 bg-cream rounded-2xl border border-cream-dark">
              <h2 className="font-serif text-2xl font-bold text-text-dark mb-3">Give in Person</h2>
              <p className="text-text-body leading-relaxed mb-6">
                You are always welcome to give during any of our services. Join us Sunday at
                10:00 AM for Morning Worship or Wednesday at 7:00 PM.
              </p>
              <a
                href="/#services"
                className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Service Times
              </a>
            </div>

            <div id="mail" className="p-8 bg-cream rounded-2xl border border-cream-dark scroll-mt-28">
              <h2 className="font-serif text-2xl font-bold text-text-dark mb-3">Give by Mail</h2>
              <p className="text-text-body leading-relaxed mb-4">
                If you prefer to give by mail, send your check to:
              </p>
              <address className="not-italic font-serif text-text-dark leading-relaxed mb-4">
                Liberty Baptist Church<br />
                4249 Bahia Vista Street<br />
                Sarasota, FL 34232
              </address>
              <p className="text-sm text-text-light">
                Make checks payable to <strong>Liberty Baptist Church</strong>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Script src="https://static.tithely.com/give/give.js" strategy="afterInteractive" />
      <Footer />
    </>
  );
}
