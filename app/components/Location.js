"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./SwiperLocation.module.css";

const locations = [
  {
    country: "India",
    office: "Chandigarh Head Office",
    address: "SCO 54-56, 2nd Floor, Near Mukat Hospital, 34A Sector, Chandigarh, 160022",
    image: "/chandigarh.webp",
    alt: "Chandigarh Office",
    email: "info@futuretouch.in",
    phone: "+91-7056937000",
    phoneHref: "tel:+91-7056937000",
    flag: "🇮🇳",
    accent: { from: "#2dd4bf", to: "#06b6d4" },
  },
  {
    country: "India",
    office: "Bangalore Branch Office",
    address: "59, 2nd Floor, Paramahansa Yogananda Rd, Indiranagar, Bengaluru, Karnataka 560038",
    image: "/banglore.webp",
    alt: "Bangalore Office",
    email: "info@futuretouch.in",
    phone: "+91-8050080035",
    phoneHref: "tel:+91-8050080035",
    flag: "🇮🇳",
    accent: { from: "#6366f1", to: "#4f46e5" },
  },
  {
    country: "India",
    office: "Gujarat Head Office",
    address: "B-1307-1308, 13th Floor, IT Park, Digital Valley, Mota Varachha, Surat, Gujarat 394105",
    image: "/surat-location.webp",
    alt: "Gujarat Office",
    email: "info@futuretouch.in",
    phone: "+91-7056937000",
    phoneHref: "tel:+91-7056937000",
    flag: "🇮🇳",
    accent: { from: "#a855f7", to: "#7c3aed" },
  },
  {
    country: "United States",
    office: "Texas Branch Office",
    address: "1400 Avery Ranch Blvd, Ste C200, Austin, Texas – 78717",
    image: "/texas.webp",
    alt: "Texas Office",
    email: "info@futuretouch.in",
    phone: "+1-5126406568",
    phoneHref: "tel:+1-5126406568",
    flag: "🇺🇸",
    accent: { from: "#2dd4bf", to: "#6366f1" },
  },
  {
    country: "United Arab Emirates",
    office: "Dubai Branch Office",
    address: "RAKEZ Compass, Al Shohada Road, Al Hamra Industrial Zone – FZ, Ras Al Khaimah",
    image: "/dubai-location.webp",
    alt: "Dubai Office",
    email: "info@futuretouch.in",
    phone: "+971-58559552",
    phoneHref: "tel:+97158559552",
    flag: "🇦🇪",
    accent: { from: "#6366f1", to: "#a855f7" },
  },
];

