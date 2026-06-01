import React from "react";
import {
  FaShoppingCart,
  FaLaptopCode,
  FaWordpress,
  FaStore,
  FaBuilding,
  FaMobileAlt,
  FaAndroid,
  FaApple,
  FaReact,
  FaVial,
  FaClipboardCheck,
  FaBullhorn,
  FaSearch,
  FaGoogle,
  FaShareAlt,
  FaMapMarkerAlt,
  FaFileAlt,
  FaPaintBrush,
  FaRegIdBadge,
  FaIdCard,
  FaFilePdf,
  FaVideo,
  FaLightbulb,
} from "react-icons/fa";

export default function TechMarquee() {
  const services = [
    { name: "eCommerce Website",          icon: FaShoppingCart,  from: "#2dd4bf", to: "#6366f1" },
    { name: "Web Application Development",icon: FaLaptopCode,    from: "#6366f1", to: "#8b5cf6" },
    { name: "CMS Web Development",        icon: FaWordpress,     from: "#0ea5e9", to: "#2dd4bf" },
    { name: "Small Business Website",     icon: FaStore,         from: "#a855f7", to: "#6366f1" },
    { name: "Corporate Website",          icon: FaBuilding,      from: "#2dd4bf", to: "#0ea5e9" },
    { name: "Mobile App Development",     icon: FaMobileAlt,     from: "#6366f1", to: "#2dd4bf" },
    { name: "Android App Development",    icon: FaAndroid,       from: "#8b5cf6", to: "#a855f7" },
    { name: "iOS App Development",        icon: FaApple,         from: "#2dd4bf", to: "#6366f1" },
    { name: "Hybrid App Development",     icon: FaReact,         from: "#0ea5e9", to: "#6366f1" },
    { name: "Mobile App Testing",         icon: FaVial,          from: "#6366f1", to: "#8b5cf6" },
    { name: "Quality Assurance",          icon: FaClipboardCheck,from: "#a855f7", to: "#2dd4bf" },
    { name: "Digital Marketing Service",  icon: FaBullhorn,      from: "#2dd4bf", to: "#6366f1" },
    { name: "SEO Services",               icon: FaSearch,        from: "#6366f1", to: "#0ea5e9" },
    { name: "PPC Management",             icon: FaGoogle,        from: "#0ea5e9", to: "#2dd4bf" },
    { name: "Social Media Marketing",     icon: FaShareAlt,      from: "#8b5cf6", to: "#6366f1" },
    { name: "Local SEO Services",         icon: FaMapMarkerAlt,  from: "#2dd4bf", to: "#a855f7" },
    { name: "Content Marketing Services", icon: FaFileAlt,       from: "#6366f1", to: "#2dd4bf" },
    { name: "Design & Branding",          icon: FaPaintBrush,    from: "#a855f7", to: "#8b5cf6" },
    { name: "Logo Design",                icon: FaRegIdBadge,    from: "#2dd4bf", to: "#6366f1" },
    { name: "Corporate Identity Design",  icon: FaIdCard,        from: "#6366f1", to: "#a855f7" },
    { name: "Brochure Design",            icon: FaFilePdf,       from: "#0ea5e9", to: "#2dd4bf" },
    { name: "Animated Videos",            icon: FaVideo,         from: "#8b5cf6", to: "#6366f1" },
    { name: "Creative Agency",            icon: FaLightbulb,     from: "#2dd4bf", to: "#0ea5e9" },
  ];

  const row1 = services.slice(0, 12);
  const row2 = services.slice(11);

  const Card = ({ s }) => (
    <div
      className="flex items-center gap-3 px-5 py-3 mx-3 rounded-xl flex-shrink-0"
      style={{
        background: "rgba(255,255,255,.05)",
        border: "1px solid rgba(255,255,255,.08)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 4px 16px rgba(0,0,0,.25)",
      }}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{
          background: `linear-gradient(135deg,${s.from},${s.to})`,
          boxShadow: `0 2px 10px ${s.from}50`,
        }}
      >
        <s.icon color="white" size={14} />
      </div>
      <span
        className="text-sm font-semibold whitespace-nowrap"
        style={{ color: "rgba(255,255,255,.78)", fontFamily: "'Poppins',sans-serif" }}
      >
        {s.name}
      </span>
    </div>
  );

  return (
    <div
      className="relative w-full overflow-hidden py-8"
      style={{ background: "linear-gradient(140deg,#060b1a 0%,#09112a 60%,#0d1540 100%)" }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(99,102,241,.045) 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Left + right fade masks */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none z-10"
        style={{ background: "linear-gradient(to right,#060b1a,transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none z-10"
        style={{ background: "linear-gradient(to left,#060b1a,transparent)" }}
      />

      {/* Accent line top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg,transparent,#2dd4bf55,#6366f155,transparent)" }}
      />
      {/* Accent line bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg,transparent,#6366f155,#2dd4bf55,transparent)" }}
      />

      <div className="relative z-[1] flex flex-col gap-4">

        {/* Row 1 — scrolls left */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...row1, ...row1, ...row1, ...row1].map((s, i) => (
            <Card key={i} s={s} />
          ))}
        </div>

        {/* Row 2 — scrolls right */}
        <div
          className="flex whitespace-nowrap"
          style={{
            display: "flex",
            width: "max-content",
            animation: "marquee 60s linear infinite reverse",
          }}
        >
          {[...row2, ...row2, ...row2, ...row2].map((s, i) => (
            <Card key={i} s={s} />
          ))}
        </div>

      </div>
    </div>
  );
}
