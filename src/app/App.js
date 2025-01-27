import React, { useEffect } from "react";
import { StrictMode } from 'react'; // Add this import
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
import Home from "../pages/home";
import Portfolio from "../pages/portfolio";
import ProjectDetail from "../components/portfolio/ProjectDetail";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

function ProjectDetailWrapper() {
  const { slug } = useLocation().state || {};
  return <ProjectDetail slug={slug} />;
}

export default function App() {
  return (
    <StrictMode>
      <Router basename="/">
        <div className="cursor__dot">
          <AnimatedCursor
            innerSize={8}          // Smaller size
            outerSize={8}          // No outer circle
            color="0, 0, 0"        // Black color
            outerAlpha={0}         // Hide outer circle
            innerScale={1}         // No scaling on click
            outerScale={1}         // No scaling on click
          />
        </div>
        <ScrollToTop>
          <Headermain />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </StrictMode>
  );
}