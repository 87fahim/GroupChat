// App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Chess from './components/chess/Chess'
import CreateAccount from './components/createaccount/CreateAccount';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path='/chess' element={<Chess/>}/>
                    <Route path='/createaccount' element={<CreateAccount/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
