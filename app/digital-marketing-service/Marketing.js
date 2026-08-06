"use client";
import devops from "../Assets/digitalmarketing.webp";
import CommonServicePage from "../components/CommonServicePage";
import {
  FaBullhorn, FaSearch, FaChartLine, FaEnvelope, FaShareAlt, FaGoogle, FaMousePointer,
} from "react-icons/fa";

const features = [
  {
    title: "Search Engine Optimization",
    description:
      "We craft data-driven SEO strategies that increase your organic search rankings, drive qualified traffic, and deliver measurable ROI. From technical audits to on-page optimization and high-authority link building, every action is aimed at boosting your long-term visibility on Google and Bing.",
    icon: <FaSearch />,
  },
  {
    title: "Pay-Per-Click Advertising",
    description:
      "Our certified Google Ads specialists design high-converting PPC campaigns that target the right audience at the right time. We manage budgets efficiently, run A/B tests, and continuously optimize bids and creatives to ensure you get maximum return on your ad spend.",
    icon: <FaGoogle />,
  },
  {
    title: "Social Media Marketing",
    description:
      "We build and manage your brand presence across all major social media platforms — Facebook, Instagram, LinkedIn, and Twitter. Our team crafts compelling content calendars, engages your audience, and runs targeted ad campaigns that turn followers into loyal customers.",
    icon: <FaShareAlt />,
  },
  {
    title: "Email Marketing",
    description:
      "Leverage the power of personalized email campaigns to nurture leads, re-engage existing customers, and drive repeat purchases. We design beautifully crafted emails with strong CTAs, automated sequences, and detailed analytics to maximize open rates and conversions.",
    icon: <FaEnvelope />,
  },
  {
    title: "Content Marketing",
    description:
      "Our content marketing experts create high-quality blogs, infographics, videos, and whitepapers that educate your audience and position your brand as an industry authority. Every piece of content is strategically crafted to attract, engage, and convert your target audience.",
    icon: <FaBullhorn />,
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "Getting traffic is only half the battle. We analyze user behavior, conduct A/B testing, and optimize landing pages to ensure visitors convert into leads and customers. Our CRO strategies help you extract more value from your existing traffic without increasing ad spend.",
    icon: <FaMousePointer />,
  },
  {
    title: "Analytics & Performance Reporting",
    description:
      "We provide detailed, transparent reports covering all key performance metrics — traffic, conversions, ROI, and channel performance. Our data-driven approach ensures every marketing decision is backed by real insights, helping you understand what's working and where to invest more.",
    icon: <FaChartLine />,
  },
];

const bizCards = [
  {
    title: "Proven ROI-Driven Strategies",
    desc: "Every campaign we run is tied to measurable outcomes. We set clear KPIs from the start and optimize relentlessly to deliver the highest possible return on your marketing investment.",
    icons: <FaChartLine className="text-white w-8 h-8" />,
  },
  {
    title: "Full-Funnel Marketing Coverage",
    desc: "From awareness to conversion, we cover every stage of the customer journey — ensuring no lead is left behind and every touchpoint reinforces your brand message.",
    icons: <FaBullhorn className="text-white w-8 h-8" />,
  },
  {
    title: "Data-First Decision Making",
    desc: "Our strategies are powered by real-time analytics, customer insights, and market research. We let the data tell us where to invest for maximum impact and growth.",
    icons: <FaGoogle className="text-white w-8 h-8" />,
  },
  {
    title: "Dedicated Marketing Team",
    desc: "You get a team of specialists — SEO experts, PPC managers, content writers, and social media strategists — all working in sync to grow your digital presence.",
    icons: <FaSearch className="text-white w-8 h-8" />,
  },
];

const sliderCards = [
  {
    count: "3x",
    title: "SEO Ranking Boost",
    desc: "Achieved top-3 Google rankings for competitive keywords within 4 months through technical SEO and content optimization.",
    image: "/Assets/stock/photo-1460925895917-afdab827c52f.webp",
  },
  {
    count: "40%",
    title: "PPC Campaign Success",
    desc: "Reduced cost-per-click by 40% while tripling lead volume for a B2B SaaS client through targeted audience segmentation.",
    image: "/Assets/stock/photo-1611162617474-5b21e879e113.webp",
  },
  {
    count: "250%",
    title: "Social Media Growth",
    desc: "Grew a client's Instagram following by 250% in 6 months with engaging content and strategic influencer partnerships.",
    image: "/Assets/stock/photo-1432888498266-38ffec3eaf0a.webp",
  },
  {
    count: "38%",
    title: "Email Campaign Results",
    desc: "Delivered a 38% open rate and 12% click-through rate for an e-commerce email re-engagement campaign.",
    image: "/Assets/stock/photo-1586864387967-d02ef85d93e8.webp",
  },
];

const platforms = [
  { icon: <FaGoogle className="text-white w-6 h-6" />, title: "Google Analytics & Ads", desc: "We leverage Google's ecosystem for targeted advertising, conversion tracking, and campaign optimization to maximize your ROI." },
  { icon: <FaSearch className="text-white w-6 h-6" />, title: "SEO Tools (Ahrefs, Semrush)", desc: "Industry-leading platforms for keyword research, rank tracking, backlink analysis, and in-depth competitor intelligence." },
  { icon: <FaShareAlt className="text-white w-6 h-6" />, title: "Social Media Advertising", desc: "High-performing paid campaigns across Facebook, Instagram, LinkedIn, and Twitter — reaching your exact audience at scale." },
  { icon: <FaEnvelope className="text-white w-6 h-6" />, title: "Email Marketing (HubSpot, Mailchimp)", desc: "Automated, high-converting email sequences to nurture leads, retain customers, and drive repeat purchases." },
  { icon: <FaChartLine className="text-white w-6 h-6" />, title: "Analytics & Reporting", desc: "Comprehensive dashboards covering traffic, conversions, and channel ROI — every decision backed by real-time data." },
  { icon: <FaMousePointer className="text-white w-6 h-6" />, title: "CRO & Landing Pages", desc: "A/B testing and behavioral analysis to optimize your funnels and turn more visitors into paying customers." },
];

