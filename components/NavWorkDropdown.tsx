import Link from "next/link";
import ProjectTitle from "@/components/ProjectTitle";
import type { Project } from "@/data/projects";

type Props = {
  projects: Project[];
};

export default function NavWorkDropdown({ projects }: Props) {
  return (
    <div className="nav-work-dropdown">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className="nav-work-item"
        >
          <span className="nav-work-item-title">
            <ProjectTitle title={project.navLabel} />
          </span>
          <span className="nav-work-item-hint">{project.navHint}</span>
        </Link>
      ))}
    </div>
  );
}
