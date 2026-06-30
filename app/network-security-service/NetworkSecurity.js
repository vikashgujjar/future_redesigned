"use client";
import securityImg from "../Assets/Security.webp";
import CommonServicePage from "../components/CommonServicePage";
import {
  FaNetworkWired, FaShieldAlt, FaLock, FaCloud, FaDatabase,
  FaEye, FaUserShield, FaExclamationTriangle, FaCheckCircle,
  FaServer, FaSearch, FaFileAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Firewall Management & Hardening",
    description:
      "Design, deployment, and ongoing management of enterprise firewalls — rule set reviews, policy optimisation, zone segmentation, and regular hardening audits to eliminate permit-all rules and legacy exceptions that create exposure.",
  },
  {
    icon: <FaEye />,
    title: "Intrusion Detection & Prevention (IDS/IPS)",
    description:
      "Deployment and tuning of Snort and Suricata-based IDS/IPS systems with custom signature sets, real-time alerting, and integration with your SIEM — detecting and blocking known attack patterns, port scans, and lateral movement.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Zero-Trust Network Architecture",
    description:
      "Migration from perimeter-based security to a zero-trust model — micro-segmentation, identity-aware access controls, least-privilege network policies, and continuous verification of every device and user accessing the network.",
  },
  {
    icon: <FaServer />,
    title: "Network Segmentation & DMZ Design",
    description:
      "Design and implementation of VLAN-based network segmentation, DMZ architecture, and inter-zone access controls — isolating critical systems (databases, OT, POS) from general user networks to limit blast radius.",
  },
  {
    icon: <FaLock />,
    title: "VPN & Remote Access Security",
    description:
      "Secure remote access deployment using SSL VPN, IPSec, and zero-trust access solutions — replacing legacy RDP exposure with modern, MFA-enforced remote access that doesn't create additional attack surface.",
  },
  {
    icon: <FaDatabase />,
    title: "Network Traffic Analysis & Monitoring",
    description:
      "Continuous network traffic analysis using NetFlow, packet capture, and behavioural baselines — detecting anomalies, data exfiltration, C2 beaconing, and insider threats before they escalate to incidents.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Network Security Audit & Compliance",
    description:
      "Comprehensive review of your network architecture, device configurations, and access controls against CERT-In, DPDPA 2023, ISO 27001, and PCI-DSS requirements — with a compliance gap report and prioritised remediation plan.",
  },
];

const bizCards = [
  {
    title: "CERT-In Controls Coverage",
    desc: "Our network security programme directly addresses the CERT-In mandatory controls — log retention, NTP synchronisation, network monitoring, incident reporting — keeping Indian businesses audit-ready.",
    icons: <FaShieldAlt className="text-white w-8 h-8" />,
  },
  {
    title: "Zero-Trust First Approach",
    desc: "We design every network security engagement with zero-trust principles — no implicit trust, always verify, least privilege. Modern Indian businesses need modern security architectures, not perimeter-only thinking.",
    icons: <FaNetworkWired className="text-white w-8 h-8" />,
  },
  {
    title: "SME-Sized Deployments",
    desc: "We don't pitch enterprise-scale, multi-million-rupee solutions to SMEs. Our deployments use right-sized, open-source-first tooling where possible — enterprise quality without enterprise procurement complexity.",
    icons: <FaServer className="text-white w-8 h-8" />,
  },
  {
    title: "Ongoing Managed Network Security",
    desc: "Beyond one-time assessments, we offer ongoing managed network security — monthly configuration reviews, threat intelligence updates, alert triage, and quarterly architecture reviews as part of our Security Plus package.",
    icons: <FaEye className="text-white w-8 h-8" />,
  },
];

