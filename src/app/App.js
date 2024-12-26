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
// (You may need to adjust these import paths depending on your folder structure)
import Home from "../pages/home";       // Example "Home" component
import Portfolio from "../pages/portfolio";  // Your main portfolio page (index.js in /pages/portfolio)

// Scroll-to-top helper
function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

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
        
        {/* Define your main routes inline */}
        <Routes>
          {/* Home page (optional) */}
          <Route path="/" element={<Home />} />
          
          {/* Main portfolio page */}
          <Route path="/portfolio" element={<Portfolio />} />

          {/*
            Optional: If you want to handle /portfolio/cs, /portfolio/engineering, etc.
            automatically, you can add this route:

            <Route path="/portfolio/:category" element={<Portfolio />} />
            
            Then inside Portfolio.jsx, read `useParams().category` to decide which
            "index.md" to fetch (cs, engineering, etc.).
          */}

          {/*
            In the future, if you create a detail page for books or courses, 
            you can add something like:
            
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/books/:slug" element={<BookDetail />} />
          */}
        </Routes>
      </ScrollToTop>
    </Router>
  );
}
