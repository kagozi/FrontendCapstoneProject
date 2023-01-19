import React from "react";
import { Routes, Route} from "react-router-dom";
import '../css/style.css'
import HomePage from "./Homepage";
import Booking from "./Booking";

const Main = () => {
    return ( 
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<Booking/>}/>
        </Routes>
        </main>
 
    );
}

export default Main;