import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <ul className="nav-links">
                    <li className="dropdown">
                        SHOP <span className="dropdown-icon">▼</span>
                        <div className="dropdown-content">
                            <Link to="/allprod">Wild Yuzu Garlic Rub</Link>
                            <Link to="/allprod">Very Good Spice Rub</Link>
                            <Link to="/allprod">Umami Chili Salt</Link>
                            <Link to="/allprod">Pina Picante Hot Sauce</Link>
                            <Link to="/allprod">View All Items</Link>
                        </div>
                    </li>
                    <li><Link to='/restaurent'>RESTAURANT</Link></li>
                    <li><Link to='/recipes'>RECIPES</Link></li>
                    <li><Link to='/about'>ABOUT</Link></li>
                </ul>
                <div className="hamburger-icon" onClick={toggleMobileMenu}>
                    <MenuIcon />
                </div>
            </div>
            <div className="navbar-center">
                <h1 className="logo"><Link to='/'>HELLAGOODS</Link></h1>
            </div>
            <div className="navbar-right">
                <SearchIcon className="icon" />
                <ShoppingCartIcon className="icon" />
                <button className="shop-button"><Link to='/allprod'>SHOP</Link></button>
            </div>
            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <ul className="mobile-nav-links">
                        <li><Link to='#'>SHOP</Link></li>
                        <li><Link to='#'>RESTAURANT</Link></li>
                        <li><Link to='#'>RECIPES</Link></li>
                        <li><Link to='#'>ABOUT</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
