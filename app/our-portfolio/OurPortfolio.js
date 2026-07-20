"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetNewInsight from "../components/GetNewInsight";
import { FaExternalLinkAlt } from "react-icons/fa";
import useYearsExperience from "../lib/useYearsExperience";

import image1  from "../Assets/website1.webp";
import image2  from "../Assets/website2.webp";
import image3  from "../Assets/website3.webp";
import image4  from "../Assets/website6.webp";
import image5  from "../Assets/website8.webp";
import image6  from "../Assets/website10.webp";
import image7  from "../Assets/website11.webp";
import image8  from "../Assets/website18.webp";
import image9  from "../Assets/website14.webp";
import image10 from "../Assets/website15.webp";
import image11 from "../Assets/website17.webp";
import image12 from "../Assets/website7.webp";
import image13 from "../Assets/website21.webp";
import image14 from "../Assets/website1 (1).webp";
import image15 from "../Assets/website22.webp";
import image16 from "../Assets/website23.webp";
import image17 from "../Assets/website24.webp";
import image18 from "../Assets/website25.webp";
import image19 from "../Assets/website26.webp";
import image20 from "../Assets/website27.webp";
import image21 from "../Assets/website28.webp";
import image22 from "../Assets/website29.webp";
import image23 from "../Assets/website30.webp";
import image24 from "../Assets/website31.webp";

const TABS = ["All", "Website", "Mobile App", "Graphic"];

const data = [
  { link:"https://vaidicyoga.com/",                  image:image1,  title:"E-commerce Website",         subtitle:"Product Services",             category:["Website"]               },
  { link:"https://www.appyplanetservices.com/",       image:image2,  title:"Business Website",           subtitle:"Apple Repair Store",           category:["Website"]               },
  { link:"https://www.expertdelivery.in/",            image:image3,  title:"Transport Website",          subtitle:"Moving Company",               category:["Website"]               },
  { link:"https://horizonestatesandfinance.com/",     image:image4,  title:"Real Estate Finance",        subtitle:"Finance Company",              category:["Website"]               },
  { link:"https://nextlegal.in/",                     image:image5,  title:"Advocates & Solicitors",     subtitle:"Lawyer",                       category:["Website"]               },
  { link:"https://shinecargas.in/",                   image:image6,  title:"Shine Car Gas",              subtitle:"Auto Repair Company",          category:["Website"]               },
  { link:"https://sjseventsandcatering.com/",         image:image7,  title:"Catering Company",           subtitle:"Catering Services Provider",   category:["Website"]               },
  { link:"https://thespringclothing.com/",            image:image8,  title:"E-commerce Website",         subtitle:"Summer Collection",            category:["Website"]               },
  { link:"https://shashijewellers.com/",              image:image9,  title:"E-commerce Website",         subtitle:"Artificial Jewellery",         category:["Website"]               },
  { link:"https://gaurihub.com/",                     image:image10, title:"E-commerce Website",         subtitle:"Product Services",             category:["Website"]               },
  { link:"https://hashthatbrand.com/",                image:image11, title:"Digital Company",            subtitle:"Digital Marketing Services",   category:["Website"]               },
  { link:"https://indosunriseinternationalschool.com/",image:image12,title:"ISRI School",                subtitle:"Bangalore School",             category:["Website"]               },
  { link:"https://theabsconsultants.com/",            image:image13, title:"The Abs Consultants",        subtitle:"Abroad Visa Services",         category:["Website"]               },
  { link:"https://theabsconsultants.com/",            image:image14, title:"E-commerce Website",         subtitle:"Product",                      category:["Website"]               },
  { link:"https://www.hybridracingindia.com/",        image:image15, title:"Hybrid Racing India",        subtitle:"Ecommerce Website",            category:["Mobile App","Graphic"]  },
  { link:"https://sanjanamanpowerelite.com/",         image:image16, title:"Sanjana Manpower Elite",     subtitle:"Man Power Provider",           category:["Mobile App"]            },
  { link:"https://workaddacoworking.com/",            image:image17, title:"Work Adda Co-working",       subtitle:"Co-working Space",             category:["Website"]               },
  { link:"https://idealpharmacycollege.in/",          image:image18, title:"Pharmacy College",           subtitle:"Education",                    category:["Website"]               },
  { link:"https://bhishmagold.com/",                  image:image19, title:"Bhishma Gold",               subtitle:"Informational Website",        category:["Mobile App","Graphic"]  },
  { link:"https://advaitacademy.com/",                image:image20, title:"Adavit Academy",             subtitle:"IELTS & PTE Training",         category:["Mobile App"]            },
  { link:"https://equipbpo.com/",                     image:image21, title:"Eqip BPO",                   subtitle:"Finance Company",              category:["Website"]               },
  { link:"https://insidespace.co.in/",                image:image22, title:"Inside Space",               subtitle:"Thermal Expansion",            category:["Website"]               },
  { link:"https://feelorganic.org/",                  image:image23, title:"Feel Organic",               subtitle:"Chemical Company",             category:["Mobile App","Graphic"]  },
  { link:"https://psychicreadermaninjamaica.com/",    image:image24, title:"Astrology Prediction Expert",subtitle:"Astrologer Priest Rishi",      category:["Mobile App"]            },
];

export default function OurPortfolio() {
  const [active, setActive] = useState("All");
  const yearsExperience = useYearsExperience();

  const filtered = active === "All"
    ? data
    : data.filter(d => d.category.includes(active));

  return (
    <>
      <style>{`
        @keyframes pfGrad { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes pfPing  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }
        @keyframes pfIn    { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

        .pf-hl {
          background:linear-gradient(125deg,#2dd4bf,#6366f1,#a855f7);
          background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:pfGrad 5s ease-in-out infinite;
        }
        .pf-ping { animation:pfPing 2.4s ease-in-out infinite; }

        /* Filter pill */
        .pf-pill {
          padding:8px 20px; border-radius:999px; font-size:13px; font-weight:600; cursor:pointer;
          font-family:'Poppins',sans-serif; letter-spacing:.04em;
          border:1px solid rgba(99,102,241,.18);
          background:transparent; color:#64748b;
          transition:background .2s, color .2s, border-color .2s, box-shadow .2s;
        }
        .pf-pill:hover { background:rgba(99,102,241,.06); color:#4f46e5; border-color:rgba(99,102,241,.30); }
        .pf-pill.active {
          background:linear-gradient(135deg,#2dd4bf,#6366f1);
          color:#fff; border-color:transparent;
          box-shadow:0 4px 16px rgba(99,102,241,.28);
        }

        /* ── BROWSER MOCKUP CARD ── */
        .pf-card {
          border-radius:16px; overflow:hidden;
          background:#1e1e2e;
          box-shadow:0 4px 24px rgba(0,0,0,.18),0 1px 4px rgba(0,0,0,.10);
          border:1px solid rgba(255,255,255,.07);
          transition:transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s;
          animation:pfIn .45s cubic-bezier(.22,1,.36,1) both;
          display:flex; flex-direction:column;
        }
        .pf-card:hover {
          transform:translateY(-10px) scale(1.01);
          box-shadow:0 28px 64px rgba(99,102,241,.22),0 4px 16px rgba(0,0,0,.14);
        }

        /* Browser chrome bar */
        .pf-chrome {
          display:flex; align-items:center; gap:10px;
          padding:9px 14px; background:#2a2a3e; flex-shrink:0;
          border-bottom:1px solid rgba(255,255,255,.06);
        }
        .pf-dots { display:flex; gap:5px; flex-shrink:0; }
        .pf-dot {
          width:10px; height:10px; border-radius:50%;
          transition:filter .2s;
        }
        .pf-card:hover .pf-dot { filter:brightness(1.3); }

        /* URL bar */
        .pf-url {
          flex:1; background:rgba(255,255,255,.07); border-radius:6px;
          padding:4px 10px; font-size:10.5px; color:rgba(255,255,255,.45);
          font-family:'Inter',monospace; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
          border:1px solid rgba(255,255,255,.06);
          display:flex; align-items:center; gap:5px;
        }
        .pf-url-lock { color:rgba(45,212,191,.7); flex-shrink:0; }

        /* Screenshot area */
        .pf-screen {
          position:relative; overflow:hidden;
          aspect-ratio:16/10; flex-shrink:0;
        }
        .pf-screen img {
          width:100%; height:100%; object-fit:cover; object-position:top;
          transition:transform .6s cubic-bezier(.22,1,.36,1);
          display:block;
        }
        .pf-card:hover .pf-screen img { transform:translateY(-6%) scale(1.04); }

        /* Info footer — slides up on hover */
        .pf-footer {
          position:absolute; bottom:0; left:0; right:0;
          padding:14px 16px 16px;
          background:linear-gradient(to top, rgba(10,8,40,.95) 0%, rgba(10,8,40,.80) 70%, transparent 100%);
          transform:translateY(100%);
          transition:transform .36s cubic-bezier(.22,1,.36,1);
        }
        .pf-card:hover .pf-footer { transform:translateY(0); }

        /* Visit button */
        .pf-visit {
          display:inline-flex; align-items:center; gap:6px;
          padding:7px 16px; border-radius:999px; font-size:11px; font-weight:700;
          background:linear-gradient(135deg,#2dd4bf,#6366f1);
          color:#fff; text-decoration:none; font-family:'Poppins',sans-serif;
          letter-spacing:.06em; margin-top:10px;
          box-shadow:0 4px 14px rgba(99,102,241,.35);
          transition:opacity .2s, transform .2s;
        }
        .pf-visit:hover { opacity:.88; transform:scale(1.04); }
      `}</style>

      {/* ── Banner ── */}
      <section className="relative overflow-hidden flex items-center justify-center"
        style={{ minHeight:"clamp(280px,40vh,420px)", fontFamily:"'Inter',sans-serif" }}>
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=85"
          alt="Our Portfolio"
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
              Our Portfolio
            </span>
          </nav>
          <h1 className="font-extrabold leading-[1.08] text-white mb-4"
            style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(2rem,5vw,3.6rem)" }}>
            Our{" "}
            <span style={{ background:"linear-gradient(120deg,#2dd4bf,#6366f1,#a855f7)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              Portfolio
            </span>
          </h1>
          <div className="mx-auto h-[3px] w-16 rounded-full"
            style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
          style={{ background:"linear-gradient(to bottom,transparent,rgba(4,5,24,.55))" }} />
      </section>

      {/* ── Portfolio Section ── */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
        style={{ background:"linear-gradient(155deg,#f4f8ff 0%,#ffffff 50%,#f0f4ff 100%)", fontFamily:"'Inter',sans-serif" }}>

        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"radial-gradient(rgba(99,102,241,.04) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />
        <div className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(45,212,191,.07),transparent 65%)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 xl:px-28">

          {/* Header + Filters row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-4"
                style={{ background:"rgba(45,212,191,.09)", border:"1px solid rgba(45,212,191,.26)" }}>
                <span className="pf-ping w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
                <span className="text-[10px] font-bold uppercase tracking-[.22em]"
                  style={{ color:"#0d9488", fontFamily:"'Poppins',sans-serif" }}>
                  Our Work
                </span>
              </div>
              <h2 className="font-extrabold leading-[1.10]"
                style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.65rem,3.5vw,2.8rem)", color:"#0c1230" }}>
                Work We Are{" "}
                <span className="pf-hl">Proud Of</span>
              </h2>
              <div className="mt-3 h-[3px] w-14 rounded-full"
                style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {TABS.map(tab => (
                <button key={tab}
                  className={`pf-pill${active === tab ? " active" : ""}`}
                  onClick={() => setActive(tab)}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Count label */}
          <p className="text-[12.5px] font-semibold mb-8"
            style={{ color:"#94a3b8", fontFamily:"'Poppins',sans-serif" }}>
            Showing <span style={{ color:"#4f46e5" }}>{filtered.length}</span> of {data.length} projects
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-6">
            {filtered.map((item, i) => {
              const domain = item.link.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
              return (
                <div key={i} className="pf-card" style={{ animationDelay:`${i * 40}ms` }}>

                  {/* ── Browser chrome ── */}
                  <div className="pf-chrome">
                    <div className="pf-dots">
                      <span className="pf-dot" style={{ background:"#ff5f57" }} />
                      <span className="pf-dot" style={{ background:"#febc2e" }} />
                      <span className="pf-dot" style={{ background:"#28c840" }} />
                    </div>
                    <div className="pf-url">
                      <svg className="pf-url-lock" width="9" height="10" viewBox="0 0 10 12" fill="none">
                        <rect x="1" y="5" width="8" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
                        <path d="M3 5V3.5a2 2 0 014 0V5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                      {domain}
                    </div>
                  </div>

                  {/* ── Screenshot ── */}
                  <div className="pf-screen">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
                      className="object-cover object-top"
                    />

                    {/* Hover footer */}
                    <div className="pf-footer">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {item.category.map(c => (
                          <span key={c}
                            className="text-[9px] font-bold uppercase tracking-[.10em] px-2 py-0.5 rounded-full"
                            style={{ background:"rgba(45,212,191,.18)", color:"#2dd4bf",
                              border:"1px solid rgba(45,212,191,.30)", fontFamily:"'Poppins',sans-serif" }}>
                            {c}
                          </span>
                        ))}
                      </div>
                      <h4 className="font-bold text-white leading-snug"
                        style={{ fontFamily:"'Poppins',sans-serif", fontSize:".92rem" }}>
                        {item.title}
                      </h4>
                      <p className="text-[11.5px] mt-0.5" style={{ color:"rgba(255,255,255,.55)" }}>
                        {item.subtitle}
                      </p>
                      <Link href={item.link} target="_blank" rel="noopener noreferrer" className="pf-visit">
                        Visit Site <FaExternalLinkAlt size={9} />
                      </Link>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 rounded-3xl p-8"
            style={{ background:"linear-gradient(135deg,rgba(45,212,191,.06),rgba(99,102,241,.06))",
              border:"1px solid rgba(99,102,241,.10)" }}>
            {[["5000+","Projects Delivered"],[yearsExperience,"Years Experience"],["50+","Industries"],["98%","Client Satisfaction"]].map(([n,l]) => (
              <div key={l} className="text-center">
                <p className="font-extrabold leading-none mb-1"
                  style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.5rem,2.5vw,2rem)",
                    background:"linear-gradient(135deg,#2dd4bf,#6366f1)",
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
                    display:"inline-block" }}>
                  {n}
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-[.14em]"
                  style={{ color:"#94a3b8", fontFamily:"'Poppins',sans-serif" }}>
                  {l}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <GetNewInsight />
    </>
  );
}
