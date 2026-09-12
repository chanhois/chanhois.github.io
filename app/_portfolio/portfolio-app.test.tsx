import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PortfolioApp } from "../portfolio-app";

describe("PortfolioApp", () => {
  it("leads with the positioning and verified proof metrics", () => {
    render(<PortfolioApp />);
    expect(
      screen.getByRole("heading", {
        name: /right place.*right time.*trusted data/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("0.378° → 0.067°")).toBeInTheDocument();
    expect(screen.getByText("30.00 Hz")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /explore selected work/i }),
    ).toHaveAttribute("href", "#work");
  });
});
