import React from "react";
import {
  FaBug, FaCloud, FaRocket, FaTools, FaServer, FaCogs,
  FaDatabase, FaLock, FaCheckCircle, FaLayerGroup,
  FaStar, FaHeadset, FaCode, FaSyncAlt, FaPaintBrush, FaGamepad,
} from "react-icons/fa";
import { SiUnity } from "react-icons/si";
import unityImg from "../Assets/gam2d3d.webp";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";

const Unity = () => (
  <CommonTechPage
    banner={{
      bgImage: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1600&q=85",
      image: unityImg,
      category: "Game Development",
      breadcrumb: "Unity · AR/VR · Multiplayer",
      title: "Unity · AR/VR · Multiplayer",
      tagline:
        "Build immersive, cross-platform 2D, 3D, AR, and VR games using Unity — the world's most versatile game engine trusted by studios worldwide for stunning visuals, real-time performance, and multi-platform reach.",
    }}

    intro={{
      badge: "Future IT Touch · Unity Game Experts",
      heading: "Create Stunning, Cross-Platform Games with",
      highlight: "Unity Game Development",
      paras: [
        "At Future IT Touch, we craft high-performance, visually immersive games using Unity — the industry-leading engine trusted by developers worldwide for building next-generation 2D, 3D, AR, and VR experiences across every major platform.",
        "Our Unity developers combine cutting-edge graphics, optimized gameplay mechanics, and engaging storytelling to deliver exceptional player experiences on mobile, desktop, console, and VR devices — from casual games to complex enterprise simulations.",
        "From creative concept and prototyping through full-scale development, multiplayer integration, and long-term post-launch support, we handle every stage of your Unity game journey — ensuring creativity, performance, and innovation at every step.",
      ],
      highlights: [
        "2D, 3D, AR & VR game development across mobile, console, desktop & WebGL",
        "Real-time multiplayer with Photon, Mirror, and cloud-based matchmaking systems",
        "ARKit, ARCore & mixed reality integration for next-generation immersive experiences",
        "Full-cycle deployment on iOS, Android, Steam, PlayStation, Xbox & Oculus platforms",
      ],
      stats: [
        { num: "150+", label: "Unity Games Delivered",           desc: "Action, simulation, AR/VR, and casual games launched across genres worldwide.",  icon: <SiUnity /> },
        { num: "9+",   label: "Years Game Dev Expertise",        desc: "Nine-plus years building high-performing and visually immersive Unity experiences.", icon: <FaLayerGroup /> },
        { num: "300+", label: "Global Gaming Clients",           desc: "300+ studios and brands trust us for interactive Unity games across audiences.",    icon: <FaStar /> },
        { num: "24/7", label: "Technical & Creative Support",    desc: "Round-the-clock support keeping your game updated, optimized, and engaging.",       icon: <FaHeadset /> },
      ],
    }}

    services={[
      {
        icon: <SiUnity />,
        title: "Custom Unity Game Development",
        desc: "High-quality 2D and 3D games tailored to your creative vision — built for cross-platform performance across mobile, PC, console, and AR/VR with stunning visuals and optimized mechanics.",
        points: [
          "2D & 3D cross-platform Unity games",
          "Immersive gameplay & physics systems",
          "End-to-end concept-to-launch delivery",
          "Mobile, PC, console & VR support",
        ],
      },
      {
        icon: <FaGamepad />,
        title: "AR/VR Game Development",
        desc: "Next-generation AR and VR experiences powered by Unity — virtual reality simulations, training environments, ARKit & ARCore integrations, and mixed reality for enterprise and entertainment.",
        points: [
          "ARKit & ARCore integration",
          "VR simulations & training apps",
          "Mixed reality (MR) experiences",
          "Oculus, HTC Vive & HoloLens support",
        ],
      },
      {
        icon: <FaCloud />,
        title: "Multiplayer & Networked Games",
        desc: "Real-time multiplayer games with secure backend, matchmaking, cloud game servers, in-game chats, leaderboards, and live events — built for scalability and minimal latency.",
        points: [
          "Real-time multiplayer & matchmaking",
          "Cloud game servers & low latency",
          "In-game chat & leaderboards",
          "Photon & Mirror networking",
        ],
      },
      {
        icon: <FaBug />,
        title: "Game Testing & Quality Assurance",
        desc: "Rigorous gameplay, graphics, and performance testing across mobile, console, and desktop — cross-platform compatibility and continuous integration workflows for stable, bug-free builds.",
        points: [
          "Gameplay & graphics QA testing",
          "Cross-platform compatibility checks",
          "Device & resolution testing",
          "CI/CD automated build pipelines",
        ],
      },
      {
        icon: <FaRocket />,
        title: "Game Deployment & Optimization",
        desc: "Deploying Unity games across iOS, Android, Steam, PlayStation, and Xbox — with rendering pipeline optimization, asset tuning, GPU performance improvements, and player analytics setup.",
        points: [
          "iOS, Android, Steam & console deploy",
          "Rendering pipeline optimization",
          "GPU & frame-rate performance tuning",
          "Player engagement analytics",
        ],
      },
      {
        icon: <FaTools />,
        title: "Post-Launch Maintenance & Updates",
        desc: "Continuous updates, new features, patches, and balance improvements after release — with version management, player feedback monitoring, and 24/7 support for long-term game success.",
        points: [
          "24/7 post-launch support",
          "New content & feature rollouts",
          "Unity version upgrade management",
          "Gameplay balance & performance fixes",
        ],
      },
    ]}

    process={[
      { icon: <FaCheckCircle />, title: "Concept & Game Design",              desc: "Analyzing your game idea, defining core mechanics, and creating a compelling gameplay strategy — laying a strong creative and technical foundation in Unity." },
      { icon: <FaPaintBrush />,  title: "Art & Asset Production",             desc: "Designing stunning 2D/3D assets, environments, character rigs, and animations tailored precisely to your game's visual style and target audience." },
      { icon: <FaCode />,        title: "Unity Game Development",             desc: "Implementing game mechanics, physics, AI, and gameplay logic with clean, performant C# code — bringing your creative vision to life in the Unity engine." },
      { icon: <FaCloud />,       title: "Backend & Multiplayer Integration",  desc: "Building secure backend systems, integrating real-time multiplayer features, and enabling cloud connectivity for live events and player data management." },
      { icon: <FaBug />,         title: "Testing & Quality Assurance",        desc: "Comprehensive testing ensuring flawless gameplay, optimized performance, and full compatibility across devices, resolutions, and target platforms." },
      { icon: <FaRocket />,      title: "Deployment & Launch",                desc: "Handling deployment across app stores and gaming platforms — ensuring smooth publishing, store compliance, and performance from day one of launch." },
      { icon: <FaSyncAlt />,     title: "Post-Launch Support & Optimization", desc: "Continuously monitoring, optimizing, and updating your game post-release to keep players engaged, fix emerging issues, and drive long-term growth." },
    ]}

    features={[
      { icon: <FaServer />,   title: "Cross-Platform Game Development",  desc: "Unity games that run flawlessly across mobile, console, desktop, and WebGL — delivering a consistent and engaging experience on every platform your players use." },
      { icon: <FaCogs />,     title: "Real-Time Multiplayer Support",     desc: "Real-time networking, matchmaking, and dedicated server management for interactive, low-latency multiplayer gaming experiences at any scale." },
      { icon: <FaDatabase />, title: "Cloud Integration & Analytics",     desc: "Cloud databases, player analytics, and backend services providing real-time performance insights and data-driven decisions for continuous game improvement." },
      { icon: <FaLock />,     title: "Game Security & Data Protection",   desc: "Secure user authentication, in-game purchase protection, and data integrity safeguards to protect players and prevent exploitation across all platforms." },
      { icon: <FaRocket />,   title: "Performance Optimization",          desc: "Advanced Unity optimization techniques — LOD systems, occlusion culling, GPU instancing, and asset compression — reducing lag and load times dramatically." },
      { icon: <FaTools />,    title: "Ongoing Maintenance & Updates",     desc: "Continuous game updates, bug fixes, and new content releases to maintain player engagement, resolve issues, and extend the life of your game." },
    ]}

    stack={[
      { name: "Unity 2022 LTS" },
      { name: "C# Scripting" },
      { name: "Unity HDRP / URP" },
      { name: "Photon PUN 2" },
      { name: "Mirror Networking" },
      { name: "ARKit / ARCore" },
      { name: "Oculus SDK" },
      { name: "Blender / Maya" },
      { name: "Firebase" },
      { name: "PlayFab" },
      { name: "Nakama" },
      { name: "Unity Ads / IronSource" },
      { name: "GitHub Actions" },
      { name: "Unity Cloud Build" },
      { name: "Plastic SCM / Git" },
      { name: "Fastlane CI/CD" },
    ]}

    slider={[
      { count: "150+", title: "Unity Games Delivered",           desc: "150+ Unity-powered games launched across action, simulation, AR/VR, and casual genres — built for engaging gameplay and memorable player experiences.",              image: "/Assets/seerviceSlider/slide1.webp" },
      { count: "9+",   title: "Years of Game Dev Expertise",     desc: "Nine-plus years in Unity game development — mastering 2D, 3D, AR/VR, multiplayer systems, and optimization for high-performing cross-platform titles.",           image: "/Assets/seerviceSlider/slide2.webp" },
      { count: "300+", title: "Global Gaming Clients",           desc: "300+ studios and brands worldwide trust us to build interactive, polished Unity games for diverse audiences across mobile, console, and desktop platforms.",         image: "/Assets/seerviceSlider/slide3.webp" },
      { count: "98%",  title: "Client Satisfaction Rate",        desc: "98% satisfaction rate driven by our commitment to creativity, technical excellence, on-time delivery, and long-term support on every gaming project.",             image: "/Assets/seerviceSlider/slide4.webp" },
      { count: "24/7", title: "Technical & Creative Support",    desc: "Round-the-clock support ensuring your Unity game stays updated, optimized, and engaging for players — from launch through every future content update.",           image: "/Assets/seerviceSlider/slide5.webp" },
    ]}

    faq={{
      title: "Unity Game Development Services",
      items: [
        { title: "Why choose Unity for game development?",       description: "Unity offers powerful tools, cross-platform support, and stunning graphics capabilities — making it the ideal engine for modern 2D, 3D, AR, and VR game development." },
        { title: "Do you develop both 2D and 3D games?",         description: "Yes, we specialize in building engaging 2D, 3D, AR, and VR games in Unity — tailored to your creative vision, target audience, and technical requirements." },
        { title: "Can you build multiplayer games with Unity?",  description: "Absolutely. We develop real-time multiplayer games using cloud servers and frameworks like Photon and Mirror for scalable, low-latency online experiences." },
        { title: "Which platforms do you support?",              description: "We develop Unity games for iOS, Android, PC, WebGL, PlayStation, Xbox, and VR platforms like Oculus Quest, HTC Vive, and Microsoft HoloLens." },
        { title: "Do you offer game design and art services?",   description: "Yes, we provide complete game art, character animation, environment design, and UI/UX services alongside full Unity game development." },
        { title: "How do you ensure smooth performance?",        description: "We optimize code, assets, physics, and rendering pipelines to ensure your Unity game runs smoothly across all target devices and resolutions." },
        { title: "Can you help with game monetization?",         description: "Yes, we integrate in-app purchases, ad networks, subscriptions, and other monetization models to maximize your game's revenue potential." },
        { title: "Do you provide ongoing support after launch?", description: "We offer long-term maintenance, new content releases, performance monitoring, and updates to ensure your game's success long after initial launch." },
        { title: "Can you migrate an existing game to Unity?",   description: "Yes, we provide migration and remastering services to bring your existing game projects into the Unity engine with improved performance and visuals." },
        { title: "Do you offer AR/VR game development?",         description: "Yes, we build immersive AR/VR experiences using Unity for entertainment, enterprise training, simulation, and educational applications." },
      ],
    }}
  />
);

export default Unity;
