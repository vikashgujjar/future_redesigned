import { getTeamMembers } from "../lib/cms";

/* Photos aren't in the CMS yet (they live in app/Assets in this repo, not
   uploaded to the admin) — merge in the local image by name so the page
   looks the same until real photos are uploaded via the admin. Falls back
   to the fully local list if the CMS is unreachable at build time. */
const LOCAL_IMAGES = {
  "Vinod Tanwar": "/Assets/vinod.webp",
  "Pooja": "/Assets/pooja.webp",
  "Rohtash Tanwar": "/Assets/rotang.webp",
  "Dinesh": "/Assets/DInesh.webp",
  "Rajan Sharma": "/Assets/texassir.webp",
  "Kajal": "/Assets/kajalmam.webp",
  "Rohit Walia": "/Assets/rohitsir.webp",
  "Ravinder Godara": "/Assets/ravinder.webp",
  "Dixit": "/Assets/Dixit.webp",
  "Chirag": "/Assets/Chirag.webp",
};

const FALLBACK_TEAM = [
  { name: "Vinod Tanwar", role: "Founder & CEO", dept: "Leadership" },
  { name: "Pooja", role: "Founder & CEO", dept: "Leadership" },
  { name: "Rohtash Tanwar", role: "BDM — Chandigarh", dept: "Business Development" },
  { name: "Dinesh", role: "BDM — Bangalore", dept: "Business Development" },
  { name: "Rajan Sharma", role: "BDM — Texas, USA", dept: "Business Development" },
  { name: "Kajal", role: "HR Manager", dept: "HR" },
  { name: "Rohit Walia", role: "Website Designer", dept: "Design" },
  { name: "Ravinder Godara", role: ".NET Developer", dept: "Development" },
  { name: "Dixit", role: "Full Stack Developer", dept: "Development" },
  { name: "Chirag", role: "Digital Marketing", dept: "Marketing" },
].map((m) => ({ ...m, img: LOCAL_IMAGES[m.name] }));

export default async function loadTeam() {
  const cmsTeam = await getTeamMembers();
  if (!cmsTeam?.length) return FALLBACK_TEAM;

  return cmsTeam.map((member) => ({
    name: member.name,
    role: member.role,
    dept: member.department,
    img: member.image || LOCAL_IMAGES[member.name] || "/Assets/vinod.webp",
    social: member.social,
  }));
}
