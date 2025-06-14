import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cleaning Company Marketing | Paul Silva Marketing - Los Angeles Cleaning Service Digital Marketing Expert',
  description: 'Expert cleaning company marketing services in Los Angeles. Specialized SEO, Google Ads, and lead generation for cleaning services. Proven to increase service inquiries by 250%+. Free cleaning company marketing audit available.',
  keywords: 'cleaning company marketing, cleaning service SEO, cleaning service Google Ads, cleaning service lead generation, Los Angeles cleaning marketing, janitorial marketing, cleaning service digital marketing, Paul Silva',
  openGraph: {
    title: 'Cleaning Company Marketing | Paul Silva Marketing',
    description: 'Expert cleaning company marketing services in Los Angeles. Specialized SEO, Google Ads, and lead generation for cleaning services. Proven results with 250%+ service inquiry increases.',
    url: 'https://paulsilvamarketing.com/cleaning-companies-marketing',
    images: [
      {
        url: '/images/Cleaning Companies Marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'Cleaning Company Marketing Services - Paul Silva Marketing',
      },
    ],
  },
  alternates: {
    canonical: '/cleaning-companies-marketing',
  },
};

export default function CleaningCompaniesMarketing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Structured Data for Cleaning Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Cleaning Company Marketing Services",
            "description": "Specialized digital marketing services for cleaning companies including local SEO, Google Ads, and lead generation strategies.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Paul Silva Marketing",
              "telephone": "+1-323-522-1424",
              "email": "paul@paulsilvamarketing.com"
            },
            "areaServed": "Los Angeles, CA",
            "serviceType": "Cleaning Service Digital Marketing",
            "category": [
              "Cleaning Service SEO",
              "Cleaning Service Google Ads",
              "Cleaning Service Lead Generation",
              "Cleaning Service Website Design",
              "Cleaning Service Content Marketing"
            ],
            "offers": {
              "@type": "Offer",
              "name": "Free Cleaning Company Marketing Audit",
              "description": "Comprehensive analysis of your cleaning company's digital marketing performance with actionable recommendations."
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Cleaning Companies and Janitorial Services"
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/Cleaning Companies Marketing.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cleaning Company Marketing
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 max-w-3xl mx-auto">
              Get more cleaning service requests and grow your client base with proven marketing strategies that highlight your reliability and quality.
            </p>
            <Link 
              href="/#contact" 
              className="inline-block bg-white text-navy-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Free Cleaning Company Marketing Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Why Cleaning Company Marketing Matters */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Why Cleaning Company Marketing Is Essential</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                In today's competitive cleaning industry, businesses and homeowners search online for reliable cleaning services. Your online 
                presence and reputation are crucial for attracting new clients and maintaining a steady stream of cleaning contracts.
              </p>
              <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                Our specialized cleaning company marketing strategies help you stand out from competitors, showcase your service quality, 
                and position your business as the preferred cleaning service provider in your area.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Our Cleaning Company Marketing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Local SEO for Cleaning Services</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• "Cleaning service near me" optimization</li>
                  <li>• Service area targeting</li>
                  <li>• Google My Business management</li>
                  <li>• Local directory listings</li>
                  <li>• Review generation strategy</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Google Ads for Cleaning Services</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Service-specific campaigns</li>
                  <li>• Local area targeting</li>
                  <li>• Call-only campaigns</li>
                  <li>• Budget optimization</li>
                  <li>• Conversion tracking</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Website & Lead Generation</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Mobile-friendly design</li>
                  <li>• Service request forms</li>
                  <li>• Online booking system</li>
                  <li>• Service area pages</li>
                  <li>• Lead tracking systems</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Reputation Management</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Google & Yelp review generation</li>
                  <li>• Review response management</li>
                  <li>• Client testimonial collection</li>
                  <li>• Before/after photos</li>
                  <li>• Trust badge implementation</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Cleaning Industry Results</h2>
            <div className="bg-navy-50 p-6 sm:p-8 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-600 mb-2">250%+</div>
                  <div className="text-gray-700 text-sm sm:text-base">Increase in service inquiries</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-600 mb-2">85%</div>
                  <div className="text-gray-700 text-sm sm:text-base">New client conversion rate</div>
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
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to Get More Cleaning Service Requests?</h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Get a free marketing audit and discover how we can help you become the preferred cleaning service in your area.
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