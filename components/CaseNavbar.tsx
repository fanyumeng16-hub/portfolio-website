"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import NavWorkDropdown from "@/components/NavWorkDropdown";
import ProjectTitle from "@/components/ProjectTitle";
import { getProjectNavTheme } from "@/data/project-nav-themes";
import { getProject, visibleProjects } from "@/data/projects";

const NARROW_NAV_MQ = "(max-width: 900px)";

type Props = {
  projectId: string;
};

export default function CaseNavbar({ projectId }: Props) {
  const project = getProject(projectId);
  const [workOpen, setWorkOpen] = useState(false);
  const workRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!workOpen) return;
      const node = workRef.current;
      if (node && !node.contains(event.target as Node)) {
        setWorkOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setWorkOpen(false);
    };
    const onResize = () => {
      if (!window.matchMedia(NARROW_NAV_MQ).matches) setWorkOpen(false);
    };

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [workOpen]);

  if (!project) return null;

  const { accent, accentContrast } = getProjectNavTheme(projectId);
  const otherProjects = visibleProjects.filter((item) => item.id !== projectId);

  const onProjectClick = () => {
    if (!window.matchMedia(NARROW_NAV_MQ).matches) return;
    setWorkOpen((open) => !open);
  };

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
          <Link className="nav-item" href="/" onClick={() => setWorkOpen(false)}>
            Home
          </Link>

          <div
            ref={workRef}
            className={`nav-item-group nav-item-group--work nav-item-group--project${
              workOpen ? " is-open" : ""
            }`}
          >
            <button
              type="button"
              className="nav-item nav-item--project is-active"
              aria-current="page"
              aria-expanded={workOpen}
              aria-haspopup="true"
              onClick={onProjectClick}
            >
              <ProjectTitle title={project.navLabel} />
            </button>

            <NavWorkDropdown
              projects={otherProjects}
              onNavigate={() => setWorkOpen(false)}
            />
          </div>

          <Link
            className="nav-item"
            href="/#about"
            onClick={() => setWorkOpen(false)}
          >
            About
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

          <a
            className="nav-item nav-item--contact"
            href="mailto:fanyumeng16@gmail.com"
          >
            Contact me
          </a>
        </div>
      </nav>
    </header>
  );
}
