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

// Google Slides Embed component
const GoogleSlides = ({ url, height = 569 }) => {
  // Convert share URL to embed URL
  // From: https://docs.google.com/presentation/d/ID/edit...
  // To: https://docs.google.com/presentation/d/ID/embed
  const embedUrl = url.replace(/\/edit.*$/, '/embed?start=false&loop=false&delayms=3000');

  return (
    <div style={{
      width: '100%',
      marginBottom: '1rem',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}>
      <iframe
        src={embedUrl}
        style={{
          width: '100%',
          height: `${height}px`,
          border: 'none',
        }}
        allowFullScreen={true}
        title="Google Slides Presentation"
      />
    </div>
  );
};

// Document Link Box component for external documents
const DocumentLink = ({ href, title, description, icon = "📄" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '1rem 1.25rem',
      margin: '1rem 0',
      backgroundColor: 'var(--bg-secondary, #f8f9fa)',
      border: '1px solid var(--border-color, #dee2e6)',
      borderRadius: '8px',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'all 0.2s ease',
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      e.currentTarget.style.borderColor = 'var(--primary-color, #4a90d9)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
      e.currentTarget.style.borderColor = 'var(--border-color, #dee2e6)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    <span style={{
      fontSize: '2rem',
      marginRight: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '48px',
      height: '48px',
      backgroundColor: 'var(--bg-tertiary, #e9ecef)',
      borderRadius: '8px',
    }}>
      {icon}
    </span>
    <div style={{ flex: 1 }}>
      <div style={{
        fontWeight: '600',
        fontSize: '1rem',
        marginBottom: description ? '0.25rem' : 0,
        color: 'var(--text-primary, #212529)',
      }}>
        {title}
      </div>
      {description && (
        <div style={{
          fontSize: '0.875rem',
          color: 'var(--text-secondary, #6c757d)',
        }}>
          {description}
        </div>
      )}
    </div>
    <span style={{
      color: 'var(--text-secondary, #6c757d)',
      marginLeft: '0.5rem',
    }}>
      →
    </span>
  </a>
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

        // Try multiple sections to find the project
        const sections = ['engineering', 'computer-science', 'electronic-art', 'academic'];
        let rawText = null;
        let foundSection = null;

        for (const section of sections) {
          const fileUrl = new URL(`/content/portfolio/${section}/projects/${currentSlug}/index.mdx`, window.location.origin);
          console.log("Trying:", fileUrl.toString());

          try {
            const resp = await fetch(fileUrl);
            if (resp.ok) {
              rawText = await resp.text();
              foundSection = section;
              console.log(`Found project in ${section}`);
              break;
            }
          } catch (e) {
            // Continue to next section
          }
        }

        if (!rawText) {
          throw new Error(`Failed to fetch MDX for '${currentSlug}' in any section`);
        }

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
        PDFViewer,
        DocumentLink,
        GoogleSlides,
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