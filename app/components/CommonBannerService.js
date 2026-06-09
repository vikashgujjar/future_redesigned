import Image from 'next/image';

export default function CommonBannerService({ imgSrc, title, desc }) {
  return (
    <>
      <style>{`
        @keyframes cbsOrb1   { 0%,100%{transform:translate(0,0)scale(1)} 40%{transform:translate(30px,-20px)scale(1.07)} 70%{transform:translate(-16px,24px)scale(.95)} }
        @keyframes cbsOrb2   { 0%,100%{transform:translate(0,0)scale(1)} 35%{transform:translate(-24px,18px)scale(1.05)} 70%{transform:translate(20px,-28px)scale(.97)} }
        @keyframes cbsGrad   { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes cbsPulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.78)} }
        @keyframes cbsSpin   { to{transform:rotate(360deg)} }
        @keyframes cbsSpinR  { to{transform:rotate(-360deg)} }
        @keyframes cbsGridFd { 0%,100%{opacity:.04} 50%{opacity:.09} }
        @keyframes cbsShimmer{ 0%{transform:translateX(-120%)} 100%{transform:translateX(220%)} }
        @keyframes cbsFadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes cbsBarIn  { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes cbsFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }

        .cbs-orb1  { animation:cbsOrb1 18s ease-in-out infinite }
        .cbs-orb2  { animation:cbsOrb2 23s ease-in-out infinite }
        .cbs-pulse { animation:cbsPulse 2.4s ease-in-out infinite }
        .cbs-float { animation:cbsFloat 4.5s ease-in-out infinite }
        .cbs-spin  { animation:cbsSpin  12s linear infinite; transform-origin:190px 190px }
        .cbs-spinr { animation:cbsSpinR 17s linear infinite; transform-origin:190px 190px }
        .cbs-grid  { animation:cbsGridFd 8s ease-in-out infinite }
        .cbs-fadein{ animation:cbsFadeUp .9s cubic-bezier(.22,1,.36,1) both }
        .cbs-bar   { animation:cbsBarIn .85s cubic-bezier(.22,1,.36,1) .3s both; transform-origin:center }

        .cbs-title {
          background: linear-gradient(125deg,#ffffff 0%,#7dd3fc 28%,#c084fc 58%,#f9a8d4 80%,#ffffff 100%);
          background-size: 280% 280%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: cbsGrad 7s ease-in-out infinite;
          word-break: break-word;
        }

        .cbs-btn-primary {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg,#06b6d4,#7c3aed,#db2777);
          background-size: 250% 250%;
          animation: cbsGrad 4s ease-in-out infinite;
          box-shadow: 0 8px 28px rgba(6,182,212,.30),0 2px 8px rgba(0,0,0,.25);
          transition: transform .2s, box-shadow .2s;
        }
        .cbs-btn-primary::before {
          content:'';
          position:absolute;
          top:0; left:-100%; width:55%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent);
          animation:cbsShimmer 2.8s ease-in-out infinite 1.2s;
        }
        .cbs-btn-primary:hover { transform:translateY(-2px); box-shadow:0 14px 40px rgba(6,182,212,.40),0 4px 16px rgba(124,58,237,.28); }

        .cbs-btn-ghost {
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.18);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          color: #e2e8f0;
          transition: transform .2s,background .2s,border-color .2s;
        }
        .cbs-btn-ghost:hover { transform:translateY(-2px); background:rgba(255,255,255,.10); border-color:rgba(6,182,212,.45); }

        .cbs-badge {
          background: rgba(6,182,212,.08);
          border: 1px solid rgba(6,182,212,.24);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .cbs-desc {
          color: rgba(185,210,240,.78);
          line-height: 1.85;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .cbs-scroll-hint {
          width: 24px; height: 38px;
          border: 1.5px solid rgba(255,255,255,.18);
          border-radius: 12px;
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 5px;
        }
        .cbs-scroll-hint::after {
          content:'';
          width:4px; height:7px;
          border-radius:2px;
          background:rgba(6,182,212,.7);
          animation:cbsFloat 1.5s ease-in-out infinite;
        }

        /* ── Responsive ── */
        @media (max-width: 480px) {
          .cbs-desc { -webkit-line-clamp: 3; font-size:13.5px !important; }
          .cbs-badge-text { letter-spacing:.12em !important; font-size:9px !important; }
          .cbs-scroll-hint { display:none; }
        }
        @media (max-width: 640px) {
          .cbs-orb1,.cbs-orb2 { opacity:.6 }
        }
      `}</style>

      <section
        className="relative overflow-hidden flex flex-col"
        style={{
          minHeight: 'clamp(480px,72vh,700px)',
          fontFamily: "'Inter',sans-serif",
        }}
      >
        {/* ── Background: service image ── */}
        <div className="absolute inset-0 z-[0]" style={{ transform:'scale(1.08)' }}>
          <Image
            src={imgSrc}
            fill
            alt=""
            className="object-cover object-center"
            style={{ opacity:.65 }}
            priority
          />
        </div>

        {/* ── Blur layer ── */}
        <div className="absolute inset-0 z-[1]"
          style={{ backdropFilter:'blur(18px)', WebkitBackdropFilter:'blur(18px)' }} />

        {/* ── Transparent gradient overlay ── */}
        <div className="absolute inset-0 z-[2]"
          style={{ background:'linear-gradient(160deg,rgba(3,7,18,.55) 0%,rgba(8,14,40,.48) 38%,rgba(16,8,44,.52) 68%,rgba(3,7,18,.60) 100%)' }} />

        {/* ── Dot grid ── */}
        <div className="cbs-grid absolute inset-0 z-[3] pointer-events-none"
          style={{
            backgroundImage:'radial-gradient(rgba(255,255,255,.06) 1px,transparent 1px)',
            backgroundSize:'32px 32px',
          }} />

        {/* ── Orbs ── */}
        <div className="cbs-orb1 absolute pointer-events-none z-[3]"
          style={{ top:'-18%',left:'-10%',width:'55vw',height:'55vw',maxWidth:'540px',maxHeight:'540px',borderRadius:'50%',background:'radial-gradient(circle,rgba(6,182,212,.18) 0%,rgba(6,182,212,.06) 40%,transparent 70%)' }} />
        <div className="cbs-orb2 absolute pointer-events-none z-[3]"
          style={{ bottom:'-20%',right:'-8%',width:'56vw',height:'56vw',maxWidth:'560px',maxHeight:'560px',borderRadius:'50%',background:'radial-gradient(circle,rgba(168,85,247,.22) 0%,rgba(168,85,247,.06) 42%,transparent 70%)' }} />
        <div className="absolute pointer-events-none z-[3]"
          style={{ top:'35%',left:'50%',transform:'translateX(-50%)',width:'360px',height:'360px',borderRadius:'50%',background:'radial-gradient(circle,rgba(244,114,182,.08) 0%,transparent 70%)' }} />

        {/* ── Spinning arcs — top-right ── */}
        <svg className="absolute -top-6 -right-6 pointer-events-none z-[3] hidden sm:block" width="300" height="300" viewBox="0 0 380 380" fill="none" aria-hidden="true">
          <circle className="cbs-spinr" cx="190" cy="190" r="170" stroke="rgba(6,182,212,.07)"   strokeWidth="1"   strokeDasharray="52 84" fill="none" />
          <circle className="cbs-spin"  cx="190" cy="190" r="124" stroke="rgba(168,85,247,.06)"  strokeWidth=".8"  strokeDasharray="34 58" fill="none" />
          <circle className="cbs-spinr" cx="190" cy="190" r="80"  stroke="rgba(244,114,182,.05)" strokeWidth=".7"  strokeDasharray="20 38" fill="none" />
        </svg>

        {/* ── Spinning arcs — bottom-left ── */}
        <svg className="absolute -bottom-6 -left-6 pointer-events-none z-[3] hidden sm:block" width="220" height="220" viewBox="0 0 260 260" fill="none" aria-hidden="true">
          <circle className="cbs-spin"  cx="0" cy="260" r="190" stroke="rgba(6,182,212,.05)"  strokeWidth=".8" strokeDasharray="44 72" fill="none" />
          <circle className="cbs-spinr" cx="0" cy="260" r="130" stroke="rgba(168,85,247,.05)" strokeWidth=".7" strokeDasharray="28 50" fill="none" />
        </svg>

        {/* ── Centered content ── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-[860px] mx-auto px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 pb-8 sm:pb-10 text-center">

          {/* Badge */}
          <div className="cbs-badge cbs-fadein inline-flex items-center gap-2 sm:gap-2.5 rounded-full px-3.5 sm:px-5 py-1.5 sm:py-2 mb-4 sm:mb-5 md:mb-7"
            style={{ animationDelay:'.05s' }}>
            <span className="cbs-pulse w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0"
              style={{ background:'linear-gradient(135deg,#06b6d4,#0ea5e9)' }} />
            <span className="cbs-badge-text font-bold uppercase"
              style={{ color:'#67e8f9',fontFamily:"'Poppins',sans-serif",fontSize:'10px',letterSpacing:'.20em' }}>
              Future IT Touch &nbsp;·&nbsp; Professional Services
            </span>
          </div>

          {/* Headline */}
          <h1 className="cbs-title cbs-fadein font-extrabold leading-[1.12] mb-4 sm:mb-5 w-full"
            style={{ fontFamily:"'Poppins',sans-serif",fontSize:'clamp(1.5rem,4.5vw,3.6rem)',animationDelay:'.15s' }}>
            {title}
          </h1>

          {/* Accent bar */}
          <div className="cbs-bar h-[3px] w-16 sm:w-20 rounded-full mb-4 sm:mb-5 md:mb-7 mx-auto"
            style={{ background:'linear-gradient(90deg,#06b6d4,#a855f7,#f472b6)' }} />

          {/* Description */}
          <p className="cbs-desc cbs-fadein text-[13.5px] sm:text-[14.5px] md:text-[15.5px] max-w-[90%] sm:max-w-[600px] md:max-w-[680px] mx-auto mb-6 sm:mb-8 md:mb-9 text-white!"
            style={{ animationDelay:'.25s' }}>
            {desc}
          </p>

          {/* CTAs */}
          <div className="cbs-fadein flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10 w-full sm:w-auto"
            style={{ animationDelay:'.35s' }}>
            <a href="/contact"
              className="cbs-btn-primary inline-flex items-center justify-center gap-2 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full no-underline"
              style={{ fontFamily:"'Poppins',sans-serif",fontSize:'clamp(.8rem,2vw,.9rem)' }}>
              Quick Enquiry
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                <path d="M1.5 6h9M6.5 1.5l4 4.5-4 4.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="tel:+917056937000"
              className="cbs-btn-ghost inline-flex items-center justify-center gap-2 font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full no-underline"
              style={{ fontFamily:"'Poppins',sans-serif",fontSize:'clamp(.8rem,2vw,.9rem)' }}>
              {/* Briefcase icon */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
                <line x1="12" y1="12" x2="12.01" y2="12"/>
              </svg>
              Hire Us
            </a>
          </div>

          {/* Scroll hint — hidden on mobile */}
          <div className="cbs-fadein hidden sm:block" style={{ animationDelay:'.5s' }}>
            <div className="cbs-scroll-hint mx-auto" />
          </div>

        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 pointer-events-none z-[4]"
          style={{ background:'linear-gradient(to bottom,transparent,rgba(3,7,18,.65))' }} />
      </section>
    </>
  );
}
