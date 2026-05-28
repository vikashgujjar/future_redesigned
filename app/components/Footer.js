import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Heart, ChevronRight } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const ourLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Why Us", href: "/why-us" },
  { label: "Services", href: "/service" },
  { label: "Our Teams", href: "/our-team" },
  { label: "Contact Us", href: "/contact" },
];

const companyLinks = [
  { label: "Get A Quote", href: "/contact" },
  { label: "Our Pricing Package", href: "/price" },
  { label: "Customer's FAQ", href: "/faq" },
  { label: "Refund Policy", href: "/refund" },
  { label: "Privacy Policy", href: "/Privacy-Policy" },
  { label: "Terms & Conditions", href: "/Terms-Conditions" },
];

const socials = [
  { Icon: FaFacebookF, href: "https://www.facebook.com/Futureittouch", label: "Facebook" },
  { Icon: FaTwitter, href: "https://x.com/futureittouch", label: "Twitter" },
  { Icon: FaLinkedinIn, href: "https://in.linkedin.com/company/future-it-touch", label: "LinkedIn" },
  { Icon: FaInstagram, href: "https://www.instagram.com/future_it_touch/", label: "Instagram" },
  { Icon: FaYoutube, href: "https://www.youtube.com/channel/UCirWettrTWfsFRzdGRIc6BQ/about", label: "YouTube" },
  { Icon: FaGithub, href: "https://github.com/Future-IT-Touch-Private-Limited", label: "GitHub" },
];

