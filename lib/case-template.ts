/**
 * Shared case study page template (layout + 4-tier typography).
 * Reference implementation: app/projects/medical/page.tsx
 * Guide: docs/CASE-TEMPLATE.md
 */

/** Fixed content column + type scale — see .case-page-template in globals.css */
export const CASE_TEMPLATE = {
  pageClass: "case-page-template",
  shellClass: "case-content-shell",
  overviewClass: "case-overview--template",
  contentMax: "1100px",
  contentGutter: "clamp(32px, 4vw, 56px)",
  type: {
    t1: "1.75rem", // 28px — section titles
    t2: "1.125rem", // 18px — subheadings
    t3: "1.0625rem", // 17px — body
    t4: "0.8125rem", // 13px — meta / labels
  },
} as const;

/**
 * Two-column case page layout (desktop ≥901px).
 * Left: fixed TOC rail. Right: hero + CaseContentShell, centered in remaining width.
 * CSS: `.case-page-with-toc` + `.case-page-template` in globals.css
 */
export const CASE_TEMPLATE_LAYOUT = {
  tocPaddingLeft: "344px",
  tocFixedLeft: "64px",
  tocMaxWidth: "252px",
  navHeight: "88px",
  contentMax: CASE_TEMPLATE.contentMax,
  contentCentered: true,
} as const;

export type CaseTemplateSpecRow = {
  label: string;
  value: string;
};

export type CaseTemplateMedia = {
  src: string;
  alt: string;
};

export type CaseTemplateVideoEmbed = {
  src: string;
  alt: string;
};

export type CaseTemplateYouTubeEmbed = {
  videoId: string;
  title: string;
};

export type CaseOverviewMedia =
  | ({ type: "youtube" } & CaseTemplateYouTubeEmbed)
  | ({ type: "local" } & CaseTemplateVideoEmbed);

export type CaseTemplateVideo = CaseTemplateVideoEmbed & {
  id: string;
  label: string;
  caption: string;
};

/** Compose `<main>` className for a template-based case page. */
export function caseTemplateMainClassName(
  projectClass: string,
  withToc = true,
  pageTheme: "light" | "dark" = "light",
): string {
  return [
    "case-page",
    pageTheme === "light" ? "case-page-light" : "",
    CASE_TEMPLATE.pageClass,
    projectClass,
    withToc ? "case-page-with-toc" : "",
  ]
    .filter(Boolean)
    .join(" ");
}
