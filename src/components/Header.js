import React from "react";
import { Link } from 'react-router-dom';
import '../css/style.css';
import logo from '../images/Logo.svg'
const Header = () => {
    return (
<header>
      <nav class="primary-menu">
        <ul>
          <li>
            <Link to ="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li>
            <Link to ="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to ="/about">
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link to ="/menu">
              <p>Menu</p>
            </Link>
          </li>
          <li>
            <Link to ="/reservations">
              <p>Reservations</p>
            </Link>
          </li>
          <li>
            <Link to ="/booking">
              <p>Order Online</p>
            </Link>
          </li>
          <li>
            <Link to ="/">
              <p>Log in</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    );
};

export default Header;