import React from 'react';
import Sidebar from './Sidebar';
import ToolsGrid from './ToolsGrid';
import '../styling/MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="content-container">
        <Sidebar />
        <ToolsGrid />
      </div>
    </div>
  );
};

export default MainContent;