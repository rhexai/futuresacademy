"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Mail, CheckCircle2 } from 'lucide-react';

export default function EventsPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/events-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Header />

      <main className="flex-grow flex items-center justify-center py-16 px-6">
        <div className="max-w-xl w-full bg-white rounded-3xl p-10 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 text-center">
          
          <div className="w-16 h-16 rounded-2xl bg-[#5A75F9]/10 flex items-center justify-center mx-auto mb-8 text-[#5A75F9]">
            <Calendar className="w-8 h-8" />
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-4">
            Upcoming Events
          </h1>
          <p className="text-gray-600 leading-relaxed font-serif mb-10">
            Join our exclusive workshops, hackathons, and community bootcamps. Drop your email below and we'll make sure you're the first to know when tickets go live.
          </p>

          {status === 'success' ? (
            <div className="bg-green-50 border border-green-100 rounded-2xl p-8 animate-in zoom-in-95 duration-300">
              <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">You're on the list!</h3>
              <p className="text-gray-600 text-sm">We've securely received your email ({email}) and will keep you posted.</p>
              <button 
                onClick={() => { setStatus('idle'); setEmail(''); }}
                className="mt-6 text-sm font-bold text-[#5A75F9] hover:text-[#4558cc] uppercase tracking-widest transition-colors"
              >
                Subscribe Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-4 text-left">
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-gray-700 tracking-wider uppercase mb-2">Your Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="hello@example.com"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-[#5A75F9] focus:ring-1 focus:ring-[#5A75F9] transition-all"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#5A75F9] hover:bg-[#4558cc] text-white py-4 px-6 rounded-xl font-bold text-sm tracking-widest uppercase transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Get Event Updates'}
              </button>
              
              {status === 'error' && (
                <p className="text-red-500 text-xs font-medium text-center pt-2">Something went wrong. Please try again.</p>
              )}
            </form>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
