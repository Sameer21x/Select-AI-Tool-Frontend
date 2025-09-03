import React from 'react';
import '../styling/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="free-mode">
            <span>Free mode</span>
            <div className="toggle-switch">
              <input type="checkbox" id="toggle" />
              <label htmlFor="toggle"></label>
            </div>
          </div>
        </div>
        
        <nav className="header-nav">
          <a href="#" className="nav-link active">AI Tools</a>
          <a href="#" className="nav-link">Ebooks</a>
          <div className="logo">
            <div className="logo-icon"></div>
          </div>
          <a href="#" className="nav-link">Terms</a>
          <a href="#" className="nav-link">Privacy Policy</a>
        </nav>
        
        <div className="header-right">
          <button className="email-btn">Email Us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;