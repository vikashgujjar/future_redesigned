"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import realestate from "../Assets/house.svg";
import tour       from "../Assets/travel-case.svg";
import education  from "../Assets/video-tutorials.svg";
import transport  from "../Assets/taxi.svg";
import event      from "../Assets/event.svg";
import ecommerce  from "../Assets/smartphone.svg";
import game       from "../Assets/joystick.svg";
import healthcare from "../Assets/healthcare.svg";
import finance    from "../Assets/money-growth.svg";
import restaurant from "../Assets/baker.svg";
import ondemand   from "../Assets/mobile-app.svg";
import grocery    from "../Assets/groceries.svg";

const FALLBACK_INDUSTRIES = [
  { icon: realestate, title: "Real Estate",    from: "#2dd4bf", to: "#06b6d4",  bg: "#f0fdfa", border: "#99f6e4" },
  { icon: tour,       title: "Tour & Travels", from: "#6366f1", to: "#4f46e5",  bg: "#eef2ff", border: "#c7d2fe" },
  { icon: education,  title: "Education",      from: "#a855f7", to: "#7c3aed",  bg: "#faf5ff", border: "#e9d5ff" },
  { icon: transport,  title: "Transport",      from: "#f59e0b", to: "#d97706",  bg: "#fffbeb", border: "#fde68a" },
  { icon: event,      title: "Event",          from: "#ec4899", to: "#db2777",  bg: "#fdf2f8", border: "#fbcfe8" },
  { icon: ecommerce,  title: "eCommerce",      from: "#10b981", to: "#059669",  bg: "#f0fdf4", border: "#a7f3d0" },
  { icon: game,       title: "Game",           from: "#8b5cf6", to: "#6d28d9",  bg: "#f5f3ff", border: "#ddd6fe" },
  { icon: healthcare, title: "Healthcare",     from: "#ef4444", to: "#dc2626",  bg: "#fef2f2", border: "#fecaca" },
  { icon: finance,    title: "Finance",        from: "#0ea5e9", to: "#0284c7",  bg: "#f0f9ff", border: "#bae6fd" },
  { icon: restaurant, title: "Restaurant",     from: "#f97316", to: "#ea580c",  bg: "#fff7ed", border: "#fed7aa" },
  { icon: ondemand,   title: "On-Demand",      from: "#06b6d4", to: "#0891b2",  bg: "#ecfeff", border: "#a5f3fc" },
  { icon: grocery,    title: "Grocery",        from: "#84cc16", to: "#65a30d",  bg: "#f7fee7", border: "#d9f99d" },
];

