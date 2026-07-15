import React, { useState } from 'react';

export default function BookingForm({ setModalType }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carDetails: '',
    service: 'Standard Detail - R250',
    addons: [],
    location: '19 Alabaster ave, Mayfield Park (Location 1)',
    address: '', 
    date: '',
    time: '',
    notes: '',
    agree: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAddonChange = (addonName, isChecked) => {
    setFormData((prev) => {
      const updatedAddons = isChecked
        ? [...prev.addons, addonName]
        : prev.addons.filter((item) => item !== addonName);
      return { ...prev, addons: updatedAddons };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("Please agree to the Terms & Conditions to proceed.");
      return;
    }

    const submissionData = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'addons') {
        submissionData.append('Selected Add-ons', formData.addons.join(', '));
      } else {
        submissionData.append(key, formData[key]);
      }
    });

    try {
      // 🚨 REPLACE THE ID BELOW WITH YOUR REAL FORMSPREE ID! (e.g., xanyvweb)
      const FORMSPREE_ID = "mreneeyp"; 

      const response = await fetch(`https://formspree.io/f/mreneeyp`, {
        method: "POST",
        body: submissionData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '', phone: '', email: '', carDetails: '',
          service: 'Standard Detail - R250', addons: [],
          location: '19 Alabaster ave, Mayfield Park (Location 1)', address: '',
          date: '', time: '', notes: '', agree: false
        });
      } else {
        alert("Oops! Something went wrong. Please check that your Formspree ID is set correctly, or contact us on WhatsApp.");
      }
    } catch (error) {
      alert("Network error. Please check your internet connection and try again.");
    }
  };

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
          
          {/* Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                Full Name
              </label>
              <input
                type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe"
                className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-600 text-white px-4 py-3.5 rounded-xl transition-colors duration-200"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                WhatsApp / Phone Number
              </label>
              <input
                type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="082 123 4567"
                className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-600 text-white px-4 py-3.5 rounded-xl transition-colors duration-200"
              />
            </div>
          </div>

          {/* Email & Vehicle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                Email Address
              </label>
              <input
                type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="johndoe@gmail.com"
                className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-600 text-white px-4 py-3.5 rounded-xl transition-colors duration-200"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                Vehicle Make, Model & Colour
              </label>
              <input
                type="text" name="carDetails" required value={formData.carDetails} onChange={handleChange} placeholder="e.g., VW Golf 8 GTI, White"
                className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-600 text-white px-4 py-3.5 rounded-xl transition-colors duration-200"
              />
            </div>
          </div>

          {/* Packages with Prices */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Select Package
            </label>
            <select
              name="service" value={formData.service} onChange={handleChange}
              className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-600 text-white px-4 py-3.5 rounded-xl transition-colors duration-200"
            >
              <option value="Standard Detail - R250">Standard Detail — R250</option>
              <option value="Premium Detail - R850">Premium Detail / Valet — R850</option>
              <option value="Executive Valet - R1200">Executive Valet — R1200</option>
              <option value="Machine Glaze & Polish - R1500">Machine Glaze & Polish — R1500</option>
              <option value="Ceramic Coating Application - R3500">Ceramic Coating Application — R3500</option>
            </select>
          </div>

          {/* Optional Extras Checkboxes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              Optional Add-ons & Extras
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-neutral-950 p-4 rounded-2xl border border-neutral-800">
              {[
                { name: 'Waxes Add-on (from R150)', value: 'Waxes' },
                { name: 'Sealants Add-on (from R250)', value: 'Sealants' },
                { name: 'Machine Glaze (from R650)', value: 'Machine Glaze' },
                { name: 'Fabric Protectant (from R400)', value: 'Fabric Protectant' },
                { name: 'Ceramic Coating Extra (from R1500)', value: 'Ceramic Coating' },
                { name: 'Headlights Restoration (from R550)', value: 'Headlights' },
                { name: 'Plastic Coatings (from R850)', value: 'Plastic Coatings' }
              ].map((addon) => (
                <label key={addon.value} className="flex items-center gap-3 cursor-pointer text-xs text-neutral-300 hover:text-white transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.addons.includes(addon.name)}
                    onChange={(e) => handleAddonChange(addon.name, e.target.checked)}
                    className="h-4 w-4 rounded border-neutral-800 bg-neutral-900 text-red-600 focus:ring-0"
                  />
                  {addon.name}
                </label>
              ))}
            </div>
          </div>

          {/* Expanded Locations (Location 1, Location 2, and Mobile) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Preferred Location
            </label>
            <select
              name="location" value={formData.location} onChange={handleChange}
              className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-600 text-white px-4 py-3.5 rounded-xl transition-colors duration-200"
            >
              <option value="19 Alabaster ave, Mayfield Park (Location 1)">
                19 Alabaster ave, Mayfield Park (Location 1)
              </option>
              <option value="Alveda Park (Location 2)">
                Alveda Park (Location 2)
              </option>
              <option value="Mobile Detailing (We come to you)">
                Mobile Detailing (We come to you)
              </option>
            </select>
          </div>

          {/* Address Box (Only for Mobile Detailing) */}
          {formData.location.includes("Mobile Detailing") && (
            <div className="animate-fadeIn">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                Your Address for Mobile Service
              </label>
              <input
                type="text" name="address" required value={formData.address} onChange={handleChange}
                placeholder="e.g. 123 Street Name, Suburb, Johannesburg"
                className="w-full bg-neutral-950 border border-red-600/50 focus:border-red-600 text-white px-4 py-3.5 rounded-xl transition-colors duration-200"
              />
            </div>
          )}

          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                Preferred Date
              </label>
              <input
                type="date" name="date" required value={formData.date} onChange={handleChange}
                className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-600 text-white px-4 py-3.5 rounded-xl transition-colors duration-200"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                Preferred Time (8AM - 5PM)
              </label>
              <input
                type="time" name="time" required value={formData.time} onChange={handleChange}
                className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-600 text-white px-4 py-3.5 rounded-xl transition-colors duration-200"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Special Instructions (Optional)
            </label>
            <textarea
              name="notes" value={formData.notes} onChange={handleChange} rows="3"
              placeholder="Let us know if you have dog hair, heavy water stains, etc."
              className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-600 text-white px-4 py-3.5 rounded-xl transition-colors duration-200 resize-none"
            />
          </div>

          {/* Clickable Terms Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox" id="agree" name="agree" required checked={formData.agree} onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-neutral-800 bg-neutral-950 text-red-600 focus:ring-0"
            />
            <label htmlFor="agree" className="text-xs text-neutral-400 leading-relaxed">
              I agree to the{" "}
              <span 
                onClick={() => setModalType('terms')} 
                className="text-red-500 underline cursor-pointer hover:text-red-400"
              >
                Terms & Conditions
              </span>{" "}
              and understand that my booking details are securely managed.
            </label>
          </div>

          {/* Submit */}
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