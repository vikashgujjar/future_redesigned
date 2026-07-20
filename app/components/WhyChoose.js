"use client";
import { useState } from "react";
import Image from "next/image";
import { FaAngleRight, FaCheckCircle, FaAward, FaRocket, FaClock } from "react-icons/fa";
import Login from "./Login";
import { COMPANY_START_YEAR } from "../lib/companyStats";

const features = [
  {
    number: "01",
    icon: FaRocket,
    img: "/Assets/online-test.webp",
    title: "Streamlined Project Management",
    desc: "Proper allocation of tasks, clear milestones, and deadline-driven workflows ensure every project runs on schedule.",
    from: "#2dd4bf", to: "#6366f1",
  },
  {
    number: "02",
    icon: FaAward,
    img: "/Assets/employee.webp",
    title: "Dedicated Team of Experts",
    desc: "A mature team of skilled engineers committed to delivering quality software solutions for long-term business growth.",
    from: "#6366f1", to: "#8b5cf6",
  },
  {
    number: "03",
    icon: FaClock,
    img: "/Assets/hand-shake.webp",
    title: "Completion of Project in Given Time",
    desc: "A clear project timetable organizes tasks, resources and due dates so every deliverable lands on time and on budget.",
    from: "#0ea5e9", to: "#2dd4bf",
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "8+",   label: "Years Experience"   },
  { value: "200+", label: "Happy Clients"       },
];

