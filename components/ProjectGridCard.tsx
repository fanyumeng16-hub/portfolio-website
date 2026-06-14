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
          <span className="project-grid-code">
            {project.number}
            {project.year}
          </span>

          <h2 className="project-grid-heading">
            <ProjectTitle title={project.title} />
          </h2>

          <p className="project-grid-subtitle">{project.subtitle}</p>

          <ul className="project-grid-tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
}
