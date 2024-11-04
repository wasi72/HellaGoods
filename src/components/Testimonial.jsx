import React, { useState } from 'react';
import '../assets/styles/Testimonial.css';

function Testimonial() {

  const testimonials = [
    {
      quote: "THIS HOT SAUCE IS THE PERFECT BLEND OF HEAT AND FLAVOR. IT'S BECOME A KITCHEN STAPLE, ENHANCING EVERY DISH WITHOUT OVERPOWERING IT. HIGHLY RECOMMEND TO ALL SPICE LOVERS!",
      author: "AUGUSTE GUSTEAU"
    },
    {
      quote: "AN ABSOLUTE MUST-HAVE IN EVERY KITCHEN. THE FLAVOR IS UNMATCHED, AND IT ADDS A SPECIAL KICK TO ALL MY DISHES!",
      author: "JULIA CHILD"
    },
    {
      quote: "THE PERFECT BALANCE OF SPICE AND TASTE! I LOVE HOW IT ENHANCES EVERY MEAL WITHOUT BEING TOO OVERPOWERING.",
      author: "GORDON RAMSAY"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="testimonial-section">
      <div className="wavy-border"></div>
      <h2>WORD ON THE STREET</h2>
      <p className="quote">“{testimonials[currentIndex].quote}”</p>
      <p className="author">{testimonials[currentIndex].author}</p>
      <div className="arrows">
        <span className="arrow" onClick={handlePrev}>&#9664;</span>
        <span className="arrow" onClick={handleNext}>&#9654;</span>
      </div>
    </section>
  );
}

export default Testimonial;
