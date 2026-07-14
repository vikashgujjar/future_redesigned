export const dynamic = "force-static";

const SITE_URL = "https://futuretouch.in";

// Orphan/dev-only routes that exist but are intentionally not linked from
// navigation and shouldn't be crawled or indexed.
const DISALLOWED = ["/login", "/sign", "/sendotp", "/tryApp", "/tryuiservice"];

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOWED,
      },
      // Explicit allowlist for AI search/crawl agents
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
