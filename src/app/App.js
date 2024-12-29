import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";

// Import your pages/components
import Home from "../pages/home";       // Example "Home" component
import Portfolio from "../pages/portfolio";  // Main portfolio page
import ProjectDetail from "../components/portfolio/ProjectDetail"; // The new detail component


function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

// A wrapper that extracts `:slug` param and passes it to ProjectDetail
function ProjectDetailWrapper() {
  const { slug } = useLocation().state || {}; 
  // ^ This is one approach if you're passing state. 
  // Alternatively, you can do "import { useParams } from 'react-router-dom';" 
  // and use "const { slug } = useParams();" 
  // if you define <Route path="/project/:slug" element={<ProjectDetailWrapper />} />

  // If you're not using location.state, do the standard approach:
  // import { useParams } from 'react-router-dom';
  // const { slug } = useParams();

  return <ProjectDetail slug={slug} />;
}

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255, 255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTop>
        <Headermain />
        
        <Routes>
          {/* Home page (optional) */}
          <Route path="/" element={<Home />} />
          
          {/* Main portfolio page */}
          <Route path="/portfolio" element={<Portfolio />} />

          {/*
            If you want /portfolio/:category to handle "engineering", "cs" etc. automatically:
            <Route path="/portfolio/:category" element={<Portfolio />} />
          */}

          {/* The new route for "view project" detail pages:
              e.g. /project/railgun or /project/f1-in-schools */}
          <Route path="/project/:slug" element={<ProjectDetail />} />
          {/*
            Alternatively, if you want a state-based approach or a wrapper:
            <Route path="/project/:slug" element={<ProjectDetailWrapper />} />
          */}
        </Routes>
      </ScrollToTop>
    </Router>
  );
}
