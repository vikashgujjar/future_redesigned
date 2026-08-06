"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { YEARS_EXPERIENCE_DISPLAY } from "../lib/companyStats";

const faqGroups = [
  {
    badge: "General",
    title: "General FAQ",
    accent: { from:"#2dd4bf", to:"#06b6d4" },
    items: [
      {
        question: "What benefits can you guarantee?",
        points: [
          "Confidentiality guarantee — all client details will be kept confidential.",
          "Price guarantee — minimum 50% cost-saving over on-site development.",
          "Results guarantee — progress-linked payments weighted toward the end.",
        ],
      },
      {
        question: "How do you assure solid project quality?",
        answer: "Our developers are dedicated to producing quality code. We have formal processes including periodic code reviews and design walk-throughs. Every project goes through QA/Testing professionals under stringent test-plans including black-box testing, white-box testing, test regression, and usage analysis.",
      },
      {
        question: "How do you assure confidentiality?",
        points: [
          "We sign NDA and Confidentiality Agreements as required. All employees are bound by company's Non-Disclosure clauses.",
          "For sensitive projects, we create isolated cells disconnected from any public network.",
          "CD-Writers and large internet uploads require authorization.",
        ],
      },
      {
        question: "Why should you trust Solution Analysts?",
        answer: "We believe trust and confidence are the foundation for any successful relationship.",
        points: [
          "We have completed projects for 100+ US/European clients.",
          `We have been ${YEARS_EXPERIENCE_DISPLAY} years in business, dedicated to the off-shore execution model.`,
          "Our list of references/testimonials speaks for us.",
        ],
      },
      {
        question: "Can you guarantee time-bound results?",
        answer: "Yes — in some cases we bear project risks even before the first payment.",
      },
      {
        question: "Do you offer any discount?",
        answer: "Our pricing is based on a long-term relationship aimed at giving maximum benefits to our customers.",
      },
    ],
  },
  {
    badge: "Hiring",
    title: "Hire Development",
    accent: { from:"#6366f1", to:"#4f46e5" },
    items: [
      {
        question: "How do we start a near shore / offshore software development project?",
        points: [
          "Receive client's requirements",
          "Research & Requirement Analysis",
          "Prototype Development",
          "Code Generation",
        ],
      },
      {
        question: "Can I contact the team working on my project directly?",
        answer: "Sure. We recommend interacting primarily with the team leader to minimize miscommunications. We are comfortable with communication via phone, email, or Skype.",
      },
      {
        question: "Do you have your own development centre, or do you subcontract?",
        answer: "We have our own development centre in Ahmedabad, India and we do not sub-contract.",
      },
      {
        question: "Would you replace my developer if I'm not satisfied?",
        answer: "Yes. We will certainly replace your developer if we see a genuine shortcoming on the developer's end.",
      },
      {
        question: "Do you provide technical support and maintenance?",
        answer: "Yes. We provide technical support and application maintenance services on request.",
      },
      {
        question: "Are my business secrets safe with your company?",
        answer: "All information is kept confidential. We will NOT use this information other than for direct communication between you and the company.",
      },
      {
        question: "If I hire a developer, are they dedicated only to me?",
        answer: "Yes. The developer you hire will work full-time (8 hours a day, 5 days a week) dedicating it only to you.",
      },
      {
        question: "Will I own all of the source code produced?",
        answer: "Yes, you will. ALL work projects created by your Offshore Team are considered 'work made for hire' and the intellectual property rights are your sole and exclusive property.",
      },
      {
        question: "Will my hired developers speak English?",
        answer: "Yes, all our developers speak English fluently.",
      },
    ],
  },
  {
    badge: "Projects",
    title: "Project Development",
    accent: { from:"#a855f7", to:"#7c3aed" },
    items: [
      {
        question: "What contracts and agreements do you sign?",
        answer: "We sign NDA before initial discussions, and final contracts are drawn out in details. We are normally bound by the legal framework of our client's country and are a registered organization in India.",
      },
      {
        question: "Can we do a Pilot Project first?",
        answer: "Solution Analysts welcomes you to try our services.",
        points: [
          "Our preferred Pilot Project is the first sub-system of a larger project or an independent project. Duration is typically 2–4 weeks.",
          "We invest the same time and energy in Pilot Projects as real projects. Pilots are very different from prototypes.",
        ],
      },
      {
        question: "Can you come on-site?",
        answer: "Yes we do, whenever required — especially useful in initial requirements gathering, final implementation or other pain points. Consultants work on-site at pre-decided rates.",
      },
      {
        question: "What is expected from us during development?",
        answer: "It depends on the situation. We will ask you to provide some information if necessary.",
      },
      {
        question: "How do we stay informed about progress?",
        answer: "We send regular project status reports via pre-determined update schedules (normally email) and ad-hoc meetings (tele-conferences or live chat).",
      },
      {
        question: "Can I enforce our own coding standards?",
        answer: "Yes. Our developers can follow your coding standards in your favor.",
      },
      {
        question: "Can you provide client references?",
        answer: "Yes, we can provide client references. We have built solid relationships by helping clients meet their business objectives. Clients regularly suggest our name for cost-effective, high-quality and on-time development.",
      },
      {
        question: "Can I access code during development? What version control do you use?",
        answer: "You can use Subversion (SVN) or Concurrent Versions System (CVS) to access code during the development cycle.",
      },
    ],
  },
];

