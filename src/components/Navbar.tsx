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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cream shadow-sm py-2' : 'bg-black/75 py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className={`flex items-center space-x-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            <Logo />
            <span className="font-heading text-2xl font-light tracking-widest">Michelle Ocampo</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#gallery" className={`text-xs font-medium tracking-widest uppercase ${isScrolled ? 'text-charcoal hover:text-primary' : 'text-white hover:text-primary'} transition-colors duration-200`}>Portfolio</a>
            <a href="#about" className={`text-xs font-medium tracking-widest uppercase ${isScrolled ? 'text-charcoal hover:text-primary' : 'text-white hover:text-primary'} transition-colors duration-200`}>About</a>
            <a href="#contact" className={`text-xs font-medium tracking-widest uppercase ${isScrolled ? 'text-charcoal hover:text-primary' : 'text-white hover:text-primary'} transition-colors duration-200`}>Contact</a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream absolute top-full left-0 w-full shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#gallery" className="text-xs tracking-widest uppercase text-charcoal hover:text-primary transition-colors duration-200" onClick={() => setIsOpen(false)}>Portfolio</a>
            <a href="#about" className="text-xs tracking-widest uppercase text-charcoal hover:text-primary transition-colors duration-200" onClick={() => setIsOpen(false)}>About</a>
            <a href="#contact" className="text-xs tracking-widest uppercase text-charcoal hover:text-primary transition-colors duration-200" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;