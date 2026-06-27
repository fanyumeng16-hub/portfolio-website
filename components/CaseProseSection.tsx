import { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  paragraphs?: string[];
  capabilities?: string[];
  children?: ReactNode;
};

export default function CaseProseSection({
  id,
  title,
  paragraphs = [],
  capabilities = [],
  children,
}: Props) {
  return (
    <section className="case-prose-section" id={id}>
      <div className="case-prose-inner">
        <h3 className="case-prose-title">{title}</h3>
        {paragraphs.map((paragraph, index) => (
          <p className="case-prose-body" key={index}>
            {paragraph}
          </p>
        ))}
        {capabilities.length > 0 ? (
          <ul className="case-role-capabilities tag-bar tag-bar--static">
            {capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        ) : null}
        {children}
      </div>
    </section>
  );
}
