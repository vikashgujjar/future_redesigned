"use client";
import devops from "../Assets/graphic-design.webp";
import CommonServicePage from "../components/CommonServicePage";
import { isSectionDisabled } from "../lib/loadServicePage";
import {
  FaPaintBrush, FaLayerGroup, FaPalette, FaRegIdBadge, FaImage, FaVectorSquare, FaFilePdf,
} from "react-icons/fa";

const features = [
  {
    title: "Logo & Brand Identity Design",
    description:
      "Your logo is the face of your brand. Our designers create custom, memorable logos that capture your business personality, values, and target audience. Every element — from color psychology to typography and iconography — is thoughtfully crafted to ensure your brand stands out in the marketplace and creates a lasting impression.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Brochure & Print Design",
    description:
      "Our compelling brochure designs transform your marketing materials into powerful sales tools. We craft multi-fold brochures, flyers, and catalogs with clean layouts, engaging copy, and professional visuals that communicate your message effectively and drive customer action.",
    icon: <FaFilePdf />,
  },
  {
    title: "Social Media Graphics",
    description:
      "Stand out in crowded social feeds with striking, on-brand graphics designed specifically for each platform. We create scroll-stopping posts, stories, banners, and ad creatives for Facebook, Instagram, LinkedIn, and Twitter that boost engagement and reinforce your brand identity.",
    icon: <FaImage />,
  },
  {
    title: "Business Stationery Design",
    description:
      "Professional stationery creates a cohesive brand experience at every touchpoint. We design business cards, letterheads, envelopes, email signatures, and office supplies that reflect your brand standards and leave a polished, professional impression with every interaction.",
    icon: <FaRegIdBadge />,
  },
  {
    title: "UI/UX & Web Graphics",
    description:
      "We bridge the gap between design and digital with custom web graphics, icon sets, infographics, and UI elements that enhance your website's visual appeal and user experience. Every pixel is purposeful, ensuring your digital presence is as impressive as your offline brand.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Vector & Illustration Design",
    description:
      "Custom vector illustrations give your brand a unique visual voice. From editorial illustrations and product mockups to infographic visuals and character design, our illustrators create scalable, high-resolution artwork that works seamlessly across print and digital media.",
    icon: <FaVectorSquare />,
  },
  {
    title: "Packaging & Product Design",
    description:
      "Great packaging sells products before customers even open them. We design product packaging that is visually compelling, shelf-ready, and aligned with your brand story. Our packaging designs balance aesthetics, functionality, and compliance to help your products stand out at retail.",
    icon: <FaPalette />,
  },
];

const bizCards = [
  {
    title: "Creative Excellence",
    desc: "Our team of experienced designers brings fresh creativity and strategic thinking to every project, ensuring your brand always looks its absolute best across all media.",
    icons: <FaPaintBrush className="text-white w-8 h-8" />,
  },
  {
    title: "Brand Consistency",
    desc: "We develop comprehensive brand guidelines that ensure visual consistency across every touchpoint — from print materials to digital assets — building a cohesive, recognizable brand identity.",
    icons: <FaPalette className="text-white w-8 h-8" />,
  },
  {
    title: "Fast Turnaround Times",
    desc: "We understand that time is money. Our structured design process and agile workflows ensure timely delivery without ever compromising on quality or creative standards.",
    icons: <FaLayerGroup className="text-white w-8 h-8" />,
  },
  {
    title: "Unlimited Revisions",
    desc: "Your satisfaction is our priority. We offer multiple revision rounds and work closely with you through every iteration until the final design perfectly captures your vision.",
    icons: <FaRegIdBadge className="text-white w-8 h-8" />,
  },
];

const sliderCards = [
  {
    count: "40%",
    title: "Brand Identity Overhaul",
    desc: "Redesigned a complete brand identity for a fintech startup — logo, typography, color palette, and stationery — resulting in 40% improved brand recognition.",
    image: "/Assets/stock/photo-1561070791-2526d30994b5.webp",
  },
  {
    count: "25%",
    title: "Product Packaging Design",
    desc: "Created eye-catching packaging for a cosmetics brand that increased shelf visibility and contributed to a 25% sales uplift in the first quarter after launch.",
    image: "/Assets/stock/photo-1600857544200-b2f666a9a2ec.webp",
  },
  {
    count: "3x",
    title: "Social Media Campaign Graphics",
    desc: "Produced a 3-month social media visual campaign for a hospitality brand, achieving 3x engagement increase across all platforms.",
    image: "/Assets/stock/photo-1611162616305-c69b3fa7fbe0.webp",
  },
  {
    count: "500+",
    title: "Corporate Brochure Suite",
    desc: "Designed a full corporate brochure suite including company profile, product catalog, and investor deck for a manufacturing client.",
    image: "/Assets/stock/photo-1588345921523-c2dcdb7f1dcd.webp",
  },
];

