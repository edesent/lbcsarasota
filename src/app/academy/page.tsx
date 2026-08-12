import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "Liberty Baptist Academy",
  description:
    "Learn more about Liberty Baptist Academy in Sarasota, Florida — a distinctly Christian school ministry of Liberty Baptist Church with A.C.E. academics, Biblical instruction, Hawks athletics, and Step Up For Students scholarship participation.",
  alternates: { canonical: "/academy" },
  openGraph: {
    title: "Liberty Baptist Academy | Christian School in Sarasota",
    description:
      "A distinctly Christian school ministry of Liberty Baptist Church with A.C.E. academics, Biblical instruction, Hawks athletics, and Step Up For Students scholarship participation.",
    url: "/academy",
    type: "website",
    images: [
      {
        url: "/academy-student-assembly.jpg",
        width: 1200,
        height: 900,
        alt: "Liberty Baptist Academy students gathered for a school assembly",
      },
    ],
  },
};

const highlights = [
  {
    title: "Biblical Foundation",
    body: "The Bible is more than one class in the schedule. Biblical truth and Christian character are woven throughout the school day as students are encouraged to know Christ, grow in wisdom, and live out their faith.",
  },
  {
    title: "Individual Academic Progress",
    body: "Using the Accelerated Christian Education program, students are able to work at an appropriate pace while receiving guidance and accountability from caring faculty.",
  },
  {
    title: "A Close-Knit School Community",
    body: "Liberty Baptist Academy is intentionally personal. Students are known by name, encouraged by teachers, and given opportunities to build friendships, serve, compete, and grow together.",
  },
  {
    title: "Hawks Athletics",
    body: "Athletics give students opportunities to develop discipline, teamwork, school spirit, and healthy competition as part of the LBA Hawks program.",
  },
  {
    title: "Step Up For Students",
    body: "Liberty Baptist Academy accepts Step Up For Students scholarship funding, helping make Christian education more accessible to qualifying Florida families.",
  },
  {
    title: "A Ministry of Liberty Baptist Church",
    body: "The academy is part of the ministry of Liberty Baptist Church and shares the church's commitment to faithful Bible teaching, Christian character, and investing in the next generation.",
  },
];

const photoMoments = [
  {
    src: "/academy-student-assembly.jpg",
    alt: "Liberty Baptist Academy students gathered for a school assembly",
    label: "School Community",
  },
  {
    src: "/academy-hawks-champions.jpg",
    alt: "Liberty Baptist Academy Hawks players with trophies",
    label: "Hawks Athletics",
  },
  {
    src: "/academy-back-to-school.jpg",
    alt: "Welcome back to school display at Liberty Baptist Academy",
    label: "Back to School",
  },
];

export default function AcademyPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Christian Education"
          title="Liberty Baptist Academy"
          subtitle="A distinctly Christian education where students are known, challenged, and encouraged to grow academically and spiritually."
          bgImage="/academy-student-assembly.jpg"
        />

        <section className="py-20 md:py-24 bg-warm-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-14 items-center">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                  Education With Purpose
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-5">
                  More Than a School Day
                </h2>
                <p className="text-lg text-text-body leading-relaxed mb-5">
                  Liberty Baptist Academy serves families who want strong academics in an environment where Biblical truth, Christian character, and personal responsibility matter.
                </p>
                <p className="text-text-body leading-relaxed">
                  Our goal is to help students make meaningful academic progress while learning to think Biblically, work diligently, develop strong character, and become prepared for the opportunities God places before them.
                </p>
              </div>

              <figure className="rounded-3xl overflow-hidden shadow-xl aspect-[16/10] bg-cream">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/2026-05-22-09-15-00.jpeg"
                  alt="Students at Liberty Baptist Academy"
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                What Families Can Expect
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark">
                A School Built Around Growth
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-cream-dark bg-warm-white p-7 md:p-8 shadow-sm"
                >
                  <h3 className="font-serif text-xl font-semibold text-text-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-body leading-relaxed">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                Life at LBA
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark leading-tight">
                Real school days, real students, real community.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {photoMoments.map((photo) => (
                <figure
                  key={photo.src}
                  className="group relative min-h-72 md:min-h-96 overflow-hidden rounded-2xl bg-brown-deep shadow-sm"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown-deep/90 to-transparent px-5 pb-5 pt-16">
                    <p className="text-sm font-bold tracking-[0.16em] uppercase text-white">
                      {photo.label}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-brown-deep">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-gold-light mb-3">
              Learn More
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-5">
              Interested in Liberty Baptist Academy?
            </h2>
            <p className="text-white/75 leading-relaxed max-w-2xl mx-auto mb-8">
              We would be glad to answer your questions about the academy, scholarships, academics, and school life.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full hover:bg-gold-light hover:-translate-y-0.5 transition-all"
            >
              Contact Liberty Baptist Academy
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
