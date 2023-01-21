import logo from '../images/Logo.svg'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
           <footer className="footerSection">
      <div className="footerItems">
        <div className="footerLogo">
           <Link  to="#">
              <img src={logo} alt="logo" />
            </Link>
        </div>
        <div className="footerMenu">
          <h4>Doormat Navigation</h4>
           <ul>
            <li>
            <Link to="#">  
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="#"> 
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link to="#"> 
              <p>Menu</p>
            </Link>
          </li>
          <li>
            <Link to="#"> 
              <p>Reservations</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <p>Order Online</p>
            </Link>
          </li>
           </ul>
        </div>
         <div className="footerMenu">
          <h4>Customer Support</h4>
           <ul>
            <li>
            <Link to="#">
              <p>Log In</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <p>Contact Us</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <p>Claims</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <p>Discounts</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <p>Privacy Policy</p>
            </Link>
          </li>
           </ul>
        </div>
         <div className="footerMenu">
          <h4>Social Media</h4>
           <ul>
            <li>
            <Link to="#">
              <p>Facebook</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <p>Instagram</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <p>Twitter</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <p>Medium</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <p>Reddit</p>
            </Link>
          </li>
           </ul>
        </div>
      </div>
    </footer>
    );
} 
export default Footer;