"use client";

import { Hero } from "./_portfolio/hero";
import { CaseStudyView } from "./_portfolio/case-study";
import { portfolioContent } from "./_portfolio/content";
import { ProjectIndex } from "./_portfolio/project-index";
import {
  AboutSection,
  ContactFooter,
  ExperienceSection,
  ResearchSection,
} from "./_portfolio/sections";
import { SiteNav } from "./_portfolio/site-nav";
import { LanguageProvider, useLanguage } from "./_portfolio/use-language";

function PortfolioSurface() {
  const { language } = useLanguage();
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteNav />
      <main id="main-content">
        <div id="top" aria-hidden="true" />
        <Hero />
        <section id="work" className="work-section" aria-labelledby="work-title">
          <div className="section-intro page-shell">
            <p className="section-index">01 — 05</p>
            <h2 id="work-title">
              {language === "en" ? "Selected Work" : "주요 작업"}
            </h2>
            <p>
              {language === "en"
                ? "Five cases where a sensor problem became a measurable engineering decision."
                : "센서 문제를 측정 가능한 엔지니어링 판단으로 바꾼 다섯 가지 사례입니다."}
            </p>
          </div>
          {portfolioContent.featured.map((study, index) => (
            <CaseStudyView study={study} index={index} key={study.id} />
          ))}
        </section>
        <ProjectIndex />
        <ExperienceSection />
        <ResearchSection />
        <AboutSection />
      </main>
      <ContactFooter />
    </>
  );
}

export function PortfolioApp() {
  return (
    <LanguageProvider>
      <PortfolioSurface />
    </LanguageProvider>
  );
}
