import React from 'react';
import { ShieldCheck, CalendarRange, MapPin } from 'lucide-react';
import heroBg from '../assets/madza.png';
import logo from '../assets/logo.png'; // Importing your custom logo

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center py-24 px-6 overflow-hidden">
      {/* Dynamic Background Image with Charcoal/Red Radial Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-neutral-950/90 to-neutral-950" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-neutral-950/75" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <span className="px-4 py-1.5 rounded-full bg-red-600/10 text-red-500 text-xs font-extrabold uppercase tracking-widest border border-red-600/25 mb-8 inline-block">
          Johannesburg's Premier Auto Valet
        </span>

        {/* Large Logo with Premium Red Backlight Glow */}
        <div className="flex justify-center mb-8">
        <img 
  src={logo} 
  alt="Legendary Detailing" 
  className="mx-auto w-48 md:w-64 h-auto object-contain"
/>
        </div>

        <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
          Premium detailing, multi-stage paint correction, and elite ceramic coatings. Restoring a permanent show-room sheen to your vehicle.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a 
            href="#book" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-red-600/20"
          >
            Book Appointment
          </a>
          <a 
            href="#services" 
            className="bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition-all duration-300"
          >
            Our Packages
          </a>
        </div>

        {/* Fast Facts bar */}
        <div className="grid md:grid-cols-3 gap-6 border-t border-neutral-900 pt-12 max-w-4xl mx-auto text-left">
          <div className="flex gap-4 items-start">
            <div className="p-2 bg-neutral-900 rounded-lg text-red-500"><CalendarRange size={20} /></div>
            <div>
              <h4 className="font-bold text-white uppercase text-sm">Mon - Sun</h4>
              <p className="text-neutral-400 text-xs">8am to 5pm</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-2 bg-neutral-900 rounded-lg text-red-500"><MapPin size={20} /></div>
            <div>
              <h4 className="font-bold text-white uppercase text-sm">Johannesburg</h4>
              <p className="text-neutral-400 text-xs">Mayfield Park & Alveda Park</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-2 bg-neutral-900 rounded-lg text-red-500"><ShieldCheck size={20} /></div>
            <div>
              <h4 className="font-bold text-white uppercase text-sm">Quality Guaranteed</h4>
              <p className="text-neutral-400 text-xs">All work strictly by appointment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}