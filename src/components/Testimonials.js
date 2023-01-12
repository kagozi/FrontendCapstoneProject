import React from "react";
import '../css/style.css'
import mario from '../images/MarioandAdrian.jpg'

const Testimonials = () => {
    return (
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
    )
}

export default Testimonials;