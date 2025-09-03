import React from 'react';
import Header from '../components/Header';
import Hero from '../components/HeroSection';
import SearchBar from '../components/SearchSection';
import FilterButtons from '../components/FilterButton';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import '../styling/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <SearchBar />
      <FilterButtons />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;