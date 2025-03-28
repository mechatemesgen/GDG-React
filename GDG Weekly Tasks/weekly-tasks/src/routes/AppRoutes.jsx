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
import Week8 from "../pages/Week8/week8";


// Import week 4 components
import SubHome from "../components/Week4/pages/Home";
import About from "../components/Week4/pages/About";
import Contact from "../components/Week4/pages/Contact";
import UserProfile from "../components/Week4/pages/UserProfile";
import NotFound from "../components/Week4/pages/NotFound";


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
                    <li><Link className="text-white hover:text-gray-400" to="/week8">Week 8</Link></li>
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
                <Route path="/week8" element={<Week8 />} />
           
                {/* Week 4 Tasks */}
                <Route path="/home" element={<SubHome />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/user/:userId" element={<UserProfile />} />
                
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes