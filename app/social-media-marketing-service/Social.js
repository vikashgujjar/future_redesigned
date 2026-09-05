"use client";
const cwd = "/Assets/stock/photo-1611162617474-5b21e879e113.webp";
import soe from "../Assets/soe.webp";
import CommonServicePage from "../components/CommonServicePage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";
import { isSectionDisabled } from "../lib/loadServicePage";
import {
  FaUsers, FaChartLine, FaBullhorn, FaCameraRetro, FaHashtag, FaEnvelopeOpenText,
  FaLaptop, FaLightbulb, FaHandshake, FaPalette, FaGlobe, FaCommentDots,
  FaSearch, FaFacebookF, FaLinkedin, FaInstagram, FaPinterest,
  FaAd, FaPeopleArrows,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const features = [
  {
    title: "Social Media Strategy & Planning",
    description:
      "We design a tailored social media marketing strategy to align with your brand goals. From defining audience personas to content calendar planning, we ensure every post drives engagement and builds brand loyalty.",
    icon: <FaBullhorn />,
  },
  {
    title: "Content Creation & Management",
    description:
      "Our creative team produces visually stunning graphics, engaging videos, and compelling posts that resonate with your audience. We handle all aspects of content management to maintain a consistent and impactful online presence.",
    icon: <FaCameraRetro />,
  },
  {
    title: "Content Creation & Marketing",
    description:
      "Using premium stock images, custom-made graphics, or unique assets provided by you, we create visual content including static images, videos, infographics, and carousels. Our in-house designers, copywriters, and marketing experts work together to craft engaging posts that drive attention and boost brand impression.",
    icon: <FaChartLine />,
  },
  {
    title: "Facebook Page Management",
    description:
      "From page creation and post designing to Facebook Ad management, campaign monitoring, and audience engagement — we handle everything to grow your follower base and improve visibility.",
    icon: <FaFacebookF />,
  },
  {
    title: "Twitter Account Management",
    description:
      "Our strategic Twitter marketing leverages powerful words and trending hashtags to strengthen your brand authority. We blend creativity and tactics to enhance your presence on this micro-blogging platform.",
    icon: <FaXTwitter />,
  },
  {
    title: "LinkedIn Profile Management",
    description:
      "Reflect your business professionalism on LinkedIn. We help B2B and B2C brands establish a strong presence, connect with professionals, and build a credible network that drives opportunities.",
    icon: <FaLinkedin />,
  },
  {
    title: "Instagram Marketing",
    description:
      "Boost engagement with our Instagram marketing expertise. We craft eye-catching visuals, short videos, and shoppable content to drive conversions and elevate your brand image.",
    icon: <FaInstagram />,
  },
  {
    title: "Pinterest Marketing",
    description:
      "We blend creativity and strategy to optimize your Pins, Feeds, and Boards. Our Pinterest marketing ensures your visuals capture attention, keeping users engaged and generating quality leads.",
    icon: <FaPinterest />,
  },
  {
    title: "Social Media Advertising Campaigns",
    description:
      "We run high-performing ad campaigns across Facebook, Instagram, LinkedIn, and more — focusing on conversions, brand awareness, and audience growth with precision targeting and ROI-driven strategies.",
    icon: <FaAd />,
  },
  {
    title: "Influencer & Community Marketing",
    description:
      "We collaborate with trusted influencers and manage brand communities to enhance your reach and authenticity. Our team ensures genuine engagement that strengthens your brand reputation and trust.",
    icon: <FaUsers />,
  },
  {
    title: "Community Management",
    description:
      "Our social media activities help build a loyal community around your niche. Through meaningful, informative interactions, we ensure your brand stays connected and relevant in the competitive digital world.",
    icon: <FaPeopleArrows />,
  },
  {
    title: "Analytics & Performance Tracking",
    description:
      "Using advanced analytics, we monitor engagement, reach, and conversions to refine campaigns continuously — ensuring data-backed decisions and measurable success.",
    icon: <FaSearch />,
  },
  {
    title: "Brand Reputation & Engagement Management",
    description:
      "We actively manage brand mentions, respond to comments, and engage with your audience to build strong relationships. Our approach turns followers into loyal advocates for your brand.",
    icon: <FaCommentDots />,
  },
  {
    title: "Multi-Platform Optimization",
    description:
      "We optimize campaigns for each social platform — ensuring your content performs effectively whether on Facebook, Instagram, LinkedIn, or X (Twitter).",
    icon: <FaGlobe />,
  },
];

const businessData = [
  {
    icons: <FaLightbulb className="text-white w-8 h-8" />,
    title: "Strategic Social Campaigns",
    desc: "Our data-driven campaigns are designed to maximize engagement, reach, and conversions — ensuring every post aligns with your brand's vision and audience interests.",
  },
  {
    icons: <FaPalette className="text-white w-8 h-8" />,
    title: "Creative Content & Visuals",
    desc: "We craft visually appealing designs, stories, and videos that not only grab attention but also communicate your brand message effectively across all social platforms.",
  },
  {
    icons: <FaHandshake className="text-white w-8 h-8" />,
    title: "Collaborative Marketing Approach",
    desc: "We work closely with your team to understand your goals and target audience, ensuring each campaign strengthens your online presence and brand identity.",
  },
];

const cards = [
  {
    count: "1500+",
    title: "Campaigns Successfully Executed",
    desc: "We've successfully delivered over 1500 high-impact social media campaigns that boosted brand visibility, audience engagement, and lead conversions across diverse industries worldwide.",
    image: "/Assets/stock/photo-1611162617474-5b21e879e113.webp",
  },
  {
    count: YEARS_EXPERIENCE_DISPLAY,
    title: "Years of Digital Expertise",
    desc: `With more than ${YEARS_EXPERIENCE_DISPLAY} years of experience in digital marketing, Future IT Touch Pvt. Ltd. crafts innovative, data-driven social strategies that accelerate growth and ensure long-term brand success.`,
    image: "/Assets/stock/photo-1432888498266-38ffec3eaf0a.webp",
  },
  {
    count: "500+",
    title: "Satisfied Global Clients",
    desc: "Trusted by over 500 leading brands worldwide, our social media professionals deliver impactful content and campaigns that build trust, foster connections, and inspire customer loyalty.",
    image: "/Assets/stock/photo-1618609378039-b572f64c5b42.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "We're proud to maintain a 98% satisfaction rate by consistently delivering creative excellence, measurable performance, and proactive support that exceed client expectations.",
    image: "/Assets/stock/photo-1499750310107-5fef28a66643.webp",
  },
  {
    count: "24/7",
    title: "Social Support & Monitoring",
    desc: "Our dedicated social team provides 24/7 support and real-time monitoring to ensure your brand remains active, responsive, and protected across every social platform.",
    image: "/Assets/stock/photo-1611926653458-09294b3142bf.webp",
  },
];

const platforms = [
  {
    icon: <FaBullhorn className="text-white w-6 h-6" />,
    title: "Strategic Campaign Planning",
    desc: "We plan campaigns that combine creativity, analytics, and audience insights to deliver meaningful engagement and brand visibility.",
  },
  {
    icon: <FaLaptop className="text-white w-6 h-6" />,
    title: "Content Creation & Scheduling",
    desc: "We produce and schedule high-quality content optimized for every platform — from carousel posts to reels and ad creatives.",
  },
  {
    icon: <FaUsers className="text-white w-6 h-6" />,
    title: "Community Building & Management",
    desc: "We grow your online communities, respond to followers, and encourage meaningful interactions to build strong brand loyalty.",
  },
  {
    icon: <FaChartLine className="text-white w-6 h-6" />,
    title: "Performance Analytics & Reporting",
    desc: "Our detailed reports track campaign results, helping you understand audience behavior and identify opportunities for growth.",
  },
  {
    icon: <FaHashtag className="text-white w-6 h-6" />,
    title: "Paid Social Advertising",
    desc: "We manage targeted ad campaigns to increase brand awareness, drive leads, and boost ROI across Facebook, Instagram, and LinkedIn.",
  },
  {
    icon: <FaEnvelopeOpenText className="text-white w-6 h-6" />,
    title: "Brand Reputation Management",
    desc: "We monitor brand mentions, respond to feedback, and ensure your business maintains a positive and engaging presence online.",
  },
];

const faqData = [
  {
    title: "What does your Social Media Marketing service include?",
    description:
      "Our services include strategy planning, content creation, advertising, analytics tracking, and community management across platforms like Facebook, Instagram, LinkedIn, and Twitter (X).",
  },
  {
    title: "Can you manage multiple social media platforms for my brand?",
    description:
      "Yes, we handle multi-platform management — ensuring consistent branding and messaging across all social channels with unique, platform-specific strategies.",
  },
  {
    title: "Do you create custom content for social media?",
    description:
      "Absolutely! We design and write creative content tailored to your brand tone, audience preferences, and campaign goals.",
  },
  {
    title: "How do you measure social media performance?",
    description:
      "We track engagement, reach, clicks, conversions, and ROI through advanced analytics tools to measure campaign effectiveness and optimize future strategies.",
  },
  {
    title: "Can social media marketing help grow my business?",
    description:
      "Yes! Social media builds brand visibility, trust, and customer relationships — driving leads, conversions, and long-term growth.",
  },
  {
    title: "Do you provide ongoing social media support?",
    description:
      "Yes, we offer continuous monitoring, updates, performance reports, and optimization to ensure consistent brand engagement and growth.",
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
  bannerTitle: "SOCIAL MEDIA MARKETING SERVICES",
  bannerDesc: "Future IT Touch Pvt. Ltd., an certified agency, provides dynamic and results-driven social media marketing services. We take into account the current brand value of a business and, work toward enhancing it. We use futuristic strategies and creative designs for maximum impact. Our team of proficient social media optimization and marketing specialists is adept at managing media platforms like Facebook, Twitter, Google+, LinkedIn and Pinterest. Together, we boost your social media presence, generating more leads in the process.",
  overviewImage: cwd,
  overviewImageAlt: "Social Media Marketing Services",
  overviewBadge: "Creative & Data-Driven Social Media Marketing",
  overviewHeading: "Amplify Your Brand Presence with",
  overviewHighlight: "Strategic Social Media Marketing",
  overviewParagraphs: [
    "At Future IT Touch Pvt. Ltd. we help businesses connect, engage, and grow through innovative social media strategies that turn followers into customers and customers into loyal brand advocates.",
    "From creative content and influencer collaborations to paid advertising and performance tracking, our comprehensive solutions ensure your brand stands out in the digital crowd.",
    `With over ${YEARS_EXPERIENCE_DISPLAY} years of experience, we deliver high-performing Social Media Marketing Services tailored to your goals and audience.`,
  ],
  overviewCtaText: "Grow Your Brand with Social Media Today",
  features,
  bizCards: businessData,
  sliderCards: cards,
  platforms,
  techCategories,
  faqData,
  featuresBadge: "Comprehensive Social Media Marketing Services",
  featuresTitle: "Building Engagement &",
  featuresTitleHighlight: "Driving Conversions Across Platforms",
  bizBadge: "Top Social Media Marketing Company in India",
  bizHeading: "Engaging, Growing &",
  bizHighlight: "Converting Audiences Organically",
  sliderTitle: "Empowering Brands Through Engaging Social Media Strategies",
  platformsTitle: "Our Social Media Marketing Process",
  faqTitle: "About Our Social Media Marketing Services",
};

const Social = ({ cms } = {}) => {
  const content = cms
    ? {
        ...cms,
        bannerImg: cms.bannerImg || cwd,
        overviewImage: cms.overviewImage || cwd,
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

  return <CommonServicePage {...content} featuresStickyImg={soe} />;
};

export default Social;