function Location() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ background:"linear-gradient(150deg,#04071a 0%,#080e28 55%,#050b20 100%)",
        fontFamily:"'Inter',sans-serif" }}>

      {/* Decorative layer */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage:"radial-gradient(rgba(255,255,255,.045) 1px,transparent 1px)",
          backgroundSize:"28px 28px" }} />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(45,212,191,.12),transparent 65%)" }} />
      <div className="absolute -bottom-40 -left-40 w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(99,102,241,.12),transparent 65%)" }} />
      <div className="absolute left-0 right-0 pointer-events-none"
        style={{ top:"50%", height:"1px",
          background:"linear-gradient(90deg,transparent,rgba(45,212,191,.12),rgba(99,102,241,.10),transparent)" }} />

      <style>{`
        @keyframes locGrad { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes locPing  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }

        .loc-hl {
          background:linear-gradient(125deg,#2dd4bf,#6366f1,#a855f7);
          background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:locGrad 5s ease-in-out infinite;
        }
        .loc-ping { animation:locPing 2.4s ease-in-out infinite; }

        /* Card */
        .loc-card {
          background:rgba(255,255,255,.04);
          border:1px solid rgba(255,255,255,.09);
          border-radius:20px; overflow:hidden;
          transition:transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s, border-color .35s;
          display:flex; flex-direction:column;
        }
        .loc-card:hover {
          transform:translateY(-10px);
          border-color:rgba(255,255,255,.18);
          box-shadow:0 32px 64px rgba(0,0,0,.35), 0 0 0 1px rgba(45,212,191,.12);
        }

        /* Image wrapper */
        .loc-img { position:relative; overflow:hidden; flex-shrink:0; }
        .loc-img img { transition:transform .55s cubic-bezier(.22,1,.36,1); }
        .loc-card:hover .loc-img img { transform:scale(1.07); }

        /* Country chip */
        .loc-chip {
          position:absolute; top:12px; left:12px; z-index:10;
          display:inline-flex; align-items:center; gap:6px;
          padding:4px 11px; border-radius:999px;
          font-size:10.5px; font-weight:700; letter-spacing:.08em; text-transform:uppercase;
          color:#fff; backdrop-filter:blur(10px);
          background:rgba(255,255,255,.18); border:1px solid rgba(255,255,255,.25);
          font-family:'Poppins',sans-serif;
        }

        /* Card body */
        .loc-body { padding:20px 22px 24px; flex:1; display:flex; flex-direction:column; }

        /* Office title */
        .loc-office {
          font-family:'Poppins',sans-serif; font-weight:800;
          font-size:.98rem; color:#fff; margin-bottom:8px; line-height:1.3;
        }

        /* Address */
        .loc-addr {
          font-size:12.5px; line-height:1.75; color:rgba(255,255,255,.52);
          flex:1; margin-bottom:14px;
        }

        /* Divider */
        .loc-rule { height:1px; background:rgba(255,255,255,.08); margin-bottom:14px; }

        /* Contact link */
        .loc-link {
          display:flex; align-items:center; gap:8px;
          font-size:12px; color:rgba(255,255,255,.60);
          text-decoration:none; font-family:'Poppins',sans-serif; font-weight:500;
          transition:color .2s;
        }
        .loc-link:hover { color:#fff; }
        .loc-link-icon {
          width:26px; height:26px; border-radius:8px; flex-shrink:0;
          display:flex; align-items:center; justify-content:center;
        }

        /* Swiper dots override for dark bg */
        .loc-swiper .swiper-pagination-bullet {
          background:rgba(255,255,255,.30) !important;
        }
        .loc-swiper .swiper-pagination-bullet-active {
          background:linear-gradient(135deg,#2dd4bf,#6366f1) !important;
          background:#2dd4bf !important;
        }
      `}</style>

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-8 xl:px-16">

        {/* ── Section header ── */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-5"
            style={{ background:"rgba(45,212,191,.10)", border:"1px solid rgba(45,212,191,.28)" }}>
            <span className="loc-ping w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
            <span style={{ color:"#2dd4bf", fontFamily:"'Poppins',sans-serif",
              fontSize:"10px", fontWeight:700, letterSpacing:".22em", textTransform:"uppercase" }}>
              Future IT Touch · Global Presence
            </span>
          </div>
          <h2 className="font-extrabold mb-4"
            style={{ fontFamily:"'Poppins',sans-serif",
              fontSize:"clamp(1.65rem,3.5vw,2.6rem)", color:"#fff", lineHeight:1.10 }}>
            Our Office <span className="loc-hl">Locations</span>
          </h2>
          <div className="mx-auto h-[3px] w-14 rounded-full mb-5"
            style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
          <p style={{ fontSize:"13.5px", color:"rgba(255,255,255,.52)",
            maxWidth:480, margin:"0 auto", lineHeight:1.85 }}>
            With offices across India, the USA, and UAE — we're always close to our clients.
          </p>
        </div>

        {/* ── Swiper ── */}
        <Swiper
          className={`loc-swiper ${styles.swiper}`}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          spaceBetween={20}
          breakpoints={{
            0:    { slidesPerView: 1 },
            640:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          style={{ paddingBottom:"44px" }}
        >
          {locations.map((loc, i) => (
            <SwiperSlide key={i}>
              <div className="loc-card">
                {/* Top gradient strip */}
                <div style={{ height:3, background:`linear-gradient(90deg,${loc.accent.from},${loc.accent.to})`, flexShrink:0 }} />
                {/* Image */}
                <div className="loc-img">
                  <Image src={loc.image} alt={loc.alt} width={1000} height={300} className="object-cover h-60" />
                  {/* Dark overlay */}
                  <div className="absolute inset-0"
                    style={{ background:"linear-gradient(to top,rgba(4,5,24,.55) 0%,transparent 50%)" }} />
                  {/* Country chip */}
                  <div className="loc-chip">
                    <span>{loc.flag}</span>
                    {loc.country}
                  </div>
                </div>

                {/* Body */}
                <div className="loc-body">
                  <h4 className="loc-office">{loc.office}</h4>

                  <div className="flex items-start gap-2 mb-3">
                    <FaMapMarkerAlt size={11} style={{ color:loc.accent.from, marginTop:3, flexShrink:0 }} />
                    <p className="loc-addr">{loc.address}</p>
                  </div>

                  <div className="loc-rule" />

                  <div className="space-y-2.5">
                    <Link href={`mailto:${loc.email}`} className="loc-link">
                      <span className="loc-link-icon"
                        style={{ background:`linear-gradient(135deg,${loc.accent.from}22,${loc.accent.to}22)` }}>
                        <FaEnvelope size={11} style={{ color:loc.accent.from }} />
                      </span>
                      {loc.email}
                    </Link>
                    <Link href={loc.phoneHref} className="loc-link">
                      <span className="loc-link-icon"
                        style={{ background:`linear-gradient(135deg,${loc.accent.from}22,${loc.accent.to}22)` }}>
                        <FaPhoneAlt size={10} style={{ color:loc.accent.from }} />
                      </span>
                      {loc.phone}
                    </Link>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ── Stats strip ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          {[
            { num:"5", label:"Global Offices" },
            { num:"3", label:"Countries" },
            { num:"15+", label:"Years Active" },
            { num:"500+", label:"Projects Done" },
          ].map((s, i) => (
            <div key={i} className="text-center py-5 rounded-2xl"
              style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)" }}>
              <p className="font-extrabold mb-1"
                style={{ fontFamily:"'Poppins',sans-serif",
                  fontSize:"clamp(1.4rem,2.5vw,1.8rem)",
                  background:"linear-gradient(135deg,#2dd4bf,#6366f1)",
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                {s.num}
              </p>
              <p style={{ fontSize:"12px", color:"rgba(255,255,255,.45)",
                fontFamily:"'Poppins',sans-serif", fontWeight:600, letterSpacing:".06em" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Location;
