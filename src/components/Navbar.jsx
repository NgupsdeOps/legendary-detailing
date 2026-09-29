import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 sticky top-0 z-50 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        <Link 
          to="/" 
          onClick={closeMenu}
          className="text-xl font-black uppercase tracking-wider text-white hover:text-neutral-200 transition-colors"
        >
          Legendary <span className="text-red-600">Detailing</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider">
          <Link 
            to="/" 
            className={`transition-colors duration-200 ${
              location.pathname === '/' ? 'text-red-600' : 'text-neutral-300 hover:text-white'
            }`}
          >
            Home
          </Link>

          <Link 
            to="/gallery" 
            className={`transition-colors duration-200 ${
              location.pathname === '/gallery' ? 'text-red-600' : 'text-neutral-300 hover:text-white'
            }`}
          >
            Gallery
          </Link>

          <a 
            href="/#booking" 
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all transform hover:scale-105"
          >
            Book Now
          </a>
        </div>

        <button
          onClick={toggleMenu}
          type="button"
          className="md:hidden text-neutral-300 hover:text-white focus:outline-none p-2"
          aria-label="Toggle navigation menu"
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

      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-neutral-800 flex flex-col gap-4 text-xs font-bold uppercase tracking-wider text-center animate-fadeIn">
          <Link 
            to="/" 
            onClick={closeMenu}
            className={`py-2 transition-colors ${
              location.pathname === '/' ? 'text-red-600' : 'text-neutral-300 hover:text-white'
            }`}
          >
            Home
          </Link>

          <Link 
            to="/gallery" 
            onClick={closeMenu}
            className={`py-2 transition-colors ${
              location.pathname === '/gallery' ? 'text-red-600' : 'text-neutral-300 hover:text-white'
            }`}
          >
            Gallery
          </Link>

          <a 
            href="/#booking" 
            onClick={closeMenu}
            className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl transition-all"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}