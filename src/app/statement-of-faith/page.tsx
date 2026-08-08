import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "What We Believe",
  description:
    "The doctrinal statement of Liberty Baptist Church in Sarasota, Florida — the historic truths of the faith we hold and preach.",
  alternates: { canonical: "/statement-of-faith" },
  openGraph: {
    title: "What We Believe | Liberty Baptist Church",
    description: "The historic truths of the faith we hold and preach.",
    url: "/statement-of-faith",
    type: "article",
  },
};

const articles = [
  {
    title: "The Holy Scriptures",
    body: [
      "We believe the Holy Scriptures of the Old and New Testaments to be the verbally inspired Word of God; the final authority for faith, inspiration, and practice; inerrant, infallible, God-breathed, and preserved in the King James Bible.",
    ],
    ref: "I Corinthians 2:9-13; John 16:12-13; II Timothy 3:15-17; II Peter 1:20,21; Matthew 5:18",
  },
  {
    title: "The Godhead",
    body: [
      "We believe in one triune God, eternally existing in three beings-Father, Son, and Holy Spirit; co-eternal in being, co-identical in nature, co-equal in power and glory and having the same attributes and perfections.",
    ],
    ref: "Deuteronomy 6:4; II Corinthians 13:14; Ephesians 4:6; John 5:7; Mark 12:29-32; John 10:30; Isaiah 48:16, 63:10",
  },
  {
    title: "The Person and Work of Christ",
    body: [
      "We believe the Lord Jesus Christ, the eternal Son of God, became man, without ceasing to be God, having been conceived by the Holy Spirit and born of the virgin Mary, in order that He might reveal God and redeem sinful man.",
      "We believe that the Lord Jesus Christ accomplished our redemption through His death on the cross as the vicarious, substitutionary sacrifice; and that our justification is made sure by His literal, physical resurrection from the dead.",
    ],
    ref: "Romans 3:24-25; John 1:1-2, 14; Luke 1:35; Philippians 2:6-9; Ephesians 1:7; I Peter 2:2-4",
  },
  {
    title: "The Person and Work of the Holy Spirit",
    body: [
      "We believe that the Holy Spirit is the agent Who convicts the world of sin, of righteousness, and of judgment; and that He is the supernatural agent in regeneration, baptizing all believers into the body of Christ, indwelling and sealing them unto the day of redemption.",
      "We believe that He is the divine teacher Who guides believers into all truth; and that it is the privilege and duty of all the saved to be yielded to the Spirit.",
    ],
    ref: "John 16:8-11; I Corinthians 12:12-14; II Corinthians 3:6; Romans 8:9; John 16:13; Ephesians 5:18; I John 2:20, 27",
  },
  {
    title: "The Total Depravity of Man",
    body: [
      "We believe that man was created in the image and likeness of God, but that in Adam’s sin the race fell, inherited a sinful nature and became alienated from God, and that man is totally depraved and, of himself, utterly unable to remedy his lost condition.",
    ],
    ref: "Genesis 1:26-27; Romans 3:22-23, 5:12; Ephesians 2:1-3,12",
  },
  {
    title: "The Freeness of Salvation",
    body: [
      "Salvation is the free gift of God brought to man by grace and received by personal faith in the Lord Jesus Christ, Whose precious blood was shed on Calvary for the forgiveness of our sins.",
    ],
    ref: "I Peter 1:18-19; John 1:12; Ephesians 1:7, 2:8-10",
  },
  {
    title: "The Eternal Security and Assurance of the Believers",
    body: [
      "All the redeemed, once saved, are kept by God’s power and are thus secure in Christ forever. We have the privilege, as believers, to rejoice in the assurance of our salvation, the testimony of God’s Word, which clearly forbids the use of Christian liberty as an occasion to the flesh.",
    ],
    ref: "John 6:37-40, 10:27-30; Romans 8:1, 38-39, 13:13-14; I Corinthians 1:4-8; Galatians 5:13; Titus 2:11-15; I Peter 1:5",
  },
  {
    title: "The Two Natures of the Believer",
    body: [
      "We believe that every saved person possesses two natures, with provision made for victory of the new nature over the old nature through the power of the indwelling Holy Spirit, and that all claims to the eradication of the old nature in this life are unscriptural.",
    ],
    ref: "Romans 6:13; Galatians 5:16-25; Colossians 3:13; I John 3:5-9; Romans 8:12-13; Ephesians 4:22-24; I Peter 1:14-16",
  },
  {
    title: "Separation",
    body: [
      "All the saved should live in such a manner so as not to bring reproach upon their Savior and Lord, and that separation from all religious apostasy, all worldly and sinful pleasures, practices and associations is commanded of God.",
    ],
    ref: "Romans 12:12, 14:13; II Corinthians 6:14-7:1; II Timothy 3:1-5; I John 2:15-17; II John 9-11",
  },
  {
    title: "The Mission of the Saved",
    body: [
      "We believe that it is the obligation of the saved to witness by life and by word to the truths of the Gospel to all mankind.",
    ],
    ref: "Mark 16:15; II Corinthians 5:19-20; Acts 1:8; Matthew 28:19-20",
  },
  {
    title: "The Ministry and the Scriptural Gifts",
    body: [
      "We believe that God is sovereign in the bestowment of all his gifts, and that the gifts of evangelists, pastors, and teachers are sufficient for the perfecting of the saints today, and that speaking in tongues and working of sign miracles gradually ceased as the New Testament Scriptures were completed and Their authority became established.",
      "We believe that God does hear and answer the prayer of faith in accord with His own will for the sick and afflicted.",
    ],
    ref: "I Corinthians 12:4-11; II Corinthians 12:13; Ephesians 4:7-12; John 15:7; I John 5:14-15",
  },
  {
    title: "The Church",
    body: [
      "We believe that the church, which is the body and the espoused bride of Christ, is a spiritual organism made up of all born-again persons of the present age.",
      "We believe that the establishment and continuance of local churches is clearly taught and defined in the new Testament Scriptures.",
    ],
    ref: "Ephesians 1:22-23, 5:25-27; I Corinthians 11:2,12:12-14; Acts 14:27; I Timothy 3:1-3; Acts 20:17, 28-32; Titus 1:5-11",
  },
  {
    title: "Dispensationalism",
    body: [
      "We believe in the dispensational view of Bible interpretation, but reject the extreme teaching known as “hyper-dispensationalism” such as that teaching which opposes either the Lord’s Table or water baptism as a Scriptural means of testimony for the church in this age.",
    ],
    ref: "Matthew 28:19-20; Acts 2:41-42, 18:8; I Corinthians 11:23-26",
  },
  {
    title: "The Personality of Satan",
    body: [
      "We believe that Satan is a person, the author of sin and the cause of the fall; and that he is the open and declared enemy of God and man; and that he shall be eternally punished in the lake of fire.",
    ],
    ref: "Job 1:6-7; Matthew 4:2-11; Revelation 20:20; Isaiah 14:12-17; Matthew 25:41",
  },
  {
    title: "The Second Advent of Christ",
    body: [
      "We believe in that “blessed hope,” the personal, imminent, pre-tribulational, and pre-millenial coming of the Lord Jesus Christ for His redeemed ones; and in His subsequent return to earth, with His saints, to establish His millenial kingdom.",
    ],
    ref: "I Thessalonians 1:1-10, 4:13-18, 5:9; Revelation 3:10, 19:11-18; Zechariah 14:4-11",
  },
  {
    title: "The Eternal State",
    body: [
      "We believe in the bodily resurrection of all men: the saved to eternal life, and the unsaved to judgment and everlasting punishment.",
      "We believe that the souls of the redeemed are, at death, absent from the body and present with the Lord, where in conscious bliss they await the first resurrection, when spirit, and body will be reunited to be glorified forever with the Lord.",
    ],
    ref: "Matthew 25:46; John 5:28-29,11:25-26; Revelation 20:5-6,12-13; Luke 23:43; II Corinthians 5:2; I Thessalonians 4:16-17; Revelation 20:4-6; Philippians 1:23",
  },
  {
    title: "The Lord's Supper",
    body: [
      "We believe that the Lord’s Supper is the commemoration of His death and coming again and should be so observed. Observance should be preceded by self-examination.",
    ],
    ref: "I Corinthians 11:23-28",
  },
  {
    title: "Baptism",
    body: [
      "We believe in water baptism by immersion for the believer, that the Scriptural procedure is that of hearing the Gospel, and the baptism as an outward evidence of having received Jesus Christ as Savior. Water baptism in no way adds to salvation by faith.",
    ],
    ref: "Matthew 28:29; Acts 10:44-48; I Peter 3:21",
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
          subtitle="The historic truths of the faith we hold and preach"
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
                <div className="space-y-3">
                  {article.body.map((paragraph) => (
                    <p key={paragraph} className="text-lg text-text-body leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <p className="mt-3 font-serif italic text-sm text-gold-dark">{article.ref}</p>
              </article>
            ))}

            <div className="pt-6 border-t border-cream-dark text-center">
              <p className="text-text-body leading-relaxed">
                Have questions about what we believe? We&rsquo;d love to talk with you.
              </p>
              <a
                href="tel:+19413718239"
                className="mt-5 inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Call (941) 371-8239
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}