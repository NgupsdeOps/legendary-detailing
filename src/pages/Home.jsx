import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import BookingForm from '../components/BookingForm';
import Feedback from '../components/Feedback';

export default function Home({ setModalType }) {
  return (
    <main className="animate-fadeIn">
      <Hero />
      <Services />
      <section id="booking">
        <BookingForm setModalType={setModalType} />
      </section>
      <Feedback />
    </main>
  );
}