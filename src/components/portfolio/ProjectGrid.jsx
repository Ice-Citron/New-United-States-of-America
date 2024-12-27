// src/components/portfolio/ProjectGrid.jsx
import React, { useEffect, useState } from "react";
import matter from "gray-matter";
import { Buffer } from "buffer";
import SkillsShowcase from "./SkillsShowcase";

if (!window.Buffer) window.Buffer = Buffer;

const ProjectGrid = ({ category }) => {
  const [subsections, setSubsections] = useState([]);
  const [skillSections, setSkillSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      setError(null);

      try {
        // 1) Fetch and parse index.md
        const indexPath = `/content/portfolio/${category}/index.md`;
        const indexResp = await fetch(indexPath);
        if (!indexResp.ok) {
          throw new Error(`Failed to fetch index.md: ${indexResp.status}`);
        }
        const rawIndex = await indexResp.text();
        const { data: indexData } = matter(rawIndex);

        // 2) Load subsections
        let loadedSubs = [];
        if (indexData.sections) {
          for (const section of indexData.sections) {
            try {
              const subResp = await fetch(section.path);
              if (!subResp.ok) {
                console.error(`Subsection fetch failed: ${section.path}`);
                continue;
              }
              const subRaw = await subResp.text();
              const { data: subData } = matter(subRaw);

              loadedSubs.push({
                ...subData,
                sectionTitle: section.title,
              });
            } catch (subErr) {
              console.error("Error fetching subsection:", subErr);
            }
          }
        } else {
          console.warn("No 'sections' found in index.md");
        }

        // 3) Load skills.md if present
        let loadedSkillSections = [];
        if (indexData.skills?.path) {
          try {
            const skillsPath = indexData.skills.path;
            const skillsResp = await fetch(skillsPath);
            if (skillsResp.ok) {
              const rawSkills = await skillsResp.text();
              const { data: skillsData } = matter(rawSkills);
              loadedSkillSections = skillsData.skill_sections || [];
            } else {
              console.warn(
                "No skills.md found or fetch error:",
                skillsResp.status
              );
            }
          } catch (skillsErr) {
            console.warn("Error fetching skills.md:", skillsErr);
          }
        }

        setSubsections(loadedSubs);
        setSkillSections(loadedSkillSections);
      } catch (err) {
        console.error("Error loading markdown:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [category]);

  if (loading) {
    return <div>Loading {category}...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
  }

  if (!subsections.length && !skillSections.length) {
    return <div>No data found for {category}.</div>;
  }

  return (
    <div className="p-4">
      {/* 1) Normal Subsections (Projects, etc.) */}
      {subsections.map((sub, idx) => (
        <div className="subsection-block" key={idx}>
          <h2 className="text-2xl font-semibold mb-2">
            {sub.sectionTitle || sub.subsection}
          </h2>

          {/* Projects */}
          {sub.projects?.length > 0 && (
            <>
              <h3 className="text-xl font-medium mb-2">Projects</h3>
              <div className="po_items_ho mb-4">
                {sub.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="po_item">
                    <img src={proj.image} alt={proj.title} />
                    <div className="content">
                      <p>{proj.description}</p>
                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          view project
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* (Certifications, Courses, Books) similarly... */}
          {/* ... */}
        </div>
      ))}

      {/* 2) Skills at the BOTTOM */}
      {skillSections.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            My Skills &amp; Tools
          </h2>
          <SkillsShowcase skillSections={skillSections} />
        </>
      )}
    </div>
  );
};

export default ProjectGrid;
