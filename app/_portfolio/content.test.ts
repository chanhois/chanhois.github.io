import { describe, expect, it } from "vitest";
import { portfolioContent } from "./content";
import { social } from "./social";

const forbidden = [
  /ServiQ/i,
  /Carti Carrier/i,
  /CLOiD/i,
  /LG Innotek/i,
  /Wanlida|WLD/i,
  /Coin D4A/i,
  /Jira/i,
  /\b(?:ATK|PS|ESE|RS|SBRS)-\d+\b/i,
  /bearrobotics\//i,
];

describe("public portfolio content", () => {
  // What each list holds is a content decision, so nothing here pins a roster.
  // Ids have to stay unique because the site numbers and keys entries by them.
  it("keeps every list populated and its ids unique", () => {
    const lists = {
      featured: portfolioContent.featured,
      projects: portfolioContent.projects,
      experience: portfolioContent.experience,
      research: portfolioContent.research,
      publications: portfolioContent.publications,
      skills: portfolioContent.skills,
    };

    for (const [name, list] of Object.entries(lists)) {
      expect(list.length, `${name} is empty`).toBeGreaterThan(0);
      const ids = list.map(({ id }) => id);
      expect(new Set(ids).size, `${name} has a duplicate id`).toBe(ids.length);
    }
  });

  // The eyebrow number is copy, not computed, so deleting a case leaves it stale.
  // Fail here rather than ship a case labelled 05 that sits fourth.
  it("numbers each case eyebrow by its position", () => {
    portfolioContent.featured.forEach((study, index) => {
      const expected = String(index + 1).padStart(2, "0");
      for (const lang of ["en", "ko"] as const) {
        expect(
          study.eyebrow[lang],
          `${study.id} eyebrow (${lang}) should start with ${expected}`,
        ).toMatch(new RegExp(`^${expected} `));
      }
    });
  });

  it("contains complete bilingual copy and media descriptions", () => {
    for (const project of [
      ...portfolioContent.featured,
      ...portfolioContent.projects,
    ]) {
      expect(project.title.en.trim()).not.toBe("");
      expect(project.title.ko.trim()).not.toBe("");
    }

    for (const study of portfolioContent.featured) {
      // Every case runs problem through result; the middle stages are optional.
      expect(study.steps.length).toBeGreaterThanOrEqual(3);
      expect(study.steps.length).toBeLessThanOrEqual(5);
      for (const step of study.steps) {
        expect(step.body.en.trim()).not.toBe("");
        expect(step.body.ko.trim()).not.toBe("");
        expect(step.media.alt.en.trim()).not.toBe("");
        expect(step.media.alt.ko.trim()).not.toBe("");
      }
    }

    // Recorded project media carries the same description burden as case evidence.
    for (const project of portfolioContent.projects) {
      for (const item of project.media ?? []) {
        expect(item.alt.en.trim()).not.toBe("");
        expect(item.alt.ko.trim()).not.toBe("");
        expect(item.caption.en.trim()).not.toBe("");
        expect(item.caption.ko.trim()).not.toBe("");
      }
    }

  });

  it("contains no internal names or identifiers", () => {
    const publicCopy = JSON.stringify(portfolioContent);
    for (const pattern of forbidden) expect(publicCopy).not.toMatch(pattern);
  });

  it("keeps metadata and localized content public-safe", () => {
    const renderedSurface = JSON.stringify({ portfolioContent, social });
    for (const pattern of forbidden) expect(renderedSurface).not.toMatch(pattern);
  });
});
