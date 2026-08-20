"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaUser, FaClock, FaTag, FaArrowRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BLOG_POSTS } from "../blogPosts";

const BlogContent = BLOG_POSTS.map((post) => ({ ...post, blogImg: post.image }));


const categories = [
  { name: "Technology", num: 2 },
  { name: "Health", num: 3 },
  { name: "Lifestyle", num: 4 },
  { name: "Business", num: 3 },
  { name: "Web Design", num: 5 },
];

export default function BlogView({ slug }) {
  const [search, setSearch] = useState("");
  const relatedSwiperRef = useRef(null);
  const post = BlogContent.find(p => p.slug === slug);
  const related = BlogContent.filter(p => p.slug !== slug);
  const filtered = search
    ? BlogContent.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    : BlogContent;

  if (!post) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-500">Post not found.</p>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes bvGrad { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes bvPing  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }

        .bv-ping { animation:bvPing 2.4s ease-in-out infinite; }
        .bv-hl {
          background:linear-gradient(125deg,#2dd4bf,#6366f1,#a855f7);
          background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:bvGrad 5s ease-in-out infinite;
        }

        /* Section heading */
        .bv-sh {
          font-family:'Poppins',sans-serif; font-weight:700; font-size:1.1rem;
          color:#0c1230; margin-bottom:6px; margin-top:28px;
          display:flex; align-items:center; gap:8px;
        }
        .bv-sh::before {
          content:''; display:block; width:4px; height:20px; border-radius:3px; flex-shrink:0;
          background:var(--sh-color, linear-gradient(135deg,#2dd4bf,#6366f1));
        }

        /* Inline links inside author-written intro/section HTML */
        .bv-rich a {
          color:#4f46e5; font-weight:700; text-decoration:underline;
          text-decoration-color:rgba(79,70,229,.35); text-underline-offset:2px;
          transition:color .2s, text-decoration-color .2s;
        }
        .bv-rich a:hover { color:#2dd4bf; text-decoration-color:currentColor; }

        /* Sidebar search */
        .bv-search-wrap { position:relative; }
        .bv-search-input {
          width:100%; padding:11px 14px 11px 40px;
          border:1px solid rgba(99,102,241,.18); border-radius:12px;
          font-size:13px; color:#374151; background:#fff;
          outline:none; transition:border-color .2s, box-shadow .2s;
          font-family:'Inter',sans-serif;
        }
        .bv-search-input:focus {
          border-color:rgba(99,102,241,.45);
          box-shadow:0 0 0 3px rgba(99,102,241,.08);
        }
        .bv-search-icon {
          position:absolute; left:13px; top:50%; transform:translateY(-50%);
          color:#94a3b8; pointer-events:none;
        }

        /* Sidebar card */
        .bv-side-card {
          border-radius:16px; padding:20px;
          background:#fff; border:1px solid rgba(99,102,241,.09);
          box-shadow:0 4px 20px rgba(99,102,241,.07);
          margin-bottom:20px;
        }
        .bv-side-title {
          font-family:'Poppins',sans-serif; font-weight:800; font-size:.95rem;
          color:#0c1230; margin-bottom:14px; padding-bottom:10px;
          border-bottom:2px solid transparent;
          background:linear-gradient(#fff,#fff) padding-box,
                     linear-gradient(90deg,#2dd4bf,#6366f1) border-box;
        }

        /* Recent post row */
        .bv-recent-row {
          display:flex; gap:12px; align-items:flex-start;
          padding:10px 0; border-bottom:1px solid rgba(99,102,241,.07);
          text-decoration:none;
          transition:transform .2s;
        }
        .bv-recent-row:last-child { border-bottom:none; }
        .bv-recent-row:hover { transform:translateX(3px); }
        .bv-recent-thumb {
          width:62px; height:46px; border-radius:8px; overflow:hidden; flex-shrink:0;
        }
        .bv-recent-thumb img { width:100%; height:100%; object-fit:cover; }

        /* Category row */
        .bv-cat-row {
          display:flex; justify-content:space-between; align-items:center;
          padding:9px 12px; border-radius:8px; cursor:pointer;
          transition:background .2s;
          font-size:13px; color:#475569; font-family:'Poppins',sans-serif;
        }
        .bv-cat-row:hover { background:rgba(99,102,241,.06); color:#4f46e5; }
        .bv-cat-num {
          background:rgba(99,102,241,.10); color:#4f46e5;
          border-radius:999px; padding:2px 9px; font-size:11px; font-weight:700;
        }

        /* Related card */
        .bv-rel-card {
          border-radius:18px; overflow:hidden; background:#fff;
          border:1px solid rgba(99,102,241,.09);
          box-shadow:0 2px 14px rgba(99,102,241,.06);
          transition:transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s;
          text-decoration:none; display:block;
        }
        .bv-rel-card:hover { transform:translateY(-6px); box-shadow:0 20px 48px rgba(99,102,241,.13); }
        .bv-rel-img { position:relative; aspect-ratio:16/9; overflow:hidden; }
        .bv-rel-img img { width:100%; height:100%; object-fit:cover;
          transition:transform .5s cubic-bezier(.22,1,.36,1); }
        .bv-rel-card:hover .bv-rel-img img { transform:scale(1.06); }
      `}</style>

      {/* ── Banner ── */}
      <section className="relative overflow-hidden flex items-center justify-center"
        style={{ minHeight: "clamp(280px,40vh,420px)", fontFamily: "'Inter',sans-serif" }}>
        <Image
          src="/Assets/stock/photo-1499750310107-5fef28a66643.webp"
          alt="Blog"
          fill priority unoptimized
          className="object-cover object-center"
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(160deg,rgba(4,5,24,.82) 0%,rgba(20,10,60,.78) 50%,rgba(4,5,24,.85) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.06) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.22),transparent 65%)" }} />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.22),transparent 65%)" }} />
        <div className="relative z-10 text-center px-4">
          <nav className="flex items-center justify-center gap-2 mb-5">
            <Link href="/"
              className="text-[11px] font-semibold uppercase tracking-[.18em] hover:text-teal-400 transition-colors"
              style={{ color: "rgba(255,255,255,.50)", fontFamily: "'Poppins',sans-serif", textDecoration: "none" }}>
              Home
            </Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2l4 4-4 4" stroke="rgba(255,255,255,.30)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Link href="/blog"
              className="text-[11px] font-semibold uppercase tracking-[.18em] hover:text-teal-400 transition-colors"
              style={{ color: "rgba(255,255,255,.50)", fontFamily: "'Poppins',sans-serif", textDecoration: "none" }}>
              Blog
            </Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2l4 4-4 4" stroke="rgba(255,255,255,.30)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[11px] font-semibold uppercase tracking-[.18em]"
              style={{ color: "#2dd4bf", fontFamily: "'Poppins',sans-serif" }}>
              Article
            </span>
          </nav>
          <h1 className="font-extrabold leading-[1.08] text-white mb-4 max-w-[700px] mx-auto"
            style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.4rem,3.5vw,2.4rem)" }}>
            {post.title}
          </h1>
          <div className="mx-auto h-[3px] w-16 rounded-full"
            style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
          style={{ background: "linear-gradient(to bottom,transparent,rgba(4,5,24,.55))" }} />
      </section>

      {/* ── Content Area ── */}
      <section className="relative py-14 sm:py-18 lg:py-20"
        style={{ background: "linear-gradient(155deg,#f4f8ff 0%,#ffffff 50%,#f0f4ff 100%)", fontFamily: "'Inter',sans-serif" }}>

        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(99,102,241,.04) 1px,transparent 1px)", backgroundSize: "30px 30px" }} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-10 xl:gap-14">

            {/* ══════════════ MAIN ARTICLE ══════════════ */}
            <article>

              {/* Hero image */}
              <div className="relative w-full overflow-hidden rounded-2xl mb-8"
                style={{
                  aspectRatio: "16/9",
                  boxShadow: "0 20px 60px rgba(99,102,241,.14),0 0 0 1px rgba(99,102,241,.08)"
                }}>
                <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
                  style={{ background: `linear-gradient(90deg,${post.accent.from},${post.accent.to})` }} />
                <Image src={post.blogImg} alt={post.title} fill className="object-cover" />
              </div>

              {/* Meta chips */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[.10em] text-white"
                  style={{
                    background: `linear-gradient(135deg,${post.accent.from},${post.accent.to})`,
                    fontFamily: "'Poppins',sans-serif"
                  }}>
                  <FaTag size={9} /> {post.category}
                </span>
                <span className="inline-flex items-center gap-2 text-[12px] font-semibold"
                  style={{ color: "#64748b", fontFamily: "'Poppins',sans-serif" }}>
                  <FaUser size={10} style={{ color: post.accent.from }} /> {post.username}
                </span>
                <span className="inline-flex items-center gap-2 text-[12px] font-semibold"
                  style={{ color: "#64748b", fontFamily: "'Poppins',sans-serif" }}>
                  <FaClock size={10} style={{ color: post.accent.from }} /> {post.date}
                </span>
                <span className="inline-flex items-center gap-2 text-[12px] font-semibold"
                  style={{ color: "#64748b", fontFamily: "'Poppins',sans-serif" }}>
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5" stroke={post.accent.from} strokeWidth="1.4" />
                    <path d="M6 3.5V6l2 1.5" stroke={post.accent.from} strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-extrabold leading-[1.22] mb-5"
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: "clamp(1.4rem,3vw,2rem)", color: "#0c1230"
                }}>
                {post.title}
              </h1>

              {/* Accent bar */}
              <div className="mb-7 h-[3px] w-16 rounded-full"
                style={{ background: `linear-gradient(90deg,${post.accent.from},${post.accent.to})` }} />

              {/* Intro paragraph — blockquote style */}
              <blockquote className="relative rounded-xl px-6 py-5 mb-8"
                style={{
                  background: `${post.accent.from}0d`, borderLeft: `4px solid ${post.accent.from}`,
                  fontFamily: "'Inter',sans-serif"
                }}>
                {/* intro is author-written HTML (line breaks, inline links) — not
                    user-submitted input, so injecting it here is safe */}
                <p className="bv-rich text-[14.5px] leading-[1.90] font-medium" style={{ color: "#374151" }}
                  dangerouslySetInnerHTML={{ __html: post.intro }} />
              </blockquote>

              {/* Body sections */}
              {post.sections.map((sec, si) => (
                <div key={si}>
                  <h2 className="bv-sh" style={{ "--sh-color": `linear-gradient(135deg,${post.accent.from},${post.accent.to})` }}>
                    {sec.heading}
                  </h2>
                  <p className="bv-rich text-[14px] leading-[1.92] mb-2" style={{ color: "#4a5070" }}
                    dangerouslySetInnerHTML={{ __html: sec.body }} />
                </div>
              ))}

              {/* Back to blog */}
              <div className="mt-10 pt-8" style={{ borderTop: "1px solid rgba(99,102,241,.10)" }}>
                <Link href="/blog"
                  className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: `linear-gradient(135deg,${post.accent.from},${post.accent.to})`,
                    color: "#fff", fontFamily: "'Poppins',sans-serif", textDecoration: "none",
                    boxShadow: `0 6px 20px ${post.accent.from}40`
                  }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10.5 6h-9M5 2L1 6l4 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Back to Blog
                </Link>
              </div>
            </article>

            {/* ══════════════ SIDEBAR ══════════════ */}
            <aside className="space-y-5 lg:sticky lg:top-[122px] lg:self-start">

              {/* Search */}
              <div className="bv-side-card">
                <p className="bv-side-title">Search Articles</p>
                <div className="bv-search-wrap">
                  <FaSearch size={12} className="bv-search-icon" />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="bv-search-input"
                  />
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bv-side-card">
                <p className="bv-side-title">Recent Posts</p>
                <div>
                  {filtered.map((p, i) => (
                    <Link key={i} href={`/blog/${p.slug}`} className="bv-recent-row">
                      <div className="bv-recent-thumb">
                        <Image src={p.blogImg} alt={p.title} width={62} height={46} />
                      </div>
                      <div>
                        <p className="text-[12.5px] font-semibold leading-snug mb-1"
                          style={{ color: "#0f172a", fontFamily: "'Poppins',sans-serif" }}>
                          {p.title}
                        </p>
                        <p className="text-[11px] flex items-center gap-1.5"
                          style={{ color: "#94a3b8", fontFamily: "'Poppins',sans-serif" }}>
                          <FaClock size={9} /> {p.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                  {filtered.length === 0 && (
                    <p className="text-[13px]" style={{ color: "#94a3b8" }}>No posts found.</p>
                  )}
                </div>
              </div>

              {/* Categories */}
              <div className="bv-side-card">
                <p className="bv-side-title">Categories</p>
                <div>
                  {categories.map((cat, i) => (
                    <div key={i} className="bv-cat-row">
                      <span className="flex items-center gap-2">
                        <FaChevronRight size={9} style={{ color: "#2dd4bf" }} />
                        {cat.name}
                      </span>
                      <span className="bv-cat-num">{cat.num}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA card */}
              <div className="rounded-2xl p-5 text-center"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1,#a855f7)" }}>
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-white/70 mb-2"
                  style={{ fontFamily: "'Poppins',sans-serif" }}>
                  Need a Project?
                </p>
                <h3 className="font-extrabold text-white mb-3 leading-snug"
                  style={{ fontFamily: "'Poppins',sans-serif", fontSize: "1rem" }}>
                  Let's Build Something Amazing Together
                </h3>
                <Link href="/contact"
                  className="inline-flex items-center gap-1.5 bg-white text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:shadow-lg"
                  style={{ color: "#4f46e5", fontFamily: "'Poppins',sans-serif", textDecoration: "none" }}>
                  Contact Us <FaArrowRight size={10} />
                </Link>
              </div>

            </aside>
          </div>

          {/* ══ Related Posts ══ */}
          {related.length > 0 && (
            <div className="mt-16 pt-12" style={{ borderTop: "1px solid rgba(99,102,241,.10)" }}>
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-extrabold" style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: "clamp(1.2rem,2vw,1.5rem)", color: "#0c1230"
                }}>
                  You Might Also Like
                </h3>
                <div className="flex items-center gap-4">
                  <Link href="/blog"
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold"
                    style={{ color: "#4f46e5", fontFamily: "'Poppins',sans-serif", textDecoration: "none" }}>
                    View All <FaArrowRight size={10} />
                  </Link>
                  <div className="hidden sm:flex items-center gap-2">
                    <button
                      onClick={() => relatedSwiperRef.current?.swiper?.slidePrev()}
                      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-px"
                      style={{ border: "1.5px solid rgba(99,102,241,.20)", background: "white", color: "#6366f1" }}
                      aria-label="Previous related post"
                    >
                      <FaChevronLeft className="text-xs" />
                    </button>
                    <button
                      onClick={() => relatedSwiperRef.current?.swiper?.slideNext()}
                      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-px shadow-md"
                      style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", color: "white" }}
                      aria-label="Next related post"
                    >
                      <FaChevronRight className="text-xs" />
                    </button>
                  </div>
                </div>
              </div>
              <Swiper
                ref={relatedSwiperRef}
                spaceBetween={16}
                breakpoints={{
                  0:    { slidesPerView: 2, spaceBetween: 16 },
                  640:  { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 24 },
                }}
                className="bv-rel-swiper !pb-2"
              >
                {related.map((p, i) => (
                  <SwiperSlide key={i}>
                    <Link href={`/blog/${p.slug}`} className="bv-rel-card">
                      <div className="bv-rel-img">
                        <Image src={p.blogImg} alt={p.title} fill className="object-cover" />
                        <div className="absolute top-0 left-0 right-0 h-[3px]"
                          style={{ background: `linear-gradient(90deg,${p.accent.from},${p.accent.to})` }} />
                      </div>
                      <div className="p-4">
                        <span className="text-[10px] font-bold uppercase tracking-[.10em] mb-2 inline-block"
                          style={{ color: p.accent.from, fontFamily: "'Poppins',sans-serif" }}>
                          {p.category}
                        </span>
                        <h4 className="font-bold leading-snug text-[.92rem]"
                          style={{ color: "#0f172a", fontFamily: "'Poppins',sans-serif" }}>
                          {p.title}
                        </h4>
                        <p className="text-[11.5px] mt-1.5 flex items-center gap-1.5"
                          style={{ color: "#94a3b8", fontFamily: "'Poppins',sans-serif" }}>
                          <FaClock size={9} /> {p.date} · {p.readTime}
                        </p>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
