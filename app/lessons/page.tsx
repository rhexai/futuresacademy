"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  BookOpen, 
  Check, 
  ArrowRight, 
  Play, 
  X, 
  Video, 
  Award
} from 'lucide-react';
import { usePaystackPayment } from 'react-paystack';

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon>
  </svg>
);

export default function LessonsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    age: '',
    track: 'AI Agent Programming & Automation'
  });

  const paystackAmount = billingPeriod === 'monthly' ? 22494 : 24000; // 22494 pesewas = 224.94 GHS
  const paystackConfig = {
    reference: `FA_${(new Date()).getTime()}`,
    email: formData.email || 'customer@example.com',
    amount: paystackAmount,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || 'pk_test_87b4fb2bd3c8c93db85af8dad85bbbfa0d94d869',
    currency: 'GHS',
  };

  const initializePayment = usePaystackPayment(paystackConfig);

  const onSuccess = () => {
    resetForm();
    alert("Payment successful! Thank you for enrolling.");
  };

  const onClose = () => {
    console.log('Payment modal closed');
  };

  const handlePayment = () => {
    initializePayment({ onSuccess, onClose } as any);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.parentName && formData.studentName && formData.phone && formData.email && formData.age) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/enroll', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          setFormSubmitted(true);
        } else {
          console.error('Submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const resetForm = () => {
    setIsModalOpen(false);
    setFormSubmitted(false);
    setFormData({
      parentName: '',
      studentName: '',
      phone: '',
      email: '',
      age: '',
      track: 'AI Agent Programming & Automation'
    });
  };

  const featuresPremium = [
    "Full access to all 4 main learning tracks (AI, Business, Sales, Creative Design)",
    "Guided, step-by-step curriculum designed for kids & teens aged 8-18",
    "Live feedback and personal tutoring support from expert advisors",
    "Real-world projects that build portfolio-level confidence",
    "Official Futures Academy completion certificates"
  ];

  const featuresFree = [
    "Bite-sized video lessons on basic tech tools and coding concepts",
    "Student Showcase video uploads and project demonstrations",
    "Weekly tips on automation, design principles, and editing",
    "Public recordings of Futures Academy community bootcamps"
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white border-b border-gray-200 py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 leading-tight max-w-[900px] mx-auto">
              Lessons & Tutorials
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-serif max-w-[700px] mx-auto">
              Explore your learning path. Enroll your child in our structured lessons or browse our free video tutorials on YouTube.
            </p>
          </div>
        </section>

        {/* Directory Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
              
              {/* Premium Courses Card */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#5A75F9]/5 rounded-bl-full pointer-events-none transition-all duration-300 group-hover:bg-[#5A75F9]/10"></div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#5A75F9]/10 flex items-center justify-center text-[#5A75F9] mb-6">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">
                    Premium Courses
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                    Join our structured program with a dedicated curriculum, hands-on mentorship, and project certifications.
                  </p>

                  <ul className="space-y-4 mb-8">
                    {featuresPremium.map((feat, i) => (
                      <li key={i} className="flex gap-3 items-start text-sm text-gray-700">
                        <Check className="w-5 h-5 text-[#5A75F9] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-auto">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <span className="text-2xl font-bold text-gray-900 font-serif">GH₵ 224.94</span>
                      <span className="text-xs text-gray-500 font-medium"> / month</span>
                    </div>
                    <span className="text-xs font-bold text-[#5A75F9] tracking-wider uppercase bg-[#5A75F9]/10 px-3 py-1 rounded-full">
                      Structured learning
                    </span>
                  </div>

                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-[#5A75F9] hover:bg-[#4558cc] text-white py-4 px-6 rounded-xl font-bold text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_4px_12px_rgba(90,117,249,0.3)]"
                  >
                    Subscribe & Enroll <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Free YouTube Tutorials Card */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full pointer-events-none transition-all duration-300 group-hover:bg-red-500/10"></div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 mb-6">
                    <YoutubeIcon className="w-6 h-6" />
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">
                    Free Tutorials
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                    Watch our collection of free video guides, student showcase highlights, and tool-setup walkthroughs on YouTube.
                  </p>

                  <ul className="space-y-4 mb-8">
                    {featuresFree.map((feat, i) => (
                      <li key={i} className="flex gap-3 items-start text-sm text-gray-700">
                        <Play className="w-5 h-5 text-red-500 shrink-0 mt-0.5 fill-red-500/10" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-auto">

                  <a 
                    href="https://www.youtube.com/@futuresacademyofficial" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-black hover:bg-gray-800 text-white py-4 px-6 rounded-xl font-bold text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-2"
                  >
                    Watch on YouTube <Video className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Subscription / Enrollment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button 
              onClick={resetForm}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10 p-1 bg-gray-100 rounded-full"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!formSubmitted ? (
              <div className="p-8">
                <h3 className="text-2xl font-serif text-gray-900 mb-6">
                  Enroll Child in Futures Academy
                </h3>

                {/* Billing Cycle Toggle */}
                <div className="bg-gray-100 p-1 rounded-xl flex gap-1 mb-8">
                  <button 
                    type="button"
                    onClick={() => setBillingPeriod('monthly')}
                    className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all uppercase tracking-wider ${billingPeriod === 'monthly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                  >
                    Monthly (GH₵ 224.94)
                  </button>
                  <button 
                    type="button"
                    onClick={() => setBillingPeriod('annual')}
                    className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all uppercase tracking-wider flex items-center justify-center gap-1.5 ${billingPeriod === 'annual' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                  >
                    Annual ($240) <span className="bg-[#5A75F9]/10 text-[#5A75F9] text-[10px] px-1.5 py-0.5 rounded-sm">Save 30%</span>
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="parentName" className="block text-xs font-bold text-gray-700 tracking-wider uppercase mb-2">Parent Name</label>
                    <input 
                      required
                      type="text" 
                      id="parentName" 
                      name="parentName" 
                      value={formData.parentName}
                      onChange={handleInputChange}
                      placeholder="Jane Doe" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#5A75F9] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="studentName" className="block text-xs font-bold text-gray-700 tracking-wider uppercase mb-2">Student Name</label>
                    <input 
                      required
                      type="text" 
                      id="studentName" 
                      name="studentName" 
                      value={formData.studentName}
                      onChange={handleInputChange}
                      placeholder="John Doe" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#5A75F9] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-gray-700 tracking-wider uppercase mb-2">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#5A75F9] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-700 tracking-wider uppercase mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="parent@example.com" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#5A75F9] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="age" className="block text-xs font-bold text-gray-700 tracking-wider uppercase mb-2">Student Age</label>
                      <input 
                        required
                        type="number" 
                        id="age" 
                        name="age" 
                        min="5"
                        max="20"
                        value={formData.age}
                        onChange={handleInputChange}
                        placeholder="14" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#5A75F9] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="track" className="block text-xs font-bold text-gray-700 tracking-wider uppercase mb-2">Preferred Track</label>
                      <select 
                        id="track" 
                        name="track" 
                        value={formData.track}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#5A75F9] focus:bg-white transition-all"
                      >
                        <option>AI Agent Programming</option>
                        <option>Startup Building</option>
                        <option>Sales & Marketing</option>
                        <option>Creative Design</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#5A75F9] hover:bg-[#4558cc] text-white py-4 px-6 rounded-xl font-bold text-sm tracking-widest transition-all mt-4 flex items-center justify-center shadow-[0_4px_12px_rgba(90,117,249,0.2)] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Confirm Subscription & Enroll'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-500 flex items-center justify-center mb-6">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-gray-900 mb-3">
                  Enrollment Submitted!
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm">
                  Thank you, <strong>{formData.parentName}</strong>! We have received your request to enroll your child in our <strong>{formData.track}</strong> track. An advisor will reach out to <strong>{formData.email}</strong> shortly with details and next steps. Please click the button below to proceed to payment and complete your subscription.
                </p>
                <button 
                  onClick={handlePayment}
                  className="bg-black hover:bg-gray-800 text-white py-3.5 px-8 rounded-xl font-bold text-sm tracking-widest uppercase transition-all"
                >
                  Proceed to Subscribe
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
