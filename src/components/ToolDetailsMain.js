import React from 'react';
import ToolDetailsContent from './ToolDetailsContent';
import ToolSidebar from './ToolSidebar';
import '../styling/ToolDetailsMain.css';

const ToolDetailsMain = () => {
  return (
    <div className="tool-details-main">
      <div className="tool-details-container">
        <ToolDetailsContent />
        <ToolSidebar />
      </div>
    </div>
  );
};

export default ToolDetailsMain;