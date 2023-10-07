import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import

import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

import About from './pages/About';
import Home from './pages/Home';

import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;