import { useEffect, useState } from "react";
import { COMPANY_START_YEAR, YEARS_EXPERIENCE_DISPLAY } from "./companyStats";

// Client-only hook: computes "years of experience" from the visitor's own
// clock after mount, so it keeps advancing every year with no redeploy.
// Returns the build-time value until mount (keeps SSR/first-paint HTML
// identical to the client's first render, avoiding a hydration mismatch),
// then swaps to the live value.
export default function useYearsExperience() {
  const [years, setYears] = useState(null);

  useEffect(() => {
    setYears(new Date().getFullYear() - COMPANY_START_YEAR);
  }, []);

  return years === null ? YEARS_EXPERIENCE_DISPLAY : `${years}+`;
}
