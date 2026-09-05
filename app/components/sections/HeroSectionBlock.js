import Image from "next/image";
import Link from "next/link";

export default function HeroSectionBlock({ data = {} }) {
  const { badge, heading, heading_highlight, description, image, image_alt, cta_label, cta_url } = data;

  return (
    <section className="relative overflow-hidden bg-[#030712] py-24 px-5 sm:px-10 xl:px-16">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(4,5,24,.98)_0%,rgba(8,14,40,.92)_55%,rgba(4,5,24,.70)_100%)]" />
      <div className="relative z-10 max-w-[1000px] mx-auto text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 mb-6 text-[10px] font-bold tracking-[.22em] uppercase text-[#2dd4bf] font-['Poppins',sans-serif]">
            {badge}
          </div>
        )}
        {heading && (
          <h1 className="font-['Poppins',sans-serif] font-extrabold text-white [font-size:clamp(1.8rem,4.2vw,3.2rem)] leading-[1.15] mb-5">
            {heading_highlight && heading.includes(heading_highlight)
              ? heading.split(heading_highlight).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="bg-[linear-gradient(125deg,#2dd4bf,#6366f1,#a855f7)] bg-clip-text text-transparent">
                        {heading_highlight}
                      </span>
                    )}
                  </span>
                ))
              : heading}
          </h1>
        )}
        {description && <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">{description}</p>}
        {image && (
          <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden mb-8 shadow-2xl">
            <Image src={image} alt={image_alt || heading || ""} fill className="object-cover" />
          </div>
        )}
        {cta_label && cta_url && (
          <Link href={cta_url}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-['Poppins',sans-serif] text-sm font-bold uppercase tracking-[.06em] no-underline bg-[linear-gradient(135deg,#2dd4bf,#6366f1)] hover:-translate-y-0.5 transition-all duration-200">
            {cta_label}
          </Link>
        )}
      </div>
    </section>
  );
}
