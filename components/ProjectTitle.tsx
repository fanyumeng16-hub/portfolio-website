type Props = {
  title: string;
};

export default function ProjectTitle({ title }: Props) {
  const scadMatch = title.match(/^(.*Scad)(pro|Serve)$/i);

  if (scadMatch) {
    return (
      <>
        {scadMatch[1]}
        <span className="brand-lowercase">{scadMatch[2].toLowerCase()}</span>
      </>
    );
  }

  return <>{title}</>;
}
