import Image from "next/image";
import Link from "next/link";
import ProjectTitle from "@/components/ProjectTitle";
import { Project } from "@/data/projects";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectGridCard({ project, index }: Props) {
  return (
    <article className="project-grid-card">
      <Link href={`/projects/${project.id}`} className="project-grid-link">
        <div className="project-grid-media">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={index < 2}
            className="project-grid-image"
          />
        </div>

        <div className="project-grid-body">
          <span className="project-grid-year">{project.year}</span>

          <h2 className="project-grid-heading">
            <ProjectTitle title={project.title} />
          </h2>

          <p className="project-grid-subtitle">{project.subtitle}</p>

          {project.tags.length ? (
            <p className="project-grid-tag">{project.tags.join(" · ")}</p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}
