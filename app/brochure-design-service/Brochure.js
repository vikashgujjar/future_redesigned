"use client";
import gm from "../Assets/bb.gif";
import d1 from "../Assets/bro.gif";
import CommonServicePage from "../components/CommonServicePage";
import {
  FaBuilding, FaBoxOpen, FaLayerGroup, FaFileAlt, FaFolderOpen, FaBookOpen,
  FaLightbulb, FaHandshake, FaPalette, FaChartLine,
  FaPencilRuler, FaDesktop, FaCode, FaSearch,
} from "react-icons/fa";

const Brochure = () => {
  const features = [
    {
      title: "Company Brochure Design",
      description:
        "We design professional company brochures that create a lasting impression and elevate your brand's visibility in the market with clean, creative layouts.",
      icon: <FaBuilding />,
    },
    {
      title: "Product Catalog Design",
      description:
        "Our eye-catching product catalogs showcase your entire product range, emphasizing features and benefits in a well-structured, visually appealing format.",
      icon: <FaBoxOpen />,
    },
    {
      title: "Sales Brochure Design",
      description:
        "Boost your conversions with sales brochures that highlight new products, offers, or promotional events in an engaging and persuasive way.",
      icon: <FaChartLine />,
    },
    {
      title: "Bi-Fold Brochure Design",
      description:
        "We create elegant bi-fold brochures with 4 panels — perfect for concise presentations that balance visuals and key information effectively.",
      icon: <FaBookOpen />,
    },
    {
      title: "Tri-Fold Brochure Design",
      description:
        "Our tri-fold brochures feature 6 panels, giving you ample space to showcase your content in a neat, organized, and professional structure.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Gate Fold Brochure Design",
      description:
        "Designed for high-end marketing campaigns, our gate fold brochures open up with sophistication — making your message stand out instantly.",
      icon: <FaFileAlt />,
    },
    {
      title: "Insert & Folder Brochure Design",
      description:
        "We craft practical insert and folder brochures with pockets for product sheets or offers — ideal for corporate presentations and events.",
      icon: <FaFolderOpen />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Creative Brochure Concepts",
      desc: "We design visually stunning and concept-driven brochures that effectively capture your brand essence and engage your target audience with clarity and impact.",
    },
    {
      icons: <FaPalette className="text-white w-8 h-8" />,
      title: "Custom Layout & Design",
      desc: "Our experts craft unique brochure layouts, blending colors, typography, and imagery to create professional designs tailored to your business goals.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Collaborative Design Process",
      desc: "We work hand-in-hand with clients throughout the design journey to ensure every brochure reflects your brand personality and marketing objectives perfectly.",
    },
  ];

  const cards = [
    {
      count: "250+",
      title: "Videos Successfully Delivered",
      desc: "We've produced over 250 high-quality explainer videos that simplify complex ideas and help businesses communicate their stories effectively. From startups to enterprises, our videos drive engagement and conversions.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "15+",
      title: "Years of Production Expertise",
      desc: "With more than 15 years of experience in creative storytelling and animation, Future IT Touch Pvt. Ltd. delivers impactful explainer videos that educate, inspire, and connect with audiences worldwide.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Global Clients Served",
      desc: "Trusted by over 500 international brands, we create explainer videos that enhance communication, strengthen marketing efforts, and increase brand visibility across digital platforms.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our commitment to creativity, clarity, and storytelling excellence has earned us a 98% satisfaction rate. We focus on delivering videos that truly represent your brand and connect with your audience.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Dedicated Video Support",
      desc: "Our creative team provides round-the-clock support — from script revisions to post-production edits — ensuring every video meets your goals and maintains top-tier quality at all times.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaPalette className="text-white w-6 h-6" />,
      title: "Brochure Concept & Design",
      desc: "We create visually appealing brochure concepts that reflect your brand identity and convey your message clearly to engage your target audience effectively.",
    },
    {
      icon: <FaPencilRuler className="text-white w-6 h-6" />,
      title: "Layout & Visual Planning",
      desc: "Our team designs detailed layouts and mockups for each brochure, ensuring proper alignment of visuals, typography, and content for maximum readability and impact.",
    },
    {
      icon: <FaDesktop className="text-white w-6 h-6" />,
      title: "Custom Illustrations & Graphics",
      desc: "We craft high-quality graphics, icons, and illustrations to enhance your brochure's visual appeal and make your message more engaging and memorable.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Print-Ready Design",
      desc: "We prepare your brochures with professional print standards, color calibration, and formats to ensure they look perfect in both digital and physical formats.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Marketing & Promotional Brochures",
      desc: "We design brochures tailored for promotions, campaigns, and events, helping your business communicate offers and messages clearly and persuasively.",
    },
    {
      icon: <FaSearch className="text-white w-6 h-6" />,
      title: "Performance & Quality Assurance",
      desc: "We review every brochure for design quality, accuracy, and branding consistency to ensure your final product meets your business goals and audience expectations.",
    },
  ];

  const faqData = [
    {
      title: "What services are included in Brochure Design?",
      description:
        "Our services include concept creation, layout design, custom graphics, typography, print-ready preparation, and digital adaptation to deliver professional and visually engaging brochures.",
    },
    {
      title: "Can you customize brochures for my business?",
      description:
        "Absolutely! We tailor every brochure — from style, layout, and colors to imagery and messaging — ensuring it perfectly represents your brand and communicates your message effectively.",
    },
    {
      title: "How do you ensure design quality and consistency?",
      description:
        "We follow a structured design process with detailed layouts, visual guidelines, and quality checks to maintain high-quality, consistent, and on-brand brochures across all projects.",
    },
    {
      title: "Do you provide brochures for both print and digital use?",
      description:
        "Yes, we create brochures optimized for print, PDFs, email campaigns, and digital downloads to ensure your content is accessible and visually appealing on all platforms.",
    },
    {
      title: "Can you redesign an existing brochure?",
      description:
        "Definitely! We can refresh your current brochures by updating visuals, layouts, typography, and messaging to make them more modern, engaging, and aligned with your audience.",
    },
    {
      title: "Do you provide ongoing brochure support?",
      description:
        "Yes, we offer continuous support including design updates, print revisions, digital adaptations, and guidance to ensure your brochures remain relevant and effective.",
    },
  ];

  return (
    <CommonServicePage
      bannerImg={gm}
      bannerTitle="BROCHURE DESIGN SERVICES"
      bannerDesc="Future IT Touch Pvt. Ltd., an certified company, has the experience of crafting the right brand message and promoting your business through custom brochure design services. Our specialization includes corporate & business brochure design, product catalogues, leaflets, flyers and much more. With a team of skilled and experienced designers we create unique designs that stand apart. Hire our graphic designers to present your business in a professional and graceful manner."
      overviewImage={gm}
      overviewImageAlt="Brochure Design Services"
      overviewBadge="Professional & Creative Brochure Design Services"
      overviewHeading="Designing Brochures That Speak"
      overviewHighlight="Your Brand's Story"
      overviewParagraphs={[
        "At Future IT Touch Pvt. Ltd. we design professional brochures that communicate your brand message clearly and leave a lasting impression. Our designers combine creativity with strategic thinking to produce brochures that convert.",
        "From bi-fold and tri-fold to digital brochures, we handle everything — concept, design, typography, imagery, and print-ready files — ensuring your brand stands out at every touchpoint.",
        "With over 15 years of design expertise, we have crafted thousands of brochures across industries. Every design reflects your brand identity, engages your audience, and drives business results.",
      ]}
      overviewCtaText="Design Your Brochure Today"
      featuresBadge="Creative Brochure Design Services"
      featuresTitle="Transforming Brand Messages into"
      featuresTitleHighlight="Visually Stunning Print Designs"
      featuresStickyImg={d1}
      features={features}
      bizBadge="Professional Brochure Design Company in India"
      bizHeading="Crafting Brochures That Attract, Inform &"
      bizHighlight="Inspire Customers"
      bizCards={businessData}
      sliderTitle="Designing Impactful Brochures That Inspire, Inform & Impress"
      sliderCards={cards}
      platformsTitle="Brochure Design Solutions We Deliver"
      platforms={platforms}
      faqTitle="About Our Brochure Design Services"
      faqData={faqData}
    />
  );
};

export default Brochure;
