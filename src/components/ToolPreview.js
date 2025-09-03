import React from 'react';
import '../styling/ToolPreview.css';

const ToolPreview = () => {
  return (
    <div className="tool-preview-section">
      <div className="tool-preview-container">
        <div className="preview-card">
          <div className="preview-header">
            <div className="preview-logo">
              <span className="logo-p">P</span>
              <span className="logo-text">PicPicAI</span>
            </div>
            <div className="preview-nav">
              <span className="nav-item active">AI Image Tools</span>
              <span className="nav-item">All Tools</span>
              <span className="nav-item">Pricing</span>
            </div>
            <div className="preview-actions">
              <button className="login-btn">Login</button>
              <span className="user-icon">👤</span>
              <span className="language">En</span>
            </div>
          </div>
          
          <div className="preview-content">
            <h2 className="preview-title">🖼️ AI Portrait Enhancer</h2>
            <p className="preview-subtitle">Enhance your individual or group portraits with AI to bring out the finest details.</p>
            
            <div className="preview-demo">
              <div className="demo-section">
                <h3>Multi-Face</h3>
                <div className="demo-image">
                  <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop" alt="Before" />
                </div>
              </div>
              
              <div className="demo-section">
                <h3>Add-ons</h3>
                <div className="upload-area">
                  <button className="upload-btn">Upload Image</button>
                  <p>Or drag an image here</p>
                  <div className="sample-avatars">
                    <div className="avatar">👨</div>
                    <div className="avatar">👩</div>
                    <div className="avatar">👨‍💼</div>
                    <div className="avatar">👩‍💼</div>
                    <div className="avatar">👶</div>
                  </div>
                  <p className="sample-text">No Image? Try these.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolPreview;