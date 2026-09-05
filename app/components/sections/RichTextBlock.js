export default function RichTextBlock({ data = {} }) {
  const { heading, content } = data;

  return (
    <section className="bg-white py-16 px-5 sm:px-10 xl:px-16">
      <div className="max-w-[760px] mx-auto">
        {heading && (
          <h2 className="font-['Poppins',sans-serif] font-extrabold text-[#050748] text-2xl sm:text-3xl mb-5">{heading}</h2>
        )}
        {content && (
          <div
            className="prose prose-slate max-w-none text-[#4a5070] leading-relaxed [&_a]:text-[#4f46e5] [&_a]:font-semibold"
            // Content is authored via Filament's RichEditor and passed through
            // Laravel's HTML purifier — safe to render, same pattern already
            // used for blog post bodies (BlogView.js).
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </section>
  );
}
