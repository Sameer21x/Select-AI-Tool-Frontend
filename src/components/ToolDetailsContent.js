import React from 'react';
import ToolPreview from './ToolPreview';
import ToolOverview from './ToolOverview';
import '../styling/ToolDetailsContent.css';

const ToolDetailsContent = () => {
  return (
    <div className="tool-details-content">
      <div className="content-main">
        <ToolPreview />
        <ToolOverview />
      </div>
    </div>
  );
};

export default ToolDetailsContent;