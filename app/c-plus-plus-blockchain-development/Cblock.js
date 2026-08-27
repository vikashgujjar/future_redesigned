import React from "react";
import {
  FaLock, FaRocket, FaCode, FaServer,
  FaDatabase, FaCogs, FaShieldAlt, FaTools,
  FaCheckCircle, FaLayerGroup, FaStar, FaHeadset, FaSyncAlt, FaBug, FaCloud,
} from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import cppBlockchainImg from "../Assets/block.webp";
import CommonTechPage from "../components/techcommomcomponents/CommonTechPage";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";

const FALLBACK_CONTENT = {
    banner: {
      bgImage: "/Assets/stock/photo-1558494949-ef010cbdcc31.webp",
      image: cppBlockchainImg,
      category: "Blockchain Node Development",
      breadcrumb: "C++ · Blockchain · Distributed Ledger",
      title: "C++ · Blockchain · Distributed Ledger",
      tagline:
        "Build high-performance, ultra-low-latency blockchain nodes, consensus engines, and distributed ledger systems using C++ — the language powering Bitcoin Core, Ethereum clients, and the world's most demanding blockchain infrastructure.",
    },

    intro: {
      badge: "Future IT Touch · C++ Blockchain Experts",
      heading: "Build High-Performance Blockchain Nodes with",
      highlight: "C++ Blockchain Development",
      paras: [
        "At Future IT Touch, we specialize in crafting high-performance C++ blockchain solutions — delivering ultra-fast, low-latency distributed ledger systems, consensus engines, and blockchain nodes built for enterprise-grade reliability and scalability.",
        "From custom blockchain node implementations and consensus mechanism development to cryptographic libraries and distributed ledger infrastructure, our developers leverage C++'s raw performance to build systems that meet the most demanding throughput and latency requirements.",
        "Whether you need a custom blockchain protocol, high-frequency transaction engine, or enterprise distributed ledger, our team ensures memory-efficient, secure, and production-ready C++ solutions — empowering your business with the fastest and most reliable blockchain infrastructure available.",
      ],
      highlights: [
        "C++ blockchain node development with custom consensus protocols — PoW, PoS, PBFT, and hybrid designs",
        "Ultra-low-latency transaction engines processing thousands of TPS with deterministic finality",
        "Cryptographic primitive implementation — ECDSA, SHA-256, Merkle trees, and zero-knowledge proofs",
        "Full-cycle development with network protocol design, security auditing, and 24/7 infrastructure support",
      ],
      stats: [
        { num: "150+", label: "C++ Blockchain Systems",    desc: "High-performance C++ blockchain nodes and distributed ledger systems built for enterprise.",  icon: <SiCplusplus /> },
        { num: YEARS_EXPERIENCE_DISPLAY,   label: "Years Blockchain Expertise",desc: `${YEARS_EXPERIENCE_DISPLAY} years delivering C++ blockchain node and consensus engine solutions at scale.`,        icon: <FaLayerGroup /> },
        { num: "200+", label: "Clients Empowered",         desc: "200+ organizations powered by high-performance C++ blockchain and distributed ledger systems.", icon: <FaStar /> },
      ],
    },

    services: [
      {
        icon: <SiCplusplus />,
        title: "Custom C++ Blockchain Development",
        desc: "Ultra-fast, low-latency blockchain nodes and distributed ledger systems in C++ — modular, scalable architectures for consensus, transaction validation, and cryptographic state management.",
        points: [
          "Custom blockchain node implementation",
          "Consensus protocol development",
          "Transaction validation engines",
          "Memory-efficient C++ architecture",
        ],
      },
      {
        icon: <FaServer />,
        title: "Distributed Ledger Systems",
        desc: "Enterprise distributed ledger platforms using C++ — high-throughput, tamper-proof transaction processing with verifiable state, immutable history, and Byzantine fault-tolerant consensus.",
        points: [
          "High-throughput distributed ledgers",
          "Byzantine fault-tolerant consensus",
          "Immutable transaction history",
          "Multi-node network architecture",
        ],
      },
      {
        icon: <FaCogs />,
        title: "Consensus & Protocol Engineering",
        desc: "Custom consensus mechanisms — PoW, PoS, DPoS, PBFT, and Raft — engineered in C++ for deterministic finality, low latency, and resilience against adversarial network conditions.",
        points: [
          "PoW, PoS & PBFT implementations",
          "Deterministic consensus finality",
          "Network partition resilience",
          "Custom protocol design & testing",
        ],
      },
      {
        icon: <FaDatabase />,
        title: "Cryptographic Library Development",
        desc: "High-performance cryptographic primitives in C++ — ECDSA signing, SHA-256/Keccak hashing, Merkle tree construction, and zero-knowledge proof integrations for blockchain security.",
        points: [
          "ECDSA & digital signature systems",
          "SHA-256 / Keccak hash functions",
          "Merkle tree & proof generation",
          "ZK-proof library integration",
        ],
      },
      {
        icon: <FaShieldAlt />,
        title: "Security & Hardening",
        desc: "Memory safety audits, integer overflow checks, and secure coding practices for C++ blockchain systems — protecting against double-spend attacks, Sybil attacks, and network-level exploits.",
        points: [
          "Memory safety & buffer audits",
          "Double-spend attack prevention",
          "Sybil & eclipse attack mitigation",
          "Regular security patch cycles",
        ],
      },
      {
        icon: <FaTools />,
        title: "Continuous Support & Optimization",
        desc: "Long-term support for C++ blockchain infrastructure — performance profiling, network protocol upgrades, consensus parameter tuning, and expert consultation on scalability and throughput.",
        points: [
          "Long-term node infrastructure support",
          "Performance profiling & tuning",
          "Protocol upgrade management",
          "Throughput & scalability consulting",
        ],
      },
    ],

    process: [
      { icon: <FaCheckCircle />, title: "Requirement Analysis",               desc: "Defining your blockchain goals, throughput requirements, consensus model, and network topology — designing a C++ solution roadmap optimized for your use case." },
      { icon: <FaServer />,      title: "System Architecture Planning",       desc: "Architecting scalable C++ blockchain systems — node topology, P2P networking layer, mempool design, and consensus integration for maximum performance." },
      { icon: <FaCogs />,        title: "Consensus & Protocol Design",        desc: "Engineering custom consensus mechanisms and network protocols in C++ — optimizing for latency, finality, throughput, and adversarial resilience." },
      { icon: <FaCloud />,       title: "Node & Network Development",         desc: "Implementing blockchain nodes, P2P discovery, block propagation, transaction broadcast, and mempool management in high-performance C++." },
      { icon: <FaDatabase />,    title: "State & Data Management",            desc: "Designing efficient UTXO or account-based state models, LevelDB/RocksDB persistence layers, and Merkle-proof data structures for ledger integrity." },
      { icon: <FaRocket />,      title: "Integration & Deployment",           desc: "Integrating C++ blockchain nodes with RPC/REST APIs, monitoring systems, and client applications — deploying to bare-metal or cloud infrastructure." },
      { icon: <FaShieldAlt />,   title: "Performance & Security Optimization",desc: "Profiling and optimizing C++ blockchain code for cache efficiency, lock contention, and memory usage — hardening against known attack vectors." },
      { icon: <FaBug />,         title: "Testing & Quality Assurance",        desc: "Rigorous unit, integration, and stress testing of all C++ blockchain components — ensuring correctness, safety, and performance under high load." },
      { icon: <FaCode />,        title: "Deployment & Monitoring",            desc: "Handling production node deployment, network bootstrapping, and real-time monitoring to ensure stable and secure blockchain operations." },
      { icon: <FaSyncAlt />,     title: "Maintenance & Long-Term Support",    desc: "Ongoing protocol upgrades, security patches, and performance audits — ensuring your C++ blockchain infrastructure stays cutting-edge and reliable." },
    ],

    features: [
      { icon: <SiCplusplus />, title: "Ultra-Fast C++ Blockchain Nodes",    desc: "Production-grade blockchain nodes written in C++ for maximum throughput, minimal latency, and deterministic performance at any network scale." },
      { icon: <FaCogs />,      title: "Custom Consensus Mechanisms",        desc: "Bespoke PoW, PoS, PBFT, or hybrid consensus engines designed for your specific finality, security, and decentralization requirements." },
      { icon: <FaServer />,    title: "Enterprise Distributed Ledgers",     desc: "Scalable, tamper-proof distributed ledger systems integrated with existing enterprise backends and cloud infrastructure." },
      { icon: <FaLock />,      title: "Cryptographic Security",             desc: "Battle-tested cryptographic primitives — ECDSA, SHA-256, Merkle trees — ensuring all blockchain state and transactions are provably secure." },
      { icon: <FaRocket />,    title: "Performance Optimization",           desc: "C++ blockchain code profiled and tuned for peak TPS, minimal memory footprint, and efficient CPU utilization in production environments." },
      { icon: <FaTools />,     title: "Ongoing Support & Optimization",     desc: "Continuous monitoring, protocol upgrades, and performance audits keeping your C++ blockchain infrastructure secure and future-ready." },
    ],

    stack: [
      { name: "C++17 / C++20" },
      { name: "Boost.Asio" },
      { name: "libp2p" },
      { name: "OpenSSL / libsecp256k1" },
      { name: "LevelDB / RocksDB" },
      { name: "Protocol Buffers" },
      { name: "gRPC / REST APIs" },
      { name: "CMake / Conan" },
      { name: "Google Test / Catch2" },
      { name: "Prometheus / Grafana" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "AWS / GCP" },
      { name: "GitHub Actions / CI" },
      { name: "Clang / GCC" },
      { name: "Valgrind / ASan" },
    ],

    slider: [
      { count: "150+", title: "C++ Blockchain Systems Delivered",    desc: "150+ high-performance C++ blockchain nodes and distributed ledger systems deployed — built for enterprise throughput, low latency, and cryptographic security.",   image: "/Assets/seerviceSlider/slide1.webp" },
      { count: YEARS_EXPERIENCE_DISPLAY,   title: "Years of C++ Blockchain Expertise",   desc: `${YEARS_EXPERIENCE_DISPLAY} years engineering C++ blockchain infrastructure — consensus engines, cryptographic libraries, and distributed ledger systems at production scale.`,     image: "/Assets/seerviceSlider/slide2.webp" },
      { count: "200+", title: "Clients Empowered Globally",          desc: "200+ organizations worldwide trust our C++ blockchain expertise for mission-critical distributed ledger, DeFi infrastructure, and enterprise blockchain platforms.", image: "/Assets/seerviceSlider/slide3.webp" },
      { count: "99%",  title: "System Uptime & Reliability",         desc: "99%+ uptime achieved through rigorous testing, memory-safe code practices, and optimized consensus algorithms — ensuring always-on blockchain infrastructure.",    image: "/Assets/seerviceSlider/slide4.webp" },
      { count: "24/7", title: "Support & Infrastructure Monitoring", desc: "24/7 monitoring, protocol patch management, and performance optimization keeping C++ blockchain systems secure, stable, and performant at all times.",           image: "/Assets/seerviceSlider/slide5.webp" },
    ],

    faq: {
      title: "C++ Blockchain Development Services",
      items: [
        { title: "Why use C++ for blockchain development?",              description: "C++ offers unmatched performance, fine-grained memory control, and low-level hardware access — making it the language of choice for Bitcoin Core, Ethereum clients, and high-throughput blockchain infrastructure." },
        { title: "What consensus mechanisms can you implement in C++?",  description: "We implement PoW, PoS, DPoS, PBFT, Raft, and custom hybrid consensus protocols — tailored to your specific throughput, finality, and decentralization requirements." },
        { title: "Can C++ blockchain nodes handle high transaction volumes?", description: "Absolutely. C++ is purpose-built for high-throughput systems — our optimized nodes process thousands of transactions per second with deterministic, low-latency finality." },
        { title: "Do you build custom blockchain protocols from scratch?",description: "Yes, we design and implement full custom blockchain protocols — including P2P networking, mempool management, block validation, and consensus from the ground up." },
        { title: "How do you ensure security in C++ blockchain systems?",description: "We conduct memory safety audits, fuzzing, static analysis with tools like ASan and Valgrind, and rigorous penetration testing to eliminate vulnerabilities before production." },
        { title: "Can you integrate C++ nodes with existing enterprise systems?", description: "Yes, we expose gRPC and REST APIs from C++ nodes and integrate with enterprise backends, monitoring stacks, and cloud infrastructure seamlessly." },
        { title: "Do you optimize existing C++ blockchain codebases?",   description: "Definitely. We profile, refactor, and optimize existing C++ blockchain code for throughput, memory efficiency, and security hardening." },
        { title: "What databases do you use for blockchain state storage?",description: "We use LevelDB and RocksDB for high-performance key-value state storage — optimized for UTXO models, account trees, and Merkle-proof generation." },
        { title: "Which industries use C++ blockchain solutions?",       description: "Fintech, DeFi infrastructure, supply chain, healthcare data integrity, and any industry requiring auditable, high-throughput distributed ledger systems." },
        { title: "Do you provide long-term support for C++ blockchain projects?", description: "Yes, we offer ongoing maintenance including protocol upgrades, security patches, performance audits, and 24/7 infrastructure monitoring post-deployment." },
      ],
    },
};

const Cblock = ({ cms } = {}) => {
  const content = cms
    ? {
        banner: { ...FALLBACK_CONTENT.banner, ...cms.banner, bgImage: cms.banner.bgImage || FALLBACK_CONTENT.banner.bgImage },
        intro: { ...FALLBACK_CONTENT.intro, ...cms.intro },
        services: cms.services || FALLBACK_CONTENT.services,
        process: cms.process || FALLBACK_CONTENT.process,
        features: cms.features,
        stack: cms.stack || FALLBACK_CONTENT.stack,
        slider: cms.slider,
        faq: { title: FALLBACK_CONTENT.faq.title, items: cms.faq.items },
      }
    : FALLBACK_CONTENT;

  return <CommonTechPage {...content} />;
};

export default Cblock;
