import Link from "next/link";

export default function CtaBlock({ data = {} }) {
  const { heading, description, button_label, button_url, secondary_label, secondary_url } = data;

  return (
    <section className="relative overflow-hidden bg-[#050b20] py-20 px-5 sm:px-10">
      <div className="relative z-10 max-w-[760px] mx-auto text-center">
        {heading && (
          <h2 className="font-['Poppins',sans-serif] font-extrabold text-white [font-size:clamp(1.5rem,3vw,2.4rem)] leading-tight mb-4">
            {heading}
          </h2>
        )}
        {description && <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto mb-8">{description}</p>}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {button_label && button_url && (
            <Link href={button_url}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-['Poppins',sans-serif] text-sm font-bold uppercase tracking-[.06em] no-underline bg-[linear-gradient(135deg,#2dd4bf,#6366f1)] hover:-translate-y-0.5 transition-all duration-200">
              {button_label}
            </Link>
          )}
          {secondary_label && secondary_url && (
            <Link href={secondary_url}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-['Poppins',sans-serif] text-sm font-bold uppercase tracking-[.06em] no-underline border border-white/20 text-white hover:border-[#2dd4bf]/50 hover:bg-white/5 transition-all duration-200">
              {secondary_label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
