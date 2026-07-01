"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const policies = [
  {
    question: "General Policy",
    answer: "As our services involve custom work, professional expertise, digital products, and significant time investment, all payments are generally non-refundable unless otherwise stated in a written agreement.",
    points: [],
    accent: { from:"#2dd4bf", to:"#06b6d4" },
  },
  {
    question: "Website Design & Development",
    answer: "An advance payment is required before work begins.",
    points: [
      "Once the project has started, the advance payment is non-refundable.",
      "If the client cancels the project after work has commenced, no refund will be issued for completed work, project planning, design, development, or consultation hours.",
      "Any outstanding balance for completed milestones remains payable.",
    ],
    accent: { from:"#6366f1", to:"#4f46e5" },
  },
  {
    question: "Software & Mobile Application Development",
    answer: "Software and mobile application development services are customized according to client requirements.",
    points: [
      "Payments made for completed milestones are non-refundable.",
      "If the project is terminated by the client, all completed work and associated charges up to the termination date shall be payable.",
      "Refunds will not be provided for changes in business strategy, project cancellation, or delays caused by the client.",
    ],
    accent: { from:"#a855f7", to:"#7c3aed" },
  },
  {
    question: "Digital Marketing, SEO & Advertising Services",
    answer: "Due to the nature of digital marketing services:",
    points: [
      "Fees paid for SEO, social media marketing, PPC management, content marketing, and online advertising are non-refundable.",
      "We do not guarantee specific rankings, traffic volumes, sales, or advertising results, as these depend on third-party platforms and market conditions.",
    ],
    accent: { from:"#0ea5e9", to:"#2dd4bf" },
  },
  {
    question: "Domain Registration, Hosting & Third-Party Services",
    answer: "Payments made for domain registrations, web hosting, SSL certificates, email hosting, cloud services, software licenses, API subscriptions, and third-party tools are non-refundable, as these services are purchased from external providers.",
    points: [],
    accent: { from:"#2dd4bf", to:"#6366f1" },
  },
  {
    question: "Graphic Design & Branding",
    answer: "Payments for logos, branding, UI/UX designs, brochures, banners, and other creative work are non-refundable once the initial concepts or deliverables have been shared.",
    points: [],
    accent: { from:"#8b5cf6", to:"#6366f1" },
  },
  {
    question: "Change of Mind",
    answer: "Refunds will not be issued if:",
    points: [
      "The client changes their mind after placing an order.",
      "The client decides not to proceed with the project.",
      "The client fails to provide required content, approvals, or feedback.",
      "The project is delayed due to the client's actions or inaction.",
    ],
    accent: { from:"#06b6d4", to:"#2dd4bf" },
  },
  {
    question: "Duplicate or Incorrect Payments",
    answer: "If a duplicate payment or an accidental overpayment is made, the excess amount will be refunded after verification. Approved refunds will generally be processed within 7–14 business days using the original payment method.",
    points: [],
    accent: { from:"#6366f1", to:"#a855f7" },
  },
  {
    question: "Exceptional Circumstances",
    answer: "Refund requests may be considered only in exceptional circumstances and solely at the discretion of Future IT Touch Pvt. Ltd. Any approved refund may be subject to deductions for work completed, consultation time, third-party expenses, transaction fees, and administrative costs.",
    points: [],
    accent: { from:"#0ea5e9", to:"#6366f1" },
  },
  {
    question: "Project Abandonment",
    answer: "If the client remains unresponsive for more than 30 consecutive days, the project may be considered abandoned. Payments already made will not be refunded, and restarting the project may require additional charges.",
    points: [],
    accent: { from:"#a855f7", to:"#4f46e5" },
  },
  {
    question: "Chargebacks",
    answer: "Clients agree to contact us first to resolve any billing concerns before initiating a chargeback or payment dispute. Unjustified chargebacks may result in suspension or termination of services.",
    points: [],
    accent: { from:"#2dd4bf", to:"#0ea5e9" },
  },
];

