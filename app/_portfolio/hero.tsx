"use client";

import { ArrowDownRight, Mail } from "lucide-react";
import { portfolioContent } from "./content";
import { Metric } from "./metric";
import { useLanguage } from "./use-language";

export function Hero() {
  const { language, t } = useLanguage();
  const profile = portfolioContent.profile;
  // Read by id: the featured order is a content decision, not a contract with the
  // hero. A named case can also be deleted outright, so fall back rather than throw.
  const byId = (id: string, fallbackIndex: number) => {
    const named = portfolioContent.featured.find((study) => study.id === id);
    return (named ?? portfolioContent.featured[fallbackIndex])?.metrics[0];
  };
  const site = portfolioContent.site;
  const scopeMetric = byId("sensor-integration", 0);
  const lidarMetric = byId("lidar-stability", 1);

  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero__content page-shell">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {t(profile.role)} · Seoul, KR
          </p>
          <h1 id="hero-title">
            {t(site.headline.line1)}<br />
            {t(site.headline.line2)}<br />
            <span>{t(site.headline.line3)}</span>
          </h1>
          <p className="hero__intro">{t(profile.introduction)}</p>
          <ul className="capability-list" aria-label={language === "en" ? "Functions this work crosses" : "이 일이 걸친 영역"}>
            {site.functions.map((fn) => (
              <li key={fn.en}>{t(fn)}</li>
            ))}
          </ul>
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
        </div>

        <div className="hero__metrics">
          {[scopeMetric, lidarMetric].map((metric, index) =>
            metric ? (
              <Metric
                key={index}
                label={t(metric.label)}
                value={t(metric.value)}
                context={t(metric.context)}
              />
            ) : null,
          )}
        </div>
      </div>
      <p className="hero__scroll" aria-hidden="true">
        SELECTED WORK <span>↓</span>
      </p>
    </section>
  );
}
