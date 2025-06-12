import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FreeConsultation from '@/components/FreeConsultation';

// Value Proposition Component
const ValueProposition = () => {
  return (
    <section className="py-16 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Home Service Businesses Choose Paul Silva Marketing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get more customers, increase revenue, and grow your business with proven digital marketing strategies
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-navy-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">More Leads</h3>
            <p className="text-gray-600">Generate consistent, high-quality leads from customers actively searching for your services</p>
          </div>
          
          <div className="text-center">
            <div className="bg-navy-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Higher ROI</h3>
            <p className="text-gray-600">Track every dollar spent and see measurable returns on your marketing investment</p>
          </div>
          
          <div className="text-center">
            <div className="bg-navy-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
            <p className="text-gray-600">Specialized expertise in home service marketing with a track record of success</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ValueProposition />
      <FreeConsultation />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
} 