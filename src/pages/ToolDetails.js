import React from 'react';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import ToolHeader from '../components/ToolHeader';
import ToolDetailsMain from '../components/ToolDetailsMain';
import Footer from '../components/Footer';
import '../styling/ToolDetails.css';

const ToolDetails = () => {
  return (
    <div className="tool-details-page">
      <Header />
      <Breadcrumb />
      <ToolHeader />
      <ToolDetailsMain />
      <Footer />
    </div>
  );
};

export default ToolDetails;