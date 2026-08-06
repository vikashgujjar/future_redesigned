import React from "react";
import {
  FaPoll, FaLock, FaRocket, FaCode, FaServer,
  FaDatabase, FaCogs, FaShieldAlt, FaTools,
  FaCheckCircle, FaLayerGroup, FaStar, FaHeadset, FaSyncAlt, FaBug, FaCloud,
} from "react-icons/fa";
import customerImg from "../Assets/solidity.webp";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";

const Customer = () => (
  <CommonTechPage
    banner={{
      bgImage: "/Assets/stock/photo-1614680376593-902f74cf0d41.webp",
      image: customerImg,
      category: "Blockchain Voting & Polls",
      breadcrumb: "Blockchain · Customer Polls · Voting",
      title: "Blockchain · Customer Polls · Voting",
      tagline:
        "Build secure, transparent, and tamper-proof customer polling and voting systems on blockchain — delivering verifiable, decentralized results for enterprise surveys, elections, and customer feedback platforms.",
    }}

    intro={{
      badge: "Future IT Touch · Blockchain Poll Experts",
      heading: "Build Transparent Voting Systems with",
      highlight: "Customer Polls Blockchain",
      paras: [
        "At Future IT Touch, we specialize in creating high-performance blockchain polling solutions that leverage immutability, decentralized architecture, and cryptographic security — delivering trustworthy voting and survey applications for enterprises and institutions.",
        "From enterprise surveys and customer feedback polls to online elections and decentralized voting platforms, our developers craft blockchain polling systems optimized for transparency, scalability, and long-term reliability.",
        "Whether you need secure customer polls, election platforms, or real-time voting analytics, our team ensures tamper-proof, auditable systems with optimized performance and seamless integration — empowering your business with transparent and reliable decentralized polling.",
      ],
      highlights: [
        "Blockchain-based voting with cryptographic vote integrity and tamper-proof immutable records",
        "Smart contract-powered poll automation for vote submission, counting, and result verification",
        "RESTful APIs for voter management, real-time results, and multi-platform DApp integration",
        "Full-cycle development with security auditing, compliance, and 24/7 monitoring support",
      ],
      stats: [
        { num: "100+", label: "Blockchain Polls Delivered",  desc: "Transparent, tamper-proof blockchain polling systems built for enterprises worldwide.",  icon: <FaPoll /> },
        { num: YEARS_EXPERIENCE_DISPLAY,   label: "Years Blockchain Expertise",  desc: `${YEARS_EXPERIENCE_DISPLAY} years delivering secure and transparent blockchain-based voting solutions.`,    icon: <FaLayerGroup /> },
        { num: "150+", label: "Clients Served Globally",     desc: "150+ organizations trust us for reliable and verifiable blockchain polling platforms.",   icon: <FaStar /> },
      ],
    }}

    services={[
      {
        icon: <FaPoll />,
        title: "Custom Blockchain Polling Development",
        desc: "Secure, high-performance blockchain-based polling and voting applications — with modular, transparent backend architectures for vote tracking, tamper-proof results, and consensus management.",
        points: [
          "Blockchain vote tracking systems",
          "Tamper-proof result management",
          "Consensus protocol integration",
          "Clean, auditable polling code",
        ],
      },
      {
        icon: <FaServer />,
        title: "Decentralized Poll & Voting Solutions",
        desc: "Blockchain-based polling with transparency, immutability, and verifiable results — for customer surveys, elections, enterprise decisions, and DApp-integrated real-time vote collection.",
        points: [
          "Immutable & verifiable polls",
          "High-concurrency voting networks",
          "Enterprise & election systems",
          "DApp vote collection integration",
        ],
      },
      {
        icon: <FaCogs />,
        title: "Smart Contract & DApp Integration",
        desc: "Blockchain polling systems connected with smart contracts and DApps — APIs for vote submission, result verification, user authentication, and efficient vote counting pipelines.",
        points: [
          "Vote submission API development",
          "Result verification smart contracts",
          "Vote counting & auditing pipelines",
          "DApp & platform connectivity",
        ],
      },
      {
        icon: <FaDatabase />,
        title: "API & Node Development",
        desc: "RESTful APIs for poll submission, results, and user management — blockchain node integration with analytics dashboards for vote reporting and real-time monitoring.",
        points: [
          "Poll & voter management APIs",
          "Blockchain node integration",
          "Real-time vote analytics dashboards",
          "Scalable polling API services",
        ],
      },
      {
        icon: <FaShieldAlt />,
        title: "Security & Maintenance",
        desc: "Secure coding, encryption, and tamper-proof vote storage — protecting voter data, private keys, and blockchain records with regular security audits and compliance measures.",
        points: [
          "Vote data encryption & security",
          "Voter privacy & data protection",
          "Regular security audits",
          "Compliance & access controls",
        ],
      },
      {
        icon: <FaTools />,
        title: "Continuous Support & Optimization",
        desc: "Long-term support for blockchain polling platforms — consensus mechanism optimization, smart contract monitoring, system uptime tracking, and expert scalability consultation.",
        points: [
          "Long-term polling platform support",
          "Consensus mechanism optimization",
          "System uptime monitoring",
          "Scalability & upgrade consulting",
        ],
      },
    ]}

    process={[
      { icon: <FaCheckCircle />, title: "Requirement Analysis",              desc: "Understanding your polling needs, voter base, and security requirements — designing a roadmap for high-performance blockchain polling solutions." },
      { icon: <FaServer />,      title: "System Architecture Planning",      desc: "Designing scalable and secure architectures for decentralized polls, voting nodes, and distributed ledger systems." },
      { icon: <FaCogs />,        title: "Consensus & Algorithm Design",      desc: "Developing consensus protocols, vote validation algorithms, and cryptographic operations to ensure transparent and tamper-proof results." },
      { icon: <FaCloud />,       title: "Backend & Node Development",        desc: "Implementing blockchain nodes, APIs, and smart contract support for secure vote submission, counting, and result distribution." },
      { icon: <FaDatabase />,    title: "Data Management & Security",        desc: "Securely managing voter data, ballots, and results — ensuring integrity, privacy, and transparency across the entire polling system." },
      { icon: <FaRocket />,      title: "Integration & Deployment",          desc: "Integrating blockchain polling modules with DApps, websites, and mobile apps for seamless participation and real-time result delivery." },
      { icon: <FaShieldAlt />,   title: "Performance & Security Optimization",desc: "Optimizing nodes, vote processing, and smart contracts for high-performance, low-latency, and secure polling operations." },
      { icon: <FaBug />,         title: "Testing & Quality Assurance",       desc: "Rigorous testing of every polling component to ensure accuracy, security, and complete reliability of results." },
      { icon: <FaCode />,        title: "Deployment & Monitoring",           desc: "Handling network deployment, node configuration, and real-time monitoring for smooth polling operations and secure result delivery." },
      { icon: <FaSyncAlt />,     title: "Maintenance & Long-Term Support",   desc: "Ongoing updates, audits, and feature enhancements to maintain secure, transparent, and efficient blockchain polling systems." },
    ]}

    features={[
      { icon: <FaPoll />,      title: "Custom Blockchain Poll Development",desc: "Blockchain polling solutions that are secure, transparent, and scalable — ensuring reliable vote collection, tamper-proof results, and efficient participation." },
      { icon: <FaCogs />,      title: "High-Performance Polling Nodes",    desc: "Blockchain technology powering robust nodes for vote validation, ledger management, and reliable decentralized polling at any scale." },
      { icon: <FaServer />,    title: "Integration with DApps & Platforms",desc: "Blockchain polls integrated with websites, mobile apps, and decentralized platforms for real-time voting and analytics." },
      { icon: <FaLock />,      title: "Data Security & Privacy",           desc: "All ballots, voter data, and results secured with encryption and compliant with privacy regulations for complete trust and integrity." },
      { icon: <FaRocket />,    title: "Performance Optimization",          desc: "Blockchain nodes, smart contracts, and vote processing optimized for fast, efficient, and reliable polling under high voter loads." },
      { icon: <FaTools />,     title: "Ongoing Support & Optimization",    desc: "Continuous monitoring, maintenance, and improvements ensuring high availability, security, and reliability of blockchain polling systems." },
    ]}

    stack={[
      { name: "Solidity 0.8.x" },
      { name: "Ethereum / Polygon" },
      { name: "Hardhat / Truffle" },
      { name: "OpenZeppelin" },
      { name: "Ethers.js / Web3.js" },
      { name: "IPFS" },
      { name: "The Graph" },
      { name: "Node.js / TypeScript" },
      { name: "React (Voting DApp)" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "Docker" },
      { name: "AWS / GCP" },
      { name: "Chainlink (Randomness)" },
      { name: "Alchemy / Infura" },
      { name: "GitHub Actions" },
    ]}

    slider={[
      { count: "100+", title: "Blockchain Polls Delivered",       desc: "100+ blockchain-based polling systems implemented — delivering transparent, secure, and tamper-proof voting for elections, surveys, and customer feedback.",     image: "/Assets/seerviceSlider/slide1.webp" },
      { count: YEARS_EXPERIENCE_DISPLAY,   title: "Years of Blockchain Expertise",    desc: `${YEARS_EXPERIENCE_DISPLAY} years crafting robust blockchain polling solutions — optimizing transaction integrity, voting accuracy, and scalability for demanding use cases.`, image: "/Assets/seerviceSlider/slide2.webp" },
      { count: "150+", title: "Clients Served Globally",          desc: "150+ organizations trust us for secure and transparent blockchain voting solutions — spanning enterprises, government bodies, and research institutions.",     image: "/Assets/seerviceSlider/slide3.webp" },
      { count: "99%",  title: "Voting Integrity Success Rate",    desc: "99% reliability and tamper-proof accuracy in blockchain polling systems — ensuring completely trustworthy, verifiable results for all stakeholders.",          image: "/Assets/seerviceSlider/slide4.webp" },
      { count: "24/7", title: "Support & Monitoring",             desc: "Continuous monitoring, updates, and optimization maintaining stable, secure, and high-performance blockchain polling platforms at all times.",                image: "/Assets/seerviceSlider/slide5.webp" },
    ]}

    faq={{
      title: "Customer Polls Blockchain Services",
      items: [
        { title: "What is Blockchain Polling?",                       description: "Blockchain Polling involves using blockchain technology to build secure, transparent, and tamper-proof voting or survey systems with verifiable results." },
        { title: "Why use blockchain for customer polls?",            description: "Blockchain ensures security, transparency, and immutability of poll results — reducing fraud and enhancing trust in voting or survey systems." },
        { title: "Can blockchain handle large-scale polls?",          description: "Yes, blockchain is highly scalable and capable of managing large numbers of voters and high-volume transactions efficiently." },
        { title: "Is blockchain suitable for elections and surveys?", description: "Absolutely. Blockchain provides verifiable and tamper-proof systems suitable for online surveys, elections, and enterprise polls." },
        { title: "Do you integrate blockchain polls into platforms?", description: "Yes, we integrate blockchain polling modules with websites, apps, and enterprise systems for seamless participation and real-time analytics." },
        { title: "How secure are blockchain polls?",                  description: "We implement encryption, smart contracts, and secure coding practices to ensure votes, ballots, and results are completely safe and tamper-proof." },
        { title: "Can you optimize existing polling systems?",        description: "Yes, we enhance performance, security, and scalability of existing blockchain polling applications and voting platforms." },
        { title: "Do you provide long-term support?",                 description: "Yes, we offer continuous maintenance, monitoring, and updates to keep your polling systems secure, reliable, and compliant." },
        { title: "Which industries benefit from blockchain polling?", description: "Enterprises, government bodies, research organizations, and market research companies leverage blockchain for secure and transparent polls." },
        { title: "Can blockchain polls integrate with analytics?",    description: "Yes, blockchain polling solutions connect to reporting and analytics platforms for real-time monitoring, vote tracking, and business insights." },
      ],
    }}
  />
);

export default Customer;
