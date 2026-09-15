import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { PortfolioApp } from "../portfolio-app";

describe("PortfolioApp", () => {
  it("leads with the positioning and verified proof metrics", () => {
    render(<PortfolioApp />);
    const hero = screen.getByRole("region", {
      name: /right place.*right time.*trusted data/i,
    });
    expect(
      within(hero).getByRole("heading", {
        name: /right place.*right time.*trusted data/i,
      }),
    ).toBeInTheDocument();
    expect(within(hero).getByText("0.378° → 0.067°")).toBeInTheDocument();
    expect(within(hero).getByText("30.00 Hz")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /explore selected work/i }),
    ).toHaveAttribute("href", "#work");
  });

  it("renders every public project and the contact path", () => {
    render(<PortfolioApp />);
    for (const name of [
      "Owning the Sensor Stack of Three Robots at Once",
      "Camera Calibration from Pedestrians",
      "Multi-Object Tracking with a 2D LiDAR",
    ]) {
      expect(screen.getByRole("heading", { name })).toBeInTheDocument();
    }

    expect(
      screen.getAllByRole("link").some(
        (link) =>
          link.getAttribute("href") ===
          "mailto:studychanho0717@gmail.com",
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
