import styles from "./TracklyJourneyMap.module.css";

const stages = [
  {
    label: "Order Placement",
    shortLabel: "Order",
    people: 1,
    pain: "Unable to choose courier; limited delivery options",
  },
  {
    label: "Carrier Transit",
    shortLabel: "Transit",
    people: 1,
    pain: "Tracking delays; package status not updated for hours",
  },
  {
    label: "Out for Delivery",
    shortLabel: "Out for delivery",
    people: 3,
    pain: "No ETA or courier contact; delivery timing unclear",
  },
  {
    label: "Delivery Attempt",
    shortLabel: "Attempt",
    people: 2,
    pain: "Package left unsecured; no ID verification by courier",
  },
  {
    label: "Problem Resolution",
    shortLabel: "Resolution",
    people: 4,
    pain: "No system alert for delivery issues; users discover problems themselves",
  },
];

/** Trust level 0–100 at each stage (emotional trust line) */
const trustPoints = [78, 68, 42, 38, 18];

function buildPath(
  points: number[],
  width: number,
  height: number,
  padX: number,
  padY: number,
) {
  const stepX = (width - padX * 2) / (points.length - 1);
  return points
    .map((value, index) => {
      const x = padX + index * stepX;
      const y = padY + ((100 - value) / 100) * (height - padY * 2);
      return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

function PeopleIcons({ count }: { count: number }) {
  return (
    <span aria-hidden className={styles.people}>
      {Array.from({ length: count }, (_, index) => (
        <svg
          className={styles.person}
          fill="none"
          key={index}
          viewBox="0 0 16 20"
        >
          <circle cx="8" cy="5" fill="#4a69e2" r="4" />
          <path d="M2 19c0-4 2.5-6 6-6s6 2 6 6" fill="#4a69e2" />
        </svg>
      ))}
    </span>
  );
}

export default function TracklyJourneyMap() {
  const width = 880;
  const height = 240;
  const padX = 48;
  const padY = 28;
  const stepX = (width - padX * 2) / (trustPoints.length - 1);
  const trustPath = buildPath(trustPoints, width, height, padX, padY);

  return (
    <figure className={styles.root}>
      <figcaption className={styles.title}>Journey Map</figcaption>

      <div className={styles.timeline}>
        <div aria-hidden className={styles.timelineRail} />
        <ol className={styles.timelineStages}>
          {stages.map((stage) => (
            <li className={styles.timelineStage} key={stage.label}>
              <span className={styles.stagePill}>{stage.label}</span>
              <PeopleIcons count={stage.people} />
              <p className={styles.stagePain}>{stage.pain}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.chartWrap}>
        <div className={styles.yAxis} aria-hidden="true">
          <span>High trust</span>
          <span>Uncertainty</span>
          <span>Crisis</span>
        </div>

        <div className={styles.chartArea}>
          <svg
            aria-label="Trust declines across five delivery stages with sharp drops while waiting and when support does not respond"
            className={styles.chart}
            role="img"
            viewBox={`0 0 ${width} ${height}`}
          >
            <rect
              fill="rgba(214, 224, 255, 0.35)"
              height={height * 0.34}
              width={width - padX}
              x={padX}
              y={padY}
            />
            <rect
              fill="rgba(255, 240, 240, 0.55)"
              height={height * 0.38}
              width={width - padX}
              x={padX}
              y={height - padY - height * 0.38}
            />

            <rect
              fill="rgba(232, 107, 107, 0.1)"
              height={height - padY * 2}
              rx="8"
              width={stepX * 0.85}
              x={padX + stepX * 1.35}
              y={padY}
            />
            <rect
              fill="rgba(232, 107, 107, 0.14)"
              height={height - padY * 2}
              rx="8"
              width={stepX * 0.9}
              x={padX + stepX * 3.55}
              y={padY}
            />

            {[0.25, 0.5, 0.75].map((ratio) => (
              <line
                key={ratio}
                stroke="rgba(17, 67, 144, 0.08)"
                strokeWidth="1"
                x1={padX}
                x2={width - 16}
                y1={padY + ratio * (height - padY * 2)}
                y2={padY + ratio * (height - padY * 2)}
              />
            ))}

            <path
              d={trustPath}
              fill="none"
              stroke="#4a69e2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3.5"
            />

            {trustPoints.map((value, index) => {
              const x = padX + index * stepX;
              const y = padY + ((100 - value) / 100) * (height - padY * 2);
              const isDrop = index === 2 || index === 4;

              return (
                <g key={stages[index].label}>
                  <circle
                    cx={x}
                    cy={y}
                    fill={isDrop ? "#e86b6b" : "#4a69e2"}
                    r="7"
                  />
                  <circle cx={x} cy={y} fill="#fff" r="3" />
                </g>
              );
            })}

            <text
              fill="#e86b6b"
              fontSize="13"
              fontWeight="700"
              x={padX + stepX * 1.55}
              y={padY + 16}
            >
              Waiting for days
            </text>
            <text
              fill="#e86b6b"
              fontSize="13"
              fontWeight="700"
              x={padX + stepX * 3.65}
              y={padY + 16}
            >
              No respond
            </text>
          </svg>

          <ul className={styles.xAxis}>
            {stages.map((stage) => (
              <li className={styles.xLabel} key={stage.shortLabel}>
                {stage.shortLabel}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className={styles.caption}>
        <span className={styles.captionCapsule}>
          Trust mapped across five delivery stages; sharpest drops while waiting
          days with no update, and when something goes wrong with no escalation.
        </span>
      </p>
    </figure>
  );
}
