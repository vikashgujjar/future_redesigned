import { getPortfolioItems } from "../lib/cms";

import image1 from "../Assets/website1.webp";
import image2 from "../Assets/website2.webp";
import image3 from "../Assets/website3.webp";
import image4 from "../Assets/website6.webp";
import image5 from "../Assets/website8.webp";
import image6 from "../Assets/website10.webp";
import image7 from "../Assets/website11.webp";
import image8 from "../Assets/website18.webp";
import image9 from "../Assets/website14.webp";
import image10 from "../Assets/website15.webp";
import image11 from "../Assets/website17.webp";
import image12 from "../Assets/website7.webp";
import image13 from "../Assets/website21.webp";
import image14 from "../Assets/website1 (1).webp";
import image15 from "../Assets/website22.webp";
import image16 from "../Assets/website23.webp";
import image17 from "../Assets/website24.webp";
import image18 from "../Assets/website25.webp";
import image19 from "../Assets/website26.webp";
import image20 from "../Assets/website27.webp";
import image21 from "../Assets/website28.webp";
import image22 from "../Assets/website29.webp";
import image23 from "../Assets/website30.webp";
import image24 from "../Assets/website31.webp";

const TABS = ["All", "Website", "Mobile App", "Graphic"];

/* Screenshots aren't in the CMS yet — merge in the local image import by
   `link` (unique per project) so the page looks the same until real
   screenshots are uploaded via the admin. Falls back to the fully local
   list if the CMS is unreachable at build time. */
const FALLBACK_DATA = [
  { link: "https://vaidicyoga.com/", image: image1, title: "E-commerce Website", subtitle: "Product Services", category: ["Website"] },
  { link: "https://www.appyplanetservices.com/", image: image2, title: "Business Website", subtitle: "Apple Repair Store", category: ["Website"] },
  { link: "https://www.expertdelivery.in/", image: image3, title: "Transport Website", subtitle: "Moving Company", category: ["Website"] },
  { link: "https://horizonestatesandfinance.com/", image: image4, title: "Real Estate Finance", subtitle: "Finance Company", category: ["Website"] },
  { link: "https://nextlegal.in/", image: image5, title: "Advocates & Solicitors", subtitle: "Lawyer", category: ["Website"] },
  { link: "https://shinecargas.in/", image: image6, title: "Shine Car Gas", subtitle: "Auto Repair Company", category: ["Website"] },
  { link: "https://sjseventsandcatering.com/", image: image7, title: "Catering Company", subtitle: "Catering Services Provider", category: ["Website"] },
  { link: "https://thespringclothing.com/", image: image8, title: "E-commerce Website", subtitle: "Summer Collection", category: ["Website"] },
  { link: "https://shashijewellers.com/", image: image9, title: "E-commerce Website", subtitle: "Artificial Jewellery", category: ["Website"] },
  { link: "https://gaurihub.com/", image: image10, title: "E-commerce Website", subtitle: "Product Services", category: ["Website"] },
  { link: "https://hashthatbrand.com/", image: image11, title: "Digital Company", subtitle: "Digital Marketing Services", category: ["Website"] },
  { link: "https://indosunriseinternationalschool.com/", image: image12, title: "ISRI School", subtitle: "Bangalore School", category: ["Website"] },
  { link: "https://theabsconsultants.com/", image: image13, title: "The Abs Consultants", subtitle: "Abroad Visa Services", category: ["Website"] },
  { link: "https://theabsconsultants.com/", image: image14, title: "E-commerce Website", subtitle: "Product", category: ["Website"] },
  { link: "https://www.hybridracingindia.com/", image: image15, title: "Hybrid Racing India", subtitle: "Ecommerce Website", category: ["Mobile App", "Graphic"] },
  { link: "https://sanjanamanpowerelite.com/", image: image16, title: "Sanjana Manpower Elite", subtitle: "Man Power Provider", category: ["Mobile App"] },
  { link: "https://workaddacoworking.com/", image: image17, title: "Work Adda Co-working", subtitle: "Co-working Space", category: ["Website"] },
  { link: "https://idealpharmacycollege.in/", image: image18, title: "Pharmacy College", subtitle: "Education", category: ["Website"] },
  { link: "https://bhishmagold.com/", image: image19, title: "Bhishma Gold", subtitle: "Informational Website", category: ["Mobile App", "Graphic"] },
  { link: "https://advaitacademy.com/", image: image20, title: "Adavit Academy", subtitle: "IELTS & PTE Training", category: ["Mobile App"] },
  { link: "https://equipbpo.com/", image: image21, title: "Eqip BPO", subtitle: "Finance Company", category: ["Website"] },
  { link: "https://insidespace.co.in/", image: image22, title: "Inside Space", subtitle: "Thermal Expansion", category: ["Website"] },
  { link: "https://feelorganic.org/", image: image23, title: "Feel Organic", subtitle: "Chemical Company", category: ["Mobile App", "Graphic"] },
  { link: "https://psychicreadermaninjamaica.com/", image: image24, title: "Astrology Prediction Expert", subtitle: "Astrologer Priest Rishi", category: ["Mobile App"] },
];

export { TABS };

export default async function loadPortfolio() {
  const cmsItems = await getPortfolioItems();
  if (!cmsItems?.length) return FALLBACK_DATA;

  const localByLink = new Map(FALLBACK_DATA.map((item) => [item.link, item]));

  return cmsItems.map((item) => {
    const local = localByLink.get(item.link);
    return {
      link: item.link,
      image: item.image || local?.image || image1,
      title: item.title,
      subtitle: item.subtitle,
      category: item.categories?.length ? item.categories : local?.category || ["Website"],
    };
  });
}
