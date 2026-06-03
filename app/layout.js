import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LocationSection from "./components/LocationSection";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/page.js

// export const metadata = {
//   title: "Home - Future IT Touch Private Limited",
//   description:
//     "Welcome to Future IT Touch Private Limited, your trusted partner in IT solutions, web development, digital marketing, and software services. Empowering businesses with innovation and technology.",
//   keywords: [
//     "IT Solutions",
//     "Web Development",
//     "Digital Marketing",
//     "Software Services",
//     "Future IT Touch",
//     "Technology",
//     "Business Growth",
//   ],
//   openGraph: {
//     title: "Home - Future IT Touch Private Limited",
//     description:
//       "Future IT Touch Private Limited delivers innovative IT solutions, web development, digital marketing, and software services to help businesses grow with technology.",
//     url: "https://yourdomain.com/",
//     siteName: "Future IT Touch Private Limited",
//     images: [
//       {
//         url: "/og-home.webp", 
//         width: 1200,
//         height: 630,
//         alt: "Future IT Touch Private Limited",
//       },
//     ],
//     type: "website",
//   },
// };


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
      <TopBar/>
      <Header/>
      {/* Spacer: TopBar (h-9 = 36px) + Header mobile (60px) / desktop (70px) */}
      <div className="h-[96px] lg:h-[106px]" />
        {children}
       <LocationSection/>
       <Footer/>
      </body>
    </html>
  );
}
