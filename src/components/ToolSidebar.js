import React from 'react';
import '../styling/ToolSidebar.css';

const ToolSidebar = () => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < Math.floor(rating) ? 'filled' : ''}`}>⭐</span>
    ));
  };

  const featuredTools = [
    {
      id: 1,
      name: 'PicPicAI - Image Enhancer',
      rating: 4.7,
      tags: ['Image Upscaling', 'Developers'],
      date: 'July 26, 2025',
      type: '100% Free'
    },
    {
      id: 2,
      name: 'PicPicAI - Image Enhancer',
      rating: 4.7,
      tags: ['Image Upscaling', 'Developers'],
      date: 'July 26, 2025',
      type: '100% Free'
    },
    {
      id: 3,
      name: 'PicPicAI - Image Enhancer',
      rating: 4.7,
      tags: ['Image Upscaling', 'Developers'],
      date: 'July 26, 2025',
      type: '100% Free'
    },
    {
      id: 4,
      name: 'PicPicAI - Image Enhancer',
      rating: 4.7,
      tags: ['Image Upscaling', 'Developers'],
      date: 'July 26, 2025',
      type: '100% Free'
    }
  ];

  return (
    <div className="tool-sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-title">Category</h3>
        <div className="category-tag">
          <span>Artificial Intelligence</span>
        </div>
      </div>
      
      <div className="sidebar-section">
        <h3 className="sidebar-title">Profession</h3>
        <div className="profession-tags">
          <span className="profession-tag">Marketing</span>
          <span className="profession-tag">Art & Illustration</span>
          <span className="profession-tag">Engineering</span>
          <span className="profession-tag">Content Creation</span>
          <span className="profession-tag">Entrepreneurship</span>
        </div>
      </div>
      
      <div className="sidebar-section">
        <h3 className="sidebar-title">Featured Tools</h3>
        <div className="featured-tools">
          {featuredTools.map(tool => (
            <div key={tool.id} className="featured-tool-card">
              <div className="featured-tool-header">
                <div className="featured-tool-icon">
                  <span className="icon-letter">P</span>
                </div>
                <div className="featured-tool-info">
                  <h4 className="featured-tool-name">{tool.name}</h4>
                  <div className="featured-tool-rating">
                    <div className="stars">
                      {renderStars(tool.rating)}
                    </div>
                    <span className="rating-number">{tool.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="featured-tool-tags">
                {tool.tags.map(tag => (
                  <span key={tag} className="featured-tool-tag">{tag}</span>
                ))}
              </div>
              
              <div className="featured-tool-footer">
                <span className="featured-tool-date">{tool.date} • {tool.type}</span>
                <button className="featured-visit-btn">Visit Website</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolSidebar;