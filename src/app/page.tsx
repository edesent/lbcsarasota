import Navbar from "@/components/Navbar";
import PreachingHero from "@/components/PreachingHero";
import Welcome from "@/components/Welcome";
import Connect from "@/components/Connect";
import ServiceTimes from "@/components/ServiceTimes";
import Distinctives from "@/components/Distinctives";
import Academy from "@/components/Academy";
import SignatureEvents from "@/components/SignatureEvents";
import Missions from "@/components/Missions";
import ScriptureBanner from "@/components/ScriptureBanner";
import LatestSermon from "@/components/LatestSermon";
import Give from "@/components/Give";
import MapAddress from "@/components/MapAddress";
import Footer from "@/components/Footer";

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "Liberty Baptist Church",
  alternateName: "Liberty Baptist Church of Sarasota",
  url: "https://lbcsarasota.elijahdesent.com",
  image: "https://lbcsarasota.elijahdesent.com/og-image.jpg",
  slogan: "We're Here For You",
  description:
    "Liberty Baptist Church is a warm, Bible-preaching church family in Sarasota, Florida, with hymns you can sing and preaching that explains the Scriptures. Home of Liberty Baptist Academy. Sunday Bible Study Groups at 9:00 AM, Morning Worship at 10:00 AM, and Midweek Service Wednesday at 7:00 PM.",
  foundingDate: "1978-08-06",
  telephone: "+1-941-371-8239",
  email: "office@lbcsarasota.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4249 Bahia Vista Street",
    addressLocality: "Sarasota",
    addressRegion: "FL",
    postalCode: "34232",
    addressCountry: "US",
  },
  sameAs: [
    "https://facebook.com/LBCsarasota",
    "https://www.youtube.com/@libertybaptistchurchsaraso3117",
    "https://www.instagram.com/lbcsarasota",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "11:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "19:00",
      closes: "20:30",
    },
  ],
};

const academySchema = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "Liberty Baptist Academy",
  alternateName: "LBA Sarasota",
  url: "https://lbcsarasota.elijahdesent.com/#academy",
  description:
    "Liberty Baptist Academy is a small Christian school in Sarasota, Florida, and a ministry of Liberty Baptist Church. Accelerated Christian Education (A.C.E.) curriculum with Abeka kindergarten, ACE-trained faculty, and Step Up For Students scholarship funding accepted.",
  telephone: "+1-941-371-8239",
  email: "office@lbcsarasota.com",
  parentOrganization: { "@type": "Church", name: "Liberty Baptist Church" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "4249 Bahia Vista Street",
    addressLocality: "Sarasota",
    addressRegion: "FL",
    postalCode: "34232",
    addressCountry: "US",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(academySchema) }}
      />
      <Navbar />
      <main>
        <PreachingHero />
        <Welcome />
        <ServiceTimes />
        <Distinctives />
        <Connect />
        <Academy />
        <ScriptureBanner />
        <Missions />
        <SignatureEvents />
        <LatestSermon />
        <Give />
        <MapAddress />
      </main>
      <Footer />
    </>
  );
}
