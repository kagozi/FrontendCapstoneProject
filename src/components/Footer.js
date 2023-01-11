import logo from '../images/Logo.svg'
const Footer = () => {
    return (
           <footer class="footerSection">
      <div class="footerItems">
        <div class="footerLogo">
           <a href="#">
              <img src={logo} alt="logo" />
            </a>
        </div>
        <div class="footerMenu">
          <h4>Doormat Navigation</h4>
           <ul>
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
           </ul>
        </div>
         <div class="footerMenu">
          <h4>Customer Support</h4>
           <ul>
            <li>
            <a href="#">
              <p>Log In</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Contact Us</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Claims</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Discounts</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Privacy Policy</p>
            </a>
          </li>
           </ul>
        </div>
         <div class="footerMenu">
          <h4>Social Media</h4>
           <ul>
            <li>
            <a href="#">
              <p>Facebook</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Instagram</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Twitter</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Medium</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Reddit</p>
            </a>
          </li>
           </ul>
        </div>
      </div>
    </footer>
    );
} 
export default Footer;