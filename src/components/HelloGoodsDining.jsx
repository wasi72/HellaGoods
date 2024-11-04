import React from 'react';
import '../assets/styles/HelloGoodsDining.css';
import backgroundVideo from '../assets/imgs/vedio.mp4';

const HellaGoodDining = () => {
  return (
    <div className="hella-good-dining">
      {/* Background Video */}
      <video className="background-video" src={backgroundVideo} autoPlay loop muted></video>

      {/* Badge moved outside of the main card */}
      <div className="badge">LET US COOK!</div>

      {/* Content Overlay */}
      <div className="content-overlay">
        <div className="content">
          <h1 className="main-title">HELLA GOOD DINING</h1>
          <p className="subtext">Quality street food in quality cities.</p>
          <button className="cta-button">OUR RESTAURANTS</button>
        </div>
      </div>
    </div>
  );
};

export default HellaGoodDining;
