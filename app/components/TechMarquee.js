"use client";
import {
  FaShoppingCart, FaLaptopCode, FaWordpress, FaStore, FaBuilding,
  FaMobileAlt, FaAndroid, FaApple, FaReact, FaVial,
  FaClipboardCheck, FaBullhorn, FaSearch, FaGoogle, FaShareAlt,
  FaMapMarkerAlt, FaFileAlt, FaPaintBrush, FaRegIdBadge, FaIdCard,
  FaFilePdf, FaVideo, FaLightbulb,
} from "react-icons/fa";

const SERVICES = [
  { name: "eCommerce Website",           icon: FaShoppingCart,   from: "#2dd4bf", to: "#6366f1", cat: "Web" },
  { name: "Web Application",             icon: FaLaptopCode,     from: "#6366f1", to: "#8b5cf6", cat: "Web" },
  { name: "CMS Web Development",         icon: FaWordpress,      from: "#0ea5e9", to: "#2dd4bf", cat: "Web" },
  { name: "Small Business Website",      icon: FaStore,          from: "#a855f7", to: "#6366f1", cat: "Web" },
  { name: "Corporate Website",           icon: FaBuilding,       from: "#2dd4bf", to: "#0ea5e9", cat: "Web" },
  { name: "Mobile App Development",      icon: FaMobileAlt,      from: "#6366f1", to: "#2dd4bf", cat: "App" },
  { name: "Android App Development",     icon: FaAndroid,        from: "#8b5cf6", to: "#a855f7", cat: "App" },
  { name: "iOS App Development",         icon: FaApple,          from: "#2dd4bf", to: "#6366f1", cat: "App" },
  { name: "Hybrid App Development",      icon: FaReact,          from: "#0ea5e9", to: "#6366f1", cat: "App" },
  { name: "Mobile App Testing",          icon: FaVial,           from: "#6366f1", to: "#8b5cf6", cat: "QA" },
  { name: "Quality Assurance",           icon: FaClipboardCheck, from: "#a855f7", to: "#2dd4bf", cat: "QA" },
  { name: "Digital Marketing",           icon: FaBullhorn,       from: "#2dd4bf", to: "#6366f1", cat: "Marketing" },
  { name: "SEO Services",                icon: FaSearch,         from: "#6366f1", to: "#0ea5e9", cat: "Marketing" },
  { name: "PPC Management",              icon: FaGoogle,         from: "#0ea5e9", to: "#2dd4bf", cat: "Marketing" },
  { name: "Social Media Marketing",      icon: FaShareAlt,       from: "#8b5cf6", to: "#6366f1", cat: "Marketing" },
  { name: "Local SEO Services",          icon: FaMapMarkerAlt,   from: "#2dd4bf", to: "#a855f7", cat: "Marketing" },
  { name: "Content Marketing",           icon: FaFileAlt,        from: "#6366f1", to: "#2dd4bf", cat: "Marketing" },
  { name: "Design & Branding",           icon: FaPaintBrush,     from: "#a855f7", to: "#8b5cf6", cat: "Design" },
  { name: "Logo Design",                 icon: FaRegIdBadge,     from: "#2dd4bf", to: "#6366f1", cat: "Design" },
  { name: "Corporate Identity Design",   icon: FaIdCard,         from: "#6366f1", to: "#a855f7", cat: "Design" },
  { name: "Brochure Design",             icon: FaFilePdf,        from: "#0ea5e9", to: "#2dd4bf", cat: "Design" },
  { name: "Animated Videos",             icon: FaVideo,          from: "#8b5cf6", to: "#6366f1", cat: "Design" },
  { name: "Creative Agency",             icon: FaLightbulb,      from: "#2dd4bf", to: "#0ea5e9", cat: "Creative" },
];

const CAT_COLORS = {
  Web:       { pill: "rgba(14,165,233,.14)", text: "#38bdf8" },
  App:       { pill: "rgba(99,102,241,.14)", text: "#818cf8" },
  QA:        { pill: "rgba(168,85,247,.14)", text: "#c084fc" },
  Marketing: { pill: "rgba(45,212,191,.14)", text: "#2dd4bf" },
  Design:    { pill: "rgba(251,113,133,.14)", text:"#fb7185" },
  Creative:  { pill: "rgba(251,191,36,.14)",  text:"#fbbf24" },
};

