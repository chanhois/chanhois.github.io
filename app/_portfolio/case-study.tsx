"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CaseStudy } from "./model";
import { MediaStage } from "./media-stage";
import { Metric } from "./metric";
import { useLanguage } from "./use-language";

export function CaseStudyView({ study, index = 0 }: { study: CaseStudy; index?: number }) {
  const { language, t } = useLanguage();
  const [activeId, setActiveId] = useState(study.steps[0].id);
  const stepNodes = useRef(new Map<string, HTMLElement>());
  const activeStep = useMemo(
    () => study.steps.find((step) => step.id === activeId) ?? study.steps[0],
    [activeId, study.steps],
  );

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current) setActiveId(current.target.getAttribute("data-step-id") ?? study.steps[0].id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.6] },
    );
    for (const node of stepNodes.current.values()) observer.observe(node);
    return () => observer.disconnect();
  }, [study.steps]);

  return (
    <article className="case-study" id={`case-${study.id}`}>
      <header className="case-study__header page-shell">
        <p className="eyebrow">{t(study.eyebrow)}</p>
        <div className="case-study__heading-row">
          <h3>{t(study.title)}</h3>
          <span className="case-study__number" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <p className="case-study__summary">{t(study.summary)}</p>
        <ul className="tag-list" aria-label={language === "en" ? "Tools and methods" : "도구와 방법"}>
          {study.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="case-study__metrics">
          {study.metrics.map((metric) => (
            <Metric key={metric.value} label={t(metric.label)} value={metric.value} context={t(metric.context)} />
          ))}
        </div>
      </header>

      <div className="case-study__story page-shell">
        <div className="case-study__media" id={`${study.id}-media`} aria-live="polite">
          <div className="media-stage__meta">
            <span>{String(study.steps.findIndex((step) => step.id === activeStep.id) + 1).padStart(2, "0")} / 05</span>
            <span>{t(activeStep.label)}</span>
          </div>
          <MediaStage
            key={activeStep.id}
            media={activeStep.media}
            active
            labelledBy={`${activeStep.id}-title`}
          />
          <div className="case-progress" aria-label={language === "en" ? `${t(study.title)} story progress` : `${t(study.title)} 진행 단계`}>
            {study.steps.map((step, stepIndex) => (
              <button
                key={step.id}
                type="button"
                aria-current={activeStep.id === step.id ? "step" : undefined}
                aria-controls={`${study.id}-media`}
                onClick={() => setActiveId(step.id)}
                onFocus={() => setActiveId(step.id)}
              >
                <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                <span>{t(step.label)}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="story-steps">
          {study.steps.map((step, stepIndex) => (
            <section
              className="story-step"
              data-step-id={step.id}
              key={step.id}
              ref={(node) => {
                if (node) stepNodes.current.set(step.id, node);
                else stepNodes.current.delete(step.id);
              }}
              onMouseEnter={() => setActiveId(step.id)}
            >
              <div className="story-step__mobile-media">
                <MediaStage
                  media={step.media}
                  active={activeStep.id === step.id}
                  labelledBy={`${step.id}-title`}
                />
              </div>
              <p className="story-step__index">
                {String(stepIndex + 1).padStart(2, "0")} · {t(step.label)}
              </p>
              <h4 id={`${step.id}-title`}>{t(step.title)}</h4>
              <p>{t(step.body)}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
