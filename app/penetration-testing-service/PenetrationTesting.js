"use client";
import securityImg from "../Assets/Security.webp";
import CommonServicePage from "../components/CommonServicePage";
import {
  FaBug, FaLaptopCode, FaNetworkWired, FaCloud, FaShieldAlt,
  FaSearch, FaExclamationTriangle, FaFileAlt, FaCheckCircle,
  FaLock, FaMobile, FaCode,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode />,
    title: "Web Application Penetration Testing",
    description:
      "Black-box, grey-box, and white-box testing of web applications against OWASP Top 10 — active exploitation of SQL injection, XSS, IDOR, broken authentication, and business logic flaws with full attack chain documentation.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Network & Infrastructure Penetration Testing",
    description:
      "Internal and external network penetration testing — simulating both outsider and insider threat scenarios with active exploitation of network services, lateral movement, privilege escalation, and domain compromise.",
  },
  {
    icon: <FaMobile />,
    title: "Mobile Application Penetration Testing",
    description:
      "Security testing of Android and iOS applications — covering insecure data storage, improper session handling, weak cryptography, API exposure, and runtime manipulation aligned with OWASP Mobile Top 10.",
  },
  {
    icon: <FaCode />,
    title: "API Penetration Testing",
    description:
      "Comprehensive testing of REST, GraphQL, and SOAP APIs — covering broken object-level authorisation, mass assignment, injection attacks, and authentication bypass using OWASP API Security Top 10 methodology.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Penetration Testing",
    description:
      "Authorised penetration testing of AWS, Azure, and GCP environments — exploiting IAM privilege escalation, metadata service abuse, container escape, serverless function vulnerabilities, and misconfigured storage.",
  },
  {
    icon: <FaLock />,
    title: "Social Engineering & Phishing Simulation",
    description:
      "Controlled phishing campaigns, pretexting, and vishing engagements to assess your team's security awareness — with detailed click-rate analytics, credential harvesting simulation, and awareness training follow-up.",
  },
  {
    icon: <FaFileAlt />,
    title: "Detailed Pentest Report & Debrief",
    description:
      "Executive and technical reports with full attack chains, screenshots, exploitability ratings, business impact analysis, and remediation roadmaps — plus a debrief call with our engineers to walk through every critical finding.",
  },
];

const bizCards = [
  {
    title: "OSCP-Certified Engineers",
    desc: "Every penetration test is conducted by OSCP, CEH, or CISM certified engineers — not automated scanners. Real-world attack simulation by professionals who think like adversaries.",
    icons: <FaBug className="text-white w-8 h-8" />,
  },
  {
    title: "Full Attack Chain Documentation",
    desc: "We don't just list vulnerabilities — we document complete attack chains showing how a real attacker would move from initial access to domain compromise, with screenshots and video evidence.",
    icons: <FaExclamationTriangle className="text-white w-8 h-8" />,
  },
  {
    title: "CERT-In Compliant Engagements",
    desc: "All penetration testing engagements are conducted under signed authorisation agreements, follow responsible disclosure timelines, and are aligned to CERT-In guidelines for Indian businesses.",
    icons: <FaShieldAlt className="text-white w-8 h-8" />,
  },
  {
    title: "Remediation & Re-Test Included",
    desc: "After your team fixes the findings, we re-test all critical and high-severity vulnerabilities at no extra cost — confirming remediation before you receive your closure letter for compliance purposes.",
    icons: <FaCheckCircle className="text-white w-8 h-8" />,
  },
];

