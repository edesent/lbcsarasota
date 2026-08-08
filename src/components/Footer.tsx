const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/#services", label: "Plan a Visit" },
  { href: "/ministries", label: "Ministries" },
  { href: "/#academy", label: "Liberty Baptist Academy" },
  { href: "/events", label: "Church Calendar" },
  { href: "/messages", label: "Sermons" },
  { href: "/give", label: "Give Online" },
  { href: "/statement-of-faith", label: "What We Believe" },
  { href: "/plan-of-salvation", label: "Know Christ" },
];

const serviceTimes = [
  { label: "Sunday Bible Study", time: "9:00 AM" },
  { label: "Sunday Worship", time: "10:00 AM" },
  { label: "Wednesday Midweek", time: "7:00 PM" },
];

export default function Footer() {
  return (
    <footer className="bg-brown-deep text-white/70 pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/[.08]">
          {/* Brand */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-lockup-white.png"
                alt="Liberty Baptist Church"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed">
              4249 Bahia Vista Street<br />
              Sarasota, FL 34232<br />
              <a href="tel:+19413718239" className="text-gold-light hover:text-gold transition-colors">
                (941) 371-8239
              </a>
            </p>
            <p className="mt-5 font-serif italic text-white/50 text-sm">
              We&rsquo;re here for you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-base font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-gold-light sm:hover:pl-1 transition-all">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-base font-semibold text-white mb-5">Service Times</h4>
            <ul className="space-y-2.5">
              {serviceTimes.map((s) => (
                <li key={s.label} className="text-sm text-white/60">
                  <strong className="text-white/85 font-semibold">{s.label}</strong> — {s.time}
                </li>
              ))}
            </ul>
            <p className="text-xs text-white/40 leading-relaxed mt-5">
              One mile south of the Fruitville &amp; McIntosh intersection.
            </p>
          </div>

          {/* Connect */}
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-xl font-semibold text-white leading-snug mb-3">
              Follow Along.
            </h4>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Stay connected with our church family and catch every service, event, and announcement.
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
              <a
                href="https://facebook.com/LBCsarasota"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[.08] text-white/70 hover:bg-gold hover:text-brown-deep hover:-translate-y-0.5 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@libertybaptistchurchsaraso3117"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[.08] text-white/70 hover:bg-gold hover:text-brown-deep hover:-translate-y-0.5 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/lbcsarasota"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[.08] text-white/70 hover:bg-gold hover:text-brown-deep hover:-translate-y-0.5 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center py-6 text-sm text-white/30">
          <p>&copy; {new Date().getFullYear()} Liberty Baptist Church, Sarasota FL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
