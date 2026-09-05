"use client";
const cwd = "/Assets/stock/photo-1553877522-43269d4ea984.webp";
import featureImage from "../Assets/seo-new.webp";
import CommonServicePage from "../components/CommonServicePage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";
import { isSectionDisabled } from "../lib/loadServicePage";
import {
  FaGlobe, FaSearch, FaUserTie, FaFileAlt, FaListUl, FaBuilding,
  FaBullhorn, FaLaptopCode,
} from "react-icons/fa";

const features = [
    {
      title: "Website Analysis",
      description:
        "Using powerful SEO tools like SEMrush and Ahrefs, we thoroughly analyze your website to ensure it aligns with search engine algorithm standards. From checking and modifying URL structures to fixing indexation issues and optimizing sitemaps, we offer complete technical SEO solutions that enhance your site's visibility and performance.",
      icon: <FaGlobe />,
    },
    {
      title: "On-Page SEO",
      description:
        "We perform detailed keyword and competitor research to optimize your website's on-page elements. This includes improving content, meta tags, header tags, schema markup, robots.txt setup, image alt tags, and fixing broken links to ensure your pages are both search-engine and user-friendly.",
      icon: <FaSearch />,
    },
    {
      title: "Competitor Analysis",
      description:
        "Understanding your competitors' SEO strategies helps identify opportunities to outperform them. Our team studies your niche and competition closely to craft a data-driven SEO approach that positions your business ahead in the digital landscape.",
      icon: <FaUserTie />,
    },
    {
      title: "Content Marketing",
      description:
        "We create and promote high-quality, engaging content to build authority and attract backlinks. From blogs, infographics, and press releases to videos and social interactions, our content marketing strengthens your brand presence and drives referral traffic for long-term growth.",
      icon: <FaFileAlt />,
    },
    {
      title: "Keyword Research",
      description:
        "Our SEO experts conduct extensive keyword research to identify the most relevant and profitable terms for your business. We share keyword recommendations tailored to your goals and integrate them strategically into your on-page and off-page SEO efforts.",
      icon: <FaListUl />,
    },
    {
      title: "Set Up Business Listing",
      description:
        "We help your business appear in local searches by setting up and optimizing Google My Business profiles and listings on reputed online directories. This enhances your local SEO performance, improves visibility, and drives more targeted traffic to your website.",
      icon: <FaBuilding />,
    },
  ];

  const businessData = [
    {
      icons: <FaBullhorn className="text-white w-8 h-8" />,
      title: "Comprehensive Website Analysis",
      desc: "We perform detailed website audits using tools like SEMrush and Ahrefs to identify technical issues, check responsiveness, fix indexing problems, and improve your site's overall SEO performance.",
    },
    {
      icons: <FaSearch className="text-white w-8 h-8" />,
      title: "Strategic Keyword Targeting",
      desc: "We identify the most relevant and high-traffic keywords for your industry to ensure your website appears in front of the right audience. Our data-driven approach improves visibility and drives consistent organic growth.",
    },
    {
      icons: <FaLaptopCode className="text-white w-8 h-8" />,
      title: "On-Page & Technical SEO",
      desc: "We enhance your website's on-page structure — from meta tags and headings to schema markup and page speed — ensuring it aligns with Google's ranking algorithms for maximum search visibility.",
    },
  ];

  const cards = [
    {
      count: "1500+",
      title: "PPC Campaigns Successfully Executed",
      desc: "We've executed over 1500 result-driven PPC campaigns across Google, Facebook, YouTube, and LinkedIn. Each campaign is crafted to maximize reach, engagement, and ROI, ensuring high-quality leads and conversions.",
      image: "/Assets/stock/photo-1533750349088-cd871a92f312.webp",
    },
    {
      count: YEARS_EXPERIENCE_DISPLAY,
      title: "Years of PPC Expertise",
      desc: `With over ${YEARS_EXPERIENCE_DISPLAY} years of experience in PPC management, our team delivers data-driven strategies that optimize ad spend, improve campaign performance, and help businesses achieve measurable growth.`,
      image: "/Assets/stock/photo-1518186285589-2f7649de83e0.webp",
    },
    {
      count: "500+",
      title: "Satisfied Global Clients",
      desc: "Trusted by more than 500 brands worldwide, we manage PPC campaigns that increase visibility, attract ready-to-buy customers, and generate tangible ROI for businesses of all sizes.",
      image: "/Assets/stock/photo-1517245386807-bb43f82c33c4.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our focus on delivering high-performing campaigns has earned a 98% client satisfaction rate. We ensure transparent reporting, timely execution, and constant optimization for each client.",
      image: "/Assets/stock/photo-1553877522-43269d4ea984.webp",
    },
    {
      count: "24/7",
      title: "Ongoing Campaign Monitoring",
      desc: "Our PPC experts provide round-the-clock monitoring to optimize bids, tweak ads, and refine targeting strategies, ensuring your campaigns always perform at their peak.",
      image: "/Assets/stock/photo-1600857544200-b2f666a9a2ec.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaBullhorn className="text-white w-6 h-6" />,
      title: "Targeted Campaign Planning",
      desc: "We research keywords, demographics, and user behavior to design campaigns that reach the right audience with precision, improving ad relevance and ROI.",
    },
    {
      icon: <FaSearch className="text-white w-6 h-6" />,
      title: "Keyword & Ad Optimization",
      desc: "Our experts continually optimize keywords, bids, and ad copies to ensure your campaigns drive high-quality traffic and maximum conversions.",
    },
    {
      icon: <FaLaptopCode className="text-white w-6 h-6" />,
      title: "Landing Page Optimization",
      desc: "We design and optimize PPC landing pages to increase engagement and conversion rates, ensuring your investment generates measurable results.",
    },
    {
      icon: <FaFileAlt className="text-white w-6 h-6" />,
      title: "Paid Social Advertising",
      desc: "We run highly targeted social media PPC campaigns on Facebook, Instagram, LinkedIn, and X (Twitter), using precise audience targeting and engaging ad creatives.",
    },
    {
      icon: <FaListUl className="text-white w-6 h-6" />,
      title: "Performance Analytics & Reporting",
      desc: "Detailed reports and continuous monitoring allow us to measure campaign success, optimize strategies, and deliver data-driven decisions for maximum impact.",
    },
    {
      icon: <FaGlobe className="text-white w-6 h-6" />,
      title: "Retargeting & Lead Nurturing",
      desc: "We implement retargeting strategies to re-engage visitors who didn't convert initially, improving overall campaign efficiency and lead generation.",
    },
  ];

  const faqData = [
    {
      title: "What is included in your PPC management service?",
      description:
        "Our PPC service includes campaign strategy, keyword research, ad copy creation, landing page optimization, bid management, retargeting, analytics tracking, and ongoing optimization across platforms like Google, Facebook, LinkedIn, and YouTube.",
    },
    {
      title: "Can you manage multiple PPC platforms simultaneously?",
      description:
        "Yes, we handle campaigns across multiple platforms, ensuring consistent targeting, messaging, and performance tracking for Google Ads, Bing Ads, Facebook, Instagram, LinkedIn, and YouTube.",
    },
    {
      title: "Do you provide custom ad creatives?",
      description:
        "Absolutely! We create engaging and high-converting ad creatives, including images, videos, carousel ads, and dynamic product ads tailored to your brand and campaign objectives.",
    },
    {
      title: "How do you measure PPC performance?",
      description:
        "We track conversions, click-through rates (CTR), cost-per-click (CPC), return on ad spend (ROAS), and other key metrics using advanced analytics tools to continuously optimize your campaigns.",
    },
    {
      title: "Can PPC help my business grow quickly?",
      description:
        "Yes, PPC is a fast and measurable way to drive qualified traffic to your website or app. With properly targeted campaigns, you can generate leads, sales, and brand awareness quickly.",
    },
    {
      title: "Do you provide ongoing campaign support?",
      description:
        "Yes, our team provides continuous monitoring, bid optimization, ad updates, performance reports, and campaign adjustments to ensure sustained results and ROI.",
    },
  ];

