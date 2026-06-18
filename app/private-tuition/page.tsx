"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MessageCircle, Check } from 'lucide-react';

export default function PrivateTuitionPage() {
  const whatsappNumber = "233505295410"; // Ghana format: 233 + number without leading 0
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I'm interested in private tuition at Futures Academy for my child.")}`;

  const benefits = [
    "One-on-one personalized learning experience",
    "Flexible scheduling to fit your child's routine",
    "Customized curriculum based on learning speed",
    "Direct feedback and dedicated mentorship"
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Header />

      <main className="flex-grow flex items-center justify-center py-16 px-6">
        <div className="max-w-4xl w-full bg-white rounded-3xl p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
          
          <div className="flex-1 space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-4">
                Private Tuition
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed font-serif">
                Accelerate your child's learning with dedicated 1-on-1 mentorship. Our expert advisors will tailor the curriculum to ensure maximum engagement and progress.
              </p>
            </div>

            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <div className="mt-1 bg-[#5A75F9]/10 p-1 rounded-full text-[#5A75F9]">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-8 rounded-xl font-bold text-sm tracking-widest uppercase transition-all shadow-[0_4px_14px_rgba(37,211,102,0.3)] hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <p className="text-xs text-gray-400 mt-4 font-medium uppercase tracking-wider">
                Our advisors typically reply within a few minutes.
              </p>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl relative group">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/mentorship-bg.jpg')" }}
            ></div>
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="relative p-10 flex items-end justify-center min-h-[400px] h-full">
              <div className="text-center text-white space-y-2 w-full pb-4">
                <h3 className="text-3xl font-serif font-bold drop-shadow-md">1-on-1</h3>
                <p className="text-white/90 font-medium tracking-wide drop-shadow-sm">Personalized Tutoring</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
