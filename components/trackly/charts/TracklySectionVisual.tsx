import TracklyBusinessCase from "./TracklyBusinessCase";
import TracklyCausalDiagram from "./TracklyCausalDiagram";
import TracklyConfidenceChart from "./TracklyConfidenceChart";
import TracklyDesignTree from "./TracklyDesignTree";
import TracklyDonutRow, { DonutStat } from "./TracklyDonutRow";
import TracklyJourneyMap from "./TracklyJourneyMap";
import TracklyMeasurableDimensions from "./TracklyMeasurableDimensions";
import TracklyProblemScale from "./TracklyProblemScale";
import TracklySystemDiagram from "./TracklySystemDiagram";
import TracklyUsabilityResults from "./TracklyUsabilityResults";

export type TracklyVisual =
  | "problem-scale"
  | "secondary-donuts"
  | "journey-map"
  | "causal-diagram"
  | "design-tree"
  | "system-diagram"
  | "confidence-chart"
  | "usability-results"
  | "measurable-dimensions"
  | "business-case";

const secondaryDonuts: DonutStat[] = [
  {
    percent: 41,
    emphasis: "41%",
    text: "of Americans have experienced package theft in their lifetime, up from 35% in 2022 and still rising",
  },
  {
    percent: 73,
    emphasis: "73%",
    text: "of people who have experienced theft report another incident within the past year",
  },
  {
    center: "3×",
    percent: 100,
    emphasis: "3×+",
    text: "higher package-theft likelihood for apartment residents vs. single-family homeowners",
  },
];

const packageTheftSource =
  "Sources: Security.org and Capital One Shopping annual package theft reports.";

type Props = {
  visual: TracklyVisual;
  metric?: { before: string; after: string };
};

export default function TracklySectionVisual({ visual, metric }: Props) {
  switch (visual) {
    case "problem-scale":
      return <TracklyProblemScale />;
    case "secondary-donuts":
      return (
        <TracklyDonutRow items={secondaryDonuts} source={packageTheftSource} />
      );
    case "journey-map":
      return <TracklyJourneyMap />;
    case "causal-diagram":
      return <TracklyCausalDiagram />;
    case "design-tree":
      return <TracklyDesignTree />;
    case "system-diagram":
      return <TracklySystemDiagram />;
    case "confidence-chart":
      return (
        <TracklyConfidenceChart
          after={metric ? Number(metric.after) : 4.5}
          before={metric ? Number(metric.before) : 3}
          label={
            metric
              ? `Confidence that a package was safe: ${metric.before} → ${metric.after} (1 = not safe at all · 7 = very safe)`
              : undefined
          }
          max={7}
        />
      );
    case "usability-results":
      return (
        <TracklyUsabilityResults
          trustAfter={metric ? Number(metric.after) : 4.5}
          trustBefore={metric ? Number(metric.before) : 3}
          trustMax={7}
        />
      );
    case "measurable-dimensions":
      return <TracklyMeasurableDimensions />;
    case "business-case":
      return <TracklyBusinessCase />;
    default:
      return null;
  }
}
