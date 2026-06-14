"use client";

import { useState } from "react";
import { skillGroups, type SkillGroup } from "@/data/skill-groups";

function SkillList({ group }: { group: SkillGroup }) {
  return (
    <ul className="skills-taxonomy-skills">
      {group.skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}

export default function SkillsTaxonomy() {
  const [activeId, setActiveId] = useState(skillGroups[0]?.id ?? "");

  return (
    <div className="skills-taxonomy">
      <header className="skills-taxonomy-hub">
        <h3 className="skills-taxonomy-hero">Technical &amp; Creative Range</h3>
        <p className="skills-taxonomy-hero-sub">
          UX research, immersive systems, and physical prototyping — from
          healthcare and XR to AI product and installation work.
        </p>
      </header>

      <div className="skills-taxonomy-tree">
        <svg
          className="skills-taxonomy-trunk"
          viewBox="0 0 1000 72"
          fill="none"
          aria-hidden="true"
        >
          <path d="M500 4V28" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
          <path
            d="M500 28L167 68"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
          />
          <path
            d="M500 28L500 68"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
          />
          <path
            d="M500 28L833 68"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
          />
        </svg>

        <div className="skills-taxonomy-columns">
          {skillGroups.map((group) => {
            const isActive = activeId === group.id;

            return (
              <div
                key={group.id}
                className={`skills-taxonomy-column ${
                  isActive ? "is-active" : ""
                }`}
              >
                <button
                  type="button"
                  className="skills-taxonomy-trigger"
                  aria-expanded={isActive}
                  onClick={() => setActiveId(group.id)}
                >
                  <span className="skills-taxonomy-index">{group.number}</span>
                  <span className="skills-taxonomy-column-title">
                    {group.title}
                  </span>
                  <span className="skills-taxonomy-column-subtitle">
                    {group.subtitle}
                  </span>
                </button>

                {isActive && (
                  <div className="skills-taxonomy-expand">
                    <SkillList group={group} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
