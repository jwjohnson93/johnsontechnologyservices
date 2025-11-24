import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Logo className="h-8 mb-4 opacity-90" />
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Johnson Technology Services. <br className="md:hidden" />All rights reserved.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
          <p className="text-sm font-medium text-gray-700">
            Serving Greenville and Pitt County, North Carolina
          </p>
          <div className="flex gap-6 mt-2">
            <a href="#hero" className="text-sm text-gray-500 hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-sm text-gray-500 hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-sm text-gray-500 hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="text-sm text-gray-500 hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;