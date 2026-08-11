import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import PlanVisitModal from "@/components/PlanVisitModal";

export const metadata: Metadata = {
  title: "Plan Your Visit",
  description: "Everything you need to know before visiting Liberty Baptist Church in Sarasota: service times, directions, children and nursery, what to expect, and answers to common questions.",
  alternates: { canonical: "/plan-your-visit" },
};

const services = [
  ["Sunday Small Groups", "9:00 AM", "Age-appropriate Bible study for children, teens, and adults."],
  ["Sunday Morning Worship", "10:00 AM", "Congregational hymns, special music, and clear Bible preaching."],
  ["Wednesday", "7:00 PM", "Adult Bible study with dedicated ministries for teens and children through kids4Truth."],
];

const questions = [
  ["What should I wear?", "There is no dress code at Liberty. You will see a range of dress, and you are welcome to come as you are."],
  ["What is the service like?", "Our morning worship service includes congregational hymns, special music, prayer, and preaching from the Bible. The service normally lasts about an hour and fifteen minutes."],
  ["What about my children?", "Nursery is available for children ages 2 and under. Children may remain with their parents during the service, and Junior Church is also available. Children attending Junior Church are dismissed from the auditorium after the music portion of the morning service and may be picked up in the Education Building afterward."],
  ["What happens when I arrive?", "Greeters are available to welcome you and help you find the auditorium, nursery, children's areas, or a Small Group. You are welcome to stop at the Welcome Center for information, but you do not need to register or give us your contact information to attend."],
];

export default function PlanYourVisitPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero eyebrow="Your First Sunday" title="Plan Your Visit" subtitle="Everything you need to know before you walk through the doors — no registration required." />

        <section className="py-16 md:py-20 bg-warm-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-4">We&rsquo;d Love to Have You With Us.</h2>
              <p className="text-lg text-text-body leading-relaxed">Visiting a church for the first time can come with a lot of questions. Here are the practical details so you can know what to expect before you arrive.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-14">
              {services.map(([title, time, detail]) => (
                <div key={title} className="rounded-2xl border border-cream-dark bg-cream p-7 text-center">
                  <h3 className="font-serif text-xl font-semibold text-text-dark">{title}</h3>
                  <p className="font-serif text-3xl font-bold text-brown-light my-2">{time}</p>
                  <p className="text-sm text-text-body leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 mb-14">
              <div className="rounded-2xl bg-brown-deep text-white p-8 md:p-10">
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-gold-light mb-3">Directions</p>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Liberty Baptist Church</h2>
                <p className="text-white/80 leading-relaxed mb-6">4249 Bahia Vista Street<br />Sarasota, FL 34232<br /><span className="text-white/60">at McIntosh Road</span></p>
                <a href="https://www.google.com/maps/search/?api=1&query=4249+Bahia+Vista+Street+Sarasota+FL+34232" target="_blank" rel="noopener noreferrer" className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-7 py-3 rounded-full">Get Directions</a>
              </div>
              <div className="rounded-2xl border border-cream-dark bg-cream p-8 md:p-10">
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-gold-dark mb-3">When You Arrive</p>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark mb-4">You Don&rsquo;t Have to Figure It Out Alone.</h2>
                <p className="text-text-body leading-relaxed">Our greeters can point you toward the auditorium, nursery, children&rsquo;s areas, or your Small Group. If you would rather simply come in and find a seat, that&rsquo;s perfectly fine too. We want your first visit to be comfortable, not complicated.</p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-gold-dark text-center mb-3">What to Expect</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark text-center mb-9">A Few Common Questions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {questions.map(([title, body]) => (
                  <div key={title} className="rounded-2xl border border-cream-dark bg-cream p-7">
                    <h3 className="font-serif text-xl font-semibold text-text-dark mb-3">{title}</h3>
                    <p className="text-text-body leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-cream">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-gold-dark mb-3">Completely Optional</p>
            <h2 className="font-serif text-3xl font-bold text-text-dark mb-4">Want Us to Know You&rsquo;re Coming?</h2>
            <p className="text-text-body leading-relaxed mb-7">You never need to give us your information before visiting. If you would like someone to be ready to meet you or answer a question beforehand, you can let us know here.</p>
            <PlanVisitModal variant="primary" className="px-9 py-3.5" label="Let Us Know You’re Coming" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}