"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    question: "1. Description of Services",
    answer: "Future IT Touch Pvt. Ltd. may provide the Client with one or more services including Website Design & Development, Internet Marketing, Mobile Application Development, Content Development, and Maintenance & Support Services.",
    points: [
      "Any new feature that augments or enhances the Services shall be considered part of the Services.",
      "Future IT Touch reserves the right to modify, suspend or discontinue Services at any time based on non-cooperation, non-payment, or unwanted delay from the client, without notice.",
      "Client expressly agrees that neither the Client nor any related third party shall hold Future IT Touch or its suppliers liable for any losses from such modification or discontinuation.",
    ],
  },
  {
    question: "2. Acceptance",
    answer: "It is not necessary for any Client to have signed an acceptance of these terms for them to apply. If a Client accepts a quote, they will be deemed to have accepted these terms and conditions in full.",
    points: [
      "Please read these terms carefully. Any purchase, payment of an advance fee, or use of our services implies that you have read and accepted our terms and conditions.",
    ],
  },
  {
    question: "3. Database, E-Commerce & Application Development",
    answer: "Future IT Touch Pvt. Ltd. is not liable for any losses caused by software created for the client. Though we take every care to ensure products are accurate and error-free, ultimate responsibility remains with the Client.",
    points: [
      "Where applications are developed on servers not provided by Future Touch, the Client will be responsible for providing required information, support, and co-operation relating to the server.",
      "Any application or programming pertaining to a website developed by Future IT Touch must be fully tested by the Client before making it generally available.",
    ],
  },
  {
    question: "4. Charges",
    answer: "Charges for services are defined in the project quotation received by the Client via e-mail. Quotations are valid for 30 days unless alternate timescales are agreed beforehand.",
    points: [
      "Unless agreed otherwise, all website design services require an advance payment of minimum 50% of the quotation total before work commences. A second charge of 30% is required after development, with the remaining 20% due upon completion.",
      "Payment for services is due by cheque or bank transfer. Bank details will be available on invoices.",
    ],
  },
  {
    question: "5. Development Process",
    answer: "Entry of data for database applications is considered the client's responsibility. Entry of data by Future IT Touch is billable unless otherwise provided for in the customer's contract.",
    points: [
      "Training – For websites with administrative control panels or CMS, two (2) one-hour training sessions will be provided.",
      "Technical Support – We offer phone support to our clients. If Future IT Touch is not the source of the problem, technical support may be billable.",
    ],
  },
  {
    question: "6. Training and Tutorials",
    answer: "All of our projects include a one-time complimentary training session for clients to better make use of their new web technology.",
    points: [
      "Additional training hours can be purchased at our standard hourly rate or applied against your existing maintenance contract.",
    ],
  },
  {
    question: "7. Client Review",
    answer: "On completion of the work, you will be notified and have the opportunity to review it. You must notify us in writing of any unsatisfactory points within 7 days of such notification.",
    points: [
      "Work not reported as unsatisfactory in writing within the 7-day review period will be deemed approved. Once approved, work cannot subsequently be rejected.",
      "If we consider a rejection unreasonable, we can elect to treat this contract as at an end and take measures to recover payment for completed work.",
    ],
  },
  {
    question: "8. Project Schedule and Content Control",
    answer: "In the majority of projects, Future IT Touch will install and publicly post the Client's website by the date specified in the project proposal. The Client agrees to delegate a single point-of-contact to aid with project completion.",
    points: [
      "If content is not provided within 2 weeks of an official request, Future IT Touch reserves the right to revise the final payment fee.",
      "If content is not provided within 3 weeks, the Client is considered in default, the project will be terminated, and the Client sent the final invoice for immediate payment.",
    ],
  },
  {
    question: "9. Intellectual Property",
    answer: "Unless agreed otherwise in writing, the Client owns all intellectual property created specifically for their project upon receipt of full payment. Future IT Touch retains rights to general methodologies, frameworks, and tools used in development.",
  },
  {
    question: "10. Payment",
    answer: "Final payment is due regardless of whether all content for the pages has been sent by the client. After payment, Future IT Touch will still post pre-agreed outstanding content AT NO CHARGE for 2 months.",
    points: [
      "Project can only be cancelled within 3 days after signing the project agreement. Refunds, if applicable, will be processed within 10 days of the claim.",
      "Invoices are normally sent via email and are due within 15 days of receipt. Accounts not settled after 30 days will be considered in default.",
    ],
  },
];

const accentCycle = [
  { from:"#2dd4bf", to:"#06b6d4" },
  { from:"#6366f1", to:"#4f46e5" },
  { from:"#a855f7", to:"#7c3aed" },
  { from:"#2dd4bf", to:"#6366f1" },
  { from:"#6366f1", to:"#a855f7" },
];

export default function TermsCondition() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <>
      <style>{`
        @keyframes tcPing { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }
        .tc-ping { animation:tcPing 2.4s ease-in-out infinite; }
        @keyframes tcGrad { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        .tc-hl { background:linear-gradient(125deg,#2dd4bf,#6366f1,#a855f7); background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:tcGrad 5s ease-in-out infinite; }
      `}</style>

      {/* ── Banner ── */}
      <section className="relative overflow-hidden flex items-center justify-center"
        style={{ minHeight:"clamp(280px,40vh,420px)" }}>
        <Image src="/Assets/stock/photo-1450101499163-c8848c66ca85.webp"
          alt="Terms & Conditions" fill priority unoptimized className="object-cover object-center" />
        <div className="absolute inset-0"
          style={{ background:"linear-gradient(160deg,rgba(4,5,24,.86),rgba(20,10,60,.82) 50%,rgba(4,5,24,.88))" }} />
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
              fontSize:11, fontWeight:600, letterSpacing:".18em", textTransform:"uppercase" }}>Terms &amp; Conditions</span>
          </nav>
          <h1 className="font-extrabold text-white mb-4"
            style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(2rem,5vw,3.6rem)", lineHeight:1.08 }}>
            Terms &amp; <span style={{ background:"linear-gradient(120deg,#2dd4bf,#6366f1,#a855f7)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Conditions</span>
          </h1>
          <p style={{ color:"rgba(255,255,255,.60)", fontFamily:"'Inter',sans-serif",
            fontSize:"clamp(.9rem,1.8vw,1.05rem)", maxWidth:520, margin:"0 auto 18px" }}>
            Please read our terms carefully. By using our services you are deemed to agree and accept these terms and conditions.
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

        <div className="relative z-10 max-w-[860px] mx-auto px-4 sm:px-8 xl:px-0">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-4"
              style={{ background:"rgba(45,212,191,.09)", border:"1px solid rgba(45,212,191,.26)" }}>
              <span className="tc-ping w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span style={{ color:"#0d9488", fontFamily:"'Poppins',sans-serif",
                fontSize:10, fontWeight:700, letterSpacing:".22em", textTransform:"uppercase" }}>
                Future IT Touch · Legal
              </span>
            </div>
            <h2 className="font-extrabold mb-3"
              style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.4rem,3vw,2rem)",
                color:"#0c1230", lineHeight:1.15 }}>
              Service <span className="tc-hl">Terms &amp; Conditions</span>
            </h2>
            <div className="mx-auto h-[3px] w-12 rounded-full mb-4"
              style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
            <p style={{ fontSize:"13.5px", color:"#64748b", maxWidth:540, margin:"0 auto", lineHeight:1.85 }}>
              These terms govern your use of Future IT Touch services. By engaging with us, you agree to the following terms in full.
            </p>
          </div>

          {/* Intro CTA strip */}
          <div className="rounded-2xl p-5 mb-10 flex flex-wrap items-center justify-between gap-4"
            style={{ background:"linear-gradient(135deg,rgba(45,212,191,.10),rgba(99,102,241,.10))",
              border:"1px solid rgba(99,102,241,.15)" }}>
            <p style={{ fontSize:"13.5px", color:"#475569", margin:0, flex:1 }}>
              Questions about our terms? Our team is happy to clarify.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact"
                style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"9px 18px",
                  borderRadius:10, background:"linear-gradient(135deg,#2dd4bf,#6366f1)", color:"#fff",
                  fontFamily:"'Poppins',sans-serif", fontSize:12.5, fontWeight:700, textDecoration:"none",
                  boxShadow:"0 4px 16px rgba(99,102,241,.25)" }}>
                Quick Enquiry
              </Link>
              <Link href="tel:+917056937000"
                style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"9px 18px",
                  borderRadius:10, background:"rgba(99,102,241,.08)", color:"#4f46e5",
                  border:"1px solid rgba(99,102,241,.22)",
                  fontFamily:"'Poppins',sans-serif", fontSize:12.5, fontWeight:700, textDecoration:"none" }}>
                Call: 7056937000
              </Link>
            </div>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {sections.map((sec, i) => {
              const accent = accentCycle[i % accentCycle.length];
              const isOpen = openIdx === i;
              return (
                <div key={i} onClick={() => setOpenIdx(isOpen ? null : i)}
                  style={{
                    background:"#fff", borderRadius:16, cursor:"pointer",
                    border: isOpen ? `1px solid ${accent.from}55` : "1px solid rgba(99,102,241,.10)",
                    boxShadow: isOpen
                      ? `0 8px 28px rgba(99,102,241,.09), inset 3px 0 0 ${accent.from}`
                      : "0 2px 10px rgba(99,102,241,.04)",
                    transition:"all .3s cubic-bezier(.22,1,.36,1)", overflow:"hidden",
                  }}>
                  <div style={{ padding:"16px 20px", display:"flex", justifyContent:"space-between", alignItems:"center", gap:14 }}>
                    <h3 style={{ fontFamily:"'Poppins',sans-serif", fontWeight:700,
                      fontSize:"clamp(.85rem,1.4vw,.95rem)", color:"#0c1230",
                      lineHeight:1.35, flex:1, margin:0 }}>
                      {sec.question}
                    </h3>
                    <div style={{ width:28, height:28, borderRadius:"50%", flexShrink:0,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      background: isOpen ? `linear-gradient(135deg,${accent.from},${accent.to})` : "rgba(99,102,241,.08)",
                      transition:"all .3s" }}>
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none"
                        style={{ transform:isOpen?"rotate(45deg)":"none", transition:"transform .3s" }}>
                        <path d="M6 1v10M1 6h10" stroke={isOpen?"#fff":"#6366f1"} strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <div style={{ maxHeight:isOpen?700:0, overflow:"hidden",
                    transition:"max-height .5s cubic-bezier(.22,1,.36,1)" }}>
                    <div style={{ padding:"0 20px 18px" }}>
                      <div style={{ height:1, background:`linear-gradient(90deg,${accent.from}33,transparent)`, marginBottom:12 }} />
                      <p style={{ fontSize:"13.5px", color:"#475569", lineHeight:1.88,
                        marginBottom:sec.points?.length?10:0 }}>
                        {sec.answer}
                      </p>
                      {sec.points && (
                        <ul style={{ margin:0, paddingLeft:0, listStyle:"none" }}>
                          {sec.points.map((pt, pi) => (
                            <li key={pi} style={{ display:"flex", gap:9, marginBottom:7, alignItems:"flex-start" }}>
                              <span style={{ width:6, height:6, borderRadius:"50%", flexShrink:0, marginTop:6,
                                background:`linear-gradient(135deg,${accent.from},${accent.to})` }} />
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

          {/* Footer note */}
          <div className="mt-10 rounded-2xl p-6 text-center"
            style={{ background:"rgba(99,102,241,.06)", border:"1px solid rgba(99,102,241,.12)" }}>
            <p style={{ fontSize:"13px", color:"#475569", lineHeight:1.85, margin:0 }}>
              These terms were last updated in 2024. By using our services you are agreeing to these terms in full.
              For queries, please{" "}
              <Link href="/contact" style={{ color:"#4f46e5", fontWeight:700, textDecoration:"none" }}>
                contact us
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
