"use client";
import { FaChevronRight } from "react-icons/fa";

export default function GetNewInsight() {
  return (
    <section
      className="relative overflow-hidden py-14 sm:py-16 px-4 sm:px-8 xl:px-24"
      style={{ background: "linear-gradient(135deg,#0d9488 0%,#4338ca 55%,#4f46e5 100%)" }}
    >
      {/* ── Decorative circles (same pattern as mega-menu promo card) ── */}
      <div className="absolute -top-12 -right-12 w-60 h-60 rounded-full pointer-events-none"
        style={{ background:"rgba(255,255,255,.10)" }} />
      <div className="absolute -bottom-14 -left-14 w-52 h-52 rounded-full pointer-events-none"
        style={{ background:"rgba(255,255,255,.08)" }} />
      <div className="absolute top-1/2 -translate-y-1/2 right-[28%] w-14 h-14 rounded-full pointer-events-none"
        style={{ background:"rgba(255,255,255,.06)" }} />
      <div className="absolute top-4 left-[40%] w-8 h-8 rounded-full pointer-events-none"
        style={{ background:"rgba(255,255,255,.07)" }} />
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full pointer-events-none"
        style={{ background:"rgba(255,255,255,.05)" }} />

      {/* content */}
      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* left — text */}
        <div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug"
            style={{ fontFamily:"'Poppins',sans-serif" }}>
            Get New Insights{" "}
            <span style={{ color:"#7dd3fa" }}>Weekly</span>
          </h2>
          <p
            className="mt-3 text-sm sm:text-base leading-relaxed"
            style={{ fontFamily:"'Inter',sans-serif", color:"rgba(255,255,255,.72)" }}>
            Your personal data is secure as per our policy. We don&apos;t share your
            personal information.{" "}
            <span style={{ color:"rgba(255,255,255,.90)", fontWeight:600 }}>
              Freely Subscribe!
            </span>
          </p>
        </div>

        {/* right — form */}
        <div>
          <form
            className="flex items-center rounded-full overflow-hidden shadow-xl"
            style={{
              background: "rgba(255,255,255,.12)",
              border: "1.5px solid rgba(255,255,255,.22)",
              backdropFilter: "blur(10px)",
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              name="emails"
              className="flex-1 bg-transparent outline-none text-white placeholder-white/50 text-sm px-5 sm:px-6 h-14"
              style={{ fontFamily:"'Inter',sans-serif" }}
            />
            <button
              type="submit"
              name="submit"
              className="flex items-center gap-2 font-semibold text-sm px-5 sm:px-7 h-10 sm:h-11 m-1.5 rounded-full
                hover:-translate-y-px hover:shadow-lg transition-all duration-200"
              style={{
                fontFamily:"'Poppins',sans-serif",
                background: "white",
                color: "#4338ca",
                flexShrink: 0,
              }}
            >
              Subscribe
              <FaChevronRight className="text-xs" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
