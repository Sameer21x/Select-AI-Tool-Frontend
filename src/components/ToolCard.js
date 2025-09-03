import React from 'react';
import '../styling/ToolCard.css';

const ToolCard = ({ tool, index }) => {
  // Decide border color: 1 yellow, 2 black pattern
  const borderClass = (index % 3 === 0) ? "yellow-border" : "black-border";

  return (
    <div className={`tool-card ${borderClass}`}>
      {/* Header: Logo, Title and Rating on same line */}
      <div className="tool-header">
        <div className="tool-logo">
          P
        </div>
        <div className="tool-title-rating">
          <h3 className="tool-name">{tool.name}</h3>
          <div className="tool-rating">
            <span className="rating-star">★</span>
            <span className="rating-number">{tool.rating}</span>
          </div>
        </div>
      </div>
      
      {/* Tags */}
      <div className="tool-tags">
        {tool.tags.map(tag => (
          <span key={tag} className="tool-tag">{tag}</span>
        ))}
      </div>
      
      {/* Description */}
      <p className="tool-description">{tool.description}</p>
      
      {/* Footer: Date and Button */}
      <div className="tool-footer">
        <div className="tool-date">
          {tool.date} • {tool.type}
        </div>
        <button className="visit-btn">Visit Website</button>
      </div>
    </div>
  );
};

export default ToolCard;