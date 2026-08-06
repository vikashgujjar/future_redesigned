"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import Marquee from "react-fast-marquee";
import { ArrowUpRight } from "lucide-react";

// Swiper (carousel lib + its CSS) is only needed once this below-the-fold
// section mounts client-side — keeping it out of the initial render avoids
// shipping swiper/css on the critical rendering path for every page load.
const PortfolioCarousel = dynamic(() => import("./PortfolioCarousel"), {
  ssr: false,
  loading: () => <div className="min-h-[420px]" aria-hidden="true" />,
});

const portfolioItems = [
  { link: "https://moveitsolution.com/",          image: "/portfolio/1.webp",  title: "Transport Website", category: "Moving Company"    },
  { link: "https://nextlegal.in/",                image: "/portfolio/2.webp",  title: "Law Website",       category: "Law Company"       },
  { link: "https://social-scholars.com/",         image: "/portfolio/3.webp",  title: "Article Website",   category: "News Company"      },
  { link: "https://www.agricareplanet.com/",      image: "/portfolio/4.webp",  title: "Soil Website",      category: "Agriculture"       },
  { link: "https://nextgentrip.com/",             image: "/portfolio/5.webp",  title: "Travel Website",    category: "Travel Company"    },
  { link: "https://www.bluevisionllc.com/",       image: "/portfolio/6.webp",  title: "UAE Website",       category: "Rice Company"      },
  { link: "https://ingeniouslearn.com/",          image: "/portfolio/7.webp",  title: "Courses Website",   category: "Education"         },
  { link: "https://expresslogesticpackers.com/",  image: "/portfolio/8.webp",  title: "Packers Website",   category: "Logistics"         },
  { link: "https://www.redpathdiagnostics.com/",  image: "/portfolio/9.webp",  title: "Medical Website",   category: "Healthcare"        },
  { link: "https://karpetkare.in/",               image: "/portfolio/10.webp", title: "Cleaning Website",  category: "Cleaning Services" },
];

export default function Portfolio() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ background: "linear-gradient(145deg,#060b18 0%,#0c1330 100%)" }}
    >
      <style>{`
        .pf-dot {
          background-image: radial-gradient(circle, rgba(255,255,255,.028) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* card hover scale */
        .pf-card-img { transition: transform .5s ease; }
        .pf-card:hover .pf-card-img { transform: scale(1.06); }

        /* hover overlay */
        .pf-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(6,11,24,.94) 0%, rgba(6,11,24,.35) 55%, transparent 100%);
          opacity: 0;
          transition: opacity .35s ease;
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 22px;
          border-radius: 16px;
        }
        .pf-card:hover .pf-overlay { opacity: 1; }

        /* arrow button */
        .pf-arrow {
          width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg,#2dd4bf,#6366f1);
          display: flex; align-items: center; justify-content: center;
          color: #fff; margin-left: auto; margin-top: 10px; flex-shrink: 0;
          transition: transform .22s ease;
        }
        .pf-card:hover .pf-arrow { transform: scale(1.12); }

        /* marquee text variants */
        .pf-solid {
          font-size: clamp(2.4rem, 5.5vw, 5rem);
          font-weight: 900; font-family: 'Poppins',sans-serif;
          text-transform: uppercase; white-space: nowrap; padding: 0 24px;
          background: linear-gradient(90deg,#2dd4bf,#6366f1);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .pf-outline {
          font-size: clamp(2.4rem, 5.5vw, 5rem);
          font-weight: 900; font-family: 'Poppins',sans-serif;
          text-transform: uppercase; white-space: nowrap; padding: 0 24px;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,.20);
        }

        /* swiper overflow fix */
        .pf-swiper.swiper { overflow: visible; }
      `}</style>

      {/* dot grid */}
      <div className="pf-dot absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* ambient glows */}
      <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(45,212,191,.07) 0%,transparent 65%)" }} />
      <div className="absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(99,102,241,.07) 0%,transparent 65%)" }} />

      {/* top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(to right,#2dd4bf,#6366f1)" }} />

      {/* ── section label ── */}
      <div className="relative z-10 flex justify-center mb-6">
        <span
          className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{
            fontFamily: "'Poppins',sans-serif",
            background: "rgba(45,212,191,.10)",
            border: "1px solid rgba(45,212,191,.25)",
            color: "#2dd4bf",
          }}
        >
          Our Work
        </span>
      </div>

      {/* ── marquee heading ── */}
      <div className="overflow-hidden">
        <Marquee speed={130} pauseOnHover={false} gradient={false}>
          <span className="pf-solid">Digital Portfolio</span>
          <span className="pf-outline">Digital Portfolio</span>
          <span className="pf-solid">Digital Portfolio</span>
          <span className="pf-outline">Digital Portfolio</span>
          <span className="pf-solid">Digital Portfolio</span>
          <span className="pf-outline">Digital Portfolio</span>
        </Marquee>
      </div>

      {/* ── sub description ── */}
      <div className="relative z-10 max-w-xl mx-auto text-center px-4 mt-6 mb-12">
        <p
          className="text-sm sm:text-base leading-7"
          style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,.42)" }}
        >
          A glimpse of the digital experiences we've crafted — from startups to enterprises, across industries worldwide.
        </p>
      </div>

      {/* ── Swiper carousel ── */}
      <div className="relative z-10 overflow-hidden px-4 sm:px-6 md:px-10">
        <PortfolioCarousel items={portfolioItems} />
      </div>

      {/* ── CTA ── */}
      <div className="relative z-10 flex justify-center mt-12">
        <Link
          href="/our-portfolio"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white"
          style={{
            background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
            boxShadow: "0 4px 24px rgba(45,212,191,.28)",
            fontFamily: "'Poppins',sans-serif",
          }}
        >
          View All Projects <ArrowUpRight size={15} />
        </Link>
      </div>
    </section>
  );
}
