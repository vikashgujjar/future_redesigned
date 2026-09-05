import { getServiceIcon } from "../../lib/serviceIcons";

export default function ProcessBlock({ data = {} }) {
  const { badge, heading, items = [] } = data;
  if (!items.length) return null;

  return (
    <section className="bg-[linear-gradient(140deg,#060b1a,#09112a,#0d1540)] py-20 px-5 sm:px-10 xl:px-16">
      <div className="max-w-[1100px] mx-auto">
        {(badge || heading) && (
          <div className="text-center mb-14">
            {badge && <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#2dd4bf] mb-2">{badge}</p>}
            {heading && <h2 className="font-['Poppins',sans-serif] font-extrabold text-white text-2xl sm:text-3xl">{heading}</h2>}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((p, i) => (
            <div key={i} className="rounded-2xl border border-white/[.07] bg-white/[.035] p-6">
              {(p.icon || p.step) && (
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 font-['Poppins',sans-serif] font-black text-white text-lg bg-[linear-gradient(135deg,#2dd4bf,#6366f1)]">
                  {p.icon ? getServiceIcon(p.icon) : p.step}
                </div>
              )}
              <h5 className="font-['Poppins',sans-serif] font-bold text-white text-base mb-2">{p.title}</h5>
              <p className="text-[13px] leading-[1.8] text-white/48">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
