import React from 'react';
import './index.css';
import Home from './routes/Home';
import Career from './routes/Career';
import Contact from './routes/Contact';
import About from './routes/About';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element ={<Career />} />
        <Route path="/contact" element ={<Contact />} />
        <Route path="/about" element ={<About />} />
      </Routes>
    </>
  );
}

export default App;
