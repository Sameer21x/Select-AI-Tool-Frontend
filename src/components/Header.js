import React from 'react';
import Logo from '../assets/icons/Logo.png';
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
          <a href="/" className="nav-link active">AI Tools</a>
          <a href="/EbooksListing" className="nav-link">Ebooks</a>
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>

          <a href="/Terms&Conditions" className="nav-link">Terms</a>
          <a href="/PrivacyPolicy" className="nav-link">Privacy Policy</a>
        </nav>

        <div className="header-right">
          <button className="email-btn">Email Us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;