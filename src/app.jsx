import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SiteHeader from './components/site-header.jsx';
import SiteFooter from './components/site-footer.jsx';
import Home from './pages/home.jsx';
import Services from './pages/services.jsx';
import Contact from './pages/contact.jsx';
import NotFound from './pages/not-found.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-700">
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}