import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Marketing | Paul Silva Marketing - Los Angeles Construction Digital Marketing Expert',
  description: 'Expert construction marketing services in Los Angeles. Specialized SEO, Google Ads, and lead generation for construction companies. Proven to increase project inquiries by 300%+. Free construction marketing audit available.',
  keywords: 'construction marketing, construction SEO, construction Google Ads, construction lead generation, Los Angeles construction marketing, construction company marketing, construction digital marketing, Paul Silva',
  openGraph: {
    title: 'Construction Marketing | Paul Silva Marketing',
    description: 'Expert construction marketing services in Los Angeles. Specialized SEO, Google Ads, and lead generation for construction companies. Proven results with 300%+ project inquiry increases.',
    url: 'https://paulsilvamarketing.com/construction-marketing',
    images: [
      {
        url: '/images/Construction Marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'Construction Marketing Services - Paul Silva Marketing',
      },
    ],
  },
  alternates: {
    canonical: '/construction-marketing',
  },
};

export default function ConstructionMarketing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Structured Data for Construction Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Construction Marketing Services",
            "description": "Specialized digital marketing services for construction companies including project portfolio development, SEO, Google Ads, and lead generation strategies.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Paul Silva Marketing",
              "telephone": "+1-323-522-1424",
              "email": "paul@paulsilvamarketing.com"
            },
            "areaServed": "Los Angeles, CA",
            "serviceType": "Construction Digital Marketing",
            "category": [
              "Construction SEO",
              "Construction Google Ads",
              "Construction Lead Generation",
              "Construction Website Design",
              "Construction Content Marketing"
            ],
            "offers": {
              "@type": "Offer",
              "name": "Free Construction Marketing Audit",
              "description": "Comprehensive analysis of your construction company's digital marketing performance with actionable recommendations."
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Construction Companies and Builders"
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/Construction Marketing.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Construction Marketing
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 max-w-3xl mx-auto">
              Showcase your construction expertise and win more high-value projects with proven marketing strategies that highlight your capabilities.
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
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Why Construction Marketing Matters */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Why Construction Marketing Is Critical</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                In today's digital age, construction companies need more than just word-of-mouth referrals to grow. Property owners and developers 
                research extensively online before choosing a construction partner, making your digital presence crucial for winning bids.
              </p>
              <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                Our specialized construction marketing strategies help you showcase your portfolio, demonstrate your expertise, and position 
                your company as the preferred choice for high-value construction projects.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Our Construction Marketing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Project Portfolio Development</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Professional project photography</li>
                  <li>• Virtual tours & 3D renders</li>
                  <li>• Case study development</li>
                  <li>• Project timeline showcases</li>
                  <li>• Portfolio website design</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Construction SEO</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Local construction SEO</li>
                  <li>• Service area optimization</li>
                  <li>• Project type targeting</li>
                  <li>• Industry directory listings</li>
                  <li>• Content marketing strategy</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Lead Generation</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Project inquiry forms</li>
                  <li>• Service-specific landing pages</li>
                  <li>• Google Ads campaigns</li>
                  <li>• Industry networking</li>
                  <li>• Referral program setup</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Reputation Management</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Client testimonial collection</li>
                  <li>• Project success stories</li>
                  <li>• Industry award submissions</li>
                  <li>• Professional certifications</li>
                  <li>• Trust badge implementation</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Construction Industry Results</h2>
            <div className="bg-navy-50 p-6 sm:p-8 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-600 mb-2">300%+</div>
                  <div className="text-gray-700 text-sm sm:text-base">Increase in project inquiries</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-600 mb-2">$50K+</div>
                  <div className="text-gray-700 text-sm sm:text-base">Average project value increase</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-600 mb-2">90%</div>
                  <div className="text-gray-700 text-sm sm:text-base">Client satisfaction rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-900 text-white p-6 sm:p-8 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to Win More Construction Projects?</h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Get a free marketing audit and discover how we can help you become the preferred construction company in your market.
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