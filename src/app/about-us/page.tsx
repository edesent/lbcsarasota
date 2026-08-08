import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Liberty Baptist Church in Sarasota, our pastor, our founding pastor, our beliefs, and our mission.",
  alternates: { canonical: "/about-us" },
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="About Liberty"
          title="Our Story"
          subtitle="Honoring God's faithfulness in the past and looking forward to what He will continue to do"
        />

        <section className="py-20 md:py-24 bg-warm-white">
          <div className="max-w-4xl mx-auto px-6 space-y-6 text-lg text-text-body leading-relaxed">
            <p>
              When you come to Liberty Baptist Church it still &ldquo;feels like church.&rdquo; We believe the Holy Scriptures of the Old and New Testaments to be the verbally inspired Word of God; the final authority for faith, inspiration and practice; inerrant, infallible, God-breathed, and preserved in the King James Bible. Here at Liberty, we strive to honor and glorify God in all that we do.
            </p>
            <p>
              Our purpose is to see souls saved by fulfilling the Great Commission of spreading the Gospel to the entire world and encouraging believers to live for Christ!
            </p>
            <p>
              Dr. Gary Jackson started Liberty Baptist Church on August 6, 1978. In July 2026, Pastor Anthony Aiken became pastor of Liberty Baptist Church, continuing the church&rsquo;s commitment to faithful Bible preaching while building on the strong foundation established through decades of God&rsquo;s faithfulness.
            </p>
            <p className="font-serif text-2xl text-text-dark italic border-l-4 border-gold pl-6">
              The story of Liberty Baptist Church is still being written. We thank God for His faithfulness through every generation and look forward with anticipation to what He will continue to do in the years ahead.
            </p>
          </div>
        </section>

        <section id="pastor" className="py-20 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <figure className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/pastor-family.jpg" alt="Pastor Anthony and Alaina Aiken and their family" className="w-full h-full object-cover object-top" />
            </figure>
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark">Meet the Pastor</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mt-3 mb-5">Pastor Anthony Aiken</h2>
              <div className="space-y-5 text-lg text-text-body leading-relaxed mb-7">
                <p>
                  Pastor Anthony Aiken and his wife Alaina joined the Liberty Baptist Church family in 2026, and Pastor Aiken became pastor in July of 2026. A graduate of West Coast Baptist College and Pensacola Theological Seminary (Pensacola Christian College), he brings a heart for clear, Christ-centered preaching that works through the Scriptures one passage at a time &mdash; and a passion for reaching people with the Gospel.
                </p>
                <p>
                  The Aikens have two children and love pouring their lives into the church family. Together they are committed to continuing Liberty&rsquo;s legacy as a Bible-preaching church with a compassionate vision to reach the world.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.youtube.com/live/r-dA5-_uios?is=fFISt2HcjX_A2VpH" target="_blank" rel="noreferrer" className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-brown transition-all">Watch Installation Service</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-warm-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
              <figure className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img-1005.jpeg"
                  alt="Dr. Gary and Martha Jackson"
                  className="w-full h-full object-cover object-top"
                />
              </figure>
              <div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark">Our Founder</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mt-3 mb-2">Dr. Gary &amp; Martha Jackson</h2>
                <p className="font-semibold text-brown-light mb-7">Founding Pastor &amp; Pastor Emeritus</p>
                <div className="space-y-5 text-lg text-text-body leading-relaxed">
                  <p>
                    Dr. Gary Jackson founded Liberty Baptist Church on August 6, 1978, and faithfully led the church for more than four decades. Holding a Master of Divinity and a Doctorate of Ministry, he built Liberty on the preaching of God&rsquo;s Word and a passion for reaching the world with the Gospel.
                  </p>
                  <p>
                    Dr. Jackson and his wife Martha have three children and eight grandchildren. Liberty Baptist Church is deeply grateful for Dr. and Mrs. Jackson and for the decades of faithful ministry through which God established and strengthened this church.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            {[
              ["Biblical Preaching", "We believe the Bible is God's Word and should be taught clearly, faithfully, and in context."],
              ["Compassionate Community", "We want Liberty to be a church family where people are genuinely known, loved, encouraged, and discipled."],
              ["Reverent Worship", "We seek to worship God with joy, humility, and reverence in a way that keeps the focus on Him."],
            ].map(([title, text]) => (
              <div key={title} className="bg-warm-white rounded-2xl p-7 border border-cream-dark">
                <h3 className="font-serif text-xl font-bold text-text-dark mb-3">{title}</h3>
                <p className="text-text-body leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto px-6 mt-10 text-center flex flex-wrap justify-center gap-4">
            <Link href="/statement-of-faith" className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-brown transition-all">What We Believe</Link>
            <Link href="/#academy" className="inline-block text-brown-light font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light/40 hover:border-brown-light transition-all">Liberty Baptist Academy</Link>
            <Link href="/#services" className="inline-block text-brown-light font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light/40 hover:border-brown-light transition-all">Plan Your Visit</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
