import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { LanguageProvider, useLanguage } from "./use-language";

function Probe() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div>
      <output>{language}</output>
      <p>{t({ en: "Selected work", ko: "주요 작업" })}</p>
      <button type="button" onClick={() => setLanguage("ko")}>
        한국어
      </button>
    </div>
  );
}

describe("LanguageProvider", () => {
  beforeEach(() => localStorage.clear());

  it("renders deterministic English first, then persists a user selection", () => {
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    );

    expect(screen.getByText("Selected work")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "한국어" }));
    expect(screen.getByText("주요 작업")).toBeInTheDocument();
    expect(localStorage.getItem("portfolio-language")).toBe("ko");
    expect(document.documentElement.lang).toBe("ko");
  });
});
