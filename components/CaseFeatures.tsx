"use client";

import { useState } from "react";

export type CaseFeatureIcon =
  | "habitat"
  | "rover"
  | "operations"
  | "play"
  | "family"
  | "support"
  | "brand"
  | "training"
  | "workflow";

export type CaseFeature = {
  title: string;
  description: string;
  icon: CaseFeatureIcon;
};

type Props = {
  heading: string;
  subheading: string;
  features: CaseFeature[];
  sectionId?: string;
};

function FeatureIcon({ icon }: { icon: CaseFeatureIcon }) {
  if (icon === "habitat") {
    return (
      <svg
        className="case-feature-icon"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 24V12L16 6L26 12V24"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path d="M11 24V17H21V24" stroke="currentColor" strokeWidth="1.25" />
        <path d="M16 6V12" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    );
  }

  if (icon === "rover") {
    return (
      <svg
        className="case-feature-icon"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="10" cy="22" r="3" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="22" cy="22" r="3" stroke="currentColor" strokeWidth="1.25" />
        <path
          d="M7 19H25L22 13H10L7 19Z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
        <path d="M14 13V10H18V13" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    );
  }

  if (icon === "play") {
    return (
      <svg className="case-feature-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="7" y="9" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.25" />
        <path d="M14 13L20 16L14 19V13Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "family") {
    return (
      <svg className="case-feature-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="11" cy="12" r="3" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="21" cy="12" r="3" stroke="currentColor" strokeWidth="1.25" />
        <path d="M6 24C6.5 20 8.5 18 11 18C13.2 18 14.5 19.5 16 19.5C17.5 19.5 18.8 18 21 18C23.5 18 25.5 20 26 24" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    );
  }

  if (icon === "support") {
    return (
      <svg className="case-feature-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 7C11.5 7 8 10.5 8 15V19L6 21V23H26V21L24 19V15C24 10.5 20.5 7 16 7Z" stroke="currentColor" strokeWidth="1.25" />
        <path d="M13 26C13.8 27.2 14.8 28 16 28C17.2 28 18.2 27.2 19 26" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    );
  }

  if (icon === "brand") {
    return (
      <svg className="case-feature-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="8" y="8" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.25" />
        <path d="M12 20L16 10L20 20" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
        <path d="M13.5 17H18.5" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    );
  }

  if (icon === "training") {
    return (
      <svg className="case-feature-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1.25" />
        <path d="M16 11V16L19 18" stroke="currentColor" strokeWidth="1.25" />
        <path d="M11 16H21" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    );
  }

  if (icon === "workflow") {
    return (
      <svg className="case-feature-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="9" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.25" />
        <rect x="18" y="9" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.25" />
        <rect x="12" y="19" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.25" />
        <path d="M10 15V17H22V19" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    );
  }

  return (
    <svg
      className="case-feature-icon"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1.25" />
      <path d="M16 7V16L21 19" stroke="currentColor" strokeWidth="1.25" />
      <path d="M7 16H25" stroke="currentColor" strokeWidth="1.25" />
      <path d="M16 7L19 10" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

export default function CaseFeatures({
  heading,
  subheading,
  features,
  sectionId = "case-modules",
}: Props) {
  const [active, setActive] = useState(0);

  return (
    <section className="case-features" id={sectionId}>
      <div className="case-features-inner">
        <header className="case-features-header">
          <h2 className="case-features-heading">{heading}</h2>
          <p className="case-features-subheading">{subheading}</p>
        </header>

        <div className="case-features-grid">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`case-feature-card ${
                active === index ? "is-active" : ""
              }`}
              onMouseEnter={() => setActive(index)}
            >
              <FeatureIcon icon={feature.icon} />
              <h3 className="case-feature-title">{feature.title}</h3>
              <p className="case-feature-desc">{feature.description}</p>
              <span className="case-feature-arrow" aria-hidden="true">
                ↘
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
