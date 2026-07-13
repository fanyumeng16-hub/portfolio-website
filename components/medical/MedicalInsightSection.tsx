import { medicalInsight } from "@/data/medical-content";
import { MedicalLayerShell } from "./MedicalLayerShell";
import { MedicalSection } from "./MedicalSection";
import styles from "./MedicalSections.module.css";

export function MedicalInsightSection({ embedded }: { embedded?: boolean } = {}) {
  const { title, rows } = medicalInsight;

  const content = (
    <MedicalLayerShell label="Research → Build" anchorId={embedded ? "mayo-insight" : undefined}>
      <ul className={styles.insightCorrespondence} aria-label="Research to design decision map">
        {rows.map((row) => (
          <li className={styles.insightCorrespondenceItem} key={row.id}>
            <p className="case-prose-body">
              <span className="mayoBodyLabel">Research</span>{" "}
              <strong className="mayoBodyEm">{row.research}</strong>
              {" — "}
              {row.researchNote}
            </p>
            {row.builds.map((build) => (
              <p className="case-prose-body" key={build.id}>
                <span className="mayoBodyLabel">Build</span>{" "}
                <a className={styles.insightCorrespondenceLink} href={`#${build.anchorId}`}>
                  <strong className="mayoBodyEm">
                    {build.order} {build.title}
                  </strong>
                </a>
                {" — "}
                {build.body}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </MedicalLayerShell>
  );

  if (embedded) {
    return content;
  }

  return (
    <MedicalSection id="mayo-insight" title={title}>
      {content}
    </MedicalSection>
  );
}
