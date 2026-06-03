"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { FaUsers, FaRocket, FaClock, FaHeadset } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    end: 450,
    suffix: "+",
    label: "Happy Clients",
    from: "#2dd4bf",
    to: "#6366f1",
  },
  {
    icon: <FaRocket />,
    end: 48,
    suffix: "k+",
    label: "Projects Done",
    from: "#6366f1",
    to: "#8b5cf6",
  },
  {
    icon: <FaClock />,
    end: 95,
    suffix: "k+",
    label: "Hours Worked",
    from: "#0ea5e9",
    to: "#2dd4bf",
  },
  {
    icon: <FaHeadset />,
    end: null,
    label: "Support Available",
    custom: "24/7",
    from: "#a855f7",
    to: "#6366f1",
  },
];

const Counter = () => {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#f8faff", fontFamily: "'Inter',sans-serif" }}
    >
      <style>{`
        @keyframes ctrPulse { 0%,100%{opacity:.5} 50%{opacity:1} }
      `}</style>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle,rgba(99,102,241,.045) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* Blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(45,212,191,.09) 0%,transparent 70%)" }} />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(99,102,241,.08) 0%,transparent 70%)" }} />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(45,212,191,.30),rgba(99,102,241,.25),transparent)" }} />
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(99,102,241,.20),rgba(45,212,191,.25),transparent)" }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 xl:px-28 py-12 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4">
          {stats.map((stat, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">

              {/* Vertical divider — desktop only */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-14"
                  style={{ background: "linear-gradient(to bottom,transparent,rgba(99,102,241,.15),transparent)" }} />
              )}

              {/* Icon badge */}
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-xl"
                style={{
                  background: "#fff",
                  border: `1.5px solid ${stat.from}30`,
                  color: stat.from,
                  boxShadow: `0 4px 18px ${stat.from}22, 0 1px 4px rgba(0,0,0,.06)`,
                }}>
                {stat.icon}
              </div>

              {/* Number */}
              <div
                className="text-4xl sm:text-5xl font-extrabold leading-none mb-2 tabular-nums"
                style={{
                  background: `linear-gradient(135deg,${stat.from},${stat.to})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "'Poppins',sans-serif",
                }}
              >
                {stat.custom ? (
                  stat.custom
                ) : started && stat.end !== null ? (
                  <CountUp end={stat.end} suffix={stat.suffix} duration={2.4} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>

              {/* Label */}
              <p className="text-[11px] font-bold uppercase tracking-[.16em] text-gray-400">
                {stat.label}
              </p>

              {/* Accent dot */}
              <div className="w-1 h-1 rounded-full mt-3"
                style={{ background: `linear-gradient(135deg,${stat.from},${stat.to})`, animation: "ctrPulse 3s ease-in-out infinite" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
