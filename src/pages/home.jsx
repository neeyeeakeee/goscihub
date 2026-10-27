import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/assets/professional-auto-gear-box-repair-and-tools-in-cle-rz0i.svg",
    "/assets/clean-auto-gear-box-repair-and-professional-tools-2jnu.svg",
    "/assets/modern-car-engine-diagnostics-equipment-in-auto-sh-osqq.svg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div>
      <section className="bg-slate-900 text-white py-20 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight text-white">Transparent, Honest Auto Care in Atlanta</h1>
            <p className="text-lg text-slate-300 mb-8">Clear, upfront pricing for oil changes, brake repairs, diagnostics, and routine maintenance without the surprise upsells or outrageous quotes.</p>
            <a href="https://yes" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded shadow transition-all transform hover:-translate-y-0.5">Book Service Now</a>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-slate-800 aspect-[16/10]">
            {slides.map((src, idx) => (
              <div key={idx} className={`absolute inset-0 transition-opacity duration-700 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                <img src={src} alt="Auto repair service" className="w-full h-full object-cover block" />
              </div>
            ))}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${idx === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Why Choose Quick Mech</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Upfront Quotes</h3>
            <p className="text-slate-600">Never worry about surprise repair lists or hidden charges during your routine maintenance visits.</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Expert Diagnostics</h3>
            <p className="text-slate-600">Reliable and straightforward troubleshooting when your check engine light comes on.</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Local & Reliable</h3>
            <p className="text-slate-600">Proudly serving local vehicle owners, daily commuters, and families across Atlanta.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 border-y border-slate-200 py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Commitment to You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Certified Mechanics</h3>
              <p className="text-slate-600">Experienced professionals handling your vehicle with care and precision.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">No Surprise Fees</h3>
              <p className="text-slate-600">We consult you before any additional work is performed on your car.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Quick Turnaround</h3>
              <p className="text-slate-600">Get back on the road safely and swiftly without unnecessary delays.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}