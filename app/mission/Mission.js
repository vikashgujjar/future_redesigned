"use client";
import Image from "next/image";
import Link from "next/link";
import useYearsExperience from "../lib/useYearsExperience";
import { COMPANY_START_YEAR } from "../lib/companyStats";
import GetNewInsight from "../components/GetNewInsight";
import {
  FaBriefcase, FaRocket, FaGlobeAsia, FaLightbulb, FaStar, FaBolt,
} from "react-icons/fa";

const values = [
  { num:"01", icon:<FaBriefcase />, title:"Professionalism", from:"#06b6d4", to:"#0284c7",
    description:"We pride in being punctual and organized. We help you and provide our services till the end, striving to understand your business and give you the best at every stage." },
  { num:"02", icon:<FaRocket />, title:"Enthusiasm", from:"#6366f1", to:"#4f46e5",
    description:"We are a team excited to learn new things and push boundaries of the digital world. We work creatively and have fun bonding with our clients and each other." },
  { num:"03", icon:<FaGlobeAsia />, title:"Diversity", from:"#10b981", to:"#059669",
    description:"We have worked with a variety of niches — health, banking, retail, and more. Tackling diverse problems has only helped us gain experience and made us stronger." },
  { num:"04", icon:<FaLightbulb />, title:"Creativity", from:"#f59e0b", to:"#d97706",
    description:"We have tailored plans to suit all your needs. We come up with new ideas to tackle your problems and make you unique. We love to feed our creative monsters." },
  { num:"05", icon:<FaStar />, title:"Originality", from:"#ec4899", to:"#db2777",
    description:"Our creative heads come up with authentic content and plans tailored just for your needs. We give quick and innovative solutions to your unique problems." },
  { num:"06", icon:<FaBolt />, title:"Agile", from:"#8b5cf6", to:"#7c3aed",
    description:"We have a people-first approach. We pride ourselves in understanding and bonding with the client — really getting to know what they desire and reflecting it in their work." },
];

const visionPoints = [
  "Explore new opportunities that maximize business value, consistent growth, and sustainability.",
  "Meet the expectations of our customers, employees, and partners at every stage.",
  "Operate globally and bring the benefits of IT to improve quality for clients worldwide.",
  "Be a vibrant organization where openness, trust, teamwork, and innovation are promoted.",
  "Uphold integrity, commitment, excellence, and transparency as our core principles.",
  "Be globally recognized for providing quality services to customers while adhering to our values.",
];

const missionPoints = [
  "Understand customer needs and make technology work to resolve those needs.",
  "Explore new opportunities that maximize business value and ensure consistent growth.",
  "Empower clients to respond faster and more intuitively to changing market dynamics.",
  "Enable clients to become more agile and competitive through new technologies.",
  "Help our clients bring great products to market in less time and at less cost.",
  "Collaborate with our clients in their continued long-term success.",
];

