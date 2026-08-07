import Navbar from "@/components/Navbar";
import PreachingHero from "@/components/PreachingHero";
import ServiceTimes from "@/components/ServiceTimes";
import LatestSermon from "@/components/LatestSermon";
import SignatureEvents from "@/components/SignatureEvents";
import Programs from "@/components/Programs";
import Connect from "@/components/Connect";
import Missions from "@/components/Missions";
import Welcome from "@/components/Welcome";
import LifeAtLiberty from "@/components/LifeAtLiberty";
import Footer from "@/components/Footer";

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "Liberty Baptist Church",
  alternateName: "Liberty Baptist Church of Sarasota",
  url: "https://lbcsarasota.elijahdesent.com",
  image: "https://lbcsarasota.elijahdesent.com/og-image.jpg",
  slogan: "Biblical Preaching. Compassionate Community. Reverent Worship.",
  description:
    "Liberty Baptist Church is a Bible-preaching church family in Sarasota, Florida. Sunday Small Groups meet at 9:00 AM, Morning Worship at 10:00 AM, and Wednesday Bible Study, Teens, and kids4Truth meet at 7:00 PM.",
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
      />
      <Navbar />
      <main>
        <PreachingHero />
        <LatestSermon />
        <ServiceTimes />
        <SignatureEvents />
        <Programs />
        <Connect />
        <Missions />
        <Welcome />
        <LifeAtLiberty />
      </main>
      <Footer />
    </>
  );
}
