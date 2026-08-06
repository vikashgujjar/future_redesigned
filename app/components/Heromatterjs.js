"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import useYearsExperience from "../lib/useYearsExperience";

const skills = [
  { label: "Mobile App Development",  fi: "#2dd4bf", ti: "#06b6d4" },
  { label: "Web Development",         fi: "#6366f1", ti: "#8b5cf6" },
  { label: "Backend Development",     fi: "#0ea5e9", ti: "#2dd4bf" },
  { label: "DevOps",                  fi: "#8b5cf6", ti: "#6366f1" },
  { label: "Data Science",            fi: "#2dd4bf", ti: "#6366f1" },
  { label: "Frontend Development",    fi: "#6366f1", ti: "#0ea5e9" },
  { label: "Artificial Intelligence", fi: "#06b6d4", ti: "#2dd4bf" },
  { label: "Digital Marketing",       fi: "#a855f7", ti: "#6366f1" },
  { label: "PHP Laravel",             fi: "#2dd4bf", ti: "#0ea5e9" },
  { label: "Shopify Development",     fi: "#6366f1", ti: "#8b5cf6" },
  { label: "React.js Development",    fi: "#0ea5e9", ti: "#6366f1" },
  { label: "Machine Learning",        fi: "#8b5cf6", ti: "#2dd4bf" },
  { label: "Node Js Development",     fi: "#2dd4bf", ti: "#6366f1" },
  { label: "E-commerce Development",  fi: "#6366f1", ti: "#2dd4bf" },
];

const PILL_W  = 220;
const PILL_H  = 50;
const PADDING = 10;

function scatter(arenaW, arenaH) {
  const bottomZone = arenaH * 0.55; // use bottom 55% of the arena
  return skills.map(() => {
    const x = PADDING + Math.random() * Math.max(0, arenaW - PILL_W - PADDING * 2);
    const y = (arenaH - bottomZone) + Math.random() * (bottomZone - PILL_H - PADDING);
    const rotate = (Math.random() - 0.5) * 34; // -17° to +17°
    return {
      x: Math.max(0, Math.min(x, arenaW - PILL_W)),
      y: Math.max(48, Math.min(y, arenaH - PILL_H)),
      rotate,
    };
  });
}

function resolveCollisions(positions, dragIdx) {
  const next = positions.map(p => ({ ...p }));
  skills.forEach((_, i) => {
    if (i === dragIdx) return;
    const dx = next[dragIdx].x - next[i].x;
    const dy = next[dragIdx].y - next[i].y;
    const overlapX = PILL_W - Math.abs(dx);
    const overlapY = PILL_H - Math.abs(dy);
    if (overlapX > 0 && overlapY > 0) {
      const push = Math.min(overlapX, overlapY) * 0.55 + 4;
      if (Math.abs(dx) < Math.abs(dy)) {
        next[i].y += dy > 0 ? -push : push;
      } else {
        next[i].x += dx > 0 ? -push : push;
      }
    }
  });
  return next;
}

