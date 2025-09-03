import React, { useState } from 'react';
import ToolCard from './ToolCard';
import '../styling/ToolsGrid.css';

const ToolsGrid = () => {
    const [sortBy, setSortBy] = useState('highest-rated');

    const mockTools = [
        {
            id: 1,
            name: 'PicPicAI - Image Enhancer',
            rating: 4.7,
            tags: ['Image Upscaling', 'Developers'],
            description: 'PicPi.AI enhances portraits with AI, turning any image into a professional-quality photo.',
            date: 'July 26, 2025',
            type: '100% Free'
        },
        {
            id: 2,
            name: 'PicPicAI - Image Enhancer',
            rating: 4.7,
            tags: ['Image Upscaling', 'Developers'],
            description: 'PicPi.AI enhances portraits with AI, turning any image into a professional-quality photo.',
            date: 'July 26, 2025',
            type: '100% Free'
        },
        {
            id: 3,
            name: 'PicPicAI - Image Enhancer',
            rating: 4.7,
            tags: ['Image Upscaling', 'Developers'],
            description: 'PicPi.AI enhances portraits with AI, turning any image into a professional-quality photo.',
            date: 'July 26, 2025',
            type: '100% Free'
        }
    ];

    // Generate more tools for demonstration
    const allTools = [...Array(18)].map((_, index) => ({
        ...mockTools[index % 3],
        id: index + 1
    }));

    return (
        <div className="tools-section">
            <div className="tools-header">
                <div className="tools-info">
                    <h2 className="tools-title">AI Tools</h2>
                    <span className="tools-count">63 Tools Found</span>
                </div>
                <div className="sort-container">
                    <label htmlFor="sort">Sort by:</label>
                    <select
                        id="sort"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="sort-select"
                    >
                        <option value="highest-rated">Highest Rated</option>
                        <option value="newest">Newest</option>
                        <option value="most-popular">Most Popular</option>
                    </select>
                </div>
            </div>

            <div className="tools-grid">
                {allTools.map((tool, index) => (
                    <ToolCard key={tool.id} tool={tool} index={index} />
                ))}

            </div>

            <div className="load-more-container">
                <button className="load-more-btn">Load More Tools</button>
            </div>
        </div>
    );
};

export default ToolsGrid;