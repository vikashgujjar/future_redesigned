"use client";
import Image from "next/image";
import Link from "next/link";
import GetNewInsight from "../components/GetNewInsight";
import { FaClock, FaTag, FaArrowRight } from "react-icons/fa";

import blog1 from "../Assets/blog-dg-1.webp";
import blog2 from "../Assets/blog-dg-2.webp";
import blog3 from "../Assets/blog-dg-3.webp";

const blogData = [
  {
    title:    "Everything You Need To Know About Nodejs!",
    category: "Node.js",
    date:     "Sep 23, 2020",
    readTime: "5 min read",
    content:  "Node.js is a fast, scalable runtime for server-side JavaScript, ideal for real-time applications. Built on Chrome's V8 engine, it enables efficient, non-blocking I/O for data-intensive apps.",
    image:    blog1,
    slug:     "/blog/everything-you-need-to-know-about-nodejs",
    accent:   { from:"#06b6d4", to:"#0284c7" },
  },
  {
    title:    "Exploring the Key Features of Laravel 7 Framework",
    category: "Laravel",
    date:     "Sep 24, 2020",
    readTime: "6 min read",
    content:  "Laravel 7 offers elegant syntax, robust routing, authentication, scheduling, real-time broadcasting, and seamless integration — making PHP development faster and more enjoyable than ever.",
    image:    blog2,
    slug:     "/blog/exploring-the-key-features-of-laravel-7-framework",
    accent:   { from:"#6366f1", to:"#4f46e5" },
  },
  {
    title:    "Best Technology for Mobile Application Development",
    category: "Mobile App",
    date:     "Sep 25, 2020",
    readTime: "7 min read",
    content:  "React Native, Flutter, Swift, Kotlin, Xamarin, and Ionic each excel in mobile development with unique advantages. Choosing the right stack depends on your target platform and business goals.",
    image:    blog3,
    slug:     "/blog/best-technology-for-mobile-application-development",
    accent:   { from:"#10b981", to:"#059669" },
  },
];

