import React from 'react';
import '../assets/styles/RecipePage.css';
import Img1 from '../assets/imgs/frankie-lopez-_j4S4V2C8ew-unsplash_1.webp';
import Img2 from '../assets/imgs/image_22_1.webp';
import Img3 from '../assets/imgs/mariana-medvedeva-fk6IiypMWss-unsplash.webp';
import Img4 from '../assets/imgs/Screenshot_2024-07-16_at_1.56.36_PM.webp';

function RecipePage() {
  return (
    <div className="recipe-page">
      <section className="featured-recipe">
        <div className="recipe-text">
          <h2>PULLED PORK TACOS</h2>
          <p>Spice up your life with these party-pleasing pulled-pork tacos.</p>
          <button className="view-recipe-btn">VIEW RECIPE</button>
        </div>
        <div className="recipe-image">
          <img src={Img1} alt="Pulled Pork Tacos" />
          <span className="new-badge">NEW RECIPE!</span>
        </div>
      </section>
      
      <section className="more-recipes">
        <h2>MORE RECIPES</h2>
        <div className="recipe-cards">
          <div className="recipe-card">
            <img src={Img2} alt="Vegetable Quinoa Salad" />
            <p>ROASTED VEGETABLE AND QUINOA SALAD WITH BOLD FINISHING OIL</p>
          </div>
          <div className="recipe-card">
            <img src={Img3} alt="Chili Oil Noodles" />
            <p>CRISPY CHILI OIL NOODLES</p>
          </div>
          <div className="recipe-card">
            <img src={Img4} alt="Shrimp Skewers" />
            <p>PIÑA PICANTE GRILLED SHRIMP SKEWERS</p>
          </div>
        </div>
        <button className="read-more-btn">READ MORE</button>
      </section>
    </div>
  );
}

export default RecipePage;
