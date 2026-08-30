import Image from "next/image";
import Link from "next/link";
import ProjectTitle from "@/components/ProjectTitle";
import { Project } from "@/data/projects";

export const HOME_PROJECT_GRID_SLOTS = 6;

type Props = {
  project: Project;
  index: number;
};

export function ProjectGridPlaceholder() {
  return (
    <article
      className="project-grid-card project-grid-card--placeholder"
      aria-hidden="true"
    >
      <div className="project-grid-link project-grid-link--placeholder">
        <div className="project-grid-placeholder-x" aria-hidden="true">
          <img
            src="/images/home-card-placeholder.svg"
            alt=""
            className="project-grid-placeholder-art"
          />
        </div>
        <div className="project-grid-media" />
        <div className="project-grid-body" />
      </div>
    </article>
  );
}

export default function ProjectGridCard({ project, index }: Props) {
  return (
    <article className="project-grid-card">
      <Link href={`/projects/${project.id}`} className="project-grid-link">
        <span className="project-grid-pin project-grid-pin--tl" aria-hidden="true" />
        <span className="project-grid-pin project-grid-pin--tr" aria-hidden="true" />
        <span className="project-grid-pin project-grid-pin--bl" aria-hidden="true" />
        <span className="project-grid-pin project-grid-pin--br" aria-hidden="true" />
        <span className="project-grid-hover-mark" aria-hidden="true">
          <img
            src="/images/home-card-hover-center.svg"
            alt=""
            className="project-grid-hover-mark-img"
          />
        </span>

        <div className="project-grid-media">
          <div className="project-grid-image-crop">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 900px) 50vw, 33vw"
              priority={index < 2}
              className="project-grid-image"
            />
          </div>
        </div>

        <div className="project-grid-body">
          <div className="project-grid-copy">
            <h2 className="project-grid-heading">
              <ProjectTitle title={project.title} />
            </h2>

            <div className="project-grid-meta">
              <span className="project-grid-year">{project.year}</span>
              <p className="project-grid-subtitle">{project.subtitle}</p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
