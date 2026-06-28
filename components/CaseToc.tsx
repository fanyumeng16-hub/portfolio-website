"use client";

import { useEffect, useMemo, useState } from "react";

export type CaseTocSection = {
  id: string;
  label: string;
  indexLabel?: string;
  children?: CaseTocSection[];
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

function collectSectionIds(sections: CaseTocSection[]): string[] {
  return sections.flatMap((section) => [
    section.id,
    ...(section.children ? collectSectionIds(section.children) : []),
  ]);
}

function sectionContainsId(section: CaseTocSection, id: string): boolean {
  if (section.id === id) return true;
  return section.children?.some((child) => sectionContainsId(child, id)) ?? false;
}

function getScrollSpyOffset() {
  if (typeof window === "undefined") return 104;

  const styles = getComputedStyle(document.documentElement);
  const navHeight = parseFloat(styles.getPropertyValue("--case-nav-height")) || 88;

  return navHeight + 20;
}

function resolveActiveSection(ids: string[]) {
  if (!ids.length) return "";

  const offset = getScrollSpyOffset();
  const scrollBottom = window.scrollY + window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  if (scrollBottom >= docHeight - 4) {
    return ids[ids.length - 1]!;
  }

  let active = ids[0]!;

  for (const id of ids) {
    const element = document.getElementById(id);
    if (!element) continue;

    if (element.getBoundingClientRect().top <= offset) {
      active = id;
    }
  }

  return active;
}

type TocEntryProps = {
  section: CaseTocSection;
  index?: number;
  activeId: string;
  onScroll: (id: string) => void;
  depth?: number;
};

function TocEntry({
  section,
  index,
  activeId,
  onScroll,
  depth = 0,
}: TocEntryProps) {
  const isActive = activeId === section.id;
  const hasActiveChild =
    !isActive && section.children?.some((child) => sectionContainsId(child, activeId));
  const isExpanded =
    depth === 0 && Boolean(section.children?.length) && sectionContainsId(section, activeId);

  const indexDisplay =
    section.indexLabel ??
    (typeof index === "number" ? String(index + 1).padStart(2, "0") : null);

  return (
    <li className={depth > 0 ? "case-toc-sublist-item" : undefined}>
      <button
        type="button"
        className={`case-toc-item${depth > 0 ? " case-toc-item--sub" : ""}${
          isActive ? " is-active" : hasActiveChild ? " is-active-parent" : ""
        }`}
        aria-current={isActive ? "true" : undefined}
        aria-expanded={section.children?.length ? isExpanded : undefined}
        onClick={() => onScroll(section.id)}
      >
        {depth === 0 && indexDisplay ? (
          <span className="case-toc-index">{indexDisplay}</span>
        ) : null}
        <span className="case-toc-label">{section.label}</span>
      </button>
      {isExpanded ? (
        <ol className="case-toc-sublist">
          {section.children!.map((child) => (
            <TocEntry
              key={child.id}
              section={child}
              activeId={activeId}
              onScroll={onScroll}
              depth={depth + 1}
            />
          ))}
        </ol>
      ) : null}
    </li>
  );
}

export default function CaseToc({
  sections,
  showAfterCover = true,
  theme = "dark",
}: Props) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const [pastCover, setPastCover] = useState(false);
  const isVisible = !showAfterCover || pastCover;
  const sectionIds = useMemo(() => collectSectionIds(sections), [sections]);

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
    let frame = 0;

    const updateActive = () => {
      setActiveId((current) => {
        const next = resolveActiveSection(sectionIds);
        return next === current ? current : next;
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActive);
    };
  }, [sectionIds]);

  const scrollToSection = (id: string) => {
    window.dispatchEvent(new CustomEvent("case-toc-navigate", { detail: id }));

    const panel = document.getElementById(`${id}-panel`);
    const element = panel ?? document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  return (
    <nav
      className={`case-toc case-toc--${theme} ${isVisible ? "is-visible" : ""}`}
      aria-label="Page sections"
      aria-hidden={!isVisible}
    >
      <ol className="case-toc-list">
        {sections.map((section, index) => (
          <TocEntry
            key={section.id}
            section={section}
            index={index}
            activeId={activeId}
            onScroll={scrollToSection}
          />
        ))}
      </ol>
    </nav>
  );
}
