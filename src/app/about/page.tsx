import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Paul Silva | Digital Marketing Expert for Home Services | Los Angeles',
  description: 'Meet Paul Silva, expert digital marketing consultant specializing in home service businesses in Los Angeles. Years of experience helping HVAC, plumbing, electrical, construction, and cleaning companies grow with proven marketing strategies.',
  keywords: 'Paul Silva, digital marketing consultant, home service marketing expert, Los Angeles marketing consultant, HVAC marketing expert, plumber marketing specialist, contractor marketing consultant',
  openGraph: {
    title: 'About Paul Silva | Digital Marketing Expert for Home Services',
    description: 'Meet Paul Silva, expert digital marketing consultant specializing in home service businesses in Los Angeles. Proven track record of growing HVAC, plumbing, electrical, and construction companies.',
    url: 'https://paulsilvamarketing.com/about',
    images: [
      {
        url: '/images/social media marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'Paul Silva - Digital Marketing Expert for Home Services',
      },
    ],
  },
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Structured Data for Paul Silva */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Paul Silva",
            "jobTitle": "Digital Marketing Consultant",
            "description": "Expert digital marketing consultant with years of experience specializing in marketing strategies for home service businesses including HVAC, plumbing, electrical, construction, and cleaning companies in Los Angeles.",
            "url": "https://paulsilvamarketing.com/about",
            "email": "paul@paulsilvamarketing.com",
            "telephone": "+1-323-522-1424",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Los Angeles",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "worksFor": {
              "@type": "Organization",
              "name": "Paul Silva Marketing"
            },
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Digital Marketing Consultant",
              "occupationLocation": {
                "@type": "City",
                "name": "Los Angeles"
              },
              "description": "Specialized in digital marketing for home service businesses"
            },
            "knowsAbout": [
              "Digital Marketing",
              "Search Engine Optimization",
              "Google Ads",
              "PPC Advertising",
              "Social Media Marketing",
              "Lead Generation",
              "Home Service Marketing",
              "HVAC Marketing",
              "Plumber Marketing",
              "Contractor Marketing",
              "Electrician Marketing",
              "Construction Marketing",
              "Cleaning Company Marketing",
              "Local SEO",
              "Content Marketing",
              "Email Marketing"
            ],
            "alumniOf": "Digital Marketing Expert",
            "award": "300%+ Lead Increase for Clients"
          })
        }}
      />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/social media marketing.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Paul Silva
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Digital Marketing Expert helping home service businesses dominate their local markets through proven strategies and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Personal Introduction */}
          <div className="mb-12 sm:mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <img 
                    src="/images/Local SEO Los Angeles.jpg" 
                    alt="Paul Silva - Digital Marketing Consultant for Home Services"
                    className="h-32 w-32 sm:h-40 sm:w-40 rounded-full object-cover object-top border-4 border-blue-600 shadow-lg"
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Digital Marketing Consultant</h2>
                  <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
                    I'm <span className="text-blue-600 font-bold">Paul Silva</span>, a dedicated digital marketing consultant with years of experience 
                    specializing in helping home service businesses thrive online. My expertise spans across all major digital marketing channels, 
                    from SEO and Google Ads to social media marketing and email campaigns.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    I understand the unique challenges that HVAC contractors, plumbers, electricians, construction companies, and cleaning services 
                    face in today's competitive digital landscape. That's why I create tailored marketing strategies that connect you with customers 
                    who need your services most.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Section */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">My Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-lg p-2 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </span>
                  Search Engine Optimization
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Expert in local SEO strategies that help home service businesses dominate Google search results in their service areas.
                </p>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-lg p-2 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </span>
                  Google Ads & PPC
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Specialist in creating high-converting Google Ads campaigns that deliver immediate results and qualified leads.
                </p>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-lg p-2 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                    </svg>
                  </span>
                  Social Media Marketing
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Proven strategies for Facebook and Instagram advertising that reach homeowners in your service area.
                </p>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-lg p-2 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </span>
                  Analytics & Tracking
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Data-driven approach with comprehensive tracking and reporting to maximize your marketing ROI.
                </p>
              </div>

            </div>
          </div>

          {/* Results Section */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Proven Results</h2>
            <div className="bg-blue-50 p-6 sm:p-8 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">300%+</div>
                  <div className="text-gray-700 text-sm sm:text-base">Average lead increase</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-700 text-sm sm:text-base">Home service businesses helped</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-700 text-sm sm:text-base">Years of experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-900 text-white p-6 sm:p-8 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Let's discuss how I can help your home service business achieve similar results with a customized marketing strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 sm:justify-center">
              <Link 
                href="/contact" 
                className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Get Free Consultation
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