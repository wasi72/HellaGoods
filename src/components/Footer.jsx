import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MusicNoteIcon from "@mui/icons-material/MusicNote"; 
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentIcon from "@mui/icons-material/Payment";
import "../assets/styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container-hellagoods">
      <div className="footer-top-hellagoods">
        <p>This is a demo store. Hella Goods packaging design by James Karanikos.</p>
        <div className="footer-social-icons-hellagoods">
          <InstagramIcon />
          <MusicNoteIcon /> 
          <YouTubeIcon />
          <WhatsAppIcon />
        </div>
      </div>
      <div className="footer-links-hellagoods">
        <Link to="/shop">Shop</Link>
        <Link to="/restaurant">Restaurant</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/about">About</Link>
        <Link to="/search">Search</Link>
        <Link to="/shipping">Shipping</Link>
        <Link to="/returns">Returns</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="footer-newsletter-hellagoods">
        <h2 className="footer-newsletter-title-hellagoods">SIGN UP TO OUR NEWSLETTER</h2>
        <div className="footer-newsletter-input-hellagoods">
          <input type="email" placeholder="email@example.com" />
          <button>SUBSCRIBE</button>
        </div>
        <div className="footer-payment-methods-hellagoods">
          <CreditCardIcon />
          <PaymentIcon />
          <PaymentIcon />
          <PaymentIcon />
          <PaymentIcon />
        </div>
      </div>
      <div className="footer-bottom-hellagoods">
        <p>© 2024, Hella Goods. Powered by Shopify</p>
      </div>
      <div className="footer-logo-hellagoods">
        <h1>HELLA GOODS</h1>
      </div>
    </footer>
  );
};

export default Footer;
