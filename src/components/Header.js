import React from "react";
import { Link } from 'react-router-dom';
import '../css/style.css';
import logo from '../images/Logo.svg'
const Header = () => {
    return (
<header>
      <Link to ="/" class="logo"><img src={logo} alt="logo" /></Link>
      <div class="menuToggle" onclick="toggleMenu()"></div>
        <ul class="navigation">
        <li><Link to="#banner" onclick="toggleMenu()">Home</Link></li>
        <li><Link to="/about" onclick="toggleMenu()">About</Link></li>
        <li><Link to="/menu" onclick="toggleMenu()">Menu</Link></li>
        <li><Link to="/expert" onclick="toggleMenu()">Expert</Link></li>
        <li><Link to="/testimonials" onclick="toggleMenu()">Testimonials</Link></li>
        <li><Link to="/booking" onclick="toggleMenu()">Book Now</Link></li>
      </ul>
    </header>
    );
};

export default Header;