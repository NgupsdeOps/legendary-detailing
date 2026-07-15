import React from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-900 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Legendary Detailing Logo" className="h-12 w-auto object-contain" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider text-neutral-300">
          <a href="#services" className="hover:text-red-500 transition-colors">Services</a>
          <a href="#about" className="hover:text-red-500 transition-colors">Locations</a>
          <a href="#book" className="hover:text-red-500 transition-colors">Contact</a>
        </div>

        {/* CTA Button */}
        <a 
          href="#book" 
          className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-lg text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-red-600/20"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}