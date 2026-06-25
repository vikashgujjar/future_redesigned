"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheck, FaTimes } from "react-icons/fa";
import Login from "../components/Login";
import GetNewInsight from "../components/GetNewInsight";

const toPrice = (usd, currency) =>
  currency === "INR" ? (usd * 83).toFixed(0) : usd.toFixed(2);

const PLANS = [
  {
    category: "SEO Services",
    badge: "Search Engine Optimization",
    desc: "Boost your search rankings with our proven SEO packages — trusted by 500+ businesses.",
    plans: [
      {
        name:"Basic",     tag:"10–12 Keywords",   price:150.99,  popular:false,
        color:{ from:"#06b6d4", to:"#0284c7" },
        features:[
          { text:"10–12 Keywords Optimized",      yes:true  },
          { text:"Off Page Optimization",          yes:true  },
          { text:"On Page Optimization",           yes:true  },
          { text:"Social Media Optimization",      yes:false },
          { text:"SEO Ranking Weekly Reports",     yes:false },
          { text:"Dedicated Account Manager",      yes:false },
        ],
      },
      {
        name:"Advance",   tag:"15–22 Keywords",   price:220.99,  popular:true,
        color:{ from:"#6366f1", to:"#4f46e5" },
        features:[
          { text:"15–22 Keywords Optimized",      yes:true  },
          { text:"Off Page Optimization",          yes:true  },
          { text:"On Page Optimization",           yes:true  },
          { text:"Social Media Optimization",      yes:true  },
          { text:"SEO Ranking Weekly Reports",     yes:true  },
          { text:"Dedicated Account Manager",      yes:false },
        ],
      },
      {
        name:"Ultimate",  tag:"22–35 Keywords",   price:350.99,  popular:false,
        color:{ from:"#10b981", to:"#059669" },
        features:[
          { text:"22–35 Keywords Optimized",      yes:true  },
          { text:"Off Page Optimization",          yes:true  },
          { text:"On Page Optimization",           yes:true  },
          { text:"Social Media Optimization",      yes:true  },
          { text:"SEO Ranking Weekly Reports",     yes:true  },
          { text:"Dedicated Account Manager",      yes:true  },
        ],
      },
    ],
  },
  {
    category: "Website Design & Development",
    badge: "Web Design Plans",
    desc: "Professional, conversion-focused websites built to grow your business online.",
    plans: [
      {
        name:"Basic",     tag:"Small Business",   price:99.99,   popular:false,
        color:{ from:"#f59e0b", to:"#d97706" },
        features:[
          { text:"Hosting — 200 MB Disk Space",   yes:true  },
          { text:"One Domain — Free",              yes:true  },
          { text:"1 Creative Landing Page",        yes:true  },
          { text:"Search Optimization",            yes:false },
          { text:"Advanced Settings",              yes:false },
          { text:"Priority Support",               yes:false },
        ],
      },
      {
        name:"Advance",   tag:"Growing Business", price:149.99,  popular:true,
        color:{ from:"#6366f1", to:"#4f46e5" },
        features:[
          { text:"SSD Disk Space — 500 MB",       yes:true  },
          { text:"One Domain — Free",              yes:true  },
          { text:"10 HTML Pages",                  yes:true  },
          { text:"Search Optimization",            yes:true  },
          { text:"Advanced Settings",              yes:true  },
          { text:"Priority Support",               yes:false },
        ],
      },
      {
        name:"Ultimate",  tag:"Enterprise",       price:259.99,  popular:false,
        color:{ from:"#ec4899", to:"#db2777" },
        features:[
          { text:"SSD Disk Space — 1 GB",         yes:true  },
          { text:"One Domain — Free",              yes:true  },
          { text:"15 Dynamic Pages",               yes:true  },
          { text:"Search Optimization",            yes:true  },
          { text:"Advanced Settings",              yes:true  },
          { text:"Priority Support",               yes:true  },
        ],
      },
    ],
  },
  {
    category: "Mobile App Development",
    badge: "Android & iOS Apps",
    desc: "End-to-end mobile app development for Android and iOS — from MVP to enterprise solutions.",
    plans: [
      {
        name:"Basic",     tag:"Startup App",      price:319.99,  popular:false,
        color:{ from:"#06b6d4", to:"#0284c7" },
        features:[
          { text:"Max Screens: 7",                 yes:true  },
          { text:"Max APIs: 5",                    yes:true  },
          { text:"Web Panel Login: 1",             yes:true  },
          { text:"Payment Gateway",                yes:false },
          { text:"Push Notifications",             yes:false },
          { text:"Advanced Settings",              yes:false },
        ],
      },
      {
        name:"Advance",   tag:"Business App",     price:499.99,  popular:true,
        color:{ from:"#6366f1", to:"#4f46e5" },
        features:[
          { text:"Max Screens: 15",                yes:true  },
          { text:"Max APIs: 12",                   yes:true  },
          { text:"Web Panel Login: 1",             yes:true  },
          { text:"Payment Gateway",                yes:true  },
          { text:"Push Notifications",             yes:true  },
          { text:"Advanced Settings",              yes:false },
        ],
      },
      {
        name:"Ultimate",  tag:"Enterprise App",   price:599.99,  popular:false,
        color:{ from:"#8b5cf6", to:"#7c3aed" },
        features:[
          { text:"Max Screens: 20+",               yes:true  },
          { text:"Max APIs: 18+",                  yes:true  },
          { text:"Web Panel Login: Unlimited",     yes:true  },
          { text:"Payment Gateway",                yes:true  },
          { text:"Push Notifications",             yes:true  },
          { text:"Advanced Settings",              yes:true  },
        ],
      },
    ],
  },
];

export default function PricePackage() {
  const [currency, setCurrency]       = useState("USD");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isPopupOpen]);

  return (
    <>
      <style>{`
        @keyframes prGrad { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes prPing  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }

        .pr-hl {
          background:linear-gradient(125deg,#2dd4bf,#6366f1,#a855f7);
          background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:prGrad 5s ease-in-out infinite;
        }
        .pr-ping { animation:prPing 2.4s ease-in-out infinite; }

        /* Toggle */
        .pr-toggle {
          display:inline-flex; border-radius:999px; padding:4px;
          background:rgba(99,102,241,.08); border:1px solid rgba(99,102,241,.16);
        }
        .pr-toggle-btn {
          padding:7px 22px; border-radius:999px; font-size:12.5px; font-weight:700;
          font-family:'Poppins',sans-serif; letter-spacing:.06em; cursor:pointer;
          border:none; background:transparent; color:#64748b;
          transition:background .2s, color .2s, box-shadow .2s;
        }
        .pr-toggle-btn.active {
          background:linear-gradient(135deg,#2dd4bf,#6366f1);
          color:#fff; box-shadow:0 4px 14px rgba(99,102,241,.28);
        }

        /* Pricing card */
        .pr-card {
          border-radius:24px; overflow:hidden; position:relative;
          background:#fff;
          border:1px solid rgba(99,102,241,.10);
          box-shadow:0 4px 24px rgba(99,102,241,.07),0 1px 4px rgba(0,0,0,.04);
          display:flex; flex-direction:column;
          transition:transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s;
        }
        .pr-card:hover {
          transform:translateY(-8px);
          box-shadow:0 24px 60px rgba(99,102,241,.14),0 4px 16px rgba(0,0,0,.06);
        }
        .pr-card.popular {
          border-color:transparent;
          box-shadow:0 8px 40px rgba(99,102,241,.22),0 0 0 2px #6366f1;
        }
        .pr-card.popular:hover {
          box-shadow:0 28px 64px rgba(99,102,241,.28),0 0 0 2px #6366f1;
        }

        /* Top gradient panel */
        .pr-panel {
          padding:28px 24px 22px; position:relative; overflow:hidden;
        }
        .pr-panel-mesh {
          position:absolute; inset:0;
          background-image:radial-gradient(rgba(255,255,255,.22) 1px,transparent 1px);
          background-size:18px 18px;
        }
        .pr-panel-wm {
          position:absolute; right:-8px; bottom:-16px;
          font-family:'Poppins',sans-serif; font-weight:900; font-size:5.5rem;
          line-height:1; color:rgba(255,255,255,.12); user-select:none; pointer-events:none;
        }

        /* Body */
        .pr-body { padding:20px 24px 28px; flex:1; display:flex; flex-direction:column; }
        .pr-feature {
          display:flex; align-items:center; justify-content:space-between; gap:12px;
          padding:10px 0; border-bottom:1px solid rgba(99,102,241,.07); font-size:13px;
        }
        .pr-feature:last-child { border-bottom:none; }

        /* CTA button */
        .pr-cta {
          display:inline-flex; align-items:center; justify-content:center; gap:6px;
          width:100%; padding:13px; border-radius:14px; font-size:13.5px; font-weight:700;
          font-family:'Poppins',sans-serif; border:none; cursor:pointer; margin-top:auto;
          color:#fff; transition:opacity .2s, transform .2s;
          text-decoration:none;
        }
        .pr-cta:hover { opacity:.9; transform:translateY(-1px); }
      `}</style>

      {/* ── Banner ── */}
      <section className="relative overflow-hidden flex items-center justify-center"
        style={{ minHeight:"clamp(280px,40vh,420px)", fontFamily:"'Inter',sans-serif" }}>
        <Image
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=85"
          alt="Pricing Plans"
          fill priority unoptimized
          className="object-cover object-center"
        />
        <div className="absolute inset-0"
          style={{ background:"linear-gradient(160deg,rgba(4,5,24,.82) 0%,rgba(20,10,60,.78) 50%,rgba(4,5,24,.85) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"radial-gradient(rgba(255,255,255,.06) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(45,212,191,.22),transparent 65%)" }} />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(99,102,241,.22),transparent 65%)" }} />
        <div className="absolute left-0 right-0 pointer-events-none"
          style={{ top:"50%", height:"1px", background:"linear-gradient(90deg,transparent,rgba(45,212,191,.18),rgba(99,102,241,.14),transparent)" }} />
        <div className="relative z-10 text-center px-4">
          <nav className="flex items-center justify-center gap-2 mb-5">
            <Link href="/"
              className="text-[11px] font-semibold uppercase tracking-[.18em] hover:text-teal-400 transition-colors"
              style={{ color:"rgba(255,255,255,.50)", fontFamily:"'Poppins',sans-serif", textDecoration:"none" }}>
              Home
            </Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2l4 4-4 4" stroke="rgba(255,255,255,.30)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[11px] font-semibold uppercase tracking-[.18em]"
              style={{ color:"#2dd4bf", fontFamily:"'Poppins',sans-serif" }}>
              Pricing Plans
            </span>
          </nav>
          <h1 className="font-extrabold leading-[1.08] text-white mb-4"
            style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(2rem,5vw,3.6rem)" }}>
            Transparent{" "}
            <span style={{ background:"linear-gradient(120deg,#2dd4bf,#6366f1,#a855f7)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              Pricing Plans
            </span>
          </h1>
          <div className="mx-auto h-[3px] w-16 rounded-full"
            style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
          style={{ background:"linear-gradient(to bottom,transparent,rgba(4,5,24,.55))" }} />
      </section>

      {/* ── Pricing Sections ── */}
      {PLANS.map((section, si) => (
        <section key={si} className="relative overflow-hidden py-16 sm:py-20"
          style={{
            background: si % 2 === 0
              ? "linear-gradient(155deg,#f4f8ff 0%,#ffffff 50%,#f0f4ff 100%)"
              : "linear-gradient(150deg,#04071a 0%,#080e28 55%,#050b20 100%)",
            fontFamily:"'Inter',sans-serif"
          }}>

          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: si % 2 === 0
                ? "radial-gradient(rgba(99,102,241,.04) 1px,transparent 1px)"
                : "radial-gradient(rgba(255,255,255,.025) 1px,transparent 1px)",
              backgroundSize:"28px 28px"
            }} />

          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 xl:px-16">

            {/* Section header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-5"
                style={{
                  background: si % 2 === 0 ? "rgba(45,212,191,.09)" : "rgba(45,212,191,.07)",
                  border: si % 2 === 0 ? "1px solid rgba(45,212,191,.26)" : "1px solid rgba(45,212,191,.22)"
                }}>
                <span className="pr-ping w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
                <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                  style={{ color: si % 2 === 0 ? "#0d9488" : "#67e8f9", fontFamily:"'Poppins',sans-serif" }}>
                  {section.badge}
                </span>
              </div>

              <h2 className="font-extrabold leading-[1.10] mb-4"
                style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.65rem,3.5vw,2.6rem)",
                  color: si % 2 === 0 ? "#0c1230" : "#fff" }}>
                {section.category.split(" ").slice(0,-1).join(" ")}{" "}
                <span className="pr-hl">{section.category.split(" ").at(-1)}</span>
              </h2>

              <div className="mx-auto h-[3px] w-14 rounded-full mb-5"
                style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />

              <p className="text-[13.5px] max-w-[520px] mx-auto leading-[1.82]"
                style={{ color: si % 2 === 0 ? "#64748b" : "rgba(180,200,240,.55)" }}>
                {section.desc}
              </p>

              {/* Currency toggle */}
              <div className="mt-6 flex justify-center">
                <div className="pr-toggle">
                  {["USD","INR"].map(c => (
                    <button key={c} className={`pr-toggle-btn${currency === c ? " active" : ""}`}
                      onClick={() => setCurrency(c)}>
                      {c === "USD" ? "$ USD" : "₹ INR"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 items-start">
              {section.plans.map((plan, pi) => (
                <div key={pi} className={`pr-card${plan.popular ? " popular" : ""}`}>

                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute top-4 right-4 z-10 text-[10px] font-bold uppercase tracking-[.14em] px-3 py-1 rounded-full text-white"
                      style={{ background:"linear-gradient(135deg,#f59e0b,#d97706)", fontFamily:"'Poppins',sans-serif",
                        boxShadow:"0 4px 12px rgba(245,158,11,.35)" }}>
                      Most Popular
                    </div>
                  )}

                  {/* Gradient panel */}
                  <div className="pr-panel"
                    style={{ background:`linear-gradient(135deg,${plan.color.from},${plan.color.to})` }}>
                    <div className="pr-panel-mesh" />
                    <div className="pr-panel-wm">{plan.name}</div>

                    <div className="relative z-10">
                      <p className="text-[11px] font-bold uppercase tracking-[.18em] text-white/70 mb-1"
                        style={{ fontFamily:"'Poppins',sans-serif" }}>
                        {plan.tag}
                      </p>
                      <h3 className="font-extrabold text-white leading-none mb-4"
                        style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.4rem,2.5vw,1.8rem)" }}>
                        {plan.name} Plan
                      </h3>
                      <div className="flex items-end gap-1">
                        <span className="text-[28px] font-extrabold text-white leading-none"
                          style={{ fontFamily:"'Poppins',sans-serif" }}>
                          {currency === "USD" ? "$" : "₹"}
                        </span>
                        <span className="font-extrabold text-white leading-none"
                          style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(2.2rem,4vw,3rem)" }}>
                          {toPrice(plan.price, currency)}
                        </span>
                        <span className="text-white/60 text-sm mb-1 ml-1">/mo</span>
                      </div>
                    </div>
                  </div>

                  {/* Feature list */}
                  <div className="pr-body">
                    <div className="mb-5">
                      {plan.features.map((f, fi) => (
                        <div key={fi} className="pr-feature"
                          style={{ color: si % 2 === 0 ? "#475569" : "#475569" }}>
                          <span className="text-[13px]">{f.text}</span>
                          {f.yes
                            ? <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                                style={{ background:`linear-gradient(135deg,${plan.color.from},${plan.color.to})` }}>
                                <FaCheck size={8} color="#fff" />
                              </span>
                            : <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                                style={{ background:"rgba(148,163,184,.20)" }}>
                                <FaTimes size={8} color="#94a3b8" />
                              </span>
                          }
                        </div>
                      ))}
                    </div>

                    <button className="pr-cta"
                      onClick={() => setIsPopupOpen(true)}
                      style={{ background:`linear-gradient(135deg,${plan.color.from},${plan.color.to})`,
                        boxShadow:`0 6px 20px ${plan.color.from}40` }}>
                      Get Started
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1.5 6h9M6.5 1.5l4 4.5-4 4.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {isPopupOpen && (
        <Login handleClosePopup={() => setIsPopupOpen(false)} isPopupOpen={isPopupOpen} />
      )}

      <GetNewInsight />
    </>
  );
}