const platforms = [
  { icon: <FaPaintBrush className="text-white w-6 h-6" />, title: "Figma & Adobe XD", desc: "Modern UI/UX design and interactive prototyping — enabling fast design iterations and seamless developer handoff." },
  { icon: <FaPalette className="text-white w-6 h-6" />, title: "Adobe Illustrator", desc: "Scalable vector artwork, logos, and brand icons that look sharp at any size — from business cards to billboards." },
  { icon: <FaImage className="text-white w-6 h-6" />, title: "Adobe Photoshop", desc: "Professional photo retouching, digital compositing, and raster graphics for marketing visuals and product imagery." },
  { icon: <FaFilePdf className="text-white w-6 h-6" />, title: "Adobe InDesign", desc: "Professional print and digital publications — brochures, annual reports, and catalogs with precise layout and typography." },
  { icon: <FaLayerGroup className="text-white w-6 h-6" />, title: "After Effects & Premiere Pro", desc: "Engaging motion graphics, brand animations, and video content for digital campaigns and broadcast media." },
  { icon: <FaVectorSquare className="text-white w-6 h-6" />, title: "Canva & Sketch", desc: "Rapid design iteration and team collaboration tools for producing polished assets quickly while maintaining brand consistency." },
];

const faqData = [
  {
    title: "What graphic design services do you offer?",
    description:
      "We offer a comprehensive range of graphic design services including logo design, brand identity, brochure and print design, social media graphics, business stationery, UI/UX design, packaging design, and vector illustrations.",
  },
  {
    title: "How many revisions are included in your design packages?",
    description:
      "We offer multiple rounds of revisions to ensure you are completely satisfied with the final design. The exact number of revisions depends on the package you choose, and we always work until you are happy with the outcome.",
  },
  {
    title: "What file formats will I receive for my designs?",
    description:
      "You will receive all final designs in high-resolution formats suitable for both print and digital use, including AI, EPS, PDF, PNG, and JPG. Vector files are included for logos to ensure scalability at any size.",
  },
  {
    title: "Can you work with our existing brand guidelines?",
    description:
      "Absolutely. We are experienced in working within established brand guidelines and can extend your existing visual identity consistently across new materials and platforms.",
  },
  {
    title: "How long does a logo design project take?",
    description:
      "A standard logo design project takes 5–10 business days from brief to final delivery. Complex brand identity packages including full guidelines documentation may take 2–4 weeks.",
  },
];

const techCategories = [
  {
    title: "Design Tools",
    techs: [
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
      { name: "Adobe XD", icon: "https://cdn.simpleicons.org/adobexd" },
      { name: "Photoshop", icon: "https://cdn.simpleicons.org/adobephotoshop" },
      { name: "Illustrator", icon: "https://cdn.simpleicons.org/adobeillustrator" },
      { name: "InDesign", icon: "https://cdn.simpleicons.org/adobeindesign" },
    ],
  },
  {
    title: "Animation & Video",
    techs: [
      { name: "After Effects", icon: "https://cdn.simpleicons.org/adobeaftereffects" },
      { name: "Premiere Pro", icon: "https://cdn.simpleicons.org/adobepremierepro" },
      { name: "Blender", icon: "https://cdn.simpleicons.org/blender" },
    ],
  },
  {
    title: "Prototyping",
    techs: [
      { name: "Figma Prototype", icon: "https://cdn.simpleicons.org/figma" },
      { name: "Canva", icon: "https://cdn.simpleicons.org/canva" },
      { name: "Sketch", icon: "https://cdn.simpleicons.org/sketch" },
    ],
  },
];

