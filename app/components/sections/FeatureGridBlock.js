import { getServiceIcon } from "../../lib/serviceIcons";

export default function FeatureGridBlock({ data = {} }) {
  const { badge, heading, description, items = [] } = data;
  if (!items.length) return null;

  return (
    <section className="bg-white py-20 px-5 sm:px-10 xl:px-16">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-200 bg-teal-50 mb-5 text-[10px] font-bold tracking-[.22em] uppercase text-teal-600 font-['Poppins',sans-serif]">
              {badge}
            </div>
          )}
          {heading && <h2 className="font-['Poppins',sans-serif] font-extrabold text-[#050748] text-2xl sm:text-3xl mb-3">{heading}</h2>}
          {description && <p className="text-[#6a6a8e] max-w-2xl mx-auto">{description}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              {f.icon && (
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg mb-4 bg-[linear-gradient(135deg,#2dd4bf,#6366f1)]">
                  {getServiceIcon(f.icon)}
                </div>
              )}
              <h4 className="font-['Poppins',sans-serif] font-bold text-[#050748] text-base mb-2">{f.title}</h4>
              <p className="text-[#6a6a8e] text-[.85rem] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
