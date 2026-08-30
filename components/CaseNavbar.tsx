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

  const { accent, accentContrast } = getProjectNavTheme(projectId);
  const otherProjects = visibleProjects.filter((item) => item.id !== projectId);

  return (
    <header
      className="site-nav site-nav--home site-nav--case"
      style={
        {
          "--case-accent": accent,
          "--case-accent-contrast": accentContrast,
        } as CSSProperties
      }
    >
      <nav className="nav-bar nav-bar--home" aria-label="Main navigation">
        <div className="nav-bar__group nav-bar__group--start">
          <Link className="nav-item" href="/">
            Home
          </Link>

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

          <Link className="nav-item" href="/#about">
            about
          </Link>
        </div>

        <div className="nav-bar__group nav-bar__group--end">
          <a
            className="nav-item"
            href="/YumengFan_Resume_UX.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>

          <a className="nav-item nav-item--contact" href="mailto:fanyumeng16@gmail.com">
            Contact me
          </a>
        </div>
      </nav>
    </header>
  );
}
