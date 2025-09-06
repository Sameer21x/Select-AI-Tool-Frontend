import React from 'react';
import '../styling/EbooksHeader.css';

const EbooksHeader = ({ totalBooks, sortBy, onSortChange }) => {
  return (
    <div className="ebooks-header">
      <div className="ebooks-title-section">
        <h1 className="ebooks-main-title">Ebooks</h1>
      </div>
      
      <div className="ebooks-results-header">
        <div className="results-info">
          <h2 className="results-title">Ebooks</h2>
          <span className="results-count">{totalBooks} Ebooks Found</span>
        </div>
        
        <div className="sort-section">
          <span className="sort-label">Sort by:</span>
          <select 
            className="sort-dropdown"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="alphabetical">Alphabetical</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="author">Author</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default EbooksHeader;