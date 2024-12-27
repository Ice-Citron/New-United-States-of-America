// src/components/portfolio/SkillsShowcase.jsx
import React from "react";

/**
 * Renders skillSections from your .md ( skill_sections: ... ).
 * Each `section` has `heading`, `description`, and `skills` array.
 */
export default function SkillsShowcase({ skillSections = [] }) {
  if (!skillSections.length) return null;

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

/**
 * One skill section => heading, optional description, and .po_skills_ho container
 */
function SkillSection({ heading, description, skills = [] }) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-1">{heading}</h3>
      {description && <p className="text-sm text-gray-500 mb-3">{description}</p>}

      {/* Container for skill squares */}
      <div className="po_skills_ho">
        {skills.map((skill, i) => (
          <SkillItem key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
}

/**
 * Each skill => .po_skill box with an image.
 * The `.content` overlay is only visible on hover (thanks to your CSS).
 */
function SkillItem({ skill }) {
  const handleClick = () => {
    if (skill.link) {
      window.open(skill.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="po_skill" onClick={handleClick}>
      {/* Full-size image filling the 90×90 box */}
      <img
        src={skill.logo}
        alt={skill.name}
      />

      {/* 
        The overlay: no text is shown until .po_skill:hover .content 
        expands + opacity => 1 
      */}
      <div className="content">
        <p style={{ margin: 0, fontSize: "12px" }}>{skill.name}</p>
      </div>
    </div>
  );
}
