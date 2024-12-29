// /components/portfolio/ProjectDetail.jsx
import React, { useEffect, useState } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

export default function ProjectDetail({ slug }) {
  const [frontMatter, setFrontMatter] = useState({});
  const [markdownContent, setMarkdownContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        // e.g. /content/portfolio/engineering/projects/railgun/index.md
        const resp = await fetch(`/content/portfolio/engineering/projects/${slug}/index.md`);
        if (!resp.ok) throw new Error(`Cannot fetch detail: ${resp.status}`);
        const raw = await resp.text();
        const { data, content } = matter(raw);
        setFrontMatter(data);
        setMarkdownContent(content);
      } catch (err) {
        console.error("Detail fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [slug]);

  if (loading) return <div>Loading project detail...</div>;
  if (!markdownContent) return <div>No detail found for {slug}</div>;

  return (
    <div className="project-detail" style={{ padding: "1rem" }}>
      {frontMatter.title && <h1>{frontMatter.title}</h1>}
      {frontMatter.summary && <p>{frontMatter.summary}</p>}

      <ReactMarkdown>{markdownContent}</ReactMarkdown>

      {frontMatter.skills && (
        <>
          <h3>Skills Used:</h3>
          <ul>
            {frontMatter.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