export default function MutipleServices({ industries: cmsIndustries } = {}) {
  const INDUSTRIES = cmsIndustries?.length
    ? cmsIndustries.map((ind) => ({
        icon: ind.icon,
        title: ind.title,
        url: ind.url,
        from: ind.color?.from || "#2dd4bf",
        to: ind.color?.to || "#6366f1",
        border: `${ind.color?.from || "#2dd4bf"}40`,
      }))
    : FALLBACK_INDUSTRIES;
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,#f8f9ff_0%,#ffffff_50%,#f5f0ff_100%)] py-24 px-5 sm:px-10 xl:px-16 font-['Inter',sans-serif]">

      {/* ── Background decoration ── */}
      <div className="absolute inset-0 [background-image:radial-gradient(rgba(99,102,241,.07)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
      <div className="absolute top-[-8%] left-[-4%] w-[480px] h-[480px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(99,102,241,.08),transparent_65%)]" />
      <div className="absolute bottom-[-8%] right-[-4%] w-[440px] h-[440px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(45,212,191,.08),transparent_65%)]" />
      <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(168,85,247,.06),transparent_65%)]" />

      <div className="relative z-10 max-w-[1280px] mx-auto">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 mb-5 text-[10px] font-bold tracking-[.22em] uppercase text-indigo-500 font-['Poppins',sans-serif]">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            We Have Worked Across Multiple Industries
          </div>

          <h2 className="font-['Poppins',sans-serif] font-extrabold text-[#050748] [font-size:clamp(1.65rem,3.2vw,2.55rem)] leading-tight mb-4">
            Industries{" "}
            <span className="bg-[linear-gradient(125deg,#2dd4bf,#6366f1,#a855f7)] bg-[length:200%_200%] bg-clip-text text-transparent [animation:tcpGrad_5s_ease-in-out_infinite]">
              We Serve
            </span>
          </h2>

          <div className="h-[3px] w-14 rounded-full mx-auto mb-5 bg-[linear-gradient(90deg,#2dd4bf,#6366f1)]" />

          <p className="text-[#6a6a8e] max-w-2xl mx-auto text-base sm:text-[1.02rem] leading-relaxed">
            Successfully delivered digital products across Real Estate, Tours &amp; Travels, Education, Transport, Healthcare, and many more — transforming ideas into industry-leading solutions.
          </p>
        </div>

        {/* ── Industry cards grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {INDUSTRIES.map((item, i) => {
            const CardTag = item.url ? Link : "div";
            return (
            <CardTag key={i} {...(item.url ? { href: item.url } : {})}
              className={`group relative bg-white rounded-2xl border overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 block no-underline${item.url ? "" : " cursor-default"}`}
              style={{ borderColor: item.border, boxShadow: "0 2px 10px rgba(0,0,0,.05)" }}>

              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg,${item.from},${item.to})` }} />

              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `radial-gradient(circle at top right,${item.from}18,transparent 70%)` }} />

              <div className="pt-7 pb-6 px-4 flex flex-col items-center text-center gap-4">
                {/* Icon bubble */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `linear-gradient(135deg,${item.from}22,${item.to}40)`, border: `1.5px solid ${item.border}` }}>
                  <Image src={item.icon} width={32} height={32} alt={item.title}
                    className="w-8 h-8 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>

                {/* Title */}
                <h6 className="font-['Poppins',sans-serif] font-bold text-[#050748] text-[.82rem] sm:text-[.875rem] leading-tight">
                  {item.title}
                </h6>

                {/* Bottom accent line */}
                <div className="h-[2px] w-6 rounded-full group-hover:w-10 transition-all duration-500"
                  style={{ background: `linear-gradient(90deg,${item.from},${item.to})` }} />
              </div>
            </CardTag>
            );
          })}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div className="mt-14 relative overflow-hidden rounded-2xl px-8 py-10 bg-[linear-gradient(135deg,#050b20,#0a0f2e)] border border-white/[.06] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          {/* orbs */}
          <div className="absolute left-[-5%] top-[-50%] w-[280px] h-[280px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(45,212,191,.10),transparent_65%)]" />
          <div className="absolute right-[-5%] bottom-[-50%] w-[260px] h-[260px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(99,102,241,.10),transparent_65%)]" />

          <div className="relative z-10">
            <p className="font-['Poppins',sans-serif] text-[10.5px] font-bold uppercase tracking-[.2em] text-[#2dd4bf] mb-1.5">
              Your Industry, Our Expertise
            </p>
            <h3 className="font-['Poppins',sans-serif] font-extrabold text-white [font-size:clamp(1.2rem,2.5vw,1.9rem)] leading-tight">
              Don&apos;t see your industry?{" "}
              <span className="bg-[linear-gradient(125deg,#2dd4bf,#6366f1)] bg-clip-text text-transparent">
                Let&apos;s Talk.
              </span>
            </h3>
          </div>

          <Link href="/contact"
            className="relative z-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-['Poppins',sans-serif] text-sm font-bold tracking-[.06em] uppercase no-underline hover:shadow-[0_8px_28px_rgba(45,212,191,.45)] hover:-translate-y-0.5 transition-all duration-200 bg-[linear-gradient(135deg,#2dd4bf,#6366f1)] flex-shrink-0">
            Start a Project <FaArrowRight className="text-[11px]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
