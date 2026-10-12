import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import LegalModal from './components/LegalModal';
import BlogList from './blog/BlogList';
import BlogPost from './blog/BlogPost';

export default function App() {
  const [modalType, setModalType] = useState(null);

  return (
    <div className="bg-neutral-950 text-white min-h-screen flex flex-col font-sans">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home setModalType={setModalType} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />

        </Routes>
      </div>

      <Footer setModalType={setModalType} />
      {modalType && <LegalModal modalType={modalType} onClose={() => setModalType(null)} />}
    </div>
  );
}