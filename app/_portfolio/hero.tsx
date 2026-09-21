"use client";

import { ArrowDownRight, Mail } from "lucide-react";
import { portfolioContent } from "./content";
import { Metric } from "./metric";
import { useLanguage } from "./use-language";

const capabilities = [
  { en: "Calibration", ko: "캘리브레이션" },
  { en: "Sensor Quality", ko: "센서 품질" },
  { en: "Perception", ko: "인지" },
  { en: "Integration", ko: "통합" },
] as const;

export function Hero() {
  const { language, t } = useLanguage();
  const profile = portfolioContent.profile;
  const lidarMetric = portfolioContent.featured[0].metrics[0];
  const scopeMetric = portfolioContent.featured[3].metrics[0];

  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero__content page-shell">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {t(profile.role)} · Seoul, KR
          </p>
          <h1 id="hero-title">
            {language === "en" ? (
              <>
                THE SENSOR<br />
                IS USUALLY<br />
                <span>NOT THE PROBLEM.</span>
              </>
            ) : (
              <>
                문제는<br />
                대개<br />
                <span>센서가 아닙니다.</span>
              </>
            )}
          </h1>
          <p className="hero__intro">{t(profile.introduction)}</p>
          <ul className="capability-list" aria-label={language === "en" ? "Core capabilities" : "핵심 역량"}>
            {capabilities.map((capability) => (
              <li key={capability.en}>{t(capability)}</li>
            ))}
          </ul>
          <div className="hero__actions">
            <a className="button button--primary" href="#work">
              {language === "en" ? "Explore selected work" : "주요 작업 보기"}
              <ArrowDownRight aria-hidden="true" size={18} strokeWidth={1.8} />
            </a>
            <a className="button button--quiet" href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" size={17} strokeWidth={1.8} />
              {language === "en" ? "Email me" : "이메일 보내기"}
            </a>
          </div>
        </div>

        <div className="hero__metrics">
          <Metric
            label={t(lidarMetric.label)}
            value={t(lidarMetric.value)}
            context={t(lidarMetric.context)}
          />
          <Metric
            label={t(scopeMetric.label)}
            value={t(scopeMetric.value)}
            context={t(scopeMetric.context)}
          />
        </div>
      </div>
      <p className="hero__scroll" aria-hidden="true">
        SELECTED WORK <span>↓</span>
      </p>
    </section>
  );
}
