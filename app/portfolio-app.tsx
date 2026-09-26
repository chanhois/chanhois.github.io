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
import { numbering } from "./_portfolio/numbering";
import { LanguageProvider, useLanguage } from "./_portfolio/use-language";

function PortfolioSurface() {
  const { t } = useLanguage();
  const shows = portfolioContent.sections;
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteNav />
      <main id="main-content">
        <div id="top" aria-hidden="true" />
        <Hero />
        {shows.work ? (
        <section id="work" className="work-section" aria-labelledby="work-title">
          <div className="section-intro page-shell">
            <p className="section-index">{numbering.work.label}</p>
            <h2 id="work-title">{t(portfolioContent.site.work.heading)}</h2>
            <p>
              {/* Counted, not spelled out: the copy went stale the last time a case moved. */}
              {t(portfolioContent.site.work.description).replace(
                "{count}",
                String(portfolioContent.featured.length),
              )}
            </p>
          </div>
          {portfolioContent.featured.map((study, index) => (
            <CaseStudyView study={study} index={index} key={study.id} />
          ))}
        </section>
        ) : null}
        {shows.projects ? <ProjectIndex /> : null}
        {shows.experience ? <ExperienceSection /> : null}
        {shows.research ? <ResearchSection /> : null}
        {shows.about ? <AboutSection /> : null}
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
