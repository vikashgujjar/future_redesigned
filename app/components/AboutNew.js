"use client";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: "/Assets/market-positioning.webp",
    title: "Brand Strategy & Art Direction",
    from: "#00D4FF",
    to: "#6366f1",
    num: "01",
  },
  {
    icon: "/Assets/ui.webp",
    title: "UX/UI Design & Website / App Design",
    from: "#6366f1",
    to: "#a855f7",
    num: "02",
  },
  {
    icon: "/Assets/trending-topic.webp",
    title: "Trending Designing Experience",
    from: "#00D4FF",
    to: "#06b6d4",
    num: "03",
  },
  {
    icon: "/Assets/compass.webp",
    title: "Digital Innovation & Solutions",
    from: "#4f46e5",
    to: "#00D4FF",
    num: "04",
  },
];

const stats = [
  { v: "7+", l: "Years" },
  { v: "500+", l: "Clients" },
  { v: "98%", l: "Retention" },
];

export default function AboutSection() {
  return (
    <section className="ab-section relative overflow-hidden bg-white">
      <style>{`
        /* ── Keyframes ── */
        @keyframes abSpin   { from{transform:rotate(0)}    to{transform:rotate(360deg)} }
        @keyframes abSpinR  { from{transform:rotate(360deg)} to{transform:rotate(0)} }
        @keyframes abFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes abFloat2 { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-14px) rotate(-2deg)} }
        @keyframes abFloat3 { 0%,100%{transform:translateY(0) rotate(2deg)}  50%{transform:translateY(-10px) rotate(2deg)} }
        @keyframes abBarIn  { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes abFadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes abPing   { 75%,100%{transform:scale(2);opacity:0} }
        @keyframes abSlide  { from{transform:translateX(-100%)} to{transform:translateX(400%)} }
        @keyframes abGlow   { 0%,100%{opacity:.6} 50%{opacity:1} }

        .ab-float1 { animation: abFloat2 9s ease-in-out infinite }
        .ab-float2 { animation: abFloat3 11s ease-in-out infinite 2s }
        .ab-float3 { animation: abFloat  6s ease-in-out infinite 1s }
        .ab-spin    { animation: abSpin  28s linear infinite; transform-origin: center }
        .ab-spinr   { animation: abSpinR 20s linear infinite; transform-origin: center }
        .ab-glow    { animation: abGlow   3s ease-in-out infinite }

        /* Number gradient */
        .ab-num {
          background: linear-gradient(135deg, #00D4FF, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        /* Feature card hover shimmer */
        .ab-card { position: relative; overflow: hidden }
        .ab-card::after {
          content: '';
          position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.5), transparent);
          transform: skewX(-15deg);
          transition: none;
        }
        .ab-card:hover::after { animation: abSlide .6s ease forwards }

        /* Stat gradient */
        .ab-stat-val {
          background: linear-gradient(135deg, #00D4FF, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        /* Heading gradient word */
        .ab-grad-word {
          background: linear-gradient(120deg, #00D4FF 0%, #6366f1 60%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        /* Divider bar animate */
        .ab-bar {
          animation: abBarIn .8s cubic-bezier(.22,1,.36,1) .4s both;
          transform-origin: left;
        }

        /* Ping dot */
        .ab-ping { position: relative }
        .ab-ping::after {
          content: ''; position: absolute; inset: 0; border-radius: 50%;
          background: inherit; animation: abPing 2s ease-out infinite;
        }

        /* CTA shimmer */
        .ab-cta { position: relative; overflow: hidden }
        .ab-cta::after {
          content: ''; position: absolute; top: 0; left: -80%; width: 55%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.22), transparent);
          transform: skewX(-18deg);
        }
        .ab-cta:hover::after { animation: abSlide .55s ease forwards }
      `}</style>

      {/* ══════════════════════════════════════════════
          LAYOUT — dark left strip + white right
      ══════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] min-h-[680px]">

        {/* ════════════════════
            LEFT — Dark panel
        ════════════════════ */}
        <div className="relative overflow-hidden bg-[#05060F] flex flex-col justify-center px-8 sm:px-12 lg:px-14 py-16 lg:py-20">

          {/* Background dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,.028) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Color blobs */}
          <div
            className="absolute -top-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(0,212,255,.12) 0%, transparent 68%)" }}
          />
          <div
            className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(99,102,241,.10) 0%, transparent 68%)" }}
          />

          {/* SVG rings — top right of dark panel */}
          <div className="absolute top-[-80px] right-[-60px] w-[280px] h-[280px] pointer-events-none">
            <svg viewBox="0 0 280 280" fill="none" width="280" height="280">
              <defs>
                <linearGradient id="abRg1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00D4FF" stopOpacity=".18"/>
                  <stop offset="100%" stopColor="#6366f1" stopOpacity=".02"/>
                </linearGradient>
              </defs>
              <circle cx="140" cy="140" r="128"
                stroke="url(#abRg1)" strokeWidth="1" strokeDasharray="55 85" strokeLinecap="round"
                className="ab-spin"/>
              <circle cx="140" cy="140" r="92"
                stroke="#00D4FF" strokeOpacity=".07" strokeWidth="1" strokeDasharray="38 60" strokeLinecap="round"
                className="ab-spinr"/>
              <circle cx="140" cy="140" r="58"
                stroke="#6366f1" strokeOpacity=".08" strokeWidth="1" strokeDasharray="24 40" strokeLinecap="round"
                className="ab-spin" style={{animationDuration:"40s"}}/>
            </svg>
          </div>

          {/* Grain texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[.036]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* ── Tag pill ── */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-7 self-start"
            style={{
              background: "linear-gradient(135deg, rgba(0,212,255,.16), rgba(99,102,241,.10))",
              border: "1px solid rgba(0,212,255,.28)",
            }}
          >
            <span
              className="ab-ping w-[7px] h-[7px] rounded-full flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #00D4FF, #6366f1)" }}
            />
            <span
              className="text-[10px] font-bold tracking-[.22em] uppercase"
              style={{
                background: "linear-gradient(90deg,#00D4FF,#6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              About Us
            </span>
          </div>

          {/* ── Big display heading ── */}
          <div className="mb-6">
            <p
              className="text-[13px] text-white/35 font-light italic tracking-[.04em] mb-1"
              style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
              Who we are
            </p>
            <h2
              className="font-extrabold leading-[1.0] tracking-[-0.04em] text-white m-0"
              style={{
                fontFamily: "'Syne','Helvetica Neue',sans-serif",
                fontSize: "clamp(2.4rem, 4.8vw, 4rem)",
              }}
            >
              Creative<br />
              Problem{" "}
              <span
                style={{
                  background: "linear-gradient(120deg,#00D4FF 0%,#6366f1 60%,#a855f7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Solving.
              </span>
            </h2>
          </div>

          {/* ── Thin accent bar ── */}
          <div
            className="ab-bar w-14 h-[2px] rounded-full mb-6"
            style={{ background: "linear-gradient(90deg,#00D4FF,#6366f1)" }}
          />

          {/* ── Description ── */}
          <p
            className="text-white/45 text-[14px] leading-[1.82] max-w-[420px] mb-8 font-normal"
            style={{ fontFamily: "'DM Sans',sans-serif" }}
          >
            Founded in 2017, Future IT Touch is a leading website designing and development
            company in India. We combine creativity and technical expertise to deliver
            exceptional digital results tailored to your needs.
          </p>

          {/* ── Stats row ── */}
          <div className="flex items-stretch gap-0 mb-10 max-w-[340px]">
            {stats.map((st, i) => (
              <div
                key={i}
                className={`flex-1 ${i > 0 ? "pl-5" : ""} ${i < stats.length - 1 ? "pr-5 border-r border-white/[.08]" : ""}`}
              >
                <div
                  className="ab-stat-val font-extrabold leading-none mb-1"
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: "clamp(1.5rem,2.5vw,2rem)",
                  }}
                >
                  {st.v}
                </div>
                <div className="text-[10px] text-white/30 tracking-[.12em] uppercase font-medium">
                  {st.l}
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <Link
            href="/contact"
            className="ab-cta self-start inline-flex items-center gap-2.5 font-bold text-[12px] tracking-[.12em] uppercase px-7 py-3.5 rounded-lg text-black no-underline transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg,#00D4FF,#6366f1)",
              boxShadow: "0 4px 28px rgba(0,212,255,.35), 0 0 0 1px rgba(0,212,255,.18)",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            Read More
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M1.5 6.5h9M7 2.5l4 4-4 4" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* ── "Since 2017" floating badge ── */}
          <div
            className="ab-float3 absolute bottom-8 right-0 translate-x-1/2 lg:translate-x-1/3 z-30
              bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-100/80 hidden lg:flex items-center gap-3"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
              style={{ background: "linear-gradient(135deg,#00D4FF,#6366f1)" }}
            >
              <svg width="16" height="16" viewBox="0 0 36 36" fill="none">
                <path d="M18 0L20.2 15.8L36 18L20.2 20.2L18 36L15.8 20.2L0 18L15.8 15.8Z" fill="white"/>
              </svg>
            </div>
            <div>
              <p
                className="text-[9px] text-gray-400 font-semibold uppercase tracking-widest leading-none mb-0.5"
                style={{ fontFamily: "'DM Sans',sans-serif" }}
              >
                Established
              </p>
              <p
                className="text-sm font-bold text-gray-800 leading-none"
                style={{ fontFamily: "'Syne',sans-serif" }}
              >
                Since 2017
              </p>
            </div>
          </div>
        </div>

        {/* ════════════════════
            RIGHT — Light panel
        ════════════════════ */}
        <div className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-14 py-16 lg:py-20 bg-white">

          {/* Soft bg accent */}
          <div
            className="absolute top-0 right-0 w-[55%] h-[45%] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(99,102,241,.05) 0%, transparent 65%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[40%] h-[35%] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(0,212,255,.05) 0%, transparent 65%)" }}
          />

          {/* ── Image composition ── */}
          <div className="relative h-[320px] sm:h-[380px] mb-10">

            {/* Dot grid behind images */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(99,102,241,.10) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Spinning ring — bottom left */}
            <div
              className="absolute bottom-2 left-2 w-28 h-28 rounded-full border-[1.5px] border-dashed border-[#00D4FF]/30 pointer-events-none ab-spin"
            />
            <div
              className="absolute bottom-6 left-6 w-16 h-16 rounded-full border border-dashed border-indigo-400/20 pointer-events-none ab-spinr"
            />

            {/* Main image */}
            <div
              className="ab-float1 absolute top-0 left-0 w-[62%] z-10 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-100/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/08 to-indigo-600/08 z-10 pointer-events-none rounded-2xl" />
              <Image
                src="/Assets/hero-about-1.webp"
                width={420} height={500}
                alt="Team working together"
                className="w-full h-auto object-cover block"
              />
              {/* Color tint */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(180deg,transparent 40%,rgba(5,6,15,.18) 100%)" }}
              />
            </div>

            {/* Secondary image */}
            <div
              className="ab-float2 absolute bottom-0 right-0 w-[50%] z-20 rounded-2xl overflow-hidden shadow-xl"
              style={{ border: "4px solid white" }}
            >
              <Image
                src="/Assets/h2-about-img-right.webp"
                width={300} height={340}
                alt="Creative digital solutions"
                className="w-full h-auto object-cover block"
              />
            </div>

            {/* Gradient bar under main image */}
            <div
              className="absolute bottom-0 left-0 w-[62%] h-[3px] rounded-full z-30"
              style={{ background: "linear-gradient(90deg,#00D4FF,#6366f1)" }}
            />

            {/* Sparkle */}
            <svg
              className="absolute -top-2 left-[32%] w-6 h-6 pointer-events-none ab-float3"
              style={{ opacity: .22 }}
              viewBox="0 0 36 36" fill="none"
            >
              <path d="M18 0L20.2 15.8L36 18L20.2 20.2L18 36L15.8 20.2L0 18L15.8 15.8Z" fill="#00D4FF"/>
            </svg>
          </div>

          {/* ── Feature cards — 2×2 ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feat, i) => (
              <div
                key={i}
                className="ab-card group flex items-center gap-3.5 p-4 rounded-2xl border border-gray-100
                  hover:border-transparent bg-white hover:shadow-lg hover:shadow-indigo-100/40
                  transition-all duration-300 cursor-default"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Left accent bar */}
                <div
                  className="ab-bar absolute left-0 top-0 h-full w-0.5 rounded-r-full"
                  style={{
                    background: `linear-gradient(to bottom, ${feat.from}, ${feat.to})`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />

                {/* Number */}
                <span
                  className="ab-num text-[11px] font-black tracking-[.06em] flex-shrink-0 w-6 text-center"
                  style={{ fontFamily: "'Syne',sans-serif" }}
                >
                  {feat.num}
                </span>

                {/* Icon */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg,${feat.from}18,${feat.to}18)` }}
                >
                  <Image
                    src={feat.icon}
                    width={22} height={22}
                    alt={feat.title}
                    className="w-[22px] h-[22px] object-contain"
                  />
                </div>

                {/* Title */}
                <h5
                  className="text-[13px] font-bold text-gray-700 group-hover:text-indigo-700 leading-snug transition-colors m-0"
                  style={{ fontFamily: "'DM Sans',sans-serif" }}
                >
                  {feat.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}