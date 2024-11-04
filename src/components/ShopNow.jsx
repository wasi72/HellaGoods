import React from 'react';
import Img1 from '../assets/imgs/hello-1.png';
import Img2 from '../assets/imgs/hello-2.png';
import Img3 from '../assets/imgs/hello-3.png';
import Img4 from '../assets/imgs/hello-4.png';
import Img5 from '../assets/imgs/hello-5.png';
import Img6 from '../assets/imgs/hello-6.png';
import '../assets/styles/ShopNow.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>EVERYDAY PANTRY GOODS FOR THE EVERYDAY CHEF.</h1>
        <button className="shop-now-button">Shop Now</button>
      </div>
      <div className="features">
        <div className="feature-item">
          <img src={Img1} alt="Low Salt" />
          <p>Low Salt</p>
        </div>
        <div className="feature-item">
          <img src={Img2} alt="No Bad Stuff" />
          <p>No Bad Stuff</p>
        </div>
        <div className="feature-item">
          <img src={Img3} alt="Organic" />
          <p>Organic</p>
        </div>
        <div className="feature-item">
          <img src={Img4} alt="Non-GMO" />
          <p>Non-GMO</p>
        </div>
        <div className="feature-item">
          <img src={Img5} alt="No Fake Stuff" />
          <p>No Fake Stuff</p>
        </div>
        <div className="feature-item">
          <img src={Img6} alt="Low Carb" />
          <p>Low Carb</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
