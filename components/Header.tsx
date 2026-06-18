"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col gap-6">
        {/* Top bar with Logo and Auth/Action links */}
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="flex items-center">
            <img src="/futures-logo-v2.png" alt="Futures Academy" className="h-14 md:h-20 w-auto object-contain" />
          </Link>

          {/* Desktop Actions */}
          <div className="hidden md:flex flex-wrap justify-end items-center gap-4 text-xs font-bold tracking-widest uppercase">
            <Link href="/newsletter" className="flex items-center gap-2 hover:text-gray-600 transition-colors">
              <Mail className="w-4 h-4" />
              NEWSLETTER
            </Link>
            <a href="https://sdgs.un.org/goals/goal8" target="_blank" rel="noopener noreferrer" className="bg-[#5A75F9] text-white px-4 py-2 rounded-sm hover:bg-[#4558cc] transition-colors">
              SDG 8
            </a>
            <Link href="/lessons" className="bg-black text-white px-4 py-2 rounded-sm hover:bg-gray-800 transition-colors">
              ENROLL
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-800 hover:text-black transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Actions Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-4 pt-2 pb-4 text-xs font-bold tracking-widest uppercase border-t border-gray-100 animate-in slide-in-from-top-2">
            <Link href="/newsletter" className="flex items-center justify-center gap-2 py-3 bg-gray-50 hover:bg-gray-100 rounded-sm transition-colors">
              <Mail className="w-4 h-4" />
              NEWSLETTER
            </Link>
            <a href="https://sdgs.un.org/goals/goal8" target="_blank" rel="noopener noreferrer" className="bg-[#5A75F9] text-white py-3 rounded-sm text-center hover:bg-[#4558cc] transition-colors">
              SDG 8
            </a>
            <Link href="/lessons" className="bg-black text-white py-3 rounded-sm text-center hover:bg-gray-800 transition-colors">
              ENROLL
            </Link>
          </div>
        )}

        {/* Main Navigation */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-[11px] md:text-xs font-extrabold tracking-widest text-black uppercase">
          <Link href="/lessons" className="hover:text-gray-600 transition-colors">LESSONS & TUTORIALS</Link>
          <Link href="/private-tuition" className="hover:text-gray-600 transition-colors">PRIVATE TUITION</Link>
          <Link href="/events" className="hover:text-gray-600 transition-colors">EVENTS</Link>
        </nav>
      </div>
    </header>
  );
}
