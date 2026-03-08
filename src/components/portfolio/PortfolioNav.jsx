import React from 'react';

const PortfolioNav = ({ activeCategory, onCategoryChange }) => {
    const categories = [
        { id: "resume", label: "Resume" },
        { id: "computing", label: "Computing" },
        { id: "engineering", label: "Engineering" },
        { id: "mit-portfolio", label: "MIT Portfolio" },
        { id: "academic", label: "Academic" },
        { id: "electronic-art", label: "Electronic Art" },
        { id: "miscellaneous", label: "Miscellaneous" },
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