const techCategories = [
  { title:"Analytics & SEO", techs:[
    {name:"Google Analytics",icon:"https://cdn.simpleicons.org/googleanalytics"},
    {name:"Google Search Console",icon:"https://cdn.simpleicons.org/googlesearchconsole"},
    {name:"Ahrefs",icon:"https://cdn.simpleicons.org/ahrefs"},
    {name:"Semrush",icon:"https://cdn.simpleicons.org/semrush"},
  ]},
  { title:"Advertising", techs:[
    {name:"Google Ads",icon:"https://cdn.simpleicons.org/googleads"},
    {name:"Meta Ads",icon:"https://cdn.simpleicons.org/meta"},
    {name:"LinkedIn Ads",icon:"https://cdn.simpleicons.org/linkedin"},
  ]},
  { title:"Social & Email", techs:[
    {name:"HubSpot",icon:"https://cdn.simpleicons.org/hubspot"},
    {name:"Mailchimp",icon:"https://cdn.simpleicons.org/mailchimp"},
    {name:"Buffer",icon:"https://cdn.simpleicons.org/buffer"},
    {name:"Hootsuite",icon:"https://cdn.simpleicons.org/hootsuite"},
  ]},
  { title:"Content & CMS", techs:[
    {name:"WordPress",icon:"https://cdn.simpleicons.org/wordpress"},
    {name:"Webflow",icon:"https://cdn.simpleicons.org/webflow"},
    {name:"Canva",icon:"https://cdn.simpleicons.org/canva"},
  ]},
];

