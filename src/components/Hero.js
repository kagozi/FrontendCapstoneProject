import restarauntfood from '../images/restaurantfood.jpg'
const Hero = () => {
    return (
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
    );
}

export default Hero;