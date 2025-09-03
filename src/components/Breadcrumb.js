import React from 'react';
import '../styling/Breadcrumb.css';

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb-container">
        <span className="breadcrumb-link">All Tools</span>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">PicPicAI - Image Enhancer</span>
      </div>
    </div>
  );
};

export default Breadcrumb;