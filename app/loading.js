export default function Loading() {
  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: "60vh", background: "#05060F" }}
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div
        className="w-10 h-10 rounded-full animate-spin"
        style={{
          border: "3px solid rgba(255,255,255,.12)",
          borderTopColor: "#2dd4bf",
        }}
      />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
