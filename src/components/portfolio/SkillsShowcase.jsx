import React from "react";

export default function SkillsShowcase({ skillSections = [] }) {
  if (!skillSections.length) return null;

  return (
    <div className="skills-showcase">
      {skillSections.map((section, idx) => (
        <div key={idx} className="skill-category">
          <h3 className="skill-category-title">{section.heading}</h3>
          <div className="skill-tags">
            {section.skills.map((skill, i) => (
              <span key={i} className={`skill-tag ${skill.level || ""}`}>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
