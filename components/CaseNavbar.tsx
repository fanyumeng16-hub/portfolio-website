import Link from "next/link";
import type { CSSProperties } from "react";
import NavWorkDropdown from "@/components/NavWorkDropdown";
import ProjectTitle from "@/components/ProjectTitle";
import { getProjectNavTheme } from "@/data/project-nav-themes";
import { getProject, visibleProjects } from "@/data/projects";

type Props = {
  projectId: string;
};

export default function CaseNavbar({ projectId }: Props) {
  const project = getProject(projectId);
  if (!project) return null;

  const { navTheme, accent, accentContrast } = getProjectNavTheme(projectId);
  const otherProjects = visibleProjects.filter((item) => item.id !== projectId);

  return (
    <header
      className={`site-nav site-nav--case site-nav--${navTheme}`}
      style={
        {
          "--case-accent": accent,
          "--case-accent-contrast": accentContrast,
        } as CSSProperties
      }
    >
      <nav className="nav-bar" aria-label="Main navigation">
        <Link className="nav-item" href="/">
          Home
        </Link>

        <span className="nav-divider" aria-hidden="true" />

        <div className="nav-item-group nav-item-group--work nav-item-group--project">
          <span
            className="nav-item nav-item--project is-active"
            aria-current="page"
            aria-haspopup="true"
          >
            <ProjectTitle title={project.navLabel} />
          </span>

          <NavWorkDropdown projects={otherProjects} />
        </div>

        <span className="nav-divider" aria-hidden="true" />

        <Link className="nav-item" href="/#about">
          About
        </Link>

        <span className="nav-spacer" aria-hidden="true" />

        <span className="nav-divider" aria-hidden="true" />

        <a
          className="nav-item"
          href="/YumengFan_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>

        <span className="nav-divider" aria-hidden="true" />

        <a className="nav-item" href="mailto:fanyumeng16@gmail.com">
          Contact Me
        </a>
      </nav>
    </header>
  );
}
