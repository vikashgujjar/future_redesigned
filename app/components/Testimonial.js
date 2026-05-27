"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaQuoteRight, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import GetNewInsight from "./GetNewInsight";

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

const Testimonial = () => {
  const swiperRef = useRef(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        const storedReviews = localStorage.getItem("reviews");
        if (storedReviews) {
          setReviews(JSON.parse(storedReviews));
          setLoading(false);
        }
        const placeId = "ChIJSVD7Y4mDGjkRSnZM3ca4iEE";
        const apiKey = "AIzaSyD-LPUhqM4jZ6O5YVt07jyeEuNOLT5ObIM";
        const response = await axios.get(
          `https://googlemapreviews-1.onrender.com/api/google-reviews`,
          { params: { placeId, apiKey } }
        );
        const fetched = response.data;
        localStorage.setItem("reviews", JSON.stringify(fetched));
        setReviews(fetched);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Google reviews:", error);
        setLoading(false);
      }
    };
    fetchGoogleReviews();
  }, []);

  /* use live reviews if loaded, otherwise show fallback */
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
                Client Reviews
              </span>
            </div>

            {/* sub-label */}
            <p className="text-sm font-semibold"
              style={{ fontFamily: "'Inter',sans-serif", color: "rgba(99,102,241,.80)" }}>
              What our clients say about Future IT Touch Pvt. Ltd.
            </p>

            {/* heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight text-gray-900"
              style={{ fontFamily: "'Poppins',sans-serif" }}>
              Over 1200+{" "}
              <span className="bg-gradient-to-r from-teal-400 to-indigo-700 bg-clip-text text-transparent">
                Satisfied Clients
              </span>{" "}
              and Growing
            </h2>

            {/* divider */}
            <div className="w-14 h-1 rounded-full"
              style={{ background: "linear-gradient(to right,#2dd4bf,#6366f1)" }} />

            {/* stats row */}
            <div className="flex gap-8 py-4"
              style={{ borderTop: "1px solid rgba(99,102,241,.08)", borderBottom: "1px solid rgba(99,102,241,.08)" }}>
              {[
                { v: "1200+", l: "Happy Clients" },
                { v: "4.9/5", l: "Avg. Rating" },
                { v: "100%", l: "Satisfaction" },
              ].map((s, i) => (
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
                Read More Reviews
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

            <Swiper
              ref={swiperRef}
              loop={true}
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              className="tm-swiper"
            >
              {displayReviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="relative rounded-2xl p-6 sm:p-8"
                    style={{
                      background: "white",
                      border: "1px solid rgba(99,102,241,.10)",
                      boxShadow: "0 8px 40px rgba(99,102,241,.09), 0 2px 8px rgba(0,0,0,.04)",
                    }}>

                    {/* accent top bar */}
                    <div className="absolute top-0 left-8 right-8 h-0.5 rounded-b-full"
                      style={{ background: "linear-gradient(to right,#2dd4bf,#6366f1)" }} />

                    {/* large ghost quote mark */}
                    <FaQuoteRight
                      className="absolute top-5 right-6 text-6xl pointer-events-none"
                      style={{ color: "rgba(99,102,241,.07)" }}
                    />

                    {/* star rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(Math.min(5, Number(review.rating) || 5))].map((_, i) => (
                        <FaStar key={i} className="text-amber-400 text-sm" />
                      ))}
                    </div>

                    {/* review text */}
                    <p
                      className="text-[15px] leading-7 mb-6 overflow-y-auto"
                      style={{
                        fontFamily: "'Inter',sans-serif",
                        color: "rgba(55,65,81,.78)",
                        maxHeight: "7.5rem",
                      }}>
                      {review.text}
                    </p>

                    {/* author row */}
                    <div className="flex items-center justify-between pt-5"
                      style={{ borderTop: "1px solid rgba(99,102,241,.07)" }}>
                      <div className="flex items-center gap-3">
                        {/* avatar */}
                        <div className="relative flex-shrink-0">
                          {review.profile_photo_url ? (
                            <Image
                              src={review.profile_photo_url}
                              width={48}
                              height={48}
                              alt={review.author_name || "Reviewer"}
                              className="w-12 h-12 rounded-full object-cover"
                              style={{ border: "2px solid rgba(45,212,191,.35)" }}
                              onError={(e) => { e.currentTarget.style.display = "none"; }}
                            />
                          ) : (
                            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
                              style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", border: "2px solid rgba(45,212,191,.35)" }}>
                              {(review.author_name || "?")[0].toUpperCase()}
                            </div>
                          )}
                          {/* verified dot */}
                          <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                            style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)" }}>
                            <svg width="8" height="8" viewBox="0 0 12 12" fill="white">
                              <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </div>

                        <div>
                          <h5 className="text-sm font-bold text-gray-800"
                            style={{ fontFamily: "'Poppins',sans-serif" }}>
                            {review.author_name}
                          </h5>
                          <p className="text-[11px] text-gray-400 mt-0.5"
                            style={{ fontFamily: "'Inter',sans-serif" }}>
                            Verified Google Review
                          </p>
                        </div>
                      </div>

                      {/* google icon badge */}
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(99,102,241,.07)" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                      </div>
                    </div>
                    
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* custom nav buttons */}
            <div className="flex items-center gap-3 mt-5 justify-end">
              <button
                onClick={() => swiperRef.current?.swiper?.slidePrev()}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-px"
                style={{ border: "1.5px solid rgba(99,102,241,.20)", background: "white", color: "#6366f1" }}
                aria-label="Previous review"
              >
                <FaChevronLeft className="text-sm" />
              </button>
              <button
                onClick={() => swiperRef.current?.swiper?.slideNext()}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-px shadow-md"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", color: "white" }}
                aria-label="Next review"
              >
                <FaChevronRight className="text-sm" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* GetNewInsight rendered below */}
      <GetNewInsight />
    </>
  );
};

export default Testimonial;
