import { getServiceIcon } from "../../lib/serviceIcons";

export default function StatsBlock({ data = {} }) {
  const { badge, heading, items = [] } = data;
  if (!items.length) return null;

  return (
    <section className="bg-[linear-gradient(135deg,#050b20,#0a0f2e)] py-16 px-5 sm:px-10 xl:px-16">
      <div className="max-w-[1100px] mx-auto">
        {(badge || heading) && (
          <div className="text-center mb-10">
            {badge && <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#2dd4bf] mb-2">{badge}</p>}
            {heading && <h2 className="font-['Poppins',sans-serif] font-extrabold text-white text-2xl">{heading}</h2>}
          </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center rounded-2xl p-5 border border-white/[.06] bg-white/[.03]">
              {s.icon && (
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-base mb-3 bg-[linear-gradient(135deg,#2dd4bf,#6366f1)]">
                  {getServiceIcon(s.icon)}
                </div>
              )}
              <p className="font-['Poppins',sans-serif] font-extrabold text-2xl bg-[linear-gradient(135deg,#2dd4bf,#6366f1)] bg-clip-text text-transparent">{s.value}</p>
              <p className="text-[11px] font-semibold text-white/45 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
