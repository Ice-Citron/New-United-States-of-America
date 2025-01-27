import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import matter from "gray-matter";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import MyCarousel from "./Carousel";


// Add simple PDF Viewer component
const PDFViewer = ({ url }) => (
  <div style={{ width: '100%', height: '600px', marginBottom: '1rem' }}>
    <iframe
      src={url}
      style={{ width: '100%', height: '100%', border: 'none' }}
      title="PDF Viewer"
    />
  </div>
);

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
        PDFViewer, // Add PDFViewer to available components
      }}
    />
  );

  return (
    <div style={{ 
      maxWidth: "1200px", 
      margin: "0 auto", 
      padding: "0.5rem",  // Reduced padding
    }}>
      <div style={{ marginBottom: '1rem' }}> {/* Reduced margin for header */}
        {frontMatter.title && (
          <h1 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold',
            marginBottom: '0.5rem' 
          }}>
            {frontMatter.title}
          </h1>
        )}
        {frontMatter.summary && (
          <p style={{ 
            fontSize: '1.1rem',
            marginBottom: '0.5rem'
          }}>
            {frontMatter.summary}
          </p>
        )}
      </div>

      {/* Show PDF if specified in frontmatter */}
      {frontMatter.pdfUrl && (
        <PDFViewer url={frontMatter.pdfUrl} />
      )}

      {/* Main content with reduced spacing */}
      <div style={{ lineHeight: 1.4 }}>
        {MdxOutput}
      </div>
    </div>
  );
}