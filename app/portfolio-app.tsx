"use client";

import { Hero } from "./_portfolio/hero";
import { SiteNav } from "./_portfolio/site-nav";
import { LanguageProvider } from "./_portfolio/use-language";

function PortfolioSurface() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteNav />
      <main id="main-content">
        <div id="top" aria-hidden="true" />
        <Hero />
        <section id="work" aria-label="Selected work" />
        <section id="projects" aria-label="Project index" />
        <section id="experience" aria-label="Experience" />
        <section id="research" aria-label="Research" />
        <section id="about" aria-label="About" />
      </main>
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
