"use client";
const cwd = "/Assets/stock/photo-1499750310107-5fef28a66643.webp";
import CommonServicePage from "../components/CommonServicePage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";
import {
  FaBuilding, FaBoxOpen, FaLayerGroup, FaFileAlt, FaFolderOpen, FaBookOpen,
  FaLightbulb, FaHandshake, FaPalette, FaChartLine,
  FaPencilRuler, FaDesktop, FaCode, FaSearch,
} from "react-icons/fa";

const features = [
  {
    title: "Strategic Content Planning",
    description:
      "We develop comprehensive content strategies tailored to your business goals. By analyzing your audience, industry trends, and brand voice, we create a roadmap that ensures your content drives engagement, builds brand awareness, and supports lead generation across all platforms.",
    icon: <FaBuilding />,
  },
  {
    title: "Social Media Content Creation",
    description:
      "Our team crafts engaging content specifically designed for social media channels. From visually compelling graphics to concise, persuasive copy, we create posts that resonate with your audience, encourage interactions, and increase your brand's reach and visibility online.",
    icon: <FaBoxOpen />,
  },
  {
    title: "Blog & Article Marketing",
    description:
      "We write informative, SEO-optimized blogs and articles that position your brand as an authority in your industry. By linking new content to existing posts and maintaining valuable keywords, we enhance search engine rankings and drive consistent, qualified traffic to your website.",
    icon: <FaChartLine />,
  },
  {
    title: "Content Amplification & Promotion",
    description:
      "Beyond creating content, we strategically share it to maximize reach. We identify the right channels, leverage trending topics, participate in relevant groups, and time publications to ensure your content reaches the right audience and has the highest potential for engagement and virality.",
    icon: <FaBookOpen />,
  },
  {
    title: "Audience Engagement & Community Building",
    description:
      "We help you build meaningful relationships with your audience by joining discussions, responding to comments, and fostering communities around your brand. Our goal is to enhance loyalty, encourage brand advocacy, and turn followers into long-term customers.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Content Analysis & Optimization",
    description:
      "We continually analyze the performance of your content using metrics like engagement, traffic, and conversions. Based on insights, we refine strategies, improve messaging, and optimize content to achieve better results and maximize ROI for your content marketing campaigns.",
    icon: <FaFileAlt />,
  },
  {
    title: "Rebranding & Content Refresh",
    description:
      "For businesses looking to revitalize their online presence, we refresh existing content to align with current trends, brand messaging, and audience expectations. This ensures your content remains relevant, engaging, and impactful while maintaining SEO value and brand consistency.",
    icon: <FaFolderOpen />,
  },
];

const businessData = [
  {
    icons: <FaLightbulb className="text-white w-8 h-8" />,
    title: "Creative Content Strategy",
    desc: "We develop innovative content strategies tailored to your brand, ensuring that every piece of content aligns with your business goals, engages your audience, and drives measurable results.",
  },
  {
    icons: <FaPalette className="text-white w-8 h-8" />,
    title: "Content Creation & Design",
    desc: "Our team produces high-quality, visually appealing content — from blogs and articles to social media posts and graphics — designed to educate, inspire, and captivate your target audience.",
  },
  {
    icons: <FaHandshake className="text-white w-8 h-8" />,
    title: "Collaborative Marketing Process",
    desc: "We work closely with you to understand your brand voice and objectives, incorporating feedback at every stage to ensure content resonates with your audience and effectively promotes your brand message.",
  },
];

const cards = [
  {
    count: "1000+",
    title: "Content Pieces Successfully Delivered",
    desc: "We've created over 1000 high-quality content pieces including blogs, articles, social media posts, and email campaigns that educate, engage, and convert audiences for businesses across industries.",
    image: "/Assets/stock/photo-1499750310107-5fef28a66643.webp",
  },
  {
    count: YEARS_EXPERIENCE_DISPLAY,
    title: "Years of Content Marketing Expertise",
    desc: `With over ${YEARS_EXPERIENCE_DISPLAY} years of experience, Future IT Touch Pvt. Ltd. crafts strategic content marketing campaigns that build brand authority, increase online visibility, and drive measurable results for businesses worldwide.`,
    image: "/Assets/stock/photo-1455390582262-044cdead277a.webp",
  },
  {
    count: "500+",
    title: "Global Clients Served",
    desc: "Trusted by over 500 international brands, we create content strategies and materials that strengthen brand messaging, boost engagement, and deliver tangible marketing outcomes across multiple platforms.",
    image: "/Assets/stock/photo-1486312338219-ce68d2c6f44d.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our dedication to strategy, creativity, and data-driven results has earned us a 98% satisfaction rate. We focus on delivering content marketing solutions that resonate with target audiences and achieve business goals.",
    image: "/Assets/stock/photo-1611162617474-5b21e879e113.webp",
  },
  {
    count: "24/7",
    title: "Dedicated Marketing Support",
    desc: "Our team provides continuous support, including content planning, revisions, and campaign optimization, ensuring that every content marketing initiative is aligned with your goals and delivers maximum ROI.",
    image: "/Assets/stock/photo-1517245386807-bb43f82c33c4.webp",
  },
];