export default function Mission() {
  const yearsExperience = useYearsExperience();
  return (
    <>
      <style>{`
        @keyframes mvSpin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes mvPing   { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }
        @keyframes mvIn     { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes mvGrad   { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }

        .mv2-hl {
          background:linear-gradient(125deg,#2dd4bf,#6366f1,#a855f7);
          background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:mvGrad 5s ease-in-out infinite;
        }
        .mv2-badge-dot { animation:mvPing 2.4s ease-in-out infinite; }

        /* ── VALUE ROWS ── */
        .mv2-val-row {
          display:grid;
          grid-template-columns: 54px 1fr 1.6fr;
          align-items:start; gap:0 28px;
          padding:26px 0;
          border-bottom:1px solid rgba(255,255,255,.07);
          transition:background .25s;
          position:relative;
          cursor:default;
        }
        @media(max-width:639px){
          .mv2-val-row { grid-template-columns:42px 1fr; grid-template-rows:auto auto; gap:10px 16px; }
          .mv2-val-desc { grid-column:1/-1; }
        }
        .mv2-val-row:last-child { border-bottom:none; }
        .mv2-val-row::before {
          content:''; position:absolute; left:-24px; right:-24px; top:0; bottom:0;
          border-radius:16px; opacity:0;
          background:rgba(255,255,255,.025);
          transition:opacity .25s;
        }
        .mv2-val-row:hover::before { opacity:1; }

        .mv2-val-num {
          font-family:'Poppins',sans-serif; font-weight:900;
          font-size:clamp(.9rem,1.5vw,1.1rem);
          color:rgba(255,255,255,.15);
          line-height:1.6;
          transition:color .25s;
        }
        .mv2-val-row:hover .mv2-val-num { color:rgba(255,255,255,.30); }

        .mv2-val-head {
          display:flex; align-items:center; gap:10px;
        }
        .mv2-val-icon {
          width:36px; height:36px; border-radius:10px;
          display:flex; align-items:center; justify-content:center;
          font-size:16px; color:#fff; flex-shrink:0;
        }
        .mv2-val-title {
          font-family:'Poppins',sans-serif; font-weight:700;
          font-size:clamp(.95rem,1.6vw,1.1rem); color:#fff; line-height:1.3;
        }
        .mv2-val-desc {
          font-size:13.5px; line-height:1.85; color:rgba(180,200,240,.52);
        }

        /* ── MISSION OVERLAY POINTS ── */
        .mv2-ms-pill {
          display:flex; align-items:flex-start; gap:12px;
          padding:14px 18px; border-radius:14px;
          background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.12);
          backdrop-filter:blur(14px);
          transition:background .25s, transform .25s;
        }
        .mv2-ms-pill:hover {
          background:rgba(255,255,255,.12);
          transform:translateX(4px);
        }

        /* ── VISION IMAGE FRAME ── */
        .mv2-vis-frame {
          position:relative; border-radius:28px; overflow:hidden;
          box-shadow:0 40px 80px rgba(0,0,0,.55), 0 0 0 1px rgba(45,212,191,.15);
        }
        .mv2-vis-frame img { display:block; width:100%; height:100%; object-fit:cover; object-position:center; }
        .mv2-vis-frame::before {
          content:''; position:absolute; inset:0; z-index:1; border-radius:28px;
          background:linear-gradient(160deg,rgba(4,7,26,.18),rgba(4,7,26,.55) 100%);
        }
        /* numbered vision item */
        .mv2-vis-item {
          display:flex; gap:16px; align-items:flex-start;
          padding:14px 0; border-bottom:1px solid rgba(99,102,241,.09);
        }
        .mv2-vis-item:last-child { border-bottom:none; }
        .mv2-vis-item-num {
          flex-shrink:0; width:32px; height:32px; border-radius:9px;
          display:flex; align-items:center; justify-content:center;
          font-family:'Poppins',sans-serif; font-weight:800; font-size:.75rem;
          color:#fff; margin-top:1px;
        }
      `}</style>

      {/* ════════════════════════════════════════
          BANNER — kept exactly as-is
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden flex items-center justify-center"
        style={{ minHeight:"clamp(280px,40vh,420px)", fontFamily:"'Inter',sans-serif" }}>
        <Image
          src="/Assets/stock/photo-1552664730-d307ca884978.webp"
          alt="Mission & Vision"
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
              className="text-[11px] font-semibold uppercase tracking-[.18em] transition-colors duration-200 hover:text-teal-400"
              style={{ color:"rgba(255,255,255,.50)", fontFamily:"'Poppins',sans-serif", textDecoration:"none" }}>
              Home
            </Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2l4 4-4 4" stroke="rgba(255,255,255,.30)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[11px] font-semibold uppercase tracking-[.18em]"
              style={{ color:"#2dd4bf", fontFamily:"'Poppins',sans-serif" }}>
              Mission &amp; Vision
            </span>
          </nav>
          <h1 className="font-extrabold leading-[1.08] text-white mb-4"
            style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(2rem,5vw,3.6rem)" }}>
            Our{" "}
            <span style={{ background:"linear-gradient(120deg,#2dd4bf,#6366f1,#a855f7)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              Mission &amp; Vision
            </span>
          </h1>
          <div className="mx-auto h-[3px] w-16 rounded-full"
            style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
          style={{ background:"linear-gradient(to bottom,transparent,rgba(4,5,24,.55))" }} />
      </section>

      {/* ════════════════════════════════════════
          2. VISION — image left + numbered list right
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-16 sm:py-24"
        style={{ background:"linear-gradient(155deg,#f0fbfa 0%,#ffffff 50%,#f1f1fd 100%)", fontFamily:"'Inter',sans-serif" }}>

        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"radial-gradient(rgba(99,102,241,.04) 1px,transparent 1px)", backgroundSize:"30px 30px" }} />
        <div className="absolute -top-48 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(45,212,191,.10),transparent 65%)" }} />
        <div className="absolute -bottom-48 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(99,102,241,.08),transparent 65%)" }} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── LEFT: framed image with floating chips ── */}
            <div className="relative">

              {/* Glow halo */}
              <div className="absolute -inset-6 rounded-[2.5rem] pointer-events-none"
                style={{ background:"linear-gradient(135deg,rgba(45,212,191,.15),rgba(99,102,241,.12))", filter:"blur(28px)", opacity:.8 }} />

              {/* Gradient border wrapper */}
              <div className="relative rounded-[30px] p-[2px]"
                style={{ background:"linear-gradient(135deg,#2dd4bf,#6366f1,#a855f7)" }}>
                <div className="mv2-vis-frame" style={{ height:"clamp(340px,45vw,520px)" }}>
                  <Image
                    src="/Assets/stock/photo-1451187580459-43490279c0fa.webp"
                    alt="Our Vision — Global IT"
                    fill unoptimized
                    className="object-cover object-center"
                  />
                  {/* Top accent strip */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
                    style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
                </div>
              </div>

              {/* Floating chip — top right */}
              <div className="absolute -top-4 -right-4 sm:-right-8 flex items-center gap-2.5 rounded-2xl px-4 py-3 z-20"
                style={{ background:"#ffffff", border:"1px solid rgba(45,212,191,.25)",
                  boxShadow:"0 12px 32px rgba(45,212,191,.14),0 2px 8px rgba(0,0,0,.07)" }}>
                <span className="flex h-8 w-8 items-center justify-center rounded-xl flex-shrink-0"
                  style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                  </svg>
                </span>
                <div className="leading-tight">
                  <p className="text-[12px] font-bold" style={{ color:"#0f172a", fontFamily:"'Poppins',sans-serif" }}>Global Reach</p>
                  <p className="text-[9px] font-semibold uppercase tracking-wider" style={{ color:"#94a3b8" }}>30+ Countries</p>
                </div>
              </div>

              {/* Floating chip — bottom left */}
              <div className="absolute -bottom-4 -left-4 sm:-left-8 flex items-center gap-2.5 rounded-2xl px-4 py-3 z-20"
                style={{ background:"#ffffff", border:"1px solid rgba(99,102,241,.22)",
                  boxShadow:"0 12px 32px rgba(99,102,241,.12),0 2px 8px rgba(0,0,0,.07)" }}>
                <span className="flex h-8 w-8 items-center justify-center rounded-xl flex-shrink-0"
                  style={{ background:"linear-gradient(135deg,#6366f1,#a855f7)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </span>
                <div className="leading-tight">
                  <p className="text-[12px] font-bold" style={{ color:"#0f172a", fontFamily:"'Poppins',sans-serif" }}>Innovation Led</p>
                  <p className="text-[9px] font-semibold uppercase tracking-wider" style={{ color:"#94a3b8" }}>Since {COMPANY_START_YEAR}</p>
                </div>
              </div>
            </div>

            {/* ── RIGHT: badge + heading + numbered list ── */}
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-6"
                style={{ background:"rgba(45,212,191,.09)", border:"1px solid rgba(45,212,191,.26)" }}>
                <span className="mv2-badge-dot w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
                <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                  style={{ color:"#0d9488", fontFamily:"'Poppins',sans-serif" }}>
                  Where We Are Headed
                </span>
              </div>

              <h2 className="font-extrabold leading-[1.06] mb-3"
                style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.9rem,4vw,3.2rem)", color:"#0c1230" }}>
                Our{" "}
                <span style={{ background:"linear-gradient(135deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                  Vision
                </span>
              </h2>
              <div className="mb-6 h-[3px] w-16 rounded-full"
                style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1)" }} />

              <p className="text-[14px] leading-[1.88] mb-8" style={{ color:"#4a5070" }}>
                At Future IT Touch, we are always looking toward the future — anticipating emerging trends and positioning your business for sustained growth. Integrity is non-negotiable and no assignment is too small.
              </p>

              {/* Numbered vision points */}
              <div>
                {visionPoints.map((pt, i) => {
                  const colors = [
                    "linear-gradient(135deg,#2dd4bf,#06b6d4)",
                    "linear-gradient(135deg,#6366f1,#4f46e5)",
                    "linear-gradient(135deg,#10b981,#059669)",
                    "linear-gradient(135deg,#f59e0b,#d97706)",
                    "linear-gradient(135deg,#ec4899,#db2777)",
                    "linear-gradient(135deg,#8b5cf6,#7c3aed)",
                  ];
                  return (
                    <div key={i} className="mv2-vis-item">
                      <span className="mv2-vis-item-num" style={{ background:colors[i] }}>
                        {String(i+1).padStart(2,"0")}
                      </span>
                      <p className="text-[13.5px] leading-[1.80] pt-1" style={{ color:"#4a5070" }}>{pt}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          3. CORE VALUES — numbered full-row list
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-16 sm:py-24"
        style={{ background:"linear-gradient(155deg,#f4f8ff 0%,#ffffff 50%,#f0f4ff 100%)", fontFamily:"'Inter',sans-serif" }}>

        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"radial-gradient(rgba(99,102,241,.04) 1px,transparent 1px)", backgroundSize:"30px 30px" }} />
        <div className="absolute -top-40 right-0 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(99,102,241,.07),transparent 65%)" }} />

        <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-8 xl:px-16">

          {/* Header */}
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-4"
                style={{ background:"rgba(99,102,241,.09)", border:"1px solid rgba(99,102,241,.24)" }}>
                <span className="mv2-badge-dot w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background:"linear-gradient(135deg,#6366f1,#a855f7)" }} />
                <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                  style={{ color:"#4f46e5", fontFamily:"'Poppins',sans-serif" }}>
                  Core Values
                </span>
              </div>
              <h2 className="font-extrabold leading-[1.10]"
                style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.7rem,3.5vw,2.8rem)", color:"#0c1230" }}>
                What We{" "}
                <span style={{ background:"linear-gradient(135deg,#6366f1,#a855f7)",
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                  Stand For
                </span>
              </h2>
              <div className="mt-3 h-[3px] w-14 rounded-full"
                style={{ background:"linear-gradient(90deg,#6366f1,#a855f7)" }} />
            </div>
            <p className="text-[13px] leading-[1.85] max-w-[320px]" style={{ color:"#64748b" }}>
              Six principles that guide every decision, every project, and every relationship we build.
            </p>
          </div>

          {/* Row list */}
          <div className="px-6 rounded-3xl"
            style={{ background:"rgba(15,20,60,.03)", border:"1px solid rgba(99,102,241,.09)", boxShadow:"0 4px 32px rgba(99,102,241,.05)" }}>
            {values.map((v, i) => (
              <div key={i} className="mv2-val-row">
                <span className="mv2-val-num">{v.num}</span>

                <div className="mv2-val-head">
                  <span className="mv2-val-icon"
                    style={{ background:`linear-gradient(135deg,${v.from},${v.to})` }}>
                    {v.icon}
                  </span>
                  <span className="mv2-val-title" style={{ color:"#0f172a" }}>{v.title}</span>
                </div>

                <p className="mv2-val-desc" style={{ color:"#64748b" }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          4. MISSION — image-as-background section
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 sm:py-28"
        style={{ fontFamily:"'Inter',sans-serif" }}>

        {/* Full-bleed image */}
        <Image
          src="/Assets/mission.webp"
          alt="Our Mission"
          fill unoptimized
          className="object-cover object-center"
        />
        {/* Heavy dark overlay */}
        <div className="absolute inset-0"
          style={{ background:"linear-gradient(160deg,rgba(4,5,24,.91) 0%,rgba(10,8,40,.88) 50%,rgba(4,5,24,.93) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"radial-gradient(rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />

        {/* Large watermark */}
        <span className="absolute left-[-1%] bottom-0 select-none pointer-events-none leading-none font-extrabold"
          style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(6rem,18vw,18rem)",
            color:"rgba(255,255,255,.018)", letterSpacing:"-.02em" }}>
          MISSION
        </span>

        <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-8 xl:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Left — heading + intro */}
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-6"
                style={{ background:"rgba(99,102,241,.12)", border:"1px solid rgba(99,102,241,.30)" }}>
                <span className="mv2-badge-dot w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background:"linear-gradient(135deg,#6366f1,#a855f7)" }} />
                <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                  style={{ color:"#a5b4fc", fontFamily:"'Poppins',sans-serif" }}>
                  Why We Exist
                </span>
              </div>

              <h2 className="font-extrabold leading-[1.06] text-white mb-4"
                style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(2.2rem,5vw,4rem)" }}>
                Our{" "}
                <span style={{ background:"linear-gradient(120deg,#6366f1,#a855f7,#2dd4bf)",
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                  Mission
                </span>
              </h2>
              <div className="mb-8 h-[3px] w-16 rounded-full"
                style={{ background:"linear-gradient(90deg,#6366f1,#a855f7)" }} />

              <p className="text-[15px] leading-[1.90] mb-8"
                style={{ color:"rgba(180,210,240,.65)" }}>
                Our mission is to maintain long-term relationships with our customers and deliver quality services on time with first-class technology support at competitive pricing. We create innovative and efficient ways to help our clients meet the rapidly changing demands of the digital marketplace — so they stay ahead of the competition.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-8">
                {[[yearsExperience,"Years of Trust"],["500+","Global Clients"],["98%","On-time Delivery"]].map(([n,l]) => (
                  <div key={l}>
                    <p className="font-extrabold leading-none mb-1"
                      style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.6rem,3vw,2.4rem)",
                        background:"linear-gradient(135deg,#2dd4bf,#6366f1)",
                        WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
                        display:"inline-block" }}>
                      {n}
                    </p>
                    <p className="text-[11px] font-semibold uppercase tracking-[.14em]"
                      style={{ color:"rgba(255,255,255,.35)", fontFamily:"'Poppins',sans-serif" }}>
                      {l}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — glassmorphism pill list */}
            <div className="flex flex-col gap-3">
              {missionPoints.map((pt, i) => (
                <div key={i} className="mv2-ms-pill">
                  <span className="flex-shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 rounded-full"
                    style={{ background:`linear-gradient(135deg,#6366f1,#a855f7)` }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 2.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <p className="text-[13.5px] leading-[1.80]" style={{ color:"rgba(200,215,255,.75)" }}>{pt}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          5. CTA
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-16 sm:py-20"
        style={{ background:"linear-gradient(155deg,#f0fbfa 0%,#ffffff 50%,#f1f1fd 100%)", fontFamily:"'Inter',sans-serif" }}>

        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"radial-gradient(rgba(99,102,241,.04) 1px,transparent 1px)", backgroundSize:"30px 30px" }} />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[560px] h-[320px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(ellipse,rgba(45,212,191,.10),transparent 70%)" }} />
        <div className="absolute -bottom-32 -right-32 w-[380px] h-[380px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(99,102,241,.07),transparent 65%)" }} />

        <div className="relative z-10 max-w-[720px] mx-auto px-4 sm:px-8 text-center">

          <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-5"
            style={{ background:"rgba(45,212,191,.09)", border:"1px solid rgba(45,212,191,.26)" }}>
            <span className="mv2-badge-dot w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
            <span className="text-[10px] font-bold uppercase tracking-[.22em]"
              style={{ color:"#0d9488", fontFamily:"'Poppins',sans-serif" }}>
              Let's Work Together
            </span>
          </div>

          <h2 className="font-extrabold leading-[1.10] mb-5"
            style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.6rem,3.5vw,2.6rem)", color:"#0c1230" }}>
            We Love to Listen to{" "}
            <span style={{ background:"linear-gradient(120deg,#2dd4bf,#6366f1,#a855f7)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              Your Requirements
            </span>
          </h2>

          <p className="text-[15px] mb-8 leading-[1.85]" style={{ color:"#64748b" }}>
            Ready to start your project? Our team is standing by to help you build something great.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
              style={{ background:"linear-gradient(135deg,#2dd4bf,#6366f1)",
                boxShadow:"0 6px 24px rgba(45,212,191,.28)",
                fontFamily:"'Poppins',sans-serif", textDecoration:"none" }}>
              Get In Touch
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M1.5 6h9M6.5 1.5l4 4.5-4 4.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a href="tel:+917056937000"
              className="inline-flex items-center gap-2 font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
              style={{ background:"rgba(99,102,241,.08)", border:"1px solid rgba(99,102,241,.20)",
                color:"#4f46e5", fontFamily:"'Poppins',sans-serif", textDecoration:"none" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.61-.61a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              +91-7056937000
            </a>
          </div>
        </div>
      </section>

      <GetNewInsight />
    </>
  );
}
