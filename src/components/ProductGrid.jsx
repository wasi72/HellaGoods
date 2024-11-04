import React from "react";
import "../assets/styles/ProductGrid.css";
import Img_1 from "../assets/imgs/01ChilliOil1.1.webp";
import Img_2 from "../assets/imgs/04Salt-UmamiChilli1.1.webp";
import Img_3 from "../assets/imgs/05WildGarlicRub1.1.webp";
import Img_4 from "../assets/imgs/06PinaPicanteHotSauce1.1.webp";
import Img_5 from "../assets/imgs/Beanie.webp";
import Img_6 from "../assets/imgs/Hat_-_White.webp";
import Img_7 from "../assets/imgs/Tee-green.webp";

const products = [
  {
    id: 1,
    name: "Hella Good Hat",
    price: "$40.00",
    imgSrc: Img_1,
    soldOut: false,
  },
  {
    id: 2,
    name: "Hella Good Beanie",
    price: "$40.00",
    imgSrc: Img_2,
    soldOut: false,
  },
  {
    id: 3,
    name: "Hella Good Tee",
    price: "$40.00",
    imgSrc: Img_3,
    soldOut: true,
  },
  {
    id: 4,
    name: "Wild Yuzu Garlic Rub",
    price: "$25.00",
    imgSrc: Img_4,
    soldOut: false,
  },
  {
    id: 5,
    name: "Very Good Spice Rub",
    price: "$25.00",
    imgSrc: Img_5,
    soldOut: true,
  },
  {
    id: 6,
    name: "Umami Chili Salt",
    price: "$17.00",
    imgSrc: Img_6,
    soldOut: false,
  },
  {
    id: 7,
    name: "Mellow Olive Oil",
    price: "$22.00",
    imgSrc: Img_7,
    soldOut: false,
  },
  {
    id: 8,
    name: "Bold Finishing Oil",
    price: "$20.00",
    imgSrc: Img_4,
    soldOut: false,
  },
  {
    id: 9,
    name: "Pina Picante Hot Sauce",
    price: "$12.00",
    imgSrc: Img_6,
    soldOut: false,
  },
  {
    id: 10,
    name: "Herby Italo Crumb Blend",
    price: "$25.00",
    imgSrc: Img_1,
    soldOut: false,
  },
  {
    id: 11,
    name: "Ghost Pepper Chili Salt",
    price: "$17.00",
    imgSrc: Img_3,
    soldOut: false,
  },
  {
    id: 12,
    name: "Everything Bagel",
    price: "$15.00",
    imgSrc: Img_2,
    soldOut: false,
  },
  {
    id: 13,
    name: "El Diablo Hot Sauce",
    price: "$12.00",
    imgSrc: Img_3,
    soldOut: false,
  },
  {
    id: 14,
    name: "Crispy Chili Oil Extra Spicy",
    price: "$12.00",
    imgSrc: Img_4,
    soldOut: false,
  },
  {
    id: 15,
    name: "Crispy Chili Oil",
    price: "$12.00",
    imgSrc: Img_5,
    soldOut: false,
  },
];

const ProductGrid = () => {
  return (
    <div className="product-grid-container">
      <h1>ALL</h1>
      <div className="filter-sort">
        <button className="filter-button">FILTER</button>
        <button className="sort-button">SORT</button>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.imgSrc} alt={product.name} />
              {product.soldOut && <span className="sold-out">SOLD OUT</span>}
            </div>
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <button
                className={product.soldOut ? "sold-out-button" : "add-to-cart"}
                disabled={product.soldOut}
              >
                {product.soldOut ? "SOLD OUT" : "ADD TO CART"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
