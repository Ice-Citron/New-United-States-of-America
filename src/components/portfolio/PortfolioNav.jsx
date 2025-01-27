import React from 'react';

const PortfolioNav = ({ activeCategory, onCategoryChange }) => {
    const categories = [
        { id: "video-summary", label: "Video Summary" }, // The new subsection
        { id: "engineering", label: "Engineering" },
        { id: "computer-science", label: "Computer Science" },
        { id: "electronic-art", label: "Electronic Art" },
        { id: "academic", label: "Academic & Miscellaneous" },
    ];      

  return (
    <div className="portfolio-nav mb-4">
      {categories.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onCategoryChange(id)}
          className={`nav-btn ${activeCategory === id ? 'active' : ''}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default PortfolioNav;