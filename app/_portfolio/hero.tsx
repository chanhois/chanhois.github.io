"use client";

import { ArrowDownRight, Mail } from "lucide-react";
import type { PointerEvent } from "react";
import { portfolioContent } from "./content";
import { Metric } from "./metric";
import { useLanguage } from "./use-language";

const capabilities = [
  { en: "Calibration", ko: "캘리브레이션" },
  { en: "Time Sync", ko: "시간 동기화" },
  { en: "Sensor Quality", ko: "센서 품질" },
  { en: "Perception", ko: "인지" },
] as const;

export function Hero() {
  const { language, t } = useLanguage();
  const profile = portfolioContent.profile;
  const lidarMetric = portfolioContent.featured[0].metrics[0];
  const scopeMetric = portfolioContent.featured[3].metrics[0];

  function updateSignal(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(
      -1,
      Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2),
    );
    const y = Math.max(
      -1,
      Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2),
    );
    event.currentTarget.style.setProperty("--signal-x", `${x * 10}px`);
    event.currentTarget.style.setProperty("--signal-y", `${y * 10}px`);
  }

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
                RIGHT PLACE.<br />
                RIGHT TIME.<br />
                <span>TRUSTED DATA.</span>
              </>
            ) : (
              <>
                정확한 공간.<br />
                정확한 시간.<br />
                <span>신뢰할 수 있는 데이터.</span>
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

        <div className="hero__lab">
          <div
            className="signal-field"
            aria-hidden="true"
            onPointerMove={updateSignal}
          >
            <div className="signal-field__grid" />
            <div className="signal-field__orbit signal-field__orbit--outer" />
            <div className="signal-field__orbit signal-field__orbit--inner" />
            <div className="signal-field__axis signal-field__axis--x" />
            <div className="signal-field__axis signal-field__axis--y" />
            <span className="signal-field__point signal-field__point--a" />
            <span className="signal-field__point signal-field__point--b" />
            <span className="signal-field__point signal-field__point--c" />
            <span className="signal-field__label signal-field__label--a">t₀</span>
            <span className="signal-field__label signal-field__label--b">Δθ</span>
            <span className="signal-field__label signal-field__label--c">σ</span>
            <span className="signal-field__readout">SENSOR FRAME · ALIGNED</span>
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
      </div>
      <p className="hero__scroll" aria-hidden="true">
        SCROLL TO TRACE THE SIGNAL <span>↓</span>
      </p>
    </section>
  );
}
