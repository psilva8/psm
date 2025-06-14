import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function ConstructionMarketing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/construction marketing.jpg"
            alt="Construction Marketing Services"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Construction Marketing
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 max-w-3xl mx-auto">
              Build your construction company's reputation and secure high-value projects with proven marketing strategies.
            </p>
            <Link 
              href="/#contact" 
              className="inline-block bg-white text-navy-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Free Construction Marketing Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Why Construction Marketing Matters */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Construction Marketing Is Critical</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-6">
                The construction industry is built on relationships and reputation. Your online presence and marketing materials 
                directly impact your ability to win contracts and attract quality clients.
              </p>
              <p className="mb-6">
                Our specialized construction marketing strategies help you showcase your projects, build credibility, 
                and position your company as the preferred choice for large-scale construction projects.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Construction Marketing Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Portfolio Development</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Professional construction photography</li>
                  <li>• Time-lapse project videos</li>
                  <li>• Detailed case studies</li>
                  <li>• Before/after showcases</li>
                  <li>• Interactive project galleries</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">B2B Marketing & Lead Generation</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Commercial project bidding support</li>
                  <li>• LinkedIn marketing campaigns</li>
                  <li>• Industry networking strategies</li>
                  <li>• Proposal template optimization</li>
                  <li>• Partnership development</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Presence & SEO</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Construction company websites</li>
                  <li>• Local SEO optimization</li>
                  <li>• Industry-specific keywords</li>
                  <li>• Google My Business management</li>
                  <li>• Online reputation management</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Brand Development</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Professional logo design</li>
                  <li>• Marketing material creation</li>
                  <li>• Vehicle wrap design</li>
                  <li>• Trade show materials</li>
                  <li>• Safety certification showcase</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Results Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Construction Industry Results</h2>
            <div className="bg-navy-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-navy-600 mb-2">200%+</div>
                  <div className="text-gray-700">Increase in project inquiries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy-600 mb-2">$500K+</div>
                  <div className="text-gray-700">Average project value increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy-600 mb-2">75%</div>
                  <div className="text-gray-700">Bid win rate improvement</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-900 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Build Your Construction Business?</h2>
            <p className="text-gray-300 mb-6">
              Get a free marketing audit and discover how we can help you win more high-value construction projects.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link 
                href="/#contact" 
                className="inline-block bg-navy-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-navy-700 transition-colors"
              >
                Get Free Audit
              </Link>
              <a 
                href="tel:3235221424" 
                className="inline-block border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Call (323) 522-1424
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
} 