export default function Refund() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <>
      <style>{`
        @keyframes rfPing { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }
        .rf-ping { animation:rfPing 2.4s ease-in-out infinite; }
        @keyframes rfGrad { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        .rf-hl { background:linear-gradient(125deg,#2dd4bf,#6366f1,#a855f7); background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:rfGrad 5s ease-in-out infinite; }
      `}</style>

      {/* ── Banner ── */}
      <section className="relative overflow-hidden flex items-center justify-center"
        style={{ minHeight:"clamp(280px,40vh,420px)" }}>
        <Image src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1600&q=85"
          alt="Refund Policy" fill priority unoptimized className="object-cover object-center" />
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
              fontSize:11, fontWeight:600, letterSpacing:".18em", textTransform:"uppercase" }}>Refund Policy</span>
          </nav>
          <h1 className="font-extrabold text-white mb-4"
            style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(2rem,5vw,3.6rem)", lineHeight:1.08 }}>
            Refund &amp; <span style={{ background:"linear-gradient(120deg,#2dd4bf,#6366f1,#a855f7)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Cancellation</span>
          </h1>
          <p style={{ color:"rgba(255,255,255,.60)", fontFamily:"'Inter',sans-serif",
            fontSize:"clamp(.9rem,1.8vw,1.05rem)", maxWidth:480, margin:"0 auto 10px" }}>
            Your satisfaction is our priority. Here&apos;s how our refund policy works.
          </p>
          <p style={{ color:"rgba(255,255,255,.38)", fontFamily:"'Inter',sans-serif",
            fontSize:"11px", letterSpacing:".12em", textTransform:"uppercase", marginBottom:18 }}>
            Effective Date: June 30, 2026
          </p>
          <div className="mx-auto h-[3px] w-16 rounded-full"
            style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
          style={{ background:"linear-gradient(to bottom,transparent,rgba(4,5,24,.55))" }} />
      </section>

      {/* ── Content ── */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
        style={{ background:"linear-gradient(155deg,#f4f8ff 0%,#ffffff 50%,#f0f4ff 100%)", fontFamily:"'Inter',sans-serif" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"radial-gradient(rgba(99,102,241,.04) 1px,transparent 1px)", backgroundSize:"30px 30px" }} />
        <div className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(45,212,191,.07),transparent 65%)" }} />

        <div className="relative z-10 max-w-[820px] mx-auto px-4 sm:px-8 xl:px-0">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-4"
              style={{ background:"rgba(45,212,191,.09)", border:"1px solid rgba(45,212,191,.26)" }}>
              <span className="rf-ping w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span style={{ color:"#0d9488", fontFamily:"'Poppins',sans-serif",
                fontSize:10, fontWeight:700, letterSpacing:".22em", textTransform:"uppercase" }}>
                Future IT Touch · Policy
              </span>
            </div>
            <h2 className="font-extrabold mb-3"
              style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.4rem,3vw,2rem)",
                color:"#0c1230", lineHeight:1.15 }}>
              Our <span className="rf-hl">Refund Policy</span>
            </h2>
            <div className="mx-auto h-[3px] w-12 rounded-full mb-4"
              style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
            <p style={{ fontSize:"13.5px", color:"#64748b", maxWidth:500, margin:"0 auto", lineHeight:1.85 }}>
              We are committed to transparency. Please read our cancellation and refund terms carefully.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {policies.map((policy, i) => {
              const isOpen = openIdx === i;
              return (
                <div key={i} onClick={() => setOpenIdx(isOpen ? null : i)}
                  style={{
                    background:"#fff", borderRadius:18, cursor:"pointer",
                    border: isOpen ? `1px solid ${policy.accent.from}55` : "1px solid rgba(99,102,241,.10)",
                    boxShadow: isOpen
                      ? `0 10px 36px rgba(99,102,241,.10), inset 4px 0 0 ${policy.accent.from}`
                      : "0 2px 14px rgba(99,102,241,.05)",
                    transition:"all .3s cubic-bezier(.22,1,.36,1)", overflow:"hidden",
                  }}>
                  <div style={{ padding:"20px 24px", display:"flex", justifyContent:"space-between", alignItems:"center", gap:16 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                      <div style={{ width:38, height:38, borderRadius:10, flexShrink:0,
                        background:`linear-gradient(135deg,${policy.accent.from},${policy.accent.to})`,
                        display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <span style={{ fontFamily:"'Poppins',sans-serif", fontWeight:800, fontSize:13, color:"#fff" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 style={{ fontFamily:"'Poppins',sans-serif", fontWeight:700,
                        fontSize:"clamp(.9rem,1.5vw,1rem)", color:"#0c1230", lineHeight:1.35, margin:0 }}>
                        {policy.question}
                      </h3>
                    </div>
                    <div style={{ width:30, height:30, borderRadius:"50%", flexShrink:0,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      background: isOpen ? `linear-gradient(135deg,${policy.accent.from},${policy.accent.to})` : "rgba(99,102,241,.08)",
                      transition:"all .3s" }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        style={{ transform:isOpen?"rotate(45deg)":"none", transition:"transform .3s" }}>
                        <path d="M6 1v10M1 6h10" stroke={isOpen?"#fff":"#6366f1"} strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <div style={{ maxHeight:isOpen?800:0, overflow:"hidden",
                    transition:"max-height .5s cubic-bezier(.22,1,.36,1)" }}>
                    <div style={{ padding:"0 24px 22px 24px" }}>
                      <div style={{ height:1, background:`linear-gradient(90deg,${policy.accent.from}33,transparent)`, marginBottom:14 }} />
                      <p style={{ fontSize:"13.5px", color:"#475569", lineHeight:1.88, marginBottom:policy.points?.length?10:0 }}>
                        {policy.answer}
                      </p>
                      {policy.points && (
                        <ul style={{ margin:0, paddingLeft:0, listStyle:"none" }}>
                          {policy.points.map((pt, pi) => (
                            <li key={pi} style={{ display:"flex", gap:9, marginBottom:7, alignItems:"flex-start" }}>
                              <span style={{ width:6, height:6, borderRadius:"50%", flexShrink:0, marginTop:6,
                                background:`linear-gradient(135deg,${policy.accent.from},${policy.accent.to})` }} />
                              <span style={{ fontSize:"13.5px", color:"#475569", lineHeight:1.80 }}>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom note */}
          <div className="mt-10 rounded-2xl p-6 text-center"
            style={{ background:"rgba(99,102,241,.06)", border:"1px solid rgba(99,102,241,.12)" }}>
            <p style={{ fontSize:"13.5px", color:"#475569", lineHeight:1.85, margin:0 }}>
              For any refund or cancellation queries, please{" "}
              <Link href="/contact"
                style={{ color:"#4f46e5", fontWeight:700, textDecoration:"none" }}>
                contact our support team
              </Link>{" "}
              and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