function Card({ s }) {
  const cc = CAT_COLORS[s.cat] || CAT_COLORS.Web;
  return (
    <div className="tm-card group flex items-center gap-3.5 px-5 py-3.5 mx-2.5 flex-shrink-0 rounded-2xl cursor-default select-none"
      style={{
        background: "rgba(255,255,255,.04)",
        border: "1px solid rgba(255,255,255,.07)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 20px rgba(0,0,0,.22)",
        transition: "transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s",
      }}>
      {/* Icon */}
      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `linear-gradient(135deg,${s.from},${s.to})`, boxShadow: `0 4px 14px ${s.from}50` }}>
        <s.icon color="white" size={15} />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-0.5">
        <span className="text-[13px] font-semibold whitespace-nowrap leading-tight"
          style={{ color: "rgba(255,255,255,.86)", fontFamily: "'Poppins',sans-serif" }}>
          {s.name}
        </span>
        <span className="text-[9px] font-bold uppercase tracking-[.14em] px-1.5 py-0.5 rounded-full self-start"
          style={{ background: cc.pill, color: cc.text }}>
          {s.cat}
        </span>
      </div>

      {/* Arrow */}
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="flex-shrink-0 ml-1"
        style={{ opacity: .28 }}>
        <path d="M1.5 6h9M6.5 1.5l4 4.5-4 4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export default function TechMarquee() {
  const row1 = SERVICES.slice(0, 12);
  const row2 = SERVICES.slice(12).concat(SERVICES.slice(0, 1));

  return (
    <>
      <style>{`
        @keyframes tmLeft  { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes tmRight { from{transform:translateX(-50%)} to{transform:translateX(0)} }
        @keyframes tmBarPulse { 0%,100%{opacity:.55} 50%{opacity:1} }

        .tm-row-left  { display:flex; width:max-content; animation:tmLeft  55s linear infinite }
        .tm-row-right { display:flex; width:max-content; animation:tmRight 48s linear infinite }
        .tm-card:hover { transform:translateY(-3px); box-shadow:0 12px 36px rgba(0,0,0,.34) !important }

        .tm-top-bar    { animation:tmBarPulse 3s ease-in-out infinite }
        .tm-bottom-bar { animation:tmBarPulse 3s ease-in-out infinite .8s }
      `}</style>

      <section className="relative w-full overflow-hidden"
        style={{ background: "linear-gradient(140deg,#060b1a 0%,#09112a 55%,#0d1540 100%)" }}>

        {/* ── Background dot grid ── */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"radial-gradient(rgba(99,102,241,.042) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />

        {/* ── Aurora blobs ── */}
        <div className="absolute pointer-events-none"
          style={{ top:"-60%",left:"-10%",width:"50vw",height:"50vw",maxWidth:"400px",maxHeight:"400px",borderRadius:"50%",background:"radial-gradient(circle,rgba(45,212,191,.10) 0%,transparent 65%)" }} />
        <div className="absolute pointer-events-none"
          style={{ bottom:"-60%",right:"-5%",width:"44vw",height:"44vw",maxWidth:"360px",maxHeight:"360px",borderRadius:"50%",background:"radial-gradient(circle,rgba(99,102,241,.10) 0%,transparent 65%)" }} />

        {/* ── Top gradient border ── */}
        <div className="tm-top-bar absolute top-0 left-0 right-0 h-[2px]"
          style={{ background:"linear-gradient(90deg,transparent 0%,#2dd4bf 25%,#6366f1 50%,#a855f7 75%,transparent 100%)" }} />

        {/* ── Section header ── */}
        <div className="relative z-10 flex items-center justify-center gap-4 pt-8 pb-6 px-5">
          {/* Left decorative line */}
          <div className="hidden sm:block flex-1 h-px max-w-[120px]"
            style={{ background:"linear-gradient(to right,transparent,rgba(45,212,191,.30))" }} />

          <div className="inline-flex items-center gap-3 rounded-full px-5 py-2"
            style={{ background:"rgba(45,212,191,.07)", border:"1px solid rgba(45,212,191,.18)", backdropFilter:"blur(10px)" }}>
            {/* Pulsing dot */}
            <span className="relative w-2 h-2 rounded-full flex-shrink-0" style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)" }}>
              <span className="absolute inset-0 rounded-full" style={{ background:"rgba(45,212,191,.5)", animation:"tmBarPulse 2s ease-out infinite" }} />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[.22em]"
              style={{ background:"linear-gradient(135deg,#2dd4bf,#6366f1)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",fontFamily:"'Poppins',sans-serif" }}>
              23+ Services &nbsp;·&nbsp; All Under One Roof
            </span>
          </div>

          {/* Right decorative line */}
          <div className="hidden sm:block flex-1 h-px max-w-[120px]"
            style={{ background:"linear-gradient(to left,transparent,rgba(99,102,241,.30))" }} />
        </div>

        {/* ── Marquee rows ── */}
        <div className="relative z-[1] flex flex-col gap-3.5 pb-8">

          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-28 pointer-events-none z-10"
            style={{ background:"linear-gradient(to right,#09112a,transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-28 pointer-events-none z-10"
            style={{ background:"linear-gradient(to left,#09112a,transparent)" }} />

          {/* Row 1 — scrolls left */}
          <div className="tm-row-left">
            {[...row1, ...row1, ...row1, ...row1].map((s, i) => <Card key={i} s={s} />)}
          </div>

          {/* Row 2 — scrolls right */}
          <div className="tm-row-right">
            {[...row2, ...row2, ...row2, ...row2].map((s, i) => <Card key={i} s={s} />)}
          </div>
        </div>

        {/* ── Bottom gradient border ── */}
        <div className="tm-bottom-bar absolute bottom-0 left-0 right-0 h-[2px]"
          style={{ background:"linear-gradient(90deg,transparent 0%,#6366f1 25%,#a855f7 50%,#2dd4bf 75%,transparent 100%)" }} />
      </section>
    </>
  );
}
