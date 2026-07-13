import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "What We Believe",
  description:
    "The doctrinal statement of Liberty Baptist Church in Sarasota, Florida — the historic truths of the faith we hold and preach from the King James Bible.",
  alternates: { canonical: "/statement-of-faith" },
  openGraph: {
    title: "What We Believe | Liberty Baptist Church",
    description: "The doctrines we hold and preach from the King James Bible.",
    url: "/statement-of-faith",
    type: "article",
  },
};

const articles = [
  {
    title: "The Holy Scriptures",
    body: "We believe the Bible to be the verbally inspired Word of God — inerrant, infallible, God-breathed, and preserved for us in the King James Bible. It is the final authority for faith and practice.",
    ref: "II Timothy 3:15–17",
  },
  {
    title: "The Godhead",
    body: "We believe in one triune God, eternally existing in three persons — Father, Son, and Holy Spirit — co-eternal in being, co-identical in nature, and co-equal in power and glory.",
    ref: "II Corinthians 13:14",
  },
  {
    title: "The Person and Work of Christ",
    body: "We believe the Lord Jesus Christ, the eternal Son of God, became man without ceasing to be God, conceived by the Holy Spirit and born of the virgin Mary, and that He redeems the lost through His substitutionary death on the cross and His literal, bodily resurrection.",
    ref: "John 1:1–2, 14",
  },
  {
    title: "The Person and Work of the Holy Spirit",
    body: "We believe the Holy Spirit convicts the world of sin, righteousness, and judgment, and that He regenerates, baptizes, indwells, and seals every believer unto the day of redemption.",
    ref: "John 16:8–11",
  },
  {
    title: "The Total Depravity of Man",
    body: "We believe man was created in the image of God, but that in Adam's sin the race fell, inherited a sinful nature, became alienated from God, and is of himself utterly unable to remedy his lost condition.",
    ref: "Romans 3:22–23",
  },
  {
    title: "The Freeness of Salvation",
    body: "We believe salvation is the free gift of God, brought to man by grace and received through personal faith in the Lord Jesus Christ, whose precious blood was shed at Calvary for the forgiveness of our sins.",
    ref: "Ephesians 2:8–10",
  },
  {
    title: "Eternal Security & Assurance",
    body: "We believe all the redeemed, once saved, are kept by God's power and are secure in Christ forever.",
    ref: "John 10:27–30",
  },
  {
    title: "The Two Natures of the Believer",
    body: "We believe every saved person possesses two natures, with provision made for the victory of the new nature over the old through the power of the indwelling Holy Spirit.",
    ref: "Galatians 5:16–25",
  },
  {
    title: "Separation",
    body: "We believe all the saved should live so as not to bring reproach upon their Saviour, and that separation from all religious apostasy and from worldly and sinful pleasures, practices, and associations is commanded of God.",
    ref: "II Corinthians 6:14–7:1",
  },
  {
    title: "The Mission of the Saved",
    body: "We believe it is the obligation of the saved to witness — by life and by word — to the truths of the Gospel to all mankind.",
    ref: "Matthew 28:19–20",
  },
  {
    title: "The Ministry and Scriptural Gifts",
    body: "We believe God is sovereign in the bestowment of His gifts, that the gifts of evangelists, pastors, and teachers are sufficient for the perfecting of the saints today, and that the sign gifts gradually ceased as the New Testament Scriptures were completed.",
    ref: "Ephesians 4:7–12",
  },
  {
    title: "The Church",
    body: "We believe the church, the body and espoused bride of Christ, is a spiritual organism made up of all born-again persons of this present age, and that the establishment and continuance of local churches is clearly taught in the New Testament.",
    ref: "Ephesians 1:22–23",
  },
  {
    title: "Dispensationalism",
    body: "We believe in the dispensational view of Bible interpretation, while rejecting the extreme teaching known as hyper-dispensationalism.",
    ref: "II Timothy 2:15",
  },
  {
    title: "The Personality of Satan",
    body: "We believe Satan is a person — the author of sin and the cause of the fall — the open and declared enemy of God and man, who shall be eternally punished in the lake of fire.",
    ref: "Isaiah 14:12–17",
  },
  {
    title: "The Second Advent of Christ",
    body: "We believe in the personal, imminent, pre-tribulational, and pre-millennial coming of the Lord Jesus Christ for His redeemed, and in His subsequent return to earth with His saints to establish His millennial kingdom.",
    ref: "I Thessalonians 4:13–18",
  },
  {
    title: "The Eternal State",
    body: "We believe in the bodily resurrection of all men — the saved to eternal life, and the unsaved to judgment and everlasting punishment. The redeemed, absent from the body, are present with the Lord in conscious bliss.",
    ref: "John 5:28–29",
  },
  {
    title: "The Lord's Supper",
    body: "We believe the Lord's Supper is the commemoration of His death and coming again, to be observed with self-examination.",
    ref: "I Corinthians 11:23–28",
  },
  {
    title: "Baptism",
    body: "We believe in water baptism by immersion for the believer as an outward evidence of having received Jesus Christ as Saviour. Baptism in no way adds to salvation, which is by faith alone.",
    ref: "Acts 10:44–48",
  },
];

export default function StatementOfFaithPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="What We Believe"
          title="Our Doctrinal Statement"
          subtitle="The historic truths we hold and preach from the King James Bible"
        />
        <section className="py-24 bg-warm-white">
          <div className="max-w-3xl mx-auto px-6 space-y-10">
            {articles.map((article, i) => (
              <article key={article.title}>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-2">
                  Article {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark mb-3 leading-snug">
                  {article.title}
                </h2>
                <p className="text-lg text-text-body leading-relaxed">{article.body}</p>
                <p className="mt-2 font-serif italic text-sm text-gold-dark">{article.ref}</p>
              </article>
            ))}

            <div className="pt-6 border-t border-cream-dark text-center">
              <p className="text-text-body leading-relaxed">
                Have questions about what we believe? We&rsquo;d love to talk with you.
              </p>
              <a
                href="/#contact"
                className="mt-5 inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
