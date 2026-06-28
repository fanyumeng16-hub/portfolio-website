type MetaRow = { label: string; value: string };

type Props = {
  rows: MetaRow[];
  layout?: "inline" | "stack" | "hero";
};

function splitHeroRows(rows: MetaRow[]) {
  const role = rows.find((row) => row.label === "Role");
  const focus = rows.find((row) => row.label === "Focus");

  if (role && focus) {
    return {
      pair: [role, focus],
      rest: rows.filter(
        (row) => row.label !== "Role" && row.label !== "Focus",
      ),
    };
  }

  return {
    pair: rows.slice(0, 2),
    rest: rows.slice(2),
  };
}

function MetaItem({ row }: { row: MetaRow }) {
  return (
    <div className="case-overview-meta-item">
      <dt>{row.label}</dt>
      <dd>{row.value}</dd>
    </div>
  );
}

export default function CaseOverviewMeta({
  rows,
  layout = "inline",
}: Props) {
  if (layout === "hero") {
    const { pair, rest } = splitHeroRows(rows);

    return (
      <dl className="case-overview-meta case-overview-meta--hero">
        {pair.length ? (
          <div className="case-overview-meta-pair">
            {pair.map((row) => (
              <MetaItem row={row} key={row.label} />
            ))}
          </div>
        ) : null}
        {rest.length ? (
          <div className="case-overview-meta-rest">
            {rest.map((row) => (
              <MetaItem row={row} key={row.label} />
            ))}
          </div>
        ) : null}
      </dl>
    );
  }

  return (
    <dl
      className={`case-overview-meta ${
        layout === "stack" ? "case-overview-meta--stack" : ""
      }`}
    >
      {rows.map((row) => (
        <MetaItem row={row} key={row.label} />
      ))}
    </dl>
  );
}
