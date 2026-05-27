"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function FAQSection({ faqData = [], title }) {


  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-5 md:px-12 xl:px-28 py-10 md:py-12 lg:py-16 bg-gradient-to-r">
      <div className="">
       <div className="text-gray-900 text-center text-3xl lg:text-5xl   leading-snug ">
         <h5 className=" ">
          Frequently Asked Questions
        </h5>

        <h2 className="font-extrabold"> {title}</h2>

       </div>

    <div className="flex flex-col lg:flex-row  lg:items-center gap-4">
       <div className="w-full lg:w-[70%] mt-10 space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-lg p-4 transition-shadow hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <h4 className="font-bold text-lg">{faq.title}</h4>
                <span
                  className={`font-bold text-2xl transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <IoIosArrowDown />
                </span>
              </button>

              {/* Height animation using max-height */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96 mt-2" : "max-h-0 mt-0"
                }`}
              >
                <p className="text-gray-700">{faq.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full hidden md:block  lg:w-[30%] sticky top-0">
          <img src="/Assets/faqimg.webp" alt="faqq" />
        </div>
    </div>

       
      </div>
    </div>
  );
}
