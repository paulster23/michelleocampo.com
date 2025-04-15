import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-2' : 'bg-black/60 py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className={`flex items-center space-x-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            <Logo />
            <span className="text-xl font-sans font-light tracking-wider">Michelle Ocampo</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#gallery" className={`text-sm font-medium ${isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-gray-200'} transition-colors`}>Portfolio</a>
            <a href="#about" className={`text-sm font-medium ${isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-gray-200'} transition-colors`}>About</a>
            <a href="#contact" className={`text-sm font-medium ${isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-gray-200'} transition-colors`}>Contact</a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#gallery" className="text-sm hover:text-gray-500 transition-colors" onClick={() => setIsOpen(false)}>Portfolio</a>
            <a href="#about" className="text-sm hover:text-gray-500 transition-colors" onClick={() => setIsOpen(false)}>About</a>
            <a href="#contact" className="text-sm hover:text-gray-500 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;