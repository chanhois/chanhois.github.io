"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { portfolioContent } from "./content";
import type { SectionCopy } from "./model";
import { useLanguage } from "./use-language";

function SectionHeading({
  id,
  index,
  copy,
}: {
  id: string;
  index: string;
  copy: SectionCopy;
}) {
  const { t } = useLanguage();
  return (
    <div className="section-intro section-intro--compact">
      <p className="section-index">{index}</p>
      <h2 id={id}>{t(copy.heading)}</h2>
      <p>{t(copy.description)}</p>
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
          index="08 — 10"
          copy={portfolioContent.site.experience}
        />
        <div className="lifecycle" aria-label={language === "en" ? "Sensor lifecycle" : "센서 생애주기"}>
          {portfolioContent.site.lifecycle.map((stage, index) => (
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
          copy={portfolioContent.site.research}
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
            <h3>{t(portfolioContent.site.publicationsHeading)}</h3>
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
  const { t } = useLanguage();
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="page-shell">
        <SectionHeading
          id="about-title"
          index="ABOUT · CHS"
          copy={portfolioContent.site.about}
        />
        <div className="principle-row">
          {portfolioContent.site.principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>
              <strong>{principle.label}</strong>
              <p>{t(principle.text)}</p>
            </article>
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
  const { t } = useLanguage();
  const email = portfolioContent.profile.email;
  return (
    <footer className="contact-footer">
      <div className="page-shell">
        <p className="eyebrow"><span className="status-dot" aria-hidden="true" />{t(portfolioContent.site.contact.eyebrow)}</p>
        <h2>{t(portfolioContent.site.contact.headline)}</h2>
        <a className="contact-link" href={`mailto:${email}`}>
          <Mail aria-hidden="true" size={22} strokeWidth={1.6} />
          <span>{email}</span>
          <ArrowUpRight aria-hidden="true" size={28} strokeWidth={1.6} />
        </a>
        <div className="footer-meta">
          <span>CHAN-HO SEO · ROBOTICS SENSOR ENGINEER</span>
          <a href="#top">{t(portfolioContent.site.contact.backToTop)}</a>
        </div>
      </div>
    </footer>
  );
}
