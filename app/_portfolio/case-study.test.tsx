import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CaseStudyView } from "./case-study";
import { portfolioContent } from "./content";

const lidarCase = portfolioContent.featured.find(
  ({ id }) => id === "lidar-stability",
)!;
import { MediaStage } from "./media-stage";
import { LanguageProvider } from "./use-language";

describe("CaseStudyView", () => {
  it("lets keyboard and pointer users select a story step", () => {
    render(
      <LanguageProvider>
        <CaseStudyView study={lidarCase} />
      </LanguageProvider>,
    );
    const result = screen.getByRole("button", { name: /result/i });
    fireEvent.click(result);
    expect(result).toHaveAttribute("aria-current", "step");
    expect(screen.getAllByText(/0\.378°.*0\.067°/).length).toBeGreaterThan(0);
  });

  it("keeps an informative frame when an image fails", () => {
    render(
      <LanguageProvider>
        <MediaStage
          active
          media={{
            kind: "image",
            src: "/media/missing.jpg",
            alt: { en: "Calibration setup", ko: "캘리브레이션 구성" },
            caption: {
              en: "Calibration evidence",
              ko: "캘리브레이션 증거",
            },
          }}
        />
      </LanguageProvider>,
    );
    fireEvent.error(screen.getByRole("img"));
    expect(screen.getByText(/evidence unavailable/i)).toBeInTheDocument();
    expect(screen.getByText("Calibration evidence")).toBeInTheDocument();
  });
});
