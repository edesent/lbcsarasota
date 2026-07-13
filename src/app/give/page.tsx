import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Give your tithes and offerings to Liberty Baptist Church of Sarasota, Florida — online, by mail, or in person.",
  alternates: { canonical: "/give" },
  openGraph: {
    title: "Give | Liberty Baptist Church",
    description: "Support the work of the Lord through your tithes and offerings.",
    url: "/give",
    type: "website",
  },
};

const DONATE_URL = "https://www.lbcsarasota.com/donate";

export default function GivePage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Giving"
          title="Support the Lord's Work"
          subtitle="&ldquo;Every man according as he purposeth in his heart, so let him give.&rdquo; — 2 Cor 9:7"
          bgImage="/sanctuary.jpg"
        />
        <section className="py-24 bg-warm-white">
          <div className="max-w-3xl mx-auto px-6 mb-14 text-center">
            <p className="text-lg text-text-body leading-relaxed">
              Your tithes and offerings make the ministry of Liberty Baptist Church possible —
              supporting the preaching of the Gospel here in Sarasota and the 33 missionaries we
              help send around the world. Thank you for giving cheerfully and faithfully to the
              work of the Lord. If you&rsquo;re just visiting, please know the offering is never
              expected of you — it&rsquo;s our gift to you.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-cream rounded-2xl border border-cream-dark">
              <h2 className="font-serif text-2xl font-bold text-text-dark mb-3">Give Online</h2>
              <p className="text-text-body leading-relaxed mb-6">
                Give a one-time gift or set up recurring giving securely online — anytime, from
                anywhere.
              </p>
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Give Online
              </a>
            </div>
            <div className="p-8 bg-cream rounded-2xl border border-cream-dark">
              <h2 className="font-serif text-2xl font-bold text-text-dark mb-3">Give in Person</h2>
              <p className="text-text-body leading-relaxed mb-6">
                You are always welcome to give during any of our services. We&rsquo;d love to have
                you worship with us this Sunday at 10:00 AM and join the Liberty family.
              </p>
              <a
                href="tel:+19413718239"
                className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Call (941) 371-8239
              </a>
            </div>
            <div id="mail" className="p-8 bg-cream rounded-2xl border border-cream-dark scroll-mt-28">
              <h2 className="font-serif text-2xl font-bold text-text-dark mb-3">Give by Mail</h2>
              <p className="text-text-body leading-relaxed mb-4">
                Prefer the old-fashioned way? Mail your check to:
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
      <Footer />
    </>
  );
}
