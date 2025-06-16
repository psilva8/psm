import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contractor Marketing Services | Paul Silva Marketing',
  description: 'Expert digital marketing services for general contractors. Specialized SEO, Google Ads, and lead generation for residential and commercial construction projects. Get more high-value projects.',
  keywords: 'contractor marketing, construction SEO, contractor Google Ads, contractor lead generation, construction digital marketing, Paul Silva',
  openGraph: {
    title: 'Contractor Marketing Services | Paul Silva Marketing',
    description: 'Expert digital marketing services for general contractors. Specialized SEO, Google Ads, and lead generation for residential and commercial construction projects.',
    url: 'https://paulsilvamarketing.com/services/contractor-marketing',
    images: [
      {
        url: '/images/contractor marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'Contractor Marketing Services - Paul Silva Marketing',
      },
    ],
  },
  alternates: {
    canonical: 'https://paulsilvamarketing.com/services/contractor-marketing',
  },
};

export default function ContractorMarketing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contractor marketing.jpg"
            alt="Contractor Marketing Services"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contractor Marketing
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 max-w-3xl mx-auto">
              Build your reputation and attract high-value projects with proven contractor marketing strategies that showcase your expertise.
            </p>
            <Link 
              href="/#contact" 
              className="inline-block bg-white text-navy-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Free Contractor Marketing Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Why Contractor Marketing Matters */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Contractor Marketing Is Crucial</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-6">
                General contractors face intense competition for high-value projects. Homeowners research extensively before choosing a contractor, 
                making your online presence and reputation critical to winning bids and securing quality projects.
              </p>
              <p className="mb-6">
                Our specialized contractor marketing strategies help you showcase your work, build trust with potential clients, and 
                position yourself as the go-to contractor for premium residential and commercial projects.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Contractor Marketing Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Portfolio & Project Showcase</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Professional project photography</li>
                  <li>• Before/after galleries</li>
                  <li>• Video project walkthroughs</li>
                  <li>• Case study development</li>
                  <li>• Portfolio website design</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Local SEO for Contractors</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• "Contractors near me" optimization</li>
                  <li>• Service area page creation</li>
                  <li>• Google My Business management</li>
                  <li>• Local directory submissions</li>
                  <li>• Citation building & cleanup</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Reputation Management</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Google & Yelp review generation</li>
                  <li>• Review response management</li>
                  <li>• Testimonial collection systems</li>
                  <li>• Online reputation monitoring</li>
                  <li>• Trust badge implementation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lead Generation</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Project estimate forms</li>
                  <li>• Service-specific landing pages</li>
                  <li>• Pay-per-click advertising</li>
                  <li>• Social media marketing</li>
                  <li>• Email marketing campaigns</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Contractor-Specific Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contractor Industry Results</h2>
            <div className="bg-navy-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-navy-600 mb-2">250%+</div>
                  <div className="text-gray-700">Increase in project inquiries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy-600 mb-2">$25K+</div>
                  <div className="text-gray-700">Average project value increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy-600 mb-2">95%</div>
                  <div className="text-gray-700">Client satisfaction rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contractor Services We Market */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contractor Services We Help You Market</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Residential Projects</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Home additions</li>
                  <li>• Kitchen remodeling</li>
                  <li>• Bathroom renovations</li>
                  <li>• Basement finishing</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Commercial Projects</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Office build-outs</li>
                  <li>• Retail construction</li>
                  <li>• Restaurant renovations</li>
                  <li>• Warehouse projects</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Specialty Services</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Custom homes</li>
                  <li>• Historic renovations</li>
                  <li>• Green building</li>
                  <li>• Emergency repairs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-900 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Win More High-Value Projects?</h2>
            <p className="text-gray-300 mb-6">
              Get a free marketing audit and discover how we can help you become the preferred contractor in your market.
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