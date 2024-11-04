import React from 'react';
import '../assets/styles/MerchGrid.css';
import Img1 from '../assets/imgs/Hat_-_White.webp';
import Img2 from '../assets/imgs/Beanie.webp';
import Img3 from '../assets/imgs/Tee-green.webp';

const MerchGrid = () => {
  const items = [
    { name: 'HELLA GOOD HAT', price: '$40.00', img: Img1, soldOut: false },
    { name: 'HELLA GOOD BEANIE', price: '$40.00', img: Img2, soldOut: false },
    { name: 'HELLA GOOD TEE', price: '$40.00', img: Img3, soldOut: true },
  ];

  return (
    <div className="merch-wrapper">
      {/* Title and Subtitle outside of the grid */}
      <h1 className="merch-title">HELLA GOOD MERCH</h1>
      <p className="merch-subtitle">Fresh fits for fresh food.</p>
      
      <div className="grid">
        {items.map((item, index) => (
          <div className="card" key={index}>
            <div className="image-container">
              <img src={item.img} alt={item.name} className="card-image" />
              {item.soldOut && <div className="sold-out">SOLD OUT</div>}
            </div>
            <h3 className="card-name">{item.name}</h3>
            <p className="card-price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchGrid;
