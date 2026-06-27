import { CaseFinding } from "@/data/medical-content";

type Props = {
  findings: CaseFinding[];
};

export default function CaseFindingsList({ findings }: Props) {
  return (
    <ul className="case-findings-list">
      {findings.map((finding) => (
        <li className="case-findings-item" key={finding.observed}>
          <p>
            <span className="case-findings-label">We observed</span>{" "}
            {finding.observed}
          </p>
          <p>
            <span className="case-findings-label">We changed</span>{" "}
            {finding.changed}
          </p>
        </li>
      ))}
    </ul>
  );
}
