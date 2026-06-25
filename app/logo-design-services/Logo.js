"use client";
import d1 from "../Assets/graphic-and-logo-design-service.webp";
import gm from "../Assets/logo-1.webp";
import CommonServicePage from "../components/CommonServicePage";
import {
  FaBuilding, FaBoxOpen, FaLayerGroup, FaFileAlt, FaFolderOpen, FaBookOpen,
  FaLightbulb, FaHandshake, FaPalette, FaChartLine,
  FaPencilRuler, FaDesktop, FaCode, FaSearch,
} from "react-icons/fa";

const Logo = () => {
  const features = [
    {
      title: "Custom Business Logo Design",
      description:
        "We create fully customized logos that perfectly capture your business identity. Each design incorporates thoughtful color schemes, typography, and symbolic elements that align with your brand values and target audience. Our goal is to craft a logo that not only stands out visually but also communicates your brand story and helps establish a strong market presence. With attention to detail and strategic design, we ensure your logo creates a lasting impression.",
      icon: <FaBuilding />,
    },
    {
      title: "Icon & Symbol Design",
      description:
        "Our designers specialize in crafting memorable icons and symbols that serve as visual shorthand for your brand. By combining creativity with brand insights, we design symbols that are simple yet highly impactful, making your brand instantly recognizable. These elements can be used across digital and print media to strengthen brand recall, enhance customer engagement, and convey complex ideas in a visually appealing way.",
      icon: <FaBoxOpen />,
    },
    {
      title: "Typography & Calligraphy Logos",
      description:
        "Typography and calligraphy logos are designed to give your brand a unique personality. We carefully select fonts, lettering styles, and artistic flourishes that reflect your brand's tone, whether elegant, modern, playful, or professional. Every curve, spacing, and stroke is considered to ensure the logo communicates the intended message effectively while leaving a lasting visual impression on your audience.",
      icon: <FaChartLine />,
    },
    {
      title: "Brand Mascot Logos",
      description:
        "Brand mascot logos are an excellent way to build emotional connections with your audience. We create distinctive mascots that embody your brand's values, personality, and story. These characters can be used in marketing campaigns, merchandise, and social media, helping your brand stand out in a crowded market. A well-designed mascot becomes a memorable symbol that people associate with trust, friendliness, and engagement.",
      icon: <FaBookOpen />,
    },
    {
      title: "Lettermark & Monogram Logos",
      description:
        "Lettermark and monogram logos are minimalistic yet powerful ways to represent your brand. We craft these logos using initials or short letter combinations, focusing on clean, sophisticated designs that convey professionalism and elegance. Ideal for luxury brands, corporate identities, and personal brands, these logos are versatile, scalable, and highly recognizable across all mediums, from digital platforms to print collateral.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Emblem & Badge Logos",
      description:
        "Emblem and badge logos are classic designs that convey authority, credibility, and heritage. We design logos that combine text and symbols into a cohesive unit, perfect for institutions, schools, government bodies, and formal organizations. Our approach ensures that your emblem logo communicates reliability, trustworthiness, and timeless professionalism while maintaining a visually appealing and balanced design.",
      icon: <FaFileAlt />,
    },
    {
      title: "Rebranding & Logo Refresh",
      description:
        "Rebranding and logo refresh services help established brands revitalize their visual identity for modern audiences. We analyze your existing brand image and craft updated logos that retain brand recognition while enhancing relevance, appeal, and versatility. Our team focuses on evolving the design to reflect growth, new values, or market positioning, ensuring your refreshed logo resonates with current and future customers while staying true to your brand's essence.",
      icon: <FaFolderOpen />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Creative Logo Concepts",
      desc: "We craft innovative logo concepts that reflect your brand's personality and values, making sure your logo stands out and leaves a lasting impression on your audience.",
    },
    {
      icons: <FaPalette className="text-white w-8 h-8" />,
      title: "Custom Typography & Design",
      desc: "Our designers blend custom typography, colors, and graphical elements to create logos that are visually striking, professional, and perfectly aligned with your brand identity.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Collaborative Logo Design ",
      desc: "We work closely with you throughout the design journey, incorporating feedback and insights to ensure your logo captures your vision and effectively communicates your brand story.",
    },
  ];

  const cards = [
    {
      count: "1000+",
      title: "Logos Successfully Designed",
      desc: "We've created over 1000 unique and professional logos for businesses across industries. Each design is tailored to capture brand identity, engage audiences, and leave a lasting impression.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "15+",
      title: "Years of Design Expertise",
      desc: "With more than 15 years of experience in logo and brand design, Future IT Touch Pvt. Ltd. delivers creative and impactful logos that elevate brand perception and recognition globally.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Global Clients Served",
      desc: "Trusted by over 500 international brands, we craft logos that strengthen brand identity, improve visibility, and resonate with target audiences across multiple platforms.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "99%",
      title: "Client Satisfaction Rate",
      desc: "Our dedication to creativity, precision, and client collaboration has earned us a 99% satisfaction rate. We ensure each logo meets your vision and brand strategy perfectly.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Ongoing Design Support",
      desc: "Our team provides continuous support — from revisions to final delivery — making sure your logo is polished, consistent, and ready for all branding needs.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaPalette className="text-white w-6 h-6" />,
      title: "Creative Logo Concepts",
      desc: "We develop unique logo concepts that capture your brand essence, combining symbolism, typography, and colors to create visually compelling designs that stand out in the market.",
    },
    {
      icon: <FaPencilRuler className="text-white w-6 h-6" />,
      title: "Custom Typography & Iconography",
      desc: "Our designers craft tailored typography and icons for each logo, ensuring that every element aligns with your brand identity and communicates your message effectively.",
    },
    {
      icon: <FaDesktop className="text-white w-6 h-6" />,
      title: "Versatile & Scalable Designs",
      desc: "We create logos that work seamlessly across digital and print mediums — from websites and social media to business cards and signage — maintaining clarity and impact at any size.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Brand Identity Integration",
      desc: "Our logo designs are integrated into your overall brand strategy, ensuring consistency with colors, fonts, and visual messaging to strengthen brand recognition.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Rebranding & Logo Refresh",
      desc: "We offer expert logo redesigns and rebranding services to modernize your visual identity while maintaining brand recall and appeal for existing and new audiences.",
    },
    {
      icon: <FaSearch className="text-white w-6 h-6" />,
      title: "Quality & Satisfaction Guarantee",
      desc: "Every logo goes through thorough quality checks and client feedback rounds to ensure the final design meets your expectations and effectively represents your brand.",
    },
  ];

  const faqData = [
    {
      title: "What services are included in Logo Design?",
      description:
        "Our services cover logo concept creation, typography and iconography design, brand identity integration, versatile and scalable designs, and rebranding support to deliver professional, memorable logos.",
    },
    {
      title: "Can you create custom logos for my business?",
      description:
        "Absolutely! Every logo is uniquely crafted to match your business goals, brand personality, and target audience. We ensure the design is original, visually appealing, and aligned with your brand message.",
    },
    {
      title: "Do you provide logos suitable for both digital and print?",
      description:
        "Yes, we design logos that are optimized for all platforms, including websites, social media, business cards, packaging, and large-scale prints, ensuring consistent quality and visual impact.",
    },
    {
      title: "Can you refresh or redesign my existing logo?",
      description:
        "Definitely! We provide rebranding and logo refresh services to modernize your logo while maintaining brand recognition and enhancing its appeal to current and new audiences.",
    },
    {
      title: "How do you ensure logo design quality?",
      description:
        "Our process includes detailed brand analysis, multiple design concepts, iterative client feedback, and quality assurance checks to deliver logos that are professional, impactful, and on-brand.",
    },
    {
      title: "Do you offer ongoing support after logo delivery?",
      description:
        "Yes, we provide ongoing support including logo file updates, revisions, brand guidelines assistance, and guidance on how to maintain consistency across all digital and print materials.",
    },
  ];

  return (
    <CommonServicePage
      bannerImg={gm}
      bannerTitle="LOGO DESIGN SERVICES"
      bannerDesc="A well-designed logo is more than just a creative mark. It facilitates brand recognition. As an certified logo design company in India, our experienced logo designers know how to deliver a memorable logo that noticeably stands out, ultimately building a unique identity. Engage our logo design services to get a perfect emblem that best represents your brand."
      overviewImage={gm}
      overviewImageAlt="Logo Design Services"
      overviewBadge="Professional & Creative Logo Design Services"
      overviewHeading="Designing Logos That Inspire"
      overviewHighlight="a Unique Brand Vision"
      overviewParagraphs={[
        "At Future IT Touch Pvt. Ltd. we go beyond templates to craft logos that truly reflect your brand's identity. A well-designed logo evokes emotions, builds recall, and helps grow your customer base.",
        "Think about some of the iconic brands you remember – the moment you see their logo, the entire brand story comes to mind. Our experienced designers combine symbols, calligraphy, design art, and other aesthetic elements to create logos that leave a lasting impression.",
        "With over 15 years of experience and a team of creative professionals, we deliver high-quality and unique Business Logo Design Services tailored for all your needs. As a trusted logo design company, we have served thousands of clients worldwide, helping brands establish credibility and visual identity.",
      ]}
      overviewCtaText="Design Your Logo Today"
      featuresBadge="Creative Logo Design Services"
      featuresTitle="Transforming Brand Identities into"
      featuresTitleHighlight="Memorable Logos"
      featuresStickyImg={d1}
      features={features}
      bizBadge="Professional Logo Design Company in India"
      bizHeading="Crafting Logos That Inspire, Engage &"
      bizHighlight="Build Brand Identity"
      bizCards={businessData}
      sliderTitle="Designing Memorable Logos That Build Brand Identity & Recognition"
      sliderCards={cards}
      platformsTitle="Logo Design Solutions We Deliver"
      platforms={platforms}
      faqTitle="About Our Logo Design Services"
      faqData={faqData}
      techCategories={[
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
      ]}
    />
  );
};

export default Logo;
