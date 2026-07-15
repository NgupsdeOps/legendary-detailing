import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sipho M.",
    comment: "The showroom polish completely brought my GTI back to life. Incredible attention to detail!",
    stars: 5
  },
  {
    id: 2,
    name: "Chantel K.",
    comment: "Super convenient mobile detailing valet service. They arrived on time and left my SUV immaculate.",
    stars: 5
  }
];

export default function Feedback() {
  return (
    <section id="feedback" className="py-16 px-4 bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-12">
          Customer <span className="text-red-600">Feedback</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {reviews.map((review) => (
            <div key={review.id} className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 shadow-xl">
              <div className="flex gap-1 text-red-600 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-neutral-300 text-sm italic mb-4">"{review.comment}"</p>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">— {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}