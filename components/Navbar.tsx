"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectTitle from "@/components/ProjectTitle";
import { visibleProjects } from "@/data/projects";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const work = document.getElementById("work");
      const about = document.getElementById("about");
      const triggerPoint = window.scrollY + 56;

      if (about && triggerPoint >= about.offsetTop) {
        setActive("about");
      } else if (work && triggerPoint >= work.offsetTop) {
        setActive("work");
      } else {
        setActive("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="site-nav">
      <nav className="nav-bar" aria-label="Main navigation">
        <a
          className={`nav-item ${active === "home" ? "is-active" : ""}`}
          href="#home"
        >
          Home
        </a>

        <span className="nav-divider" aria-hidden="true" />

        <div className="nav-item-group nav-item-group--work">
          <a
            className={`nav-item ${active === "work" ? "is-active" : ""}`}
            href="#work"
          >
            Work
          </a>

          <div className="nav-work-dropdown">
            {visibleProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="nav-work-item"
              >
                <ProjectTitle title={project.title} />
              </Link>
            ))}
          </div>
        </div>

        <span className="nav-divider" aria-hidden="true" />

        <a
          className={`nav-item ${active === "about" ? "is-active" : ""}`}
          href="#about"
        >
          About
        </a>

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
