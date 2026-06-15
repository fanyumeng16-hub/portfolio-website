"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PROJECT_TAGS, ProjectTagId, getUsedTagIds } from "@/data/project-tags";
import { Project, visibleProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectGridCard from "./ProjectGridCard";

type LayoutMode = "stack" | "grid";

function LayoutIcon({ mode }: { mode: LayoutMode }) {
  if (mode === "stack") {
    return (
      <svg className="projects-layout-svg" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="10"
          height="10"
          stroke="currentColor"
          strokeWidth="1.25"
        />
      </svg>
    );
  }

  return (
    <svg
      className="projects-layout-svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="10"
        height="10"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <rect x="5" y="5" width="2.5" height="2.5" fill="currentColor" />
      <rect x="8.5" y="5" width="2.5" height="2.5" fill="currentColor" />
      <rect x="5" y="8.5" width="2.5" height="2.5" fill="currentColor" />
      <rect x="8.5" y="8.5" width="2.5" height="2.5" fill="currentColor" />
    </svg>
  );
}

function getSlideState(index: number, active: number) {
  if (index === active) return "active";
  if (index < active) return "past";
  return "future";
}

function ProjectsStackView({ items }: { items: Project[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [showDots, setShowDots] = useState(false);

  useEffect(() => {
    const slides = slideRefs.current.filter(Boolean) as HTMLElement[];
    if (!slides.length) return;

    const slideObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.intersectionRatio < 0.42) return;
          const index = Number(entry.target.getAttribute("data-index"));
          if (!Number.isNaN(index)) setActive(index);
        });
      },
      { threshold: [0.42, 0.55, 0.7] }
    );

    slides.forEach((slide) => slideObserver.observe(slide));

    const sectionObserver = new IntersectionObserver(
      ([entry]) => setShowDots(entry.isIntersecting),
      { threshold: 0.08 }
    );

    if (sectionRef.current) sectionObserver.observe(sectionRef.current);

    return () => {
      slideObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [items]);

  const scrollToSlide = (index: number) => {
    slideRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={sectionRef}>
      <nav
        className={`projects-dots ${showDots ? "is-visible" : ""}`}
        aria-label="Project navigation"
      >
        {items.map((project, index) => (
          <button
            key={project.id}
            type="button"
            className={`projects-dot ${index === active ? "is-active" : ""}`}
            aria-label={`Go to ${project.title}`}
            aria-current={index === active ? "true" : undefined}
            onClick={() => scrollToSlide(index)}
          />
        ))}
      </nav>

      <div className="projects-stack">
        {items.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            slideState={getSlideState(index, active)}
            ref={(element) => {
              slideRefs.current[index] = element;
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [layout, setLayout] = useState<LayoutMode>("stack");
  const [activeTag, setActiveTag] = useState<ProjectTagId | "all">("all");

  const filterTags = useMemo(() => getUsedTagIds(visibleProjects), []);

  const filteredProjects = useMemo(() => {
    if (activeTag === "all") return visibleProjects;
    return visibleProjects.filter((project) => project.tagIds.includes(activeTag));
  }, [activeTag]);

  return (
    <section className={`projects-section projects-section--${layout}`} id="work">
      <div className="projects-header">
        <div className="section-label projects-section-head-row">
          <span>Work</span>
        </div>

        <div className="projects-filter-bar">
          <div className="projects-filters" role="group" aria-label="Filter projects">
            <div className="tag-bar">
              <button
                type="button"
                className={`projects-filter ${activeTag === "all" ? "is-active" : ""}`}
                onClick={() => setActiveTag("all")}
              >
                All
              </button>
              {filterTags.map((tagId) => (
                <button
                  key={tagId}
                  type="button"
                  className={`projects-filter ${
                    activeTag === tagId ? "is-active" : ""
                  }`}
                  onClick={() => setActiveTag(tagId)}
                >
                  {PROJECT_TAGS[tagId]}
                </button>
              ))}
            </div>
          </div>

          <div className="tag-bar projects-layout-toggle" role="group" aria-label="Layout">
            <button
              type="button"
              className={`projects-layout-btn ${
                layout === "stack" ? "is-active" : ""
              }`}
              aria-pressed={layout === "stack"}
              aria-label="Full screen list"
              onClick={() => setLayout("stack")}
            >
              <LayoutIcon mode="stack" />
            </button>
            <button
              type="button"
              className={`projects-layout-btn ${
                layout === "grid" ? "is-active" : ""
              }`}
              aria-pressed={layout === "grid"}
              aria-label="Grid view"
              onClick={() => setLayout("grid")}
            >
              <LayoutIcon mode="grid" />
            </button>
          </div>
        </div>
      </div>

      {layout === "stack" ? (
        <ProjectsStackView key={activeTag} items={filteredProjects} />
      ) : (
        <div className="projects-grid" key={activeTag}>
          {filteredProjects.map((project, index) => (
            <ProjectGridCard key={project.id} project={project} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}
