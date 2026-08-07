import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "World Missions",
  description:
    "Learn about Liberty Baptist Church's commitment to world missions, missionary support, prayer, and taking the gospel into more than 200 countries and territories.",
  alternates: { canonical: "/missions" },
  openGraph: {
    title: "World Missions | Liberty Baptist Church Sarasota",
    description:
      "From Sarasota to more than 200 countries and territories, Liberty Baptist Church is committed to taking the gospel to the world.",
    url: "/missions",
    type: "website",
  },
};

export default function MissionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="World Missions"
          title="From Sarasota to the World"
          subtitle="Faithfully supporting the Great Commission through prayer, giving, missionary partnerships, and a heart for souls."
        />

        <section className="py-20 md:py-24 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="overflow-hidden rounded-3xl shadow-lg bg-brown-deep aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/2026-06-22-11-59-28.jpeg"
                  alt="Liberty Baptist Church Missions Conference with international flags in the sanctuary"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                  A Church with a World Vision
                </p>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark leading-tight mb-5">
                  The Gospel Is for <em className="text-brown-light italic">Every Nation.</em>
                </h2>
                <p className="text-text-body leading-relaxed mb-5">
                  Liberty Baptist Church believes the Great Commission belongs to the whole church. Through faithful missionary partnerships, the ministry of Liberty helps carry the gospel into <strong>more than 200 countries and territories</strong> around the world.
                </p>
                <p className="text-text-body leading-relaxed mb-5">
                  Our church supports missionaries financially, remembers them in prayer, welcomes missionaries to share their burden and ministry, and works to keep world evangelism before every generation of the Liberty church family.
                </p>
                <p className="font-serif italic text-brown-light text-lg">
                  &ldquo;Go ye into all the world, and preach the gospel to every creature.&rdquo;
                  <span className="block text-sm not-italic text-text-body mt-1">Mark 16:15</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                How Liberty Participates
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark">
                Praying. Giving. Going.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <article className="p-8 rounded-2xl bg-warm-white border border-cream-dark shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-text-dark mb-3">Prayer</h3>
                <p className="text-text-body leading-relaxed">
                  Missionaries and their fields are regularly remembered in prayer as we ask God to open doors, save souls, strengthen churches, and protect those serving far from home.
                </p>
              </article>
              <article className="p-8 rounded-2xl bg-warm-white border border-cream-dark shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-text-dark mb-3">Support</h3>
                <p className="text-text-body leading-relaxed">
                  Faithful giving allows Liberty to partner with missionaries and gospel ministries carrying the message of Christ to communities across the United States and around the world.
                </p>
              </article>
              <article className="p-8 rounded-2xl bg-warm-white border border-cream-dark shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-text-dark mb-3">Missions Conference</h3>
                <p className="text-text-body leading-relaxed">
                  Our Missions Conference gives the church family an opportunity to meet missionaries, hear firsthand reports, learn about needs around the world, and renew our commitment to the Great Commission.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-20 bg-brown-deep">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-gold-light mb-3">
              Be Part of the Mission
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-5">
              The Great Commission Begins with Faithfulness.
            </h2>
            <p className="text-white/75 leading-relaxed max-w-2xl mx-auto mb-8">
              Join us as we pray, give, serve, and share the gospel from Sarasota to the ends of the earth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#services"
                className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full hover:bg-gold-light hover:-translate-y-0.5 transition-all"
              >
                Plan Your Visit
              </Link>
              <Link
                href="/give"
                className="inline-block text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-white/25 hover:border-white/60 transition-all"
              >
                Give to Liberty
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
