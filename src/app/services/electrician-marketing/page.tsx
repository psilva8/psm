import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electrician Marketing | Paul Silva Marketing - Los Angeles Electrician Digital Marketing Expert',
  description: 'Expert electrician marketing services in Los Angeles. Specialized SEO, Google Ads, and lead generation for electricians. Proven to increase service calls by 200%+. Free electrician marketing audit available.',
  keywords: 'electrician marketing, electrician SEO, electrician Google Ads, electrician lead generation, Los Angeles electrician marketing, electrical contractor marketing, electrician digital marketing, Paul Silva',
  openGraph: {
    title: 'Electrician Marketing | Paul Silva Marketing',
    description: 'Expert electrician marketing services in Los Angeles. Specialized SEO, Google Ads, and lead generation for electricians. Proven results with 200%+ service call increases.',
    url: 'https://paulsilvamarketing.com/electrician-marketing',
    images: [
      {
        url: '/images/Electrician Marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'Electrician Marketing Services - Paul Silva Marketing',
      },
    ],
  },
  alternates: {
    canonical: '/electrician-marketing',
  },
};

export default function ElectricianMarketing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Structured Data for Electrician Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Electrician Marketing Services",
            "description": "Specialized digital marketing services for electricians including emergency service SEO, Google Ads, and lead generation strategies.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Paul Silva Marketing",
              "telephone": "+1-323-522-1424",
              "email": "paul@paulsilvamarketing.com"
            },
            "areaServed": "Los Angeles, CA",
            "serviceType": "Electrician Digital Marketing",
            "category": [
              "Electrician SEO",
              "Electrician Google Ads",
              "Electrician Lead Generation",
              "Electrician Website Design",
              "Electrician Content Marketing"
            ],
            "offers": {
              "@type": "Offer",
              "name": "Free Electrician Marketing Audit",
              "description": "Comprehensive analysis of your electrical company's digital marketing performance with actionable recommendations."
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Electrical Contractors and Electricians"
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/Electrician Marketing.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Electrician Marketing
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 max-w-3xl mx-auto">
              Get more emergency calls and service requests with proven electrician marketing strategies that highlight your expertise and reliability.
            </p>
            <Link 
              href="/#contact" 
              className="inline-block bg-white text-navy-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Free Electrician Marketing Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Why Electrician Marketing Matters */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Why Electrician Marketing Is Essential</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                When electrical emergencies occur, homeowners search for "electrician near me" and choose the first reliable option they find. 
                Your online presence and reputation are crucial for capturing these urgent service calls and building a steady stream of new clients.
              </p>
              <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                Our specialized electrician marketing strategies help you rank higher in local searches, showcase your expertise, and position 
                your business as the go-to electrical service provider in your area.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Our Electrician Marketing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Emergency Service SEO</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• "Electrician near me" optimization</li>
                  <li>• Emergency service landing pages</li>
                  <li>• 24/7 service call optimization</li>
                  <li>• Local service area targeting</li>
                  <li>• Mobile-first optimization</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Google Ads for Electricians</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Emergency service campaigns</li>
                  <li>• Service-specific ads</li>
                  <li>• Local area targeting</li>
                  <li>• Call-only campaigns</li>
                  <li>• Budget optimization</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Reputation Management</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Google & Yelp review generation</li>
                  <li>• Review response management</li>
                  <li>• Testimonial collection</li>
                  <li>• Online reputation monitoring</li>
                  <li>• Trust badge implementation</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Website & Lead Generation</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Mobile-friendly design</li>
                  <li>• Service request forms</li>
                  <li>• Emergency call buttons</li>
                  <li>• Service area pages</li>
                  <li>• Lead tracking systems</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Electrician Industry Results</h2>
            <div className="bg-navy-50 p-6 sm:p-8 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-600 mb-2">200%+</div>
                  <div className="text-gray-700 text-sm sm:text-base">Increase in service calls</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-600 mb-2">85%</div>
                  <div className="text-gray-700 text-sm sm:text-base">Emergency call response rate</div>
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
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to Get More Emergency Calls?</h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Get a free marketing audit and discover how we can help you become the preferred electrician in your area.
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