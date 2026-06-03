"use client";
import React from "react";

import devops from "../Assets/digitalmarketing.webp";
import ChooseFuture from "../components/ChooseFuture";
import service1 from "../Assets/seoOne.webp";
import service2 from "../Assets/smo.webp";
import service3 from "../Assets/ppcOne.webp";
import service4 from "../Assets/cont.webp";
import Image from "next/image";
import { FaAngleRight, FaChevronRight, FaDotCircle } from "react-icons/fa";
import Counter from "../components/Counter";
import GetNewInsight from "../components/GetNewInsight";
import OverviewSection from "../components/OverviewSection";

const Marketing = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className="relative overflow-hidden bg-[#442a79] h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              Professional Digital Marketing Services
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify max-lg:text-base">
              <p>
                Digital marketing needs have changed over the years with today’s
                dynamic industry. It is always worthwhile to calibrate your
                digital strategy. As a towering Digital Marketing Agency in
                Chandigarh that has led to many successful digital campaigns, we
                ensure that our clients move from mere digital tactics to a
                well-crafted digital strategy. The trust levels are a direct
                result of unwavering commitment to innovative ideas, quality
                work, and time-bound deadlines. Our clients have realized
                through experience that our digital agency in Chandigarh is
                capable of unbiased judgment when it is time to create and
                launch an all-encompassing digital marketing campaign.
              </p>
            </div>
            <div className="flex gap-3 mt-5">
              <a
                href="/contact"
                className="flex items-center bg-[#dc3545] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700"
              >
                Quick Enquiry
              </a>
              <button className="flex items-center bg-dark-200 justify-center border text-white py-2 px-2  sm:px-8 font-heading ">
                <a href="tel:+917056937000">Call us - 7056937000</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Counter />

      <OverviewSection
        image={devops}
        imageAlt="Digital Marketing Services"
        badgeText="Digital Marketing Services"
        heading="Digital Marketing Services for"
        headingHighlight="Growing Your Company"
        paragraphs={[
          "Digital Marketing Agency is a lot like fishing — you need to wait patiently for the catch, only if there are fish in the first place. With the advent of internet, a new avenue for advertising and selling has opened up for marketers and advertisers.",
          "Although marketing and advertising on the internet is inexpensive, it is challenging. There is a whole lot of information available on the internet that your brand may get lost in the noise and clutter. Mere presence on social media cannot give you visibility in the virtual world.",
          "Future IT Touch Pvt. Ltd. provides result-driven digital marketing services that help businesses increase visibility, generate qualified leads, and build lasting brand awareness across all digital channels.",
        ]}
        ctaText="Request A Quote"
        ctaHref="/contact"
      />


     <div className="grid grid-cols-1 lg:grid-cols-7 gap-12 px-5 md:px-12 xl:px-28 pb-14">
  <div className="lg:col-span-4">
    <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-[#050748] leading-snug">
      Online Marketing Services Proven to Increase Leads, Sales, & Revenue
    </h4>

    <div className="text-[15px] md:text-[16px] lg:text-[17px] text-justify text-[#6a6a8e] mt-5 space-y-4">
      <p>
        More leads. More sales. More revenue. That's digital marketing services from Future IT Touch Pvt. Ltd. With a custom strategy, plus data-driven insights from IBM Watson and Google AI, we'll help your business impact the metrics that matter most, from traffic to revenue. Are you ready to see what our digital marketing services can do for your business? Chat with us by contacting us online or calling 705-693-7000!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
        <ul className="font-semibold space-y-2">
          <li># 800+ Mobile Delivered</li>
          <li># 200+ Team Strength</li>
          <li># User-Friendly Interface</li>
        </ul>
        <ul className="font-semibold space-y-2">
          <li># 400 Happy Clients</li>
          <li># 95% Repeat Business</li>
          <li># Quality Service UX</li>
        </ul>
      </div>
    </div>

    <a href="/contact">
      <button className="bg-gradient-to-r from-[#f92c8b] to-[#b02cd6] flex items-center mt-7 text-white px-6 py-3 md:py-4 text-sm md:text-base font-semibold rounded-full shadow-md hover:opacity-90 transition">
        Request A Quote <FaAngleRight className="ml-2 text-lg" />
      </button>
    </a>
  </div>

  <div className="lg:col-span-3">
    <p className="mb-6 text-[#050748] text-xl md:text-2xl font-bold">
      Advantages of Digital Marketing
    </p>
    <ul className="space-y-3 text-[15px] md:text-[16px] lg:text-xl text-[#6a6a8e]">
      <li className="flex gap-3 items-center">
        <FaDotCircle className="text-[#f92c8b]" />
        Strategize with The Valuable Data and Analytics
      </li>
      <li className="flex gap-3 items-center">
        <FaDotCircle className="text-[#f92c8b]" />
        Content Performance and Lead Generation
      </li>
      <li className="flex gap-3 items-center">
        <FaDotCircle className="text-[#f92c8b]" />
        Reduction in Cost and Raises Standards
      </li>
      <li className="flex gap-3 items-center">
        <FaDotCircle className="text-[#f92c8b]" />
        Improved Conversion Rates
      </li>
      <li className="flex gap-3 items-center">
        <FaDotCircle className="text-[#f92c8b]" />
        More Cost Effective Than Traditional Marketing
      </li>
      <li className="flex gap-3 items-center">
        <FaDotCircle className="text-[#f92c8b]" />
        Higher Revenues
      </li>
      <li className="flex gap-3 items-center">
        <FaDotCircle className="text-[#f92c8b]" />
        Higher ROI from Your Campaigns
      </li>
      <li className="flex gap-3 items-center">
        <FaDotCircle className="text-[#f92c8b]" />
        Earn People’s Trust and Build Brand Reputation
      </li>
      <li className="flex gap-3 items-center">
        <FaDotCircle className="text-[#f92c8b]" />
        Know All About Your Competitors
      </li>
    </ul>
  </div>
</div>


      <section className="service-section service-2 py-20">
        <div className="flex justify-center px-3">
          <div className="w-full lg:w-8/12">
            <div className="text-center">
              <span className="text-3xl lg:text-5xl font-bold text-[#e60072] uppercase">
                Our Services
              </span>
              <h2 className="text-lg  mt-4 mb-8">
                We think big and have hands in all leading technology platforms
                to provide you wide array of services.
              </h2>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1  gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  px-5 md:px-12 xl:px-28 my-10">
          <div className=" w-full  mb-8 lg:mb-0">
            <div className="flex max-lg:block   bg-[#e9ddff] rounded-lg shadow-lg py-7 px-5 gap-3">
              <div className="w-full">
                <Image
                  src={service1}
                  width={400}
                  height={400}
                  alt="SEO service illustration"
                  className="max-sm:mb-5"
                />
              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                  Search Engine Optimization
                </h4>
                <span className="text-lg">
                  If you are looking to grow your business nationwide, our
                  advanced skillset can deliver you just that. With high-end
                  tools and proven process, our experts can help you generate a
                  strong market position & drive more conversions.
                </span>
              </div>
            </div>
          </div>
          <div className=" w-full  mb-8 lg:mb-0">
            <div className="flex max-lg:block   bg-[#ffdadb] rounded-lg shadow-lg py-7 px-5 gap-3">
              <div className="w-full">
                <Image
                  src={service2}
                  width={400}
                  height={400}
                  alt="Social media marketing illustration"
                  className="max-sm:mb-5"
                />
              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                  Social Media Marketing
                </h4>
                <span className="text-lg">
                  The Social Media is a powerful platform to reach your
                  prospective customers . More than 70% of people are daily
                  active on the leading social media platforms like Facebook,
                  Twitter, LinkedIn.
                </span>
              </div>
            </div>
          </div>
          <div className=" w-full  mb-8 lg:mb-0">
            <div className="flex bg-[#d6edff] max-lg:block   rounded-lg shadow-lg py-7 px-5 gap-3">
              <div className="w-full">
                <Image
                  src={service3}
                  width={400}
                  height={400}
                  alt="Pay per click marketing illustration"
                  className="max-sm:mb-5"
                />
              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                  Pay per Click
                </h4>
                <span className="text-lg">
                  Cost-effective and measurable PPC marketing is a powerful way
                  to instantly improve your online visibility. Our result-driven
                  PPC service in India ensures that you get the highest returns
                  out of your campaigns.
                </span>
              </div>
            </div>
          </div>
          <div className=" w-full  mb-8 lg:mb-0">
            <div className="flex bg-[#ffede1] max-lg:block rounded-lg shadow-lg py-7 px-5 gap-3">
              <div className="w-full">
                <Image
                  src={service4}
                  width={400}
                  height={400}
                  alt="Content marketing illustration"
                  className="max-sm:mb-5"
                />
              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                  Content Marketing
                </h4>
                <span className="text-lg">
                  Our creative content marketing services are SEO-centric,
                  ROI-focussed and customer-driven. We create a well-defined,
                  goal-oriented strategy before plunging into full-fledged
                  content development and marketing.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-card mt-20 flex max-sm:block max-md:block justify-center items-center gap-5 px-5">
          <h3 className=" text-2xl sm:text-2xl md:text-3xl lg:text-4xl  ">
            Hire a {""}
            <span className="font-bold">Dedicated Developer</span>
          </h3>

          <a
            href="#"
            className="btn-outline float-right flex items-center border-2 border-black text-black px-8 py-2 font-poppins text-base bg-white shadow-md rounded-full  ml-2 hover:bg-gradient-to-r from-teal-400 to-indigo-700 hover:text-white hover:border-current "
          >
            Hire Now <FaAngleRight className="relative left-2" />
          </a>
        </div>
      </section>

      <ChooseFuture />

    <GetNewInsight/>
    </>
  );
};

export default Marketing;
