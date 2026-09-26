"use client";

import { portfolioContent } from "./content";
import { MediaStage } from "./media-stage";
import { numbering } from "./numbering";
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
          <p className="section-index">{numbering.projects.label}</p>
          <h2 id="projects-title">{t(portfolioContent.site.projects.heading)}</h2>
          <p>{t(portfolioContent.site.projects.description)}</p>
        </div>
        <div className="project-grid">
          {portfolioContent.projects.map((project, index) => (
            <article className="project-card" key={project.id}>
              <div className="project-card__topline">
                <p>{numbering.projectNumber(index)}</p>
                <ul aria-label={language === "en" ? "Technologies" : "기술"}>
                  {project.tags.slice(0, 2).map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
              {project.media?.length ? (
                <div className="project-card__media">
                  {project.media.map((item) => (
                    <MediaStage key={item.src} media={item} active />
                  ))}
                </div>
              ) : (
                <ProjectMotif id={project.id} />
              )}
              <h3>{t(project.title)}</h3>
              <p>{t(project.summary)}</p>
              <details>
                <summary>{t(portfolioContent.site.ui.readOutcome)}</summary>
                <p>{t(project.outcome)}</p>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
