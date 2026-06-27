"use client";

import { Fragment, useMemo, useState } from "react";
import { PROJECT_TAGS, ProjectTagId, getUsedTagIds } from "@/data/project-tags";
import { visibleProjects } from "@/data/projects";
import ProjectGridCard from "./ProjectGridCard";

export default function Projects() {
  const [activeTag, setActiveTag] = useState<ProjectTagId | "all">("all");
  const filterTags = useMemo(() => getUsedTagIds(visibleProjects), []);

  const filteredProjects = useMemo(() => {
    if (activeTag === "all") return visibleProjects;
    return visibleProjects.filter((project) => project.tagIds.includes(activeTag));
  }, [activeTag]);

  return (
    <section className="projects-section projects-section--grid" id="work">
      <div className="home-block home-work-head">
        <div className="home-work-bar" role="group" aria-label="Filter projects">
          <h2 className="home-work-bar-label">Work</h2>
          {filterTags.map((tagId) => (
            <Fragment key={tagId}>
              <span className="home-work-bar-sep" aria-hidden="true" />
              <button
                type="button"
                className={`home-work-filter${
                  activeTag === tagId ? " is-active" : ""
                }`}
                onClick={() =>
                  setActiveTag((current) => (current === tagId ? "all" : tagId))
                }
                aria-pressed={activeTag === tagId}
              >
                {PROJECT_TAGS[tagId]}
              </button>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="projects-grid home-block">
        {filteredProjects.map((project, index) => (
          <ProjectGridCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
