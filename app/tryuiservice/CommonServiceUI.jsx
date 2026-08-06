import React from "react";

import Image from "next/image";
import gm from "../Assets/gm.webp";
import d1 from "../Assets/d1.webp";
import d2 from "../Assets/portfolio-img-6.webp";
import { FaChevronRight } from "react-icons/fa";
import { businessData } from "../common/Service_comp";
import GetNewInsight from "../components/GetNewInsight";
import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import HighPerformance from "../components/HighPerformance";
import BuinessIdea from "../components/BuinessIdea";
import FAQSection from "../components/FAQSection";
import TurnYourBusiness from "../components/TurnYourBusiness";
import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";

const CommonServiceUI = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      <CommonBannerService imgSrc={gm} />

      <TechMarquee />

      <div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Small Accent Text */}
          <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
            Web Design Excellence
          </span>

          {/* Heading */}
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900">
            We Illuminate Your Online Presence
          </h4>

          {/* Subheading */}
          <p className="text-base md:text-lg text-gray-600">
            Partner with{" "}
            <span className="font-semibold text-indigo-600">
              Future IT Touch Pvt. Ltd.
            </span>
            for Web Design Services that engage & resonate with your audience.
          </p>

          {/* Main Description */}
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Are you ready to make a lasting impression in the digital world? Did
            you know that
            <span className="font-semibold text-gray-900">
              {" "}
              75% of users judge a company’s credibility
            </span>
            based on its website design? With over 1.8 billion websites online,
            how do you ensure yours stands out from the crowd? <br />
            <br />
            Enter{" "}
            <span className="font-semibold text-indigo-600">
              Future IT Touch Pvt. Ltd.’s Web Design Services
            </span>{" "}
            – your gateway to captivating online experiences. With our expertise
            and innovative approach, we transform ideas into visually stunning
            realities that leave a lasting impact.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition">
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      <HighPerformance />

      {/* faq  */}

      <TurnYourBusiness />

      <CustomSlider />

      <WhyFutureITTouch />

      <FAQSection />

      <GetNewInsight />
      {/* <BuinessIdea /> */}
    </>
  );
};

export default CommonServiceUI;
