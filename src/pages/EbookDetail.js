import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';
import ebookcover from '../assets/images/ebook.png';
import '../styling/EbookDetail.css';

const EbookDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ebook } = location.state || {};

  if (!ebook) {
    navigate('/ebooks');
    return null;
  }

  // Sample related tools data
  const relatedTools = [
    {
      id: 1,
      name: "PicPicAI - Image Enhancer",
      description: "PicPicAI enhances portraits with AI, turning any image into a professional-quality photo.",
      rating: 4.7,
      tags: ["Image Upscaling", "Designers"],
      date: "July 26, 2025",
      isFree: true,
      logo: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
    },
    {
      id: 2,
      name: "PicPicAI - Image Enhancer",
      description: "PicPicAI enhances portraits with AI, turning any image into a professional-quality photo.",
      rating: 4.7,
      tags: ["Image Upscaling", "Designers"],
      date: "July 26, 2025",
      isFree: true,
      logo: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
    },
    {
      id: 3,
      name: "PicPicAI - Image Enhancer",
      description: "PicPicAI enhances portraits with AI, turning any image into a professional-quality photo.",
      rating: 4.7,
      tags: ["Image Upscaling", "Designers"],
      date: "July 26, 2025",
      isFree: true,
      logo: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
    },
    {
      id: 4,
      name: "PicPicAI - Image Enhancer",
      description: "PicPicAI enhances portraits with AI, turning any image into a professional-quality photo.",
      rating: 4.7,
      tags: ["Image Upscaling", "Designers"],
      date: "July 26, 2025",
      isFree: true,
      logo: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
    },
    {
      id: 5,
      name: "PicPicAI - Image Enhancer",
      description: "PicPicAI enhances portraits with AI, turning any image into a professional-quality photo.",
      rating: 4.7,
      tags: ["Image Upscaling", "Designers"],
      date: "July 26, 2025",
      isFree: true,
      logo: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
    },
    {
      id: 6,
      name: "PicPicAI - Image Enhancer",
      description: "PicPicAI enhances portraits with AI, turning any image into a professional-quality photo.",
      rating: 4.7,
      tags: ["Image Upscaling", "Designers"],
      date: "July 26, 2025",
      isFree: true,
      logo: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
    }
  ];

  return (
    <div className="ebook-detail-page">
      <Header />
      
      <main className="ebook-detail-main">
        <div className="ebook-detail-container">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <span className="breadcrumb-item" onClick={() => navigate('/ebooks')}>
              Ebooks
            </span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{ebook.title}</span>
          </div>

          {/* Ebook Header */}
          <div className="ebook-header">
            <div className="ebook-cover">
              <img src={ebookcover} alt={ebook.title} />
            </div>
            
            <div className="ebook-info">
              <h1 className="ebook-title">{ebook.title}</h1>
              
              <div className="ebook-meta">
                <span className="meta-item">by {ebook.author}</span>
                <span className="meta-separator">•</span>
                <span className="meta-item">{ebook.publisher}</span>
                <span className="meta-separator">•</span>
                <span className="meta-item">Released {ebook.date}</span>
              </div>
              
              <div className="ebook-category">
                <span className="category-tag">{ebook.category}</span>
              </div>
              
              <div className="ebook-actions">
                <button className="download-btn">Download PDF</button>
                <button className="copy-link-btn">Copy Link</button>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="overview-section">
            <h2 className="section-title">Overview</h2>
            <div className="overview-content">
              <p>
                Artificial intelligence has long been a mainstay of science fiction and increasingly it feels as if AI is entering our everyday lives, with technology like Apple's Siri now prominent, and self-driving cars almost upon us. But what do we actually mean when we talk about 'AI'? Are the sentient machines of 2001 or The Matrix a real possibility or will real-world artificial intelligence look and feel very different? What has it done for us so far? And what technologies could it yield in the future? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae enim sed justo euismod posuere. Sed a risus et sapien efficitur fermentum. Integer eu lacus at turpis sagittis sodales. Ut fringilla, sapien in ultrices vulputate, est tellus ornare elit, a placerat sapien turpis ut nulla. Curabitur non lacinia lacus. Proin nec fermentum mauris, vitae suscipit turpis. Etiam facilisis, nunc nec egestas tincidunt, tortor turpis fringilla nulla, a lacinia justo nisl at metus.
              </p>
              
              <p>
                AI expert Yorick Wilks takes a journey through the history of artificial intelligence up to the present day, examining its origins, controversies and achievements, as well as looking into just how it works. He also considers the future, assessing whether these technologies could menace our way of life, but also how we are all likely to benefit from AI applications in the years to come.
              </p>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae enim sed justo euismod posuere. Sed a risus et sapien efficitur fermentum. Integer eu lacus at turpis sagittis sodales. Ut fringilla, sapien in ultrices vulputate, est tellus ornare elit, a placerat sapien turpis ut nulla. Curabitur non lacinia lacus. Proin nec fermentum mauris, vitae suscipit turpis. Etiam facilisis, nunc nec egestas tincidunt, tortor turpis fringilla nulla, a lacinia justo nisl at metus.
              </p>
              
              <p>
                Suspendisse sed lectus ut erat vestibulum lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas dignissim urna at mi cursus, in tempus risus fermentum. In nec convallis nulla. Aenean id tortor tellus. Duis nec tellus id libero condimentum tristique.
              </p>
              
              <p>
                Entertaining, enlightening, and keenly argued, this is the essential one-stop guide to the AI debate.
              </p>
            </div>
          </div>

          {/* Search Results Section */}
          <div className="search-results-section">
            <h2 className="section-title">Search Results</h2>
            <div className="tools-grid">
              {relatedTools.map((tool, index) => (
                <ToolCard key={index} tool={tool} />
              ))}
            </div>
            
            <div className="view-all-tools">
              <button className="view-all-btn" onClick={() => navigate('/')}>
                View All Tools
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EbookDetail;