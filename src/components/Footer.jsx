import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function Footer({ setModalType }) {
  return (
    <footer id="about" className="border-t border-neutral-900 bg-neutral-950 py-16 px-6 text-neutral-400">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div>
          <h3 className="text-white uppercase font-black tracking-widest text-md mb-6">Contact Channels</h3>
          <div className="space-y-4 text-sm">
            <p className="flex items-center gap-3">
              <Phone size={16} className="text-red-500" />
              <span>074 835 2488</span>
            </p>
            <p className="flex items-center gap-3">
              <Phone size={16} className="text-red-500" />
              <span>063 779 4062</span>
            </p>
            <div className="pt-2">
              <span className="inline-block bg-neutral-900 text-red-500 text-xs font-bold px-3 py-1 rounded-full border border-red-500/10">
                Call / WhatsApp Available
              </span>
            </div>
          </div>
        </div>

        {/* Branch Locations */}
        <div>
          <h3 className="text-white uppercase font-black tracking-widest text-md mb-6">Our Locations</h3>
          <div className="space-y-4 text-sm">
            <p className="flex items-start gap-3">
              <MapPin size={16} className="text-red-500 shrink-0 mt-0.5" />
              <span>19 Alabaster ave, Johannesburg, Mayfield Park (Location 1)</span>
            </p>
            <p className="flex items-start gap-3">
              <MapPin size={16} className="text-red-500 shrink-0 mt-0.5" />
              <span>121 Sycamore st, Johannesburg, Alveda park (Location 2)</span>
            </p>
          </div>
        </div>

        {/* Social Accounts & Legal Buttons */}
        <div>
          <h3 className="text-white uppercase font-black tracking-widest text-md mb-6">Socials & Legal</h3>
          <div className="space-y-4 text-sm flex flex-col">
            <a 
              href="https://www.tiktok.com/@legendary.detaili?_r=1&_t=ZS-980M1A3R6uL" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-3 hover:text-red-500 transition-colors"
            >
              <span>🎵</span>
              <span>TikTok: @legendary.detaili</span>
            </a>
            <a 
              href="https://www.instagram.com/legendarydetailing_carwash?igsh=MW84Nm0ybmJsa3VveA%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-3 hover:text-red-500 transition-colors mb-4"
            >
              <span className="text-red-500">📸</span>
              <span>Instagram: @legendarydetailing_carwash</span>
            </a>
            
            {/* Clean Popup triggers */}
            <button 
              onClick={() => setModalType('privacy')}
              className="text-left text-xs text-neutral-500 hover:text-red-500 transition-colors cursor-pointer focus:outline-none"
            >
              🛡️ Privacy Policy
            </button>
            <button 
              onClick={() => setModalType('terms')}
              className="text-left text-xs text-neutral-500 hover:text-red-500 transition-colors cursor-pointer focus:outline-none"
            >
              ⚖️ Terms & Conditions
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-neutral-900 mt-12 pt-6 text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} Legendary Detailing & Carwash. All rights reserved.
      </div>
    </footer>
  );
}