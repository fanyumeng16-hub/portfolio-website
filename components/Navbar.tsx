"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import NavWorkDropdown from "@/components/NavWorkDropdown";
import { visibleProjects } from "@/data/projects";

const NARROW_NAV_MQ = "(max-width: 900px)";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [workOpen, setWorkOpen] = useState(false);
  const workRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const work = document.getElementById("work");
      const about = document.getElementById("about");
      const triggerPoint = window.scrollY + 60;

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

  const onWorkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!window.matchMedia(NARROW_NAV_MQ).matches) return;
    event.preventDefault();
    setWorkOpen((open) => !open);
    const work = document.getElementById("work");
    if (work) {
      work.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="site-nav site-nav--home">
      <nav className="nav-bar nav-bar--home" aria-label="Main navigation">
        <div className="nav-bar__group nav-bar__group--start">
          <a
            className={`nav-item ${active === "home" ? "is-active" : ""}`}
            href="#home"
            onClick={() => setWorkOpen(false)}
          >
            Home
          </a>

          <div
            ref={workRef}
            className={`nav-item-group nav-item-group--work${
              workOpen ? " is-open" : ""
            }`}
          >
            <a
              className={`nav-item ${active === "work" ? "is-active" : ""}`}
              href="#work"
              aria-expanded={workOpen}
              aria-haspopup="true"
              onClick={onWorkClick}
            >
              Work
            </a>

            <NavWorkDropdown
              projects={visibleProjects}
              onNavigate={() => setWorkOpen(false)}
            />
          </div>

          <a
            className={`nav-item ${active === "about" ? "is-active" : ""}`}
            href="#about"
            onClick={() => setWorkOpen(false)}
          >
            About
          </a>
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
