import Image from "next/image";
import Link from "next/link";
import { getServiceIcon } from "../../lib/serviceIcons";

export default function CardsBlock({ data = {} }) {
  const { badge, heading, items = [] } = data;
  if (!items.length) return null;

  return (
    <section className="bg-white py-20 px-5 sm:px-10 xl:px-16">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          {badge && <p className="text-[10px] font-bold uppercase tracking-[.2em] text-teal-600 mb-2">{badge}</p>}
          {heading && <h2 className="font-['Poppins',sans-serif] font-extrabold text-[#050748] text-2xl sm:text-3xl">{heading}</h2>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm flex flex-col">
              {c.image && (
                <div className="relative aspect-video">
                  <Image src={c.image} alt={c.image_alt || c.title || ""} fill className="object-cover" />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                {c.icon && !c.image && (
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg mb-4 bg-[linear-gradient(135deg,#2dd4bf,#6366f1)]">
                    {getServiceIcon(c.icon)}
                  </div>
                )}
                <h4 className="font-['Poppins',sans-serif] font-bold text-[#050748] text-base mb-2">{c.title}</h4>
                <p className="text-[#6a6a8e] text-[.85rem] leading-relaxed flex-1">{c.desc}</p>
                {c.link_label && c.link_url && (
                  <Link href={c.link_url} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2dd4bf] no-underline">
                    {c.link_label} →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
