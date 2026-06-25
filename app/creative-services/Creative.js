"use client";
import cwd from "../Assets/cwd.webp";
import devops from "../Assets/app-intro.webp";
import CommonServicePage from "../components/CommonServicePage";
import {
  FaLightbulb, FaPalette, FaCommentDots, FaUsers, FaGlobe, FaBookOpen, FaChartPie,
  FaHandshake, FaChartLine, FaPencilRuler, FaDesktop, FaCode, FaSearch,
} from "react-icons/fa";

const Ecommerce = () => {
  const features = [
    {
      title: "Strategic Brand Positioning",
      description:
        "We help businesses define their unique brand voice, values, and positioning in the market. Our strategy ensures your brand stands out with purpose, clarity, and emotional connection to your audience.",
      icon: <FaLightbulb />,
    },
    {
      title: "Creative Visual Identity",
      description:
        "From logos to color palettes and typography, we create a cohesive and memorable visual identity that reflects your brand's personality and builds instant recognition across platforms.",
      icon: <FaPalette />,
    },
    {
      title: "Consistent Brand Messaging",
      description:
        "We craft compelling taglines, tone, and storytelling that communicate your brand's message consistently across all touchpoints — from websites and packaging to social media and campaigns.",
      icon: <FaCommentDots />,
    },
    {
      title: "Audience Research & Insights",
      description:
        "Understanding your target audience is key to impactful branding. We conduct in-depth research to identify customer expectations, perceptions, and preferences for better brand alignment.",
      icon: <FaUsers />,
    },
    {
      title: "Digital Presence & Engagement",
      description:
        "We strengthen your online identity through consistent visual and content strategies on digital platforms — ensuring your brand connects effectively with audiences across all channels.",
      icon: <FaGlobe />,
    },
    {
      title: "Brand Guidelines Development",
      description:
        "We design comprehensive brand guidelines that outline logo usage, color systems, fonts, and visual tone — ensuring your brand maintains uniformity and professionalism everywhere it appears.",
      icon: <FaBookOpen />,
    },
    {
      title: "Performance & Growth Analytics",
      description:
        "We track the effectiveness of your branding efforts through analytics, helping you measure brand engagement, awareness, and growth for continuous improvement and impact.",
      icon: <FaChartPie />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Strategic Brand Development",
      desc: "We help businesses define a clear brand vision and positioning strategy that connects emotionally with their audience and strengthens market presence.",
    },
    {
      icons: <FaPalette className="text-white w-8 h-8" />,
      title: "Creative Visual Identity",
      desc: "Our creative designers craft unique logos, color palettes, and typography that reflect your brand's personality and ensure consistent recognition everywhere.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Collaborative Approach",
      desc: "We work closely with clients to understand their goals and translate ideas into powerful brand visuals and messaging that inspire trust and loyalty.",
    },
  ];

  const cards = [
    {
      count: "250+",
      title: "Brands Transformed",
      desc: "We've helped over 250 businesses build strong brand identities that capture attention and connect emotionally with their audiences. From startups to enterprises, our creative solutions turn visions into recognizable brands.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "15+",
      title: "Years of Creative Expertise",
      desc: "With more than 15 years of experience in branding and creative strategy, Future IT Touch Pvt. Ltd. brings deep insight and innovation to every project, helping brands establish authority and trust in competitive markets.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Global Clients Empowered",
      desc: "Trusted by over 500 clients worldwide, we deliver impactful brand identity solutions tailored to each business's personality, ensuring consistent visibility and recognition across industries and audiences.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our client-first approach and dedication to creativity have earned us a 98% satisfaction rate. We collaborate closely with businesses to design meaningful brand stories that inspire and engage their audiences.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Creative Support",
      desc: "Our team provides continuous brand support, ensuring consistency across all touchpoints — from visual assets to digital presence. We're here to help your brand evolve, stay relevant, and grow stronger every day.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaPalette className="text-white w-6 h-6" />,
      title: "Visual Identity Design",
      desc: "We craft unique logos, color schemes, and typography systems that capture your brand's personality and create a consistent, memorable visual identity across all platforms.",
    },
    {
      icon: <FaPencilRuler className="text-white w-6 h-6" />,
      title: "Brand Strategy & Guidelines",
      desc: "Our team develops comprehensive brand strategies and guidelines to ensure every communication reflects your brand's vision, values, and voice consistently across channels.",
    },
    {
      icon: <FaDesktop className="text-white w-6 h-6" />,
      title: "UI/UX Design",
      desc: "We design engaging and user-friendly interfaces that enhance the customer experience, reinforce your brand identity, and create lasting impressions on digital platforms.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Front-End Development",
      desc: "Our front-end developers translate brand designs into interactive and responsive web experiences, ensuring consistency, performance, and visually appealing layouts.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Back-End Development",
      desc: "We implement scalable and secure back-end systems to support your brand's online presence, including content management, integrations, and database management.",
    },
    {
      icon: <FaSearch className="text-white w-6 h-6" />,
      title: "Digital Marketing & SEO",
      desc: "We optimize your online presence with SEO strategies, content marketing, and digital campaigns to enhance visibility, engage audiences, and strengthen your brand identity.",
    },
  ];

  const faqData = [
    {
      title: "What services are included in Brand Identity Solutions?",
      description:
        "Our services include logo design, color palettes, typography systems, brand messaging, visual guidelines, and digital presence strategies to create a cohesive and memorable brand identity.",
    },
    {
      title: "Can you customize branding for my business?",
      description:
        "Absolutely! We tailor every aspect of your brand identity — from visual elements to messaging — ensuring it reflects your unique vision, values, and business goals.",
    },
    {
      title: "How do you ensure brand consistency?",
      description:
        "We develop detailed brand guidelines and strategy documents that outline logo usage, color schemes, typography, tone of voice, and design principles to maintain consistency across all platforms.",
    },
    {
      title: "Do you provide digital branding solutions?",
      description:
        "Yes, we integrate your brand identity into websites, social media, marketing campaigns, and other digital touchpoints to ensure consistent and engaging online presence.",
    },
    {
      title: "Can you revamp an existing brand?",
      description:
        "Definitely! We can refresh your current brand by enhancing its visual identity, messaging, and digital presence to make it more modern, engaging, and aligned with your audience.",
    },
    {
      title: "Do you provide ongoing brand support?",
      description:
        "Yes, we offer continuous support to ensure your brand remains consistent and relevant. This includes updating brand assets, maintaining design standards, and guiding digital marketing efforts.",
    },
  ];

  return (
    <CommonServicePage
      bannerImg={cwd}
      bannerTitle="Creative Agency Branding"
      bannerDesc="Future IT Touch Pvt. Ltd. is the governing creative branding agency in India taking care of the details of customer's needs. Since, a brand is what people will perceive, the team at Future IT Touch Pvt. Ltd. sharpens the branding strategies in a way to attract your audience. The Internet is flooded with loads of diverse definitions of what a brand is. Let's just knock out the confusion and keep it simple and straight. A brand is the identity or personality of your business. And, when personality goes unpleasant, everything goes out of order. Future IT Touch Pvt. Ltd. is armed with quality dipped product branding services in India which leaves you with results giving your business an everlasting success. We guard the personality of your business to make you stand out in the crowd."
      overviewImage={devops}
      overviewImageAlt="Brand Identity & Strategy Services"
      overviewBadge="Trusted Brand Identity & Strategy Development"
      overviewHeading="Crafting Brands That Speak,"
      overviewHighlight="Connect, and Grow"
      overviewParagraphs={[
        "At Future IT Touch Pvt. Ltd. we help businesses establish strong, consistent brand identities through strategy, creativity, and design excellence.",
        "A strong brand identity is more than just a logo — it's the essence of how your business is perceived. Our branding services focus on creating meaningful brand experiences that connect emotionally and visually.",
        { boldPrefix: "For Businesses:", text: "We define your brand voice, messaging, and visual style to ensure consistency across every platform. From color palettes and typography to marketing assets, everything reflects your unique story." },
        { boldPrefix: "For Audiences:", text: "We design engaging visuals, creative storytelling, and user-centered brand experiences that build trust and loyalty." },
        "With over 15 years of creative expertise, we craft distinctive brand identities that leave lasting impressions. Choose our Brand Identity & Strategy Solutions to make your business stand out.",
      ]}
      overviewCtaText="Build Your Brand Identity"
      featuresBadge="Creative Agency Branding Solutions"
      featuresTitle="Building Powerful Brand Identities That"
      featuresTitleHighlight="Inspire & Connect"
      featuresStickyImg={devops}
      features={features}
      bizBadge="Leading Brand Identity & Creative Agency in India"
      bizHeading="Crafting Unique Identities that"
      bizHighlight="Inspire & Connect"
      bizCards={businessData}
      sliderTitle="Crafting Memorable Brand Identities with Creativity & Strategy"
      sliderCards={cards}
      platformsTitle="Brand Identity & Creative Solutions We Deliver"
      platforms={platforms}
      faqTitle="About Brand Identity & Creative Solutions"
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

export default Ecommerce;
