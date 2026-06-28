type Props = {
  percent: number;
};

export default function TracklyDonut({ percent }: Props) {
  const radius = 56;
  const stroke = 20;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="trackly-donut" aria-hidden="true">
      <svg viewBox="0 0 120 120" role="img" aria-label={`${percent} percent`}>
        <circle
          cx="60"
          cy="60"
          r={normalizedRadius}
          fill="none"
          stroke="#d1e0ff"
          strokeWidth={stroke}
        />
        <circle
          cx="60"
          cy="60"
          r={normalizedRadius}
          fill="none"
          stroke="#4a69e2"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
        />
        <text
          x="60"
          y="66"
          textAnchor="middle"
          className="trackly-donut-label"
        >
          {percent}%
        </text>
      </svg>
    </div>
  );
}
