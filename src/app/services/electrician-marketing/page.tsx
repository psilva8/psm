import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function ElectricianMarketing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/electrician marketing.jpg"
            alt="Electrician Marketing Services"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Why Electrician Marketing Matters */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Electrician Marketing Is Essential</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-6">
                Electrical emergencies require immediate attention, and homeowners need to find licensed, trustworthy electricians quickly. 
                Without strong online visibility, you're missing out on high-value emergency calls and lucrative electrical upgrade projects.
              </p>
              <p className="mb-6">
                Our specialized electrician marketing strategies ensure you're the first electrician customers find when they need help, 
                whether it's a power outage at night or a planned electrical panel upgrade.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Electrician Marketing Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Electrical SEO</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• 24/7 emergency keyword targeting</li>
                  <li>• "Electrician near me" optimization</li>
                  <li>• Power outage service pages</li>
                  <li>• Google My Business optimization</li>
                  <li>• Mobile-first website design</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety & Trust Building</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Licensed electrician verification</li>
                  <li>• Safety certification showcase</li>
                  <li>• Insurance & bonding display</li>
                  <li>• Customer testimonials</li>
                  <li>• Before/after project photos</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pay-Per-Click Advertising</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Emergency electrical Google Ads</li>
                  <li>• Panel upgrade campaigns</li>
                  <li>• Call-only ad optimization</li>
                  <li>• Geographic service targeting</li>
                  <li>• Conversion tracking setup</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Content & Education</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Electrical safety blog content</li>
                  <li>• Code compliance guides</li>
                  <li>• Video troubleshooting tips</li>
                  <li>• Social media management</li>
                  <li>• Email safety newsletters</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Electrician-Specific Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Electrical Industry Results</h2>
            <div className="bg-navy-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-navy-600 mb-2">350%+</div>
                  <div className="text-gray-700">Increase in emergency calls</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy-600 mb-2">$200+</div>
                  <div className="text-gray-700">Average service call value</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy-600 mb-2">88%</div>
                  <div className="text-gray-700">Local search dominance</div>
                </div>
              </div>
            </div>
          </div>

          {/* Electrical Services We Market */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Electrical Services We Help You Market</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Emergency Services</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Power outage repairs</li>
                  <li>• Electrical panel issues</li>
                  <li>• Outlet & switch problems</li>
                  <li>• Circuit breaker trips</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Residential Services</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Panel upgrades</li>
                  <li>• Whole house rewiring</li>
                  <li>• Ceiling fan installation</li>
                  <li>• Smart home wiring</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Commercial Services</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Commercial wiring</li>
                  <li>• Lighting retrofits</li>
                  <li>• Code compliance</li>
                  <li>• Electrical inspections</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-900 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Electrify Your Business Growth?</h2>
            <p className="text-gray-300 mb-6">
              Get a free marketing audit and discover how we can help you become the trusted electrician in your area.
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