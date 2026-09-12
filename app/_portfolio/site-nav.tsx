"use client";

import { useEffect, useState } from "react";
import { portfolioContent } from "./content";
import { useLanguage } from "./use-language";

const sectionIds = [
  "work",
  "projects",
  "experience",
  "research",
  "about",
] as const;

export function SiteNav() {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<(typeof sectionIds)[number]>(
    "work",
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible && sectionIds.includes(visible.target.id as (typeof sectionIds)[number])) {
          setActiveSection(visible.target.id as (typeof sectionIds)[number]);
        }
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.2, 0.5] },
    );

    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Chan-ho Seo, home">
        CHS<span aria-hidden="true">·</span>
      </a>
      <nav aria-label={language === "en" ? "Primary navigation" : "주요 메뉴"}>
        <ul className="site-nav__links">
          {sectionIds.map((id) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={activeSection === id ? "location" : undefined}>
                {t(portfolioContent.navigation[id])}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="language-switch" aria-label={language === "en" ? "Language" : "언어"}>
        <button
          type="button"
          aria-pressed={language === "en"}
          aria-label="Switch to English"
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
        <span aria-hidden="true">/</span>
        <button
          type="button"
          aria-pressed={language === "ko"}
          aria-label="한국어로 전환"
          onClick={() => setLanguage("ko")}
        >
          KO
        </button>
      </div>
    </header>
  );
}
