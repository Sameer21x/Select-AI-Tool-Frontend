import React, { useState } from 'react';
import '../styling/FilterButton.css';

const FilterButtons = () => {
    const [activeFilter, setActiveFilter] = useState('featured');
  
    const filters = [
      { id: 'featured', label: '⭐ Featured Tools', color: '#FFFF00' },
      { id: 'free', label: '🌟 Free Tools', color: '#2FFF2F' },
      { id: 'paid', label: '💎 Paid Tools', color: '#FF00F5' }
    ];
  
    return (
      <div className="filter-buttons">
        <div className="filter-container">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              data-color={filter.color}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default FilterButtons;