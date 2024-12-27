// src/components/portfolio/SkillsShowcase.jsx
import React from "react";

/**
 * Renders an array of skill sections (already parsed from .md).
 * Each item in `skillSections` looks like:
 *   { heading: string, description: string, skills: [ { name, link, ... }, ... ] }
 */
export default function SkillsShowcase({ skillSections = [] }) {
  if (!skillSections.length) {
    return null; // No skill sections => render nothing
  }

  return (
    <div className="my-6">
      {skillSections.map((section, idx) => (
        <SkillSection
          key={idx}
          heading={section.heading}
          description={section.description}
          skills={section.skills}
        />
      ))}
    </div>
  );
}

function SkillSection({ heading, description, skills = [] }) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-1">{heading}</h3>
      {description && <p className="text-sm text-gray-500 mb-3">{description}</p>}

      <div className="po_skills_ho">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="po_skill"
            onClick={() => {
              if (skill.link) {
                window.open(skill.link, "_blank", "noopener,noreferrer");
              }
            }}
          >
            {/* For now, just show name. 
                If you want an icon, add `logo: "/path.png"` in .md, then <img src={skill.logo} /> */}
            <p className="font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
