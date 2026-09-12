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
      "lidar-stability",
      "slam-time-axis",
      "hardware-trigger-sync",
      "amr-calibration",
      "camera-iqc-uncertainty",
    ]);
    expect(portfolioContent.projects).toHaveLength(4);
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
      expect(study.steps).toHaveLength(5);
      for (const step of study.steps) {
        expect(step.body.en.trim()).not.toBe("");
        expect(step.body.ko.trim()).not.toBe("");
        expect(step.media.alt.en.trim()).not.toBe("");
        expect(step.media.alt.ko.trim()).not.toBe("");
      }
    }

    expect(portfolioContent.experience).toHaveLength(3);
    expect(portfolioContent.research).toHaveLength(2);
    expect(portfolioContent.publications.length).toBeGreaterThanOrEqual(2);
    expect(portfolioContent.skills).toHaveLength(4);
  });

  it("contains no internal names or identifiers", () => {
    const publicCopy = JSON.stringify(portfolioContent);
    for (const pattern of forbidden) expect(publicCopy).not.toMatch(pattern);
  });

  it("does not invent a quantitative SLAM gain", () => {
    const slam = portfolioContent.featured.find(
      ({ id }) => id === "slam-time-axis",
    );
    expect(JSON.stringify(slam)).not.toMatch(/SLAM.{0,40}\d+(?:\.\d+)?%/i);
  });

  it("keeps metadata and localized content public-safe", () => {
    const renderedSurface = JSON.stringify({ portfolioContent, social });
    for (const pattern of forbidden) expect(renderedSurface).not.toMatch(pattern);
  });
});