const sliderCards = [
  {
    count: "150+",
    title: "Network Security Engagements",
    desc: "150+ network security assessments, firewall reviews, and segmentation projects delivered for Indian SMEs across BFSI, healthcare, manufacturing, and e-commerce.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  },
  {
    count: "60%",
    title: "Average Attack Surface Reduction",
    desc: "On average, our network security engagements reduce the exposed attack surface by 60% — through firewall hardening, port closure, and legacy service decommissioning.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
  {
    count: "24/7",
    title: "Network Monitoring Coverage",
    desc: "Our SOC provides 24/7 network monitoring through our Security Plus and Enterprise Shield packages — real-time alert triage, anomaly detection, and rapid escalation.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
  },
  {
    count: "Zero",
    title: "Post-Hardening Network Breaches",
    desc: "Clients who complete our network hardening programme and maintain monthly configuration reviews have a perfect post-engagement breach record through their network perimeter.",
    image: "https://images.unsplash.com/photo-1573164713712-03790a178651?w=800&q=80",
  },
];

const platforms = [
  { icon: <FaNetworkWired className="text-white w-6 h-6" />,  title: "Snort / Suricata IDS/IPS",  desc: "Open-source intrusion detection and prevention — high-performance packet inspection with custom rule sets for Indian threat patterns." },
  { icon: <FaShieldAlt className="text-white w-6 h-6" />,     title: "pfSense / OPNsense",         desc: "Open-source enterprise firewall platforms — cost-effective for SMEs with enterprise-grade capabilities and active development." },
  { icon: <FaEye className="text-white w-6 h-6" />,           title: "Wireshark / Zeek",           desc: "Network protocol analysis and connection logging for traffic baseline establishment and anomaly detection." },
  { icon: <FaDatabase className="text-white w-6 h-6" />,      title: "Elastic SIEM / Splunk",      desc: "Centralised log management and security event correlation for real-time network threat detection and audit log retention." },
  { icon: <FaLock className="text-white w-6 h-6" />,          title: "Cisco / Fortinet / Palo Alto",desc: "Enterprise firewall and NGFW configuration, policy review, and hardening for existing commercial network security deployments." },
  { icon: <FaCloud className="text-white w-6 h-6" />,         title: "AWS VPC / Azure NSG",        desc: "Cloud-native network security controls — VPC security group reviews, NSG policy audits, and network ACL hardening." },
];

const techCategories = [
  {
    title: "Monitoring",
    techs: [
      { name: "Wireshark",    icon: "https://cdn.simpleicons.org/wireshark" },
      { name: "Elastic SIEM", icon: "https://cdn.simpleicons.org/elastic" },
      { name: "Grafana",      icon: "https://cdn.simpleicons.org/grafana" },
      { name: "Splunk",       icon: "https://cdn.simpleicons.org/splunk" },
    ],
  },
  {
    title: "Network Security",
    techs: [
      { name: "Nmap",         icon: "https://cdn.simpleicons.org/nmap" },
      { name: "Kali Linux",   icon: "https://cdn.simpleicons.org/kalilinux" },
      { name: "OpenVPN",      icon: "https://cdn.simpleicons.org/openvpn" },
    ],
  },
  {
    title: "Cloud Networking",
    techs: [
      { name: "AWS",          icon: "https://cdn.simpleicons.org/amazonaws" },
      { name: "Azure",        icon: "https://cdn.simpleicons.org/microsoftazure" },
      { name: "Cloudflare",   icon: "https://cdn.simpleicons.org/cloudflare" },
      { name: "Terraform",    icon: "https://cdn.simpleicons.org/terraform" },
    ],
  },
];

const faqData = [
  {
    title: "What does network security cover?",
    description:
      "Network security covers all controls protecting the confidentiality, integrity, and availability of data as it travels across and within your networks — firewalls, IDS/IPS, VPNs, network segmentation, access control lists, and traffic monitoring.",
  },
  {
    title: "Does my small business need network security if we use cloud services?",
    description:
      "Yes. Cloud services secure their infrastructure, but you are responsible for securing how your users and devices connect to those services. Unprotected remote access (RDP, SSH) and lack of network monitoring are among the top causes of SME breaches in India.",
  },
  {
    title: "What is zero-trust network security?",
    description:
      "Zero-trust assumes no user, device, or network segment is inherently trusted — every access request must be explicitly verified. It replaces the traditional 'castle and moat' model where everything inside the network was implicitly trusted. It's the modern standard for all organisation sizes.",
  },
  {
    title: "How does CERT-In apply to network security?",
    description:
      "CERT-In mandates several network security controls — including log retention for 180 days, NTP time synchronisation, incident reporting within 6 hours, and designated security contacts. Our network security programme ensures all 15 CERT-In essential controls are met.",
  },
  {
    title: "What is network segmentation and why does it matter?",
    description:
      "Network segmentation divides your network into isolated zones so that a compromise in one area (e.g., a user workstation) cannot spread to critical systems (e.g., your financial database or customer data server). It is the most effective way to limit the blast radius of a breach.",
  },
  {
    title: "How long does a network security assessment take?",
    description:
      "A network security assessment for a typical SME takes 3–5 business days — covering firewall rule review, device configuration audit, traffic analysis, and segmentation review. The report is delivered within 5 business days after assessment completion.",
  },
];

const NetworkSecurity = () => (
  <CommonServicePage
    bannerImg={securityImg}
    bannerTitle="Network Security Services"
    bannerDesc="Protecting your business network from the perimeter to the core — firewall management, IDS/IPS deployment, zero-trust architecture, network segmentation, VPN security, and 24/7 traffic monitoring. Enterprise-grade network protection sized and priced for Indian SMEs."

    overviewImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
    overviewImageAlt="Network Security Services"
    overviewBadge="Cyber Security · Network Protection"
    overviewHeading="Network Security Built for"
    overviewHighlight="Modern Indian Businesses"
    overviewParagraphs={[
      "Your network is the backbone of your business — and the most common entry point for attackers. From unpatched firewalls and exposed remote desktop ports to misconfigured VLANs and absent traffic monitoring, Indian SMEs face network threats that require enterprise-grade defences at SME-scale budgets.",
      "We design and implement layered network security — combining firewall hardening, IDS/IPS deployment, zero-trust segmentation, and continuous traffic monitoring — aligned to CERT-In's mandatory controls and DPDPA 2023 requirements.",
      "Our managed network security service means you don't need a dedicated in-house network security team. Our Tricity-based SOC handles configuration reviews, alert triage, and threat response — at 40% lower cost than metro-based alternatives.",
    ]}
    overviewCtaText="Request a Network Security Review"

    featuresBadge="Our Network Security Services"
    featuresTitle="Layered Network Protection from"
    featuresTitleHighlight="Perimeter to Core"
    featuresStickyImg="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80"
    features={features}

    bizBadge="Why Choose Us"
    bizHeading="Network Security Sized for"
    bizHighlight="SME Scale & Budget"
    bizCards={bizCards}

    sliderTitle="Network Security Outcomes That Protect What Matters"
    sliderCards={sliderCards}

    platformsTitle="Network Security Platforms We Deploy"
    platforms={platforms}

    techBadge="Our Network Security Stack"
    techHeading="Tools & Technologies"
    techHeadingHighlight="We Secure Networks With"
    techDescription="We deploy and manage industry-standard network security tools — from open-source IDS/IPS to commercial NGFW and cloud-native network controls — right-sized for your environment."
    techCategories={techCategories}

    faqTitle="Frequently Asked Questions — Network Security"
    faqData={faqData}
  />
);

export default NetworkSecurity;
