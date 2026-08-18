"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";
import "swiper/css";

export default function PortfolioCarousel({ items }) {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      speed={4500}
      loop={true}
      spaceBetween={24}
      breakpoints={{
        320:  { slidesPerView: 1 },
        640:  { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1400: { slidesPerView: 4 },
      }}
      className="pf-swiper cursor-grab"
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          <div
            className="pf-card group relative rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,.07)", boxShadow: "0 8px 32px rgba(0,0,0,.35)" }}
          >
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="pf-card-img w-full object-cover"
              />
            </div>

            <div className="pf-overlay">
              <div>
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ fontFamily: "'Poppins',sans-serif", color: "#2dd4bf" }}
                >
                  {item.category}
                </span>
                <h3
                  className="text-white font-bold text-lg mt-1 leading-snug"
                  style={{ fontFamily: "'Poppins',sans-serif" }}
                >
                  {item.title}
                </h3>
              </div>
              {/* <Link href={item.link} target="_blank" rel="noopener noreferrer" className="pf-arrow" aria-label={`Visit ${item.title}`}>
                <ArrowUpRight size={17} />
              </Link> */}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
