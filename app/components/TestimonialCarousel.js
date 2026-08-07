"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaQuoteRight, FaStar, FaChevronLeft, FaChevronRight } from "./icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function TestimonialCarousel({ reviews }) {
  const swiperRef = useRef(null);

  return (
    <>
      <Swiper
        ref={swiperRef}
        loop={true}
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        className="tm-swiper"
      >
        {reviews.map((review, index) => (
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
    </>
  );
}
