import { medicalResearch } from "@/data/medical-detail";
import { MedicalDeepDiveOverviewSection } from "./MedicalResearchNarrative";
import { MedicalDimensionResearchTracks } from "./MedicalDimensionResearchTracks";
import { MedicalLayerShell } from "./MedicalLayerShell";
import { MedicalResearchLineLayer } from "./MedicalResearchLineLayer";
import { MedicalSection } from "./MedicalSection";
import styles from "./MedicalSections.module.css";

function ResearchEvaluationRubric({
  rubric,
}: {
  rubric: (typeof medicalResearch)["evaluationRubric"];
}) {
  return (
    <div className={styles.researchRubric}>
      <p className={styles.researchRubricIntro}>{rubric.intro}</p>
      <div className={styles.researchRubricTableWrap}>
        <table className={styles.researchRubricTable}>
          <thead>
            <tr>
              <th scope="col">Module</th>
              <th scope="col">Parameter</th>
              <th scope="col">Threshold</th>
            </tr>
          </thead>
          <tbody>
            {rubric.modules.map((module) =>
              module.parameters.map((parameter, index) => (
                <tr key={`${module.id}-${parameter.name}`}>
                  {index === 0 ? (
                    <th
                      scope="rowgroup"
                      rowSpan={module.parameters.length}
                      className={styles.researchRubricModuleCell}
                    >
                      <span className={styles.researchRubricModuleTitle}>{module.label}</span>
                      <span className={styles.researchRubricModuleCount}>
                        {module.stepCount} steps
                      </span>
                    </th>
                  ) : null}
                  <th scope="row">{parameter.name}</th>
                  <td>{parameter.threshold}</td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function MedicalResearchDetailSection({ embedded }: { embedded?: boolean } = {}) {
  const { dimensionResearch, lines, evaluationRubric } = medicalResearch;
  const [userResearch, clinicalStandards, competitorResearch] = lines;

  const content = (
    <div className={`${styles.medicalLayers} ${styles.mayoResearchDetail}`}>
      <MedicalLayerShell label={userResearch.title}>
        <MedicalResearchLineLayer line={userResearch} />
      </MedicalLayerShell>

      <MedicalLayerShell label="Dimension Research">
        <MedicalDimensionResearchTracks tracks={dimensionResearch} />
      </MedicalLayerShell>

      <MedicalLayerShell label={clinicalStandards.title}>
        <MedicalResearchLineLayer line={clinicalStandards} />
      </MedicalLayerShell>

      <MedicalLayerShell label={competitorResearch.title}>
        <MedicalResearchLineLayer line={competitorResearch} />
      </MedicalLayerShell>

      <MedicalLayerShell label="Evaluation Rubric">
        <ResearchEvaluationRubric rubric={evaluationRubric} />
      </MedicalLayerShell>
    </div>
  );

  if (embedded) {
    return content;
  }

  return (
    <MedicalSection id="mayo-research-detail" title="Research Detail" hideHeader>
      {content}
    </MedicalSection>
  );
}

/** @deprecated Use MedicalDeepDiveOverviewSection + MedicalResearchDetailSection */
export function MedicalResearchSection() {
  return (
    <>
      <MedicalDeepDiveOverviewSection />
      <MedicalResearchDetailSection />
    </>
  );
}
