import Image from "next/image";

export default function OverviewSection({
  image,
  imageAlt = "Service illustration",
  badgeText,
  heading,
  headingHighlight,
  headingAfter = "",
  paragraphs = [],
  ctaText = "Get In Touch",
  ctaHref = "tel:+917056937000",
  since = "Since 2017",
  trustedLabel = "Trusted by 500+ Clients",
}) {
  return (
    <section
      className="relative py-20 lg:py-28"
      style={{ background: "#f8faff", fontFamily: "'Inter',sans-serif" }}
    >
      <style>{`
        @keyframes ovFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes ovBarIn { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes ovPing  { 75%,100%{transform:scale(2.1);opacity:0} }
        .ov-dotgrid {
          background-image: radial-gradient(circle,rgba(99,102,241,.055) 1px,transparent 1px);
          background-size: 28px 28px;
        }
        .ov-bar  { animation: ovBarIn .7s cubic-bezier(.22,1,.36,1) .2s both; transform-origin: left; }
        .ov-ping { position: relative; }
        .ov-ping::after {
          content:''; position:absolute; inset:0; border-radius:50%;
          background:inherit; animation:ovPing 2s ease-out infinite;
        }
      `}</style>

      <div className="ov-dotgrid absolute inset-0 pointer-events-none" />
      <div
        className="absolute -top-48 -left-48 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(45,212,191,.07),transparent 65%)" }}
      />
      <div
        className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(99,102,241,.06),transparent 65%)" }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 xl:px-16">
        <div
          className="relative rounded-[28px] overflow-hidden"
          style={{
            boxShadow:
              "0 50px 100px rgba(99,102,241,.14), 0 20px 40px rgba(0,0,0,.08), 0 0 0 1px rgba(99,102,241,.08)",
          }}
        >
          {/* Top gradient strip */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px] z-20"
            style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1,#a855f7)" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — image */}
            <div
              className="relative overflow-hidden"
              style={{ minHeight: "clamp(320px,45vw,580px)" }}
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 z-[1]"
                style={{
                  background:
                    "linear-gradient(145deg,rgba(13,148,136,.60) 0%,rgba(99,102,241,.68) 55%,rgba(139,92,246,.75) 100%)",
                }}
              />
              {/* Dot grid overlay */}
              <div
                className="absolute inset-0 z-[2] opacity-[.18]"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,.65) 1px,transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              {/* Corner brackets */}
              <div
                className="absolute top-7 left-7 z-[3] w-14 h-14 pointer-events-none"
                style={{
                  borderTop: "2.5px solid rgba(255,255,255,.40)",
                  borderLeft: "2.5px solid rgba(255,255,255,.40)",
                  borderRadius: "8px 0 0 0",
                }}
              />
              <div
                className="absolute bottom-7 right-7 z-[3] w-14 h-14 pointer-events-none"
                style={{
                  borderBottom: "2.5px solid rgba(255,255,255,.40)",
                  borderRight: "2.5px solid rgba(255,255,255,.40)",
                  borderRadius: "0 0 8px 0",
                }}
              />
              {/* Decorative circles */}
              <div
                className="absolute -right-14 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full pointer-events-none z-[3]"
                style={{ border: "1.5px solid rgba(255,255,255,.14)" }}
              />
              <div
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-36 h-36 rounded-full pointer-events-none z-[3]"
                style={{ border: "1px solid rgba(255,255,255,.10)" }}
              />
              {/* Sparkles */}
              <svg
                className="absolute top-[28%] right-[18%] z-[3] pointer-events-none"
                width="22" height="22" viewBox="0 0 36 36" fill="none"
                style={{ opacity: 0.5, animation: "ovFloat 5s ease-in-out infinite" }}
              >
                <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="white" />
              </svg>
              <svg
                className="absolute bottom-[30%] left-[16%] z-[3] pointer-events-none"
                width="14" height="14" viewBox="0 0 36 36" fill="none"
                style={{ opacity: 0.35, animation: "ovFloat 7s ease-in-out infinite 1.5s" }}
              >
                <path d="M18 0 L20.2 15.8 L36 18 L20.2 20.2 L18 36 L15.8 20.2 L0 18 L15.8 15.8 Z" fill="white" />
              </svg>
              {/* Floating badge */}
              <div
                className="absolute bottom-8 left-8 z-[4] flex items-center gap-3 rounded-2xl px-4 py-3"
                style={{
                  background: "rgba(255,255,255,.12)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,.22)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M12 2l3.1 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.8l-6.2 3.2L7 14.2 2 9.3l6.9-1z" />
                  </svg>
                </div>
                <div>
                  <p
                    className="font-extrabold text-white text-[15px] leading-none"
                    style={{ fontFamily: "'Poppins',sans-serif" }}
                  >
                    {since}
                  </p>
                  <p className="text-white/65 text-[10px] tracking-[.08em] uppercase font-semibold mt-0.5">
                    {trustedLabel}
                  </p>
                </div>
              </div>
            </div>

            {/* Right — content */}
            <div className="bg-white px-8 py-12 sm:px-10 sm:py-14 xl:px-14 xl:py-16 flex flex-col justify-center">
              {/* Badge pill */}
              <div
                className="inline-flex items-center gap-2.5 self-start rounded-full px-4 py-1.5 mb-5"
                style={{
                  background: "rgba(45,212,191,.09)",
                  border: "1px solid rgba(45,212,191,.26)",
                }}
              >
                <span
                  className="ov-ping w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#2dd4bf,#06b6d4)" }}
                />
                <span
                  className="text-[10px] font-bold uppercase tracking-[.22em]"
                  style={{
                    background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "'Poppins',sans-serif",
                  }}
                >
                  {badgeText}
                </span>
              </div>

              {/* Heading */}
              <h2
                className="font-bold leading-tight text-gray-900 mb-4"
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: "clamp(1.65rem,3vw,2.5rem)",
                }}
              >
                {heading}{" "}
                {headingHighlight && (
                  <span
                    style={{
                      background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {headingHighlight}
                  </span>
                )}
                {headingAfter && <> {headingAfter}</>}
              </h2>

              {/* Accent bar */}
              <div
                className="ov-bar h-[3px] w-14 rounded-full mb-6"
                style={{ background: "linear-gradient(90deg,#2dd4bf,#6366f1)" }}
              />

              {/* Paragraphs */}
              <div className="text-[14.5px] text-gray-500 leading-[1.92] mb-8 space-y-4">
                {paragraphs.map((p, i) =>
                  typeof p === "string" ? (
                    <p key={i}>{p}</p>
                  ) : (
                    <p key={i}>
                      {p.boldPrefix && (
                        <span className="font-semibold text-gray-700">{p.boldPrefix} </span>
                      )}
                      {p.text}
                    </p>
                  )
                )}
              </div>

              {/* CTA */}
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 self-start text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 no-underline"
                style={{
                  background: "linear-gradient(135deg,#2dd4bf,#6366f1)",
                  boxShadow: "0 4px 22px rgba(45,212,191,.28)",
                  fontFamily: "'Poppins',sans-serif",
                }}
              >
                {ctaText}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1.5 6h9M6.5 1.5l4 4.5-4 4.5"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
