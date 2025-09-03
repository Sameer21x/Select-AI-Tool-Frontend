import React from 'react';
import '../styling/ToolHeader.css';

const ToolHeader = () => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < Math.floor(rating) ? 'filled' : ''}`}>⭐</span>
    ));
  };

  return (
    <div className="tool-header-section">
      <div className="tool-header-container">
        <div className="tool-date">
          <span className="calendar-icon">📅</span>
          <span>July 26, 2025</span>
        </div>
        
        <div className="tool-main-info">
          <div className="tool-icon-large">
            <span className="icon-letter">P</span>
          </div>
          
          <div className="tool-details">
            <h1 className="tool-title">PicPicAI - Image Enhancer</h1>
            
            <div className="tool-badges">
              <span className="badge featured">Featured</span>
              <span className="badge free">100% Free</span>
              <div className="rating-section">
                <div className="stars">
                  {renderStars(4.7)}
                </div>
                <span className="rating-text">4.0 Ratings</span>
              </div>
            </div>
            
            <div className="action-buttons">
              <button className="btn-primary">Visit Website</button>
              <button className="btn-secondary">Copy Link</button>
              <button className="btn-secondary2">Share on Meta</button>
              <button className="btn-secondary3">Share on X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolHeader;