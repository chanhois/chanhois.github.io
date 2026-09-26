import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { portfolioContent } from "./content";
import { PortfolioApp } from "../portfolio-app";

/**
 * Copy is edited in content.ts, so nothing here spells a sentence out.
 * These tests check that the structure still carries whatever copy is there.
 */
const site = portfolioContent.site;
const escape = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const headline = new RegExp(
  [site.headline.line1, site.headline.line2, site.headline.line3]
    .map((line) => escape(line.en))
    .join(".*"),
  "i",
);
const metricOf = (id: string) =>
  portfolioContent.featured.find((study) => study.id === id)!.metrics[0];

describe("PortfolioApp", () => {
  it("leads with the positioning and verified proof metrics", () => {
    render(<PortfolioApp />);
    const hero = screen.getByRole("region", { name: headline });
    expect(
      within(hero).getByRole("heading", { name: headline }),
    ).toBeInTheDocument();

    for (const id of ["sensor-integration", "lidar-stability"]) {
      expect(within(hero).getByText(metricOf(id).value.en)).toBeInTheDocument();
    }

    expect(
      screen.getByRole("link", { name: site.actions.work.en }),
    ).toHaveAttribute("href", "#work");
  });

  it("renders every public project and the contact path", () => {
    render(<PortfolioApp />);
    const titles = [
      ...portfolioContent.featured.map((study) => study.title.en),
      ...portfolioContent.projects.map((project) => project.title.en),
    ];
    expect(titles.length).toBeGreaterThan(0);
    for (const name of titles) {
      expect(screen.getByRole("heading", { name })).toBeInTheDocument();
    }

    expect(
      screen
        .getAllByRole("link")
        .some(
          (link) =>
            link.getAttribute("href") ===
            `mailto:${portfolioContent.profile.email}`,
        ),
    ).toBe(true);
  });

  it("has no automated accessibility violations", async () => {
    const { container } = render(<PortfolioApp />);
    expect(
      await axe(container, {
        rules: { "color-contrast": { enabled: false } },
      }),
    ).toHaveNoViolations();
  });
});
