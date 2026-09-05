"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FaqBlock({ data = {} }) {
  const { badge, heading, items = [] } = data;
  const [open, setOpen] = useState(0);
  if (!items.length) return null;

  return (
    <section className="bg-[#f8f9ff] py-20 px-5 sm:px-10 xl:px-16">
      <div className="max-w-[820px] mx-auto">
        <div className="text-center mb-10">
          {badge && <p className="text-[10px] font-bold uppercase tracking-[.2em] text-teal-600 mb-2">{badge}</p>}
          {heading && <h2 className="font-['Poppins',sans-serif] font-extrabold text-[#050748] text-2xl sm:text-3xl">{heading}</h2>}
        </div>
        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl border border-gray-100 bg-white overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-['Poppins',sans-serif] font-semibold text-[#050748] text-sm">{item.question}</span>
                <FaChevronDown className={`text-teal-500 text-xs flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <p className="px-5 pb-4 text-[#6a6a8e] text-sm leading-relaxed">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
