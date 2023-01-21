import React from "react";
import '../css/style.css'
import menu1 from '../images/menu1.jpg'
import menu2 from '../images/menu2.jpg'
import menu3 from '../images/menu3.jpg'
import menu4 from '../images/menu4.jpg'
import menu5 from '../images/menu5.jpg'
import menu6 from '../images/menu6.jpg'
import { Link} from "react-router-dom";
const Highlights = () => {
    return (
   <section className="menu" id="menu">
      <div className="title">
        <h2 className="titleText">Our <span>M</span>enu</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="content">
        <div className="box">
          <div className="imgBx">
            <img src={menu1} alt="menu salad" />
          </div>
          <div className="text">
            <h3>Special Salads</h3>
          </div>
        </div>

        <div className="box">
          <div className="imgBx">
            <img src={menu2} alt="menu soup" />
          </div>
          <div className="text">
            <h3>Special Soup</h3>
          </div>
        </div>

        <div className="box">
          <div className="imgBx">
            <img src={menu3} alt="menu pasta" />
          </div>
          <div className="text">
            <h3>Special Pasta</h3>
          </div>
        </div>

        <div className="box">
          <div className="imgBx">
            <img src={menu4} alt="menu salada 2" />
          </div>
          <div className="text">
            <h3>Special Salads</h3>
          </div>
        </div>

        <div className="box">
          <div className="imgBx">
            <img src={menu5} alt="menu soup 2" />
          </div>
          <div className="text">
            <h3>Special Soup</h3>
          </div>
        </div>

        <div className="box">
          <div className="imgBx">
            <img src={menu6} alt="menu pasta 2" />
          </div>
          <div className="text">
            <h3>Special Pasta</h3>
          </div>
        </div>
      </div>
      <div className="title">
        <Link to="#" className="btn">View All</Link>
      </div>
    </section>
    );
};

export default Highlights;