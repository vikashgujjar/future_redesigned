"use client";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./SwiperLocation.module.css";

export default function LocationOfficesCarousel({ locations }) {
  return (
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
  );
}
