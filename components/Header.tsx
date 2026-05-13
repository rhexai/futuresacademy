import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col gap-6">
        {/* Top bar with Logo and Auth/Action links */}
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Openhall Analytics" className="h-24 w-auto" />
          </Link>

          <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase">
            <Link href="#" className="flex items-center gap-2 hover:text-gray-600 transition-colors">
              <Mail className="w-4 h-4" />
              NEWSLETTER
            </Link>
            <Link href="#" className="bg-[#8b2323] text-white px-4 py-2 rounded-sm hover:bg-[#6b1b1b] transition-colors">
              SDG 8
            </Link>
            <Link href="#" className="bg-black text-white px-4 py-2 rounded-sm hover:bg-gray-800 transition-colors">
              SUPPORT
            </Link>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex gap-8 text-xs font-extrabold tracking-widest text-black uppercase">
          <Link href="#" className="hover:text-gray-600 transition-colors">RESEARCH & INSIGHTS</Link>
          <Link href="#" className="hover:text-gray-600 transition-colors">CONSULTATION</Link>
          <Link href="#" className="hover:text-gray-600 transition-colors">TRAINING</Link>
        </nav>
      </div>
    </header>
  );
}
