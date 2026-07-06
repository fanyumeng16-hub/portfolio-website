import { CaseOnboardingInsight } from "@/data/medical-content";

type Props = {
  insights: CaseOnboardingInsight[];
  showIndex?: boolean;
  groupLabel?: string;
  variant?: "default" | "device" | "user";
};

export default function CaseOnboardingInsightCards({
  insights,
  showIndex = true,
  groupLabel,
  variant = "default",
}: Props) {
  return (
    <div
      className={`case-onboarding-insight-group${
        variant !== "default" ? ` case-onboarding-insight-group--${variant}` : ""
      }`}
    >
      {groupLabel ? (
        <p className="case-onboarding-insight-group-label">{groupLabel}</p>
      ) : null}
      <ul className="case-onboarding-insights">
        {insights.map((insight) => (
          <li
            className={`case-onboarding-insight-card${
              showIndex ? "" : " case-onboarding-insight-card--plain"
            }`}
            key={insight.index || insight.title}
          >
            {showIndex ? (
              <span className="case-onboarding-insight-index">{insight.index}</span>
            ) : null}
            <h4 className="case-onboarding-insight-title">{insight.title}</h4>
            <p className="case-onboarding-insight-body">{insight.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
