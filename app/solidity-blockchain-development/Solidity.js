import React from "react";
import {
  FaEthereum, FaLock, FaRocket, FaCode, FaServer,
  FaDatabase, FaCogs, FaShieldAlt, FaTools,
  FaCheckCircle, FaLayerGroup, FaStar, FaHeadset, FaSyncAlt, FaBug, FaCloud,
} from "react-icons/fa";
import solidityImg from "../Assets/solidity.webp";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";

const Solidity = () => (
  <CommonTechPage
    banner={{
      bgImage: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=1600&q=85",
      image: solidityImg,
      category: "Smart Contract Development",
      breadcrumb: "Solidity · Ethereum · DApps",
      title: "Solidity · Ethereum · DApps",
      tagline:
        "Build secure, transparent, and gas-efficient smart contracts and decentralized applications on Ethereum and EVM-compatible blockchains — leveraging Solidity's battle-tested contract language for trustless, immutable systems.",
    }}

    intro={{
      badge: "Future IT Touch · Solidity & Blockchain Experts",
      heading: "Build Trustless Smart Contracts with",
      highlight: "Solidity Blockchain",
      paras: [
        "At Future IT Touch, we specialize in crafting high-performance smart contracts and DApps using Solidity — the industry-standard language for Ethereum and EVM-compatible blockchains — delivering transparent, immutable, and cryptographically secure decentralized solutions.",
        "From DeFi platforms and NFT marketplaces to enterprise blockchain solutions and token management systems, our developers create Solidity-based applications optimized for security, gas efficiency, and long-term scalability.",
        "Whether you need smart contracts, decentralized platforms, or real-time blockchain analytics, our team ensures secure, auditable, and gas-efficient solutions — delivering seamless integration and empowering your business with reliable decentralized applications.",
      ],
      highlights: [
        "Solidity smart contracts on Ethereum, Polygon, BSC, and all major EVM-compatible chains",
        "DeFi protocols, NFT marketplaces, DAOs, and enterprise-grade DApp development",
        "Comprehensive smart contract auditing for reentrancy, overflow, and access control vulnerabilities",
        "Full deployment lifecycle with Hardhat, Truffle, OpenZeppelin, and 24/7 post-launch support",
      ],
      stats: [
        { num: "100+", label: "Solidity Contracts Delivered",  desc: "Smart contracts deployed for DeFi, NFT, and enterprise DApp platforms.",           icon: <FaEthereum /> },
        { num: "7+",   label: "Years Blockchain Expertise",    desc: "Seven-plus years delivering secure Solidity and Ethereum blockchain solutions.",      icon: <FaLayerGroup /> },
        { num: "150+", label: "Clients Served Globally",       desc: "150+ organizations trust us for secure, transparent Solidity smart contracts.",      icon: <FaStar /> },
        { num: "24/7", label: "Support & Monitoring",          desc: "Round-the-clock monitoring and support for smart contract and DApp performance.",    icon: <FaHeadset /> },
      ],
    }}

    services={[
      {
        icon: <FaEthereum />,
        title: "Custom Solidity Blockchain Development",
        desc: "Secure, efficient, and high-performance smart contracts using Solidity — modular, scalable DApps with enterprise-grade token management, DeFi platforms, and NFT marketplace solutions.",
        points: [
          "ERC-20, ERC-721 & ERC-1155 tokens",
          "DeFi protocols & yield contracts",
          "NFT marketplace smart contracts",
          "Clean, auditable Solidity code",
        ],
      },
      {
        icon: <FaServer />,
        title: "Decentralized Applications (DApps)",
        desc: "DApps with transparency, immutability, and verifiable transactions on Ethereum and EVM chains — optimized for high-concurrency decentralized networks across finance, gaming, and enterprise.",
        points: [
          "Ethereum & Polygon DApps",
          "High-concurrency network support",
          "Finance, gaming & enterprise DApps",
          "EVM-compatible chain deployment",
        ],
      },
      {
        icon: <FaCogs />,
        title: "Smart Contract & DApp Integration",
        desc: "Blockchain applications connected with smart contracts and DApps — APIs for token transfers, user authentication, automated transactions, and contract verification pipelines.",
        points: [
          "Token transfer API development",
          "Contract interaction interfaces",
          "Automated transaction pipelines",
          "DApp & contract connectivity",
        ],
      },
      {
        icon: <FaDatabase />,
        title: "API & Node Development",
        desc: "RESTful APIs for interacting with smart contracts and blockchain nodes — Ethereum/Polygon node integration with analytics dashboards and real-time monitoring systems.",
        points: [
          "Smart contract REST APIs",
          "Ethereum & Polygon node setup",
          "Analytics & monitoring dashboards",
          "Scalable blockchain API services",
        ],
      },
      {
        icon: <FaShieldAlt />,
        title: "Security & Maintenance",
        desc: "Secure coding, comprehensive smart contract auditing, and tamper-proof Solidity applications — protecting private keys, wallets, and sensitive data with regular audits.",
        points: [
          "Smart contract security auditing",
          "Reentrancy & overflow protection",
          "Private key & wallet security",
          "Regular audit cycles",
        ],
      },
      {
        icon: <FaTools />,
        title: "Continuous Support & Optimization",
        desc: "Long-term support for Solidity smart contracts and DApps — gas optimization, contract performance monitoring, network interaction optimization, and expert scalability consultation.",
        points: [
          "Gas optimization & efficiency",
          "Smart contract monitoring",
          "Network interaction optimization",
          "Scalability & upgrade consulting",
        ],
      },
    ]}

    process={[
      { icon: <FaCheckCircle />, title: "Requirement Analysis",              desc: "Analyzing your business needs, smart contract requirements, and blockchain goals to design an optimal Solidity solution roadmap." },
      { icon: <FaServer />,      title: "System Architecture Planning",      desc: "Designing scalable and secure blockchain architectures for Solidity smart contracts, DApps, and distributed ledger systems." },
      { icon: <FaCogs />,        title: "Smart Contract & Algorithm Design", desc: "Developing Solidity contracts, transaction algorithms, and cryptographic operations for secure and transparent on-chain execution." },
      { icon: <FaCloud />,       title: "Backend & Node Development",        desc: "Implementing blockchain nodes, APIs, and smart contract interfaces for decentralized application operations and data management." },
      { icon: <FaDatabase />,    title: "Data Management & Security",        desc: "Securely managing wallet addresses, transactions, and contract states to ensure integrity, privacy, and transparency." },
      { icon: <FaRocket />,      title: "Integration & Deployment",          desc: "Integrating Solidity smart contracts with DApps, websites, and mobile apps for seamless operations and real-time tracking." },
      { icon: <FaShieldAlt />,   title: "Performance & Security Optimization",desc: "Optimizing smart contracts, gas usage, and blockchain interactions for high-performance, low-latency, and secure applications." },
      { icon: <FaBug />,         title: "Testing & Quality Assurance",       desc: "Rigorous testing of all Solidity contracts to ensure accuracy, security, and reliability before mainnet deployment." },
      { icon: <FaCode />,        title: "Deployment & Monitoring",           desc: "Handling contract deployment, node setup, and monitoring to ensure smooth blockchain operations and secure transactions." },
      { icon: <FaSyncAlt />,     title: "Maintenance & Long-Term Support",   desc: "Ongoing updates, audits, and feature enhancements to maintain secure, transparent, and efficient Solidity solutions." },
    ]}

    features={[
      { icon: <FaCode />,      title: "Custom Solidity Smart Contracts",  desc: "Secure, efficient, and transparent smart contracts for DApps, DeFi platforms, and token systems — built with best-practice Solidity patterns." },
      { icon: <FaCogs />,      title: "High-Performance Blockchain Nodes",desc: "Ethereum and EVM-compatible nodes for transaction validation, ledger management, and reliable DApp operations at scale." },
      { icon: <FaServer />,    title: "Integration with DApps & Platforms",desc: "Solidity contracts integrated with web and mobile applications for real-time blockchain transactions and analytics." },
      { icon: <FaLock />,      title: "Data Security & Privacy",          desc: "Wallets, transactions, and contract data secured with encryption, auditing, and Solidity security best practices." },
      { icon: <FaRocket />,    title: "Performance Optimization",         desc: "Smart contracts, gas consumption, and blockchain interactions optimized for fast, efficient, and cost-effective operations." },
      { icon: <FaTools />,     title: "Ongoing Support & Optimization",   desc: "Continuous monitoring, updates, and improvements ensuring reliable and secure Solidity applications and DApp platforms." },
    ]}

    stack={[
      { name: "Solidity 0.8.x" },
      { name: "Hardhat" },
      { name: "Truffle" },
      { name: "OpenZeppelin" },
      { name: "Ethers.js / Web3.js" },
      { name: "Ethereum / Polygon" },
      { name: "Binance Smart Chain" },
      { name: "IPFS / Filecoin" },
      { name: "The Graph" },
      { name: "Chainlink Oracles" },
      { name: "Node.js / TypeScript" },
      { name: "React (DApp frontend)" },
      { name: "Docker" },
      { name: "AWS / GCP" },
      { name: "GitHub Actions" },
      { name: "Alchemy / Infura" },
    ]}

    slider={[
      { count: "100+", title: "Solidity Contracts Delivered",     desc: "100+ smart contracts and blockchain applications deployed across DeFi, NFT marketplaces, and enterprise DApps — gas-optimized and security-audited.",           image: "/Assets/seerviceSlider/slide1.webp" },
      { count: "7+",   title: "Years of Blockchain Expertise",    desc: "Seven-plus years of Solidity and blockchain development — delivering cutting-edge decentralized solutions with robust smart contract logic and best practices.",  image: "/Assets/seerviceSlider/slide2.webp" },
      { count: "150+", title: "Clients Served Globally",          desc: "150+ organizations worldwide trust us for secure, transparent, and scalable blockchain solutions — from startups to enterprise-grade DApp platforms.",            image: "/Assets/seerviceSlider/slide3.webp" },
      { count: "99%",  title: "Contract Reliability Success Rate",desc: "99% reliability through rigorous testing, audits, and verification — ensuring secure transactions and minimal vulnerabilities in all DApp deployments.",         image: "/Assets/seerviceSlider/slide4.webp" },
      { count: "24/7", title: "Support & Monitoring",             desc: "Round-the-clock monitoring, maintenance, and optimization for Solidity contracts and blockchain platforms — ensuring smooth, secure operations at all times.",    image: "/Assets/seerviceSlider/slide5.webp" },
    ]}

    faq={{
      title: "Solidity Blockchain Development Services",
      items: [
        { title: "What is Solidity Blockchain Development?",          description: "Solidity Blockchain Development involves creating smart contracts and DApps on Ethereum or EVM-compatible blockchains using the Solidity programming language." },
        { title: "Why use Solidity for smart contracts?",             description: "Solidity allows secure, transparent, and verifiable contract execution on blockchain platforms — with a rich ecosystem of auditing tools and frameworks." },
        { title: "Can Solidity handle large-scale applications?",     description: "Yes, Solidity is highly scalable and suitable for DeFi platforms, NFT marketplaces, enterprise DApps, and complex token management systems." },
        { title: "Is Solidity suitable for enterprise blockchain?",   description: "Absolutely. Solidity provides reliable, tamper-proof smart contracts ideal for business and enterprise-grade blockchain applications." },
        { title: "Do you integrate Solidity contracts with DApps?",   description: "Yes, we connect Solidity smart contracts with web and mobile applications for seamless blockchain operations and user-facing functionality." },
        { title: "How secure are Solidity smart contracts?",          description: "We follow secure coding practices, conduct comprehensive audits, and implement encryption to ensure smart contracts are tamper-proof and safe." },
        { title: "Can you optimize existing Solidity contracts?",     description: "Yes, we enhance performance, gas efficiency, and security of existing smart contracts and decentralized applications." },
        { title: "Do you provide long-term support?",                 description: "Yes, we offer continuous monitoring, updates, and optimization for all Solidity-based solutions post-deployment." },
        { title: "Which industries benefit from Solidity?",           description: "DeFi, NFTs, enterprise DApps, gaming, and fintech sectors leverage Solidity for smart contract and blockchain solutions." },
        { title: "Can Solidity projects integrate with analytics?",   description: "Yes, we connect Solidity smart contracts and DApps to analytics platforms for real-time blockchain insights and business reporting." },
      ],
    }}
  />
);

export default Solidity;