const FALLBACK_CONTENT = {
  bannerImg: devops,
  bannerTitle: "Graphic Design Services",
  bannerDesc: "Simplicity, creativity, a dash of humor, and good typography are the essential elements of graphic design at Future IT Touch Pvt. Ltd. Effective design plays a vital role in distinguishing your business from the rest — giving you The Design Edge. With right aesthetics prompting visual perception, your business is bound to be valued more. Our team is always ready to jump with brilliant ideas to convey a story through design.",
  overviewImage: "/Assets/stock/photo-1561070791-2526d30994b5.webp",
  overviewImageAlt: "Graphic Design Services",
  overviewBadge: "Custom Graphic Design Services",
  overviewHeading: "Custom Graphic Design",
  overviewHighlight: "Services We Offer",
  overviewParagraphs: [
    "Future IT Touch Pvt. Ltd. is one of the leading graphic design agencies that gives your business a distinct expression and shows it to the world on a branded platter of your own.",
    "We invest creativity, innovative minds, and technology at the helm of our graphic designers, aimed towards attaining clients' graphic design requirements — from logos and brochures to digital assets and packaging.",
    "Our team of expert designers crafts visuals that communicate your brand message effectively, tailored to your specific business needs and target audience.",
  ],
  overviewCtaText: "Request A Quote",
  features,
  bizCards,
  sliderCards,
  platforms,
  techCategories,
  faqData,
  featuresBadge: "Our Design Services",
  featuresTitle: "Creative Designs That",
  featuresTitleHighlight: "Build Memorable Brands",
  bizBadge: "Our Advantages",
  bizHeading: "Why Choose Us for",
  bizHighlight: "Design & Branding",
  sliderTitle: "Delivering Creative Design Solutions That Drive Business Growth",
  platformsTitle: "Design Tools & Platforms We Use",
  techBadge: "Our Design Tech Stack",
  techHeading: "Tools",
  techHeadingHighlight: "We Design With",
  techDescription: "We use the industry's most powerful design tools to create stunning visuals, from initial concepts to final production-ready assets.",
  faqTitle: "Frequently Asked Questions — Graphic Design",
};

const Branding = ({ cms } = {}) => {
  const content = cms
    ? {
        ...cms,
        bannerImg: cms.bannerImg || devops,
        overviewImage: cms.overviewImage || FALLBACK_CONTENT.overviewImage,
        featuresBadge: cms.featuresBadge || FALLBACK_CONTENT.featuresBadge,
        featuresTitle: cms.featuresTitle || FALLBACK_CONTENT.featuresTitle,
        featuresTitleHighlight: cms.featuresTitleHighlight || FALLBACK_CONTENT.featuresTitleHighlight,
        bizBadge: cms.bizBadge || FALLBACK_CONTENT.bizBadge,
        bizHeading: cms.bizHeading || FALLBACK_CONTENT.bizHeading,
        bizHighlight: cms.bizHighlight || FALLBACK_CONTENT.bizHighlight,
        sliderTitle: cms.sliderTitle || FALLBACK_CONTENT.sliderTitle,
        platformsTitle: cms.platformsTitle || FALLBACK_CONTENT.platformsTitle,
        techBadge: cms.techBadge || FALLBACK_CONTENT.techBadge,
        techHeading: cms.techHeading || FALLBACK_CONTENT.techHeading,
        techHeadingHighlight: cms.techHeadingHighlight || FALLBACK_CONTENT.techHeadingHighlight,
        techDescription: cms.techDescription || FALLBACK_CONTENT.techDescription,
        faqTitle: cms.faqTitle || FALLBACK_CONTENT.faqTitle,
        features: isSectionDisabled(cms.enabledSections, "features") ? [] : (cms.features?.length ? cms.features : FALLBACK_CONTENT.features),
        bizCards: isSectionDisabled(cms.enabledSections, "biz") ? [] : (cms.bizCards?.length ? cms.bizCards : FALLBACK_CONTENT.bizCards),
        sliderCards: isSectionDisabled(cms.enabledSections, "slider") ? [] : (cms.sliderCards?.length ? cms.sliderCards : FALLBACK_CONTENT.sliderCards),
        platforms: isSectionDisabled(cms.enabledSections, "platforms") ? [] : (cms.platforms?.length ? cms.platforms : FALLBACK_CONTENT.platforms),
        techCategories: isSectionDisabled(cms.enabledSections, "techstack") ? [] : (cms.techCategories?.length ? cms.techCategories : FALLBACK_CONTENT.techCategories),
        faqData: isSectionDisabled(cms.enabledSections, "faq") ? [] : (cms.faqData?.length ? cms.faqData : FALLBACK_CONTENT.faqData),
      }
    : FALLBACK_CONTENT;

  return <CommonServicePage {...content} featuresStickyImg="/Assets/stock/photo-1600857544200-b2f666a9a2ec.webp" />;
};

export default Branding;
