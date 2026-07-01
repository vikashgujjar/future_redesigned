"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaPhoneAlt, FaEnvelope, FaSkype, FaWhatsapp,
  FaCheckCircle, FaArrowRight, FaLock, FaHeadset,
  FaCreditCard, FaTasks, FaPaintBrush, FaServer, FaComments,
} from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

const categories = [
  { icon: FaHeadset,   title: "Technical Support",  desc: "Website bugs, errors, downtime, performance issues.",    from: "#2dd4bf", to: "#06b6d4" },
  { icon: FaCreditCard,title: "Billing & Payments",  desc: "Invoices, payment issues, refund enquiries.",            from: "#6366f1", to: "#4f46e5" },
  { icon: FaTasks,     title: "Project Updates",     desc: "Milestones, timelines, deliverable status.",             from: "#a855f7", to: "#7c3aed" },
  { icon: FaPaintBrush,title: "Design Feedback",     desc: "Revision requests, design and UI/UX queries.",           from: "#0ea5e9", to: "#2dd4bf" },
  { icon: FaServer,    title: "Hosting & Domain",    desc: "Server issues, SSL, domain management, email setup.",    from: "#8b5cf6", to: "#6366f1" },
  { icon: FaComments,  title: "General Enquiry",     desc: "Any other questions or partnership opportunities.",      from: "#06b6d4", to: "#a855f7" },
];

const faqs = [
  {
    q: "How long does it take to complete a website?",
    a: "Project timelines vary depending on scope. A standard business website typically takes 2–4 weeks, while complex web apps or e-commerce platforms may take 6–12 weeks. You'll receive a detailed timeline during the project kickoff.",
    from: "#2dd4bf", to: "#06b6d4",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. We offer dedicated post-launch support packages ranging from 3 to 12 months, covering bug fixes, minor updates, performance monitoring, and security patches.",
    from: "#6366f1", to: "#4f46e5",
  },
  {
    q: "Can I update my website myself after handover?",
    a: "Absolutely. We build with user-friendly CMS systems (WordPress, custom dashboards) and provide training so you can manage content independently. We also offer managed maintenance plans if you prefer us to handle it.",
    from: "#a855f7", to: "#7c3aed",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfers, UPI, PayPal, credit/debit cards, and major payment gateways. International payments are also supported. A detailed invoice is provided for every transaction.",
    from: "#0ea5e9", to: "#2dd4bf",
  },
  {
    q: "Do you sign an NDA for my project?",
    a: "Yes. We sign a Non-Disclosure Agreement (NDA) before project discussions begin, ensuring your business ideas, data, and intellectual property remain completely confidential.",
    from: "#8b5cf6", to: "#6366f1",
  },
  {
    q: "What if I'm not satisfied with the design?",
    a: "We offer a structured revision process with clearly defined revision rounds per milestone. If you're unhappy with any deliverable, our team will rework it until it aligns with your vision — within the agreed revision scope.",
    from: "#06b6d4", to: "#a855f7",
  },
  {
    q: "Do you provide hosting services?",
    a: "Yes. We offer managed hosting solutions — shared, VPS, and dedicated servers — along with domain registration, SSL certificates, and email hosting. All hosting plans include regular backups and uptime monitoring.",
    from: "#2dd4bf", to: "#6366f1",
  },
  {
    q: "How do I report a bug on my live project?",
    a: "Submit a support ticket using the form on this page, or email us at info@futuretouch.in with your project name, a description of the issue, and screenshots if possible. Our team responds within 4–8 business hours.",
    from: "#6366f1", to: "#a855f7",
  },
];

const channels = [
  { icon: FaPhoneAlt, label: "Phone",     value: "+91-7056937000",      href: "tel:+91-7056937000",            sub: "Mon – Sat, 9 AM – 6 PM IST", from: "#2dd4bf", to: "#06b6d4", bg: "rgba(45,212,191,.08)",  border: "rgba(45,212,191,.22)" },
  { icon: FaEnvelope, label: "Email",     value: "info@futuretouch.in", href: "mailto:info@futuretouch.in",    sub: "Reply within 24 hours",        from: "#6366f1", to: "#4f46e5", bg: "rgba(99,102,241,.08)",  border: "rgba(99,102,241,.22)" },
  { icon: FaWhatsapp, label: "WhatsApp",  value: "+91-7056937000",      href: "https://wa.me/917056937000",    sub: "Quick chat support",           from: "#a855f7", to: "#7c3aed", bg: "rgba(168,85,247,.08)", border: "rgba(168,85,247,.22)" },
  { icon: FaSkype,    label: "Skype",     value: "Futuretouch",         href: "skype:futuretouch?call",        sub: "Video / voice call",           from: "#0ea5e9", to: "#2dd4bf", bg: "rgba(14,165,233,.08)",  border: "rgba(14,165,233,.22)" },
];

