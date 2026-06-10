"use client";

import { useEffect, useState } from "react";

export type CaseTocSection = {
  id: string;
  label: string;
};

type Props = {
  sections: CaseTocSection[];
  showAfterCover?: boolean;
  theme?: "dark" | "light";
};

function shouldShowTocAfterIntro(intro: HTMLElement) {
  const navOffset = 88;
  const rect = intro.getBoundingClientRect();

  return rect.top <= navOffset + 48;
}

export default function CaseToc({
  sections,
  showAfterCover = true,
  theme = "dark",
}: Props) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const [pastCover, setPastCover] = useState(false);
  const isVisible = !showAfterCover || pastCover;

  useEffect(() => {
    if (!showAfterCover) return;

    const intro = document.getElementById("case-intro");
    if (!intro) {
      const frame = requestAnimationFrame(() => setPastCover(true));
      return () => cancelAnimationFrame(frame);
    }

    const updateVisibility = () => {
      setPastCover(shouldShowTocAfterIntro(intro));
    };

    const frame = requestAnimationFrame(updateVisibility);
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    const resizeObserver = new ResizeObserver(updateVisibility);
    resizeObserver.observe(intro);

    const cover = document.getElementById("case-cover");
    const coverImage = cover?.querySelector("img");
    coverImage?.addEventListener("load", updateVisibility);
    if (cover) {
      resizeObserver.observe(cover);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
      coverImage?.removeEventListener("load", updateVisibility);
      resizeObserver.disconnect();
    };
  }, [showAfterCover]);

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-32% 0px -42% 0px",
        threshold: [0, 0.2, 0.45, 0.7],
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <nav
      className={`case-toc is-visible case-toc--${theme}`}
      aria-label="Page sections"
    >
      <ol className="case-toc-list">
        {sections.map((section, index) => (
          <li key={section.id}>
            <button
              type="button"
              className={`case-toc-item ${
                activeId === section.id ? "is-active" : ""
              }`}
              aria-current={activeId === section.id ? "true" : undefined}
              onClick={() => scrollToSection(section.id)}
            >
              <span className="case-toc-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="case-toc-label">{section.label}</span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
