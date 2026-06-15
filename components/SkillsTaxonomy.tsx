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
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
    <div className="skills-taxonomy">
      <header className="skills-taxonomy-hub">
        <h3 className="skills-taxonomy-hero">Technical &amp; Creative Range</h3>
      </header>

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
                onClick={() => handleToggle(group.id)}
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
  );
}
