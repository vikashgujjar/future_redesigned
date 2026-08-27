"use client";
const gm = "/Assets/stock/photo-1626785774573-4b799315345d.webp";
import CommonServicePage from "../components/CommonServicePage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";
import {
  FaLightbulb, FaPalette, FaCommentDots, FaUsers, FaGlobe, FaBookOpen, FaChartPie,
  FaHandshake, FaChartLine, FaPencilRuler, FaDesktop, FaCode, FaSearch,
} from "react-icons/fa";

const features = [
  {
    title: "Concept & Script Development",
    description:
      "We craft compelling concepts and scripts that simplify complex ideas into clear, engaging narratives — ensuring your brand message is delivered effectively and memorably.",
    icon: <FaLightbulb />,
  },
  {
    title: "Creative Storyboarding",
    description:
      "Our experts design detailed storyboards that visualize the flow of your video before production — aligning visuals, voiceovers, and brand tone for perfect storytelling.",
    icon: <FaPalette />,
  },
  {
    title: "Custom Animation & Motion Graphics",
    description:
      "We create stunning 2D and 3D animations that bring your story to life with smooth transitions, vibrant visuals, and engaging motion effects that captivate viewers.",
    icon: <FaCommentDots />,
  },
  {
    title: "Voiceover & Sound Design",
    description:
      "Professional voiceovers and custom sound design enhance the emotional appeal of your videos — making them more impactful, authentic, and audience-friendly.",
    icon: <FaUsers />,
  },
  {
    title: "Product & Service Explainers",
    description:
      "We produce high-quality explainer videos that effectively showcase your products or services, increasing customer understanding and driving conversions.",
    icon: <FaGlobe />,
  },
  {
    title: "Brand Story Videos",
    description:
      "We help brands tell their unique stories through creative visuals and inspiring narratives that build trust, emotion, and lasting audience connections.",
    icon: <FaBookOpen />,
  },
  {
    title: "Performance Tracking & Optimization",
    description:
      "We analyze video engagement metrics to optimize content for better viewer retention, brand recall, and marketing ROI — ensuring your videos achieve real results.",
    icon: <FaChartPie />,
  },
];

const businessData = [
  {
    icons: <FaLightbulb className="text-white w-8 h-8" />,
    title: "Creative Script Development",
    desc: "We craft engaging scripts and storylines that simplify complex messages, helping brands communicate their ideas clearly and effectively through video.",
  },
  {
    icons: <FaPalette className="text-white w-8 h-8" />,
    title: "Professional Animation Design",
    desc: "Our skilled animators create captivating 2D and 3D visuals that bring your brand stories to life with clarity, creativity, and lasting audience appeal.",
  },
  {
    icons: <FaHandshake className="text-white w-8 h-8" />,
    title: "Client-Focused Collaboration",
    desc: "We partner closely with clients at every step to ensure each video reflects their goals, brand voice, and vision while maintaining a smooth production flow.",
  },
];

const cards = [
  {
    count: "250+",
    title: "Videos Successfully Delivered",
    desc: "We've produced over 250 high-quality explainer videos that simplify complex ideas and help businesses communicate their stories effectively. From startups to enterprises, our videos drive engagement and conversions.",
    image: "/Assets/stock/photo-1626785774573-4b799315345d.webp",
  },
  {
    count: YEARS_EXPERIENCE_DISPLAY,
    title: "Years of Production Expertise",
    desc: `With more than ${YEARS_EXPERIENCE_DISPLAY} years of experience in creative storytelling and animation, Future IT Touch Pvt. Ltd. delivers impactful explainer videos that educate, inspire, and connect with audiences worldwide.`,
    image: "/Assets/stock/photo-1586953208448-b95a79798f07.webp",
  },
  {
    count: "500+",
    title: "Global Clients Served",
    desc: "Trusted by over 500 international brands, we create explainer videos that enhance communication, strengthen marketing efforts, and increase brand visibility across digital platforms.",
    image: "/Assets/stock/photo-1600857544200-b2f666a9a2ec.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our commitment to creativity, clarity, and storytelling excellence has earned us a 98% satisfaction rate. We focus on delivering videos that truly represent your brand and connect with your audience.",
    image: "/Assets/stock/photo-1555066931-4365d14bab8c.webp",
  },
  {
    count: "24/7",
    title: "Dedicated Video Support",
    desc: "Our creative team provides round-the-clock support — from script revisions to post-production edits — ensuring every video meets your goals and maintains top-tier quality at all times.",
    image: "/Assets/stock/photo-1561070791-2526d30994b5.webp",
  },
];

