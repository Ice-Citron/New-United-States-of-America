import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import matter from "gray-matter";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import MyCarousel from "./Carousel";

// Add the base URL utility function
const getBaseUrl = () => {
  return process.env.NODE_ENV === 'development' 
    ? '' 
    : window.location.origin;
};

// PDF Viewer component remains the same
const PDFViewer = ({ url }) => (
  <div style={{ width: '100%', height: '600px', marginBottom: '1rem' }}>
    <iframe
      src={url}
      style={{ width: '100%', height: '100%', border: 'none' }}
      title="PDF Viewer"
    />
  </div>
);

export default function ProjectDetail() {  // Changed name to match your file
  const { slug } = useParams();

  const [frontMatter, setFrontMatter] = useState({});
  const [mdxBody, setMdxBody] = useState("");
  const [CompiledMDX, setCompiledMDX] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMdxFile() {
      try {
        // Debug logging
        console.log("Current pathname:", window.location.pathname);
        
        // Ensure we have correct slug
        const currentSlug = slug || window.location.pathname.split('/').pop();
        console.log("Using slug:", currentSlug);
        
        // Construct URL carefully
        const fileUrl = new URL(`/content/portfolio/engineering/projects/${currentSlug}/index.mdx`, window.location.origin);
        console.log("Attempting to fetch from:", fileUrl.toString());

        const resp = await fetch(fileUrl);
        if (!resp.ok) {
          throw new Error(`Failed to fetch MDX for '${currentSlug}': ${resp.status}`);
        }
        const rawText = await resp.text();
        console.log("[ProjectDetail] raw MDX length =>", rawText.length);

        const { data, content } = matter(rawText);
        console.log("[ProjectDetail] frontMatter =>", data);

        setFrontMatter(data || {});
        setMdxBody(content || "");
      } catch (err) {
        console.error("[ProjectDetail] Error =>", err);
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