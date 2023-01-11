import React from "react";
import '../css/style.css'
import restarauntfood from '../images/restaurantfood.jpg'
import mario from '../images/MarioandAdrian.jpg'
const Main = () => {
    return (
        <main>
            <section class="heroSection">
        <div class="hero">
          <h2>Little Lemon Menu</h2>
          <h3>Chicago</h3>
          <p>Lorem ipsum Lorem ipsum Lorem</p>
          <p>Lorem ipsum Lorem ipsum Lorem</p>
          <p>Lorem ipsum Lorem ipsum Lorem</p>
          <div class="btn">
            <button>Reserve a Table</button>
          </div>
        </div>
        <div class="heroImg">
          <img src={restarauntfood} alt="Hero" />
        </div>
      </section>

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
      <section class="testimonials">
        <header class="tittle">
          <h2>Testimonials</h2>
        </header>
        <div class="cards">
          <div class="cardProfile">
            <p>Review</p>
            <div class="cardContent">
              <div class="cardImage">
                <img src ={mario} alt="Persona"/>
              </div>
              <div class="Persona">
                Alex
              </div>
            </div>
            <p>Rating</p>
          </div>
          <div class="cardProfile">
            <p>Review</p>
            <div class="cardContent">
              <div class="cardImage">
                <img src ={mario} alt="Persona"/>
              </div>
              <div class="Persona">
                Alex
              </div>
            </div>
            <p>Rating</p>
          </div>
          <div class="cardProfile">
            <p>Review</p>
            <div class="cardContent">
              <div class="cardImage">
                <img src ={mario} alt="Persona"/>
              </div>
              <div class="Persona">
                Alex
              </div>
            </div>
            <p>Rating</p>
          </div>
          <div class="cardProfile">
            <p>Review</p>
            <div class="cardContent">
              <div class="cardImage">
                <img src ={mario} alt="Persona"/>
              </div>
              <div class="Persona">
                Alex
              </div>
            </div>
            <p>Rating</p>
          </div>
        </div>
      </section>
        <section class="aboutSection">
        <div class="about">
          <h2>Little Lemon Menu</h2>
          <h3>Chicago</h3>
          <p>Lorem ipsum Lorem ipsum Lorem</p>
          <p>Lorem ipsum Lorem ipsum Lorem</p>
          <p>Lorem ipsum Lorem ipsum Lorem</p>
        </div>
        <div class="aboutImg">
          <img src={restarauntfood} alt="Hero" />
        </div>
      </section>
    </main>
    );
}

export default Main;