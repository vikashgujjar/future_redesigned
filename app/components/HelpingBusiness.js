"use client";
import Image from "next/image";

const cardsData = [
  { id:1,  src:"/Assets/icon-1.webp",  text:"Social Networking",     fi:"#2dd4bf", ti:"#06b6d4" },
  { id:2,  src:"/Assets/icon-2.webp",  text:"Digital Marketing",     fi:"#6366f1", ti:"#8b5cf6" },
  { id:3,  src:"/Assets/icon-3.webp",  text:"Ecommerce Development", fi:"#0ea5e9", ti:"#2dd4bf" },
  { id:4,  src:"/Assets/icon-4.webp",  text:"Video Service",         fi:"#8b5cf6", ti:"#6366f1" },
  { id:5,  src:"/Assets/icon-5.webp",  text:"Banking Service",       fi:"#2dd4bf", ti:"#6366f1" },
  { id:6,  src:"/Assets/icon-6.webp",  text:"Enterprise Service",    fi:"#6366f1", ti:"#0ea5e9" },
  { id:7,  src:"/Assets/icon-7.webp",  text:"Education Service",     fi:"#06b6d4", ti:"#2dd4bf" },
  { id:8,  src:"/Assets/icon-8.webp",  text:"Tour and Travels",      fi:"#a855f7", ti:"#6366f1" },
  { id:9,  src:"/Assets/icon-9.webp",  text:"Health Service",        fi:"#2dd4bf", ti:"#0ea5e9" },
  { id:10, src:"/Assets/icon-10.webp", text:"Event & Ticket",        fi:"#6366f1", ti:"#8b5cf6" },
  { id:11, src:"/Assets/icon-11.webp", text:"Restaurant Service",    fi:"#0ea5e9", ti:"#6366f1" },
  { id:12, src:"/Assets/icon-12.webp", text:"Business Consultant",   fi:"#8b5cf6", ti:"#2dd4bf" },
];

