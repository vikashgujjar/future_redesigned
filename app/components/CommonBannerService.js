import Image from 'next/image';

export default function CommonBannerService({ imgSrc, title, desc }) {
  return (
    <section className="relative overflow-hidden bg-[#3a2b80] font-[Inter,sans-serif]">

      {/* ── Background layers ── */}
      {/* Deep purple gradient wash */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#2c1f66_0%,#3a2b80_40%,#46309c_70%,#2c1f66_100%)]" />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:30px_30px] opacity-60" />

      {/* Glow orbs — same palette as the old site (purple / orange / red) */}
      <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.22)_0%,rgba(255,138,61,0.05)_45%,transparent_70%)] animate-[pulse_7s_ease-in-out_infinite]" />
      <div className="absolute -bottom-40 -right-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(226,58,58,0.20)_0%,rgba(226,58,58,0.05)_45%,transparent_70%)] animate-[pulse_9s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 left-1/2 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.18)_0%,transparent_70%)]" />

      {/* Spinning dashed rings — top right */}
      <svg
        className="pointer-events-none absolute -top-10 -right-10 hidden sm:block"
        width="300" height="300" viewBox="0 0 380 380" fill="none" aria-hidden="true"
      >
        <circle cx="190" cy="190" r="170" stroke="rgba(255,138,61,0.12)" strokeWidth="1" strokeDasharray="50 80" className="origin-center animate-[spin_22s_linear_infinite]" />
        <circle cx="190" cy="190" r="120" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="30 56" className="origin-center animate-[spin_16s_linear_infinite_reverse]" />
        <circle cx="190" cy="190" r="76" stroke="rgba(226,58,58,0.12)" strokeWidth="1" strokeDasharray="18 36" className="origin-center animate-[spin_12s_linear_infinite]" />
      </svg>

      {/* ── Content grid ── */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-5 pb-14 pt-24 sm:px-8 sm:pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:pb-8 lg:pt-12">

        {/* ════════ LEFT — Copy ════════ */}
        <div className="text-center lg:text-left">

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 backdrop-blur-md sm:px-5 sm:py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-orange-400 to-red-500" />
            </span>
            <span className="font-[Poppins,sans-serif] text-[10px] font-bold uppercase tracking-[0.22em] text-orange-300">
              Future IT Touch · Professional Services
            </span>
          </div>

          {/* Headline — white → lavender → orange gradient */}
          <h1 className="mb-5 break-words bg-gradient-to-r from-white via-[#d8ccff] to-[#ffb27d] bg-clip-text font-[Poppins,sans-serif] text-[clamp(1.6rem,4.5vw,3.4rem)] font-extrabold leading-[1.12] text-transparent">
            {title}
          </h1>

          {/* Accent bar */}
          <div className="mx-auto mb-6 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#e23a3a] via-[#ff8a3d] to-[#a855f7] lg:mx-0" />

          {/* Description */}
          <p className="mx-auto mb-8 line-clamp-4 max-w-[640px] text-[13.5px] leading-[1.85] text-[#cfc6f2] sm:text-[14.5px] md:text-[15.5px] lg:mx-0">
            {desc}
          </p>

          {/* CTAs */}
          <div className="mb-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
            <a
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-indigo-700 px-8 py-3.5 font-[Poppins,sans-serif] text-sm font-semibold text-white no-underline shadow-[0_10px_30px_teal-400] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_42px_teal-400] sm:w-auto"
            >
              Quick Enquiry
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                <path d="M1.5 6h9M6.5 1.5l4 4.5-4 4.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="https://www.upwork.com/freelancers/vinodk97" target="_blank" rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-[Poppins,sans-serif] text-sm font-semibold text-purple-100 no-underline backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-400/50 hover:bg-white/10 sm:w-auto"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                <line x1="12" y1="12" x2="12.01" y2="12" />
              </svg>
              Hire Now
            </a>
          </div>

          {/* Micro stats */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 lg:justify-start">
            {[['500+', 'Clients'], ['15+', 'Yrs Exp'], ['98%', 'Satisfaction']].map(([val, label]) => (
              <div key={label} className="flex flex-col items-center gap-1 lg:items-start">
                <span className="bg-gradient-to-br from-white to-[#ffb27d] bg-clip-text font-[Poppins,sans-serif] text-xl font-extrabold leading-none text-transparent sm:text-2xl">
                  {val}
                </span>
                <span className="font-[Poppins,sans-serif] text-[9.5px] font-semibold uppercase tracking-[0.16em] text-white/40">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ════════ RIGHT — Image showcase ════════ */}
        <div className="relative mx-auto hidden w-full max-w-[440px] lg:block">

          {/* Glow behind the card */}
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#ff8a3d]/25 via-[#e23a3a]/20 to-[#a855f7]/25 blur-2xl" />

          {/* Gradient ring frame */}
          <div className="group relative rotate-2 rounded-[2rem] bg-gradient-to-br from-[#ff8a3d] via-[#e23a3a]/60 to-[#a855f7] p-[2px] shadow-[0_24px_60px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:rotate-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(2rem-2px)] bg-[#2c1f66]">
              <Image
                src={imgSrc}
                alt=""
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Soft purple tint so any image blends with the brand */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1f66]/70 via-transparent to-[#2c1f66]/20" />
            </div>
          </div>

          {/* Floating chip — top left */}
          <div className="absolute -left-8 top-8 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl animate-[bounce_5s_ease-in-out_infinite]">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff8a3d] to-[#e23a3a]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <div className="leading-tight">
              <p className="font-[Poppins,sans-serif] text-[11px] font-bold text-white">Trusted Delivery</p>
              <p className="text-[9px] font-medium uppercase tracking-wider text-white/50">On-time, every time</p>
            </div>
          </div>

          {/* Floating chip — bottom right */}
          <div className="absolute -bottom-6 -right-4 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl animate-[bounce_6s_ease-in-out_infinite_0.8s]">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#a855f7] to-[#6d28d9]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </span>
            <div className="leading-tight">
              <p className="font-[Poppins,sans-serif] text-[11px] font-bold text-white">4.9 Rating</p>
              <p className="text-[9px] font-medium uppercase tracking-wider text-white/50">Client reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[5] h-16 bg-gradient-to-b from-transparent to-[#241a55]/80 sm:h-20" />
    </section>
  );
}