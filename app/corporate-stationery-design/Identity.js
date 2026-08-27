"use client";
const gm = "/Assets/stock/photo-1588345921523-c2dcdb7f1dcd.webp";
import d1 from "../Assets/logo-gif.webp";
import CommonServicePage from "../components/CommonServicePage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";
import {
  FaLightbulb, FaHandshake, FaPalette, FaChartLine,
  FaPencilRuler, FaDesktop, FaCode, FaSearch,
  FaIdCard, FaEnvelopeOpenText, FaFolderOpen, FaPenFancy, FaFileInvoice, FaBullhorn, FaTools,
} from "react-icons/fa";

const features = [
  {
    title: "Business Card Design",
    description:
      "We craft professional business cards that reflect your brand identity, leaving a strong and memorable impression on clients and partners.",
    icon: <FaIdCard />,
  },
  {
    title: "Letterhead & Envelope Design",
    description:
      "Our custom letterheads and envelopes ensure consistent branding across all corporate communication, enhancing professionalism and trust.",
    icon: <FaEnvelopeOpenText />,
  },
  {
    title: "Presentation Folder Design",
    description:
      "We design branded folders that organize and showcase important documents, making a polished and cohesive impression during client meetings.",
    icon: <FaFolderOpen />,
  },
  {
    title: "Corporate Stationery Sets",
    description:
      "Complete stationery sets including notepads, pens, and office supplies, designed to maintain visual consistency and reinforce your corporate image.",
    icon: <FaPenFancy />,
  },
  {
    title: "Invoice & Report Templates",
    description:
      "Professionally designed templates for invoices, reports, and proposals that reflect your brand identity and ensure uniformity across documents.",
    icon: <FaFileInvoice />,
  },
  {
    title: "Branded Marketing Collateral",
    description:
      "We create branded letterheads, envelopes, and other materials for marketing campaigns, ensuring your corporate identity is cohesive and recognizable.",
    icon: <FaBullhorn />,
  },
  {
    title: "Custom Stationery Solutions",
    description:
      "Tailored stationery solutions to meet your business needs — combining creativity, functionality, and brand consistency for maximum impact.",
    icon: <FaTools />,
  },
];

const businessData = [
  {
    icons: <FaLightbulb className="text-white w-8 h-8" />,
    title: "Innovative Stationery Concepts",
    desc: "We create thoughtful and professional stationery designs that communicate your brand identity effectively across business cards, letterheads, and envelopes.",
  },
  {
    icons: <FaPalette className="text-white w-8 h-8" />,
    title: "Custom Layout & Branding",
    desc: "Our team develops visually cohesive layouts combining typography, colors, and graphics to ensure your stationery aligns perfectly with your corporate identity.",
  },
  {
    icons: <FaHandshake className="text-white w-8 h-8" />,
    title: "Client-Centric Collaboration",
    desc: "We engage closely with clients throughout the design process to ensure each stationery item reflects your brand personality, professionalism, and business goals.",
  },
];

const cards = [
  {
    count: "250+",
    title: "Brochures Successfully Delivered",
    desc: "We've designed over 250 professional brochures that clearly communicate brand messages and create strong impressions. From startups to enterprises, our brochures drive engagement and brand recognition.",
    image: "/Assets/stock/photo-1588345921523-c2dcdb7f1dcd.webp",
  },
  {
    count: YEARS_EXPERIENCE_DISPLAY,
    title: "Years of Design Expertise",
    desc: `With more than ${YEARS_EXPERIENCE_DISPLAY} years of experience in corporate stationery and brochure design, Future IT Touch Pvt. Ltd. delivers visually compelling and strategically effective designs.`,
    image: "/Assets/stock/photo-1586953208448-b95a79798f07.webp",
  },
  {
    count: "500+",
    title: "Global Clients Served",
    desc: "Trusted by over 500 brands worldwide, we produce brochures and corporate stationery that enhance brand communication and visibility across digital and print media.",
    image: "/Assets/stock/photo-1561070791-2526d30994b5.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our focus on design quality, attention to detail, and client collaboration has earned us a 98% satisfaction rate. We create brochures that reflect your brand identity effectively.",
    image: "/Assets/stock/photo-1600857544200-b2f666a9a2ec.webp",
  },
  {
    count: "24/7",
    title: "Dedicated Design Support",
    desc: "Our team provides ongoing support for revisions, print preparation, and digital adaptation, ensuring your corporate stationery and brochures meet the highest standards.",
    image: "/Assets/stock/photo-1611162616305-c69b3fa7fbe0.webp",
  },
];

const platforms = [
  {
    icon: <FaPalette className="text-white w-6 h-6" />,
    title: "Creative Concepts & Branding",
    desc: "We develop unique stationery and brochure concepts that capture your brand's personality and communicate your message clearly to your target audience.",
  },
  {
    icon: <FaPencilRuler className="text-white w-6 h-6" />,
    title: "Layout & Visual Planning",
    desc: "Our team crafts detailed layouts and mockups for corporate stationery and brochures, ensuring perfect alignment of visuals, text, and branding elements.",
  },
  {
    icon: <FaDesktop className="text-white w-6 h-6" />,
    title: "Custom Graphics & Illustrations",
    desc: "We create tailored graphics, icons, and illustrations to enhance the visual appeal of your brochures and stationery, making them professional and engaging.",
  },
  {
    icon: <FaCode className="text-white w-6 h-6" />,
    title: "Print-Ready & Digital Design",
    desc: "We prepare your brochures and stationery for high-quality printing or digital distribution, maintaining color accuracy, resolution, and format compatibility.",
  },
  {
    icon: <FaChartLine className="text-white w-6 h-6" />,
    title: "Marketing & Promotional Materials",
    desc: "We design brochures, letterheads, and stationery that effectively promote your products, services, and corporate message across various platforms.",
  },
  {
    icon: <FaSearch className="text-white w-6 h-6" />,
    title: "Quality & Brand Consistency",
    desc: "Every design undergoes strict quality checks to ensure consistency with your brand guidelines and high professional standards for all print and digital materials.",
  },
];

