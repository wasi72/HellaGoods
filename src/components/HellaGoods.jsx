import React, { useEffect, useState } from "react";
import "../assets/styles/HellaGoods.css";
import Img from '../assets/imgs/Hella_Goods_Hero_Header_02_2.webp';

const HellaGoods = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Update scroll position for circular movement
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hella-goods-container">
      <h1 className="main-text">HELLA GOODS</h1>
      <div className="image-wrapper">
        <img
          src= {Img}
          alt="Static Visual Representation"
          className="static-image"
        />
      </div>
      <div className="moving-images">
        <div
          className="moving-image right-img"
          style={{
            transform: `rotate(${scrollPosition * 0.1}deg)`,
          }}
        ></div>
        <div
          className="moving-image left-img"
          style={{
            transform: `rotate(-${scrollPosition * 0.1}deg)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default HellaGoods;