export default function HelpingBusiness() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 xl:px-24"
      style={{ background: "#0b1120" }}
    >
      <style>{`
        @keyframes hbCW   { from{transform:rotate(0deg)}  to{transform:rotate(360deg)}  }
        @keyframes hbCCW  { from{transform:rotate(0deg)}  to{transform:rotate(-360deg)} }
        @keyframes hbSpark {
          0%,100%{ opacity:.55; transform:scale(1) translateY(0);    }
          50%    { opacity:1;   transform:scale(1.4) translateY(-8px);}
        }
        @keyframes hbIn {
          from{ opacity:0; transform:translateY(22px); }
          to  { opacity:1; transform:translateY(0);    }
        }
        /* dot grid — white on dark */
        .hb-dot {
          background-image: radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px);
          background-size: 26px 26px;
        }
        /* glass card */
        .hb-card {
          background: rgba(255,255,255,.055);
          border: 1px solid rgba(255,255,255,.09);
          backdrop-filter: blur(10px);
          transition: transform .26s ease, box-shadow .26s ease, border-color .26s ease;
        }
        .hb-card:hover { transform: translateY(-6px); }

        /* staggered entrance */
        ${cardsData.map((_,i) =>
          `.hb-fade:nth-child(${i+1}){ animation: hbIn .42s ${(i*.04).toFixed(2)}s ease both; }`
        ).join("\n        ")}
      `}</style>

      {/* ── white dot overlay ──────────────────────────── */}
      <div className="hb-dot absolute inset-0 pointer-events-none" aria-hidden="true"/>

      {/* ── teal radial glow — top-left ───────────────── */}
      <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(45,212,191,.14) 0%,transparent 65%)" }} aria-hidden="true"/>
      {/* ── indigo radial glow — bottom-right ─────────── */}
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(99,102,241,.16) 0%,transparent 65%)" }} aria-hidden="true"/>

      {/* ── TOP-LEFT starburst (teal) ─────────────────── */}
      <svg className="absolute top-0 left-0 pointer-events-none" width="280" height="280"
        viewBox="0 0 280 280" fill="none" aria-hidden="true">
        <g style={{ transformOrigin:"0px 0px", animation:"hbCW 28s linear infinite" }}>
          <line x1="0" y1="0" x2="0"   y2="-220" stroke="rgba(45,212,191,.22)" strokeWidth="1.4" strokeDasharray="14 8" strokeLinecap="round"/>
          <line x1="0" y1="0" x2="156" y2="-156" stroke="rgba(45,212,191,.18)" strokeWidth="1.2" strokeDasharray="12 8" strokeLinecap="round"/>
          <line x1="0" y1="0" x2="220" y2="0"    stroke="rgba(45,212,191,.22)" strokeWidth="1.4" strokeDasharray="14 8" strokeLinecap="round"/>
          <line x1="0" y1="0" x2="156" y2="156"  stroke="rgba(45,212,191,.18)" strokeWidth="1.2" strokeDasharray="12 8" strokeLinecap="round"/>
        </g>
        <g style={{ transformOrigin:"0px 0px", animation:"hbCCW 18s linear infinite" }}>
          <line x1="0" y1="0" x2="84"  y2="-202" stroke="rgba(34,211,238,.18)" strokeWidth="1" strokeDasharray="10 7" strokeLinecap="round"/>
          <line x1="0" y1="0" x2="202" y2="-84"  stroke="rgba(34,211,238,.18)" strokeWidth="1" strokeDasharray="10 7" strokeLinecap="round"/>
          <line x1="0" y1="0" x2="202" y2="84"   stroke="rgba(34,211,238,.18)" strokeWidth="1" strokeDasharray="10 7" strokeLinecap="round"/>
          <line x1="0" y1="0" x2="84"  y2="202"  stroke="rgba(34,211,238,.18)" strokeWidth="1" strokeDasharray="10 7" strokeLinecap="round"/>
        </g>
        <g transform="translate(55,55)" style={{ animation:"hbSpark 4s ease-in-out infinite" }}>
          <line x1="-5" y1="0" x2="5" y2="0" stroke="rgba(45,212,191,.80)" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1="0" y1="-5" x2="0" y2="5" stroke="rgba(45,212,191,.80)" strokeWidth="2.2" strokeLinecap="round"/>
        </g>
        <g transform="translate(115,36)" style={{ animation:"hbSpark 5.8s ease-in-out 1.4s infinite" }}>
          <line x1="-4" y1="-4" x2="4" y2="4" stroke="rgba(34,211,238,.70)" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="4" y1="-4" x2="-4" y2="4" stroke="rgba(34,211,238,.70)" strokeWidth="1.8" strokeLinecap="round"/>
        </g>
        <g transform="translate(32,118)" style={{ animation:"hbSpark 7s ease-in-out 2.8s infinite" }}>
          <line x1="-3" y1="0" x2="3" y2="0" stroke="rgba(45,212,191,.60)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="0" y1="-3" x2="0" y2="3" stroke="rgba(45,212,191,.60)" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
      </svg>

      {/* ── BOTTOM-RIGHT starburst (indigo) ───────────── */}
      <svg className="absolute bottom-0 right-0 pointer-events-none" width="280" height="280"
        viewBox="0 0 280 280" fill="none" aria-hidden="true">
        <g style={{ transformOrigin:"280px 280px", animation:"hbCCW 26s linear infinite" }}>
          <line x1="280" y1="280" x2="280" y2="60"  stroke="rgba(99,102,241,.22)" strokeWidth="1.4" strokeDasharray="14 8" strokeLinecap="round"/>
          <line x1="280" y1="280" x2="124" y2="124" stroke="rgba(99,102,241,.18)" strokeWidth="1.2" strokeDasharray="12 8" strokeLinecap="round"/>
          <line x1="280" y1="280" x2="60"  y2="280" stroke="rgba(99,102,241,.22)" strokeWidth="1.4" strokeDasharray="14 8" strokeLinecap="round"/>
          <line x1="280" y1="280" x2="436" y2="124" stroke="rgba(99,102,241,.18)" strokeWidth="1.2" strokeDasharray="12 8" strokeLinecap="round"/>
        </g>
        <g style={{ transformOrigin:"280px 280px", animation:"hbCW 16s linear infinite" }}>
          <line x1="280" y1="280" x2="196" y2="78"  stroke="rgba(139,92,246,.18)" strokeWidth="1" strokeDasharray="10 7" strokeLinecap="round"/>
          <line x1="280" y1="280" x2="482" y2="196" stroke="rgba(139,92,246,.18)" strokeWidth="1" strokeDasharray="10 7" strokeLinecap="round"/>
          <line x1="280" y1="280" x2="78"  y2="196" stroke="rgba(139,92,246,.18)" strokeWidth="1" strokeDasharray="10 7" strokeLinecap="round"/>
          <line x1="280" y1="280" x2="196" y2="482" stroke="rgba(139,92,246,.18)" strokeWidth="1" strokeDasharray="10 7" strokeLinecap="round"/>
        </g>
        <g transform="translate(224,226)" style={{ animation:"hbSpark 4.5s ease-in-out infinite" }}>
          <line x1="-5" y1="0" x2="5" y2="0" stroke="rgba(99,102,241,.80)" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1="0" y1="-5" x2="0" y2="5" stroke="rgba(99,102,241,.80)" strokeWidth="2.2" strokeLinecap="round"/>
        </g>
        <g transform="translate(248,186)" style={{ animation:"hbSpark 6.2s ease-in-out 1.8s infinite" }}>
          <line x1="-4" y1="-4" x2="4" y2="4" stroke="rgba(139,92,246,.70)" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="4" y1="-4" x2="-4" y2="4" stroke="rgba(139,92,246,.70)" strokeWidth="1.8" strokeLinecap="round"/>
        </g>
      </svg>

      {/* ══════════════════════════════════════════════
          MAIN LAYOUT
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 grid grid-cols-1 xl:grid-cols-[1fr_1.5fr] gap-14 xl:gap-20 items-center">

        {/* ── LEFT: text ─────────────────────────────── */}
        <div className="flex flex-col gap-5">

          {/* badge */}
          <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full"
            style={{ background:"rgba(45,212,191,.12)", border:"1px solid rgba(45,212,191,.28)" }}>
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 animate-pulse flex-shrink-0" />
            <span
              className="text-[11px] font-bold uppercase tracking-widest bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent"
              style={{ fontFamily:"'Inter',sans-serif" }}>
              Industries We Work For
            </span>
          </div>

          {/* heading */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug text-white"
            style={{ fontFamily:"'Poppins',sans-serif" }}>
            Helping Businesses in{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              All Domains
            </span>
          </h2>

          {/* divider */}
          <div className="w-14 h-1 rounded-full"
            style={{ background:"linear-gradient(to right,#2dd4bf,#6366f1)" }}/>

          {/* paragraphs */}
          <p className="text-sm sm:text-base leading-7"
            style={{ fontFamily:"'Inter',sans-serif", color:"rgba(255,255,255,.50)" }}>
            We develop websites that build businesses! We believe, there is no room for a
            one-size-fits-all approach in web development services. Each website is unique
            and it needs a personal touch to meet specific business needs. Our experienced
            UI/UX designers and full stack web development team can effectively transform
            your idea into reality.
          </p>
          <p className="text-sm sm:text-base leading-7"
            style={{ fontFamily:"'Inter',sans-serif", color:"rgba(255,255,255,.50)" }}>
            As a reputable website development company in India, we&apos;ve assisted hundreds
            of companies worldwide to achieve their goals, drive businesses growth, and create
            happy customers. From LAMP to MEAN — business websites for startups to custom web
            applications for corporate — we do it all!
          </p>

          {/* stats */}
          <div className="flex flex-wrap gap-8 pt-4 mt-1"
            style={{ borderTop:"1px solid rgba(255,255,255,.08)" }}>
            {[
              { v:"5000+", l:"Projects"   },
              { v:"100%", l:"Satisfaction"},
            ].map((s,i) => (
              <div key={i}>
                <p className="text-2xl font-black bg-gradient-to-br from-teal-400 to-indigo-500 bg-clip-text text-transparent"
                  style={{ fontFamily:"'Poppins',sans-serif" }}>
                  {s.v}
                </p>
                <p className="text-xs mt-0.5"
                  style={{ fontFamily:"'Inter',sans-serif", color:"rgba(255,255,255,.38)" }}>
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: card grid ────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="hb-card hb-fade group flex flex-col items-center gap-3 p-4 sm:p-5 rounded-2xl cursor-pointer"
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 0 0 1.5px ${card.fi}, 0 14px 36px ${card.fi}35`;
                e.currentTarget.style.borderColor = card.fi + "60";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.borderColor = "";
              }}
            >
              {/* icon bg */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background:`linear-gradient(135deg,${card.fi}55,${card.ti}40)`,
                  border:`1.5px solid ${card.fi}90`,
                  boxShadow:`0 4px 18px ${card.fi}40`,
                }}
              >
                <Image src={card.src} width={34} height={34} alt={card.text}
                  className="w-8 h-8 object-contain"
                  style={{ filter:"brightness(100) drop-shadow(0 0 4px " + card.fi + "88)" }}/>
              </div>

              {/* label */}
              <p
                className="text-center text-xs sm:text-[13px] font-semibold leading-tight"
                style={{ fontFamily:"'Poppins',sans-serif", color:"rgba(255,255,255,.75)" }}
              >
                {card.text}
              </p>

              {/* hover accent line */}
              <div
                className="w-0 group-hover:w-8 h-0.5 rounded-full transition-all duration-300"
                style={{ background:`linear-gradient(to right,${card.fi},${card.ti})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
