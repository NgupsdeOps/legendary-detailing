import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function Feedback() {
  // 🌟 THESE ARE YOUR PERMANENT GLOBAL REVIEWS THAT EVERYONE CAN SEE
  // When you get a new review via email, just copy and paste it into this array!
  const [reviews] = useState([
    { 
      id: 1, 
      name: "Sipho M.", 
      comment: "The showroom polish completely brought my car back to life. Incredible attention to detail!", 
      stars: 5 
    },
    { 
      id: 2, 
      name: "Chantel K.", 
      comment: "Super convenient mobile detailing valet service. They left my SUV immaculate.", 
      stars: 5 
    }
  ]);

  // Form states for the new review input
  const [newName, setNewName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newStars, setNewStars] = useState(5);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleAddReview = async (e) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    // Package the dynamic data for Formspree
    const reviewData = {
      name: newName,
      rating: `${newStars} Stars`,
      comment: newComment
    };

    try {
      // 🚨 REPLACE THIS WITH YOUR BRAND NEW FORMSPREE REVIEWS ID! (e.g., mvonbwrw)
      const REVIEWS_FORMSPREE_ID = "YOUR_NEW_REVIEWS_FORM_ID";

      const response = await fetch(`https://formspree.io/f/mlgqjool`, {
        method: "POST",
        body: JSON.stringify(reviewData),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Show the sleek review success thank you card
        setReviewSubmitted(true);
        setNewName('');
        setNewComment('');
        setNewStars(5);
      } else {
        alert("Oops! Something went wrong submitting your review. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="feedback" className="py-16 px-4 bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-12">
          Customer <span className="text-red-600">Feedback</span>
        </h2>
        
        {/* Global Review Grid */}
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

        {/* Dynamic Review Form Box */}
        <div className="bg-neutral-950 p-6 md:p-8 rounded-3xl border border-neutral-800 max-w-xl mx-auto">
          {reviewSubmitted ? (
            // Success Message State inside the card
            <div className="text-center py-6 space-y-3 animate-fadeIn">
              <div className="text-red-600 text-2xl font-bold">✓ Review Submitted!</div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Thank you for sharing your experience! Your testimonial has been sent to our management team for verified approval.
              </p>
              <button 
                onClick={() => setReviewSubmitted(false)}
                className="mt-2 text-xs font-bold uppercase tracking-wider text-neutral-400 underline hover:text-white"
              >
                Write another review
              </button>
            </div>
          ) : (
            // Active Form State
            <>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-center">Leave a Review</h3>
              <form onSubmit={handleAddReview} className="space-y-4 text-left">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={newName} 
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="e.g. Jabu Z." 
                      className="w-full bg-neutral-900 border border-neutral-800 text-white px-3 py-2 rounded-xl text-sm focus:border-red-600 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                      Rating
                    </label>
                    <select 
                      value={newStars} 
                      onChange={(e) => setNewStars(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 text-white px-3 py-2 rounded-xl text-sm h-[38px] focus:border-red-600 transition-colors duration-200"
                    >
                      <option value="5">5 Stars ⭐⭐⭐⭐⭐</option>
                      <option value="4">4 Stars ⭐⭐⭐⭐</option>
                      <option value="3">3 Stars ⭐⭐⭐</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                    Your Review
                  </label>
                  <textarea 
                    required 
                    rows="2" 
                    value={newComment} 
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your experience with Legendary Detailing..." 
                    className="w-full bg-neutral-900 border border-neutral-800 text-white px-3 py-2 rounded-xl text-sm resize-none focus:border-red-600 transition-colors duration-200"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider py-2.5 rounded-xl text-xs transition-colors duration-200 shadow-md shadow-red-950/40"
                >
                  Submit Review
                </button>
              </form>
            </>
          )}
        </div>

      </div>
    </section>
  );
}