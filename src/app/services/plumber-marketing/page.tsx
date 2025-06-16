import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plumber Marketing Services | Paul Silva Marketing',
  description: 'Expert digital marketing services for plumbers. Specialized SEO, Google Ads, and lead generation for emergency plumbing services and maintenance. Get more service calls.',
  keywords: 'plumber marketing, plumbing SEO, plumber Google Ads, plumber lead generation, plumbing digital marketing, Paul Silva',
  openGraph: {
    title: 'Plumber Marketing Services | Paul Silva Marketing',
    description: 'Expert digital marketing services for plumbers. Specialized SEO, Google Ads, and lead generation for emergency plumbing services and maintenance.',
    url: 'https://paulsilvamarketing.com/services/plumber-marketing',
    images: [
      {
        url: '/images/Plumber Marketing.JPG',
        width: 1200,
        height: 630,
        alt: 'Plumber Marketing Services - Paul Silva Marketing',
      },
    ],
  },
  alternates: {
    canonical: 'https://paulsilvamarketing.com/services/plumber-marketing',
  },
};

export default function PlumberMarketing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Plumber Marketing.JPG"
            alt="Plumber Marketing Services"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Why Plumber Marketing Matters */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Plumbing Marketing Is Essential</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-6">
                Plumbing emergencies happen at all hours, and customers need to find reliable plumbers quickly. Without strong online visibility, 
                you're missing out on high-value emergency calls and regular maintenance work.
              </p>
              <p className="mb-6">
                Our specialized plumbing marketing strategies ensure you're the first plumber customers find when they need help most, 
                whether it's a burst pipe at midnight or a scheduled drain cleaning.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Plumbing Marketing Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Plumbing SEO</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• 24/7 emergency keyword targeting</li>
                  <li>• "Near me" search optimization</li>
                  <li>• Google My Business optimization</li>
                  <li>• Local emergency directories</li>
                  <li>• Mobile-first website design</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pay-Per-Click Advertising</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Emergency plumbing Google Ads</li>
                  <li>• High-intent keyword bidding</li>
                  <li>• Call-only ad campaigns</li>
                  <li>• Geographic targeting</li>
                  <li>• Conversion tracking setup</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Reputation Management</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Google review generation</li>
                  <li>• Review response management</li>
                  <li>• Online reputation monitoring</li>
                  <li>• Customer feedback systems</li>
                  <li>• Trust signal optimization</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Website & Lead Generation</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Fast-loading plumbing websites</li>
                  <li>• Click-to-call optimization</li>
                  <li>• Service area pages</li>
                  <li>• Emergency contact forms</li>
                  <li>• Live chat integration</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Plumbing-Specific Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Plumbing Industry Results</h2>
            <div className="bg-navy-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-navy-600 mb-2">400%+</div>
                  <div className="text-gray-700">Increase in emergency calls</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy-600 mb-2">90%</div>
                  <div className="text-gray-700">Local search visibility</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy-600 mb-2">$150+</div>
                  <div className="text-gray-700">Average call value increase</div>
                </div>
              </div>
            </div>
          </div>

          {/* Plumbing Services We Market */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Plumbing Services We Help You Market</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Emergency Services</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Burst pipe repair</li>
                  <li>• Clogged drain clearing</li>
                  <li>• Water heater repair</li>
                  <li>• Sewer line issues</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Residential Services</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Bathroom remodeling</li>
                  <li>• Kitchen plumbing</li>
                  <li>• Fixture installation</li>
                  <li>• Pipe replacement</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Commercial Services</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Commercial repairs</li>
                  <li>• Preventive maintenance</li>
                  <li>• Hydro jetting</li>
                  <li>• Backflow testing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-900 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Get More Plumbing Calls?</h2>
            <p className="text-gray-300 mb-6">
              Get a free marketing audit and discover how we can help you become the go-to plumber in your area.
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