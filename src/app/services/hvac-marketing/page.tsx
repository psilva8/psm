import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HVAC Marketing Services | Paul Silva Marketing - Los Angeles HVAC Digital Marketing Expert',
  description: 'Expert HVAC marketing services in Los Angeles. Specialized SEO, Google Ads, and lead generation for HVAC contractors. Proven to increase HVAC leads by 300%+. Free HVAC marketing audit available.',
  keywords: 'HVAC marketing, HVAC SEO, HVAC Google Ads, HVAC lead generation, Los Angeles HVAC marketing, HVAC contractor marketing, HVAC digital marketing, Paul Silva',
  openGraph: {
    title: 'HVAC Marketing Services | Paul Silva Marketing',
    description: 'Expert HVAC marketing services in Los Angeles. Specialized SEO, Google Ads, and lead generation for HVAC contractors. Proven results with 300%+ lead increases.',
    url: 'https://paulsilvamarketing.com/services/hvac-marketing',
    images: [
      {
        url: '/images/HVAC Marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'HVAC Marketing Services - Paul Silva Marketing',
      },
    ],
  },
  alternates: {
    canonical: '/services/hvac-marketing',
  },
};

export default function HVACMarketing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Structured Data for HVAC Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "HVAC Marketing Services",
            "description": "Specialized digital marketing services for HVAC contractors including local SEO, Google Ads, website optimization, and lead generation strategies.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Paul Silva Marketing",
              "telephone": "+1-323-522-1424",
              "email": "paul@paulsilvamarketing.com"
            },
            "areaServed": "Los Angeles, CA",
            "serviceType": "HVAC Digital Marketing",
            "category": [
              "HVAC SEO",
              "HVAC Google Ads",
              "HVAC Lead Generation",
              "HVAC Website Design",
              "HVAC Content Marketing"
            ],
            "offers": {
              "@type": "Offer",
              "name": "Free HVAC Marketing Audit",
              "description": "Comprehensive analysis of your HVAC company's digital marketing performance with actionable recommendations."
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "HVAC Contractors and Companies"
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section 
        className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-cover bg-center bg-no-repeat relative min-h-[60vh] sm:min-h-[70vh] flex items-center"
        style={{
          backgroundImage: "url('/images/HVAC Marketing.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              HVAC Marketing Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              Dominate your local market with proven HVAC marketing strategies that generate qualified leads and grow your business year-round.
            </p>
            <Link 
              href="/#contact" 
              className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Free HVAC Marketing Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Why HVAC Marketing Matters */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Why HVAC Marketing Is Critical for Your Business</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                The HVAC industry is highly competitive, with customers often choosing contractors based on online presence and reputation. 
                Without effective marketing, even the most skilled HVAC technicians struggle to attract new customers and grow their business.
              </p>
              <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                Our specialized HVAC marketing strategies help you stand out from competitors, attract high-quality leads, and build a 
                sustainable business that thrives in both peak and off-seasons.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Our HVAC Marketing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Local SEO for HVAC</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Google My Business optimization</li>
                  <li>• Local keyword targeting</li>
                  <li>• Citation building and management</li>
                  <li>• Review generation and management</li>
                  <li>• Local directory submissions</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">HVAC Website Design & SEO</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Mobile-responsive HVAC websites</li>
                  <li>• Service page optimization</li>
                  <li>• Technical SEO implementation</li>
                  <li>• Fast loading speed optimization</li>
                  <li>• Conversion-focused design</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Pay-Per-Click (PPC) Advertising</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Google Ads for HVAC services</li>
                  <li>• Emergency HVAC campaigns</li>
                  <li>• Seasonal campaign optimization</li>
                  <li>• Landing page creation</li>
                  <li>• Conversion tracking setup</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Content Marketing</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• HVAC blog content creation</li>
                  <li>• Seasonal maintenance guides</li>
                  <li>• Video marketing strategies</li>
                  <li>• Social media management</li>
                  <li>• Email marketing campaigns</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Results You Can Expect</h2>
            <div className="bg-blue-50 p-6 sm:p-8 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">300%+</div>
                  <div className="text-gray-700 text-sm sm:text-base">Increase in qualified leads</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">85%</div>
                  <div className="text-gray-700 text-sm sm:text-base">Improvement in local rankings</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-700 text-sm sm:text-base">Lead generation system</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-900 text-white p-6 sm:p-8 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to Grow Your HVAC Business?</h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Get a free marketing audit and discover how we can help you dominate your local HVAC market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 sm:justify-center">
              <Link 
                href="/#contact" 
                className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors text-center"
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