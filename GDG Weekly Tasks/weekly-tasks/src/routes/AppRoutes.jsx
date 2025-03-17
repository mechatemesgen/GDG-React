import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home/Home";
import Week1 from "../pages/Week1/week1";
import Week2 from "../pages/Week2/Week2";
import Week3 from "../pages/Week3/Week3";
import Week4 from "../pages/Week4/week4";
import Week5 from "../pages/Week5/week5";
import Week6 from "../pages/Week6/week6";
import Week7 from "../pages/Week7/week7";

function AppRoutes() {
    return (
        <Router>
            <nav className="bg-gray-800 p-4 fixed top-0 left-0 right-0 z-10">
                <ul className="flex space-x-4 justify-end">
                    <li><Link className="text-white hover:text-gray-400" to="/">Home</Link></li>
                    <li><Link className="text-white hover:text-gray-400" to="/week1">Week 1</Link></li>
                    <li><Link className="text-white hover:text-gray-400" to="/week2">Week 2</Link></li>
                    <li><Link className="text-white hover:text-gray-400" to="/week3">Week 3</Link></li>
                    <li><Link className="text-white hover:text-gray-400" to="/week4">Week 4</Link></li>
                    <li><Link className="text-white hover:text-gray-400" to="/week5">Week 5</Link></li>
                    <li><Link className="text-white hover:text-gray-400" to="/week6">Week 6</Link></li>
                    <li><Link className="text-white hover:text-gray-400" to="/week7">Week 7</Link></li>
                </ul>
            </nav>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/week1" element={<Week1 />} />
                <Route path="/week2" element={<Week2 />} />
                <Route path="/week3" element={<Week3 />} />
                <Route path="/week4" element={<Week4 />} />
                <Route path="/week5" element={<Week5 />} />
                <Route path="/week6" element={<Week6 />} />
                <Route path="/week7" element={<Week7 />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes