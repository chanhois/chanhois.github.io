import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
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
});
