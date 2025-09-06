import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EbooksHeader from '../components/EbooksHeader';
import EbooksSidebar from '../components/EbooksSidebar';
import EbooksGrid from '../components/EbooksGrid';
import '../styling/EbooksListing.css';

const EbooksListing = () => {
  const navigate = useNavigate();
  
  const [filters, setFilters] = useState({
    genre: 'All'
  });
  
  const [sortBy, setSortBy] = useState('alphabetical');

  // Sample ebook data
  const ebooks = [
    {
      id: 1,
      title: "Artificial Intelligence Modern Magic or Dangerous Future?",
      author: "Yorick Wilks",
      publisher: "Penguin Publishers",
      date: "June 2019",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Artificial Intelligence Modern Magic or Dangerous Future?",
      author: "Yorick Wilks",
      publisher: "Penguin Publishers",
      date: "June 2019",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Artificial Intelligence Modern Magic or Dangerous Future?",
      author: "Yorick Wilks",
      publisher: "Penguin Publishers",
      date: "June 2019",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Artificial Intelligence Modern Magic or Dangerous Future?",
      author: "Yorick Wilks",
      publisher: "Penguin Publishers",
      date: "June 2019",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Artificial Intelligence Modern Magic or Dangerous Future?",
      author: "Yorick Wilks",
      publisher: "Penguin Publishers",
      date: "June 2019",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Artificial Intelligence Modern Magic or Dangerous Future?",
      author: "Yorick Wilks",
      publisher: "Penguin Publishers",
      date: "June 2019",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      id: 7,
      title: "Artificial Intelligence Modern Magic or Dangerous Future?",
      author: "Yorick Wilks",
      publisher: "Penguin Publishers",
      date: "June 2019",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      id: 8,
      title: "Artificial Intelligence Modern Magic or Dangerous Future?",
      author: "Yorick Wilks",
      publisher: "Penguin Publishers",
      date: "June 2019",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      id: 9,
      title: "Artificial Intelligence Modern Magic or Dangerous Future?",
      author: "Yorick Wilks",
      publisher: "Penguin Publishers",
      date: "June 2019",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      id: 10,
      title: "Artificial Intelligence Modern Magic or Dangerous Future?",
      author: "Yorick Wilks",
      publisher: "Penguin Publishers",
      date: "June 2019",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      id: 11,
      title: "Artificial Intelligence Modern Magic or Dangerous Future?",
      author: "Yorick Wilks",
      publisher: "Penguin Publishers",
      date: "June 2019",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      id: 12,
      title: "Artificial Intelligence Modern Magic or Dangerous Future?",
      author: "Yorick Wilks",
      publisher: "Penguin Publishers",
      date: "June 2019",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      id: 13,
      title: "Artificial Intelligence Modern Magic or Dangerous Future?",
      author: "Yorick Wilks",
      publisher: "Penguin Publishers",
      date: "June 2019",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      id: 14,
      title: "Artificial Intelligence Modern Magic or Dangerous Future?",
      author: "Yorick Wilks",
      publisher: "Penguin Publishers",
      date: "June 2019",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      id: 15,
      title: "Artificial Intelligence Modern Magic or Dangerous Future?",
      author: "Yorick Wilks",
      publisher: "Penguin Publishers",
      date: "June 2019",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      id: 16,
      title: "Artificial Intelligence Modern Magic or Dangerous Future?",
      author: "Yorick Wilks",
      publisher: "Penguin Publishers",
      date: "June 2019",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      id: 17,
      title: "Artificial Intelligence Modern Magic or Dangerous Future?",
      author: "Yorick Wilks",
      publisher: "Penguin Publishers",
      date: "June 2019",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      id: 18,
      title: "Artificial Intelligence Modern Magic or Dangerous Future?",
      author: "Yorick Wilks",
      publisher: "Penguin Publishers",
      date: "June 2019",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      id: 19,
      title: "Artificial Intelligence Modern Magic or Dangerous Future?",
      author: "Yorick Wilks",
      publisher: "Penguin Publishers",
      date: "June 2019",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      id: 20,
      title: "Artificial Intelligence Modern Magic or Dangerous Future?",
      author: "Yorick Wilks",
      publisher: "Penguin Publishers",
      date: "June 2019",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    }
  ];

  const handleEbookClick = (ebook) => {
    navigate(`/ebook/${ebook.id}`, { state: { ebook } });
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
  };

  return (
    <div className="ebooks-listing-page">
      <Header />
      
      <main className="ebooks-main">
        <div className="ebooks-container">
          <EbooksHeader 
            totalBooks={ebooks.length}
            sortBy={sortBy}
            onSortChange={handleSortChange}
          />
          
          <div className="ebooks-content">
            <EbooksSidebar 
              filters={filters}
              onFilterChange={handleFilterChange}
            />
            
            <div className="ebooks-main-content">
              <EbooksGrid 
                ebooks={ebooks}
                onEbookClick={handleEbookClick}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EbooksListing;