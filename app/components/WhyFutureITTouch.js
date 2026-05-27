"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { FaLongArrowAltDown } from "react-icons/fa";


export default function WhyFutureITTouch({ platforms = [], title }) {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visiblePlatforms = platforms.slice(0, visibleCount);

  return (
    <div className="whyBest my-8 mx-5 py-16 px-5 md:px-12 xl:px-28 rounded-3xl">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-extrabold text-white">{title}</h3>
      </div>

      {/* Mobile Swiper */}
      <div className="lg:hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{ 640: { slidesPerView: 2 } }}
        >
          {visiblePlatforms.map((elm, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white min-h-[350px] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col items-start text-start">
                <div className="bg-indigo-500 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  {elm.icon}
                </div>
                <h5 className="text-xl font-bold mb-2">{elm.title}</h5>
                <p className="text-gray-700 text-sm md:text-base text-justify">{elm.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid gap-8 md:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {visiblePlatforms.map((elm, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col items-start text-start"
          >
            <div className="bg-indigo-500 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              {elm.icon}
            </div>
            <h5 className="text-xl font-bold mb-2">{elm.title}</h5>
            <p className="text-gray-700 text-sm md:text-base text-justify">{elm.desc}</p>
          </div>
        ))}
      </div>

      {visibleCount < platforms.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-indigo-600 flex items-center justify-center gap-x-1 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
          >
            Load More <FaLongArrowAltDown className="animate-bounce mt-2" />

          </button>
        </div>
      )}
    </div>
  );
}
