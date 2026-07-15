import React from 'react';
import { PlayCircle, Sparkles } from 'lucide-react';

// ==========================================
// 📸 THE CORRECT WAY TO SHOW IMAGES ON VERCEL:
// ==========================================
// 1. Drop your images/videos inside: "src/assets/"
// 2. IMPORT them at the top of this file.
// ==========================================

import carReflections from '../assets/JG.png'; // Capital W to match your folder!
import coatingApp from '../assets/HR TSI.png';        // Using hero.png since wash2.png doesn't exist
import videoShowcase from '../assets/enginewash.mp4'; // Using enginewash.mp4 instead of wash_video.mp4
import redgolf from '../assets/redgolf.png';
import TSIENGINE from '../assets/TSIENGINE.png';
import FDTYRES from '../assets/FDTYRES.mp4';
import classic from '../assets/classic.png';

// This is how you reference them in your list:


const galleryItems = [
  { 
    id: 1, 
    type: 'image', 
    url: carReflections, // Use the imported variable, NOT a string path
    title: 'Showroom Reflection Finish' 
  },
  { 
    id: 2, 
    type: 'image', 
    url: coatingApp, // Use the imported variable
    title: 'Ceramic Coating Application' 
  },
  { 
    id: 3, 
    type: 'video', 
    url: videoShowcase, // Use the imported variable
    title: 'Full Polish Video Tour' 
  },
{ 
    id: 4, 
    type: 'image', 
    url: redgolf, // Use the imported variable
    title: 'Red Golf Showcase' 
  },
{ 
    id: 5, 
    type: 'image', 
    url: TSIENGINE, // Use the imported variable
    title: 'TSI Engine Detailing' 
  },
{ 
    id: 6, 
    type: 'video', 
    url: FDTYRES, // Use the imported variable
    title: 'Full Tire Detailing' 
  }


];

// ... rest of your Gallery component stays the same ...

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            Our Work <span className="text-red-600">Showcase</span>
          </h2>
          <p className="text-neutral-400 max-w-lg mx-auto text-sm md:text-base">
            Take a look at the immaculate finishes produced by the Legendary Detailing team.
          </p>
        </div>

        {/* 🎨 Mobile-First Grid Setup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-neutral-900 hover:border-red-600/40 transition-all duration-300 shadow-xl"
            >
              {item.type === 'video' ? (
                <div className="relative w-full h-full">
                  <video src={item.url} controls className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-black/60 p-2 rounded-full pointer-events-none text-red-500">
                    <PlayCircle size={16} />
                  </div>
                </div>
              ) : (
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-red-500" />
                  <span className="text-sm font-bold text-white tracking-wide uppercase">{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}