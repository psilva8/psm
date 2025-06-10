'use client';

import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to dominate local search results? Let's discuss your SEO strategy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3 sm:ml-4">
                  <div className="text-base sm:text-lg font-semibold text-white">Phone</div>
                  <a 
                    href="tel:3235221424" 
                    className="text-blue-400 text-lg sm:text-xl font-bold hover:text-blue-300 transition-colors"
                  >
                    (323) 522-1424
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3 sm:ml-4">
                  <div className="text-base sm:text-lg font-semibold text-white">Email</div>
                  <a 
                    href="mailto:paul@paulsilvamarketing.com" 
                    className="text-blue-400 text-sm sm:text-xl font-bold hover:text-blue-300 transition-colors break-all"
                  >
                    paul@paulsilvamarketing.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3 sm:ml-4">
                  <div className="text-base sm:text-lg font-semibold text-white">Location</div>
                  <div className="text-blue-400 text-lg sm:text-xl font-bold">Los Angeles, CA</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Why Choose Paul Silva Marketing?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base">Proven track record with measurable results</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base">Local SEO specialist for Los Angeles market</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base">Data-driven strategies that convert</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base">Expert in cutting-edge SEO tools</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                  placeholder="(323) 555-0123"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                  placeholder="Tell me about your SEO goals and current challenges..."
                ></textarea>
              </div>
              
              <button
                type="button"
                onClick={() => {
                  const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
                  const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
                  const phone = (document.getElementById('phone') as HTMLInputElement)?.value || '';
                  const message = (document.getElementById('message') as HTMLTextAreaElement)?.value || '';
                  
                  const subject = `SEO Inquiry from ${name}`;
                  const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nProject Details:\n${message}`;
                  
                  window.location.href = `mailto:paul@paulsilvamarketing.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 