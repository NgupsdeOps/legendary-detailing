import React, { useState } from 'react';
import { Star, MessageSquare } from 'lucide-react';

export default function Feedback() {
  const [reviews, setReviews] = useState([
    { name: "Lwane Joseph", rating: 5, text: "Unbelievable service! The Stage 1 paint correction completely removed all the swirl marks from my daily driver. It looks brand new." },
    { name: "Oupa Maditsi", rating: 5, text: "The team did a mobile valet on my leather interior. Extremely professional, prompt, and high quality. Will definitely book again." }
  ]);

  const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([newReview, ...reviews]);
    setNewReview({ name: '', rating: 5, text: '' });
  };

  return (
    <section id="feedback" className="py-24 px-6 bg-neutral-900/20 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
        
        {/* Left Side: Submit Feedback */}
        <div className="lg:col-span-5">
          <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-4">
            Client <span className="text-red-600">Feedback</span>
          </h2>
          <p className="text-neutral-400 text-sm mb-8">
            Tell us how we performed! Leave a review on your detailing experience with Legendary Detailing.
          </p>

          <form onSubmit={handleSubmit} className="bg-neutral-950 border border-neutral-900 p-8 rounded-2xl space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Your Name</label>
              <input 
                required 
                type="text" 
                value={newReview.name} 
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl focus:border-red-600 focus:outline-none transition-colors text-white text-sm" 
                placeholder="e.g. Lerato Khumalo" 
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Rating</label>
              <select 
                value={newReview.rating} 
                onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl focus:border-red-600 focus:outline-none transition-colors text-white text-sm"
              >
                <option value={5}>⭐⭐⭐⭐⭐ (5/5 Excellence)</option>
                <option value={4}>⭐⭐⭐⭐ (4/5 Very Good)</option>
                <option value={3}>⭐⭐⭐ (3/5 Good)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Your Experience</label>
              <textarea 
                required 
                rows="4" 
                value={newReview.text}
                onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl focus:border-red-600 focus:outline-none transition-colors text-white text-sm" 
                placeholder="How does your car look?..."
              />
            </div>

            <button type="submit" className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-300 shadow-lg shadow-red-600/20">
              Post Review
            </button>
          </form>
        </div>

        {/* Right Side: Reviews Feed */}
        <div className="lg:col-span-7 space-y-6 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
          {reviews.map((review, i) => (
            <div key={i} className="bg-neutral-950 border border-neutral-900 p-6 rounded-2xl">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-bold text-white">{review.name}</h4>
                <div className="flex text-amber-500 text-xs">
                  {Array.from({ length: review.rating }).map((_, rIndex) => (
                    <span key={rIndex}>⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}