const faqData = [
  {
    title: "What digital marketing services do you offer?",
    description:
      "We offer a comprehensive suite of digital marketing services including SEO, PPC advertising, social media marketing, content marketing, email marketing, and conversion rate optimization — all tailored to your business goals.",
  },
  {
    title: "How long does it take to see results from digital marketing?",
    description:
      "SEO typically shows meaningful results within 3–6 months, while PPC and social ads can generate leads within days of launching. We set clear timelines and milestones for every campaign.",
  },
  {
    title: "Do you provide monthly performance reports?",
    description:
      "Yes. We provide detailed monthly reports covering traffic, rankings, conversions, ad performance, and ROI. We also schedule regular review calls to walk you through the data.",
  },
  {
    title: "Can you handle both B2B and B2C digital marketing?",
    description:
      "Absolutely. We have extensive experience running successful campaigns for both B2B and B2C businesses across industries including retail, healthcare, education, finance, and technology.",
  },
  {
    title: "What is the minimum budget required for PPC campaigns?",
    description:
      "There is no fixed minimum, but we generally recommend a starting ad budget of at least ₹15,000/month for meaningful results. We work within your budget to maximize impact and efficiency.",
  },
];

const techCategories = [
  {
    title: "Analytics & SEO",
    techs: [
      { name: "Google Analytics", icon: "https://cdn.simpleicons.org/googleanalytics" },
      { name: "Google Search Console", icon: "https://cdn.simpleicons.org/googlesearchconsole" },
      { name: "Ahrefs", icon: "https://cdn.simpleicons.org/ahrefs" },
      { name: "Semrush", icon: "https://cdn.simpleicons.org/semrush" },
    ],
  },
  {
    title: "Advertising",
    techs: [
      { name: "Google Ads", icon: "https://cdn.simpleicons.org/googleads" },
      { name: "Meta Ads", icon: "https://cdn.simpleicons.org/meta" },
      { name: "LinkedIn Ads", icon: "https://cdn.simpleicons.org/linkedin" },
    ],
  },
  {
    title: "Social & Email",
    techs: [
      { name: "HubSpot", icon: "https://cdn.simpleicons.org/hubspot" },
      { name: "Mailchimp", icon: "https://cdn.simpleicons.org/mailchimp" },
      { name: "Buffer", icon: "https://cdn.simpleicons.org/buffer" },
      { name: "Hootsuite", icon: "https://cdn.simpleicons.org/hootsuite" },
    ],
  },
  {
    title: "Content & CMS",
    techs: [
      { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress" },
      { name: "Webflow", icon: "https://cdn.simpleicons.org/webflow" },
      { name: "Canva", icon: "https://cdn.simpleicons.org/canva" },
    ],
  },
];

const Marketing = () => {
  return (
    <CommonServicePage
      bannerImg={devops}
      bannerTitle="Professional Digital Marketing Services"
      bannerDesc="Digital marketing needs have changed over the years with today's dynamic industry. As a towering Digital Marketing Agency in Chandigarh that has led many successful digital campaigns, we ensure that our clients move from mere digital tactics to a well-crafted digital strategy. Our unwavering commitment to innovative ideas, quality work, and time-bound deadlines has built lasting trust with our clients."
      overviewImage="/Assets/stock/photo-1460925895917-afdab827c52f.webp"
      overviewImageAlt="Digital Marketing Services"
      overviewBadge="Digital Marketing Services"
      overviewHeading="Digital Marketing Services for"
      overviewHighlight="Growing Your Company"
      overviewParagraphs={[
        "Digital marketing is like fishing — you need the right tools, the right location, and a proven strategy. With the rise of the internet, a vast new avenue for advertising and selling has opened up for businesses of every size.",
        "Despite being cost-effective, digital marketing is highly competitive. Your brand can easily get lost in the noise. Mere presence on social media is not enough — you need a strategic, data-driven approach.",
        "Future IT Touch Pvt. Ltd. provides result-driven digital marketing services that help businesses increase visibility, generate qualified leads, and build lasting brand awareness across all digital channels.",
      ]}
      overviewCtaText="Request A Quote"
      featuresBadge="Our Digital Marketing Services"
      featuresTitle="Data-Driven Strategies That"
      featuresTitleHighlight="Deliver Real Results"
      featuresStickyImg="/Assets/stock/photo-1432888498266-38ffec3eaf0a.webp"
      features={features}
      bizBadge="Our Advantages"
      bizHeading="Why Choose Us for"
      bizHighlight="Digital Marketing"
      bizCards={bizCards}
      sliderTitle="Delivering Impactful Digital Marketing Campaigns"
      sliderCards={sliderCards}
      platformsTitle="Marketing Platforms We Use"
      platforms={platforms}
      techBadge="Our Marketing Tech Stack"
      techHeading="Technologies"
      techHeadingHighlight="We Market With"
      techDescription="We leverage the most powerful marketing tools and platforms to plan, execute, and measure campaigns that drive measurable business growth."
      techCategories={techCategories}
      faqTitle="Frequently Asked Questions — Digital Marketing"
      faqData={faqData}
    />
  );
};

export default Marketing;
