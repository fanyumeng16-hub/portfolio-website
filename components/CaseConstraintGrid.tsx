import { CaseConstraint } from "@/data/medical-content";

type Props = {
  constraints: CaseConstraint[];
};

export default function CaseConstraintGrid({ constraints }: Props) {
  return (
    <div className="case-constraint-grid">
      {constraints.map((item) => (
        <div className="case-constraint-item" key={item.label}>
          <p className="case-constraint-label">{item.label}</p>
          <h4 className="case-constraint-title">{item.title}</h4>
          <p className="case-constraint-body">{item.body}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.imageAlt}
            className="case-constraint-image"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}