const platforms = [
  {
    icon: <FaPalette className="text-white w-6 h-6" />,
    title: "Content Strategy & Planning",
    desc: "We create data-driven content strategies that align with your brand goals, identify target audiences, and establish a roadmap for engaging, informative, and high-performing content campaigns.",
  },
  {
    icon: <FaPencilRuler className="text-white w-6 h-6" />,
    title: "Content Creation & Design",
    desc: "Our team produces high-quality blogs, articles, social media posts, graphics, and videos that are tailored to resonate with your audience, reinforce brand messaging, and drive meaningful engagement.",
  },
  {
    icon: <FaDesktop className="text-white w-6 h-6" />,
    title: "SEO & Performance Optimization",
    desc: "We optimize all content for search engines, using keyword strategy, internal linking, and analytics insights to improve organic traffic, increase visibility, and ensure measurable marketing results.",
  },
  {
    icon: <FaCode className="text-white w-6 h-6" />,
    title: "Social Media Marketing",
    desc: "We craft content for social media channels that sparks engagement, encourages sharing, and strengthens your online presence, helping your brand connect with followers and grow a loyal audience.",
  },
  {
    icon: <FaChartLine className="text-white w-6 h-6" />,
    title: "Content Amplification & Promotion",
    desc: "Beyond creation, we strategically distribute and promote content to maximize reach, participate in relevant communities, and capitalize on trending topics for viral marketing potential.",
  },
  {
    icon: <FaSearch className="text-white w-6 h-6" />,
    title: "Analytics & Continuous Improvement",
    desc: "We monitor content performance using analytics tools, adjusting strategies, optimizing messaging, and refining campaigns to ensure content consistently meets audience needs and business objectives.",
  },
];

const faqData = [
  {
    title: "What services are included in Content Marketing?",
    description:
      "Our services include content strategy development, content creation for blogs, articles, and social media, SEO optimization, content promotion, analytics monitoring, and ongoing support to ensure consistent and high-performing campaigns.",
  },
  {
    title: "Can you create custom content for my business?",
    description:
      "Absolutely! We tailor every content piece to match your brand voice, target audience, and business goals. From written content to visual assets, everything is designed to engage, educate, and convert effectively.",
  },
  {
    title: "Do you optimize content for SEO and engagement?",
    description:
      "Yes, all content is crafted with SEO best practices and engagement strategies in mind. We ensure keyword relevance, proper linking, readability, and compelling storytelling to boost organic traffic and audience interaction.",
  },
  {
    title: "Can you manage social media content as part of the marketing strategy?",
    description:
      "Definitely! We create and schedule social media content, engage with your followers, and manage campaigns to increase brand awareness, grow community interaction, and drive traffic to your website.",
  },
  {
    title: "How do you measure content marketing success?",
    description:
      "We track metrics like website traffic, engagement rates, social shares, lead generation, and conversions. Regular reports and insights allow us to continuously refine content strategy and improve ROI.",
  },
  {
    title: "Do you provide ongoing content marketing support?",
    description:
      "Yes, we offer ongoing support including content updates, campaign optimization, analytics monitoring, and strategic adjustments to ensure your content marketing efforts remain effective and aligned with your business objectives.",
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
  bannerTitle: "CONTENT MARKETING SERVICES",
  bannerDesc: "Future IT Touch Pvt. Ltd. Content is the root of every digital marketing campaign. It forms the backbone of your online identity and, helps create awareness of your brand. A content marketing agency can be the partner to set up your brand online by marketing professionally curated content with the current business data and industry information. Being a leading digital marketing agency India , we create content that ranks and pulls your business up with it. Avail our content marketing services to increase your visibility and engage your customers..",
  overviewImage: cwd,
  overviewImageAlt: "Content Marketing Services",
  overviewBadge: "Professional & Strategic Content Marketing Services",
  overviewHeading: "Crafting Content That Engages,",
  overviewHighlight: "Educates & Converts",
  overviewParagraphs: [
    "At Future IT Touch Pvt. Ltd. we create compelling content strategies that resonate with your audience, drive engagement, and support your business goals. Effective content marketing builds trust, authority, and lasting relationships with your customers.",
    "From blogs and social media posts to newsletters and video scripts, we craft content that speaks to your target audience. Our experienced content marketers combine storytelling, SEO, and data-driven insights to deliver content that not only informs but inspires action.",
    `With over ${YEARS_EXPERIENCE_DISPLAY} years of experience and a team of skilled professionals, we provide high-quality Content Marketing Services tailored to your brand's needs. We help businesses increase visibility, generate leads, and establish authority in their industry.`,
  ],
  overviewCtaText: "Start Your Content Strategy Today",
  features,
  bizCards: businessData,
  sliderCards: cards,
  platforms,
  techCategories,
  faqData,
};

const Logo = ({ cms } = {}) => {
  const content = cms
    ? { ...cms, bannerImg: cms.bannerImg || cwd, overviewImage: cms.overviewImage || FALLBACK_CONTENT.overviewImage }
    : FALLBACK_CONTENT;

  return (
    <CommonServicePage
      {...content}
      featuresBadge="Strategic Content Marketing Services"
      featuresTitle="Creating Engaging Content That Educates,"
      featuresTitleHighlight="Inspires & Converts"
      bizBadge="Professional Content Marketing Company in India"
      bizHeading="Crafting Content That Engages, Educates &"
      bizHighlight="Converts Your Audience"
      sliderTitle="Creating Impactful Content That Engages, Educates & Converts"
      platformsTitle="Content Marketing Solutions We Deliver"
      faqTitle="About Our Content Marketing Services"
    />
  );
};

export default Logo;
