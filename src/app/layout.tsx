import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Lato } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { CHAT } from "@/config/chat";

// Matches the church's own wordmark: a transitional serif with wedge serifs
// and moderate stroke contrast — not the didone look of Playfair.
const sourceSerif = Source_Serif_4({
  variable: "--font-serif-display",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const SITE_URL = "https://lbcsarasota.elijahdesent.com";
const SITE_NAME = "Liberty Baptist Church";
const SITE_TAGLINE = "We're Here For You";
const SITE_DESCRIPTION =
  "A welcoming church in Sarasota, FL. Expository preaching, genuine community, active missions, and worship that's reverent yet refreshingly alive.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Liberty Baptist Church",
    "Baptist church Sarasota FL",
    "Sarasota Florida church",
    "Independent Baptist church",
    "King James Bible church",
    "Bible-believing church near me",
    "Sunday worship Sarasota",
    "Baptist church family",
    "Liberty Baptist Academy",
    "LBA Sarasota",
    "Christian school Sarasota FL",
    "private school Sarasota",
    "Step Up For Students Sarasota",
    "ACE school Sarasota",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — worship in Sarasota, Florida`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Favicon + touch icon are generated from app/icon.png and app/apple-icon.png
  // (the church's liberty-bell mark) by Next's file conventions.
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  category: "religion",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fbfd" },
    { media: "(prefers-color-scheme: dark)", color: "#002760" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${lato.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        {children}
        <Script
          src={`${CHAT.origin}/widget/wbc-chat.js`}
          data-api={CHAT.origin}
          data-key={CHAT.apiKey}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
