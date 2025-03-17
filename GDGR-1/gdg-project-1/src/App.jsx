import { useState } from 'react';
import './App.css';
import GroupList from "./components/GroupList"
import CounterApk from "./components/CounterApk";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import User from "./components/User" 
import Contact from "./components/Contact" 
import WeekSix from "./components/WeekSix" 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:userId" element={<User />} /> 
        <Route path="/week-6" element={<WeekSix />} />

      </Routes>
    </Router>
  );
}

export default App;
