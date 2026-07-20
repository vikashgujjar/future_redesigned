"use client";
import Image from "next/image";
import { FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import GetNewInsight from "../components/GetNewInsight";
import Link from "next/link";
import useYearsExperience from "../lib/useYearsExperience";

const DEPARTMENTS = ["All", "Leadership", "Business Development", "Design", "Development", "Marketing", "HR"];

const team = [
  /* ── Leadership ── */
  { name: "Vinod Tanwar", role: "Founder & CEO", dept: "Leadership", img: "/Assets/vinod.webp" },
  { name: "Pooja", role: "Founder & CEO", dept: "Leadership", img: "/Assets/pooja.webp" },
  { name: "Rohtash Tanwar", role: "BDM — Chandigarh", dept: "Business Development", img: "/Assets/rotang.webp" },
  { name: "Dinesh", role: "BDM — Bangalore", dept: "Business Development", img: "/Assets/DInesh.webp" },
  // { name: "Bhawna Bakshi", role: "BDM — Chandigarh", dept: "Business Development", img: "/Assets/bhawna.webp" },
  { name: "Rajan Sharma", role: "BDM — Texas, USA", dept: "Business Development", img: "/Assets/texassir.webp" },
  { name: "Kajal", role: "HR Manager", dept: "HR", img: "/Assets/kajalmam.webp" },
  { name: "Rohit Walia", role: "Website Designer", dept: "Design", img: "/Assets/rohitsir.webp" },
  /* ── Development ── */
  { name: "Ravinder Godara", role: ".NET Developer", dept: "Development", img: "/Assets/ravinder.webp" },
  { name: "Dixit", role: "Full Stack Developer", dept: "Development", img: "/Assets/Dixit.webp" },
  { name: "Chirag", role: "Digital Marketing", dept: "Marketing", img: "/Assets/Chirag.webp" },
];

const DEPT_COLORS = {
  "Leadership": { from: "#f59e0b", to: "#d97706" },
  "Business Development": { from: "#06b6d4", to: "#0284c7" },
  "Design": { from: "#ec4899", to: "#db2777" },
  "Development": { from: "#6366f1", to: "#4f46e5" },
  "Marketing": { from: "#10b981", to: "#059669" },
  "HR": { from: "#f43f5e", to: "#e11d48" },
};

export default function OurTeam() {
  const yearsExperience = useYearsExperience();
  return (
    <>
      {/* ── Page Banner ── */}
      <section className="relative overflow-hidden flex items-center justify-center"
        style={{ minHeight:"clamp(280px,40vh,420px)", fontFamily:"'Inter',sans-serif" }}>

        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=85"
          alt="Our Team"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0"
          style={{ background:"linear-gradient(160deg,rgba(4,5,24,.82) 0%,rgba(20,10,60,.78) 50%,rgba(4,5,24,.85) 100%)" }} />

        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"radial-gradient(rgba(255,255,255,.06) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />

        {/* Glow orbs */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(45,212,191,.22),transparent 65%)" }} />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(99,102,241,.22),transparent 65%)" }} />

        {/* Horizontal accent line */}
        <div className="absolute left-0 right-0 pointer-events-none"
          style={{ top:"50%", height:"1px", background:"linear-gradient(90deg,transparent,rgba(45,212,191,.18),rgba(99,102,241,.14),transparent)" }} />

        {/* Centered content */}
        <div className="relative z-10 text-center px-4">

          {/* Breadcrumb */}
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
              Our Team
            </span>
          </nav>

          {/* Title */}
          <h1 className="font-extrabold leading-[1.08] text-white mb-4"
            style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(2rem,5vw,3.6rem)" }}>
            Meet Our{" "}
            <span style={{
              background:"linear-gradient(120deg,#2dd4bf,#6366f1,#a855f7)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
            }}>
              Team
            </span>
          </h1>

          {/* Accent bar */}
          <div className="mx-auto h-[3px] w-16 rounded-full"
            style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
          style={{ background:"linear-gradient(to bottom,transparent,rgba(4,5,24,.55))" }} />
      </section>

      {/* ── Stats Strip ── */}
      <section className="relative overflow-hidden py-10 sm:py-12"
        style={{ background: "linear-gradient(135deg,#04071a 0%,#080e28 100%)", fontFamily: "'Inter',sans-serif" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.025) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 xl:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { val: "50+", label: "Team Members" },
              { val: yearsExperience, label: "Years Together" },
              { val: "3", label: "Global Offices" },
              { val: "98%", label: "Team Retention" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <span className="font-extrabold leading-none"
                  style={{
                    fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
                    background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    display: "inline-block"
                  }}>
                  {s.val}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[.14em]"
                  style={{ color: "rgba(255,255,255,.40)", fontFamily: "'Poppins',sans-serif" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Grid ── */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
        style={{ background: "linear-gradient(155deg,#f4f8ff 0%,#ffffff 50%,#f0f4ff 100%)", fontFamily: "'Inter',sans-serif" }}>

        <style>{`
          @keyframes tmBarIn  { from{transform:scaleX(0)} to{transform:scaleX(1)} }
          @keyframes tmGrad   { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
          @keyframes tmPulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(.72)} }
          @keyframes tmFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }

          .tm-bar   { animation:tmBarIn .75s cubic-bezier(.22,1,.36,1) .2s both; transform-origin:center }
          .tm-pulse { animation:tmPulse 2.4s ease-in-out infinite }
          .tm-hl {
            background:linear-gradient(125deg,#2dd4bf,#6366f1,#a855f7);
            background-size:200% 200%;
            -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
            animation:tmGrad 5s ease-in-out infinite;
          }

          /* Member card */
          .tm-card {
            background:#ffffff; border-radius:22px; overflow:hidden;
            border:1px solid rgba(0,0,0,.06);
            box-shadow:0 2px 16px rgba(99,102,241,.06),0 1px 4px rgba(0,0,0,.04);
            display:flex; flex-direction:column;
            transition:transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s, border-color .3s;
            position:relative;
          }
          .tm-card:hover {
            transform:translateY(-10px);
            border-color:rgba(99,102,241,.16);
            box-shadow:0 24px 60px rgba(99,102,241,.14),0 4px 16px rgba(0,0,0,.07);
          }

          /* Photo wrapper */
          .tm-photo {
            position:relative; overflow:hidden;
            height:260px; flex-shrink:0;
          }
          .tm-photo img {
            width:100%; height:100%; object-fit:cover; object-position:top center;
            transition:transform .55s cubic-bezier(.22,1,.36,1);
          }
          .tm-card:hover .tm-photo img { transform:scale(1.07); }

          /* Gradient overlay */
          .tm-overlay {
            position:absolute; inset:0;
            background:linear-gradient(to top, rgba(4,7,26,.70) 0%, transparent 55%);
            transition:opacity .3s;
          }

          /* Social icons row — slides up on hover */
          .tm-socials {
            position:absolute; bottom:0; left:0; right:0;
            display:flex; justify-content:center; gap:10px;
            padding:18px 16px;
            transform:translateY(8px); opacity:0;
            transition:transform .32s cubic-bezier(.22,1,.36,1), opacity .32s;
          }
          .tm-card:hover .tm-socials { transform:translateY(0); opacity:1; }

          .tm-social-btn {
            width:34px; height:34px; border-radius:50%;
            display:flex; align-items:center; justify-content:center;
            background:rgba(255,255,255,.18); border:1px solid rgba(255,255,255,.35);
            backdrop-filter:blur(10px); color:#fff; font-size:14px;
            transition:background .2s, transform .2s;
            text-decoration:none;
          }
          .tm-social-btn:hover { background:rgba(255,255,255,.34); transform:scale(1.14); }

          /* Top accent strip reveals on hover */
          .tm-top-strip {
            position:absolute; top:0; left:0; right:0; height:3px;
            opacity:0; transition:opacity .3s;
          }
          .tm-card:hover .tm-top-strip { opacity:1; }

          /* Card body */
          .tm-body { padding:18px 20px 20px; flex:1; display:flex; flex-direction:column; }
          .tm-divider {
            height:2px; width:24px; border-radius:2px; margin-bottom:10px;
            transition:width .3s cubic-bezier(.22,1,.36,1);
          }
          .tm-card:hover .tm-divider { width:40px; }

          /* Dept badge */
          .tm-badge {
            display:inline-flex; align-items:center; gap:5px;
            padding:3px 10px; border-radius:999px; font-size:10px;
            font-family:'Poppins',sans-serif; font-weight:700;
            letter-spacing:.08em; text-transform:uppercase; margin-top:auto;
          }

          /* Hover bloom */
          .tm-bloom {
            position:absolute; inset:0; border-radius:22px;
            opacity:0; pointer-events:none; transition:opacity .35s;
          }
          .tm-card:hover .tm-bloom { opacity:1; }
        `}</style>

        {/* Bg blobs */}
        <div className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.07),transparent 65%)" }} />
        <div className="absolute -bottom-40 -left-40 w-[440px] h-[440px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.07),transparent 65%)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(99,102,241,.04) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 xl:px-28">

          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-5"
              style={{ background: "rgba(45,212,191,.08)", border: "1px solid rgba(45,212,191,.22)" }}>
              <span className="tm-pulse w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                style={{ color: "#0d9488", fontFamily: "'Poppins',sans-serif" }}>
                Future IT Touch · Our People
              </span>
            </div>
            <h2 className="font-extrabold leading-[1.10] mb-4"
              style={{ color: "#060b1e", fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.65rem,3.5vw,2.8rem)" }}>
              We Are{" "}
              <span className="tm-hl">Awesome</span>
              {" "}— Meet Our Team
            </h2>
            <div className="tm-bar mx-auto h-[3px] w-14 rounded-full"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
            <p className="mt-5 text-[14px] leading-[1.85] max-w-[540px] mx-auto" style={{ color: "#64748b" }}>
              Talented individuals from across India and beyond — designers, developers, strategists, and leaders — all working together to build digital products that matter.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-7">
            {team.map((member, i) => {
              const dc = DEPT_COLORS[member.dept] || { from: "#6366f1", to: "#4f46e5" };
              return (
                <div key={i} className="tm-card">

                  {/* Hover bloom */}
                  <div className="tm-bloom"
                    style={{ background: `radial-gradient(ellipse at 50% 0%,${dc.from}12,transparent 65%)` }} />

                  {/* Top accent strip */}
                  <div className="tm-top-strip"
                    style={{ background: `linear-gradient(90deg,${dc.from},${dc.to})` }} />

                  {/* Photo */}
                  <div className="tm-photo">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                      className="object-cover object-top"
                      unoptimized
                    />
                    <div className="tm-overlay" />

                    {/* Social icons */}
                    <div className="tm-socials">
                      {[
                        { Icon: FaLinkedinIn, href: "https://linkedin.com" },
                        { Icon: FaXTwitter, href: "https://twitter.com" },
                        { Icon: FaInstagram, href: "https://instagram.com" },
                        { Icon: FaEnvelope, href: "mailto:info@futuretouch.in" },
                      ].map(({ Icon, href }, si) => (
                        <a key={si} href={href} target="_blank" rel="noopener noreferrer" className="tm-social-btn">
                          <Icon />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="tm-body">
                    <div className="tm-divider"
                      style={{ background: `linear-gradient(90deg,${dc.from},${dc.to})` }} />

                    <h4 className="font-bold leading-snug mb-1"
                      style={{ color: "#0f172a", fontFamily: "'Poppins',sans-serif", fontSize: "clamp(.95rem,1.5vw,1.05rem)" }}>
                      {member.name}
                    </h4>

                    <p className="text-[12.5px] mb-3" style={{ color: "#64748b" }}>
                      {member.role}
                    </p>

                    <span className="tm-badge self-start"
                      style={{ background: `${dc.from}14`, border: `1px solid ${dc.from}35`, color: dc.from }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: dc.from }} />
                      {member.dept}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block rounded-2xl p-[1px]"
              style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1,#a855f7)" }}>
              <div className="rounded-2xl px-8 py-6 sm:px-12 sm:py-8 bg-white">
                <p className="text-[12px] font-bold uppercase tracking-[.18em] mb-2"
                  style={{ color: "#94a3b8", fontFamily: "'Poppins',sans-serif" }}>
                  Join Our Team
                </p>
                <h3 className="font-extrabold mb-3"
                  style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", color: "#0f172a" }}>
                  Want to build the future with us?
                </h3>
                <p className="text-[13.5px] mb-5 max-w-[420px] mx-auto leading-[1.8]" style={{ color: "#64748b" }}>
                  We're always looking for talented designers, developers, and marketers. Send us your portfolio and let's talk.
                </p>
                <a href="/contact"
                  className="inline-flex items-center gap-2 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg,#2dd4bf,#6366f1)", boxShadow: "0 6px 24px rgba(99,102,241,.28)",
                    fontFamily: "'Poppins',sans-serif", textDecoration: "none"
                  }}>
                  Get In Touch
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M1.5 6h9M6.5 1.5l4 4.5-4 4.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <GetNewInsight />
    </>
  );
}
