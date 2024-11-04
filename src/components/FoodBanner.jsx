import React from 'react';
import '../assets/styles/FoodBanner.css';
import leftImage from '../assets/imgs/Right.webp'; 
import rightImage from '../assets/imgs/left.webp'; 

const FoodBanner = () => {
  return (
    <div className="banner-container">
      <div className="banner-image left">
        <img src={leftImage} alt="Delicious Food Left" />
      </div>
      
      <div className="banner-text">
        <h1>HELLA<br />GOOD<br />FOOD</h1>
        <p>Dine with us at one of our pop-up locations.</p>
      </div>

      <div className="banner-image right">
        <img src={rightImage} alt="Delicious Food Right" />
        <div className="banner-badge">
          <p>NOW OPEN<br />IN NYC!</p>
        </div>
      </div>
    </div>
  );
};

export default FoodBanner;
