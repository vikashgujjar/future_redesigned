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
import { getHomePageContent, getWhyChooseContent, getFaqGroups, buildPageMetadata } from "./lib/cms";

const DEFAULT_METADATA = {
  title: "Future IT Touch Private Limited | Website Design, App Development & Digital Marketing",
  description:
    "Full-service IT company offering website design, mobile app development, digital marketing, cyber security, and software development. Get a free consultation today.",
};

export async function generateMetadata() {
  return buildPageMetadata("home", DEFAULT_METADATA, { alternates: { canonical: "/" } });
}

export default async function page() {
  const [home, whyChoose, faqGroups] = await Promise.all([
    getHomePageContent(),
    getWhyChooseContent(),
    getFaqGroups(),
  ]);
  const homepageFaq = faqGroups?.find((g) => g.key === "homepage");

  return (
    <div>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }]} />
      <HeroSection slides={home?.hero_slides} marqueeItems={home?.marquee_items} />
      <About />
      <Service services={home?.services_teaser} />
      <Portfolio />
      <WhyChoose
        heading={whyChoose?.heading}
        description={whyChoose?.description}
        description2={whyChoose?.description_2}
        features={whyChoose?.features}
        ctaHeading={whyChoose?.cta?.heading}
        ctaDescription={whyChoose?.cta?.description}
      />
      <HelpingBusiness
        heading={home?.helping_business?.heading}
        paragraphs={home?.helping_business?.paragraphs}
        stats={home?.helping_business?.stats}
        cards={home?.helping_business?.cards}
      />
      <Heromatterjs />
      <Testimonial />
      <DigitalMarketingService services={home?.digital_marketing_teaser} />
      <Faq items={homepageFaq?.items} />
      <Forms />
    </div>
  );
}
