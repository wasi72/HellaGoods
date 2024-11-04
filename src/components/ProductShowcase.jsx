import React, { useState } from "react";
import Img1 from '../assets/imgs/06PinaPicanteHotSauce1.1.webp';
import Img2 from '../assets/imgs/05WildGarlicRub1.1.webp';
import Img3 from '../assets/imgs/04Salt-UmamiChilli1.1.webp';
import Img4 from '../assets/imgs/01ChilliOil1.1.webp';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "../assets/styles/ProductShowcase.css";

const products = [
  { name: "Pina Picante Hot Sauce", price: 20, salePrice: 12, volume: "148ML", label: "HOT", status: "On Sale", imgSrc: Img1 },
  { name: "Wild Yuzu Garlic Rub", price: 25, weight: "500G", label: "Zesty Flavour", description: "This vibrant blend of tangy yuzu and bold garlic is your ticket to zesting up any dish.", imgSrc: Img2 },
  { name: "Very Good Spice Rub", price: 25, weight: "500G", label: "Umami Bomb", status: "Sold Out", imgSrc: Img3 },
  { name: "Extra Hot Pina Picante", price: 22, salePrice: 15, volume: "148ML", label: "EXTREME", status: "On Sale", imgSrc: Img4 },
  { name: "Wild Yuzu Garlic Rub - Extra", price: 27, weight: "500G", label: "Extra Zesty", description: "A more intense version of our tangy yuzu and bold garlic blend.", imgSrc: Img1 },
  { name: "Ultimate Spice Rub", price: 28, weight: "500G", label: "Flavor Explosion", imgSrc: Img1 },
  { name: "Pina Picante Mild", price: 18, volume: "148ML", label: "MILD", imgSrc: Img1 },
  { name: "Classic Yuzu Garlic Rub", price: 24, weight: "500G", label: "Classic", description: "A classic balance of yuzu and garlic for any recipe.", imgSrc: Img2 },
  { name: "Basic Spice Rub", price: 20, weight: "500G", label: "Basic", status: "Sold Out", imgSrc: Img3 }
];

const ProductDisplay = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextProduct = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const currentProducts = [
    products[(startIndex - 1 + products.length) % products.length],
    products[startIndex],
    products[(startIndex + 1) % products.length]
  ];

  return (
    <div className="product-display">
      <h2 className="product-heading">OUR GOODS</h2>
      <p className="subheading">You'll be cooking like Carmy in no time.</p>
      
      <div className="product-carousel">
        <div className="product-grid">
          {currentProducts.map((product, index) => (
            <div className={`product-card ${index === 1 ? "center-card" : ""}`} key={index}>
              <div className="product-image">
                {product.status && (
                  <div className="product-status">
                    {product.status === "On Sale" && <span className="on-sale">ON SALE</span>}
                    {product.status === "Sold Out" && <span className="sold-out">SOLD OUT</span>}
                  </div>
                )}
                <img src={product.imgSrc} alt={product.name} />
                {product.label && <span className="product-label">{product.label}</span>}
              </div>
              <div className="product-info">
                <h3>{product.name.toUpperCase()}</h3>
                <p>{product.weight || product.volume}</p>
                <p className="price">
                  {product.salePrice ? (
                    <>
                      <span className="original-price">${product.price}.00</span> ${product.salePrice}.00
                    </>
                  ) : (
                    `$${product.price}.00`
                  )}
                </p>
                {product.description && <p className="description">{product.description}</p>}
              </div>
            </div>
          ))}
        </div>
        
        <div className="carousel-icons">
          <ChevronLeftIcon onClick={prevProduct} className="carousel-icon" />
          <ChevronRightIcon onClick={nextProduct} className="carousel-icon" />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
