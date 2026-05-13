import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-20 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Left Column */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-center md:items-start gap-6 text-center md:text-left">
            <Link href="/" className="flex items-center mb-2 md:mb-6 md:-ml-4">
              <img src="/logo.png" alt="Openhall Analytics" className="h-24 md:h-32 w-auto object-contain" />
            </Link>
            
            <div className="flex gap-4 mt-2">
              <Link href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </Link>
              <Link href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
            </div>
          </div>
          
          {/* Right Columns Grid */}
          <div className="col-span-1 md:col-span-8 border-t-[3px] border-black pt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold tracking-widest uppercase mb-2">RESEARCH & INSIGHTS</h4>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Market Analysis</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Economic Reports</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Whitepapers</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Newsletter Archive</Link>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold tracking-widest uppercase mb-2">CONSULTATION</h4>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Strategy Advisory</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Portfolio Review</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Risk Management</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Book a Session</Link>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold tracking-widest uppercase mb-2">TRAINING</h4>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Corporate Workshops</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Executive Courses</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Webinars</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Certification</Link>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom copyright/legal bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-xs text-gray-500">
          <p>© 2026 Openhall Analytics</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline">Legal Disclosures</Link>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
