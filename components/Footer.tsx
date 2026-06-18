import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-20 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Left Column */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-center md:items-start gap-6 text-center md:text-left">
            <Link href="/" className="flex flex-col items-center md:items-start gap-2 mb-2 md:mb-6">
              <img src="/futures-logo-v2.png" alt="Futures Academy" className="h-10 md:h-12 w-auto object-contain mb-2" />
              <span className="text-sm md:text-base text-gray-600 font-medium">Learn Future Skills. Build Real-World Confidence.</span>
            </Link>
            
            <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com/futuresacademy_official/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="https://www.youtube.com/@futuresacademyofficial" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="https://www.linkedin.com/company/futuresacademyofficial/about/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          {/* Right Columns Grid */}
          <div className="col-span-1 md:col-span-8 border-t-[3px] border-black pt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold tracking-widest uppercase mb-2">PROGRAMS</h4>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">AI Agent Programming & Automation</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Sales & Marketing</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Startup Building</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Creative Design (Videography, Video Editing, UI/UX, Graphics)</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Programming & Technology</Link>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold tracking-widest uppercase mb-2">LEARNING PATHWAYS</h4>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Kids Programs</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Teens Programs</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Beginner to Advanced Tracks</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Project-Based Learning</Link>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold tracking-widest uppercase mb-2">SUPPORT & ENROLLMENT</h4>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Admissions & Enrollment</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Talk to an Advisor</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Parent Guide</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Student Progress Support</Link>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold tracking-widest uppercase mb-2">COMMUNITY & EVENTS</h4>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Workshops</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Bootcamps</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Hackathons</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Showcase Days</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4">Certification Programs</Link>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom copyright/legal bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-xs text-gray-500">
          <p>© 2026 Futures Africa. (Gablecorp)</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline">Legal Disclosures</Link>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