const badges = [
  "/Assets/badges-a.webp",
  "/Assets/badges-b.webp",
  "/Assets/badges-c.webp",
  "/Assets/badges-d.webp",
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(145deg,#060b18 0%,#0c1330 100%)" }}
    >
      <style>{`
        .ft-dot {
          background-image: radial-gradient(circle, rgba(255,255,255,.028) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .ft-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,.42);
          transition: color .20s ease, padding-left .20s ease;
        }
        .ft-link:hover { color: #2dd4bf; padding-left: 4px; }

        .ft-social {
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 10px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.09);
          color: rgba(255,255,255,.52);
          transition: background .22s ease, color .22s ease, border-color .22s ease, transform .22s ease;
          text-decoration: none;
        }
        .ft-social:hover {
          background: linear-gradient(135deg,#2dd4bf,#6366f1);
          border-color: transparent;
          color: #ffffff;
          transform: translateY(-3px);
        }

        .ft-col-title {
          font-size: 11px;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .15em;
          margin-bottom: 20px;
        }

        .ft-bottom-link {
          font-size: 12px;
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,.30);
          transition: color .18s ease;
        }
        .ft-bottom-link:hover { color: #2dd4bf; }
      `}</style>

      {/* dot grid */}
      <div className="ft-dot absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* ambient glow — top-left */}
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(45,212,191,.055) 0%,transparent 65%)" }} />
      {/* ambient glow — bottom-right */}
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(99,102,241,.055) 0%,transparent 65%)" }} />

      {/* top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(to right,#2dd4bf,#6366f1)" }} />

      {/* ══ MAIN GRID ════════════════════════════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 xl:px-24 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.1fr_1.8fr] gap-10 lg:gap-8">

          {/* ── Col 1: Logo + About ────────────── */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <Image
                src="/Assets/secondary-logo.webp"
                width={200}
                height={50}
                alt="Future IT Touch Logo"
                className="w-44 sm:w-52"
              />
            </Link>

            <p
              className="text-sm leading-7"
              style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,.42)" }}>
              Future IT Touch Pvt. Ltd. is an innovative one-stop Web Solution Company in Chandigarh,
              delivering solutions with customized &amp; quality services to businesses globally.
            </p>

            <Link
              href="/contact"
              className="self-start flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
              style={{
                background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                boxShadow: "0 4px 20px rgba(45,212,191,.28)",
                fontFamily: "'Poppins',sans-serif",
              }}
            >
              Become Partner <ChevronRight size={14} />
            </Link>
          </div>

          {/* ── Col 2: Our Links ───────────────── */}
          <div>
            <h5 className="ft-col-title bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              Our Links
            </h5>
            <ul className="flex flex-col gap-2.5">
              {ourLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="ft-link">
                    <ChevronRight size={11} className="flex-shrink-0 opacity-50" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Company ─────────────────── */}
          <div>
            <h5 className="ft-col-title bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              Company
            </h5>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="ft-link">
                    <ChevronRight size={11} className="flex-shrink-0 opacity-50" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact ─────────────────── */}
          <div>
            <h5 className="ft-col-title bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              Contact Us
            </h5>
            <ul className="flex flex-col gap-4">

              {/* Address */}
              <li className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(45,212,191,.12)", border: "1px solid rgba(45,212,191,.25)" }}>
                  <MapPin size={13} style={{ color: "#2dd4bf" }} />
                </div>
                <p
                  className="text-[13px] leading-[1.65]"
                  style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,.42)" }}>
                  SCO 54-55, 2nd Floor, Near Mukat Hospital,<br />
                  34A Sector, Chandigarh, 1600022
                </p>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(99,102,241,.12)", border: "1px solid rgba(99,102,241,.25)" }}>
                  <Mail size={13} style={{ color: "#6366f1" }} />
                </div>
                <a
                  href="mailto:info@futuretouch.in"
                  className="text-[13px] transition-colors hover:text-teal-400"
                  style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,.42)" }}>
                  info@futuretouch.in
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(14,165,233,.12)", border: "1px solid rgba(14,165,233,.25)" }}>
                  <Phone size={13} style={{ color: "#0ea5e9" }} />
                </div>
                <a
                  href="tel:+91-7056937000"
                  className="text-[13px] transition-colors hover:text-teal-400"
                  style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,.42)" }}>
                  +91-7056937000
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* ══ DIVIDER ══════════════════════════════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 xl:px-24">
        <div className="h-px" style={{ background: "rgba(255,255,255,.07)" }} />
      </div>

      {/* ══ SOCIAL + BADGES ══════════════════════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 xl:px-24 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Social icons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p
              className="text-sm font-bold bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent"
              style={{ fontFamily: "'Poppins',sans-serif" }}>
              Follow Us :
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ Icon, href, label }) => (
                <Link key={label} href={href} target="_blank" aria-label={label} className="ft-social">
                  <Icon size={14} />
                </Link>
              ))}
            </div>
          </div>

          {/* Award badges */}
          <div className="flex flex-nowrap items-center justify-center gap-4">
            {badges.map((src, i) => (
              <Link key={i} href="#">
                <Image
                  src={src}
                  width={120}
                  height={40}
                  alt={`Award badge ${i + 1}`}
                  className="w-24 sm:w-28 opacity-75 hover:opacity-100 transition-opacity duration-200"
                />
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* ══ BOTTOM BAR ═══════════════════════════════ */}
      <div
        className="relative z-10"
        style={{ background: "rgba(0,0,0,.28)", borderTop: "1px solid rgba(255,255,255,.06)" }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 xl:px-24 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">

            {/* Copyright */}
            <p
              className="text-[12px]"
              style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,.28)" }}>
              Copyright © 2017 Future IT Touch Pvt. Ltd. All rights reserved.
            </p>

            {/* Made with love */}
            <p
              className="flex items-center gap-1.5 text-[12px]"
              style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,.28)" }}>
              Made with <Heart size={11} fill="#ef4444" color="#ef4444" /> in Chandigarh
            </p>

            {/* Policy links */}
            <div className="flex items-center gap-5">
              <Link href="/Privacy-Policy" className="ft-bottom-link">Privacy Policy</Link>
              <Link href="/faq" className="ft-bottom-link">FAQ</Link>
              <Link href="/Terms-Conditions" className="ft-bottom-link">Terms</Link>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}
