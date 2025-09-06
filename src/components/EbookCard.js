import React from 'react';
import cardimage from '../assets/images/ebookcard.png';
import '../styling/EbookCard.css';

const EbookCard = ({ ebook, onClick }) => {
  const handleClick = () => {
    onClick(ebook);
  };

  return (
    <div className="ebook-card" onClick={handleClick}>
      <div className="ebook-image">
        <img src={cardimage} alt={ebook.title} />
      </div>
      
      <div className="ebook-content">
        <div className="ebook-card-header">
          <h3 className="ebook-card-title">{ebook.title}</h3>
        </div>
        
        <div className="ebook-meta">
          <span className="ebook-author">by {ebook.author}</span>
          <div className="ebook-separator"></div>
          <span className="ebook-publisher">{ebook.publisher}</span>
        </div>
        
        <div className="ebook-category-tag">
          <span className="ebook-category">{ebook.category}</span>
        </div>
        
        <div className="ebook-footer">
          <span className="ebook-date">{ebook.date}</span>
          <button className="view-book-btn">View Book</button>
        </div>
      </div>
    </div>
  );
};

export default EbookCard;