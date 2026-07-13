import type { ReactNode } from "react";
import type { medicalResearch } from "@/data/medical-detail";
import styles from "./MedicalSections.module.css";

type Persona = NonNullable<(typeof medicalResearch.lines)[0]["persona"]> & {
  mrFluency?: { label: string; level: number }[];
  clinicalReadiness?: { label: string; level: number }[];
  frustrations?: string[];
  summary?: string;
};
type DemographicIcon = Persona["demographics"][number]["icon"];

function PersonaIcon({ type }: { type: DemographicIcon }) {
  const props = {
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    className: styles.researchPersonaDemographicIcon,
  } as const;

  if (type === "experience") {
    return (
      <svg {...props}>
        <circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "location") {
    return (
      <svg {...props}>
        <path
          d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="11" r="2" fill="currentColor" />
      </svg>
    );
  }

  if (type === "role") {
    return (
      <svg {...props}>
        <rect
          x="4"
          y="8"
          width="16"
          height="11"
          rx="1.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M9 8V6.5A3 3 0 0 1 15 6.5V8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path
        d="M4 10 12 4l8 6v9a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PersonaRatingDots({ level }: { level: number }) {
  return (
    <span className={styles.researchPersonaDots} aria-label={`${level} out of 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={`${styles.researchPersonaDot}${
            index < level ? ` ${styles.researchPersonaDotFilled}` : ""
          }`}
        />
      ))}
    </span>
  );
}

function PersonaRatingBlock({
  title,
  items,
}: {
  title: string;
  items: { label: string; level: number }[];
}) {
  return (
    <section className={styles.researchPersonaSection}>
      <h6 className={styles.researchPersonaSectionTitle}>{title}</h6>
      <ul className={styles.researchPersonaRatingList}>
        {items.map((item) => (
          <li className={styles.researchPersonaRatingItem} key={item.label}>
            <span className={styles.researchPersonaRatingLabel}>{item.label}</span>
            <PersonaRatingDots level={item.level} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function PersonaTextBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.researchPersonaSection}>
      <h6 className={styles.researchPersonaSectionTitle}>{title}</h6>
      {children}
    </section>
  );
}

export function MedicalResearchPersona({ persona }: { persona: Persona }) {
  const hasAside = Boolean(
    persona.mrFluency?.length ||
      persona.clinicalReadiness?.length ||
      persona.frustrations?.length,
  );

  return (
    <article
      className={`${styles.researchPersona}${
        !hasAside ? ` ${styles.researchPersonaCompact}` : ""
      }`}
    >
      {persona.photo ? (
        <figure className={styles.researchPersonaPhoto}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={persona.photo.src}
            alt={persona.photo.alt}
            className={styles.researchPersonaPhotoImage}
            loading="lazy"
            decoding="async"
          />
        </figure>
      ) : null}

      <div className={styles.researchPersonaContent}>
        <div className={styles.researchPersonaCenter}>
          <h5 className={styles.researchPersonaName}>{persona.name}</h5>
          <ul className={styles.researchPersonaDemographics}>
            {persona.demographics.map((item) => (
              <li className={styles.researchPersonaDemographic} key={item.label}>
                <PersonaIcon type={item.icon} />
                <span className={styles.researchPersonaDemographicCopy}>
                  <strong>{item.label}:</strong> {item.value}
                </span>
              </li>
            ))}
          </ul>

          <PersonaTextBlock title="Bio">
            <p className={styles.researchPersonaBio}>{persona.bio}</p>
          </PersonaTextBlock>

          <PersonaTextBlock title="Wants &amp; Needs">
            <ul className={styles.researchPersonaList}>
              {persona.wants.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </PersonaTextBlock>
        </div>

        {persona.mrFluency?.length ||
        persona.clinicalReadiness?.length ||
        persona.frustrations?.length ? (
          <div className={styles.researchPersonaAside}>
            {persona.mrFluency?.length ? (
              <PersonaRatingBlock title="MR Fluency" items={persona.mrFluency} />
            ) : null}
            {persona.clinicalReadiness?.length ? (
              <PersonaRatingBlock
                title="Clinical Readiness"
                items={persona.clinicalReadiness}
              />
            ) : null}
            {persona.frustrations?.length ? (
              <PersonaTextBlock title="Frustrations">
                <ul className={styles.researchPersonaList}>
                  {persona.frustrations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </PersonaTextBlock>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
