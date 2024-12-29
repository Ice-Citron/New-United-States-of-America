import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import matter from "gray-matter";

// The new MDX approach:
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";  // so MDX can create React elements

import MyCarousel from "./Carousel";

/**
 * ProjectDetailMdx:
 *  - fetches /content/portfolio/engineering/projects/<slug>/index.mdx
 *  - uses gray-matter to extract front matter
 *  - uses @mdx-js/mdx's "evaluate" to compile leftover MDX in the browser
 *  - provides MyCarousel in the "components" prop
 */
export default function ProjectDetailMdx() {
  const { slug } = useParams();

  const [frontMatter, setFrontMatter] = useState({});
  const [mdxBody, setMdxBody] = useState("");
  const [CompiledMDX, setCompiledMDX] = useState(null); // the final MDX component
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMdxFile() {
      try {
        const fileUrl = `/content/portfolio/engineering/projects/${slug}/index.mdx`;
        console.log("[ProjectDetailMdx] fetching =>", fileUrl);

        const resp = await fetch(fileUrl);
        if (!resp.ok) {
          throw new Error(`Failed to fetch MDX for '${slug}': ${resp.status}`);
        }
        const rawText = await resp.text();
        console.log("[ProjectDetailMdx] raw MDX length =>", rawText.length);

        // 1) parse front matter
        const { data, content } = matter(rawText);
        console.log("[ProjectDetailMdx] frontMatter =>", data);

        setFrontMatter(data || {});
        setMdxBody(content || "");
      } catch (err) {
        console.error("[ProjectDetailMdx] Error =>", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadMdxFile();
  }, [slug]);

  // 2) Evaluate the MDX content => produce a React component
  useEffect(() => {
    async function compileMdx() {
      if (!mdxBody) return; // no content yet
      try {
        console.log("[ProjectDetailMdx] evaluate() with length =>", mdxBody.length);

        // The new approach: pass the leftover MDX + the "runtime" from "react/jsx-runtime"
        const { default: MdxComponent } = await evaluate(mdxBody, {
          ...runtime,
          // You can also pass remarkPlugins, rehypePlugins, etc. here if needed
        });

        // MdxComponent is a React component
        setCompiledMDX(() => MdxComponent);
      } catch (err) {
        console.error("[ProjectDetailMdx] compile error =>", err);
        setError(err.message);
      }
    }

    compileMdx();
  }, [mdxBody]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }
  if (loading || !CompiledMDX) {
    return <p>Loading MDX...</p>;
  }

  // "CompiledMDX" is our final React component from the MDX source
  // We pass "MyCarousel" in the "components" prop. 
  // So in .mdx, <MyCarousel> is recognized.
  const MdxOutput = (
    <CompiledMDX
      components={{
        MyCarousel,
        // or any other custom components you want to pass
      }}
    />
  );

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "1rem" }}>
      {/* If you want to show the front matter's title, summary, etc. */}
      {frontMatter.title && <h1>{frontMatter.title}</h1>}
      {frontMatter.summary && <p>{frontMatter.summary}</p>}

      {/* Render the final MDX content */}
      {MdxOutput}
      {/* If you want to show the front matter's title, summary, etc. */}
      {frontMatter.title && <h1>{frontMatter.title}</h1>}
      {frontMatter.summary && <p>{frontMatter.summary}</p>}

      {/* Render the final MDX content */}
      {MdxOutput}
    </div>
  );
}
