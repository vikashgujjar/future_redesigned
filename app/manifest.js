export const dynamic = "force-static";

export default function manifest() {
  return {
    name: "Future IT Touch Private Limited",
    short_name: "Future IT Touch",
    description:
      "IT solutions provider delivering website design, mobile app development, digital marketing, cyber security, and software development.",
    start_url: "/",
    display: "standalone",
    background_color: "#05060F",
    theme_color: "#2dd4bf",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
