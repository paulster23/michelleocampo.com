import React from 'react';
import { Camera, Heart, Mail, Instagram, MapPin, Calendar } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-light">
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;