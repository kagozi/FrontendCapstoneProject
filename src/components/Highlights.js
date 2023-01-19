import React from "react";
import '../css/style.css'
import menu1 from '../images/menu1.jpg'
import menu2 from '../images/menu2.jpg'
import menu3 from '../images/menu3.jpg'
import menu4 from '../images/menu4.jpg'
import menu5 from '../images/menu5.jpg'
import menu6 from '../images/menu6.jpg'
import { Link, Routes } from "react-router-dom";
const Highlights = () => {
    return (
   <section class="menu" id="menu">
      <div class="title">
        <h2 class="titleText">Our <span>M</span>enu</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div class="content">
        <div class="box">
          <div class="imgBx">
            <img src={menu1} alt="menu salad" />
          </div>
          <div class="text">
            <h3>Special Salads</h3>
          </div>
        </div>

        <div class="box">
          <div class="imgBx">
            <img src={menu2} alt="menu soup" />
          </div>
          <div class="text">
            <h3>Special Soup</h3>
          </div>
        </div>

        <div class="box">
          <div class="imgBx">
            <img src={menu3} alt="menu pasta" />
          </div>
          <div class="text">
            <h3>Special Pasta</h3>
          </div>
        </div>

        <div class="box">
          <div class="imgBx">
            <img src={menu4} alt="menu salada 2" />
          </div>
          <div class="text">
            <h3>Special Salads</h3>
          </div>
        </div>

        <div class="box">
          <div class="imgBx">
            <img src={menu5} alt="menu soup 2" />
          </div>
          <div class="text">
            <h3>Special Soup</h3>
          </div>
        </div>

        <div class="box">
          <div class="imgBx">
            <img src={menu6} alt="menu pasta 2" />
          </div>
          <div class="text">
            <h3>Special Pasta</h3>
          </div>
        </div>
      </div>
      <div class="title">
        <Link to="#" class="btn">View All</Link>
      </div>
    </section>
    );
};

export default Highlights;