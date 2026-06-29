"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    id: "1",
    question: "1. Personally Identifiable Information",
    answer: "There are several opportunities on our website for you to provide us with personally-identifiable information (such as name, email address and contact number).",
    points: [
      "If you choose to share personal information with us, we may store it and use it to provide you with an individualized user experience.",
      "We will not obtain personally-identifying information about you without your consent.",
    ],
  },
  {
    id: "2",
    question: "2. Non-personal Identification Information",
    answer: "If you are browsing our site anonymously, we collect some non-identifying information which helps us measure which pages are visited and how often. This includes your IP address, time and date, pages entered, and time spent on individual pages. Your IP address is not linked to anything personally identifiable.",
  },
  {
    id: "3",
    question: "3. Information Use",
    answer: "Information collected is used to improve our services, personalize your experience, and respond to your inquiries. We analyze usage patterns to enhance website functionality and user experience. Data is never sold or shared with third parties without your explicit consent.",
  },
  {
    id: "4",
    question: "4. Cookies",
    answer: "In order to provide you with the best, tailored experience, our site will place cookies on your computer. We use temporary cookies stored on your browser for a defined period.",
    points: [
      "If you visit our site again, it recognizes you automatically and recalls your previous inputs and settings.",
      "We also use cookies for web analytics purposes. These cookies are automatically deleted after a defined time.",
      "Although most browsers accept cookies, you can configure yours to decline them — however, some services may not function properly.",
    ],
  },
  {
    id: "5",
    question: "5. Google Analytics",
    answer: "We use Google Analytics to understand how our website is used in order to improve the user experience. No personal information is collected or stored — the data is entirely anonymous. The information collected includes the number of visitors, how they arrived, and what they click on. We do not allow Google to use or share our analytics data.",
  },
  {
    id: "6",
    question: "6. Social Media Buttons / Pages",
    answer: "Our website includes social media buttons/pages from Facebook, Twitter, Instagram, and LinkedIn.",
    points: [
      "If you visit one of our social media pages while logged in, the provider receives information that your browser has accessed that page — even if you're not logged in, your IP address may be transmitted to their server.",
      "For more information on data collection by social media networks, please refer to their respective privacy policies.",
    ],
  },
  {
    id: "7",
    question: "7. Payment Processing",
    answer: "For certain services, a minimum payment of ₹10,000 is required. Payments collected are securely processed and we adhere to privacy and data protection laws in handling all financial data.",
  },
  {
    id: "8",
    question: "8. Applications",
    answer: "We collect and process personal data of applicants for the purpose of processing the application procedure. If an applicant submits their documents electronically, they are processed electronically.",
    points: [
      "If we conclude an employment contract with an applicant, the data transmitted will be processed in order to carry out the employment relationship in compliance with statutory provisions.",
    ],
  },
  {
    id: "9",
    question: "9. Children's Privacy",
    answer: "Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13.",
    points: [
      "If you are a parent or guardian and believe your child has provided us with Personal Data, please contact us.",
      "If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.",
    ],
  },
  {
    id: "10",
    question: "10. Data Security",
    answer: "We take organizational, contractual and technical security measures to ensure data protection laws are complied with and to protect data against accidental or intentional manipulation, loss, or unauthorized access.",
    points: [
      "Our website uses SSL encryption for security and to protect the transmission of confidential content such as orders, inquiries, or payment data.",
    ],
  },
  {
    id: "11",
    question: "11. Amendments to this Privacy Policy",
    answer: "We reserve the right to amend this Privacy Policy from time to time so that it always complies with current legal requirements or to implement changes to our services. We encourage you to periodically review this page for the latest information.",
  },
];

const accentCycle = [
  { from:"#2dd4bf", to:"#06b6d4" },
  { from:"#6366f1", to:"#4f46e5" },
  { from:"#a855f7", to:"#7c3aed" },
  { from:"#2dd4bf", to:"#6366f1" },
  { from:"#6366f1", to:"#a855f7" },
];

export default function Privacy() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <>
      <style>{`
        @keyframes ppPing { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }
        .pp-ping { animation:ppPing 2.4s ease-in-out infinite; }
        @keyframes ppGrad { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        .pp-hl { background:linear-gradient(125deg,#2dd4bf,#6366f1,#a855f7); background-size:200% 200%;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:ppGrad 5s ease-in-out infinite; }
      `}</style>

      {/* ── Banner ── */}
      <section className="relative overflow-hidden flex items-center justify-center"
        style={{ minHeight:"clamp(280px,40vh,420px)" }}>
        <Image src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1600&q=85"
          alt="Privacy Policy" fill priority unoptimized className="object-cover object-center" />
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
              fontSize:11, fontWeight:600, letterSpacing:".18em", textTransform:"uppercase" }}>Privacy Policy</span>
          </nav>
          <h1 className="font-extrabold text-white mb-4"
            style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(2rem,5vw,3.6rem)", lineHeight:1.08 }}>
            Privacy <span style={{ background:"linear-gradient(120deg,#2dd4bf,#6366f1,#a855f7)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Policy</span>
          </h1>
          <p style={{ color:"rgba(255,255,255,.60)", fontFamily:"'Inter',sans-serif",
            fontSize:"clamp(.9rem,1.8vw,1.05rem)", maxWidth:560, margin:"0 auto 18px" }}>
            This document governs how Future IT Touch receives, manages, and retains information collected from site users.
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
              <span className="pp-ping w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span style={{ color:"#0d9488", fontFamily:"'Poppins',sans-serif",
                fontSize:10, fontWeight:700, letterSpacing:".22em", textTransform:"uppercase" }}>
                Future IT Touch · Legal
              </span>
            </div>
            <h2 className="font-extrabold mb-3"
              style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.4rem,3vw,2rem)",
                color:"#0c1230", lineHeight:1.15 }}>
              Our <span className="pp-hl">Privacy Practices</span>
            </h2>
            <div className="mx-auto h-[3px] w-12 rounded-full mb-4"
              style={{ background:"linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
            <p style={{ fontSize:"13.5px", color:"#64748b", maxWidth:540, margin:"0 auto", lineHeight:1.85 }}>
              We recognize that privacy and confidentiality are important to our clients. Below we describe in detail the privacy practices that apply to our services.
            </p>
          </div>

          {/* Intro CTA strip */}
          <div className="rounded-2xl p-5 mb-10 flex flex-wrap items-center justify-between gap-4"
            style={{ background:"linear-gradient(135deg,rgba(45,212,191,.10),rgba(99,102,241,.10))",
              border:"1px solid rgba(99,102,241,.15)" }}>
            <p style={{ fontSize:"13.5px", color:"#475569", margin:0, flex:1 }}>
              Have questions about our privacy policy? Our team is ready to help.
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
                  <div style={{ maxHeight:isOpen?600:0, overflow:"hidden",
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
              By using our website, you agree to our privacy practices as described above.
              Questions? {" "}
              <Link href="/contact" style={{ color:"#4f46e5", fontWeight:700, textDecoration:"none" }}>
                Contact us
              </Link>{" "}anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
