import React from "react";
import '../css/style.css';
import logo from '../images/Logo.svg'
const Header = () => {
    return (
<header>
      <nav class="primary-menu">
        <ul>
          <li>
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <p>Home</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>About</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Menu</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Reservations</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Order Online</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Log in</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
    );
};

export default Header;