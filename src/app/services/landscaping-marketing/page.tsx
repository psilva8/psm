import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landscaping Marketing Services | Paul Silva Marketing - Los Angeles Landscaping Digital Marketing Expert',
  description: 'Expert landscaping marketing services in Los Angeles. Specialized SEO, Google Ads, and lead generation for landscaping companies. Proven to increase landscaping leads by 300%+. Free landscaping marketing audit available.',
  keywords: 'landscaping marketing, landscaping SEO, landscaping Google Ads, landscaping lead generation, Los Angeles landscaping marketing, landscaping contractor marketing, landscaping digital marketing, Paul Silva',
  openGraph: {
    title: 'Landscaping Marketing Services | Paul Silva Marketing',
    description: 'Expert landscaping marketing services in Los Angeles. Specialized SEO, Google Ads, and lead generation for landscaping companies. Proven results with 300%+ lead increases.',
    url: 'https://www.paulsilvamarketing.com/services/landscaping-marketing',
    images: [
      {
        url: '/images/landscaping marketing compressed.jpg',
        width: 1200,
        height: 630,
        alt: 'Landscaping Marketing Services - Paul Silva Marketing',
      },
    ],
  },
  alternates: {
    canonical: '/services/landscaping-marketing',
  },
};

export default function LandscapingMarketing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Structured Data for Landscaping Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Landscaping Marketing Services",
            "description": "Specialized digital marketing services for landscaping contractors including local SEO, Google Ads, website optimization, and lead generation strategies.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Paul Silva Marketing",
              "telephone": "+1-323-522-1424",
              "email": "paul@paulsilvamarketing.com"
            },
            "areaServed": "Los Angeles, CA",
            "serviceType": "Landscaping Digital Marketing",
            "category": [
              "Landscaping SEO",
              "Landscaping Google Ads",
              "Landscaping Lead Generation",
              "Landscaping Website Design",
              "Landscaping Content Marketing"
            ],
            "offers": {
              "@type": "Offer",
              "name": "Free Landscaping Marketing Audit",
              "description": "Comprehensive analysis of your landscaping company's digital marketing performance with actionable recommendations."
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Landscaping Contractors and Companies"
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/landscaping marketing compressed.jpg"
            alt="Landscaping Marketing Services"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Landscaping Marketing Services
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 max-w-3xl mx-auto">
              Transform your outdoor expertise into a thriving business with marketing strategies designed for landscapers who create beautiful spaces.
            </p>
            <Link 
              href="/#contact" 
              className="inline-block bg-white text-navy-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Free Landscaping Marketing Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Why Landscaping Marketing Matters */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Why Landscaping Marketing Transforms Your Business</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                Your landscaping artistry deserves to be seen by those who value quality outdoor transformations. Property owners invest significant budgets in landscaping projects, but they only hire companies they can find and trust online. 
                The challenge isn't your skill with plants, hardscaping, or design—it's being visible when potential clients are searching for landscape professionals.
              </p>
              <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                Our landscaping-focused marketing approach highlights your portfolio, builds local authority, and creates multiple touchpoints where premium clients discover your services. From spring garden makeovers to winter landscape planning, we help you capture leads in every season.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Our Landscaping Marketing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Local SEO for Landscaping</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Google My Business optimization</li>
                  <li>• Local keyword targeting ("landscaping near me")</li>
                  <li>• Citation building and management</li>
                  <li>• Customer review generation</li>
                  <li>• Local directory submissions</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Landscaping Website Design & SEO</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Portfolio-focused website design</li>
                  <li>• Service page optimization</li>
                  <li>• Before/after gallery integration</li>
                  <li>• Mobile-responsive design</li>
                  <li>• Lead capture optimization</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Pay-Per-Click (PPC) Advertising</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Google Ads for landscaping services</li>
                  <li>• Seasonal campaign management</li>
                  <li>• Service-specific ad groups</li>
                  <li>• Landing page optimization</li>
                  <li>• ROI tracking and optimization</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Visual Portfolio Marketing</h3>
                <ul className="text-gray-700 space-y-2 text-sm sm:text-base">
                  <li>• Before/after transformation galleries</li>
                  <li>• Seasonal landscape design showcases</li>
                  <li>• Drone photography and videography</li>
                  <li>• Instagram & Pinterest optimization</li>
                  <li>• Garden maintenance tips and guides</li>
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
                  <div className="text-2xl sm:text-3xl font-bold text-navy-600 mb-2">300%+</div>
                  <div className="text-gray-700 text-sm sm:text-base">Increase in qualified leads</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-600 mb-2">85%</div>
                  <div className="text-gray-700 text-sm sm:text-base">Improvement in local rankings</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-600 mb-2">Year-Round</div>
                  <div className="text-gray-700 text-sm sm:text-base">Consistent lead generation</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-900 text-white p-6 sm:p-8 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to Showcase Your Landscape Artistry?</h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Get a free marketing audit and learn how we can help you attract high-value landscape projects year-round.
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