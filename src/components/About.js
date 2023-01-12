import restarauntfood from '../images/restaurantfood.jpg'
const About = () => {
    return (
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
    );
};

export default About;