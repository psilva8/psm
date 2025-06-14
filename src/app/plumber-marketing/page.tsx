import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plumber Marketing | Paul Silva Marketing - Los Angeles Plumbing Digital Marketing Expert',
  description: 'Expert plumbing marketing services in Los Angeles. Specialized SEO, Google Ads, and lead generation for plumbers. Proven to increase emergency calls by 400%+. Free plumbing marketing audit available.',
  keywords: 'plumber marketing, plumbing SEO, plumbing Google Ads, plumbing lead generation, Los Angeles plumbing marketing, plumbing contractor marketing, plumbing digital marketing, Paul Silva',
  openGraph: {
    title: 'Plumber Marketing | Paul Silva Marketing',
    description: 'Expert plumbing marketing services in Los Angeles. Specialized SEO, Google Ads, and lead generation for plumbers. Proven results with 400%+ emergency call increases.',
    url: 'https://paulsilvamarketing.com/plumber-marketing',
    images: [
      {
        url: '/images/Plumber Marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'Plumber Marketing Services - Paul Silva Marketing',
      },
    ],
  },
  alternates: {
    canonical: '/plumber-marketing',
  },
};

export default function PlumberMarketing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Structured Data for Plumbing Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Plumber Marketing Services",
            "description": "Specialized digital marketing services for plumbers including emergency SEO, Google Ads, website optimization, and lead generation strategies.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Paul Silva Marketing",
              "telephone": "+1-323-522-1424",
              "email": "paul@paulsilvamarketing.com"
            },
            "areaServed": "Los Angeles, CA",
            "serviceType": "Plumbing Digital Marketing",
            "category": [
              "Plumbing SEO",
              "Plumbing Google Ads",
              "Plumbing Lead Generation",
              "Plumbing Website Design",
              "Plumbing Content Marketing"
            ],
            "offers": {
              "@type": "Offer",
              "name": "Free Plumbing Marketing Audit",
              "description": "Comprehensive analysis of your plumbing company's digital marketing performance with actionable recommendations."
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Plumbing Contractors and Companies"
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/Plumber Marketing.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Plumber Marketing
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 max-w-3xl mx-auto">
              Generate more emergency calls and scheduled appointments with proven plumbing marketing strategies that work 24/7.
            </p>
            <Link 
              href="/#contact" 
              className="inline-block bg-white text-navy-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Free Plumbing Marketing Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Why Plumbing Marketing Matters */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Why Plumbing Marketing Is Essential</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                Plumbing emergencies happen at all hours, and customers need to find reliable plumbers quickly. Without strong online visibility, 
                you're missing out on high-value emergency calls and regular maintenance work.
              </p>
              <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                Our specialized plumbing marketing strategies ensure you're the first plumber customers find when they need help most, 
                whether it's a burst pipe at midnight or a scheduled drain cleaning.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Our Plumbing Marketing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Emergency Plumbing SEO</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• 24/7 emergency keyword targeting</li>
                  <li>• "Near me" search optimization</li>
                  <li>• Google My Business optimization</li>
                  <li>• Local emergency directories</li>
                  <li>• Mobile-first website design</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Pay-Per-Click Advertising</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Emergency plumbing Google Ads</li>
                  <li>• High-intent keyword bidding</li>
                  <li>• Call-only ad campaigns</li>
                  <li>• Geographic targeting</li>
                  <li>• Conversion tracking setup</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Reputation Management</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Google review generation</li>
                  <li>• Review response management</li>
                  <li>• Online reputation monitoring</li>
                  <li>• Customer feedback systems</li>
                  <li>• Trust signal optimization</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Website & Lead Generation</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Fast-loading plumbing websites</li>
                  <li>• Click-to-call optimization</li>
                  <li>• Service area pages</li>
                  <li>• Emergency contact forms</li>
                  <li>• Live chat integration</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Plumbing Industry Results</h2>
            <div className="bg-navy-50 p-6 sm:p-8 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-600 mb-2">400%+</div>
                  <div className="text-gray-700 text-sm sm:text-base">Increase in emergency calls</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-600 mb-2">90%</div>
                  <div className="text-gray-700 text-sm sm:text-base">Local search visibility</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-600 mb-2">$150+</div>
                  <div className="text-gray-700 text-sm sm:text-base">Average call value increase</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-900 text-white p-6 sm:p-8 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to Get More Plumbing Calls?</h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Get a free marketing audit and discover how we can help you become the go-to plumber in your area.
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