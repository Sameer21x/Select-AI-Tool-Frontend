import React from 'react';
import EbookCard from './EbookCard';
import '../styling/EbooksGrid.css';

const EbooksGrid = ({ ebooks, onEbookClick }) => {
  return (
    <div className="ebooks-grid">
      {ebooks.map((ebook, index) => (
        <EbookCard
          key={index}
          ebook={ebook}
          onClick={onEbookClick}
        />
      ))}
    </div>
  );
};

export default EbooksGrid;