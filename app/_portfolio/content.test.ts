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
  it("has the approved project counts and order", () => {
    expect(portfolioContent.featured.map(({ id }) => id)).toEqual([
      "sensor-integration",
      "lidar-stability",
      "amr-calibration",
      "rgbd-pipeline",
      "camera-iqc-uncertainty",
    ]);
    expect(portfolioContent.projects).toHaveLength(2);
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

    expect(portfolioContent.experience).toHaveLength(3);
    expect(portfolioContent.research).toHaveLength(2);
    expect(portfolioContent.publications).toHaveLength(3);
    expect(portfolioContent.skills).toHaveLength(5);
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
