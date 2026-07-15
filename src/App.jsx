import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Feedback from './components/Feedback';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';

export default function App() {
  // Shared pop-up state
  const [modalType, setModalType] = useState(null); // 'privacy', 'terms', or null

  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Feedback />
      {/* Passing the popup control down to the booking form */}
      <BookingForm setModalType={setModalType} />
      {/* Passing the popup control down to the footer */}
      <Footer setModalType={setModalType} />

      {/* The pop-up itself is rendered at the root level */}
      <LegalModal 
        isOpen={modalType !== null} 
        onClose={() => setModalType(null)} 
        type={modalType} 
      />
    </div>
  );
}