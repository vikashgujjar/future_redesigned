"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

/* ── Skills data ── */
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

const PILL_W = 210;
const PILL_H = 46;
const PADDING = 8;

/* ── Scatter pills into arena with no initial overlap ── */
function scatter(arenaW, arenaH) {
  const cols = Math.floor(arenaW / (PILL_W + PADDING));
  return skills.map((_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const jx  = (Math.random() - 0.5) * 18;
    const jy  = (Math.random() - 0.5) * 14;
    return {
      x: Math.min(col * (PILL_W + PADDING) + PADDING + jx, arenaW - PILL_W - PADDING),
      y: Math.min(row * (PILL_H + PADDING * 2) + PADDING + 44 + jy, arenaH - PILL_H - PADDING),
    };
  });
}

/* ── Resolve overlaps after drag ── */
function resolveCollisions(positions, dragIdx) {
  const next = positions.map(p => ({ ...p }));
  skills.forEach((_, i) => {
    if (i === dragIdx) return;
    const dx = next[dragIdx].x - next[i].x;
    const dy = next[dragIdx].y - next[i].y;
    const overlapX = PILL_W  - Math.abs(dx);
    const overlapY = PILL_H  - Math.abs(dy);
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

/* ── Single draggable pill ── */
function Pill({ skill, pos, arenaW, arenaH, onDragEnd, zIdx, onDragStart }) {
  const x = useMotionValue(pos.x);
  const y = useMotionValue(pos.y);

  /* sync when pos changes from collision resolution */
  useEffect(() => {
    animate(x, pos.x, { duration: 0.22, ease: "easeOut" });
    animate(y, pos.y, { duration: 0.22, ease: "easeOut" });
  }, [pos.x, pos.y]);

  return (
    <motion.div
      className="absolute cursor-grab active:cursor-grabbing select-none"
      style={{ width: PILL_W, height: PILL_H, x, y, zIndex: zIdx, top: 0, left: 0 }}
      drag
      dragMomentum={false}
      dragElastic={0}
      /* Constrain drag within arena */
      dragConstraints={{
        left:   0,
        top:    44,           /* below status bar */
        right:  arenaW - PILL_W,
        bottom: arenaH - PILL_H,
      }}
      whileTap={{ scale: 1.08 }}
      whileHover={{ scale: 1.04 }}
      onDragStart={onDragStart}
      onDragEnd={() => {
        /* read final positions directly from motion values */
        onDragEnd(x.get(), y.get());
      }}
    >
      {/* gradient border */}
      <div style={{
        background: `linear-gradient(135deg,${skill.fi},${skill.ti})`,
        borderRadius: 9999,
        padding: "1.5px",
        width: "100%",
        height: "100%",
        boxShadow: `0 0 16px ${skill.fi}44, 0 4px 20px rgba(0,0,0,.45)`,
      }}>
        {/* dark glass inner */}
        <div style={{
          background: "rgba(7,12,24,.84)",
          borderRadius: 9999,
          width: "100%",
          height: "calc(100% - 0px)",
          display: "flex",
          alignItems: "center",
          gap: 9,
          padding: "0 16px",
          backdropFilter: "blur(10px)",
        }}>
          {/* glow dot */}
          <span className="sk-dot" style={{
            width: 7, height: 7,
            borderRadius: "50%",
            flexShrink: 0,
            background: `linear-gradient(135deg,${skill.fi},${skill.ti})`,
            boxShadow: `0 0 7px ${skill.fi}, 0 0 14px ${skill.fi}55`,
          }} />
          <span style={{
            fontFamily: "'Poppins',sans-serif",
            fontSize: 11.5,
            fontWeight: 600,
            whiteSpace: "nowrap",
            color: "rgba(255,255,255,.88)",
            letterSpacing: "0.01em",
          }}>
            {skill.label}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main section ── */
export default function SkillsSection() {
  const arenaRef      = useRef(null);
  const [arena, setArena]       = useState({ w: 0, h: 0 });
  const [positions, setPositions] = useState([]);
  const [topIdx, setTopIdx]       = useState(0);

  /* measure arena */
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
        y: Math.max(44, Math.min(ny, arena.h - PILL_H)),
      };
      return resolveCollisions(next, i);
    });
  }, [arena]);

  return (
    <section className="sk-root max-md:hidden relative overflow-hidden bg-white py-16 lg:py-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap');

        .sk-root { font-family:'Inter',sans-serif }

        /* bg mesh */
        .sk-dotgrid {
          background-image:radial-gradient(circle,rgba(99,102,241,.07) 1px,transparent 1px);
          background-size:28px 28px;
        }

        /* keyframes */
        @keyframes skCW  { to{transform:rotate(360deg)}  }
        @keyframes skCCW { to{transform:rotate(-360deg)} }
        @keyframes skFloat { 0%,100%{transform:translateY(0);opacity:.55} 50%{transform:translateY(-8px);opacity:1} }
        @keyframes skGlow  { 0%,100%{opacity:.55} 50%{opacity:1} }
        @keyframes skBarIn { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes skUp    { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes skMorph {
          0%,100%{border-radius:60% 40% 55% 45%/50% 55% 45% 50%}
          33%{border-radius:40% 60% 45% 55%/55% 45% 55% 45%}
          66%{border-radius:55% 45% 60% 40%/45% 55% 45% 55%}
        }
        @keyframes skPing  { 75%,100%{transform:scale(2.1);opacity:0} }
        @keyframes skScan  {
          0%   { top:44px; opacity:.55 }
          48%  { opacity:.80 }
          50%  { top:calc(100% - 50px); opacity:.55 }
          100% { top:44px; opacity:.55 }
        }

        .sk-bar    { animation:skBarIn .8s cubic-bezier(.22,1,.36,1) .25s both; transform-origin:left }
        .sk-up     { animation:skUp .6s cubic-bezier(.22,1,.36,1) both }
        .sk-up-1   { animation-delay:.05s }
        .sk-up-2   { animation-delay:.10s }
        .sk-morph  { animation:skMorph 14s ease-in-out infinite }
        .sk-dot    { animation:skGlow 2.8s ease-in-out infinite }

        /* arena scan line */
        .sk-scan {
          position:absolute; left:0; right:0; height:1px; pointer-events:none; z-index:3;
          background:linear-gradient(90deg,transparent,rgba(45,212,191,.5),rgba(99,102,241,.5),transparent);
          animation:skScan 5s ease-in-out infinite;
        }

        /* gradient text */
        .sk-grad {
          background:linear-gradient(135deg,#2dd4bf,#6366f1);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text; color:transparent;
        }

        /* stat card */
        .sk-stat {
          transition:transform .25s, box-shadow .25s;
        }
        .sk-stat:hover { transform:translateY(-4px); box-shadow:0 16px 36px rgba(99,102,241,.14) }

        /* ping */
        .sk-ping { position:relative }
        .sk-ping::after {
          content:''; position:absolute; inset:0; border-radius:50%;
          background:inherit; animation:skPing 2s ease-out infinite;
        }

        /* arena dot grid */
        .sk-arena-dots {
          background-image:radial-gradient(circle,rgba(255,255,255,.035) 1px,transparent 1px);
          background-size:28px 28px;
        }

        /* hint card */
        .sk-hint {
          transition:transform .25s;
        }
        .sk-hint:hover { transform:translateY(-3px) }
      `}</style>

      {/* ── Section backgrounds ── */}
      <div className="sk-dotgrid absolute inset-0 pointer-events-none" />
      <div className="sk-morph absolute -top-24 -left-24 w-[400px] h-[400px] pointer-events-none opacity-[.07]"
        style={{ background:"linear-gradient(135deg,#2dd4bf,#6366f1)" }} />
      <div className="sk-morph absolute -bottom-24 -right-24 w-[360px] h-[360px] pointer-events-none opacity-[.06]"
        style={{ background:"linear-gradient(135deg,#0ea5e9,#8b5cf6)", animationDelay:"6s" }} />

      {/* SVG — top-left arcs */}
      <svg className="absolute top-0 left-0 pointer-events-none" width="260" height="260"
        viewBox="0 0 260 260" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="skTL" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity=".32"/>
            <stop offset="100%" stopColor="#6366f1" stopOpacity=".03"/>
          </linearGradient>
        </defs>
        <g style={{transformOrigin:"0 0",animation:"skCW 36s linear infinite"}}>
          <circle cx="0" cy="0" r="180" stroke="url(#skTL)" strokeWidth="1.4" strokeDasharray="60 100" strokeLinecap="round" fill="none"/>
        </g>
        <g style={{transformOrigin:"0 0",animation:"skCCW 24s linear infinite"}}>
          <circle cx="0" cy="0" r="124" stroke="rgba(34,211,238,.20)" strokeWidth="1.4" strokeDasharray="42 70" strokeLinecap="round" fill="none"/>
        </g>
        <g style={{transformOrigin:"0 0",animation:"skCW 15s linear infinite"}}>
          <circle cx="0" cy="0" r="76" stroke="rgba(45,212,191,.26)" strokeWidth="1.8" strokeDasharray="26 44" strokeLinecap="round" fill="none"/>
        </g>
        <g transform="translate(52,52)" style={{animation:"skFloat 4.5s ease-in-out infinite"}}>
          <line x1="-5" y1="0" x2="5" y2="0" stroke="rgba(45,212,191,.7)" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1="0" y1="-5" x2="0" y2="5" stroke="rgba(45,212,191,.7)" strokeWidth="2.2" strokeLinecap="round"/>
        </g>
      </svg>

      {/* SVG — bottom-right arcs */}
      <svg className="absolute bottom-0 right-0 pointer-events-none" width="240" height="240"
        viewBox="0 0 240 240" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="skBR" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity=".28"/>
            <stop offset="100%" stopColor="#2dd4bf" stopOpacity=".03"/>
          </linearGradient>
        </defs>
        <g style={{transformOrigin:"240px 240px",animation:"skCCW 30s linear infinite"}}>
          <circle cx="240" cy="240" r="165" stroke="url(#skBR)" strokeWidth="1.4" strokeDasharray="55 90" strokeLinecap="round" fill="none"/>
        </g>
        <g style={{transformOrigin:"240px 240px",animation:"skCW 20s linear infinite"}}>
          <circle cx="240" cy="240" r="112" stroke="rgba(139,92,246,.22)" strokeWidth="1.5" strokeDasharray="38 62" strokeLinecap="round" fill="none"/>
        </g>
        <g transform="translate(196,196)" style={{animation:"skFloat 5.5s ease-in-out infinite 1.2s"}}>
          <line x1="-4" y1="-4" x2="4" y2="4" stroke="rgba(99,102,241,.65)" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="4" y1="-4" x2="-4" y2="4" stroke="rgba(99,102,241,.65)" strokeWidth="1.8" strokeLinecap="round"/>
        </g>
      </svg>

      <div className="relative z-10 max-w-[1380px] mx-auto px-5 sm:px-8 md:px-12 xl:px-16">
        <div className="grid lg:grid-cols-[420px_1fr] xl:grid-cols-[460px_1fr] gap-10 xl:gap-14 items-start">

          {/* ════ LEFT PANEL ════ */}
          <div className="flex flex-col gap-5 lg:sticky lg:top-24">

            {/* Tag */}
            <div className="sk-up sk-up-1 inline-flex items-center gap-2 self-start rounded-full px-4 py-1.5"
              style={{ background:"rgba(45,212,191,.10)", border:"1px solid rgba(45,212,191,.28)" }}>
              <span className="sk-ping w-2 h-2 rounded-full flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)" }}/>
              <span className="sk-grad text-[10.5px] font-bold uppercase tracking-[.22em]"
                style={{ fontFamily:"'Poppins',sans-serif" }}>
                Skills &amp; Technologies
              </span>
            </div>

            {/* Heading */}
            <div className="sk-up sk-up-1">
              <p className="text-[15px] text-gray-400 font-light italic mb-1">Grow Your Business</p>
              <h2 className="font-bold leading-tight text-gray-900 m-0"
                style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(2rem,3.8vw,3.2rem)" }}>
                With Our{" "}
                <span style={{ background:"linear-gradient(135deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                  Expertise
                </span>
              </h2>
            </div>

            {/* Divider */}
            <div className="sk-bar w-14 h-[3px] rounded-full"
              style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1)" }}/>

            {/* Description */}
            <p className="sk-up sk-up-2 text-[14px] text-gray-500 leading-[1.85] max-w-[400px]">
              Our team masters a wide spectrum of modern technologies — from blazing-fast frontend
              frameworks to robust backend architectures. Drag the skill chips to explore what we offer.
            </p>

            {/* Interactive hint card */}
            <div className="sk-hint sk-up sk-up-2 flex items-start gap-4 p-5 rounded-2xl"
              style={{ background:"linear-gradient(135deg,rgba(99,102,241,.06),rgba(45,212,191,.04))",
                border:"1px solid rgba(99,102,241,.14)" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#2dd4bf,#6366f1)",
                  boxShadow:"0 4px 16px rgba(99,102,241,.30)" }}>
                {/* drag icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white"
                  strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/>
                </svg>
              </div>
              <div>
                <p className="text-[13px] font-bold text-gray-800 mb-1"
                  style={{ fontFamily:"'Poppins',sans-serif" }}>
                  Interactive Skill Arena
                </p>
                <p className="text-[12px] text-gray-500 leading-relaxed">
                  Drag any skill chip around. They respond to collisions and push each other — try it!
                </p>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3 mt-1">
              {[
                { v:"14+", l:"Technologies",     from:"#2dd4bf", to:"#6366f1" },
                { v:"7+",  l:"Years Experience", from:"#6366f1", to:"#8b5cf6" },
                // { v:"500+",l:"Projects Done",    from:"#0ea5e9", to:"#2dd4bf" },
                // { v:"98%", l:"Client Retention", from:"#8b5cf6", to:"#6366f1" },
              ].map((st,i) => (
                <div key={i} className="sk-stat bg-white rounded-2xl p-4 flex flex-col gap-1"
                  style={{ border:"1px solid rgba(99,102,241,.09)",
                    boxShadow:"0 4px 16px rgba(99,102,241,.06)" }}>
                  <div className="font-extrabold leading-none"
                    style={{ fontFamily:"'Poppins',sans-serif",
                      fontSize:"clamp(1.4rem,2.2vw,1.8rem)",
                      background:`linear-gradient(135deg,${st.from},${st.to})`,
                      WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                    {st.v}
                  </div>
                  <div className="text-[10.5px] text-gray-400 font-medium tracking-[.06em]">{st.l}</div>
                  <div className="w-6 h-[2px] rounded-full mt-0.5"
                    style={{ background:`linear-gradient(90deg,${st.from},${st.to})` }}/>
                </div>
              ))}
            </div>
          </div>

          {/* ════ RIGHT — Arena ════ */}
          <div className="relative">
            {/* Outer glow halo */}
            <div className="absolute -inset-3 rounded-[30px] pointer-events-none"
              style={{ background:"linear-gradient(135deg,rgba(45,212,191,.16),rgba(99,102,241,.18))",
                filter:"blur(18px)", opacity:.75 }}/>

            {/* Arena box */}
            <div
              ref={arenaRef}
              className="sk-arena-dots relative w-full rounded-3xl overflow-hidden"
              style={{
                height: 560,
                background:"linear-gradient(148deg,#070d1a 0%,#0c1332 100%)",
                border:"1px solid rgba(255,255,255,.07)",
                boxShadow:"0 28px 70px rgba(0,0,0,.48),inset 0 1px 0 rgba(255,255,255,.06)",
              }}
            >
              {/* corner glows */}
              <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full pointer-events-none"
                style={{ background:"radial-gradient(circle,rgba(45,212,191,.20) 0%,transparent 65%)" }}/>
              <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
                style={{ background:"radial-gradient(circle,rgba(99,102,241,.22) 0%,transparent 65%)" }}/>

              {/* Status bar */}
              <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-5 py-2.5"
                style={{ borderBottom:"1px solid rgba(255,255,255,.05)",
                  background:"rgba(255,255,255,.03)", backdropFilter:"blur(8px)" }}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full animate-pulse"
                    style={{ background:"#2dd4bf" }}/>
                  <span className="text-[10px] uppercase tracking-[.20em] font-semibold"
                    style={{ color:"rgba(45,212,191,.8)", fontFamily:"'Inter',sans-serif" }}>
                    Drag to Explore · {skills.length} Skills
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {["rgba(255,255,255,.18)","rgba(255,255,255,.11)","rgba(255,255,255,.07)"].map((bg,i) => (
                    <span key={i} className="w-2.5 h-2.5 rounded-full" style={{ background:bg }}/>
                  ))}
                </div>
              </div>

              {/* Scan line */}
              <div className="sk-scan"/>

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
              <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
                style={{ background:"linear-gradient(to top,rgba(7,13,26,.65),transparent)" }}/>

              {/* Grid cross-hair decorations — 4 corners of arena */}
              {[
                { top:52,left:8 },
                { top:52,right:8 },
                { bottom:8,left:8 },
                { bottom:8,right:8 },
              ].map((pos,i) => (
                <svg key={i} className="absolute pointer-events-none" width="14" height="14"
                  viewBox="0 0 14 14" fill="none" style={{ ...pos, opacity:.3 }}>
                  <line x1="7" y1="0" x2="7" y2="14" stroke="#2dd4bf" strokeWidth="1"/>
                  <line x1="0" y1="7" x2="14" y2="7" stroke="#2dd4bf" strokeWidth="1"/>
                </svg>
              ))}
            </div>

            {/* below arena label */}
            <p className="text-center text-[11px] text-gray-400 mt-3 tracking-[.12em] uppercase font-medium">
              ✦ Drag &amp; drop to interact ✦
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}