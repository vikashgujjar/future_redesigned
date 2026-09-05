"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import GetNewInsight from "./GetNewInsight";
import TestimonialCarousel from "./TestimonialCarousel";

/* ── Fallback reviews shown when API is unavailable ─────────────── */
const FALLBACK_REVIEWS = [
  {
    text: "Future IT Touch delivered an outstanding website for our business. The team was professional, responsive, and delivered exactly what we needed on time. We've seen a significant increase in online inquiries since the launch!",
    author_name: "Rahul Mehta",
    rating: 5,
    profile_photo_url: null,
  },
  {
    text: "Exceptional service from start to finish. The digital marketing campaign they ran for us resulted in a 3× increase in leads within the first month. Highly recommend their SEO and PPC services!",
    author_name: "Priya Sharma",
    rating: 5,
    profile_photo_url: null,
  },
  {
    text: "We hired Future IT Touch for our mobile app and couldn't be happier. The app is sleek, fast, and users love it. Their team's technical expertise is top-notch and communication was seamless throughout.",
    author_name: "Amit Patel",
    rating: 5,
    profile_photo_url: null,
  },
  {
    text: "The team understood our brand vision perfectly and created a website that truly represents who we are. Every feedback was implemented quickly. Highly satisfied with the final result!",
    author_name: "Sneha Kapoor",
    rating: 5,
    profile_photo_url: null,
  },
  {
    text: "Professional, creative and results-driven. Our ecommerce sales went up significantly after they redesigned our website and optimised it for search engines. Excellent investment for any business!",
    author_name: "Vikram Singh",
    rating: 5,
    profile_photo_url: null,
  },
];

const FALLBACK_STATS = [
  { v: "1200+", l: "Happy Clients" },
  { v: "4.9/5", l: "Avg. Rating" },
  { v: "100%", l: "Satisfaction" },
];