function AccordionItem({ question, answer, points, accent, isOpen, onToggle }) {
  return (
    <div
      onClick={onToggle}
      style={{
        background: "#fff",
        borderRadius: 16,
        border: isOpen
          ? `1px solid ${accent.from}55`
          : "1px solid rgba(99,102,241,.10)",
        boxShadow: isOpen
          ? `0 8px 32px rgba(99,102,241,.10), inset 3px 0 0 ${accent.from}`
          : "0 2px 12px rgba(99,102,241,.05)",
        cursor: "pointer",
        transition: "all .3s cubic-bezier(.22,1,.36,1)",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <h3 style={{
          fontFamily: "'Poppins',sans-serif", fontWeight: 700,
          fontSize: "clamp(.88rem,1.5vw,.98rem)", color: isOpen ? "#0c1230" : "#1e2a4a",
          lineHeight: 1.35, flex: 1, margin: 0,
        }}>
          {question}
        </h3>
        <div style={{
          width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: isOpen ? `linear-gradient(135deg,${accent.from},${accent.to})` : "rgba(99,102,241,.08)",
          transition: "all .3s",
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
            style={{ transform: isOpen ? "rotate(45deg)" : "none", transition: "transform .3s" }}>
            <path d="M6 1v10M1 6h10" stroke={isOpen ? "#fff" : "#6366f1"} strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      <div style={{
        maxHeight: isOpen ? 500 : 0, overflow: "hidden",
        transition: "max-height .5s cubic-bezier(.22,1,.36,1)",
      }}>
        <div style={{ padding: "0 20px 20px" }}>
          <div style={{ height: 1, background: `linear-gradient(90deg,${accent.from}33,transparent)`, marginBottom: 14 }} />
          {answer && (
            <p style={{ fontSize: "13.5px", color: "#475569", lineHeight: 1.85, margin: 0, fontFamily: "'Inter',sans-serif" }}>
              {answer}
            </p>
          )}
          {points && points.length > 0 && (
            <ul style={{ margin: answer ? "10px 0 0" : 0, paddingLeft: 0, listStyle: "none" }}>
              {points.map((p, i) => (
                <li key={i} style={{ display: "flex", gap: 9, marginBottom: 7, alignItems: "flex-start" }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: "50%", flexShrink: 0, marginTop: 6,
                    background: `linear-gradient(135deg,${accent.from},${accent.to})`,
                  }} />
                  <span style={{ fontSize: "13.5px", color: "#475569", lineHeight: 1.80, fontFamily: "'Inter',sans-serif" }}>{p}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Faqq() {
  const [openMap, setOpenMap] = useState({});
  const toggle = (gIdx, iIdx) => {
    const key = `${gIdx}-${iIdx}`;
    setOpenMap(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <style>{`
        @keyframes fqGrad { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes fqPing  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }
        .fq-hl { background:linear-gradient(125deg,#2dd4bf,#6366f1,#a855f7); background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:fqGrad 5s ease-in-out infinite; }
        .fq-ping { animation:fqPing 2.4s ease-in-out infinite; }
      `}</style>

      {/* ── Banner ── */}
      <section className="relative overflow-hidden flex items-center justify-center"
        style={{ minHeight:"clamp(280px,40vh,420px)" }}>
        <Image src="/Assets/stock/photo-1557804506-669a67965ba0.webp"
          alt="FAQ" fill priority unoptimized className="object-cover object-center" />
        <div className="absolute inset-0"
          style={{ background:"linear-gradient(160deg,rgba(4,5,24,.83),rgba(20,10,60,.79) 50%,rgba(4,5,24,.86))" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"radial-gradient(rgba(255,255,255,.06) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(45,212,191,.22),transparent 65%)" }} />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(99,102,241,.22),transparent 65%)" }} />
        <div className="relative z-10 text-center px-4">
          <nav className="flex items-center justify-center gap-2 mb-5">
            <Link href="/" style={{ color:"rgba(255,255,255,.50)", fontFamily:"'Poppins',sans-serif",
              textDecoration:"none", fontSize:11, fontWeight:600, letterSpacing:".18em", textTransform:"uppercase" }}
              className="hover:text-teal-400 transition-colors">Home</Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2l4 4-4 4" stroke="rgba(255,255,255,.30)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ color:"#2dd4bf", fontFamily:"'Poppins',sans-serif",
              fontSize:11, fontWeight:600, letterSpacing:".18em", textTransform:"uppercase" }}>FAQ</span>
          </nav>
          <h1 className="font-extrabold text-white mb-4"
            style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(2rem,5vw,3.6rem)", lineHeight:1.08 }}>
            Frequently Asked <span style={{ background:"linear-gradient(120deg,#2dd4bf,#6366f1,#a855f7)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Questions</span>
          </h1>
          <p style={{ color:"rgba(255,255,255,.60)", fontFamily:"'Inter',sans-serif",
            fontSize:"clamp(.9rem,1.8vw,1.05rem)", maxWidth:480, margin:"0 auto 18px" }}>
            Everything you need to know about working with Future IT Touch.
          </p>
          <div className="mx-auto h-[3px] w-16 rounded-full"
            style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
          style={{ background:"linear-gradient(to bottom,transparent,rgba(4,5,24,.55))" }} />
      </section>

      {/* ── FAQ Sections ── */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
        style={{ background:"linear-gradient(155deg,#f4f8ff 0%,#ffffff 50%,#f0f4ff 100%)", fontFamily:"'Inter',sans-serif" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"radial-gradient(rgba(99,102,241,.04) 1px,transparent 1px)", backgroundSize:"30px 30px" }} />
        <div className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(45,212,191,.07),transparent 65%)" }} />

        <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-8 xl:px-0 space-y-20">
          {faqGroups.map((group, gIdx) => (
            <div key={gIdx}>
              {/* Group header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-4"
                  style={{ background:`${group.accent.from}14`, border:`1px solid ${group.accent.from}44` }}>
                  <span className="fq-ping w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background:`linear-gradient(135deg,${group.accent.from},${group.accent.to})` }} />
                  <span style={{ color:group.accent.from, fontFamily:"'Poppins',sans-serif",
                    fontSize:10, fontWeight:700, letterSpacing:".22em", textTransform:"uppercase" }}>
                    {group.badge}
                  </span>
                </div>
                <h2 className="font-extrabold mb-3"
                  style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.4rem,3vw,2rem)",
                    color:"#0c1230", lineHeight:1.15 }}>
                  <span className="fq-hl">{group.title}</span>
                </h2>
                <div className="mx-auto h-[3px] w-12 rounded-full"
                  style={{ background:`linear-gradient(90deg,${group.accent.from},${group.accent.to})` }} />
              </div>

              {/* Accordion items */}
              <div className="space-y-3">
                {group.items.map((item, iIdx) => (
                  <AccordionItem
                    key={iIdx}
                    question={item.question}
                    answer={item.answer}
                    points={item.points}
                    accent={group.accent}
                    isOpen={!!openMap[`${gIdx}-${iIdx}`]}
                    onToggle={() => toggle(gIdx, iIdx)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
