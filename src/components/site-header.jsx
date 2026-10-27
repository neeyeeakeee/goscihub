import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function SiteHeader() {
  return (
    <header className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <Link to="/" className="flex items-center">
        <img src="/assets/logo-full-white81357f39c2b141826f53-vjsu.png" alt="Quick Mech Auto Shop logo" width="160" height="35" className="max-h-[42px] w-auto block" />
      </Link>
      <nav className="flex gap-6 font-medium">
        <NavLink to="/" className={({isActive}) => isActive ? 'text-white' : 'text-slate-300 hover:text-white transition-colors'}>Home</NavLink>
        <NavLink to="/services" className={({isActive}) => isActive ? 'text-white' : 'text-slate-300 hover:text-white transition-colors'}>Services</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? 'text-white' : 'text-slate-300 hover:text-white transition-colors'}>Contact</NavLink>
      </nav>
    </header>
  );
}