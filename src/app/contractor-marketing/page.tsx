import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contractor Marketing | Paul Silva Marketing - Los Angeles Contractor Digital Marketing Expert',
  description: 'Expert contractor marketing services in Los Angeles. Specialized SEO, Google Ads, and lead generation for contractors. Proven to increase project inquiries by 250%+. Free contractor marketing audit available.',
  keywords: 'contractor marketing, contractor SEO, contractor Google Ads, contractor lead generation, Los Angeles contractor marketing, general contractor marketing, contractor digital marketing, Paul Silva',
  openGraph: {
    title: 'Contractor Marketing | Paul Silva Marketing',
    description: 'Expert contractor marketing services in Los Angeles. Specialized SEO, Google Ads, and lead generation for contractors. Proven results with 250%+ project inquiry increases.',
    url: 'https://paulsilvamarketing.com/contractor-marketing',
    images: [
      {
        url: '/images/Contractor Marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'Contractor Marketing Services - Paul Silva Marketing',
      },
    ],
  },
  alternates: {
    canonical: '/contractor-marketing',
  },
};

export default function ContractorMarketing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Structured Data for Contractor Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Contractor Marketing Services",
            "description": "Specialized digital marketing services for contractors including portfolio development, SEO, Google Ads, and lead generation strategies.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Paul Silva Marketing",
              "telephone": "+1-323-522-1424",
              "email": "paul@paulsilvamarketing.com"
            },
            "areaServed": "Los Angeles, CA",
            "serviceType": "Contractor Digital Marketing",
            "category": [
              "Contractor SEO",
              "Contractor Google Ads",
              "Contractor Lead Generation",
              "Contractor Website Design",
              "Contractor Content Marketing"
            ],
            "offers": {
              "@type": "Offer",
              "name": "Free Contractor Marketing Audit",
              "description": "Comprehensive analysis of your contractor company's digital marketing performance with actionable recommendations."
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "General Contractors and Construction Companies"
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/Contractor Marketing.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Why Contractor Marketing Matters */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Why Contractor Marketing Is Crucial</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                General contractors face intense competition for high-value projects. Homeowners research extensively before choosing a contractor, 
                making your online presence and reputation critical to winning bids and securing quality projects.
              </p>
              <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                Our specialized contractor marketing strategies help you showcase your work, build trust with potential clients, and position 
                yourself as the go-to contractor for premium residential and commercial projects.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Our Contractor Marketing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Portfolio & Project Showcase</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Professional project photography</li>
                  <li>• Before/after galleries</li>
                  <li>• Video project walkthroughs</li>
                  <li>• Case study development</li>
                  <li>• Portfolio website design</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Local SEO for Contractors</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• "Contractors near me" optimization</li>
                  <li>• Service area page creation</li>
                  <li>• Google My Business management</li>
                  <li>• Local directory submissions</li>
                  <li>• Citation building & cleanup</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Reputation Management</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Google & Yelp review generation</li>
                  <li>• Review response management</li>
                  <li>• Testimonial collection systems</li>
                  <li>• Online reputation monitoring</li>
                  <li>• Trust badge implementation</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Lead Generation</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Project estimate forms</li>
                  <li>• Service-specific landing pages</li>
                  <li>• Pay-per-click advertising</li>
                  <li>• Social media marketing</li>
                  <li>• Email marketing campaigns</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Contractor Industry Results</h2>
            <div className="bg-navy-50 p-6 sm:p-8 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-600 mb-2">250%+</div>
                  <div className="text-gray-700 text-sm sm:text-base">Increase in project inquiries</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-600 mb-2">$25K+</div>
                  <div className="text-gray-700 text-sm sm:text-base">Average project value increase</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-600 mb-2">95%</div>
                  <div className="text-gray-700 text-sm sm:text-base">Client satisfaction rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-900 text-white p-6 sm:p-8 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to Win More High-Value Projects?</h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Get a free marketing audit and discover how we can help you become the preferred contractor in your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 sm:justify-center">
              <Link 
                href="/#contact" 
                className="inline-block bg-navy-600 text-white px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-navy-700 transition-colors text-center"
              >
                Get Free Audit
              </Link>
              <a 
                href="tel:3235221424" 
                className="inline-block border border-white text-white px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center"
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