const WhyChoose = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 xl:px-24">

      <style>{`
        @keyframes wcCW  { from{transform:rotate(0deg)}  to{transform:rotate(360deg)}  }
        @keyframes wcCCW { from{transform:rotate(0deg)}  to{transform:rotate(-360deg)} }
        @keyframes wcFloat {
          0%,100%{ transform:translateY(0px) scale(1);    opacity:.55; }
          50%    { transform:translateY(-9px) scale(1.4); opacity:1;   }
        }
        @keyframes wcFadeSlide {
          from{ opacity:0; transform:translateY(20px); }
          to  { opacity:1; transform:translateY(0);    }
        }
        @keyframes wcPulseRing {
          0%  { transform:scale(1);    opacity:.30; }
          70% { transform:scale(1.15); opacity:0;   }
          100%{ transform:scale(1.15); opacity:0;   }
        }
        .wc-dot-bg {
          background-image: radial-gradient(circle, rgba(99,102,241,.08) 1px, transparent 1px);
          background-size: 26px 26px;
        }
        .wc-card { animation: wcFadeSlide .55s ease both; }
        .wc-card:nth-child(1){ animation-delay:.05s }
        .wc-card:nth-child(2){ animation-delay:.12s }
        .wc-card:nth-child(3){ animation-delay:.19s }
        .wc-card:nth-child(4){ animation-delay:.26s }
        .wc-card:nth-child(5){ animation-delay:.33s }
        .wc-card:nth-child(6){ animation-delay:.40s }
        .wc-feat:hover { transform:translateY(-4px); }
        .wc-feat { transition: transform .25s ease, box-shadow .25s ease; }
        .wc-feat:hover { box-shadow: 0 16px 40px rgba(99,102,241,.12); }
        .wc-pulse-ring {
          position:absolute; border-radius:50%;
          animation: wcPulseRing 2.4s ease-out infinite;
        }
      `}</style>

      {/* dot grid */}
      <div className="wc-dot-bg absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* radial glows */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(45,212,191,.09) 0%,transparent 65%)" }} aria-hidden="true"/>
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(99,102,241,.09) 0%,transparent 65%)" }} aria-hidden="true"/>

      {/* ── small floating vector — top-right area ─── */}
      <svg className="absolute top-10 right-10 pointer-events-none" width="120" height="120"
        viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <g style={{ transformOrigin:"60px 60px", animation:"wcCW 22s linear infinite" }}>
          <polygon points="60,8 112,38 112,82 60,112 8,82 8,38"
            stroke="rgba(45,212,191,.18)" strokeWidth="1.2"
            strokeDasharray="12 7" strokeLinecap="round" fill="none"/>
        </g>
        <g style={{ transformOrigin:"60px 60px", animation:"wcCCW 15s linear infinite" }}>
          <polygon points="60,22 98,44 98,76 60,98 22,76 22,44"
            stroke="rgba(34,211,238,.24)" strokeWidth="1" strokeDasharray="8 5" fill="none"/>
        </g>
        <g transform="translate(60,60)" style={{ animation:"wcFloat 4s ease-in-out infinite" }}>
          <line x1="-5" y1="0" x2="5" y2="0" stroke="rgba(45,212,191,.7)" strokeWidth="2" strokeLinecap="round"/>
          <line x1="0" y1="-5" x2="0" y2="5" stroke="rgba(45,212,191,.7)" strokeWidth="2" strokeLinecap="round"/>
        </g>
      </svg>

      {/* ── small floating vector — bottom-left area ─ */}
      <svg className="absolute bottom-16 left-8 pointer-events-none" width="100" height="100"
        viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <g style={{ transformOrigin:"50px 50px", animation:"wcCCW 18s linear infinite" }}>
          <polygon points="50,6 94,29 94,71 50,94 6,71 6,29"
            stroke="rgba(99,102,241,.18)" strokeWidth="1.2"
            strokeDasharray="11 6" strokeLinecap="round" fill="none"/>
        </g>
        <g style={{ transformOrigin:"50px 50px", animation:"wcCW 12s linear infinite" }}>
          <polygon points="50,20 80,36 80,64 50,80 20,64 20,36"
            stroke="rgba(139,92,246,.24)" strokeWidth="1" strokeDasharray="7 5" fill="none"/>
        </g>
        <g transform="translate(50,50)" style={{ animation:"wcFloat 5s ease-in-out 1.2s infinite" }}>
          <line x1="-4" y1="-4" x2="4" y2="4" stroke="rgba(99,102,241,.65)" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="4" y1="-4" x2="-4" y2="4" stroke="rgba(99,102,241,.65)" strokeWidth="1.8" strokeLinecap="round"/>
        </g>
      </svg>

      {/* ══════════════════════════════════════════
          BENTO GRID
          Desktop: 3 cols
          Row 1: heading(col-span-2) | image(row-span-2)
          Row 2: feat1 | feat2      | image(cont.)
          Row 3: feat3 | cta(col-span-2)
      ══════════════════════════════════════════ */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">

        {/* ─── CARD 1: Heading (col-span-2) ─────────── */}
        <div className="wc-card md:col-span-2 lg:col-span-2 rounded-3xl border border-gray-100 bg-white p-8 lg:p-10 shadow-sm flex flex-col justify-center gap-4">

          {/* badge */}
          <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full"
            style={{ background:"rgba(204,251,241,.7)", border:"1px solid rgba(45,212,191,.35)" }}>
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-indigo-500" />
            <span className="text-[11px] font-bold uppercase tracking-widest"
              style={{ fontFamily:"'Inter',sans-serif",
                background:"linear-gradient(to right,#2dd4bf,#6366f1)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Why Choose Us
            </span>
          </div>

          {/* script */}
          {/* <span className="text-4xl lg:text-5xl block bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text -mb-1"
            style={{ fontFamily:"'Bilbo Swash Caps',cursive" }}>
            Why Choose Us
          </span> */}

          {/* heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold leading-snug text-gray-900"
            style={{ fontFamily:"'Poppins',sans-serif" }}>
            Why{" "}
            <span style={{ background:"linear-gradient(to right,#2dd4bf,#6366f1)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Future IT Touch Pvt. Ltd.
            </span>{" "}
            Ranked Top Among Leading Web &amp; App Development Companies
          </h2>

          {/* divider */}
          <div className="w-14 h-1 rounded-full"
            style={{ background:"linear-gradient(to right,#2dd4bf,#6366f1)" }} />

          {/* description */}
          <p className="text-gray-500 text-base leading-7"
            style={{ fontFamily:"'Inter',sans-serif" }}>
            Our <strong className="text-gray-800 font-semibold">top IT company in India,</strong>{" "}
            known for innovation and top-notch solutions, offers web development, software, and
            mobile app development services — driving business growth and staying at the
            forefront of technology.
          </p>

          {/* second description */}
          <p className="text-gray-500 text-sm leading-7"
            style={{ fontFamily:"'Inter',sans-serif" }}>
            As a top web development company, we create robust, scalable websites for diverse
            business objectives. Our skilled developers use the latest technologies to deliver
            flawless, on-time, and budget-friendly projects, making us a trusted partner for
            web development endeavors. From static sites to complex web apps, we hand over on
            time and budget. We are your trusted partner in crafting visually stunning and
            highly functional websites that leave a lasting impression. Elevate your online
            presence with <strong className="text-gray-800 font-semibold">Future IT Touch.</strong>
          </p>

          {/* mini stats row */}
          {/* <div className="flex flex-wrap gap-6 pt-2 border-t border-gray-100 mt-1">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-2xl font-black text-gray-900"
                  style={{ fontFamily:"'Poppins',sans-serif",
                    background:"linear-gradient(135deg,#2dd4bf,#6366f1)",
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  {s.value}
                </p>
                <p className="text-xs text-gray-400 mt-0.5"
                  style={{ fontFamily:"'Inter',sans-serif" }}>{s.label}</p>
              </div>
            ))}
          </div> */}
        </div>

        {/* ─── CARD 2: Image (row-span-2) ─────────────── */}
        <div className="wc-card md:col-span-2 lg:col-span-1 lg:row-span-2 relative rounded-3xl overflow-visible min-h-[320px]">

          {/* solid circle bg — bottom-left, half outside */}
          <div className="absolute rounded-full pointer-events-none"
            style={{ width:200, height:200, bottom:-55, left:-55,
              background:"linear-gradient(135deg,#2dd4bf,#6366f1)",
              opacity:.20, zIndex:0 }} aria-hidden="true"/>
          <div className="absolute rounded-full pointer-events-none"
            style={{ width:110, height:110, bottom:-15, left:-10,
              background:"linear-gradient(135deg,#06b6d4,#2dd4bf)",
              opacity:.28, zIndex:0 }} aria-hidden="true"/>

          {/* pulse ring on circle */}
          <div className="wc-pulse-ring pointer-events-none"
            style={{ width:200, height:200, bottom:-55, left:-55,
              border:"2px solid rgba(45,212,191,.35)", zIndex:0 }} aria-hidden="true"/>

          {/* image */}
          <div className="relative w-full h-full min-h-[320px] rounded-3xl overflow-hidden shadow-xl" style={{ zIndex:1 }}>
            <Image src="/Assets/company.webp" fill
              alt="Future IT Touch office" className="object-cover"/>
            {/* sheen */}
            <div className="absolute inset-0"
              style={{ background:"linear-gradient(160deg,rgba(45,212,191,.08) 0%,transparent 50%,rgba(99,102,241,.10) 100%)" }}/>
          </div>

          {/* badge */}
          <div className="absolute bottom-4 sm:bottom-4 left-5 flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-xl"
            style={{ background:"linear-gradient(135deg,#2dd4bf,#6366f1)", zIndex:2 }}>
            <FaCheckCircle className="text-white text-sm"/>
            <span className="text-white text-xs font-bold tracking-wide"
              style={{ fontFamily:"'Poppins',sans-serif" }}>Trusted Since {COMPANY_START_YEAR}</span>
          </div>

          {/* spinning hexagon decoration on image top-right */}
          <svg className="absolute top-4 right-4 pointer-events-none" width="52" height="52"
            viewBox="0 0 52 52" fill="none" style={{ zIndex:2, animation:"wcCW 10s linear infinite" }}>
            <polygon points="26,4 46,15 46,37 26,48 6,37 6,15"
              stroke="rgba(255,255,255,.35)" strokeWidth="1.2" strokeDasharray="8 4" fill="none"/>
          </svg>
        </div>

        {/* ─── CARDS 3 & 4: Feature 01 & 02 ─────────── */}
        {features.slice(0,2).map((f, i) => (
          <div key={i}
            className="wc-card wc-feat relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm overflow-hidden">

            {/* ghost number */}
            <span className="absolute -top-3 -right-1 text-8xl font-black select-none pointer-events-none leading-none"
              style={{ fontFamily:"'Poppins',sans-serif",
                background:`linear-gradient(135deg,${f.from},${f.to})`,
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", opacity:.08 }}>
              {f.number}
            </span>

            {/* icon */}
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm"
              style={{ background:`linear-gradient(135deg,${f.from}22,${f.to}22)`,
                border:`1.5px solid ${f.from}44` }}>
              <Image src={f.img} width={28} height={28} alt={f.title}
                className="w-7 h-7 object-contain"/>
            </div>

            {/* number badge */}
            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 inline-block"
              style={{ background:`linear-gradient(135deg,${f.from},${f.to})`,
                color:"#fff", fontFamily:"'Poppins',sans-serif" }}>
              {f.number}
            </span>

            <h4 className="text-base font-bold text-gray-900 mb-2 leading-snug"
              style={{ fontFamily:"'Poppins',sans-serif" }}>{f.title}</h4>
            <p className="text-sm leading-6 text-gray-500"
              style={{ fontFamily:"'Inter',sans-serif" }}>{f.desc}</p>

            {/* bottom accent line */}
            <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background:`linear-gradient(to right,${f.from},${f.to})` }}/>
          </div>
        ))}

        {/* ─── CARD 5: Feature 03 ──────────────────────── */}
        {(() => { const f = features[2]; return (
          <div className="wc-card wc-feat relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm overflow-hidden">
            <span className="absolute -top-3 -right-1 text-8xl font-black select-none pointer-events-none leading-none"
              style={{ fontFamily:"'Poppins',sans-serif",
                background:`linear-gradient(135deg,${f.from},${f.to})`,
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", opacity:.08 }}>
              {f.number}
            </span>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm"
              style={{ background:`linear-gradient(135deg,${f.from}22,${f.to}22)`,
                border:`1.5px solid ${f.from}44` }}>
              <Image src={f.img} width={28} height={28} alt={f.title}
                className="w-7 h-7 object-contain"/>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 inline-block"
              style={{ background:`linear-gradient(135deg,${f.from},${f.to})`,
                color:"#fff", fontFamily:"'Poppins',sans-serif" }}>
              {f.number}
            </span>
            <h4 className="text-base font-bold text-gray-900 mb-2 leading-snug"
              style={{ fontFamily:"'Poppins',sans-serif" }}>{f.title}</h4>
            <p className="text-sm leading-6 text-gray-500"
              style={{ fontFamily:"'Inter',sans-serif" }}>{f.desc}</p>
          </div>
        ); })()}

        {/* ─── CARD 6: CTA (col-span-2) ───────────────── */}
        <div className="wc-card md:col-span-2 lg:col-span-2 relative rounded-3xl overflow-hidden p-8 lg:p-10"
          style={{ background:"linear-gradient(135deg,#0d9488 0%,#4f46e5 100%)" }}>

          {/* bg decorative hexagon */}
          <svg className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-10"
            width="140" height="140" viewBox="0 0 140 140" fill="none">
            <polygon points="70,8 128,40 128,100 70,132 12,100 12,40"
              stroke="white" strokeWidth="2" fill="none"/>
            <polygon points="70,28 108,50 108,90 70,112 32,90 32,50"
              stroke="white" strokeWidth="1.5" fill="none"/>
          </svg>

          <div className="relative z-10">
            <div className="w-10 h-1 rounded-full bg-white/40 mb-5" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug"
              style={{ fontFamily:"'Poppins',sans-serif" }}>
              Let&apos;s Start A <span className="text-teal-200">New Project</span> Together
            </h3>
            <p className="text-white/70 text-sm leading-6 mb-6 max-w-md"
              style={{ fontFamily:"'Inter',sans-serif" }}>
              You already have a project in mind and want to work with us? Fill out the form
              and let us know in which direction it should go.
            </p>
            <button onClick={() => setIsPopupOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-sm font-bold
                hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
              style={{ fontFamily:"'Poppins',sans-serif",
                background:"linear-gradient(135deg,rgba(255,255,255,.95),rgba(255,255,255,.85))",
                color:"#0d9488", boxShadow:"0 8px 24px rgba(0,0,0,.20)" }}>
              Request A Quote
              <FaAngleRight />
            </button>
          </div>
        </div>

      </div>

      {isPopupOpen && (
        <Login handleClosePopup={() => setIsPopupOpen(false)} isPopupOpen={isPopupOpen} />
      )}
    </section>
  );
};

export default WhyChoose;
