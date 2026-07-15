import React from 'react';
import { PlayCircle, Sparkles } from 'lucide-react';

// ==========================================
// 📸 HOW TO ADD YOUR OWN PHOTOS / VIDEOS:
// ==========================================
// 1. Paste your new image/video file inside your: "src/assets" folder.
// 2. Import it at the top here like this:
//    import wash1 from '../assets/wash1.png';
//    import video1 from '../assets/video1.mp4';
// 
// 3. Add a new item block inside the "galleryItems" array below.
// ==========================================

import heroBg from '../assets/hero.png'; // Using your Polo image as a placeholder for now
import Wash1 from '../assets/Wash1.png';
import enginewash from '../assets/enginewash.mp4';

const galleryItems = [
  { 
    id: 1, 
    type: 'image', 
    url: heroBg, 
    title: 'Showroom Reflection Finish' 
  },
 
  { 
    id: 2, 
    type: 'image', 
    url: Wash1, 
    title: 'Best wash' 
  },

  { 
    id: 3, 
    type: 'video', 
    url: enginewash, 
    title: 'Engine Bay Detailing' 
  },
  { 
    id: 4, 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop', 
    title: 'Premium Leather Treatment' 
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-red-500 font-extrabold text-xs uppercase tracking-widest mb-3 inline-block">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            Our Work <span className="text-red-600">Showcase</span>
          </h2>
          <p className="text-neutral-400 max-w-lg mx-auto text-sm md:text-base">
            Real results. Take a look at the immaculate finishes produced by the Legendary Detailing team.
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative rounded-2xl overflow-hidden aspect-video bg-neutral-900 border border-neutral-900 hover:border-red-600/40 transition-all duration-300 shadow-lg"
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
              
              {/* Premium Hover Overlay Title */}
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