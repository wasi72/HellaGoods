import React from 'react';
import '../assets/styles/SecretSauce.css';
import bottleImage from '../assets/imgs/bottle.webp'; 

function SecretSauce() {
  return (
    <div className="secret-sauce-section">
      <h1 className="secret-sauce-title">THE SECRET SAUCE</h1>
      <div className="secret-sauce-content">
        <div className="secret-sauce-left-features">
          <div className="secret-sauce-feature-card"> 
            <h2>100% EXTRA VIRGIN OLIVE OIL</h2>
            <p>Made from Picual olives, ensuring a pure and unblended product.</p>
          </div>
          <div className="secret-sauce-feature-card">
            <h2>HIGH YIELD</h2>
            <p>It takes about 13 pounds of olives to produce one liter of oil.</p>
          </div>
          <div className="secret-sauce-feature-card">
            <h2>SINGLE-ORIGIN</h2>
            <p>Sourced exclusively from Jaén, Spain, known for its premium olive production.</p>
          </div>
        </div>
        
        <div className="secret-sauce-bottle-image-container">
          <img src={bottleImage} alt="Bottle" className="secret-sauce-bottle-image" />
        </div>

        <div className="secret-sauce-right-features">
          <div className="secret-sauce-feature-card">
            <h2>HARVESTED AT PEAK SEASON</h2>
            <p>Olives are picked during peak ripeness, providing a balanced, mellow flavor.</p>
          </div>
          <div className="secret-sauce-feature-card">
            <h2>VERSATILE COOKING</h2>
            <p>Ideal for various cooking methods like roasting, frying, and baking due to its high smoke point.</p>
          </div>
          <div className="secret-sauce-feature-card">
            <h2>ECO-FRIENDLY PACKAGING</h2>
            <p>Comes in a squeezable, easy-to-use bottle, minimizing waste.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecretSauce;
