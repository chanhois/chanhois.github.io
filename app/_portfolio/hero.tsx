"use client";

import { ArrowDownRight, Mail } from "lucide-react";
import { portfolioContent } from "./content";
import { Metric } from "./metric";
import { useLanguage } from "./use-language";

const functions = [
  { en: "Robotics SW", ko: "로보틱스 SW" },
  { en: "Mechanical", ko: "기구" },
  { en: "Factory", ko: "공장" },
  { en: "Field", ko: "필드" },
] as const;

export function Hero() {
  const { language, t } = useLanguage();
  const profile = portfolioContent.profile;
  // Read by id: the featured order is a content decision, not a contract with the hero.
  const byId = (id: string) =>
    portfolioContent.featured.find((study) => study.id === id)!.metrics[0];
  const scopeMetric = byId("sensor-integration");
  const lidarMetric = byId("lidar-stability");

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
          <ul className="capability-list" aria-label={language === "en" ? "Functions this work crosses" : "이 일이 걸친 영역"}>
            {functions.map((fn) => (
              <li key={fn.en}>{t(fn)}</li>
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
            label={t(scopeMetric.label)}
            value={t(scopeMetric.value)}
            context={t(scopeMetric.context)}
          />
          <Metric
            label={t(lidarMetric.label)}
            value={t(lidarMetric.value)}
            context={t(lidarMetric.context)}
          />
        </div>
      </div>
      <p className="hero__scroll" aria-hidden="true">
        SELECTED WORK <span>↓</span>
      </p>
    </section>
  );
}
