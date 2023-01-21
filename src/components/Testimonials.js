import React from "react";
import '../css/style.css'
import person1 from '../images/testi1.jpg'
import person2 from '../images/testi2.jpg'
import person3 from '../images/testi3.jpg'


const Testimonials = () => {
    return (
    <section className="testimonials" id="testimonials">
      <div className="title white">
        <h2 className="titleText">They <span>S</span>aid about Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="content">
        <div className="box">
          <div className="imgBx">
            <img src={person1} alt="Someone Famous" />
          </div>
          <div className="text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              similique minima rerum odit assumenda voluptatibus, vel error
              officiis.
            </p>
            <h3>Someone Famous</h3>
          </div>
        </div>

        <div className="box">
          <div className="imgBx">
            <img src={person2} alt="Someone Famous" />
          </div>
          <div className="text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              similique minima rerum odit assumenda voluptatibus, vel error
              officiis.
            </p>
            <h3>Someone Famous</h3>
          </div>
        </div>

        <div className="box">
          <div className="imgBx">
            <img src={person3} alt="Someone Famous" />
          </div>
          <div className="text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              similique minima rerum odit assumenda voluptatibus, vel error
              officiis.
            </p>
            <h3>Someone Famous</h3>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Testimonials;