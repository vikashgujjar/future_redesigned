import Testimonial from "../Testimonial";
import Location from "../Location";
import OurPortfolio from "../../our-portfolio/OurPortfolio";
import OurTeam from "../../our-team/OurTeam";
import PricePackage from "../../price/Price";
import Blog from "../../blog/Blogs";
import Faq from "../Faq";
import loadPortfolio from "../../our-portfolio/loadPortfolio";
import loadTeam from "../../our-team/loadTeam";
import loadPosts from "../../blog/loadPosts";
import { getPricing, getFaqGroups, getOfficeLocations } from "../../lib/cms";

/* Lets a CMS page drop in one of the site's existing, already-CMS-backed
   content blocks instead of re-authoring services/portfolio/team/etc. as
   generic sections. `component` is checked against a fixed whitelist —
   never used to resolve an arbitrary component name. */
export default async function EmbedBlock({ data = {} }) {
  switch (data.component) {
    case "testimonials":
      return <Testimonial />;
    case "locations": {
      const officeLocations = await getOfficeLocations();
      return <Location locations={officeLocations} />;
    }
    case "portfolio": {
      const items = await loadPortfolio();
      return <OurPortfolio items={items} />;
    }
    case "team": {
      const team = await loadTeam();
      return <OurTeam team={team} />;
    }
    case "pricing": {
      const categories = await getPricing();
      return <PricePackage categories={categories} />;
    }
    case "blog_listing": {
      const posts = await loadPosts();
      return <Blog posts={posts} />;
    }
    case "faq_group": {
      const groups = await getFaqGroups();
      const group = groups?.find((g) => g.key === data.faq_group_key);
      return <Faq items={group?.items} />;
    }
    default:
      return null;
  }
}
