'use client'
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className='bg-rose-300 text-black'>
      <Navbar />
      <div className="p-6">
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;


