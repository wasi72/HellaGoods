import React from 'react';
import '../assets/styles/Newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>SIGN UP TO OUR NEWSLETTER</h2>
      <p>Receive special offers and first look at new products.</p>
      <div className="newsletter-input-container">
        <input
          type="email"
          placeholder="email@example.com"
          aria-label="Email address"
        />
        <button>SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default Newsletter;
