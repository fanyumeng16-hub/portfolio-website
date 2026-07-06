import styles from "./TracklyDonutChart.module.css";

type Props = {
  percent?: number;
  center?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
};

export default function TracklyDonutChart({
  percent = 100,
  center,
  label,
  size = "md",
}: Props) {
  const radius = size === "sm" ? 52 : size === "lg" ? 92 : 82;
  const stroke = size === "sm" ? 16 : size === "lg" ? 28 : 26;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (percent / 100) * circumference;
  const viewBox = radius * 2 + 8;
  const centerLabel = center ?? `${percent}%`;
  const isCompactCenter = centerLabel.length > 4;

  return (
    <div className={`${styles.wrap} ${styles[size]}`}>
      <svg
        aria-hidden={label ? undefined : true}
        className={styles.svg}
        role={label ? "img" : undefined}
        viewBox={`0 0 ${viewBox} ${viewBox}`}
        aria-label={label ? `${centerLabel} ${label}` : undefined}
      >
        <circle
          cx={viewBox / 2}
          cy={viewBox / 2}
          fill="none"
          r={normalizedRadius}
          stroke="#d6e0ff"
          strokeWidth={stroke}
        />
        <circle
          cx={viewBox / 2}
          cy={viewBox / 2}
          fill="none"
          r={normalizedRadius}
          stroke="#4a69e2"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
          strokeWidth={stroke}
          transform={`rotate(-90 ${viewBox / 2} ${viewBox / 2})`}
        />
        <text
          className={isCompactCenter ? `${styles.value} ${styles.valueCompact}` : styles.value}
          dominantBaseline="middle"
          textAnchor="middle"
          x={viewBox / 2}
          y={viewBox / 2}
        >
          {centerLabel}
        </text>
      </svg>
      {label ? <span className={styles.label}>{label}</span> : null}
    </div>
  );
}
