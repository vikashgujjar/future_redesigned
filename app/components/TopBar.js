"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaSkype,
  FaInstagram,
  FaPhoneAlt,
  FaCaretDown,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import useYearsExperience from "../lib/useYearsExperience";

const socials = [
  { href: "https://www.facebook.com/Futureittouch", Icon: FaFacebookF, label: "Facebook" },
  { href: "https://x.com/futureittouch", Icon: FaXTwitter, label: "X (Twitter)" },
  { href: "https://in.linkedin.com/company/future-it-touch", Icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://www.instagram.com/future_it_touch/", Icon: FaInstagram, label: "Instagram" },
  { href: "https://www.youtube.com/channel/UCirWettrTWfsFRzdGRIc6BQ/about", Icon: FaYoutube, label: "YouTube" },
  { href: "https://github.com/Future-IT-Touch-Private-Limited", Icon: FaGithub, label: "GitHub" },
];

const getTickerItems = (yearsExperience) => [
  "🚀  Trusted by 1000+ Businesses Worldwide",
  "🌍  Serving 50 Cities Across 5 Countries",
  "💻  Custom Web & Mobile App Development",
  "📈  Result-Driven Digital Marketing",
  `⭐  ${yearsExperience} Years of IT Excellence`,
  "📞  24/7 Dedicated Support Available",
];

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const yearsExperience = useYearsExperience();
  const tickerItems = getTickerItems(yearsExperience);

  return (
    <div
      className="fixed top-0 left-0 w-full z-50"
      style={{
        background: "linear-gradient(to right,#070d1a,#0c1330 50%,#070d1a)",
        fontFamily: "'Inter',sans-serif",
      }}
    >
      <style>{`
        /* ── shimmer bar ── */
        .tb-shimmer {
          height: 2px;
          background: linear-gradient(90deg,#2dd4bf,#6366f1,#0ea5e9,#8b5cf6,#2dd4bf);
          background-size: 300% 100%;
          animation: tbShimmer 4s linear infinite;
        }
        @keyframes tbShimmer {
          from { background-position: 0% 0; }
          to   { background-position: 300% 0; }
        }

        /* ── ticker ── */
        .tb-ticker-wrap {
          overflow: hidden;
          flex: 1;
          min-width: 0;
          -webkit-mask-image: linear-gradient(to right,transparent,black 8%,black 92%,transparent);
          mask-image: linear-gradient(to right,transparent,black 8%,black 92%,transparent);
        }
        .tb-ticker {
          display: inline-flex;
          gap: 0;
          white-space: nowrap;
          animation: tbScroll 32s linear infinite;
          will-change: transform;
        }
        .tb-ticker:hover { animation-play-state: paused; }
        @keyframes tbScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .tb-ticker-item {
          display: inline-flex;
          align-items: center;
          padding: 0 36px;
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,.44);
          gap: 8px;
        }
        .tb-ticker-sep {
          color: rgba(45,212,191,.35);
          font-size: 10px;
        }

        /* ── social pill ── */
        .tb-soc {
          width: 20px; height: 20px;
          border-radius: 5px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.09);
          color: rgba(255,255,255,.50);
          transition: background .18s, color .18s, transform .18s, border-color .18s;
        }
        .tb-soc:hover {
          background: linear-gradient(135deg,#2dd4bf,#6366f1);
          border-color: transparent;
          color: #fff;
          transform: translateY(-2px);
        }

        /* ── dropdown ── */
        .tb-drop {
          background: linear-gradient(145deg,#070d1a,#0c1330);
          border: 1px solid rgba(255,255,255,.09);
          box-shadow: 0 20px 50px rgba(0,0,0,.65), 0 0 0 1px rgba(45,212,191,.08);
        }
        .tb-drop-row {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; font-weight: 600;
          color: rgba(255,255,255,.60);
          transition: color .18s;
        }
        .tb-drop-row:hover { color: #2dd4bf; }
      `}</style>

      {/* ── top shimmer line ── */}
      <div className="tb-shimmer" />

      {/* ── main bar ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="flex items-center h-[34px] gap-3">

          {/* LEFT — email + skype */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href="mailto:info@futuretouch.in"
              className="flex items-center gap-1.5 text-[11px] font-medium text-white/50 hover:text-teal-400 transition-colors"
            >
              <FaEnvelope size={9} />
              info@futuretouch.in
            </a>
            <span className="text-white/12 select-none">·</span>
            <a
              href="skype:live:.cid.313b26920df66baf"
              className="flex items-center gap-1.5 text-[11px] font-medium text-white/50 hover:text-teal-400 transition-colors"
            >
              <FaSkype size={10} />
              futuretouch
            </a>
          </div>

          {/* LEFT divider */}
          <span className="hidden lg:block h-3 w-px bg-white/10 flex-shrink-0" />

          {/* CENTER — scrolling ticker */}
          <div className="tb-ticker-wrap">
            <div className="tb-ticker">
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <span key={i} className="tb-ticker-item">
                  {item}
                  <span className="tb-ticker-sep">✦</span>
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT divider */}
          <span className="hidden lg:block h-3 w-px bg-white/10 flex-shrink-0" />

          {/* RIGHT — support + login + socials */}
          <div className="flex items-center gap-2.5 flex-shrink-0">

            {/* Support dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsOpen(true)}
                onClick={() => setIsOpen((v) => !v)}
                className="flex items-center gap-1 text-[11px] font-semibold text-white/55 hover:text-teal-400 transition-colors focus:outline-none"
              >
                <FaPhoneAlt size={9} />
                <span className="hidden sm:inline">Support</span>
                <FaCaretDown
                  size={9}
                  className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isOpen && (
                <div
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                  className="tb-drop absolute -right-[50px] max-w-[220px] top-full mt-2 w-72 rounded-2xl overflow-hidden z-[999]"
                >
                  {/* header */}
                  <div
                    className="px-4 py-3"
                    style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)" }}
                  >
                    <p
                      className="text-[12px] font-bold text-white"
                      style={{ fontFamily: "'Poppins',sans-serif" }}
                    >
                      Future IT Touch Contacts
                    </p>
                  </div>

                  {/* HR */}
                  <div
                    className="px-4 py-3"
                    style={{ borderBottom: "1px solid rgba(255,255,255,.06)" }}
                  >
                    <p
                      className="text-[9px] font-bold uppercase tracking-[.18em] mb-2.5"
                      style={{ color: "#2dd4bf" }}
                    >
                      For HR Department
                    </p>
                    <a href="tel:+91-7056937000" className="tb-drop-row">
                      <Image
                        src="/Assets/country.webp"
                        width={22} height={22}
                        alt="India"
                        className="rounded-sm object-cover flex-shrink-0"
                      />
                      +91-7056937000
                    </a>
                  </div>

                  {/* Sales */}
                  <div className="px-4 py-3">
                    <p
                      className="text-[9px] font-bold uppercase tracking-[.18em] mb-2.5"
                      style={{ color: "#6366f1" }}
                    >
                      For Sales Department
                    </p>
                    <div className="flex flex-col gap-2.5">
                      <a href="tel:+91-7056997000" className="tb-drop-row">
                        <Image
                          src="/Assets/country.webp"
                          width={22} height={22}
                          alt="India"
                          className="rounded-sm object-cover flex-shrink-0"
                        />
                        +91-7056997000
                      </a>
                      <a href="tel:+91-7056937000" className="tb-drop-row">
                        <Image
                          src="/Assets/flag.webp"
                          width={22} height={16}
                          alt="flag"
                          className="rounded-sm object-cover flex-shrink-0"
                        />
                        +91-7056937000
                      </a>
                      <a href="skype:live:.cid.313b26920df66baf" className="tb-drop-row">
                        <FaSkype className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        Futuretouch
                      </a>
                      <a href="mailto:info@futuretouch.in" className="tb-drop-row">
                        <FaEnvelope className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                        info@futuretouch.in
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <span className="hidden lg:block h-3 w-px bg-white/10" />

            {/* Login */}
            <Link target="_blank"
              href="https://crm.futuretouch.in/authentication/login"
              className="hidden lg:block text-[11px] font-semibold text-white/50 hover:text-teal-400 transition-colors"
            >
              Login
            </Link>

            <span className="hidden lg:block h-3 w-px bg-white/10" />

            {/* Social icons */}
            <div className="flex items-center gap-1">
              {socials.map(({ href, Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="tb-soc"
                >
                  <Icon size={9} />
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── bottom shimmer line ── */}
      <div className="tb-shimmer" />
    </div>
  );
}
