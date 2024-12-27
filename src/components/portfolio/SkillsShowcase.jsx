// src/components/portfolio/SkillsShowcase.jsx

import React from "react";

/**
 * This component receives `skillSections` from your .md file (skill_sections: ...).
 * Each section has: heading, description, and an array of skills (with name, logo, link).
 */
export default function SkillsShowcase({ skillSections = [] }) {
  // If no skill sections, render nothing.
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
 * Renders a single skill section:
 *  - heading
 *  - optional description
 *  - a grid of `.po_skill` squares (90×90) in `.po_skills_ho`,
 *    each with a `.content` overlay that shows skill name on hover, 
 *    exactly like your project boxes.
 */
function SkillSection({ heading, description, skills = [] }) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-1">{heading}</h3>
      {description && (
        <p className="text-sm text-gray-500 mb-3">{description}</p>
      )}

      {/* Use your .po_skills_ho for the auto-fill grid */}
      <div className="po_skills_ho">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="po_skill relative group"
            // The .po_skill rules in your CSS make it 90×90, etc.
            onClick={() => {
              if (skill.link) {
                window.open(skill.link, "_blank", "noopener,noreferrer");
              }
            }}
          >
            {/* Full-size image */}
            <img
              src={skill.logo}
              alt={skill.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "0.3s ease",
              }}
            />

            {/* The .content overlay (hover effect) 
                You already have .po_item .content in your CSS,
                but we'll rely on the same approach here: 
                .po_skill .content will have the same logic. 
            */}
            <div
              className="content flex items-center justify-center text-center"
              style={{
                // We rely on your existing .content rules 
                // that animate from width/height 0 -> 100%, 
                // so no extra style needed except a fallback or tweak if you want.
              }}
            >
              {/* This text is shown only on hover, per your .po_item:hover .content logic */}
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
