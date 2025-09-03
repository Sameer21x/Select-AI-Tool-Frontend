import React, { useState } from 'react';
import '../styling/Sidebar.css';

const Sidebar = () => {
    const [expandedSections, setExpandedSections] = useState({
      category: true,
      profession: true,
      ratings: true
    });
  
    const [selectedFilters, setSelectedFilters] = useState({
      category: [],
      profession: [],
      ratings: []
    });
  
    const toggleSection = (section) => {
      setExpandedSections(prev => ({
        ...prev,
        [section]: !prev[section]
      }));
    };
  
    const toggleFilter = (section, filter) => {
      setSelectedFilters(prev => ({
        ...prev,
        [section]: prev[section].includes(filter)
          ? prev[section].filter(f => f !== filter)
          : [...prev[section], filter]
      }));
    };
  
    const categories = [
      'Accessibility', 'AI Development', 'Astrology', 'Advertising', 'Audio',
      'Augmented Reality', 'Automation', 'Billing & Invoicing', 'Betting', 'IOT',
      'Audio & Music', 'Advertising'
    ];
  
    const professions = [
      'Marketing', 'Art & Illustration', 'Content Creation', 'Design', 'Art',
      'Education', 'Marketing', 'Education', 'Entrepreneurship', 'Data Science', 'IOT',
      'Journalism', 'Engineering'
    ];
  
    const ratings = [
      { stars: 5, label: 'And up' },
      { stars: 4, label: 'And up' },
      { stars: 3, label: 'And up' },
      { stars: 2, label: 'And up' },
      { stars: 1, label: 'And up' }
    ];
  
    return (
      <aside className="sidebar">
        <div className="filter-section">
          <div className="section-header" onClick={() => toggleSection('category')}>
            <span className="section-title">🔽 Filters</span>
          </div>
        </div>
  
        <div className="filter-section">
          <div className="section-header" onClick={() => toggleSection('category')}>
            <span className="section-title">Category</span>
            <span className="toggle-icon">{expandedSections.category ? '−' : '+'}</span>
          </div>
          {expandedSections.category && (
            <div className="filter-list">
              {categories.map(category => (
                <label key={category} className="filter-item">
                  <input
                    type="checkbox"
                    checked={selectedFilters.category.includes(category)}
                    onChange={() => toggleFilter('category', category)}
                  />
                  <span className="filter-label">{category}</span>
                </label>
              ))}
              <button className="view-more-btn">View More</button>
            </div>
          )}
        </div>
  
        <div className="filter-section">
          <div className="section-header" onClick={() => toggleSection('profession')}>
            <span className="section-title">Profession</span>
            <span className="toggle-icon">{expandedSections.profession ? '−' : '+'}</span>
          </div>
          {expandedSections.profession && (
            <div className="filter-list">
              {professions.map(profession => (
                <label key={profession} className="filter-item">
                  <input
                    type="checkbox"
                    checked={selectedFilters.profession.includes(profession)}
                    onChange={() => toggleFilter('profession', profession)}
                  />
                  <span className="filter-label">{profession}</span>
                </label>
              ))}
              <button className="view-more-btn">View More</button>
            </div>
          )}
        </div>
  
        <div className="filter-section">
          <div className="section-header" onClick={() => toggleSection('ratings')}>
            <span className="section-title">Ratings</span>
            <span className="toggle-icon">{expandedSections.ratings ? '−' : '+'}</span>
          </div>
          {expandedSections.ratings && (
            <div className="filter-list">
              {ratings.map((rating, index) => (
                <label key={index} className="filter-item rating-item">
                  <input
                    type="checkbox"
                    checked={selectedFilters.ratings.includes(rating.stars)}
                    onChange={() => toggleFilter('ratings', rating.stars)}
                  />
                  <div className="rating-content">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`star ${i < rating.stars ? 'filled' : ''}`}>
                          ⭐
                        </span>
                      ))}
                    </div>
                    <span className="rating-label">{rating.label}</span>
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>
      </aside>
    );
  };
  
  export default Sidebar;