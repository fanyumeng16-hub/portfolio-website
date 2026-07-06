import { ReactNode } from "react";
import styles from "./MedicalSections.module.css";

type SectionProps = {
  id: string;
  title: string;
  intro?: string;
  children?: ReactNode;
};

export function MedicalSection({
  id,
  title,
  intro,
  children,
}: SectionProps) {
  return (
    <section className={`case-prose-section ${styles.section}`} id={id}>
      <div className="case-prose-inner">
        <header className={styles.sectionHeader}>
          <div className={styles.sectionTitleRow}>
            <h3 className="case-prose-title">{title}</h3>
          </div>
          {intro ? <p className="case-prose-body">{intro}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}

export function MedicalSubsection({
  title,
  body,
  children,
}: {
  title: string;
  body?: string;
  children?: ReactNode;
}) {
  return (
    <div className={styles.subsection}>
      <h4 className="case-prose-subtitle">{title}</h4>
      {body ? <p className="case-prose-body">{body}</p> : null}
      {children}
    </div>
  );
}
