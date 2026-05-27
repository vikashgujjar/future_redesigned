"use client"
import Image from "next/image";
import realestate from "../Assets/teama.svg";
import tour from "../Assets/link.svg";
import education from "../Assets/tech.svg";
import transport from "../Assets/hi.svg";
import event from "../Assets/badge.svg";
import ecommerce from "../Assets/tin.svg";
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import Login from "./Login";

const ChooseFuture = () => {
  const industriesData = [
    { icon: realestate, title: "Reliable Service. In House Team" },
    { icon: tour, title: "Trusted by People Like You" },
    { icon: education, title: "Complete Technical Competency" },
    { icon: transport, title: "Friendly & Cordial in Nature" },
    { icon: event, title: "Excellent Quality Delivered on Time" },
    { icon: ecommerce, title: "Effective & Continuous Communication" },
  ];

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  return (
    <div className="bg-gradient-to-b from-[#ffe2e2] to-[#fff9f4] py-20 px-5 md:px-12 xl:px-28">
      {/* Header */}
      <div className="text-center">
        <span className="text-xl font-semibold bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest">
          We Deliver Our Best
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
          Why Choose Future IT Touch Pvt. Ltd.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 lg:mt-16">
        {industriesData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-[#d4f0ff] rounded-lg shadow-md p-6 flex items-center gap-5 hover:shadow-lg transition"
          >
            <Image
              src={item.icon}
              width={56}
              height={56}
              alt={item.title}
              className="w-14 h-14"
            />
            <h6 className="font-bold text-lg md:text-xl text-[#050748]">
              {item.title}
            </h6>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden mt-16 rounded-2xl px-8 py-10 lg:px-14 lg:py-12
        flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left"
        style={{ background: "linear-gradient(135deg, #0d9488 0%, #4338ca 60%, #4f46e5 100%)" }}>

        {/* ── Decorative circles — same pattern as mega-menu promo card ── */}
        {/* Large circle — top right overflow */}
        <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,.10)" }} />
        {/* Medium circle — bottom left overflow */}
        <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,.09)" }} />
        {/* Small floater — mid right */}
        <div className="absolute top-1/2 -translate-y-1/2 right-8 w-14 h-14 rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,.06)" }} />
        {/* Tiny accent — upper-left third */}
        <div className="absolute top-5 left-[36%] w-8 h-8 rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,.07)" }} />
        {/* Extra ring hint — lower center */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,.05)" }} />

        {/* Heading */}
        <h3 className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold text-white"
          style={{ fontFamily: "’Poppins’, sans-serif" }}>
          Let&apos;s Start{" "}
          <span style={{ color: "#7dd3fa" }}>New Project</span>{" "}
          Together
        </h3>

        {/* Button */}
        <button
          onClick={handleButtonClick}
          className="relative z-10 flex-shrink-0 flex items-center gap-2 bg-white font-semibold
            px-8 py-3 rounded-full shadow-lg hover:bg-white/90 hover:shadow-xl
            hover:-translate-y-0.5 transition-all duration-200"
          style={{ fontFamily: "’Poppins’, sans-serif", color: "#4338ca" }}
        >
          Request A Quote <FaAngleRight />
        </button>
      </div>

      {isPopupOpen && (
        <Login handleClosePopup={handleClosePopup} isPopupOpen={isPopupOpen} />
      )}
    </div>
  );
};

export default ChooseFuture;
