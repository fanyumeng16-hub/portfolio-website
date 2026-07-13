import { medicalResearch } from "@/data/medical-detail";
import {
  MayoBlock,
  MayoBlockHeader,
  MayoNarrativeBeat,
  MayoStaircase,
  MayoStaircaseStep,
} from "./MayoLayout";

/** Deep-dive overview — staircase only, matches mayocopy beat 5 */
export function MedicalDeepDiveOverviewSection() {
  const { title, dimensionsLead, dimensions } = medicalResearch;

  return (
    <MayoNarrativeBeat id="mayo-research">
      <MayoBlock>
        <MayoBlockHeader title={title} kicker={dimensionsLead} kickerAccent />
        <MayoStaircase>
          {dimensions.map((dimension, step) => (
            <MayoStaircaseStep
              key={dimension.id}
              index={dimension.index}
              title={dimension.title}
              body={dimension.body}
              step={step}
            />
          ))}
        </MayoStaircase>
      </MayoBlock>
    </MayoNarrativeBeat>
  );
}