export default function Blog() {
  return (
    <>
      <style>{`
        @keyframes blGrad { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes blPing  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }

        .bl-hl {
          background:linear-gradient(125deg,#2dd4bf,#6366f1,#a855f7);
          background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:blGrad 5s ease-in-out infinite;
        }
        .bl-ping { animation:blPing 2.4s ease-in-out infinite; }

        /* Blog card */
        .bl-card {
          background:#fff; border-radius:22px; overflow:hidden;
          border:1px solid rgba(99,102,241,.09);
          box-shadow:0 4px 24px rgba(99,102,241,.07),0 1px 4px rgba(0,0,0,.04);
          display:flex; flex-direction:column;
          transition:transform .32s cubic-bezier(.22,1,.36,1), box-shadow .32s;
        }
        .bl-card:hover {
          transform:translateY(-10px);
          box-shadow:0 28px 64px rgba(99,102,241,.14),0 4px 16px rgba(0,0,0,.07);
        }

        /* Image */
        .bl-img { position:relative; overflow:hidden; aspect-ratio:16/9; flex-shrink:0; }
        .bl-img img { width:100%; height:100%; object-fit:cover;
          transition:transform .55s cubic-bezier(.22,1,.36,1); }
        .bl-card:hover .bl-img img { transform:scale(1.07); }

        /* Category chip over image */
        .bl-cat {
          position:absolute; top:14px; left:14px; z-index:10;
          display:inline-flex; align-items:center; gap:5px;
          padding:5px 12px; border-radius:999px; font-size:10.5px; font-weight:700;
          font-family:'Poppins',sans-serif; letter-spacing:.08em; text-transform:uppercase;
          color:#fff; backdrop-filter:blur(10px);
          border:1px solid rgba(255,255,255,.25);
        }

        /* Top strip */
        .bl-top-strip {
          height:3px; width:100%; flex-shrink:0;
        }

        /* Card body */
        .bl-body { padding:22px 24px 26px; flex:1; display:flex; flex-direction:column; }

        /* Meta row */
        .bl-meta {
          display:flex; align-items:center; gap:14px; margin-bottom:12px;
          font-size:11.5px; color:#94a3b8; font-family:'Poppins',sans-serif; font-weight:600;
        }
        .bl-meta-item { display:flex; align-items:center; gap:5px; }

        /* Title */
        .bl-title {
          font-family:'Poppins',sans-serif; font-weight:800; line-height:1.28;
          color:#0c1230; margin-bottom:12px;
          font-size:clamp(1rem,1.6vw,1.15rem);
          transition:color .2s;
          text-decoration:none; display:block;
        }
        .bl-title:hover { color:#4f46e5; }

        /* Excerpt */
        .bl-excerpt {
          font-size:13.5px; line-height:1.88; color:#64748b;
          flex:1; margin-bottom:18px;
        }

        /* Divider */
        .bl-rule { height:1px; background:rgba(99,102,241,.09); margin-bottom:18px; }

        /* Read more */
        .bl-read {
          display:inline-flex; align-items:center; gap:7px;
          font-family:'Poppins',sans-serif; font-size:12.5px; font-weight:700;
          text-decoration:none; letter-spacing:.05em;
          transition:gap .2s;
        }
        .bl-read:hover { gap:11px; }
        .bl-read svg { transition:transform .2s; }
        .bl-read:hover svg { transform:translateX(3px); }
      `}</style>

      {/* ── Banner ── */}
      <section className="relative overflow-hidden flex items-center justify-center"
        style={{ minHeight:"clamp(280px,40vh,420px)", fontFamily:"'Inter',sans-serif" }}>
        <Image
          src="/Assets/stock/photo-1499750310107-5fef28a66643.webp"
          alt="Blog"
          fill priority unoptimized
          className="object-cover object-center"
        />
        <div className="absolute inset-0"
          style={{ background:"linear-gradient(160deg,rgba(4,5,24,.82) 0%,rgba(20,10,60,.78) 50%,rgba(4,5,24,.85) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"radial-gradient(rgba(255,255,255,.06) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(45,212,191,.22),transparent 65%)" }} />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(99,102,241,.22),transparent 65%)" }} />
        <div className="absolute left-0 right-0 pointer-events-none"
          style={{ top:"50%", height:"1px", background:"linear-gradient(90deg,transparent,rgba(45,212,191,.18),rgba(99,102,241,.14),transparent)" }} />
        <div className="relative z-10 text-center px-4">
          <nav className="flex items-center justify-center gap-2 mb-5">
            <Link href="/"
              className="text-[11px] font-semibold uppercase tracking-[.18em] hover:text-teal-400 transition-colors"
              style={{ color:"rgba(255,255,255,.50)", fontFamily:"'Poppins',sans-serif", textDecoration:"none" }}>
              Home
            </Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2l4 4-4 4" stroke="rgba(255,255,255,.30)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[11px] font-semibold uppercase tracking-[.18em]"
              style={{ color:"#2dd4bf", fontFamily:"'Poppins',sans-serif" }}>
              Blog
            </span>
          </nav>
          <h1 className="font-extrabold leading-[1.08] text-white mb-4"
            style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(2rem,5vw,3.6rem)" }}>
            Insights &amp;{" "}
            <span style={{ background:"linear-gradient(120deg,#2dd4bf,#6366f1,#a855f7)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              Articles
            </span>
          </h1>
          <div className="mx-auto h-[3px] w-16 rounded-full"
            style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
          style={{ background:"linear-gradient(to bottom,transparent,rgba(4,5,24,.55))" }} />
      </section>

      {/* ── Blog Grid ── */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
        style={{ background:"linear-gradient(155deg,#f4f8ff 0%,#ffffff 50%,#f0f4ff 100%)", fontFamily:"'Inter',sans-serif" }}>

        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"radial-gradient(rgba(99,102,241,.04) 1px,transparent 1px)", backgroundSize:"30px 30px" }} />
        <div className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(45,212,191,.07),transparent 65%)" }} />
        <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(99,102,241,.07),transparent 65%)" }} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 xl:px-16">

          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-5"
              style={{ background:"rgba(45,212,191,.09)", border:"1px solid rgba(45,212,191,.26)" }}>
              <span className="bl-ping w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                style={{ color:"#0d9488", fontFamily:"'Poppins',sans-serif" }}>
                Future IT Touch · Knowledge Hub
              </span>
            </div>
            <h2 className="font-extrabold leading-[1.10] mb-4"
              style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.65rem,3.5vw,2.6rem)", color:"#0c1230" }}>
              Latest <span className="bl-hl">Insights</span> from Our Team
            </h2>
            <div className="mx-auto h-[3px] w-14 rounded-full mb-5"
              style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
            <p className="text-[13.5px] max-w-[500px] mx-auto leading-[1.85]" style={{ color:"#64748b" }}>
              Stay ahead with expert articles on web development, mobile apps, digital marketing, and the latest tech trends.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogData.map((blog, i) => (
              <article key={i} className="bl-card">

                {/* Top color strip */}
                <div className="bl-top-strip"
                  style={{ background:`linear-gradient(90deg,${blog.accent.from},${blog.accent.to})` }} />

                {/* Image */}
                <div className="bl-img">
                  <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                  {/* Category chip */}
                  <div className="bl-cat"
                    style={{ background:`linear-gradient(135deg,${blog.accent.from}cc,${blog.accent.to}cc)` }}>
                    <FaTag size={8} />
                    {blog.category}
                  </div>
                </div>

                {/* Body */}
                <div className="bl-body">
                  {/* Meta */}
                  <div className="bl-meta">
                    <span className="bl-meta-item">
                      <FaClock size={10} style={{ color:blog.accent.from }} />
                      {blog.date}
                    </span>
                    <span className="bl-meta-item">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="5" stroke={blog.accent.from} strokeWidth="1.4"/>
                        <path d="M6 3.5V6l2 1.5" stroke={blog.accent.from} strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={blog.slug} className="bl-title">{blog.title}</Link>

                  {/* Excerpt */}
                  <p className="bl-excerpt">{blog.content}</p>

                  <div className="bl-rule" />

                  {/* Read More */}
                  <Link href={blog.slug} className="bl-read"
                    style={{ color:blog.accent.from }}>
                    Read Article
                    <FaArrowRight size={11} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <GetNewInsight />
    </>
  );
}
