import React from 'react';
import { Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              <Logo />
              <span className="text-lg font-sans font-light tracking-wider">Michelle Ocampo</span>
            </div>
            <p className="text-gray-400 text-sm font-sans">Wedding Photography</p>
          </div>
          
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <div className="flex space-x-6 mb-3">
              <a href="mailto:hello@michelleocampo.com" className="hover:text-gray-300 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <a href="tel:917-353-3308" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <Phone className="h-4 w-4" />
              <span>917-353-3308</span>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Michelle Ocampo Photography</p>
            <p className="text-gray-500 text-xs mt-1">All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;