const Testimonial = ({ cms } = {}) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const badge = cms?.badge || "Client Reviews";
  const subLabel = cms?.sub_label || "What our clients say about Future IT Touch Pvt. Ltd.";
  const heading = cms?.heading || "Over 1200+ Satisfied Clients and Growing";
  const headingHighlight = "Satisfied Clients";
  const readMoreLabel = cms?.read_more_label || "Read More Reviews";
  const statsList = cms?.stats?.length ? cms.stats : FALLBACK_STATS;

  useEffect(() => {
    /* CMS testimonials (Laravel) are the fallback tier if Google reviews are
       unavailable — only the small hardcoded array below is the last resort
       if the CMS itself is unreachable. */
    const fetchCmsTestimonials = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) return null;
      try {
        const res = await fetch(`${apiUrl}/testimonials`);
        if (!res.ok) return null;
        const json = await res.json();
        return json?.data?.length ? json.data : null;
      } catch (err) {
        console.error(`[cms] /testimonials unreachable (${err.message}) — falling back further.`);
        return null;
      }
    };

    const fetchGoogleReviews = async () => {
      try {
        const storedReviews = localStorage.getItem("reviews");
        if (storedReviews) {
          setReviews(JSON.parse(storedReviews));
          setLoading(false);
        }
        const placeId = "ChIJSVD7Y4mDGjkRSnZM3ca4iEE";
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_API_KEY;
        if (!apiKey) throw new Error("NEXT_PUBLIC_GOOGLE_REVIEWS_API_KEY not configured");
        const qs = new URLSearchParams({ placeId, apiKey });
        const response = await fetch(`https://googlemapreviews-1.onrender.com/api/google-reviews?${qs}`);
        const fetched = await response.json();
        if (fetched?.length) {
          localStorage.setItem("reviews", JSON.stringify(fetched));
          setReviews(fetched);
          setLoading(false);
          return;
        }
        throw new Error("empty response");
      } catch (error) {
        console.error("Error fetching Google reviews:", error);
        const cmsReviews = await fetchCmsTestimonials();
        if (cmsReviews) setReviews(cmsReviews);
        setLoading(false);
      }
    };
    fetchGoogleReviews();
  }, []);

  /* use live reviews if loaded, otherwise show the last-resort hardcoded set */
  const displayReviews = reviews.length > 0 ? reviews : FALLBACK_REVIEWS;

  /* ── loading skeleton ─────────────────────────────── */
  if (loading) {
    return (
      <section className="py-24 px-4 sm:px-8 xl:px-24"
        style={{ background: "linear-gradient(160deg,#f8faff 0%,#ffffff 50%,#f5f7ff 100%)" }}>
        <div className="flex flex-col items-center justify-center gap-4 min-h-[260px]">
          <div className="w-10 h-10 rounded-full border-2 border-teal-400 border-t-transparent animate-spin" />
          <p className="text-sm text-gray-400" style={{ fontFamily: "'Inter',sans-serif" }}>
            Loading reviews…
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* ══════════════════════════════════════════
          TESTIMONIAL SECTION
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-8 xl:px-24"
        style={{ background:"linear-gradient(145deg,#f0fdf9 0%,#f8faff 35%,#f5f3ff 72%,#fdf8ff 100%)" }}>

        <style>{`
          @keyframes tmFloat {
            0%,100%{ transform:translateY(0); opacity:.6; }
            50%    { transform:translateY(-7px); opacity:1; }
          }
          @keyframes tmDiaCW  { from{transform:rotate(0deg)}   to{transform:rotate(360deg)}  }
          @keyframes tmDiaCCW { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }
          @keyframes tmSpark  {
            0%,100%{ opacity:.5; transform:scale(1);   }
            50%    { opacity:1;  transform:scale(1.55); }
          }
          .tm-dot {
            background-image: radial-gradient(circle,rgba(99,102,241,.07) 1px,transparent 1px);
            background-size: 26px 26px;
          }
          .tm-swiper { padding-bottom: 8px !important; }
          .tm-swiper .swiper-slide { height: auto; }
        `}</style>

        {/* ── dot grid ─────────────────────────────── */}
        <div className="tm-dot absolute inset-0 pointer-events-none" aria-hidden="true" />

        {/* ── radial glows ─────────────────────────── */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(45,212,191,.13) 0%,transparent 60%)" }} />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(99,102,241,.15) 0%,transparent 60%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[300px] pointer-events-none"
          style={{ background:"radial-gradient(ellipse,rgba(99,102,241,.04) 0%,transparent 70%)" }} />

        {/* ── TOP-LEFT: rotating nested diamonds (teal) ── */}
        <svg className="absolute top-0 left-0 pointer-events-none" width="280" height="280"
          viewBox="0 0 280 280" fill="none" aria-hidden="true">
          <g style={{ transformOrigin:"0px 0px", animation:"tmDiaCW 32s linear infinite" }}>
            <polygon points="110,0 0,110 -110,0 0,-110"
              stroke="rgba(45,212,191,.22)" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
          </g>
          <g style={{ transformOrigin:"0px 0px", animation:"tmDiaCCW 24s linear infinite" }}>
            <polygon points="74,0 0,74 -74,0 0,-74"
              stroke="rgba(45,212,191,.16)" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
          </g>
          <g style={{ transformOrigin:"0px 0px", animation:"tmDiaCW 44s linear infinite" }}>
            <polygon points="44,0 0,44 -44,0 0,-44"
              stroke="rgba(6,182,212,.13)" strokeWidth="1" fill="none" strokeLinecap="round"/>
          </g>
          <g transform="translate(70,58)" style={{ animation:"tmSpark 4.2s ease-in-out infinite" }}>
            <line x1="-4" y1="0" x2="4" y2="0" stroke="rgba(45,212,191,.75)" strokeWidth="2" strokeLinecap="round"/>
            <line x1="0" y1="-4" x2="0" y2="4" stroke="rgba(45,212,191,.75)" strokeWidth="2" strokeLinecap="round"/>
          </g>
          <g transform="translate(128,26)" style={{ animation:"tmSpark 6s ease-in-out 1.4s infinite" }}>
            <line x1="-3" y1="-3" x2="3" y2="3" stroke="rgba(6,182,212,.65)" strokeWidth="1.6" strokeLinecap="round"/>
            <line x1="3" y1="-3" x2="-3" y2="3" stroke="rgba(6,182,212,.65)" strokeWidth="1.6" strokeLinecap="round"/>
          </g>
          <circle cx="44" cy="105" r="2" fill="#2dd4bf" opacity="0.28"
            style={{ animation:"tmFloat 5s ease-in-out 2s infinite" }}/>
        </svg>

        {/* ── BOTTOM-RIGHT: rotating nested hexagons (indigo) ── */}
        <svg className="absolute bottom-0 right-0 pointer-events-none" width="280" height="280"
          viewBox="0 0 280 280" fill="none" aria-hidden="true">
          {/* hex r=105, center (280,280) */}
          <g style={{ transformOrigin:"280px 280px", animation:"tmDiaCCW 30s linear infinite" }}>
            <polygon points="385,280 332.5,189.1 227.5,189.1 175,280 227.5,370.9 332.5,370.9"
              stroke="rgba(99,102,241,.22)" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
          </g>
          {/* hex r=70 */}
          <g style={{ transformOrigin:"280px 280px", animation:"tmDiaCW 22s linear infinite" }}>
            <polygon points="350,280 315,219.2 245,219.2 210,280 245,340.8 315,340.8"
              stroke="rgba(99,102,241,.16)" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
          </g>
          {/* hex r=42 */}
          <g style={{ transformOrigin:"280px 280px", animation:"tmDiaCCW 38s linear infinite" }}>
            <polygon points="322,280 301,243.6 259,243.6 238,280 259,316.4 301,316.4"
              stroke="rgba(139,92,246,.13)" strokeWidth="1" fill="none" strokeLinecap="round"/>
          </g>
          <g transform="translate(210,212)" style={{ animation:"tmSpark 4.8s ease-in-out infinite" }}>
            <line x1="-4" y1="0" x2="4" y2="0" stroke="rgba(99,102,241,.75)" strokeWidth="2" strokeLinecap="round"/>
            <line x1="0" y1="-4" x2="0" y2="4" stroke="rgba(99,102,241,.75)" strokeWidth="2" strokeLinecap="round"/>
          </g>
          <g transform="translate(248,178)" style={{ animation:"tmSpark 6.4s ease-in-out 2s infinite" }}>
            <line x1="-3" y1="-3" x2="3" y2="3" stroke="rgba(139,92,246,.60)" strokeWidth="1.6" strokeLinecap="round"/>
            <line x1="3" y1="-3" x2="-3" y2="3" stroke="rgba(139,92,246,.60)" strokeWidth="1.6" strokeLinecap="round"/>
          </g>
          <circle cx="190" cy="248" r="2" fill="#8b5cf6" opacity="0.25"
            style={{ animation:"tmFloat 6s ease-in-out 1s infinite" }}/>
        </svg>

        {/* ── Ghost quote marks — thematic backdrop ── */}
        <div className="absolute top-8 left-[42%] pointer-events-none select-none" aria-hidden="true"
          style={{ fontSize:"210px", lineHeight:1, userSelect:"none",
            color:"rgba(45,212,191,.055)", fontFamily:"Georgia,'Times New Roman',serif" }}>
          &#8220;
        </div>
        <div className="absolute bottom-4 right-[36%] pointer-events-none select-none" aria-hidden="true"
          style={{ fontSize:"210px", lineHeight:1, userSelect:"none",
            color:"rgba(99,102,241,.05)", fontFamily:"Georgia,'Times New Roman',serif" }}>
          &#8221;
        </div>

        {/* ──────────────────────────────────────────
            TWO-COLUMN LAYOUT
        ────────────────────────────────────────── */}
        <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* ── LEFT: heading + platform links ───── */}
          <div className="flex flex-col gap-5">

            {/* badge */}
            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full"
              style={{ background: "rgba(45,212,191,.10)", border: "1px solid rgba(45,212,191,.28)" }}>
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 animate-pulse flex-shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-widest bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent"
                style={{ fontFamily: "'Inter',sans-serif" }}>
                {badge}
              </span>
            </div>

            {/* sub-label */}
            <p className="text-sm font-semibold"
              style={{ fontFamily: "'Inter',sans-serif", color: "rgba(99,102,241,.80)" }}>
              {subLabel}
            </p>

            {/* heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight text-gray-900"
              style={{ fontFamily: "'Poppins',sans-serif" }}>
              {heading.includes(headingHighlight)
                ? heading.split(headingHighlight).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="bg-gradient-to-r from-teal-400 to-indigo-700 bg-clip-text text-transparent">
                          {headingHighlight}
                        </span>
                      )}
                    </span>
                  ))
                : heading}
            </h2>

            {/* divider */}
            <div className="w-14 h-1 rounded-full"
              style={{ background: "linear-gradient(to right,#2dd4bf,#6366f1)" }} />

            {/* stats row */}
            <div className="flex gap-8 py-4"
              style={{ borderTop: "1px solid rgba(99,102,241,.08)", borderBottom: "1px solid rgba(99,102,241,.08)" }}>
              {statsList.map((s, i) => (
                <div key={i}>
                  <p className="text-xl font-black bg-gradient-to-br from-teal-400 to-indigo-500 bg-clip-text text-transparent"
                    style={{ fontFamily: "'Poppins',sans-serif" }}>
                    {s.v}
                  </p>
                  <p className="text-xs mt-0.5 text-gray-400"
                    style={{ fontFamily: "'Inter',sans-serif" }}>
                    {s.l}
                  </p>
                </div>
              ))}
            </div>

            {/* read more reviews */}
            <div>
              <h4 className="text-sm font-bold text-gray-700 mb-3" style={{ fontFamily: "'Poppins',sans-serif" }}>
                {readMoreLabel}
              </h4>
              <div className="flex items-center gap-4">
                <Link href="https://g.co/kgs/Xpqu7J" target="_blank" rel="noopener noreferrer"
                  className="transition-transform hover:-translate-y-0.5 duration-200">
                  <Image src="/Assets/reviews-icon-1.webp" width={60} height={60} alt="Google review" />
                </Link>
                <Link href="#" rel="noopener noreferrer"
                  className="transition-transform hover:-translate-y-0.5 duration-200">
                  <Image src="/Assets/reviews-icon-2.webp" width={60} height={60} alt="Review platform 2" />
                </Link>
                <Link href="#" rel="noopener noreferrer"
                  className="transition-transform hover:-translate-y-0.5 duration-200">
                  <Image src="/Assets/reviews-icon-3.webp" width={60} height={60} alt="Review platform 3" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Swiper carousel ────────────── */}
          <div className="relative">
            {/* top accent glow behind card */}
            <div className="absolute -inset-4 rounded-3xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 60% 0%,rgba(45,212,191,.08) 0%,transparent 60%)" }} />

            <TestimonialCarousel reviews={displayReviews} />

          </div>
        </div>
      </section>

      {/* GetNewInsight rendered below */}
      <GetNewInsight />
    </>
  );
};

export default Testimonial;
