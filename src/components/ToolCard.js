import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/ToolCard.css';

const ToolCard = ({ tool, index }) => {
    const navigate = useNavigate();

    // Decide border color: 1 yellow, 2 black pattern
    const borderClass = (index % 3 === 0) ? "yellow-border" : "black-border";

    const handleClick = () => {
        navigate(`/ToolDetails/${tool.id}`, { state: { tool } });
    };

    return (
        <div className={`tool-card ${borderClass}`} onClick={handleClick}>
            <div className="tool-header">
                <div className="tool-logo">
                    P
                </div>
                <div className="tool-title-rating">
                    <h3 className="tool-name">{tool.name}</h3>
                    <div className="tool-rating">
                        <span className="rating-star">★</span>
                        <span className="rating-number">{tool.rating}</span>
                    </div>
                </div>
            </div>

            {/* Tags */}
            <div className="tool-tags">
                {tool.tags.map(tag => (
                    <span key={tag} className="tool-tag">{tag}</span>
                ))}
            </div>

            {/* Description */}
            <p className="tool-description">{tool.description}</p>

            {/* Footer: Date and Button */}
            <div className="tool-footer">
                <div className="tool-date">
                    {tool.date} • {tool.type}
                </div>
                <button className="visit-btn">Visit Website</button>
            </div>
        </div>
    );
};

export default ToolCard;