// PolygonStory.js
import React from 'react';
import '../assets/styles/PolygonStory.css';
import Img from '../assets/imgs/jonny-clow-51_Z74mC88A-unsplash.webp';

const PolygonStory = () => {
  return (
    <div className="polygon-story-container">
      <div className="story-text">
        <h2>Our Story</h2>
        <p>
          Hella Goods was born from a love for big, bold flavors. What started in a small kitchen with a few spice blends has grown into a full line of products, each crafted with care and precision. From our Crispy Chili Oil to our signature El Diablo Hot Sauce, we’re all about delivering unforgettable taste experiences.
        </p>
      </div>
      <div className="story-image">
        <img src={Img} alt="Hot Sauce Tasting Room" />
      </div>
    </div>
  );
};

export default PolygonStory;
