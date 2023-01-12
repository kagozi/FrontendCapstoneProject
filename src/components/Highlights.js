import React from "react";
import '../css/style.css'
import restarauntfood from '../images/restaurantfood.jpg'

const Highlights = () => {
    return (
        <section class="highlightsSection">
        <div class="highlights">
          <div class="header">
            <h4 class="menu-items">Specials</h4>
            <button class="viewMenu">Online Menu</button>
          </div>
          <div class="card-section">
            <div class="card">
              <div class="card-image">
                <img src={restarauntfood} alt="card" />
              </div>
              <div class="card-body">
                <div class="card-info">
                  <h4 class="item">Greek Salad</h4>
                  <h4 class="price">$12.99</h4>
                </div>
                <p>
                  Enjoy great deals on the best Greek salad recipe in this part
                  of the hemisphere from as little as $12.99
                </p>
              </div>
              <div class="card-footer">
                <p>Order a delivery</p>
                <p>Icon</p>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <img src={restarauntfood} alt="card" />
              </div>
              <div class="card-body">
                <div class="card-info">
                  <h4 class="item">Greek Salad</h4>
                  <h4 class="price">$12.99</h4>
                </div>
                <p>
                  Enjoy great deals on the best Greek salad recipe in this part
                  of the hemisphere from as little as $12.99
                </p>
              </div>
              <div class="card-footer">
                <p>Order a delivery</p>
                <p>Icon</p>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <img src={restarauntfood} alt="card" />
              </div>
              <div class="card-body">
                <div class="card-info">
                  <h4 class="item">Greek Salad</h4>
                  <h4 class="price">$12.99</h4>
                </div>
                <p>
                  Enjoy great deals on the best Greek salad recipe in this part
                  of the hemisphere from as little as $12.99
                </p>
              </div>
              <div class="card-footer">
                <p>Order a delivery</p>
                <p>Icon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Highlights;