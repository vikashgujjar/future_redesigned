"use client";
import React from "react";

import Image from "next/image";
import CommonBanner from "../components/CommonBanner";

import Forms from "../components/Forms";
import Testimonial from "../components/Testimonial";
import WebPageSchema from "../components/schema/WebPageSchema";
import BreadcrumbSchema from "../components/schema/BreadcrumbSchema";
export default function AboutShow() {
  return (
    <div>
      <WebPageSchema
        type="AboutPage"
        name="About Future IT Touch Private Limited"
        description="Future Touch is a Website Development and Digital Marketing Company founded by Vinod Tanwar."
        path="/about"
      />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }]} />
      <CommonBanner title="About Us" breadcrumb="About Us" />

      <div className="hero-about block mt-10 sm:mt-10 md:mt-16 lg:mt-20 px-5  relative sm:px-5 md:px-10 lg:px-20  sm:block md:block lg:flex ">
        <div className="relative flex w-11/12 sm:w-11/12 md:full lg:w-1/2 ">
          <div className="w-60 h-32 sm:h-32 md:h-40 lg:h-60 bg-teal-400 rounded-full padding-about relative zoom-pulse">
            <Image
              className="w-full h-full p-2 sm:p-2 md:p-3 lg:p-5 bg-white rounded-full object-cover "
              src={"/Assets/vinod.webp"}
              width={400}
              height={400}
              alt="Vinod Tanwar"
            />
            <Image
              className="shape-2 top-45 left-4  absolute zoom-pluse rotate-[150deg]"
              src={"/Assets/about2-shape-1.webp"}
              width={100}
              height={100}
              alt="About Shape"
            />
          </div>
          <div className="relative top-10 sm:top-10 md:top-16 lg:top-20 left-48 sm:left-48 md:left-52 lg:left-1/2">
            <div className="about-circle-box absolute bg-circle">
              <div className="ab-circle">
                <svg
                  className="shape-circle"
                  viewBox="0 0 100 100"
                  width="100"
                  height="100"
                >
                  <defs>
                    <path
                      id="circle"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    ></path>
                  </defs>
                  <text fontSize="15">
                    <textPath xlinkHref="#circle" className="shape-1">
                      Future IT Touch Pvt. Ltd. Future I
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-96 h-48 sm:h-48 md:h-52 lg:h-96 bg-gradient-to-r from-teal-400 to-indigo-700 rounded-full padding-about top-40 zoom-pulse relative">
            <Image
              className="shape-1 h-60 w-60 -z-50 absolute "
              src={"/Assets/about2-shape-1.webp"}
              width={400}
              height={400}
              alt="About Shape"
            />

            <Image
              className="w-full h-full  p-3 sm:p-3 md:p-3 lg:p-5 bg-white rounded-full object-cover"
              src={"/Assets/h2-about-img-right.webp"}
              width={400}
              height={400}
              alt="About Right"
            />
          </div>
          <Image
            className="hidden sm:block md:block lg:block absolute zoom-pluse  bottom-0 w-40 left-40"
            src={"/Assets/h2-about-bg-1.webp"}
            width={400}
            height={400}
            alt="About BG 1"
          />
        </div>

        <div className="w-full sm:w-full md:full lg:w-1/2 mt-48 sm:mt-48 md:mt-48 lg:mt-0 pl-0 sm:pl-0 md:pl-5 lg:pl-0">
          <Image
            className="hidden sm:block md:block lg:block absolute top-10 w-28 right-20 "
            src={"/Assets/h2-about-bg-2.webp"}
            width={400}
            height={400}
            alt="About BG 2"
          />
          <span
            className=" text-4xl mb-8 bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest"
            style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
          >
            About Us
          </span>
          <h3 className="text-3xl  sm:text-3xl md:text-4xl lg:text-5xl my-3 sm:my-3 md:my-4 lg:my-5   font-bold">
            About{" "}
            <span className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl  mb-4 sm:mb-4 md:mb-6 lg:mb-8  font-bold bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text">
              Agency
            </span>
          </h3>

          <p className="text-lg mb-8 font-medium mt-8 text-[#727272] text-justify">
            We’re a boutique web and mobile app development agency based in
            Chandigarh. Since 2010, we’ve been helping organisations reimagine
            their business by delivering thoughtful bespoke IT solutions. We
            bring passion to our job every single day and act more as a
            technology partner to our clients than an IT vendor. Our reputation
            lies in the success of our clients. We don’t believe in excuses and
            take pride to put our name on our work. We’ve expanded our presence
            globally and won clients from foreign markets including USA, Canada,
            Middle East and Australia.
          </p>
          <p className="mb-9 text-lg font-medium text-[#727272] text-justify">
            Vinod Tanwar is the co-founder & CEO of Future IT Touch Pvt. Ltd..
            He’s a self-starter and oversees the business development. Vinod
            Tanwar is the best person to talk to if you want to know what’s
            happening in the tech world. He’s a dreamer and a doer. He loves the
            idea of getting to know clients and thinking about how to solve
            their challenges. He gets really excited about the prospect of
            crafting solutions for them!
          </p>
        </div>
      </div>

      <Forms />
      <Testimonial />
    </div>
  );
}
