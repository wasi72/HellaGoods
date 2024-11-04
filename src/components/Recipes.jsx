import React from 'react';
import '../assets/styles/Recipes.css';
import Img1 from '../assets/imgs/resp-1.webp';
import Img2 from '../assets/imgs/resp-2.webp';
import Img3 from '../assets/imgs/resp-3.webp';
import Img4 from '../assets/imgs/resp-4.webp';

const Recipes = () => {
  return (
    <div className="recipes-container">
      <h1 className="recipes-title">RECIPES</h1>
      <div className="recipes-grid">
        <div className="recipe-card">
          <img src={Img1} alt="Roasted Vegetable and Quinoa Salad" />
          <p>ROASTED VEGETABLE AND QUINOA SALAD WITH BOLD FINISHING OIL</p>
        </div>
        <div className="recipe-card">
          <img src={Img2} alt="Crispy Chili Oil Noodles" />
          <p>CRISPY CHILI OIL NOODLES</p>
        </div>
        <div className="recipe-card">
          <img src={Img3} alt="Piña Picante Grilled Shrimp Skewers" />
          <p>PIÑA PICANTE GRILLED SHRIMP SKEWERS</p>
        </div>
        <div className="recipe-card">
          <img src={Img4} alt="Pulled Pork Tacos" />
          <p>PULLED PORK TACOS</p>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
