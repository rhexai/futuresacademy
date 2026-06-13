import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LatestCard from '@/components/LatestCard';

export default function Home() {
  const latestItems = [
    {
      tag: 'MARKETS',
      title: 'OpenSea official website shows a service outage',
      date: '2026/05/08',
      excerpt: 'Foresight News reports that, according to the official website, due to an ongoing system malfunction, OpenSea is currently experiencing a service outage.',
      tagColor: 'blue' as const,
      imageUrl: '/images-3.png',
      isVideo: false,
    },
    {
      tag: 'IN THE NEWS',
      title: 'AI Chipmaker Cerebras to Guide IPO Pricing Above Range',
      date: '2026/05/13',
      excerpt: 'Cerebras Systems Inc. is guiding prospective investors that it expects to price its initial public offering above the top of its marketed range.',
      tagColor: 'black' as const,
      imageUrl: '/Cerebras-1024x576.jpg',
      isVideo: false,
    },
    {
      tag: 'IN THE NEWS',
      title: 'Dangote plans refinery stock market debut in deal that could raise $5bn',
      date: '2026/05/13',
      excerpt: 'Aliko Dangote is targeting a $50 billion valuation for Dangote Petroleum Refinery ahead of a planned Nigerian IPO that could raise about $5 billion.',
      tagColor: 'black' as const,
      imageUrl: '/dangote-refinery-crude-oil-shipment-.jpg',
    },
    {
      tag: 'MARKETS',
      title: 'Stock Market Under the Trump Administration: What is Driving Markets in 2026?',
      date: '2026/05/13',
      excerpt: 'See how tariffs, tax cuts, oil prices, and earnings are shaping the stock market under Trump in 2026 and what investors should watch next.',
      tagColor: 'blue' as const,
      imageUrl: '/trump-powell-gty-jt-250716_1752692797545_hpMain_4x3.jpg.avif',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white py-12 md:py-16 lg:py-24 border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-24 items-center">
              <div className="w-full lg:w-5/12 flex flex-col justify-center text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 md:mb-8 leading-tight">
                  Thinking Out Loud
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-serif">
                  The Daily Observations — or what we call the wire — is how we share our thinking with clients and partners in real time. Here, we highlight the people, ideas, and processes that shape our perspective. Hattex provides deal sourcing and management services.
                </p>
              </div>
              
              <div className="w-full lg:w-7/12 relative group overflow-hidden cursor-pointer">
                {/* Hero image placeholder */}
                <img 
                  src="/ai.jpg" 
                  alt="Daily Observations Documents" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Navigation arrows overlay */}
                <div className="absolute bottom-4 right-4 flex">
                  <div className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                  </div>
                  <div className="w-10 h-10 bg-black text-white border-l border-gray-800 flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 md:py-24 bg-[#f9f9f9]">
          <div className="max-w-[1000px] mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 md:mb-8">What We Do</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-serif mb-8 md:mb-10">
              At Hattex, we help our partners access diverse asset options. We analyse and break down complex investments into simple data — so our clients can make better decisions with confidence.
            </p>
          </div>
        </section>

        {/* Latest from Openhall Section */}
        <section className="py-16 md:py-20 bg-[#f9f9f9]">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-10 md:mb-16 text-center">Latest from Hattex</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-16">
              {latestItems.map((item, index) => (
                <LatestCard key={index} {...item} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
