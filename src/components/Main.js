import React from "react";
import { Routes, Route} from "react-router-dom";
import '../css/style.css'
import HomePage from "./Homepage";
import Booking from "./Booking";
import About from "./About";
import ConfirmedBooking from "./ConfirmedBooking";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
const Main = () => {
    return ( 
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Highlights />} />
                <Route path="/testimonials" element={<Testimonials/>}/>
                <Route path='/confirmed' element={<ConfirmedBooking/>} />
        </Routes>
        </main>
 
    );
}

export default Main;