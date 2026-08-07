"use client";
import { useState } from "react";

/* Google's Maps embed iframe pulls in ~400 KiB of its own JS (places, controls,
   map rendering, etc.) the moment it's in the DOM — `loading="lazy"` alone
   wasn't enough to keep that off the critical page weight. This shows a
   static, fixed-height placeholder instead and only mounts the real iframe
   once someone actually asks for the map, so that cost is opt-in rather than
   paid by every visitor. Height stays identical before/after the swap, so
   there's no layout shift when it loads. */
export default function MapEmbed({ src, title, height = 230, className = "", style = {} }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={src}
        width="100%"
        height={height}
        style={{ border: 0, display: "block", ...style }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className={className}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className={`relative w-full flex flex-col items-center justify-center gap-2.5 border-0 cursor-pointer ${className}`}
      style={{
        height,
        background: "linear-gradient(145deg,#0c1330 0%,#070d1a 100%)",
        backgroundImage: "radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)",
        backgroundSize: "22px 22px",
        ...style,
      }}
      aria-label={`Load ${title || "map"}`}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
      <span style={{ color: "rgba(255,255,255,.75)", fontFamily: "'Poppins',sans-serif", fontSize: 12.5, fontWeight: 600 }}>
        Tap to load map
      </span>
    </button>
  );
}
