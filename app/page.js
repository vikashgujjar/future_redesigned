import React from "react";
import HeroSection from "./components/HeroSection";
import BreadcrumbSchema from "./components/schema/BreadcrumbSchema";
import About from "./components/About";
import Service from "./components/Service";
import WhyChoose from "./components/WhyChoose";
import HelpingBusiness from "./components/HelpingBusiness";
import Testimonial from "./components/Testimonial";
import Forms from "./components/Forms";
import Faq from "./components/Faq";
import DigitalMarketingService from "./components/DigitalMarketingService";
import Portfolio from "./components/Portfolio";
import Heromatterjs from "./components/Heromatterjs";

export const metadata = {
  title: "Future IT Touch Private Limited | Website Design, App Development & Digital Marketing",
  description:
    "Full-service IT company offering website design, mobile app development, digital marketing, cyber security, and software development. Get a free consultation today.",
  alternates: {
    canonical: "/",
  },
};

export default function page() {
  return (
    <div>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }]} />
      <HeroSection />
      <About />
      <Service />
      <Portfolio />
      <WhyChoose />
      <HelpingBusiness />
      <Heromatterjs />
      <Testimonial />
      <DigitalMarketingService />
      <Faq />
      <Forms />
    </div>
  );
}
