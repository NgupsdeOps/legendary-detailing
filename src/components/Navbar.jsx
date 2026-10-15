import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-950 border-b border-neutral-800 py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="text-xl font-black uppercase tracking-wider text-white">
          LEGENDARY <span className="text-red-600">DETAILING</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
          <Link to="/" className="text-white hover:text-red-500 transition-colors">
            Home
          </Link>
          <Link to="/gallery" className="text-white hover:text-red-500 transition-colors">
            Gallery
          </Link>
          <Link to="/blog" className="text-white hover:text-red-500 transition-colors">
            Blog
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link 
            to="/#booking" 
            className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-neutral-800 flex flex-col space-y-4 px-2">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="text-white text-sm font-semibold hover:text-red-500 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/gallery" 
            onClick={() => setIsOpen(false)}
            className="text-white text-sm font-semibold hover:text-red-500 transition-colors"
          >
            Gallery
          </Link>
          <Link 
            to="/blog" 
            onClick={() => setIsOpen(false)}
            className="text-white text-sm font-semibold hover:text-red-500 transition-colors"
          >
            Blog
          </Link>
          <Link 
            to="/#booking" 
            onClick={() => setIsOpen(false)}
            className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full text-center transition-colors mt-2"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}