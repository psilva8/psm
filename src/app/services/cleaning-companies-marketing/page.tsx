import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function CleaningCompaniesMarketing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/pressure washing near me.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cleaning Companies Marketing
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Grow your cleaning business with proven marketing strategies that attract recurring clients and build long-term relationships.
            </p>
            <Link 
              href="/#contact" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Free Cleaning Marketing Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Why Cleaning Marketing Matters */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Cleaning Company Marketing Is Essential</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-6">
                The cleaning industry is highly competitive, with customers choosing services based on trust, reliability, and online reputation. 
                Without effective marketing, even the most thorough cleaning companies struggle to attract and retain quality clients.
              </p>
              <p className="mb-6">
                Our specialized cleaning company marketing strategies help you build trust with potential clients, showcase your reliability, 
                and create a steady stream of recurring customers for sustainable business growth.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Cleaning Company Marketing Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Local SEO for Cleaning Services</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• "Cleaning services near me" optimization</li>
                  <li>• Google My Business management</li>
                  <li>• Local directory submissions</li>
                  <li>• Service area page creation</li>
                  <li>• Mobile-friendly website design</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Reputation & Trust Building</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Google review generation</li>
                  <li>• Customer testimonial collection</li>
                  <li>• Before/after photo galleries</li>
                  <li>• Insurance & bonding display</li>
                  <li>• Background check verification</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recurring Client Systems</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Subscription service marketing</li>
                  <li>• Customer retention campaigns</li>
                  <li>• Referral program development</li>
                  <li>• Email marketing automation</li>
                  <li>• Loyalty program creation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lead Generation & Booking</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Online booking system setup</li>
                  <li>• Instant quote calculators</li>
                  <li>• Pay-per-click advertising</li>
                  <li>• Social media marketing</li>
                  <li>• Seasonal promotion campaigns</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Cleaning-Specific Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Cleaning Industry Results</h2>
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">275%+</div>
                  <div className="text-gray-700">Increase in new clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                  <div className="text-gray-700">Client retention rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">$75+</div>
                  <div className="text-gray-700">Average service value increase</div>
                </div>
              </div>
            </div>
          </div>

          {/* Cleaning Services We Market */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Cleaning Services We Help You Market</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Residential Cleaning</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Regular house cleaning</li>
                  <li>• Deep cleaning services</li>
                  <li>• Move-in/move-out cleaning</li>
                  <li>• Post-construction cleanup</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Commercial Cleaning</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Office cleaning</li>
                  <li>• Retail store cleaning</li>
                  <li>• Medical facility cleaning</li>
                  <li>• Restaurant cleaning</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Specialty Services</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Carpet cleaning</li>
                  <li>• Window cleaning</li>
                  <li>• Pressure washing</li>
                  <li>• Green cleaning services</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Industry Expertise */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Cleaning Marketing Expertise</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Trust-Focused Marketing</h4>
                  <p className="text-gray-700 mb-4">
                    We understand that cleaning services require high levels of trust. Our marketing strategies emphasize reliability, 
                    professionalism, and customer satisfaction to build confidence with potential clients.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Recurring Revenue Focus</h4>
                  <p className="text-gray-700 mb-4">
                    Our strategies prioritize building long-term client relationships and recurring service agreements, 
                    creating predictable revenue streams for sustainable business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-900 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Clean Up Your Marketing?</h2>
            <p className="text-gray-300 mb-6">
              Get a free marketing audit and discover how we can help you attract more recurring cleaning clients.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link 
                href="/#contact" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
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