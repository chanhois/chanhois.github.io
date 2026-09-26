"use client";

import { ArrowDownRight, Mail } from "lucide-react";
import { portfolioContent } from "./content";
import { Metric } from "./metric";
import { useLanguage } from "./use-language";

export function Hero() {
  const { language, t } = useLanguage();
  const profile = portfolioContent.profile;
  const site = portfolioContent.site;
  const shows = portfolioContent.elements;
  // Named by id, not by position, and a name that no longer matches a case is
  // simply dropped: deleting a case should not take the hero down with it.
  const heroMetrics = site.heroMetrics
    .map((id) => portfolioContent.featured.find((study) => study.id === id)?.metrics[0])
    .filter((metric) => metric !== undefined);

  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero__content page-shell">
        <div className="hero__copy">
          {shows.heroEyebrow ? (
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              {t(profile.role)} · Seoul, KR
            </p>
          ) : null}
          <h1 id="hero-title">
            {t(site.headline.line1)}<br />
            {t(site.headline.line2)}<br />
            <span>{t(site.headline.line3)}</span>
          </h1>
          <p className="hero__intro">{t(profile.introduction)}</p>
          {shows.heroChips ? (
            <ul className="capability-list" aria-label={language === "en" ? "Functions this work crosses" : "이 일이 걸친 영역"}>
              {site.functions.map((fn) => (
                <li key={fn.en}>{t(fn)}</li>
              ))}
            </ul>
          ) : null}
          {shows.heroActions ? (
          <div className="hero__actions">
            <a className="button button--primary" href="#work">
              {t(site.actions.work)}
              <ArrowDownRight aria-hidden="true" size={18} strokeWidth={1.8} />
            </a>
            <a className="button button--quiet" href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" size={17} strokeWidth={1.8} />
              {t(site.actions.email)}
            </a>
          </div>
          ) : null}
        </div>

        {heroMetrics.length ? (
          <div className="hero__metrics">
            {heroMetrics.map((metric, index) => (
              <Metric
                key={index}
                label={t(metric.label)}
                value={t(metric.value)}
                context={t(metric.context)}
              />
            ))}
          </div>
        ) : null}
      </div>
      {shows.heroScrollHint ? (
        <p className="hero__scroll" aria-hidden="true">
          SELECTED WORK <span>↓</span>
        </p>
      ) : null}
    </section>
  );
}
