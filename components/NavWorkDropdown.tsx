import Image from "next/image";
import Link from "next/link";
import ProjectTitle from "@/components/ProjectTitle";
import type { Project } from "@/data/projects";

type Props = {
  projects: Project[];
  onNavigate?: () => void;
};

function formatNavType(label: string) {
  if (label.includes("/")) return label;
  return label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();
}

export default function NavWorkDropdown({ projects, onNavigate }: Props) {
  return (
    <div className="nav-work-dropdown" data-figma-node="371:988">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className="nav-work-item"
          onClick={onNavigate}
        >
          <span className="nav-work-item-group">
            <span className="nav-work-item-chip">
              <span className="nav-work-corner nav-work-corner--tl" aria-hidden="true" />
              <span className="nav-work-corner nav-work-corner--tr" aria-hidden="true" />
              <span className="nav-work-corner nav-work-corner--bl" aria-hidden="true" />
              <span className="nav-work-corner nav-work-corner--br" aria-hidden="true" />
              <span className="nav-work-item-title">
                <ProjectTitle title={project.title} />
              </span>
            </span>

            <span className="nav-work-item-connector" aria-hidden="true">
              <Image
                src="/images/nav-work/connector.svg"
                alt=""
                width={41}
                height={2}
                className="nav-work-item-connector-img"
              />
            </span>

            <span className="nav-work-item-type-box">
              <span className="nav-work-corner nav-work-corner--tl" aria-hidden="true" />
              <span className="nav-work-corner nav-work-corner--tr" aria-hidden="true" />
              <span className="nav-work-corner nav-work-corner--bl" aria-hidden="true" />
              <span className="nav-work-corner nav-work-corner--br" aria-hidden="true" />
              <span className="nav-work-item-type" aria-hidden="true">
                {formatNavType(project.navType)}
              </span>
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
