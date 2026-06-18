import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LatestCard from '@/components/LatestCard';

export default function Home() {
  const latestItems = [
    {
      tag: 'AI',
      title: 'AI Agent Programming & Automation',
      date: '2026/05/08',
      excerpt: 'This lesson trains kids and teens on the basics of AI agents, how they work, and how they can be used in real-life applications like task automation and simple problem-solving.',
      tagColor: 'blue' as const,
      imageUrl: '/ai-class.jpg',
      isVideo: false,
    },
    {
      tag: 'BUSINESS',
      title: 'Startup Building',
      date: '2026/05/13',
      excerpt: 'This lesson guides kids and teens on how to identify problems, develop simple solutions, and turn ideas into basic business concepts. Parents and learners should expect practical, step-by-step lessons that build creativity, problem-solving skills, and an entrepreneurial mindset to help them understand how startups are built and grown.',
      tagColor: 'black' as const,
      imageUrl: '/startup-class.png',
      isVideo: false,
    },
    {
      tag: 'CUSTOMER ACQUISITION',
      title: 'Sales & Marketing',
      date: '2026/05/13',
      excerpt: 'Futures Academy teaches kids and teens the basics of selling, digital marketing, social media marketing, paid ads, and cold outreach, helping them understand how real businesses reach and convert customers.',
      tagColor: 'black' as const,
      imageUrl: '/sales-class-v2.jpg',
    },
    {
      tag: 'CREATIVE DESIGN',
      title: 'Creative Design',
      date: '2026/05/13',
      excerpt: 'Futures Academy teaches kids and teens videography, video editing, graphic design, UI/UX design, and basic tech tools used in modern creative work.',
      tagColor: 'blue' as const,
      imageUrl: '/design-class.png',
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
                  Futures Academy
                </h1>
                <div className="text-lg md:text-xl text-gray-700 leading-relaxed font-serif space-y-4">
                  <p>At Futures Academy, we prepare kids and teens for the future by teaching them real-world, high-value skills that go beyond the classroom.</p>
                  <p>Our goal is simple — to help young learners think like creators, builders, and entrepreneurs before their peak ages.</p>
                  <p>Through hands-on projects and guided training, students learn how to solve problems, build digital products, create content, understand technology, and develop the confidence to launch ideas of their own.</p>
                </div>
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
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed font-serif space-y-6 mb-8 md:mb-10">
              <p>
                At Futures Academy, we teach kids and teens practical skills for the future. Our goal is to prepare young people with skills that help them create opportunities, not just look for them.
              </p>
              <p>
                We train them in areas like Sales, AI Agent Programming & Automation, Marketing, Videography & Video Editing, Programming, AI Research, and Startup Building. Through simple, hands-on learning, we help them build real projects, think creatively, and gain confidence using modern tools and technology.
              </p>
            </div>
          </div>
        </section>

        {/* Lessons at Futures Academy Section */}
        <section className="py-16 md:py-20 bg-[#f9f9f9]">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-10 md:mb-16 text-center">Lessons at Futures Academy</h2>
            
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
