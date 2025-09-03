import React from 'react';
import '../styling/ToolOverview.css';

const ToolOverview = () => {
  return (
    <div className="tool-overview-section">
      <div className="tool-overview-container">
        <div className="overview-card">
          <h2 className="overview-title">Overview</h2>
          
          <div className="overview-content">
            <p>
              PicPicAI provides an AI-based portrait enhancer tool that empowers users to refine individual or group images by 
              accentuating the finest details. Through the application of advanced artificial intelligence technology, it can 
              transform portraits, family photos, or group shots into professional-grade pictures.
            </p>
            
            <p>
              The tool offers natural and seamless enhancement of image details and is especially effective for both individual 
              and group portraits. Beyond its primary portrait enhancement, PicPicAI includes additional image processing 
              features such as Background Remover Add-ons and Colorize Photos Add-ons or even a combination of them.
            </p>
            
            <p>
              These tools simplify the process of photo editing by executing multiple tasks with a single click, thus increasing 
              efficiency. PicPicAI also provides a range of other AI photo enhancers, including Photo Enhancer, Relight Photo, 
              Creative Upscaler, and many others.
            </p>
            
            <p>
              All these tools aim to facilitate effortless image editing and enhancement. Moreover, the platform supports use on 
              mobile devices, allowing users to edit their images anytime, anywhere.
            </p>
            
            <p>
              Not limited to facial enhancements, the AI Portrait Enhancer can effectively improve any web or printed image, from 
              digital art to nature photos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolOverview;