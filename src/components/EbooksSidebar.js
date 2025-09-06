import React from 'react';
import '../styling/EbooksSidebar.css';

const EbooksSidebar = ({ filters, onFilterChange }) => {
  const genres = [
    'All', 'AI Development', 'Automation', 'LLM Development', 'Marketing', 'API',
    'Machine Learning', 'Augmented Reality', 'Content Creation', 'LLM Development',
    'IoT', 'AI Development', 'Automation'
  ];

  const handleGenreClick = (genre) => {
    onFilterChange({ ...filters, genre });
  };

  return (
    <div className="ebooks-sidebar">
      <div className="filter-section">
        <h3 className="filter-title">
          <span className="filter-icon">▼</span>
          Genre
        </h3>
        <div className="genre-filters">
          {genres.map((genre, index) => (
            <button
              key={index}
              className={`genre-btn ${filters.genre === genre ? 'active' : ''}`}
              onClick={() => handleGenreClick(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EbooksSidebar;