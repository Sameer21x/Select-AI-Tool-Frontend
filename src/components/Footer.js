import React from 'react';
import FooterLogo from '../assets/icons/footerlogo.png';
import '../styling/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <div className="footer-logo">
                        <img src={FooterLogo} alt="Logo" />
                    </div>
                    <div className="social-links">
                        <a href="#" className="social-link">📘</a>
                        <a href="#" className="social-link">📷</a>
                        <a href="#" className="social-link">🎵</a>
                        <a href="#" className="social-link">🐦</a>
                        <a href="#" className="social-link">📺</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">AI Tool Categories</h4>
                    <ul className="footer-links">
                        <li><a href="#">Copywriting</a></li>
                        <li><a href="#">Content Creation</a></li>
                        <li><a href="#">Graphic Designing</a></li>
                        <li><a href="#">Internet Of Things</a></li>
                    </ul>
                    <button className="view-all-btn-foot">View All Tools</button>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Ebooks</h4>
                    <ul className="footer-links">
                        <li><a href="#">Beginner to Machine Ethics and AI Regulation</a></li>
                        <li><a href="#">The Rise of Thinking Code: AI and the Future</a></li>
                        <li><a href="#">The Mind, Machines Ethics in Artificial Decision-Making</a></li>
                        <li><a href="#">Beyond the Hype Understanding the AI Revolution</a></li>
                    </ul>
                    <button className="view-all-btn-foot">View All Ebooks</button>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Others</h4>
                    <ul className="footer-links">
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Email Us</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-container">
                    <div className="scroll-top">
                        <button className="scroll-btn">↑</button>
                    </div>
                    <p className="copyright">© 2025 Select AI Tool, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;