const ticketCategories = [
  "Technical Support","Billing & Payments","Project Update","Design Feedback",
  "Hosting & Domain","Bug Report","Feature Request","General Enquiry",
];
const priorities = ["Low","Medium","High","Critical"];

export default function Support() {
  const [openFaq, setOpenFaq] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    S_name: "", S_email: "", S_phone: "", S_subject: "",
    category: "", priority: "Medium", message: "",
    userEmailsir: "info@futuretouch.in",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { S_name, S_email, S_phone, message } = form;
    if (!S_name || !S_email || !S_phone || !message) {
      Swal.fire({ icon: "warning", title: "Missing Fields", text: "Please fill in all required fields." });
      return;
    }
    setLoading(true);
    try {
      const urlEncoded = new URLSearchParams();
      for (const [k, v] of Object.entries(form)) urlEncoded.append(k, v);
      await axios.post("https://futuretouchmail.onrender.com/send-email", urlEncoded);
      setLoading(false);
      setForm({ S_name:"",S_email:"",S_phone:"",S_subject:"",category:"",priority:"Medium",message:"",userEmailsir:"info@futuretouch.in" });
      Swal.fire({ icon: "success", title: "Ticket Submitted!", text: "Our team will get back to you within 4–8 business hours." });
    } catch {
      setLoading(false);
      Swal.fire({ icon: "error", title: "Submission Failed", text: "Something went wrong. Please try again or email us directly." });
    }
  };

  return (
    <>
      <style>{`
        @keyframes spGrad { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes spPing  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }
        @keyframes spFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }

        .sp-hl {
          background: linear-gradient(125deg,#2dd4bf,#6366f1,#a855f7);
          background-size: 200% 200%;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          animation: spGrad 5s ease-in-out infinite;
        }
        .sp-ping { animation: spPing 2.4s ease-in-out infinite; }

        .sp-cat {
          border-radius: 20px; padding: 26px 22px;
          border: 1px solid rgba(99,102,241,.10);
          background: #fff;
          transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease;
          cursor: default;
        }
        .sp-cat:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(99,102,241,.12); border-color: rgba(99,102,241,.22); }

        .sp-channel {
          border-radius: 18px; padding: 20px 22px;
          display: flex; align-items: center; gap: 16px;
          border: 1px solid; transition: transform .28s ease, box-shadow .28s ease;
          text-decoration: none;
        }
        .sp-channel:hover { transform: translateY(-5px); box-shadow: 0 18px 44px rgba(0,0,0,.08); }

        .sp-field {
          width: 100%; padding: 13px 16px; border-radius: 12px;
          border: 1px solid rgba(99,102,241,.15); background: #fff;
          font-size: 13.5px; color: #374151; font-family: 'Inter',sans-serif;
          outline: none; transition: border-color .2s, box-shadow .2s;
        }
        .sp-field:focus { border-color: rgba(99,102,241,.45); box-shadow: 0 0 0 3px rgba(99,102,241,.08); }
        .sp-field::placeholder { color: #94a3b8; }

        .sp-label {
          display: block; font-size: 11.5px; font-weight: 700;
          letter-spacing: .06em; text-transform: uppercase; margin-bottom: 6px;
          color: #374151; font-family: 'Poppins',sans-serif;
        }

        .sp-submit {
          width: 100%; padding: 15px; border-radius: 14px; border: none; cursor: pointer;
          font-size: 15px; font-weight: 700; color: #fff; font-family: 'Poppins',sans-serif;
          background: linear-gradient(135deg,#2dd4bf,#6366f1,#a855f7);
          box-shadow: 0 8px 28px rgba(99,102,241,.28);
          transition: transform .2s, box-shadow .2s;
        }
        .sp-submit:hover { transform: translateY(-2px); box-shadow: 0 14px 40px rgba(99,102,241,.38); }
        .sp-submit:active { transform: translateY(0); }

        .sp-faq { border-radius: 18px; background: #fff; cursor: pointer; overflow: hidden;
          border: 1px solid rgba(99,102,241,.10); transition: all .3s cubic-bezier(.22,1,.36,1); }
        .sp-faq:hover { box-shadow: 0 8px 28px rgba(99,102,241,.09); }
      `}</style>

      {/* ══ BANNER ══════════════════════════════════════ */}
      <section className="relative overflow-hidden flex items-center justify-center"
        style={{ minHeight: "clamp(280px,40vh,420px)" }}>
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=85"
          alt="Support" fill priority unoptimized className="object-cover object-center"
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(160deg,rgba(4,5,24,.83),rgba(20,10,60,.79) 50%,rgba(4,5,24,.86))" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.06) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.22),transparent 65%)" }} />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.22),transparent 65%)" }} />

        <div className="relative z-10 text-center px-4">
          <nav className="flex items-center justify-center gap-2 mb-5">
            <Link href="/" style={{ color: "rgba(255,255,255,.50)", fontFamily: "'Poppins',sans-serif",
              textDecoration: "none", fontSize: 11, fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase" }}
              className="hover:text-teal-400 transition-colors">Home</Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2l4 4-4 4" stroke="rgba(255,255,255,.30)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ color: "#2dd4bf", fontFamily: "'Poppins',sans-serif",
              fontSize: 11, fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase" }}>Support</span>
          </nav>

          <h1 className="font-extrabold text-white mb-4"
            style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(2rem,5vw,3.6rem)", lineHeight: 1.08 }}>
            How Can We{" "}
            <span style={{ background: "linear-gradient(120deg,#2dd4bf,#6366f1,#a855f7)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Help You?
            </span>
          </h1>
          <p style={{ color: "rgba(255,255,255,.65)", fontFamily: "'Inter',sans-serif",
            fontSize: "clamp(.9rem,1.8vw,1.05rem)", maxWidth: 480, margin: "0 auto 18px" }}>
            Browse our support categories, check the FAQ, or submit a ticket — we&apos;re here for you.
          </p>
          <div className="mx-auto h-[3px] w-16 rounded-full"
            style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
          style={{ background: "linear-gradient(to bottom,transparent,rgba(4,5,24,.55))" }} />
      </section>

      {/* ══ SUPPORT CATEGORIES ══════════════════════════ */}
      <section className="relative py-16 sm:py-20 overflow-hidden"
        style={{ background: "linear-gradient(155deg,#f4f8ff 0%,#ffffff 50%,#f0f4ff 100%)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(99,102,241,.04) 1px,transparent 1px)", backgroundSize: "30px 30px" }} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 xl:px-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-4"
              style={{ background: "rgba(45,212,191,.09)", border: "1px solid rgba(45,212,191,.26)" }}>
              <span className="sp-ping w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span style={{ color: "#0d9488", fontFamily: "'Poppins',sans-serif",
                fontSize: 10, fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase" }}>
                Support Categories
              </span>
            </div>
            <h2 className="font-extrabold mb-3"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.6rem,3.2vw,2.4rem)", color: "#0c1230", lineHeight: 1.12 }}>
              What Do You Need <span className="sp-hl">Help With?</span>
            </h2>
            <div className="mx-auto h-[3px] w-12 rounded-full"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c, i) => (
              <div key={i} className="sp-cat">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `linear-gradient(135deg,${c.from},${c.to})`, boxShadow: `0 6px 20px ${c.from}44` }}>
                  <c.icon size={20} color="#fff" />
                </div>
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 16,
                  color: "#0c1230", marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13.5, color: "#64748b", lineHeight: 1.75 }}>
                  {c.desc}
                </p>
                <div className="mt-4 h-0.5 rounded-full"
                  style={{ background: `linear-gradient(to right,${c.from},${c.to})`, opacity: 0.35 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TICKET FORM + CHANNELS ══════════════════════ */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
        style={{ background: "linear-gradient(155deg,#f4f8ff 0%,#ffffff 50%,#f0f4ff 100%)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(99,102,241,.04) 1px,transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.07),transparent 65%)" }} />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.07),transparent 65%)" }} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 xl:px-16">

          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-4"
              style={{ background: "rgba(45,212,191,.09)", border: "1px solid rgba(45,212,191,.26)" }}>
              <span className="sp-ping w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span style={{ color: "#0d9488", fontFamily: "'Poppins',sans-serif",
                fontSize: 10, fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase" }}>
                Submit a Ticket
              </span>
            </div>
            <h2 className="font-extrabold mb-3"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.6rem,3.2vw,2.4rem)", color: "#0c1230", lineHeight: 1.12 }}>
              Reach Our <span className="sp-hl">Support Team</span>
            </h2>
            <div className="mx-auto h-[3px] w-12 rounded-full mb-4"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
            <p style={{ fontSize: "13.5px", color: "#64748b", maxWidth: 480, margin: "0 auto", lineHeight: 1.85 }}>
              Fill out the form and we&apos;ll get back to you within 4–8 business hours.
            </p>
          </div>

          {/* channels left · form right — matches Contact page layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] xl:grid-cols-[400px_1fr] gap-10 xl:gap-14 items-start">

            {/* ── LEFT: Channels + Response Times ── */}
            <div className="space-y-4">

              {channels.map((c, i) => (
                <Link key={i} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="sp-channel" style={{ background: c.bg, borderColor: c.border }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                    background: `linear-gradient(135deg,${c.from},${c.to})`,
                    display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <c.icon size={18} color="#fff" />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: 10, fontWeight: 700,
                      letterSpacing: ".14em", textTransform: "uppercase", color: c.from, marginBottom: 2 }}>
                      {c.label}
                    </p>
                    <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 14,
                      color: "#0c1230", marginBottom: 2 }}>{c.value}</p>
                    <p style={{ fontSize: 12, color: "#64748b" }}>{c.sub}</p>
                  </div>
                </Link>
              ))}

              {/* Response-time card — matches "Why Choose Us" card from Contact */}
              <div className="rounded-[18px] overflow-hidden"
                style={{ border: "1px solid rgba(99,102,241,.12)", boxShadow: "0 4px 24px rgba(99,102,241,.08)" }}>
                <div className="px-6 py-4"
                  style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1,#a855f7)" }}>
                  <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 15,
                    color: "#fff", margin: 0 }}>Response Times</p>
                </div>
                <div className="px-6 py-4 bg-white space-y-1">
                  {[
                    { label: "Bug / Technical Issue", time: "4–8 hrs",    from: "#2dd4bf", to: "#06b6d4" },
                    { label: "Billing Enquiry",        time: "24 hrs",    from: "#6366f1", to: "#a855f7" },
                    { label: "Project Update",         time: "Same day",  from: "#0ea5e9", to: "#2dd4bf" },
                    { label: "General Enquiry",        time: "24–48 hrs", from: "#a855f7", to: "#7c3aed" },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center justify-between py-2.5"
                      style={{ borderBottom: i < 3 ? "1px solid rgba(99,102,241,.07)" : "none" }}>
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: `linear-gradient(135deg,${r.from},${r.to})` }} />
                        <span style={{ fontSize: 13, color: "#374151", fontFamily: "'Inter',sans-serif" }}>
                          {r.label}
                        </span>
                      </div>
                      <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 13,
                        background: `linear-gradient(135deg,${r.from},${r.to})`,
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                        {r.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ── RIGHT: Ticket Form — white card matching Contact ── */}
            <form onSubmit={handleSubmit}
              className="rounded-[24px] bg-white p-8 sm:p-10"
              style={{ border: "1px solid rgba(99,102,241,.10)",
                boxShadow: "0 8px 40px rgba(99,102,241,.10),0 2px 8px rgba(0,0,0,.04)" }}>

              <div className="h-[3px] w-12 rounded-full mb-5"
                style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }} />
              <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800,
                fontSize: "clamp(1.1rem,2vw,1.4rem)", color: "#0c1230", marginBottom: 4 }}>
                New Support Ticket
              </h3>
              <p style={{ fontSize: 13, color: "#64748b", marginBottom: 28 }}>
                Fill out the form below and we&apos;ll respond within 4–8 business hours.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="sp-label">Full Name *</label>
                  <input type="text" name="S_name" placeholder="John Doe"
                    value={form.S_name} onChange={handleChange} className="sp-field" />
                </div>
                <div>
                  <label className="sp-label">Email Address *</label>
                  <input type="email" name="S_email" placeholder="john@example.com"
                    value={form.S_email} onChange={handleChange} className="sp-field" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="sp-label">Phone Number *</label>
                  <input type="text" name="S_phone" placeholder="+91 7056937000"
                    value={form.S_phone} onChange={handleChange} className="sp-field" />
                </div>
                <div>
                  <label className="sp-label">Category</label>
                  <select name="category" value={form.category} onChange={handleChange} className="sp-field">
                    <option value="">Select category</option>
                    {ticketCategories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="sp-label">Subject</label>
                  <input type="text" name="S_subject" placeholder="Brief issue title"
                    value={form.S_subject} onChange={handleChange} className="sp-field" />
                </div>
                <div>
                  <label className="sp-label">Priority</label>
                  <select name="priority" value={form.priority} onChange={handleChange} className="sp-field">
                    {priorities.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
              </div>

              <div className="mb-7">
                <label className="sp-label">Describe Your Issue *</label>
                <textarea name="message" rows={5}
                  placeholder="Please describe your issue in detail — include any error messages, steps to reproduce, or screenshots if applicable…"
                  value={form.message} onChange={handleChange}
                  className="sp-field" style={{ resize: "vertical", lineHeight: 1.7 }} />
              </div>

              <button type="submit" className="sp-submit">
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white" />
                    Submitting…
                  </div>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Submit Ticket <FaArrowRight size={13} />
                  </span>
                )}
              </button>

              <p className="flex items-center justify-center gap-2 mt-5"
                style={{ fontSize: 12, color: "#94a3b8", fontFamily: "'Poppins',sans-serif" }}>
                <FaLock size={10} /> We respect your privacy and never share your data.
              </p>
            </form>

          </div>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
        style={{ background: "linear-gradient(155deg,#f4f8ff 0%,#ffffff 50%,#f0f4ff 100%)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(99,102,241,.04) 1px,transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,.07),transparent 65%)" }} />

        <div className="relative z-10 max-w-[820px] mx-auto px-4 sm:px-8 xl:px-0">

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-4"
              style={{ background: "rgba(45,212,191,.09)", border: "1px solid rgba(45,212,191,.26)" }}>
              <span className="sp-ping w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }} />
              <span style={{ color: "#0d9488", fontFamily: "'Poppins',sans-serif",
                fontSize: 10, fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase" }}>
                Frequently Asked
              </span>
            </div>
            <h2 className="font-extrabold mb-3"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.6rem,3.2vw,2.4rem)", color: "#0c1230", lineHeight: 1.12 }}>
              Common <span className="sp-hl">Support Questions</span>
            </h2>
            <div className="mx-auto h-[3px] w-12 rounded-full mb-4"
              style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }} />
            <p style={{ fontSize: "13.5px", color: "#64748b", maxWidth: 480, margin: "0 auto", lineHeight: 1.85 }}>
              Can&apos;t find your answer here? Submit a ticket above or contact us directly.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="sp-faq"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  style={{
                    border: isOpen ? `1px solid ${faq.from}55` : "1px solid rgba(99,102,241,.10)",
                    boxShadow: isOpen
                      ? `0 10px 36px rgba(99,102,241,.10), inset 4px 0 0 ${faq.from}`
                      : "0 2px 14px rgba(99,102,241,.05)",
                    transition: "all .3s cubic-bezier(.22,1,.36,1)",
                  }}>
                  <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between",
                    alignItems: "center", gap: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                        background: `linear-gradient(135deg,${faq.from},${faq.to})`,
                        display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 13, color: "#fff" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700,
                        fontSize: "clamp(.88rem,1.4vw,.97rem)", color: "#0c1230", lineHeight: 1.4, margin: 0 }}>
                        {faq.q}
                      </h3>
                    </div>
                    <div style={{ width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: isOpen ? `linear-gradient(135deg,${faq.from},${faq.to})` : "rgba(99,102,241,.08)",
                      transition: "all .3s" }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        style={{ transform: isOpen ? "rotate(45deg)" : "none", transition: "transform .3s" }}>
                        <path d="M6 1v10M1 6h10" stroke={isOpen ? "#fff" : "#6366f1"} strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <div style={{ maxHeight: isOpen ? 300 : 0, overflow: "hidden",
                    transition: "max-height .5s cubic-bezier(.22,1,.36,1)" }}>
                    <div style={{ padding: "0 24px 22px 24px" }}>
                      <div style={{ height: 1, background: `linear-gradient(90deg,${faq.from}33,transparent)`, marginBottom: 14 }} />
                      <p style={{ fontSize: "13.5px", color: "#475569", lineHeight: 1.88, margin: 0 }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Still need help? */}
          <div className="mt-10 rounded-2xl p-6 text-center"
            style={{ background: "rgba(99,102,241,.06)", border: "1px solid rgba(99,102,241,.12)" }}>
            <FaCheckCircle size={22} style={{ color: "#2dd4bf", margin: "0 auto 10px" }} />
            <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 15,
              color: "#0c1230", marginBottom: 6 }}>
              Still need help?
            </p>
            <p style={{ fontSize: "13.5px", color: "#475569", lineHeight: 1.85, marginBottom: 16 }}>
              Our support team is always ready to assist you. Submit a ticket or reach out directly.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white"
              style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                boxShadow: "0 4px 20px rgba(45,212,191,.28)", fontFamily: "'Poppins',sans-serif" }}>
              Contact Us <FaArrowRight size={12} />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
