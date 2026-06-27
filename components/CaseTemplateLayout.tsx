import { ReactNode } from "react";
import CaseContentShell from "@/components/CaseContentShell";
import CaseToc, { type CaseTocSection } from "@/components/CaseToc";
import { caseTemplateMainClassName } from "@/lib/case-template";

type Props = {
  projectClass: string;
  sections: CaseTocSection[];
  tocTheme?: "light" | "dark";
  nav: ReactNode;
  hero: ReactNode;
  children: ReactNode;
};

/**
 * Case study shell: fixed left TOC + centered main column.
 * @see docs/CASE-TEMPLATE.md
 */
export default function CaseTemplateLayout({
  projectClass,
  sections,
  tocTheme = "light",
  nav,
  hero,
  children,
}: Props) {
  return (
    <main className={caseTemplateMainClassName(projectClass)}>
      <CaseToc sections={sections} theme={tocTheme} />
      {nav}
      {hero}
      <CaseContentShell>{children}</CaseContentShell>
    </main>
  );
}
