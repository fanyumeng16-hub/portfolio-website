import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import { Project } from "@/data/projects";

type SlideState = "active" | "past" | "future";

type Props = {
  project: Project;
  index: number;
  slideState?: SlideState;
};

const ProjectCard = forwardRef<HTMLElement, Props>(function ProjectCard(
  { project, index, slideState = "future" },
  ref
) {
  return (
    <article
      ref={ref}
      data-index={index}
      className={`project-slide is-${slideState}`}
    >
      <div className="project-slide-panel">
        <div className="project-slide-media">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={index === 0}
            className="project-slide-image"
          />
        </div>

        <div className="project-slide-aside">
          <span className="project-slide-code">
            {project.number}
            {project.year}
          </span>

          <div className="project-slide-content">
            <div className="project-slide-head">
              <h2 className="project-slide-heading">
                {project.title.includes("SCADpro") ? (
                  <>
                    MAYO CLINIC × SCAD<span className="brand-lowercase">pro</span>
                  </>
                ) : (
                  project.title
                )}
              </h2>

              <p className="project-slide-subtitle">{project.subtitle}</p>

              <ul className="project-slide-tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <p className="project-slide-desc">{project.description}</p>
            </div>

            <Link
              href={`/projects/${project.id}`}
              className="project-slide-explore"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
});

export default ProjectCard;
