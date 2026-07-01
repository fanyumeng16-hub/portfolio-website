# Case Study Page Template

Standard layout and typography for project case pages. **Reference:** `app/projects/medical/page.tsx`.

## Page structure (two columns)

Desktop (≥901px):

```
┌─────────────────────────────────────────────────────────────┐
│ case-nav (full width, fixed)                                 │
├──────────────┬──────────────────────────────────────────────┤
│  CaseToc     │  Right column (100vw − 240px padding-left)   │
│  fixed left  │                                              │
│  ~176px      │     ┌─────────────────────────┐              │
│  do not      │     │  CaseHero (cover full)   │              │
│  change      │     ├─────────────────────────┤              │
│              │     │  CaseContentShell        │              │
│              │     │  max 1100px              │              │
│              │     │  margin: 0 auto          │ ← centered   │
│              │     │  sections…               │              │
│              │     └─────────────────────────┘              │
└──────────────┴──────────────────────────────────────────────┘
```

| Region | CSS / component | Notes |
|--------|-----------------|-------|
| Left TOC | `CaseToc` + `.case-page-with-toc { padding-left: 240px }` | Fixed rail, scroll spy |
| Right body | `CaseTemplateLayout` → `CaseHero` + `CaseContentShell` | Centered in remaining width |
| Cover image | `.case-cover` | Full bleed (spans both columns visually) |

Layout constants: `CASE_TEMPLATE_LAYOUT` in `lib/case-template.ts`.

## Page setup

```tsx
import CaseTemplateLayout from "@/components/CaseTemplateLayout";

<CaseTemplateLayout
  projectClass="case-page-yourproject"
  sections={sections}
  tocTheme="light"
  nav={<header className="case-nav">…</header>}
  hero={<CaseHero … />}
>
  {/* all post-hero sections */}
</CaseTemplateLayout>
```

Add `case-page-{id}` on `projectClass` for accent colors (subtitle, TOC active state) only.

## Copy style

- Do not use em dashes (`—`) or en dashes (`–`) in case study copy. Use commas, colons, or separate sentences instead.

## TOC rules

1. Every TOC entry needs a matching `id` on a section element.
2. The **first visible heading** at that `id` must match the TOC label (use `.case-prose-title` / T1).
3. Subsections use `.case-prose-subtitle` (T2), not duplicate T1 titles in following `CaseDetailSection` headers.
4. Section ids use `scroll-margin-top` under `.case-page-template` for fixed nav offset.

Example: Onboarding

```tsx
<section id="mayo-onboarding">          {/* TOC: "Onboarding" */}
  <h3 className="case-prose-title">Onboarding Design</h3>   {/* T1 */}
  <h4 className="case-prose-subtitle">The Core Insight</h4> {/* T2 */}
</section>
<CaseDetailSection section={…} />     {/* no duplicate section title */}
```

## Fixed content width

All text and media stay inside one column:

| Token | Value |
|-------|--------|
| Max width | `1100px` |
| Viewport rule | `min(1100px, 100%)` of content column |
| With TOC (≥901px) | `min(1100px, 100%)` of **right column**, `margin: 0 auto` centered |
| Mobile | `100%` + `20px` horizontal padding |

## 4-tier typography (`.case-page-template`)

| Tier | Size | CSS var | Use for |
|------|------|---------|---------|
| **T1** | 28px / 1.75rem | `--case-t1` | Section titles, hero project name |
| **T2** | 18px / 1.125rem | `--case-t2` | Subheadings, detail item titles, video caption |
| **T3** | 17px / 1.0625rem | `--case-t3` | Body paragraphs, lists |
| **T4** | 13px / 0.8125rem | `--case-t4` | Labels, spec table keys, tags |

### Semantic class mapping

| Class | Tier |
|-------|------|
| `.case-prose-title`, `.case-body h3`, `.case-detail-title` | T1 |
| `.case-prose-subtitle`, `.case-detail-item-title`, `.case-video-caption` | T2 |
| `.case-prose-body`, `.case-detail-copy p`, `.case-detail-intro` | T3 |
| `.case-section-label`, `.case-overview-meta-item dt`, `.case-spec-row dt` | T4 |

Do not set ad-hoc `font-size` or `max-width` on case content. Use these classes.

## Building blocks

| Component | Purpose |
|-----------|---------|
| `CaseTemplateLayout` | **Shell:** TOC + nav + hero + content shell |
| `CaseContentShell` | Fixed-width wrapper for all post-hero sections |
| `CaseOverviewSection` | Overview: T1 title, 5:5 text + meta stack, YouTube or local video |
| `CaseLocalVideoSection` | Label (T4) + caption (T2) + `<video>` |
| `CaseProseSection` | T1 title + T3 paragraphs (+ optional children) |
| `CaseDetailSection` | Media + annotated copy blocks |
| `CaseOverviewMeta` | Overview right column: label left, value right (Timeline, Team, Platform) |
| `CaseConstraintGrid` | Two-column challenge comparison |
| `CaseStageFlow` | Horizontal stage flow |
| `CaseFindingsList` | We observed → We changed |
| `CaseYouTubeSection` | Embedded promo video |
| `CaseOutcomeImage` | Full-width closing image |

## Content data pattern

Split content by concern:

```
data/yourproject-content.ts   → copy, spec rows, role, challenge, findings
data/yourproject-detail.ts    → CaseDetailSection blocks, videos, images
```

## Migrating an existing project

1. Wrap page in `CaseTemplateLayout`.
2. Add `case-page-template` via layout (included automatically).
3. Replace overview / video / outcome markup with template components.
4. Align TOC ids with section T1 titles.
5. Keep `case-page-{id}` only for accent colors.

## Projects to migrate

- [ ] horizon
- [ ] heartbits
- [ ] trackly
- [ ] universal
- [ ] ora
- [ ] arcana
- [x] medical (reference)
- [ ] massie (partial: gallery layout differs)
