"use client";
import React from "react";
import Image from "next/image";
import {
  FaLightbulb,
  FaPaintBrush,
  FaMobileAlt,
  FaSearch,
  FaCode,
  FaLifeRing,
} from "react-icons/fa";

export default function HighPerformance() {
  const features = [
    {
      title: "Strategic Planning",
      description:
        "We begin by conducting detailed discovery meetings to understand your business objectives. During this phase, we align on goals, define project scope, and establish clear expectations. A comprehensive roadmap is created, covering budget, timelines, and deliverables. This ensures that everyone is on the same page before moving forward with the design and development process.",
      icon: "/images/HighPerformance/keyword-research.svg",
    },
    {
      title: "UI/UX Design Excellence",
      description:
        "Our team focuses on creating intuitive, visually appealing, and user-friendly interfaces. By leveraging research-driven design principles and user behavior insights, we deliver experiences that engage visitors, reduce friction, and increase conversion rates.",
      icon: "/images/HighPerformance/lead-focused.svg",
    },
    {
      title: "Responsive & Mobile-First Design",
      description:
        "In today's multi-device world, we prioritize mobile-first and responsive designs to ensure your website looks flawless across smartphones, tablets, and desktops. Every layout is optimized for performance, accessibility, and seamless user experience on all screen sizes.",
      icon: "/images/HighPerformance/on-page.svg",
    },
    {
      title: "SEO & Performance Optimization",
      description:
        "Beyond beautiful design, we optimize your website for search engines and performance. From fast-loading pages to structured content, metadata, and technical SEO practices, we help your website rank higher, attract quality traffic, and convert visitors into customers.",
      icon: "/images/HighPerformance/quality SEO.svg",
    },
    {
      title: "Custom Development Solutions",
      description:
        "Our development team brings your design to life using modern web technologies. We build scalable, secure, and feature-rich websites tailored to your unique business requirements, ensuring maintainability and long-term growth potential.",
      icon: "/images/HighPerformance/reporting.svg",
    },
    {
      title: "Continuous Support & Maintenance",
      description:
        "We offer ongoing support, updates, and maintenance to ensure your website remains secure, up-to-date, and performing optimally. Our proactive approach prevents downtime, resolves technical issues quickly, and allows your business to focus on growth without worrying about website management.",
      icon: "/images/HighPerformance/technical-SEO.svg",
    },
  ];

  return (
    <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
      <div className="text-3xl lg:text-4xl text-center space-y-2 md:space-y-4 mb-12">
        <h5 className="font-semibold text-indigo-600">
          Seamless Web Design Process We
        </h5>
        <h4 className="font-bold text-gray-900">
          Follow To Create High-Performance Websites!
        </h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8 mt-20">
        <div className="hidden lg:flex lg:col-span-2  justify-center items-start sticky top-0">
          <Image
            src="/Assets/performance.jpg"
            alt="High Performance"
            width={648} height={802} unoptimized
            className="w-full rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Features Column */}
        <div className="lg:col-span-3 grid grid-cols-1 gap-8 lg:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-4 p-6 border border-gray-200 rounded-xl bg-white shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex  -mt-14 bg-white justify-center items-center p-4 rounded w-20 h-20 bg-gradient-to-r border border-gray-400">
                <Image src={feature.icon} alt="" width={512} height={512} unoptimized />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h4>
              <p className="text-sm lg:text-base text-gray-700 text-justify">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
