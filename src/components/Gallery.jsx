import React, { useState } from 'react';

// Assets Imports
import carReflections from '../assets/JG.png';
import coatingApp from '../assets/HR TSI.png';
import videoShowcase from '../assets/enginewash.mp4';
import redgolf from '../assets/redgolf.png';
import TSIENGINE from '../assets/TSIENGINE.png';
import FDTYRES from '../assets/FDTYRES.mp4';
import classic from '../assets/classic.png';
import cartyre from '../assets/cartyre.png';
import Interior from '../assets/Interior.png';

const galleryItems = [
  { id: 1, type: 'image', src: carReflections, title: 'Paint Correction & Finish' },
  { id: 2, type: 'image', src: coatingApp, title: 'Exterior Valet' },
  { id: 3, type: 'video', src: videoShowcase, title: 'Engine Bay Detail' },
  { id: 4, type: 'image', src: redgolf, title: 'Gloss Enhancement' },
  { id: 5, type: 'image', src: TSIENGINE, title: 'Deep Engine Clean' },
  { id: 6, type: 'video', src: FDTYRES, title: 'Wheel & Tyre Care' },
  { id: 7, type: 'image', src: classic, title: 'Full Detail Resto' },
  { id: 8, type: 'image', src: cartyre, title: 'Tyre & Trim Dressing' },
  { id: 9, type: 'image', src: Interior, title: 'Interior Deep Clean' },
];

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-10 uppercase tracking-wider text-white">
        Our <span className="text-red-600">Work</span>
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedMedia(item)}
            className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 cursor-pointer aspect-video transition-all hover:scale-[1.02]"
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
              />
            ) : (
              <video
                src={item.src}
                muted
                loop
                autoPlay
                playsInline
                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-sm font-bold text-white tracking-wide">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selectedMedia && (
        <div
          onClick={() => setSelectedMedia(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800"
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 z-10 bg-neutral-800/80 hover:bg-neutral-700 text-white rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="aspect-video w-full flex items-center justify-center bg-black">
              {selectedMedia.type === 'image' ? (
                <img src={selectedMedia.src} alt={selectedMedia.title} className="max-h-[80vh] object-contain" />
              ) : (
                <video src={selectedMedia.src} controls autoPlay className="max-h-[80vh] w-full" />
              )}
            </div>

            <div className="p-4 bg-neutral-900 text-center">
              <h3 className="text-lg font-bold text-white">{selectedMedia.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}