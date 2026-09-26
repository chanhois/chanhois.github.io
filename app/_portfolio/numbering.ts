import { portfolioContent } from "./content";

/**
 * Selected work, the project index and experience share one running number, so
 * deleting an entry from content.ts has to renumber everything after it. These
 * ranges are counted from the data for exactly that reason: nothing downstream
 * should have to be edited by hand when a case or a project goes away.
 */
const pad = (value: number) => String(value).padStart(2, "0");

function range(start: number, count: number) {
  if (count === 0) return { start, next: start, label: "" };
  const end = start + count - 1;
  return {
    start,
    next: end + 1,
    label: count === 1 ? pad(start) : `${pad(start)} — ${pad(end)}`,
  };
}

const work = range(1, portfolioContent.featured.length);
const projects = range(work.next, portfolioContent.projects.length);
const experience = range(projects.next, portfolioContent.experience.length);

export const numbering = {
  work,
  projects,
  experience,
  /** The number printed on a project card, continuing on from Selected Work. */
  projectNumber: (index: number) => pad(projects.start + index),
};
