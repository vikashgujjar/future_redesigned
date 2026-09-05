import Image from "next/image";
import Link from "next/link";

export default function ImageTextBlock({ data = {} }) {
  const { badge, heading, heading_highlight, body, image, image_alt, image_position, cta_label, cta_url } = data;
  const imageFirst = image_position === "left";

  return (
    <section className="bg-white py-20 px-5 sm:px-10 xl:px-16">
      <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {imageFirst && image && (
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-1 lg:order-none">
            <Image src={image} alt={image_alt || heading || ""} fill className="object-cover" />
          </div>
        )}
        <div>
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-200 bg-teal-50 mb-5 text-[10px] font-bold tracking-[.22em] uppercase text-teal-600 font-['Poppins',sans-serif]">
              {badge}
            </div>
          )}
          {heading && (
            <h2 className="font-['Poppins',sans-serif] font-extrabold text-[#050748] text-2xl sm:text-3xl leading-tight mb-4">
              {heading_highlight && heading.includes(heading_highlight)
                ? heading.split(heading_highlight).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="bg-[linear-gradient(135deg,#2dd4bf,#6366f1)] bg-clip-text text-transparent">{heading_highlight}</span>
                      )}
                    </span>
                  ))
                : heading}
            </h2>
          )}
          {body && (
            <div className="prose prose-slate max-w-none text-[#4a5070] leading-relaxed mb-6 [&_a]:text-[#4f46e5] [&_a]:font-semibold"
              dangerouslySetInnerHTML={{ __html: body }} />
          )}
          {cta_label && cta_url && (
            <Link href={cta_url}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-['Poppins',sans-serif] text-sm font-bold no-underline bg-[linear-gradient(135deg,#2dd4bf,#6366f1)] hover:-translate-y-0.5 transition-all duration-200">
              {cta_label}
            </Link>
          )}
        </div>
        {!imageFirst && image && (
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src={image} alt={image_alt || heading || ""} fill className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
