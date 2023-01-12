import React from "react";
import '../css/style.css'
import Highlights from "./Highlights";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import About from "./About";

const HomePage = () => {
    return (
      <main>
        <Hero/>
        <Highlights/>
        <Testimonials />
        <About/>
    </main>
    );
}

export default HomePage;