const FALLBACK_CONTENT = {
  bannerImg: cwd,
  bannerTitle: "SEO SERVICES",
  bannerDesc: "Digital revolution has contributed to a crowded Search Engine Result Page (SERP) and studies reveal 75% of people never scroll past the first page. Businesses across industries are trying to outrank each other and achieve a top rank in the leading search engines.In such a competitive landscape, you cannot ace the ranking race without having a proper SEO strategy in place. And this is where we come in. Our niche-specific, data-driven, strategic SEO services can enhance your rank on the SERP. As a reliable SEO agency in India, we appoint the best minds in the industry to collaborate and fuel your business growth. Get a chance to focus on your business while we take.",
  overviewImage: cwd,
  overviewImageAlt: "SEO Services",
  overviewBadge: "Result-Driven SEO Services",
  overviewHeading: "Boost Organic Traffic & Rankings with",
  overviewHighlight: "Proven SEO Strategies",
  overviewParagraphs: [
    "At Future IT Touch Pvt. Ltd., we offer comprehensive Search Engine Optimization (SEO) services that help your business achieve higher visibility, better search rankings, and consistent organic traffic. Our SEO experts specialize in on-page, off-page, and technical SEO to deliver sustainable growth for your brand.",
    "Our SEO strategies are data-driven and tailored to your business goals — ensuring long-term success in competitive markets.",
    { boldPrefix: "For Businesses:", text: "Keyword research, content optimization, backlink building, and local SEO techniques designed to attract high-intent visitors and improve conversions." },
    { boldPrefix: "For Marketing Teams:", text: "Detailed performance analytics, competitor insights, and monthly reports to measure keyword rankings, traffic growth, and ROI effectively." },
    `With over ${YEARS_EXPERIENCE_DISPLAY} years of SEO expertise, we've helped brands across industries achieve top rankings and drive organic leads. Partner with Future IT Touch Pvt. Ltd. to dominate search results and grow your online presence organically.`,
  ],
  overviewCtaText: "Start Your SEO Campaign Today",
  features,
  bizCards: businessData,
  sliderCards: cards,
  platforms,
  techCategories,
  faqData,
  featuresBadge: "Result-Oriented SEO Services",
  featuresTitle: "Drive Quality Traffic, Boost Rankings &",
  featuresTitleHighlight: "Grow Your Business Organically",
  bizBadge: "Leading SEO Company in India",
  bizHeading: "Drive Organic Growth &",
  bizHighlight: "Boost Your Rankings with Expert SEO Strategies",
  sliderTitle: "Maximize Conversions with Expert PPC Management Solutions ",
  platformsTitle: "Comprehensive PPC Management Services – Target, Engage & Convert Your Audience Effectively",
  faqTitle: " About PPC Management Services",
};

const Seo = ({ cms } = {}) => {
  const content = cms
    ? {
        ...cms,
        bannerImg: cms.bannerImg || cwd,
        overviewImage: cms.overviewImage || FALLBACK_CONTENT.overviewImage,
        featuresBadge: cms.featuresBadge || FALLBACK_CONTENT.featuresBadge,
        featuresTitle: cms.featuresTitle || FALLBACK_CONTENT.featuresTitle,
        featuresTitleHighlight: cms.featuresTitleHighlight || FALLBACK_CONTENT.featuresTitleHighlight,
        bizBadge: cms.bizBadge || FALLBACK_CONTENT.bizBadge,
        bizHeading: cms.bizHeading || FALLBACK_CONTENT.bizHeading,
        bizHighlight: cms.bizHighlight || FALLBACK_CONTENT.bizHighlight,
        sliderTitle: cms.sliderTitle || FALLBACK_CONTENT.sliderTitle,
        platformsTitle: cms.platformsTitle || FALLBACK_CONTENT.platformsTitle,
        faqTitle: cms.faqTitle || FALLBACK_CONTENT.faqTitle,
        features: isSectionDisabled(cms.enabledSections, "features") ? [] : (cms.features?.length ? cms.features : FALLBACK_CONTENT.features),
        bizCards: isSectionDisabled(cms.enabledSections, "biz") ? [] : (cms.bizCards?.length ? cms.bizCards : FALLBACK_CONTENT.bizCards),
        sliderCards: isSectionDisabled(cms.enabledSections, "slider") ? [] : (cms.sliderCards?.length ? cms.sliderCards : FALLBACK_CONTENT.sliderCards),
        platforms: isSectionDisabled(cms.enabledSections, "platforms") ? [] : (cms.platforms?.length ? cms.platforms : FALLBACK_CONTENT.platforms),
        techCategories: isSectionDisabled(cms.enabledSections, "techstack") ? [] : (cms.techCategories?.length ? cms.techCategories : FALLBACK_CONTENT.techCategories),
        faqData: isSectionDisabled(cms.enabledSections, "faq") ? [] : (cms.faqData?.length ? cms.faqData : FALLBACK_CONTENT.faqData),
      }
    : FALLBACK_CONTENT;

  return <CommonServicePage {...content} featuresStickyImg={featureImage} />;
};

export default Seo;
