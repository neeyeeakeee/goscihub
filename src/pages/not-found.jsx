import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-8 py-32 text-center">
      <h2 className="text-3xl font-bold mb-4 text-slate-900">Page Not Found</h2>
      <p className="text-slate-600 mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition-colors">
        Go Back Home
      </Link>
    </div>
  );
}