function Pill({ skill, pos, arenaW, arenaH, onDragEnd, zIdx, onDragStart }) {
  const x      = useMotionValue(pos.x);
  const y      = useMotionValue(pos.y);
  const rotate = useMotionValue(pos.rotate ?? 0);

  useEffect(() => {
    animate(x,      pos.x,           { duration: 0.22, ease: "easeOut" });
    animate(y,      pos.y,           { duration: 0.22, ease: "easeOut" });
    animate(rotate, pos.rotate ?? 0, { duration: 0.28, ease: "easeOut" });
  }, [pos.x, pos.y, pos.rotate]);

  return (
    <motion.div
      className="absolute cursor-grab active:cursor-grabbing select-none"
      style={{ width: PILL_W, height: PILL_H, x, y, rotate, zIndex: zIdx, top: 0, left: 0 }}
      drag
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={{ left: 0, top: 48, right: arenaW - PILL_W, bottom: arenaH - PILL_H }}
      whileTap={{ scale: 1.10 }}
      whileHover={{ scale: 1.05 }}
      onDragStart={onDragStart}
      onDragEnd={() => onDragEnd(x.get(), y.get())}
    >
      {/* gradient border shell */}
      <div style={{
        background: `linear-gradient(135deg,${skill.fi},${skill.ti})`,
        borderRadius: 9999,
        padding: "2px",
        width: "100%",
        height: "100%",
        boxShadow: `0 0 24px ${skill.fi}55, 0 6px 26px rgba(0,0,0,.52)`,
      }}>
        {/* dark glass inner */}
        <div style={{
          background: "linear-gradient(135deg,rgba(8,12,28,.93),rgba(12,18,42,.91))",
          borderRadius: 9999,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "0 18px",
          backdropFilter: "blur(12px)",
        }}>
          <span className="sk-dot" style={{
            width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
            background: `linear-gradient(135deg,${skill.fi},${skill.ti})`,
            boxShadow: `0 0 8px ${skill.fi}, 0 0 20px ${skill.fi}66`,
          }} />
          <span style={{
            fontFamily: "'Poppins',sans-serif",
            fontSize: 11.5,
            fontWeight: 600,
            whiteSpace: "nowrap",
            color: "rgba(255,255,255,.92)",
            letterSpacing: "0.015em",
          }}>
            {skill.label}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

const STATS = [
  { v: "14+",  l: "Core Capabilities", from: "#2dd4bf", to: "#06b6d4" },
  { v: '8+',   l: "Years Experience", from: "#6366f1", to: "#8b5cf6" },
  { v: "5000+", l: "Projects Done",    from: "#0ea5e9", to: "#2dd4bf" },
  { v: "98%",  l: "Client Retention", from: "#a855f7", to: "#6366f1" },
];

export default function SkillsSection() {
  const arenaRef      = useRef(null);
  const [arena, setArena]         = useState({ w: 0, h: 0 });
  const [positions, setPositions] = useState([]);
  const [topIdx, setTopIdx]       = useState(0);
  const yearsExperience = useYearsExperience();

  useEffect(() => {
    if (!arenaRef.current) return;
    const measure = () => {
      const { width, height } = arenaRef.current.getBoundingClientRect();
      setArena({ w: width, h: height });
      setPositions(scatter(width, height));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(arenaRef.current);
    return () => ro.disconnect();
  }, []);

  const handleDragEnd = useCallback((i, nx, ny) => {
    setPositions(prev => {
      const next = prev.map(p => ({ ...p }));
      next[i] = {
        x: Math.max(0, Math.min(nx, arena.w - PILL_W)),
        y: Math.max(48, Math.min(ny, arena.h - PILL_H)),
        rotate: 0, // straighten after being picked up and placed
      };
      return resolveCollisions(next, i);
    });
  }, [arena]);

  return (
    <section className="sk-root max-md:hidden relative overflow-hidden py-20 lg:py-28"
      style={{ background: "#f8faff" }}>
      <style>{`
        .sk-root { font-family:'Inter',sans-serif }

        .sk-dotgrid {
          background-image: radial-gradient(circle,rgba(99,102,241,.055) 1px,transparent 1px);
          background-size: 28px 28px;
        }

        @keyframes skCW    { to{transform:rotate(360deg)} }
        @keyframes skCCW   { to{transform:rotate(-360deg)} }
        @keyframes skFloat {
          0%,100%{transform:translateY(0);opacity:.55}
          50%{transform:translateY(-8px);opacity:1}
        }
        @keyframes skGlow  { 0%,100%{opacity:.6} 50%{opacity:1} }
        @keyframes skBarIn { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes skUp    { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes skMorph {
          0%,100%{border-radius:60% 40% 55% 45%/50% 55% 45% 50%}
          33%    {border-radius:40% 60% 45% 55%/55% 45% 55% 45%}
          66%    {border-radius:55% 45% 60% 40%/45% 55% 45% 55%}
        }
        @keyframes skPing  { 75%,100%{transform:scale(2.1);opacity:0} }
        @keyframes skScan  {
          0%  { top:48px; opacity:.40 }
          48% { opacity:.72 }
          50% { top:calc(100% - 54px); opacity:.40 }
          100%{ top:48px; opacity:.40 }
        }
        @keyframes skStatIn {
          from{opacity:0;transform:translateY(14px) scale(.97)}
          to  {opacity:1;transform:translateY(0) scale(1)}
        }

        .sk-bar    { animation:skBarIn .8s cubic-bezier(.22,1,.36,1) .25s both; transform-origin:left }
        .sk-up     { animation:skUp .6s cubic-bezier(.22,1,.36,1) both }
        .sk-up-1   { animation-delay:.05s }
        .sk-up-2   { animation-delay:.12s }
        .sk-up-3   { animation-delay:.19s }
        .sk-morph  { animation:skMorph 14s ease-in-out infinite }
        .sk-dot    { animation:skGlow 2.8s ease-in-out infinite }

        .sk-scan {
          position:absolute; left:0; right:0; height:1.5px; pointer-events:none; z-index:3;
          background:linear-gradient(90deg,transparent 0%,rgba(45,212,191,.58) 30%,rgba(99,102,241,.52) 70%,transparent 100%);
          animation:skScan 5.5s ease-in-out infinite;
        }

        .sk-grad {
          background:linear-gradient(135deg,#2dd4bf,#6366f1);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text; color:transparent;
        }

        .sk-stat { transition:transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s; }
        .sk-stat:hover { transform:translateY(-5px); box-shadow:0 22px 50px rgba(99,102,241,.18) !important }

        .sk-ping { position:relative }
        .sk-ping::after {
          content:''; position:absolute; inset:0; border-radius:50%;
          background:inherit; animation:skPing 2s ease-out infinite;
        }

        .sk-arena-dots {
          background-image:radial-gradient(circle,rgba(255,255,255,.026) 1px,transparent 1px);
          background-size:26px 26px;
        }

        .sk-hint { transition:transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s; }
        .sk-hint:hover { transform:translateY(-4px); box-shadow:0 14px 36px rgba(99,102,241,.14) !important; }

        .sk-stat-card { animation:skStatIn .5s cubic-bezier(.22,1,.36,1) both; }
        .sk-stat-card:nth-child(1){ animation-delay:.20s }
        .sk-stat-card:nth-child(2){ animation-delay:.27s }
        .sk-stat-card:nth-child(3){ animation-delay:.34s }
        .sk-stat-card:nth-child(4){ animation-delay:.41s }
      `}</style>

      {/* ── Backgrounds ── */}
      <div className="sk-dotgrid absolute inset-0 pointer-events-none" />
      <div className="sk-morph absolute -top-32 -left-32 w-[520px] h-[520px] pointer-events-none opacity-[.055]"
        style={{ background:"linear-gradient(135deg,#2dd4bf,#6366f1)" }} />
      <div className="sk-morph absolute -bottom-32 -right-32 w-[440px] h-[440px] pointer-events-none opacity-[.048]"
        style={{ background:"linear-gradient(135deg,#0ea5e9,#8b5cf6)", animationDelay:"7s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[320px] pointer-events-none rounded-full opacity-[.038]"
        style={{ background:"radial-gradient(ellipse,#6366f1,transparent 70%)" }} />

      {/* SVG top-left */}
      <svg className="absolute top-0 left-0 pointer-events-none" width="300" height="300"
        viewBox="0 0 300 300" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="skTL" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity=".28"/>
            <stop offset="100%" stopColor="#6366f1" stopOpacity=".02"/>
          </linearGradient>
        </defs>
        <g style={{transformOrigin:"0 0",animation:"skCW 40s linear infinite"}}>
          <circle cx="0" cy="0" r="220" stroke="url(#skTL)" strokeWidth="1.2"
            strokeDasharray="65 110" strokeLinecap="round" fill="none"/>
        </g>
        <g style={{transformOrigin:"0 0",animation:"skCCW 28s linear infinite"}}>
          <circle cx="0" cy="0" r="148" stroke="rgba(34,211,238,.17)" strokeWidth="1.2"
            strokeDasharray="48 80" strokeLinecap="round" fill="none"/>
        </g>
        <g style={{transformOrigin:"0 0",animation:"skCW 18s linear infinite"}}>
          <circle cx="0" cy="0" r="86" stroke="rgba(45,212,191,.22)" strokeWidth="1.6"
            strokeDasharray="28 48" strokeLinecap="round" fill="none"/>
        </g>
        <g transform="translate(62,62)" style={{animation:"skFloat 4.5s ease-in-out infinite"}}>
          <line x1="-7" y1="0" x2="7" y2="0" stroke="rgba(45,212,191,.62)" strokeWidth="2.4" strokeLinecap="round"/>
          <line x1="0" y1="-7" x2="0" y2="7" stroke="rgba(45,212,191,.62)" strokeWidth="2.4" strokeLinecap="round"/>
        </g>
      </svg>

      {/* SVG bottom-right */}
      <svg className="absolute bottom-0 right-0 pointer-events-none" width="280" height="280"
        viewBox="0 0 280 280" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="skBR" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity=".24"/>
            <stop offset="100%" stopColor="#2dd4bf" stopOpacity=".02"/>
          </linearGradient>
        </defs>
        <g style={{transformOrigin:"280px 280px",animation:"skCCW 34s linear infinite"}}>
          <circle cx="280" cy="280" r="198" stroke="url(#skBR)" strokeWidth="1.2"
            strokeDasharray="62 104" strokeLinecap="round" fill="none"/>
        </g>
        <g style={{transformOrigin:"280px 280px",animation:"skCW 22s linear infinite"}}>
          <circle cx="280" cy="280" r="130" stroke="rgba(139,92,246,.19)" strokeWidth="1.4"
            strokeDasharray="42 70" strokeLinecap="round" fill="none"/>
        </g>
        <g transform="translate(234,234)" style={{animation:"skFloat 5.5s ease-in-out infinite 1.2s"}}>
          <line x1="-5" y1="-5" x2="5" y2="5" stroke="rgba(99,102,241,.58)" strokeWidth="2" strokeLinecap="round"/>
          <line x1="5" y1="-5" x2="-5" y2="5" stroke="rgba(99,102,241,.58)" strokeWidth="2" strokeLinecap="round"/>
        </g>
      </svg>

      <div className="relative z-10 max-w-[1380px] mx-auto px-5 sm:px-8 md:px-12 xl:px-16">
        <div className="grid lg:grid-cols-[440px_1fr] xl:grid-cols-[480px_1fr] gap-12 xl:gap-16 items-start">

          {/* ════ LEFT PANEL ════ */}
          <div className="flex flex-col gap-5 lg:sticky lg:top-24">

            {/* Badge */}
            <div className="sk-up sk-up-1 inline-flex items-center gap-2.5 self-start rounded-full px-4 py-2"
              style={{ background:"rgba(45,212,191,.09)", border:"1px solid rgba(45,212,191,.24)" }}>
              <span className="sk-ping w-2 h-2 rounded-full flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span className="sk-grad text-[10px] font-bold uppercase tracking-[.24em]"
                style={{ fontFamily:"'Poppins',sans-serif" }}>
                Skills &amp; Technologies
              </span>
            </div>

            {/* Heading */}
            <div className="sk-up sk-up-1">
              <p className="text-[14px] text-gray-400 font-light italic mb-1.5 tracking-[.02em]">
                Grow Your Business
              </p>
              <h2 className="font-extrabold leading-[1.06] text-gray-900 m-0"
                style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(2.1rem,3.8vw,3.4rem)" }}>
                With Our{" "}
                <span style={{
                  background:"linear-gradient(135deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text"
                }}>
                  Expertise
                </span>
              </h2>
            </div>

            {/* Accent bar */}
            <div className="sk-bar h-[3px] rounded-full w-16"
              style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1)" }} />

            {/* Description */}
            <p className="sk-up sk-up-2 text-[13.5px] text-gray-500 leading-[1.88] max-w-[400px]">
              Our team masters a wide spectrum of modern technologies — from blazing-fast frontend
              frameworks to robust backend architectures.{" "}
              <span className="font-medium" style={{ color:"#6366f1" }}>Drag the skill chips</span>{" "}
              to explore what we build.
            </p>

            {/* Hint card */}
            <div className="sk-hint sk-up sk-up-2 flex items-center gap-4 p-4 rounded-2xl"
              style={{
                background:"linear-gradient(135deg,rgba(99,102,241,.07),rgba(45,212,191,.04))",
                border:"1px solid rgba(99,102,241,.12)",
                boxShadow:"0 4px 20px rgba(99,102,241,.06)",
              }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#2dd4bf,#6366f1)", boxShadow:"0 4px 14px rgba(99,102,241,.35)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white"
                  strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/>
                </svg>
              </div>
              <div>
                <p className="text-[12.5px] font-bold text-gray-800 mb-0.5"
                  style={{ fontFamily:"'Poppins',sans-serif" }}>
                  Interactive Skill Arena
                </p>
                <p className="text-[11.5px] text-gray-500 leading-relaxed m-0">
                  Drag any chip — they collide and push each other. Try it!
                </p>
              </div>
            </div>

            {/* 4 stat cards */}
            <div className="grid grid-cols-2 gap-3 mt-1">
              {STATS.map((st, i) => (
                <div key={i} className="sk-stat sk-stat-card bg-white rounded-2xl p-4"
                  style={{
                    border:"1px solid rgba(99,102,241,.09)",
                    boxShadow:"0 4px 18px rgba(99,102,241,.07)",
                  }}>
                  <div className="font-extrabold leading-none mb-1"
                    style={{
                      fontFamily:"'Poppins',sans-serif",
                      fontSize:"clamp(1.45rem,2.2vw,1.85rem)",
                      background:`linear-gradient(135deg,${st.from},${st.to})`,
                      WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text"
                    }}>
                    {st.l === "Years Experience" ? yearsExperience : st.v}
                  </div>
                  <div className="text-[10px] text-gray-400 font-medium tracking-[.07em] uppercase mb-1.5">
                    {st.l}
                  </div>
                  <div className="w-7 h-[2.5px] rounded-full"
                    style={{ background:`linear-gradient(90deg,${st.from},${st.to})` }} />
                </div>
              ))}
            </div>
          </div>

          {/* ════ RIGHT — Arena ════ */}
          <div className="relative">
            {/* Outer glow halo */}
            <div className="absolute -inset-4 rounded-[34px] pointer-events-none"
              style={{
                background:"linear-gradient(135deg,rgba(45,212,191,.20),rgba(99,102,241,.24),rgba(139,92,246,.16))",
                filter:"blur(22px)", opacity:.68
              }} />

            {/* Arena box */}
            <div
              ref={arenaRef}
              className="sk-arena-dots relative w-full rounded-[28px] overflow-hidden"
              style={{
                height: 600,
                background:"linear-gradient(148deg,#060b18 0%,#0a1128 48%,#0d1540 100%)",
                border:"1px solid rgba(255,255,255,.07)",
                boxShadow:"0 32px 80px rgba(0,0,0,.52), inset 0 1px 0 rgba(255,255,255,.07)",
              }}
            >
              {/* Corner ambient glows */}
              <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
                style={{ background:"radial-gradient(circle,rgba(45,212,191,.24) 0%,transparent 65%)" }} />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                style={{ background:"radial-gradient(circle,rgba(99,102,241,.28) 0%,transparent 65%)" }} />
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-52 h-52 rounded-full pointer-events-none"
                style={{ background:"radial-gradient(circle,rgba(139,92,246,.09) 0%,transparent 65%)" }} />

              {/* Top gradient strip */}
              <div className="absolute top-0 left-0 right-0 h-[3px] pointer-events-none rounded-t-[28px]"
                style={{ background:"linear-gradient(90deg,transparent,#2dd4bf,#6366f1,transparent)", opacity:.65 }} />

              {/* Status bar */}
              <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-5 h-12"
                style={{
                  borderBottom:"1px solid rgba(255,255,255,.055)",
                  background:"rgba(255,255,255,.025)",
                  backdropFilter:"blur(10px)",
                }}>
                <div className="flex items-center gap-2.5">
                  <span className="sk-ping w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
                  <span className="text-[10px] uppercase tracking-[.22em] font-semibold"
                    style={{ color:"rgba(45,212,191,.85)", fontFamily:"'Inter',sans-serif" }}>
                    Drag to Explore · {skills.length} Skills
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {["rgba(255,107,107,.55)","rgba(255,189,68,.48)","rgba(45,212,191,.44)"].map((bg, i) => (
                    <span key={i} className="w-[11px] h-[11px] rounded-full" style={{ background:bg }} />
                  ))}
                </div>
              </div>

              {/* Scan line */}
              <div className="sk-scan" />

              {/* Pills */}
              {positions.length > 0 && skills.map((skill, i) => (
                <Pill
                  key={i}
                  skill={skill}
                  pos={positions[i]}
                  arenaW={arena.w}
                  arenaH={arena.h}
                  zIdx={i === topIdx ? 20 : 2}
                  onDragStart={() => setTopIdx(i)}
                  onDragEnd={(nx, ny) => handleDragEnd(i, nx, ny)}
                />
              ))}

              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
                style={{ background:"linear-gradient(to top,rgba(6,11,24,.78),transparent)" }} />

              {/* Corner crosshairs */}
              {[
                { top:56, left:10 },
                { top:56, right:10 },
                { bottom:10, left:10 },
                { bottom:10, right:10 },
              ].map((pos, i) => (
                <svg key={i} className="absolute pointer-events-none" width="14" height="14"
                  viewBox="0 0 14 14" fill="none" style={{ ...pos, opacity:.28 }}>
                  <line x1="7" y1="0" x2="7" y2="14" stroke="#2dd4bf" strokeWidth="1"/>
                  <line x1="0" y1="7" x2="14" y2="7" stroke="#2dd4bf" strokeWidth="1"/>
                </svg>
              ))}
            </div>

            {/* Below arena label */}
            <p className="text-center text-[11px] text-gray-400 mt-3.5 tracking-[.14em] uppercase font-medium m-0">
              ✦ Drag &amp; drop to interact ✦
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
