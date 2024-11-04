import React from 'react';
import '../assets/styles/ProductOfTheMonth.css';
import Img from '../assets/imgs/01ChilliOil1.1.webp';
const ProductOfTheMonth = () => {
  return (
    <div className="product-container">
      <h2 className="product-title">PRODUCT OF THE MONTH</h2>
      <div className="product-content">
        {/* Thumbnail Section */}
        <div className="thumbnail-section">
          <img src={Img} alt="Thumbnail 1" className="thumbnail" />
          <img src={Img} alt="Thumbnail 2" className="thumbnail" />
        </div>

        {/* Main Image and Details */}
        <div className="main-section">
          <div className="image-container">
            <img src={Img} alt="Crispy Chili Oil" className="main-image" />
          </div>

          {/* Product Details */}
          <div className="details-section">
            <div className="product-header">
              <h1 className="product-name">CRISPY CHILI OIL</h1>
            </div>
            <p className="product-price">$12.00</p>
            <p className="product-description">
              Deliciously fiery and surprisingly versatile! Bold, aromatic chilies get a savory
              boost from garlic and shallots, while a hint of soy sauce adds a delightful umami depth.
              This Crispy Chili Oil will elevate any dish with its perfect balance of heat and crunch.
              Indulge in its irresistible flavors anytime you crave a burst of zesty excitement!
            </p>
            
            {/* Action Buttons */}
            <div className="button-group">
              <button className="add-to-cart">ADD TO CART</button>
              <button className="buy-now">BUY IT NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOfTheMonth;
