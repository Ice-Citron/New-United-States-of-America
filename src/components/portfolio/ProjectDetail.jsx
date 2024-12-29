// src/components/portfolio/ProjectDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function ProjectDetail() {
  const { slug } = useParams();
  const [frontMatter, setFrontMatter] = useState({});
  const [markdownContent, setMarkdownContent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        // e.g. /content/portfolio/engineering/projects/railgun/index.md
        const resp = await fetch(`/content/portfolio/engineering/projects/${slug}/index.md`);
        if (!resp.ok) {
          throw new Error(`Failed to fetch detail for '${slug}': ${resp.status}`);
        }
        const raw = await resp.text();
        const { data, content } = matter(raw);
        setFrontMatter(data);
        setMarkdownContent(content);
      } catch (err) {
        setError(err.message);
      }
    }
    loadData();
  }, [slug]);

  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;
  if (!markdownContent) return <div>Loading project detail...</div>;

  // We'll rewrite relative images from "./images/foo.jpg" to
  // "/content/portfolio/engineering/projects/<slug>/images/foo.jpg".
  // For example, if MD has "![text](./images/IMG_4963.jpg)",
  // that becomes "/content/portfolio/engineering/projects/railgun/images/IMG_4963.jpg".
  function rewriteUrl(url, node) {
    // If it's already absolute (starts with "/" or "http"),
    // we leave it alone:
    if (url.startsWith("/") || url.startsWith("http")) {
      return url;
    }

    // If it's a relative path (like "./images/foo.jpg"), we prefix
    // the known path:
    return `/content/portfolio/engineering/projects/${slug}/${url}`;
  }

  return (
    <div style={{ padding: "1rem" }}>
      {frontMatter?.title && <h1>{frontMatter.title}</h1>}
      {frontMatter?.summary && <p>{frontMatter.summary}</p>}

      <ReactMarkdown
        rehypePlugins={[rehypeRaw]} // allow raw HTML (video/iframe)
        urlTransform={rewriteUrl}
      >
        {markdownContent}
      </ReactMarkdown>

      {frontMatter?.skills?.length > 0 && (
        <>
          <h3>Skills Involved:</h3>
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
