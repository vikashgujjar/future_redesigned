import Welcome from "./Welcome";

export const metadata = {
  title: "Thank You - Future IT Touch Private Limited",
  description: "Thank you for reaching out to Future IT Touch. Our team has received your request and will be in touch within 24 hours.",
  robots: { index: false, follow: true },
};

export default function page() {
  return <Welcome />;
}