const platforms = [
  {
    icon: <FaPalette className="text-white w-6 h-6" />,
    title: "Story & Script Development",
    desc: "We craft engaging scripts that simplify complex ideas, ensuring your explainer videos clearly communicate your message and resonate with your audience.",
  },
  {
    icon: <FaPencilRuler className="text-white w-6 h-6" />,
    title: "Storyboarding & Visual Planning",
    desc: "Our team develops detailed storyboards to map out the flow of your video, aligning visuals, voiceovers, and brand tone for maximum clarity and impact.",
  },
  {
    icon: <FaDesktop className="text-white w-6 h-6" />,
    title: "Custom Animation & Motion Graphics",
    desc: "We design high-quality 2D and 3D animations with smooth motion graphics, bringing your story to life and keeping viewers engaged from start to finish.",
  },
  {
    icon: <FaCode className="text-white w-6 h-6" />,
    title: "Voiceover & Sound Design",
    desc: "Professional voiceovers and custom soundtracks enhance the emotional impact of your videos, making your message memorable and engaging.",
  },
  {
    icon: <FaChartLine className="text-white w-6 h-6" />,
    title: "Explainer Video Production",
    desc: "From concept to final delivery, we handle every step of production to ensure your explainer video is polished, professional, and effective.",
  },
  {
    icon: <FaSearch className="text-white w-6 h-6" />,
    title: "Performance & Optimization",
    desc: "We analyze video engagement metrics and optimize content to boost viewer retention, brand recall, and overall impact for maximum ROI.",
  },
];

const faqData = [
  {
    title: "What services are included in Explainer Video production?",
    description:
      "Our services include concept development, scriptwriting, storyboarding, animation design, voiceovers, motion graphics, and final video production to deliver engaging and clear explainer videos.",
  },
  {
    title: "Can you customize explainer videos for my business?",
    description:
      "Absolutely! We tailor every aspect of your explainer video — from style and animation to voiceover and storytelling — ensuring it perfectly represents your brand and message.",
  },
  {
    title: "How do you ensure video quality and consistency?",
    description:
      "We follow a structured production process with detailed storyboards, animation guidelines, and professional post-production checks to maintain high-quality, consistent output across all videos.",
  },
  {
    title: "Do you provide videos for digital platforms?",
    description:
      "Yes, we create explainer videos optimized for websites, social media, marketing campaigns, presentations, and other digital channels to maximize engagement and reach.",
  },
  {
    title: "Can you revamp an existing explainer video?",
    description:
      "Definitely! We can enhance your current videos by improving visuals, animations, voiceovers, and storytelling to make them more modern, engaging, and aligned with your audience.",
  },
  {
    title: "Do you provide ongoing video support?",
    description:
      "Yes, we offer continuous support including video updates, revisions, optimization for new platforms, and guidance to ensure your explainer videos stay relevant and effective.",
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
  bannerTitle: "Explainer Video Services",
  bannerDesc: "Videos are a great means to explain your business, products or services to potential customers. Invest in a professional explainer video to get discovered faster, generate greater brand awareness, and grow your customer base. Future IT Touch Pvt. Ltd. is an certified company providing a wide array of digital solutions to clients across the world. Our corporate video production services help you turn your visitors into loyal followers of your brand. Avail our explainer video services and create amazing videos for your target audience.",
  overviewImage: gm,
  overviewImageAlt: "Explainer Video Services",
  overviewBadge: "Creative & Impactful Explainer Video Services",
  overviewHeading: "Explain, Engage, and Inspire Through",
  overviewHighlight: "Motion",
  overviewParagraphs: [
    "At Future IT Touch Pvt. Ltd. we transform complex ideas into compelling visual stories through animated explainer videos. Our team of creative storytellers and motion designers craft videos that captivate audiences and drive action.",
    "From 2D and 3D animations to whiteboard explainers and motion graphics, we create videos that simplify your message, build brand credibility, and boost conversions across all platforms.",
    `With over ${YEARS_EXPERIENCE_DISPLAY} years of experience, we have delivered hundreds of animated videos for startups and enterprises alike — each one tailored to your brand voice, audience, and business goals.`,
  ],
  overviewCtaText: "Create Your Explainer Video",
  features,
  bizCards: businessData,
  sliderCards: cards,
  platforms,
  techCategories,
  faqData,
};

const Animated = ({ cms } = {}) => {
  const content = cms
    ? { ...cms, bannerImg: cms.bannerImg || gm, overviewImage: cms.overviewImage || FALLBACK_CONTENT.overviewImage }
    : FALLBACK_CONTENT;

  return (
    <CommonServicePage
      {...content}
      featuresBadge="Engaging Explainer Video Services"
      featuresTitle="Turning Complex Ideas into Clear,"
      featuresTitleHighlight="Captivating Visual Stories"
      bizBadge="Leading Explainer Video Production Company in India"
      bizHeading="Creating Videos That Explain, Engage &"
      bizHighlight="Inspire Action"
      sliderTitle="Crafting Memorable Brand Identities with Creativity & Strategy"
      platformsTitle="Explainer Video Solutions We Deliver"
      faqTitle="About Our Explainer Video Services"
    />
  );
};

export default Animated;
