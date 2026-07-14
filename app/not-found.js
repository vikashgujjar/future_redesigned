import Link from "next/link";

export const metadata = {
  title: "Page Not Found - Future IT Touch Private Limited",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section
      className="relative overflow-hidden flex items-center justify-center px-4"
      style={{ minHeight: "60vh", background: "#05060F", fontFamily: "'Inter',sans-serif" }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.025) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute -top-32 -right-32 w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(45,212,191,.10) 0%,transparent 65%)" }} />
      <div className="absolute -bottom-32 -left-32 w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(99,102,241,.10) 0%,transparent 65%)" }} />

      <div className="relative z-10 text-center max-w-lg py-20">
        <p
          className="font-extrabold leading-none mb-2"
          style={{
            fontFamily: "'Poppins',sans-serif",
            fontSize: "clamp(4rem,12vw,7rem)",
            background: "linear-gradient(120deg,#2dd4bf,#6366f1,#a855f7)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}
        >
          404
        </p>
        <h1
          className="font-bold text-white mb-3"
          style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.3rem,3vw,1.8rem)" }}
        >
          Page Not Found
        </h1>
        <p className="text-white/50 text-sm sm:text-base mb-8 leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold no-underline hover:-translate-y-0.5 transition-all duration-200"
            style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", fontFamily: "'Poppins',sans-serif" }}
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/70 text-sm font-semibold no-underline hover:text-white hover:border-white/30 transition-all duration-200"
            style={{ fontFamily: "'Poppins',sans-serif" }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
