import {
  Poppins, Inter,
  DM_Sans, Syne,
} from "next/font/google";

import "./globals.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LocationSection from "./components/LocationSection";
import OrganizationSchema from "./components/schema/OrganizationSchema";
import { getNavigationMenu, toMegaColumns, toFlatLinks, getSiteSettings } from "./lib/cms";
import { loadMergedCountries } from "./data/location-seo/loadCmsLocations";

const SITE_URL = "https://futuretouch.in";
const SITE_NAME = "Future IT Touch Private Limited";
const DEFAULT_DESCRIPTION =
  "Future IT Touch Private Limited is a 23+ year IT solutions provider delivering website design, mobile app development, digital marketing, cyber security, and software development for businesses worldwide.";

/* Self-hosted replacements for the Google Fonts previously pulled in via
   blocking `@import url(fonts.googleapis.com/...)` in globals.css and a few
   client components. next/font downloads these at build time and serves them
   from our own origin under the same font-family name, so every existing
   `fontFamily: "'Poppins', sans-serif"` inline style across the app picks
   them up automatically — no per-component changes needed. */
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
const dmSans = DM_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});
const syne = Syne({
  weight: ["700", "800"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
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


export default async function RootLayout({ children }) {
  const [servicesMenu, techMenu, aboutMenu, siteSettings, locationCountries] = await Promise.all([
    getNavigationMenu("header_services"),
    getNavigationMenu("header_technologies"),
    getNavigationMenu("header_about"),
    getSiteSettings(),
    loadMergedCountries(),
  ]);

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${dmSans.variable} ${syne.variable} antialiased overflow-x-hidden`}
      >
      <OrganizationSchema />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-black focus:shadow-lg"
      >
        Skip to main content
      </a>
      <header>
        <TopBar settings={siteSettings}/>
        <Header
          serviceColumns={toMegaColumns(servicesMenu)}
          techColumns={toMegaColumns(techMenu)}
          aboutDropdown={toFlatLinks(aboutMenu)}
          settings={siteSettings}
        />
      </header>
      {/* Spacer: TopBar (h-9 = 36px) + Header mobile (60px) / desktop (70px) */}
      <div className="h-[96px] lg:h-[106px]" />
      <main id="main-content">
        {children}
      </main>
       <LocationSection countries={locationCountries}/>
       <Footer/>
      </body>
    </html>
  );
}
