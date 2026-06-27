type Props = {
  rows: { label: string; value: string }[];
};

export default function CaseOverviewMeta({ rows }: Props) {
  return (
    <dl className="case-overview-meta">
      {rows.map((row) => (
        <div className="case-overview-meta-item" key={row.label}>
          <dt>{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
