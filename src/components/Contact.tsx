'use client';

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import * as gtag from '../lib/gtag';

const Contact = () => {
  // Formspree hook with your form ID
  const [state, handleSubmit] = useForm("xpwrdpvv");
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission with Google Analytics
    gtag.trackContactForm();
    
    // Create FormData object for Formspree
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('phone', formData.phone);
    formDataToSubmit.append('message', formData.message);
    formDataToSubmit.append('_subject', `SEO Inquiry from ${formData.name}`);
    
    // Submit to Formspree
    await handleSubmit(formDataToSubmit);
    
    // Reset form if submission was successful
    if (state.succeeded) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }
  };

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
                  <div className="h-12 w-12 sm:h-14 sm:w-14 bg-blue-600 rounded-lg flex items-center justify-center touch-manipulation">
                    <svg className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4 sm:ml-5">
                  <div className="text-base sm:text-lg font-semibold text-white">Phone</div>
                  <a 
                    href="tel:3235221424" 
                    onClick={() => gtag.trackPhoneCall()}
                    className="text-blue-400 text-lg sm:text-xl font-bold hover:text-blue-300 transition-colors touch-manipulation inline-block py-1"
                  >
                    (323) 522-1424
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 bg-blue-600 rounded-lg flex items-center justify-center touch-manipulation">
                    <svg className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4 sm:ml-5">
                  <div className="text-base sm:text-lg font-semibold text-white">Email</div>
                  <a 
                    href="mailto:paul@paulsilvamarketing.com" 
                    onClick={() => gtag.trackEmailClick()}
                    className="text-blue-400 text-sm sm:text-xl font-bold hover:text-blue-300 transition-colors break-all touch-manipulation inline-block py-1"
                  >
                    paul@paulsilvamarketing.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4 sm:ml-5">
                  <div className="text-base sm:text-lg font-semibold text-white">Location</div>
                  <div className="text-blue-400 text-lg sm:text-xl font-bold">Los Angeles, CA</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Why Choose Paul Silva Marketing?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 mr-3 sm:mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base">Proven track record with measurable results</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 mr-3 sm:mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base">Local SEO specialist for Los Angeles market</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 mr-3 sm:mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base">Data-driven strategies that convert</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 mr-3 sm:mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base">Expert in cutting-edge SEO tools</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
            
            {state.succeeded && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                <div className="flex">
                  <div className="text-green-400 text-xl mr-3">✅</div>
                  <div>
                    <h4 className="text-green-800 font-semibold">Message Sent Successfully!</h4>
                    <p className="text-green-700 text-sm mt-1">
                      Thank you for your inquiry. I'll get back to you within 24 hours to discuss your SEO strategy.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {state.errors && Object.keys(state.errors).length > 0 && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                <div className="flex">
                  <div className="text-red-400 text-xl mr-3">❌</div>
                  <div>
                    <h4 className="text-red-800 font-semibold">Submission Error</h4>
                    <p className="text-red-700 text-sm mt-1">
                      There was an error sending your message. Please try again or contact me directly.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mobile-input w-full"
                  placeholder="Enter your full name"
                  autoComplete="name"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mobile-input w-full"
                  placeholder="Enter your email address"
                  autoComplete="email"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mobile-input w-full"
                  placeholder="(555) 123-4567"
                  autoComplete="tel"
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mobile-input w-full resize-none"
                  placeholder="Tell me about your business and marketing goals..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-semibold text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
              >
                {state.submitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Or call me directly at{' '}
                <a 
                  href="tel:3235221424" 
                  onClick={() => gtag.trackPhoneCall()}
                  className="text-blue-600 font-semibold hover:text-blue-700 touch-manipulation"
                >
                  (323) 522-1424
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 