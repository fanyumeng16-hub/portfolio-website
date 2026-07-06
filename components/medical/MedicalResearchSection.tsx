import { medicalResearch } from "@/data/medical-detail";
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
      <div className={styles.researchRubricModules}>
        {rubric.modules.map((module) => (
          <section className={styles.researchRubricModule} key={module.id}>
            <div className={styles.researchRubricModuleHead}>
              <h5 className={styles.researchRubricModuleTitle}>{module.label}</h5>
              <span className={styles.researchRubricModuleCount}>
                {module.stepCount} steps
              </span>
            </div>
            <table className={styles.researchRubricTable}>
              <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col">Threshold</th>
                </tr>
              </thead>
              <tbody>
                {module.parameters.map((parameter) => (
                  <tr key={parameter.name}>
                    <th scope="row">{parameter.name}</th>
                    <td>{parameter.threshold}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}
      </div>
    </div>
  );
}

export function MedicalResearchSection() {
  const { title, dimensionsLead, dimensions, dimensionResearch, lines, evaluationRubric } =
    medicalResearch;
  const [userResearch, clinicalStandards, competitorResearch] = lines;

  return (
    <MedicalSection id="mayo-research" title={title}>
      <p className={styles.researchDimensionsLead}>{dimensionsLead}</p>
      <ul className={`${styles.medicalCardGrid} ${styles.medicalCardGridCols4} ${styles.medicalCardGridSection}`}>
        {dimensions.map((dimension) => (
          <li className={styles.medicalCard} key={dimension.id}>
            <h4 className={styles.medicalCardTitle}>{dimension.title}</h4>
            <p className={styles.medicalCardBody}>{dimension.body}</p>
          </li>
        ))}
      </ul>

      <div className={styles.medicalLayers}>
        <MedicalLayerShell index="01" label={userResearch.title}>
          <MedicalResearchLineLayer line={userResearch} />
        </MedicalLayerShell>

        <MedicalLayerShell index="02" label="Dimension Research">
          <MedicalDimensionResearchTracks tracks={dimensionResearch} />
        </MedicalLayerShell>

        <MedicalLayerShell index="03" label={clinicalStandards.title}>
          <MedicalResearchLineLayer line={clinicalStandards} />
        </MedicalLayerShell>

        <MedicalLayerShell index="04" label={competitorResearch.title}>
          <MedicalResearchLineLayer line={competitorResearch} />
        </MedicalLayerShell>

        <MedicalLayerShell index="05" label="Evaluation Rubric">
          <ResearchEvaluationRubric rubric={evaluationRubric} />
        </MedicalLayerShell>
      </div>
    </MedicalSection>
  );
}
