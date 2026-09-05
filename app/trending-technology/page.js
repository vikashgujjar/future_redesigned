import TrendingTechnology from "./TrendingTechnology";
import { buildPageMetadata, getTechnologyCategories, getOfficeLocations } from "../lib/cms";

const DEFAULT_METADATA = {
  title: "Trending Technology - Future IT Touch Private Limited",
  description:
    "Explore the trending technologies we work with — from mobile and web frameworks to blockchain, AI, and game development — across every major app and web category.",
  keywords: ["IT", "Technology", "Solutions", "Future IT Touch"],
};

export async function generateMetadata() {
  return buildPageMetadata("trending-technology", DEFAULT_METADATA);
}

export default async function Page() {
  const [categories, officeLocations] = await Promise.all([
    getTechnologyCategories(),
    getOfficeLocations(),
  ]);
  return <TrendingTechnology categories={categories} officeLocations={officeLocations} />
}
