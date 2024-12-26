// ProjectGrid.jsx
import React, { useEffect, useState } from "react";
import matter from "gray-matter";
import CardList from "./CardList";

import { Buffer } from "buffer";
if (!window.Buffer) window.Buffer = Buffer;

const ProjectGrid = ({ category }) => {
  const [subsections, setSubsections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        // Fetch index.md for the chosen category
        const indexPath = `/content/portfolio/${category}/index.md`;
        const indexResp = await fetch(indexPath);
        if (!indexResp.ok) {
          console.error("Failed to fetch index.md:", indexResp.status);
          setLoading(false);
          return;
        }
        const rawIndex = await indexResp.text();
        const { data } = matter(rawIndex);
        if (!data.sections) {
          console.warn("No sections found in index.md");
          setLoading(false);
          return;
        }

        // Fetch each subsection .md
        const loadedSubs = [];
        for (const section of data.sections) {
          const subResp = await fetch(section.path);
          if (!subResp.ok) {
            console.error("Failed to fetch subsection:", section.path);
            continue;
          }
          const subRaw = await subResp.text();
          const { data: subData } = matter(subRaw);

          loadedSubs.push({
            ...subData,
            sectionTitle: section.title,
          });
        }

        setSubsections(loadedSubs);
      } catch (err) {
        console.error("Error loading markdown:", err);
      }
      setLoading(false);
    }
    loadData();
  }, [category]);

  if (loading) return <div>Loading {category}...</div>;
  if (!subsections.length) return <div>No data for {category}.</div>;

  // Render each subsection
  return (
    <>
      {subsections.map((sub, idx) => (
        <div className="subsection-block" key={idx}>
          <h2>{sub.sectionTitle || sub.subsection}</h2>
          
          {/* Projects */}
          {sub.projects?.length > 0 && (
            <>
              <h3>Projects</h3>
              <div className="po_items_ho">
                {sub.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="po_item">
                    <img src={proj.image} alt={proj.title} />
                    <div className="content">
                      <p>{proj.description}</p>
                      {proj.link && <a href={proj.link}>view project</a>}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Render "certifications" array using CardList */}
          {sub.certifications?.length > 0 && (
            <CardList heading="Certifications" items={sub.certifications} />
          )}

          {/* Render "courses" array using CardList */}
          {sub.courses?.length > 0 && (
            <CardList heading="Courses" items={sub.courses} />
          )}

          {/* Render "books" array using CardList */}
          {sub.books?.length > 0 && (
            <CardList heading="Books" items={sub.books} />
          )}
        </div>
      ))}
    </>
  );
};

export default ProjectGrid;
