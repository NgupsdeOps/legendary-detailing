import React, { useState } from 'react';

export default function BookingForm() {
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

  // Track if the form has been successfully submitted to change layouts
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("Please agree to the Terms & Conditions and Privacy Policy to proceed.");
      return;
    }

    const submissionData = new FormData();
    Object.keys(formData).forEach((key) => {
      submissionData.append(key, formData[key]);
    });

    try {
      // ⚠️ Make sure your real Formspree ID is placed here (e.g., xanyvweb)
      const response = await fetch("https://formspree.io/f/mreneeyp", {
        method: "POST",
        body: submissionData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Switch the view to the custom success message layout
        setIsSubmitted(true);
        
        // Reset the form values back to empty defaults
        setFormData({
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
      } else {
        alert("Oops! Something went wrong. Please try again or reach out to us via WhatsApp.");
      }
    } catch (error) {
      alert("Network error. Please check your internet connection and try again.");
    }
  };

  // 🌟 BEAUTIFUL SUCCESS MESSAGE LAYOUT 🌟
  if (isSubmitted) {
    return (
      <section id="booking" className="py-16 px-4 bg-neutral-950 text-white text-center">
        <div className="max-w-xl mx-auto bg-neutral-900 border border-neutral-800 p-8 md:p-12 rounded-3xl shadow-2xl space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/10 text-red-600 border border-red-600/20 text-3xl font-bold animate-pulse">
            ✓
          </div>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
            Booking <span className="text-red-600">Requested!</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Thank you for choosing <span className="text-white font-bold">Legendary Detailing</span>. We have received your request and will contact you via WhatsApp shortly to finalize your slot.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-neutral-950 border border-neutral-800 hover:border-red-600 text-white font-bold uppercase tracking-wider py-3 rounded-xl text-xs transition-colors duration-200"
          >
            Book Another Vehicle
          </button>
        </div>
      </section>
    );
  }

  // STANDARD FORM LAYOUT (Shows when isSubmitted is false)
  return (
    <section id="booking" className="py-16 px-4 md:px-8 bg-neutral-950 text-white">
      <div className="max-w-2xl mx-auto bg-neutral-900 border border-neutral-800 p-6 md:p-10 rounded-3xl shadow-2xl">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">
            Book <span className="text-red-600">Now</span>
          </h2>
          <p className="text-neutral-400 text-sm">
            Secure your premium detailing service. We will confirm your slot via call or WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} method="POST" className="space-y-6">
          
          {/* Name & Phone Group */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-600 text-white px-4 py-3.5 rounded-xl transition-colors duration-200"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                WhatsApp / Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="082 123 4567"
                className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-600 text-white px-4 py-3.5 rounded-xl transition-colors duration-200"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="johndoe@gmail.com"
              className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-600 text-white px-4 py-3.5 rounded-xl transition-colors duration-200"
            />
          </div>

          {/* Vehicle Info */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Vehicle Make, Model & Colour
            </label>
            <input
              type="text"
              name="carDetails"
              required
              value={formData.carDetails}
              onChange={handleChange}
              placeholder="e.g., VW Golf 8 GTI, White"
              className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-600 text-white px-4 py-3.5 rounded-xl transition-colors duration-200"
            />
          </div>

          {/* Service Option */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Select Package
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-600 text-white px-4 py-3.5 rounded-xl transition-colors duration-200"
            >
              <option value="Valet Package - R850">Valet Package - R850</option>
              <option value="Showroom Polish - R1500">Showroom Polish - R1500</option>
              <option value="Ceramic Protection - R3500">Ceramic Protection - R3500</option>
            </select>
          </div>

          {/* Location Choice */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Preferred Location
            </label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-600 text-white px-4 py-3.5 rounded-xl transition-colors duration-200"
            >
              <option value="19 Alabaster ave, Mayfield Park (Location 1)">
                19 Alabaster ave, Mayfield Park (Location 1)
              </option>
              <option value="Mobile Detailing (At your home/office)">
                Mobile Detailing (At your home/office)
              </option>
            </select>
          </div>

          {/* Date & Time Group */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-600 text-white px-4 py-3.5 rounded-xl transition-colors duration-200"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                Preferred Time (8AM - 5PM)
              </label>
              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-600 text-white px-4 py-3.5 rounded-xl transition-colors duration-200"
              />
            </div>
          </div>

          {/* Notes Box */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Special Instructions (Optional)
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
              placeholder="Let us know if you have dog hair, heavy water stains, etc."
              className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-600 text-white px-4 py-3.5 rounded-xl transition-colors duration-200 resize-none"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              required
              checked={formData.agree}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-neutral-800 bg-neutral-950 text-red-600 focus:ring-0 focus:ring-offset-0"
            />
            <label htmlFor="agree" className="text-xs text-neutral-400 leading-relaxed">
              I agree to the <span className="text-red-500 underline cursor-pointer">Terms & Conditions</span> and understand that my booking details are securely managed.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider py-4 rounded-xl transition-colors duration-200 shadow-lg shadow-red-900/20"
          >
            Submit Booking Request
          </button>

        </form>
      </div>
    </section>
  );
}