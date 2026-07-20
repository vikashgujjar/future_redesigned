// Single source of truth for "years of experience" style copy across the
// site. Update COMPANY_START_YEAR here if the founding year is ever
// corrected — every page that imports from this file picks it up on the
// next build, instead of hunting down hardcoded numbers one by one.
export const COMPANY_START_YEAR = 2018;

export function getYearsExperience() {
  return new Date().getFullYear() - COMPANY_START_YEAR;
}

// Convenience string for the common "8+" style display.
export const YEARS_EXPERIENCE_DISPLAY = `${getYearsExperience()}+`;
