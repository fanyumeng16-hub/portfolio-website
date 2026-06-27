import { CaseStage } from "@/data/medical-content";

type Props = {
  stages: CaseStage[];
};

export default function CaseStageFlow({ stages }: Props) {
  return (
    <ol className="case-stage-flow">
      {stages.map((stage, index) => (
        <li className="case-stage-flow-item" key={stage.label}>
          <span className="case-stage-flow-index">{stage.label}</span>
          <span className="case-stage-flow-title">{stage.title}</span>
          {index < stages.length - 1 ? (
            <span className="case-stage-flow-arrow" aria-hidden>
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
