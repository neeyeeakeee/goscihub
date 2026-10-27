import React from 'react';

export default function Services() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Services & Transparent Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Oil Changes</h3>
            <p className="text-slate-600 mb-6">Straightforward oil changes for daily commuters and family vehicles with zero hidden fees.</p>
          </div>
          <a href="https://yes" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded text-center transition-colors">Book Oil Change</a>
        </div>
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Brake Repairs</h3>
            <p className="text-slate-600 mb-6">Reliable brake service ensuring your safety on the road with upfront estimates.</p>
          </div>
          <a href="https://yes" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded text-center transition-colors">Book Brake Service</a>
        </div>
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Car Diagnostics</h3>
            <p className="text-slate-600 mb-6">Honest diagnostic assessments for check engine lights and unexpected mechanical issues.</p>
          </div>
          <a href="https://yes" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded text-center transition-colors">Book Diagnostics</a>
        </div>
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Routine Maintenance</h3>
            <p className="text-slate-600 mb-6">Dependable upkeep to keep your vehicle running smoothly year-round in Atlanta.</p>
          </div>
          <a href="https://yes" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded text-center transition-colors">Book Maintenance</a>
        </div>
      </div>
    </div>
  );
}