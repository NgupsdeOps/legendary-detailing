import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

export default function Feedback() {
  // Load existing reviews from localStorage, or use defaults if empty
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('detailing_reviews');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: "Sipho M.", comment: "The showroom polish completely brought my car back to life. Incredible attention to detail!", stars: 5 },
      { id: 2, name: "Chantel K.", comment: "Super convenient mobile detailing valet service. They left my SUV immaculate.", stars: 5 }
    ];
  });

  const [newName, setNewName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newStars, setNewStars] = useState(5);

  // Save to localStorage whenever reviews array updates
  useEffect(() => {
    localStorage.setItem('detailing_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    const newReview = {
      id: Date.now(),
      name: newName,
      comment: newComment,
      stars: Number(newStars)
    };

    setReviews([newReview, ...reviews]);
    setNewName('');
    setNewComment('');
    setNewStars(5);
  };

  return (
    <section id="feedback" className="py-16 px-4 bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-12">
          Customer <span className="text-red-600">Feedback</span>
        </h2>
        
        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
          {reviews.map((review) => (
            <div key={review.id} className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-red-600 mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-neutral-300 text-sm italic mb-4">"{review.comment}"</p>
              </div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">— {review.name}</h4>
            </div>
          ))}
        </div>

        {/* Leave a Review Form */}
        <div className="bg-neutral-950 p-6 md:p-8 rounded-3xl border border-neutral-800 max-w-xl mx-auto">
          <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-center">Leave a Review</h3>
          <form onSubmit={handleAddReview} className="space-y-4 text-left">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase text-neutral-400 mb-1">Your Name</label>
                <input 
                  type="text" required value={newName} onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Jabu Z." className="w-full bg-neutral-900 border border-neutral-800 text-white px-3 py-2 rounded-xl text-sm"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase text-neutral-400 mb-1">Rating</label>
                <select 
                  value={newStars} onChange={(e) => setNewStars(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 text-white px-3 py-2 rounded-xl text-sm h-[38px]"
                >
                  <option value="5">5 Stars ⭐⭐⭐⭐⭐</option>
                  <option value="4">4 Stars ⭐⭐⭐⭐</option>
                  <option value="3">3 Stars ⭐⭐⭐</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase text-neutral-400 mb-1">Your Review</label>
              <textarea 
                required rows="2" value={newComment} onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your experience..." className="w-full bg-neutral-900 border border-neutral-800 text-white px-3 py-2 rounded-xl text-sm resize-none"
              />
            </div>
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider py-2.5 rounded-xl text-xs transition-colors">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}