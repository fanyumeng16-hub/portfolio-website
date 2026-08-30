"use client";

import { useMemo, useState } from "react";
import { PROJECT_TAGS, ProjectTagId, getUsedTagIds } from "@/data/project-tags";
import { visibleProjects } from "@/data/projects";
import ProjectGridCard, {
  HOME_PROJECT_GRID_SLOTS,
  ProjectGridPlaceholder,
} from "./ProjectGridCard";

export default function Projects() {
  const [activeTag, setActiveTag] = useState<ProjectTagId | "all">("all");
  const filterTags = useMemo(() => getUsedTagIds(visibleProjects), []);

  const filteredProjects = useMemo(() => {
    if (activeTag === "all") return visibleProjects;
    return visibleProjects.filter((project) => project.tagIds.includes(activeTag));
  }, [activeTag]);

  const placeholderCount = useMemo(() => {
    if (activeTag !== "all") return 0;
    return Math.max(0, HOME_PROJECT_GRID_SLOTS - filteredProjects.length);
  }, [activeTag, filteredProjects.length]);

  return (
    <section className="projects-section projects-section--grid" id="work">
      <div className="home-work-head">
        <div className="home-work-title-wrap">
          <div className="home-work-title-frame">
            <span className="home-work-corner home-work-corner--tl" aria-hidden="true" />
            <span className="home-work-corner home-work-corner--tr" aria-hidden="true" />
            <span className="home-work-corner home-work-corner--bl" aria-hidden="true" />
            <span className="home-work-corner home-work-corner--br" aria-hidden="true" />
            <h2 className="home-work-title">Work</h2>
          </div>
        </div>

        <div
          className="home-work-filters"
          role="group"
          aria-label="Filter projects"
        >
          <button
            type="button"
            className={`home-work-filter${activeTag === "all" ? " is-active" : ""}`}
            onClick={() => setActiveTag("all")}
            aria-pressed={activeTag === "all"}
          >
            All
          </button>

          {filterTags.map((tagId) => (
            <button
              key={tagId}
              type="button"
              className={`home-work-filter${
                activeTag === tagId ? " is-active" : ""
              }`}
              onClick={() => setActiveTag(tagId)}
              aria-pressed={activeTag === tagId}
            >
              {PROJECT_TAGS[tagId]}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid home-block">
        {filteredProjects.map((project, index) => (
          <ProjectGridCard key={project.id} project={project} index={index} />
        ))}
        {Array.from({ length: placeholderCount }, (_, index) => (
          <ProjectGridPlaceholder key={`grid-placeholder-${index}`} />
        ))}
      </div>
    </section>
  );
}
