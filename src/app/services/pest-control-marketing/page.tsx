import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pest Control Marketing Services | Paul Silva Marketing - Los Angeles Pest Control Digital Marketing Expert',
  description: 'Expert pest control marketing services in Los Angeles. Specialized SEO, Google Ads, and lead generation for pest control companies. Proven to increase pest control leads by 300%+. Free pest control marketing audit available.',
  keywords: 'pest control marketing, pest control SEO, pest control Google Ads, pest control lead generation, Los Angeles pest control marketing, pest control contractor marketing, pest control digital marketing, Paul Silva',
  openGraph: {
    title: 'Pest Control Marketing Services | Paul Silva Marketing',
    description: 'Expert pest control marketing services in Los Angeles. Specialized SEO, Google Ads, and lead generation for pest control companies. Proven results with 300%+ lead increases.',
    url: 'https://www.paulsilvamarketing.com/services/pest-control-marketing',
    images: [
      {
        url: '/images/pest control marketing compressed.jpeg',
        width: 1200,
        height: 630,
        alt: 'Pest Control Marketing Services - Paul Silva Marketing',
      },
    ],
  },
  alternates: {
    canonical: '/services/pest-control-marketing',
  },
};

export default function PestControlMarketing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Structured Data for Pest Control Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Pest Control Marketing Services",
            "description": "Specialized digital marketing services for pest control contractors including local SEO, Google Ads, website optimization, and lead generation strategies.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Paul Silva Marketing",
              "telephone": "+1-323-522-1424",
              "email": "paul@paulsilvamarketing.com"
            },
            "areaServed": "Los Angeles, CA",
            "serviceType": "Pest Control Digital Marketing",
            "category": [
              "Pest Control SEO",
              "Pest Control Google Ads",
              "Pest Control Lead Generation",
              "Pest Control Website Design",
              "Pest Control Content Marketing"
            ],
            "offers": {
              "@type": "Offer",
              "name": "Free Pest Control Marketing Audit",
              "description": "Comprehensive analysis of your pest control company's digital marketing performance with actionable recommendations."
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Pest Control Contractors and Companies"
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pest control marketing compressed.jpeg"
            alt="Pest Control Marketing Services"
            fill
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pest Control Marketing Services
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 max-w-3xl mx-auto">
              Capture customers when they need you most with marketing built for the urgency and trust requirements of pest control services.
            </p>
            <Link 
              href="/#contact" 
              className="inline-block bg-white text-navy-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Free Pest Control Marketing Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Why Pest Control Marketing Matters */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">The Unique Marketing Challenges of Pest Control</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                Pest control customers are often in crisis mode—they need immediate solutions and they're making decisions based on who they can trust to solve their problem quickly and effectively. This creates a unique marketing environment where speed, trust signals, and 24/7 availability are crucial.
                Your technical expertise in pest elimination means nothing if customers can't find you when they're searching frantically at 2 AM for ant exterminators or emergency rodent control.
              </p>
              <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                We understand that pest control marketing isn't just about getting found—it's about being the obvious choice when someone has an urgent pest problem. Our strategies focus on emergency keyword capture, trust-building content, and systems that convert panicked searchers into loyal customers.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Our Pest Control Marketing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Emergency Response SEO</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• 24/7 availability optimization</li>
                  <li>• "Near me" emergency pest searches</li>
                  <li>• Pest-specific keyword targeting (ants, roaches, etc.)</li>
                  <li>• Crisis-moment search capture</li>
                  <li>• Local emergency service rankings</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Pest Control Website Design & SEO</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Mobile-responsive pest control websites</li>
                  <li>• Service-specific landing pages</li>
                  <li>• Emergency call button optimization</li>
                  <li>• Fast loading speed optimization</li>
                  <li>• Conversion-focused design</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Pay-Per-Click (PPC) Advertising</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Google Ads for pest control services</li>
                  <li>• Emergency pest control campaigns</li>
                  <li>• Pest-specific ad targeting</li>
                  <li>• Call tracking and optimization</li>
                  <li>• Seasonal campaign management</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Trust & Authority Building</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Pest identification and education content</li>
                  <li>• Treatment process transparency videos</li>
                  <li>• Safety certification showcases</li>
                  <li>• Before/after pest elimination results</li>
                  <li>• Customer testimonial campaigns</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Results You Can Expect</h2>
            <div className="bg-navy-50 p-6 sm:p-8 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-600 mb-2">400%+</div>
                  <div className="text-gray-700 text-sm sm:text-base">Increase in emergency calls</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-600 mb-2">90%</div>
                  <div className="text-gray-700 text-sm sm:text-base">Faster response time visibility</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-600 mb-2">Same Day</div>
                  <div className="text-gray-700 text-sm sm:text-base">Service booking optimization</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-900 text-white p-6 sm:p-8 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to Capture More Emergency Calls?</h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Get a free marketing audit and learn how we can position your pest control business as the trusted local expert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 sm:justify-center">
              <Link 
                href="/#contact" 
                className="bg-white text-navy-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Audit
              </Link>
              <Link 
                href="tel:3235221424" 
                className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-navy-600 transition-colors"
              >
                Call (323) 522-1424
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
} 