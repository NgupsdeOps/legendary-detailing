import React, { useState } from 'react';
import { Calendar, Clock, Car, Mail, Phone, User } from 'lucide-react';

export default function BookingForm({ setModalType }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carDetails: '',
    service: 'Valet Package - R850',
    location: '19 Alabaster ave, Mayfield Park (Location 1)',
    date: '',
    time: '',
    notes: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  return (
    <section id="book" className="py-24 px-6 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            Book an <span className="text-red-600">Appointment</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Secure your spot. All work is strictly by appointment. Once submitted, we will send an estimate/invoice directly to your email.
          </p>
        </div>

        <form 
          action="https://formspree.io/f/your-formspree-id" 
          method="POST"
          className="bg-neutral-900/40 border border-neutral-900 p-8 md:p-12 rounded-3xl space-y-8 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Full Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-600"><User size={18} /></span>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full pl-11 pr-4 py-3 bg-neutral-950 border border-neutral-900 rounded-xl focus:border-red-600 focus:outline-none transition-colors text-white text-sm" placeholder="e.g. Sipho Nkosi" />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Phone / WhatsApp</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-600"><Phone size={18} /></span>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full pl-11 pr-4 py-3 bg-neutral-950 border border-neutral-900 rounded-xl focus:border-red-600 focus:outline-none transition-colors text-white text-sm" placeholder="e.g. 074 835 2488" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Email */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Email Address (For Invoice)</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-600"><Mail size={18} /></span>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full pl-11 pr-4 py-3 bg-neutral-950 border border-neutral-900 rounded-xl focus:border-red-600 focus:outline-none transition-colors text-white text-sm" placeholder="e.g. client@gmail.com" />
              </div>
            </div>

            {/* Vehicle Details */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Vehicle Make, Model & Colour</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-600"><Car size={18} /></span>
                <input required type="text" name="carDetails" value={formData.carDetails} onChange={handleChange} className="w-full pl-11 pr-4 py-3 bg-neutral-950 border border-neutral-900 rounded-xl focus:border-red-600 focus:outline-none transition-colors text-white text-sm" placeholder="e.g. BMW M3 (Metallic Blue)" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Service */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Select Service</label>
              <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-neutral-950 border border-neutral-900 rounded-xl focus:border-red-600 focus:outline-none transition-colors text-white text-sm">
                <option>Standard Detail - R250</option>
                <option>Premium Detail - R500</option>
                <option>Full Detail - R1500</option>
                <option>Enhancement Detail - R1500</option>
                <option>Stage 1 Detail - R2500</option>
                <option>Stage 2 Detail - R4500</option>
                <option>Undercarriage Wash - R300</option>
                <option>Engine Wash - R200</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Preferred Location</label>
              <select name="location" value={formData.location} onChange={handleChange} className="w-full px-4 py-3 bg-neutral-950 border border-neutral-900 rounded-xl focus:border-red-600 focus:outline-none transition-colors text-white text-sm">
                <option>19 Alabaster ave, Mayfield Park (Location 1)</option>
                <option>121 Sycamore st, Alveda park (Location 2)</option>
                <option>Mobile Valet (Home Delivery)</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Date */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Preferred Date</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-600"><Calendar size={18} /></span>
                <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full pl-11 pr-4 py-3 bg-neutral-950 border border-neutral-900 rounded-xl focus:border-red-600 focus:outline-none transition-colors text-white text-sm" />
              </div>
            </div>

            {/* Time */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Preferred Time (8am - 5pm)</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-600"><Clock size={18} /></span>
                <input required type="time" name="time" min="08:00" max="17:00" value={formData.time} onChange={handleChange} className="w-full pl-11 pr-4 py-3 bg-neutral-950 border border-neutral-900 rounded-xl focus:border-red-600 focus:outline-none transition-colors text-white text-sm" />
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Special Instructions (Optional)</label>
            <textarea name="notes" value={formData.notes} onChange={handleChange} rows="3" className="w-full px-4 py-3 bg-neutral-950 border border-neutral-900 rounded-xl focus:border-red-600 focus:outline-none transition-colors text-white text-sm" placeholder="Let us know of any heavily soiled spots, dog hair, or special requirements..."></textarea>
          </div>

          {/* Checkbox with Fully Clickable Popup Hooks */}
          <div className="flex items-start gap-3">
            <input 
              required 
              type="checkbox" 
              id="agree" 
              name="agree" 
              checked={formData.agree} 
              onChange={handleChange} 
              className="mt-1 accent-red-600 h-4 w-4 rounded border-neutral-900 bg-neutral-950 cursor-pointer" 
            />
            <label htmlFor="agree" className="text-xs text-neutral-400 leading-normal">
              I agree to the{' '}
              <button 
                type="button" 
                onClick={() => setModalType('terms')} 
                className="text-red-500 hover:underline cursor-pointer font-bold focus:outline-none"
              >
                Terms & Conditions
              </button>{' '}
              and understand that my booking details are securely managed in line with the{' '}
              <button 
                type="button" 
                onClick={() => setModalType('privacy')} 
                className="text-red-500 hover:underline cursor-pointer font-bold focus:outline-none"
              >
                Privacy Policy
              </button>.
            </label>
          </div>

          <button 
            type="submit" 
            disabled={!formData.agree}
            className="w-full py-4 bg-red-600 hover:bg-red-700 disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed text-white font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-xl shadow-red-600/20 text-sm"
          >
            Submit Booking & Generate Quotation
          </button>
        </form>
      </div>
    </section>
  );
}