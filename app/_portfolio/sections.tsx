"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { portfolioContent } from "./content";
import { useLanguage } from "./use-language";

function SectionHeading({
  id,
  index,
  en,
  ko,
  descriptionEn,
  descriptionKo,
}: {
  id: string;
  index: string;
  en: string;
  ko: string;
  descriptionEn: string;
  descriptionKo: string;
}) {
  const { language } = useLanguage();
  return (
    <div className="section-intro section-intro--compact">
      <p className="section-index">{index}</p>
      <h2 id={id}>{language === "en" ? en : ko}</h2>
      <p>{language === "en" ? descriptionEn : descriptionKo}</p>
    </div>
  );
}

export function ExperienceSection() {
  const { language, t } = useLanguage();
  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <div className="page-shell">
        <SectionHeading
          id="experience-title"
          index="10 — 12"
          en="Experience"
          ko="경험"
          descriptionEn="One sensor lifecycle, carried from the first electrical signal to field reliability."
          descriptionKo="첫 전기 신호부터 필드 신뢰성까지 하나의 센서 생애주기로 다뤘습니다."
        />
        <div className="lifecycle" aria-label={language === "en" ? "Sensor lifecycle" : "센서 생애주기"}>
          {["BRING-UP", "CALIBRATE", "VALIDATE", "PRODUCE", "RELIABILITY"].map((stage, index) => (
            <span key={stage}><i>{String(index + 1).padStart(2, "0")}</i>{stage}</span>
          ))}
        </div>
        <div className="experience-list">
          {portfolioContent.experience.map((entry, index) => (
            <article className="experience-row" key={entry.id}>
              <p>{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h3>{t(entry.platform)}</h3>
                <strong>{t(entry.role)}</strong>
              </div>
              <p>{t(entry.summary)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResearchSection() {
  const { language, t } = useLanguage();
  return (
    <section className="research-section" id="research" aria-labelledby="research-title">
      <div className="page-shell">
        <SectionHeading
          id="research-title"
          index="R · 01"
          en="Research"
          ko="연구"
          descriptionEn="Geometry and tracking research that shaped how I reason about sensor evidence."
          descriptionKo="센서 근거를 해석하는 방식을 만든 기하와 추적 연구입니다."
        />
        <div className="research-grid">
          {portfolioContent.research.map((entry, index) => (
            <article className="research-card" key={entry.id}>
              <p className="research-card__index">R.{String(index + 1).padStart(2, "0")}</p>
              <h3>{t(entry.title)}</h3>
              <p>{t(entry.summary)}</p>
              <strong>{t(entry.result)}</strong>
              <ul className="tag-list" aria-label={language === "en" ? "Research methods" : "연구 방법"}>
                {entry.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="publications-block">
          <div>
            <p className="section-index">PUBLICATIONS</p>
            <h3>{language === "en" ? "Selected writing" : "주요 논문"}</h3>
          </div>
          <ol className="publication-list">
            {portfolioContent.publications.map((publication, index) => (
              <li key={publication.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h4>{publication.title}</h4>
                  <p>{t(publication.venue)} · {t(publication.contribution)}</p>
                  {publication.recognition ? <strong>{t(publication.recognition)}</strong> : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  const { language, t } = useLanguage();
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="page-shell">
        <SectionHeading
          id="about-title"
          index="ABOUT · CHS"
          en="How I Work"
          ko="일하는 방식"
          descriptionEn="I make sensor behavior observable, find the physical cause, and leave a process that another engineer can repeat."
          descriptionKo="센서 동작을 관측 가능하게 만들고 물리적 원인을 찾은 뒤, 다른 엔지니어도 반복할 수 있는 프로세스를 남깁니다."
        />
        <div className="principle-row">
          {[
            ["01", "MEASURE", "Start with observable evidence", "관측 가능한 근거에서 시작"],
            ["02", "MODEL", "Match the model to the physics", "물리 현상에 맞는 모델 선택"],
            ["03", "SHIP", "Turn the fix into a repeatable tool", "반복 가능한 도구로 완성"],
          ].map(([number, label, en, ko]) => (
            <article key={number}><span>{number}</span><strong>{label}</strong><p>{language === "en" ? en : ko}</p></article>
          ))}
        </div>
        <div className="skills-grid">
          {portfolioContent.skills.map((group) => (
            <article className="skill-group" key={group.id}>
              <p>{group.id.toUpperCase()}</p>
              <h3>{t(group.title)}</h3>
              <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactFooter() {
  const { language } = useLanguage();
  const email = portfolioContent.profile.email;
  return (
    <footer className="contact-footer">
      <div className="page-shell">
        <p className="eyebrow"><span className="status-dot" aria-hidden="true" />{language === "en" ? "Open to the next hard sensor problem" : "다음 어려운 센서 문제를 기다립니다"}</p>
        <h2>{language === "en" ? "Let’s make the signal trustworthy." : "신뢰할 수 있는 신호를 함께 만듭시다."}</h2>
        <a className="contact-link" href={`mailto:${email}`}>
          <Mail aria-hidden="true" size={22} strokeWidth={1.6} />
          <span>{email}</span>
          <ArrowUpRight aria-hidden="true" size={28} strokeWidth={1.6} />
        </a>
        <div className="footer-meta">
          <span>CHAN-HO SEO · ROBOTICS SENSOR ENGINEER</span>
          <a href="#top">{language === "en" ? "Back to top ↑" : "맨 위로 ↑"}</a>
        </div>
      </div>
    </footer>
  );
}
