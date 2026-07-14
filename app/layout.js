import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LocationSection from "./components/LocationSection";
import OrganizationSchema from "./components/schema/OrganizationSchema";

const SITE_URL = "https://futuretouch.in";
const SITE_NAME = "Future IT Touch Private Limited";
const DEFAULT_DESCRIPTION =
  "Future IT Touch Private Limited is a 23+ year IT solutions provider delivering website design, mobile app development, digital marketing, cyber security, and software development for businesses worldwide.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | Web, App & Digital Marketing Experts`,
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Web, App & Digital Marketing Experts`,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/images/HeroSection/slider-img-1.webp",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Web, App & Digital Marketing Experts`,
    description: DEFAULT_DESCRIPTION,
    images: ["/images/HeroSection/slider-img-1.webp"],
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#2dd4bf",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
      <OrganizationSchema />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-black focus:shadow-lg"
      >
        Skip to main content
      </a>
      <header>
        <TopBar/>
        <Header/>
      </header>
      {/* Spacer: TopBar (h-9 = 36px) + Header mobile (60px) / desktop (70px) */}
      <div className="h-[96px] lg:h-[106px]" />
      <main id="main-content">
        {children}
      </main>
       <LocationSection/>
       <Footer/>
      </body>
    </html>
  );
}