const sliderCards = [
  {
    count: "300+",
    title: "Penetration Tests Conducted",
    desc: "300+ authorised penetration tests across web apps, APIs, networks, mobile apps, and cloud environments for Indian SMEs and enterprises.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  },
  {
    count: "98%",
    title: "Critical Findings Remediated",
    desc: "98% of critical and high-severity vulnerabilities we identify are remediated by our clients within 30 days — tracked through our closure verification process.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
  {
    count: "72h",
    title: "Critical Finding Escalation",
    desc: "When we discover a critical, exploitable vulnerability during testing, we stop and notify your security team within 72 hours — before the full report is even drafted.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
  },
  {
    count: "0",
    title: "Unauthorised Disclosures",
    desc: "We have a perfect record of responsible disclosure — every engagement is conducted under signed authorisation and NDA, with zero incidents of unauthorised data access or disclosure.",
    image: "https://images.unsplash.com/photo-1573164713712-03790a178651?w=800&q=80",
  },
];

const platforms = [
  { icon: <FaBug className="text-white w-6 h-6" />,         title: "Metasploit Framework",    desc: "Industry-standard exploitation framework for controlled proof-of-concept exploitation of discovered vulnerabilities during authorised engagements." },
  { icon: <FaSearch className="text-white w-6 h-6" />,       title: "Burp Suite Professional", desc: "The gold standard for web application penetration testing — intercepting proxies, active scanner, intruder, and collaborator for out-of-band testing." },
  { icon: <FaLaptopCode className="text-white w-6 h-6" />,   title: "Kali Linux",              desc: "The industry-standard penetration testing OS with 600+ security tools — our engineers operate exclusively in hardened Kali environments." },
  { icon: <FaNetworkWired className="text-white w-6 h-6" />, title: "Nmap / Masscan",          desc: "Network discovery and port scanning for attack surface mapping — identifying all exposed services and live hosts before testing begins." },
  { icon: <FaCloud className="text-white w-6 h-6" />,        title: "Pacu (AWS Exploitation)",  desc: "AWS exploitation framework for cloud penetration testing — IAM privilege escalation, metadata service abuse, and S3 misconfiguration validation." },
  { icon: <FaMobile className="text-white w-6 h-6" />,       title: "Frida / MobSF",           desc: "Dynamic and static analysis frameworks for mobile application penetration testing on Android and iOS platforms." },
];

const techCategories = [
  {
    title: "Exploitation",
    techs: [
      { name: "Metasploit",   icon: "https://cdn.simpleicons.org/metasploit" },
      { name: "Kali Linux",   icon: "https://cdn.simpleicons.org/kalilinux" },
      { name: "OWASP ZAP",   icon: "https://cdn.simpleicons.org/owasp" },
      { name: "Burp Suite",   icon: "https://cdn.simpleicons.org/burpsuite" },
    ],
  },
  {
    title: "Recon & Scanning",
    techs: [
      { name: "Nmap",         icon: "https://cdn.simpleicons.org/nmap" },
      { name: "Wireshark",    icon: "https://cdn.simpleicons.org/wireshark" },
      { name: "Shodan",       icon: "https://cdn.simpleicons.org/shodan" },
    ],
  },
  {
    title: "Cloud Testing",
    techs: [
      { name: "AWS",          icon: "https://cdn.simpleicons.org/amazonaws" },
      { name: "Azure",        icon: "https://cdn.simpleicons.org/microsoftazure" },
      { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud" },
    ],
  },
];

const faqData = [
  {
    title: "What is penetration testing and why do I need it?",
    description:
      "Penetration testing (ethical hacking) is an authorised simulation of a real-world cyberattack against your systems. Unlike vulnerability scanning, our engineers actively exploit weaknesses to demonstrate real business impact — showing exactly what a malicious attacker could do and how to stop them.",
  },
  {
    title: "What is the difference between black-box, grey-box, and white-box testing?",
    description:
      "Black-box: testers start with no prior knowledge of your systems, simulating an external attacker. Grey-box: testers have partial information (like a regular user account), simulating an insider or compromised user. White-box: full system knowledge for maximum coverage — ideal for pre-launch security reviews.",
  },
  {
    title: "Is penetration testing required for CERT-In or DPDPA compliance?",
    description:
      "CERT-In guidelines recommend periodic penetration testing as part of the 15 essential controls for Indian businesses. DPDPA 2023 requires organisations to implement appropriate security measures — penetration testing is a key evidence of due diligence in case of a data breach investigation.",
  },
  {
    title: "Will penetration testing disrupt our live systems?",
    description:
      "No. We conduct all testing under a signed authorisation agreement and scope document. Destructive tests are explicitly excluded unless requested. We coordinate timing with your team, use rate-limited techniques, and can test against staging environments if you prefer.",
  },
  {
    title: "How long does a penetration test take?",
    description:
      "A typical web application pentest takes 3–5 days. A network infrastructure test takes 5–7 days. A combined engagement (web + network + API) typically takes 7–10 days. After testing, we deliver the report within 5 business days.",
  },
  {
    title: "What does the penetration testing report include?",
    description:
      "Our reports include an executive summary (board-ready), full technical findings with CVSS scores, complete attack chain walkthroughs with screenshots, business impact statements, and step-by-step remediation guidance — plus a re-test letter after you fix the critical findings.",
  },
  {
    title: "Do you re-test after we fix the vulnerabilities?",
    description:
      "Yes. Re-testing of all critical and high-severity findings is included in every engagement at no extra cost. We re-verify fixes and issue a formal closure letter that you can present to auditors, clients, or regulators as evidence of remediation.",
  },
];

const PenetrationTesting = () => (
  <CommonServicePage
    bannerImg={securityImg}
    bannerTitle="Penetration Testing Services"
    bannerDesc="OSCP-certified ethical hackers simulating real-world attacks against your web applications, networks, APIs, mobile apps, and cloud environments — with full attack chain documentation and remediation guidance. Think like an attacker. Defend like a professional."

    overviewImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
    overviewImageAlt="Penetration Testing Services"
    overviewBadge="Cyber Security · Ethical Hacking"
    overviewHeading="Authorised Ethical Hacking to"
    overviewHighlight="Find What Attackers Will Find"
    overviewParagraphs={[
      "Penetration testing goes beyond automated scanning — our OSCP-certified engineers actively attempt to breach your defences using the same techniques, tools, and mindset as real threat actors. Every test is conducted under a signed authorisation agreement within a defined scope.",
      "We cover all major attack surfaces: web applications (OWASP Top 10), network infrastructure (internal and external), APIs (OWASP API Security Top 10), mobile applications (Android and iOS), and cloud environments (AWS, Azure, GCP).",
      "Every engagement delivers a dual-audience report — an executive summary for leadership and a technical deep-dive for your engineering team — complete with full attack chain walkthroughs, business impact analysis, and actionable remediation guidance.",
    ]}
    overviewCtaText="Request a Pentest Scoping Call"

    featuresBadge="Our Penetration Testing Services"
    featuresTitle="Comprehensive Ethical Hacking Across"
    featuresTitleHighlight="Every Attack Surface"
    featuresStickyImg="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    features={features}

    bizBadge="Why Choose Us"
    bizHeading="Penetration Testing by"
    bizHighlight="Certified Professionals"
    bizCards={bizCards}

    sliderTitle="Penetration Testing Results That Prove Real-World Security"
    sliderCards={sliderCards}

    platformsTitle="Tools Our Pentesters Use"
    platforms={platforms}

    techBadge="Our Penetration Testing Stack"
    techHeading="Tools & Techniques"
    techHeadingHighlight="We Attack With"
    techDescription="Our engineers use the same tools and techniques as real-world attackers — in a controlled, authorised, and responsible manner — to expose the vulnerabilities that matter most."
    techCategories={techCategories}

    faqTitle="Frequently Asked Questions — Penetration Testing"
    faqData={faqData}
  />
);

export default PenetrationTesting;
