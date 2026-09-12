"use client";

import { portfolioContent } from "./content";
import { useLanguage } from "./use-language";

function ProjectMotif({ id }: { id: string }) {
  return (
    <div className={`project-motif project-motif--${id}`} aria-hidden="true">
      <span className="project-motif__origin" />
      <span className="project-motif__beam project-motif__beam--a" />
      <span className="project-motif__beam project-motif__beam--b" />
      <span className="project-motif__beam project-motif__beam--c" />
      <i /><i /><i /><i /><i />
    </div>
  );
}

export function ProjectIndex() {
  const { language, t } = useLanguage();

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="page-shell">
        <div className="section-intro section-intro--compact">
          <p className="section-index">06 — 09</p>
          <h2 id="projects-title">{language === "en" ? "Project Index" : "프로젝트"}</h2>
          <p>
            {language === "en"
              ? "Platform breadth and research foundations behind the featured work."
              : "주요 작업을 뒷받침하는 플랫폼 경험과 연구 기반입니다."}
          </p>
        </div>
        <div className="project-grid">
          {portfolioContent.projects.map((project, index) => (
            <article className="project-card" key={project.id}>
              <div className="project-card__topline">
                <p>{String(index + 6).padStart(2, "0")}</p>
                <ul aria-label={language === "en" ? "Technologies" : "기술"}>
                  {project.tags.slice(0, 2).map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
              <ProjectMotif id={project.id} />
              <h3>{t(project.title)}</h3>
              <p>{t(project.summary)}</p>
              <details>
                <summary>{language === "en" ? "Read the outcome" : "결과 보기"}</summary>
                <p>{t(project.outcome)}</p>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