const faqData = [
  {
    title: "What services are included in Corporate Stationery & Brochure Design?",
    description:
      "Our services include concept creation, layout design, custom graphics, typography, print-ready preparation, and digital adaptation to deliver professional and visually engaging stationery and brochures.",
  },
  {
    title: "Can you customize stationery for my business?",
    description:
      "Absolutely! We tailor every piece of stationery — from letterheads and envelopes to brochures and flyers — ensuring it perfectly represents your brand identity and messaging.",
  },
  {
    title: "How do you ensure design quality and consistency?",
    description:
      "We follow a structured design process with detailed layouts, brand guidelines, and quality checks to maintain high-quality, consistent, and on-brand stationery across all projects.",
  },
  {
    title: "Do you provide designs for both print and digital formats?",
    description:
      "Yes, we create corporate stationery and brochures optimized for print, PDFs, email campaigns, and digital downloads to ensure accessibility and visual appeal across all channels.",
  },
  {
    title: "Can you redesign an existing stationery set or brochure?",
    description:
      "Definitely! We can refresh your current corporate stationery or brochures by updating layouts, visuals, typography, and messaging to make them modern, engaging, and brand-aligned.",
  },
  {
    title: "Do you provide ongoing support after delivery?",
    description:
      "Yes, we offer continuous support including design updates, print revisions, digital adaptations, and guidance to ensure your stationery and brochures remain effective and up-to-date.",
  },
];

const techCategories = [
  { title:"Design Tools", techs:[
    {name:"Figma",icon:"https://cdn.simpleicons.org/figma"},
    {name:"Adobe XD",icon:"https://cdn.simpleicons.org/adobexd"},
    {name:"Photoshop",icon:"https://cdn.simpleicons.org/adobephotoshop"},
    {name:"Illustrator",icon:"https://cdn.simpleicons.org/adobeillustrator"},
    {name:"InDesign",icon:"https://cdn.simpleicons.org/adobeindesign"},
  ]},
  { title:"Animation & Video", techs:[
    {name:"After Effects",icon:"https://cdn.simpleicons.org/adobeaftereffects"},
    {name:"Premiere Pro",icon:"https://cdn.simpleicons.org/adobepremierepro"},
    {name:"Blender",icon:"https://cdn.simpleicons.org/blender"},
  ]},
  { title:"Prototyping", techs:[
    {name:"Figma Prototype",icon:"https://cdn.simpleicons.org/figma"},
    {name:"Canva",icon:"https://cdn.simpleicons.org/canva"},
    {name:"Sketch",icon:"https://cdn.simpleicons.org/sketch"},
  ]},
];

const FALLBACK_CONTENT = {
  bannerImg: gm,
  bannerTitle: "The first impression is the best one",
  bannerDesc: "Your business card builds your first impression. A professionally designed letterhead containing your business proposal increases your chances of acquiring the project. We start the process of crafting a corporate stationary design by knowing the ins and outs of your business so as to offer you with the best solution. Being a leading graphic design company in India, our aim is to uphold the corporate culture of your business and enhance its public image through our corporate identity design services.",
  overviewImage: gm,
  overviewImageAlt: "Corporate Stationery Design Services",
  overviewBadge: "Professional & Cohesive Corporate Stationery Design Services",
  overviewHeading: "Designing Corporate Stationery That",
  overviewHighlight: "Strengthens Your Brand Identity",
  overviewParagraphs: [
    "At Future IT Touch Pvt. Ltd. we create professional corporate stationery designs that convey consistency, professionalism, and brand personality across all office and business communication materials.",
    "Corporate stationery is more than just letterheads and business cards — it reflects your company's professionalism and attention to detail. Our team crafts designs that align with your brand identity and communicate credibility.",
    { boldPrefix: "For Businesses:", text: "We design letterheads, business cards, envelopes, and office templates that enhance brand recognition, maintain consistency, and reinforce a professional image." },
    { boldPrefix: "For Audiences:", text: "Our designs leave a lasting impression on clients, partners, and stakeholders by combining clarity, creativity, and functional design that reflects your brand values." },
  ],
  overviewCtaText: "Design Your Corporate Stationery Today",
  features,
  bizCards: businessData,
  sliderCards: cards,
  platforms,
  techCategories,
  faqData,
};

const Brochure = ({ cms } = {}) => {
  const content = cms
    ? { ...cms, bannerImg: cms.bannerImg || gm, overviewImage: cms.overviewImage || FALLBACK_CONTENT.overviewImage }
    : FALLBACK_CONTENT;

  return (
    <CommonServicePage
      {...content}
      featuresBadge="Professional Corporate Stationery Design"
      featuresTitle="Crafting Consistent & Impactful Brand Identity"
      featuresTitleHighlight="Across All Office Collateral"
      featuresStickyImg={d1}
      bizBadge="Professional Corporate Stationery Design Company in India"
      bizHeading="Crafting Stationery That"
      bizHighlight="Strengthens Your Brand Identity"
      sliderTitle="Creating Professional Corporate Stationery That Strengthens Your Brand"
      platformsTitle="Corporate Stationery Solutions We Deliver"
      faqTitle="About Our Corporate Stationery Design Services"
    />
  );
};

export default Brochure;
