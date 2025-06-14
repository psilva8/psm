import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofing Marketing Services | Paul Silva Marketing - Los Angeles Roofing Digital Marketing Expert',
  description: 'Expert roofing marketing services in Los Angeles. Specialized SEO, Google Ads, and lead generation for roofing contractors. Proven to increase roofing leads by 300%+. Free roofing marketing audit available.',
  keywords: 'roofing marketing, roofing SEO, roofing Google Ads, roofing lead generation, Los Angeles roofing marketing, roofing contractor marketing, roofing digital marketing, Paul Silva',
  openGraph: {
    title: 'Roofing Marketing Services | Paul Silva Marketing',
    description: 'Expert roofing marketing services in Los Angeles. Specialized SEO, Google Ads, and lead generation for roofing contractors. Proven results with 300%+ lead increases.',
    url: 'https://paulsilvamarketing.com/services/roofing-marketing',
    images: [
      {
        url: '/images/roofing marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'Roofing Marketing Services - Paul Silva Marketing',
      },
    ],
  },
  alternates: {
    canonical: '/services/roofing-marketing',
  },
};

export default function RoofingMarketing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-[500px]">
            <Image
              src="/images/roofing marketing compressed.jpg"
              alt="Roofing Marketing Services"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Roofing Marketing Services
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 max-w-3xl mx-auto">
              Transform your roofing business with targeted marketing strategies that attract high-value projects and build lasting client relationships.
            </p>
            <Link 
              href="/#contact" 
              className="inline-block bg-white text-navy-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Free Roofing Marketing Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Why Roofing Marketing Matters */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Roofing Marketing Is Critical</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-6">
                Roofing projects are significant investments for homeowners, and they carefully research contractors before making a decision. 
                Your online presence and reputation directly impact your ability to win high-value roofing projects.
              </p>
              <p className="mb-6">
                Our specialized roofing marketing strategies help you showcase your expertise, build trust with potential clients, 
                and position your company as the preferred choice for residential and commercial roofing projects.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Roofing Marketing Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Portfolio Development</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Professional roofing photography</li>
                  <li>• Before/after project galleries</li>
                  <li>• Detailed case studies</li>
                  <li>• Video project walkthroughs</li>
                  <li>• Material showcase pages</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Local SEO for Roofers</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• "Roofing contractor near me" optimization</li>
                  <li>• Storm damage service pages</li>
                  <li>• Google My Business management</li>
                  <li>• Local directory submissions</li>
                  <li>• Service area optimization</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lead Generation & Trust Building</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Insurance claim assistance</li>
                  <li>• Free roof inspection offers</li>
                  <li>• Warranty information pages</li>
                  <li>• Customer testimonials</li>
                  <li>• Safety certification display</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Content & Education</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Roofing material guides</li>
                  <li>• Maintenance tips blog</li>
                  <li>• Storm damage resources</li>
                  <li>• Video content creation</li>
                  <li>• Email marketing campaigns</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Roofing-Specific Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Roofing Industry Results</h2>
            <div className="bg-navy-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-navy-600 mb-2">300%+</div>
                  <div className="text-gray-700">Increase in project inquiries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy-600 mb-2">$15K+</div>
                  <div className="text-gray-700">Average project value</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy-600 mb-2">85%</div>
                  <div className="text-gray-700">Local search visibility</div>
                </div>
              </div>
            </div>
          </div>

          {/* Roofing Services We Market */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Roofing Services We Help You Market</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Residential Roofing</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Roof replacements</li>
                  <li>• Shingle installation</li>
                  <li>• Metal roofing</li>
                  <li>• Tile roofing</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Commercial Roofing</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Flat roof systems</li>
                  <li>• TPO installation</li>
                  <li>• Commercial repairs</li>
                  <li>• Roof maintenance</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Specialty Services</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Storm damage repair</li>
                  <li>• Insurance claims</li>
                  <li>• Roof inspections</li>
                  <li>• Emergency repairs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Grow Your Roofing Business?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Get a free marketing audit and discover how we can help you attract more high-value roofing projects.
            </p>
            <Link 
              href="/#contact" 
              className="inline-block bg-navy-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-navy-700 transition-colors"
            >
              Get Your Free Roofing Marketing Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 