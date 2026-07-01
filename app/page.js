import React from "react";
import HeroSection from "./components/HeroSection";
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
import AboutSection from "./components/AboutNew";
import HeroSectionNew from "./components/HeroSectionNew";
import ServiceNew from "./components/ServiceNew";

export default function page() {
  return (
    <div>
      <HeroSection />
      {/* <HeroSectionNew/> */}
      {/* <AboutSection /> */}
      <About />
      <Service />
      {/* <ServiceNew/> */}
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
