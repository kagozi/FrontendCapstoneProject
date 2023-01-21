import React from "react";
import { Link } from 'react-router-dom';
import '../css/style.css';
import logo from '../images/Logo.svg'
const Header = () => {
    return (
<header>
      <Link to ="/" className="logo"><img src={logo} alt="logo" /></Link>
      <div className="menuToggle" ></div>
        <ul className="navigation">
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/menu" >Menu</Link></li>
        <li><Link to="/testimonials" >Testimonials</Link></li>
        <li><Link to="/booking" >Book Now</Link></li>
      </ul>
    </header>
    );
};

export default Header;