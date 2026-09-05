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
import { getHomePageContent, getWhyChooseContent, getFaqGroups, getPortfolioItems, buildPageMetadata } from "./lib/cms";
import { isSectionDisabled } from "./lib/loadServicePage";

const DEFAULT_METADATA = {
  title: "Future IT Touch Private Limited | Website Design, App Development & Digital Marketing",
  description:
    "Full-service IT company offering website design, mobile app development, digital marketing, cyber security, and software development. Get a free consultation today.",
};

export async function generateMetadata() {
  return buildPageMetadata("home", DEFAULT_METADATA, { alternates: { canonical: "/" } });
}

export default async function page() {
  const [home, whyChoose, faqGroups, portfolioItems] = await Promise.all([
    getHomePageContent(),
    getWhyChooseContent(),
    getFaqGroups(),
    getPortfolioItems(),
  ]);
  const homepageFaq = faqGroups?.find((g) => g.key === "homepage");
  // The homepage teaser shows a curated subset — admin-marked "featured"
  // items if any exist, otherwise the 10 most recently ordered items, so a
  // fresh CMS with nothing marked featured yet still shows something real.
  const featuredPortfolio = (portfolioItems || []).filter((p) => p.is_featured);
  const portfolioTeaser = (featuredPortfolio.length ? featuredPortfolio : (portfolioItems || []).slice(0, 10))
    .map((p) => ({ link: p.link, image: p.image, title: p.title, category: p.categories?.[0] || "" }));

  // Final word on section visibility — an admin's disable choice always wins,
  // regardless of whether CMS/local-fallback content exists for that section.
  const enabledSections = home?.enabled_sections;
  const show = (key) => !isSectionDisabled(enabledSections, key);

  return (
    <div>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }]} />
      {show("hero") && <HeroSection slides={home?.hero_slides} marqueeItems={home?.marquee_items} />}
      {show("about") && <About cms={home?.about} />}
      {show("services") && (
        <Service
          services={home?.services_teaser}
          badge={home?.services_chrome?.badge}
          heading={home?.services_chrome?.heading}
          headingHighlight={home?.services_chrome?.heading_highlight}
          learnMoreText={home?.services_chrome?.learn_more_text}
          ctaText={home?.services_chrome?.cta_text}
          ctaUrl={home?.services_chrome?.cta_url}
        />
      )}
      {show("portfolio") && (
        <Portfolio
          items={portfolioTeaser}
          badge={home?.portfolio_chrome?.badge}
          heading={home?.portfolio_chrome?.heading}
          description={home?.portfolio_chrome?.description}
          ctaText={home?.portfolio_chrome?.cta_text}
          ctaUrl={home?.portfolio_chrome?.cta_url}
        />
      )}
      {show("why_choose") && (
        <WhyChoose
          badge={whyChoose?.badge}
          heading={whyChoose?.heading}
          description={whyChoose?.description}
          description2={whyChoose?.description_2}
          features={whyChoose?.features}
          ctaHeading={whyChoose?.cta?.heading}
          ctaDescription={whyChoose?.cta?.description}
          ctaButtonText={whyChoose?.cta?.button_text}
          image={whyChoose?.image}
          imageAlt={whyChoose?.image_alt}
        />
      )}
      {show("helping_business") && (
        <HelpingBusiness
          badge={home?.helping_business?.badge}
          heading={home?.helping_business?.heading}
          paragraphs={home?.helping_business?.paragraphs}
          stats={home?.helping_business?.stats}
          cards={home?.helping_business?.cards}
        />
      )}
      {show("skills") && <Heromatterjs cms={home?.skills} />}
      {show("testimonials") && <Testimonial cms={home?.testimonials_chrome} />}
      {show("digital_marketing") && (
        <DigitalMarketingService
          services={home?.digital_marketing_teaser}
          badge={home?.digital_marketing_chrome?.badge}
          heading={home?.digital_marketing_chrome?.heading}
          headingHighlight={home?.digital_marketing_chrome?.heading_highlight}
        />
      )}
      {show("faq") && (
        <Faq
          badge={homepageFaq?.badge}
          heading={homepageFaq?.title}
          description={homepageFaq?.description}
          items={homepageFaq?.items}
        />
      )}
      {/* Forms.js — intentionally out of scope, always renders regardless of section toggles. */}
      <Forms />
    </div>
  );
}
