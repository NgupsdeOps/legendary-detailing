import React from 'react';
import { X } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      style={{ zIndex: 99999 }} // Inline override to guarantee it rests on top of everything else
    >
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col shadow-2xl animate-fade-in text-left">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-neutral-800">
          <h3 className="text-xl font-black text-white uppercase tracking-wide">
            {type === 'privacy' ? '🛡️ Privacy Policy' : '⚖️ Terms & Conditions'}
          </h3>
          <button 
            type="button"
            onClick={onClose} 
            className="text-neutral-400 hover:text-white transition-colors cursor-pointer p-1 rounded-lg hover:bg-neutral-800"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto text-neutral-300 text-sm space-y-6 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p className="text-xs text-red-500 font-bold uppercase tracking-wider">Last Updated: July 2026</p>
              <p>At Legendary Detailing & Carwash, we respect your privacy. This policy details how we handle the information you submit through our booking engine.</p>
              
              <div>
                <h4 className="font-bold text-white text-md uppercase mb-1">1. Information We Collect</h4>
                <p className="text-neutral-400">We collect your name, phone/WhatsApp number, email address, vehicle details, and preferred service selections when you request a booking.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-white text-md uppercase mb-1">2. How We Use Your Data</h4>
                <p className="text-neutral-400">Your details are used strictly to coordinate your detailing appointment, send professional invoices or estimates, and communicate schedule details. We do not sell, rent, or share your contact information with external marketing parties.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-white text-md uppercase mb-1">3. Data Security</h4>
                <p className="text-neutral-400">Our database configurations are designed to protect your personal details. However, please remember that no transmission over the internet can be guaranteed 100% secure.</p>
              </div>
            </>
          ) : (
            <>
              <p className="text-xs text-red-500 font-bold uppercase tracking-wider">Last Updated: July 2026</p>
              <p>By scheduling an appointment with Legendary Detailing & Carwash, you agree to the following operational terms:</p>
              
              <div>
                <h4 className="font-bold text-white text-md uppercase mb-1">1. Detailing Appointments</h4>
                <p className="text-neutral-400">All premium detailing packages are performed strictly by appointment. While we do our absolute best to hold your exact requested time slot, slots are officially confirmed only once our team contacts you via WhatsApp, phone, or email.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-white text-md uppercase mb-1">2. Pricing Estimates</h4>
                <p className="text-neutral-400">Our listed prices are starting baselines. Vehicles requiring heavy stain extraction, excessive dog hair removal, or severe paint contamination may be subject to a price adjustment, which will always be discussed with you before work begins.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-white text-md uppercase mb-1">3. Cancellations & Rescheduling</h4>
                <p className="text-neutral-400">We request at least 24 hours' notice for cancellations or rescheduling so we can assign your spot to another client on our waitlist.</p>
              </div>

              <div>
                <h4 className="font-bold text-white text-md uppercase mb-1">4. Liability Limitation</h4>
                <p className="text-neutral-400">While our detailing technicians treat every car with elite craftsmanship, customers are advised to remove all personal valuables from the vehicle prior to handing over the keys.</p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-800 flex justify-end">
          <button 
            type="button"
            onClick={onClose} 
            className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs rounded-lg transition-colors cursor-pointer"
          >
            Close & Return
          </button>
        </div>
      </div>
    </div>
  );
}