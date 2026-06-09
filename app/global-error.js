"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body style={{ margin: 0, fontFamily: "sans-serif", background: "#060b1a", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", textAlign: "center", padding: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Something went wrong</h2>
        <p style={{ color: "rgba(255,255,255,.55)", marginBottom: "1.5rem" }}>{error?.message || "An unexpected error occurred."}</p>
        <button
          onClick={() => reset()}
          style={{ background: "linear-gradient(135deg,#2dd4bf,#6366f1)", color: "#fff", border: "none", borderRadius: "9999px", padding: "0.75rem 2rem", fontWeight: 600, cursor: "pointer", fontSize: "1rem" }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
