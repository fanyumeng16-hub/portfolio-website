import { CaseOnboardingInsight } from "@/data/medical-content";

type Props = {
  insights: CaseOnboardingInsight[];
};

export default function CaseOnboardingInsightCards({ insights }: Props) {
  return (
    <ul className="case-onboarding-insights">
      {insights.map((insight) => (
        <li className="case-onboarding-insight-card" key={insight.index}>
          <span className="case-onboarding-insight-index">{insight.index}</span>
          <h4 className="case-onboarding-insight-title">{insight.title}</h4>
          <p className="case-onboarding-insight-body">{insight.body}</p>
        </li>
      ))}
    </ul>
  );
}
