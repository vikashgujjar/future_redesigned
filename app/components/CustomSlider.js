"use client";
import React, { useState, useEffect } from "react";

export default function CustomSlider({ cards = [], title }) {

  const [open, setOpen] = useState(2); 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCard = (index) => {
    if (isMobile) {
      setOpen((prev) => (prev === index ? null : index));
    } else {
      setOpen(index);
    }
  };

  const resetCard = () => {
    if (!isMobile) setOpen(2);
  };

  return (
    <div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
      {/* Heading */}
          <h4 className="text-3xl md:text-4xl lg:text-5xl text-center font-extrabold leading-snug text-gray-900 max-w-4xl mx-auto">
           {title} {" "}
        <span className="text-indigo-600">Future IT Touch Pvt. Ltd.</span>
      </h4>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center mt-14 gap-6 overflow-x-auto md:overflow-visible">
        {cards.map((card, index) => (
          <div
            key={card.title}
            onMouseEnter={() => !isMobile && toggleCard(index)}
            // onMouseLeave={resetCard}
            onClick={() => isMobile && toggleCard(index)}
            className={`relative rounded-2xl flex-shrink-0  md:min-h-[280px]   p-6 flex flex-col justify-start text-center lg:text-start cursor-pointer border transition-all duration-500 overflow-hidden ${
              open === index
                ? "h-full w-full lg:h-auto md:w-[250px] xl:w-[550px] border-indigo-300 shadow-xl"
                : "h-[70px] md:h-auto border-gray-200 w-full md:w-[70px] lg:w-[140px]  xl:w-[100px] hover:border-indigo-200 hover:shadow-lg"
            }`}
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/40 rounded-2xl transition-all duration-300"></div>

            {/* Text Content */}
            <div
              className={`relative  text-white transition-all duration-300 ${
                open === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2">
                {card.count}
              </h3>
              <h4 className="text-base md:text-lg font-semibold mb-2">
                {card.title}
              </h4>
              <p
                className={`text-xs md:text-sm transition-all duration-300 ${
                  open === index
                    ? "line-clamp-none opacity-100"
                    : "line-clamp-3 opacity-0"
                }`}
              >
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
