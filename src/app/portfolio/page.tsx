import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-cover bg-center bg-no-repeat relative min-h-[60vh] sm:min-h-[70vh] flex items-center"
        style={{
          backgroundImage: "url('/images/digital marketing portfolio.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              Real results for real businesses. See how we've helped home service companies transform their digital presence and grow their revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Featured Case Study */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Featured Case Study</h2>
              <p className="text-base sm:text-lg text-gray-600">How we helped a local HVAC company increase leads by 400%</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Elite HVAC Solutions</h3>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base">
                    A family-owned HVAC company struggling to compete with larger competitors in the Los Angeles market.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Challenge:</h4>
                      <p className="text-gray-600 text-sm sm:text-base">Low online visibility, inconsistent lead generation, poor Google rankings</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Solution:</h4>
                      <p className="text-gray-600 text-sm sm:text-base">Complete SEO overhaul, Google Ads optimization, local citation building</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="text-center p-3 sm:p-4 bg-blue-50 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">400%</div>
                      <div className="text-xs sm:text-sm text-gray-600">Lead Increase</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-blue-50 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">#1</div>
                      <div className="text-xs sm:text-sm text-gray-600">Google Ranking</div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-6 sm:p-8 min-h-[200px] md:min-h-0">
                  <div className="text-center">
                    <div className="text-4xl sm:text-6xl text-blue-600 mb-4">📈</div>
                    <p className="text-gray-600 text-sm sm:text-base">Before & After Analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Client Success Stories</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Project 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-3xl sm:text-4xl mb-2">🔧</div>
                    <h3 className="text-lg sm:text-xl font-bold">Pro Plumbing Co.</h3>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Emergency Plumbing SEO</h4>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4">
                    Increased emergency call volume by 350% through targeted local SEO and Google Ads campaigns.
                  </p>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-blue-600 font-semibold">+350% Calls</span>
                    <span className="text-gray-500">6 months</span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-3xl sm:text-4xl mb-2">⚡</div>
                    <h3 className="text-lg sm:text-xl font-bold">Spark Electric</h3>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Electrical Contractor Marketing</h4>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4">
                    Dominated local electrical searches and increased average project value through strategic positioning.
                  </p>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-blue-600 font-semibold">+$50K Revenue</span>
                    <span className="text-gray-500">4 months</span>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-3xl sm:text-4xl mb-2">🏗️</div>
                    <h3 className="text-lg sm:text-xl font-bold">Premier Builders</h3>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Construction Company Branding</h4>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4">
                    Complete brand overhaul and digital presence resulted in higher-value project inquiries.
                  </p>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-blue-600 font-semibold">+200% Inquiries</span>
                    <span className="text-gray-500">8 months</span>
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-3xl sm:text-4xl mb-2">🧽</div>
                    <h3 className="text-lg sm:text-xl font-bold">Crystal Clean Services</h3>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Cleaning Service Growth</h4>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4">
                    Built recurring client base through trust-focused marketing and online booking optimization.
                  </p>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-blue-600 font-semibold">+300% Clients</span>
                    <span className="text-gray-500">5 months</span>
                  </div>
                </div>
              </div>

              {/* Project 5 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-3xl sm:text-4xl mb-2">🔨</div>
                    <h3 className="text-lg sm:text-xl font-bold">Ace Contractors</h3>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">General Contractor SEO</h4>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4">
                    Improved local search rankings and showcase portfolio to attract premium residential projects.
                  </p>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-blue-600 font-semibold">+$100K Projects</span>
                    <span className="text-gray-500">7 months</span>
                  </div>
                </div>
              </div>

              {/* Project 6 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-3xl sm:text-4xl mb-2">❄️</div>
                    <h3 className="text-lg sm:text-xl font-bold">Cool Air HVAC</h3>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">HVAC Digital Transformation</h4>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4">
                    Complete digital overhaul including website redesign, SEO, and reputation management.
                  </p>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-blue-600 font-semibold">+500% Leads</span>
                    <span className="text-gray-500">9 months</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-900 text-white p-6 sm:p-8 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Let's create a custom marketing strategy that delivers real results for your home service business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 sm:justify-center">
              <Link 
                href="/#contact" 
                className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Start Your Success Story
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