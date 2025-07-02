'use client';

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import * as gtag from '../lib/gtag';

const FreeConsultation = () => {
  // Formspree hook with your form ID
  const [state, handleSubmit] = useForm("xpwrdpvv");
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    formDataToSubmit.append('company', formData.company);
    formDataToSubmit.append('service', formData.service);
    formDataToSubmit.append('message', formData.message);
    formDataToSubmit.append('_subject', `Free Consultation Request from ${formData.name}`);
    
    // Submit to Formspree
    await handleSubmit(formDataToSubmit);
    
    // Reset form if submission was successful
    if (state.succeeded) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-navy-600 to-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-navy-100 max-w-3xl mx-auto">
            Get a free consultation and discover how we can help you dominate your local market. 
            No obligation, just actionable insights for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Benefits */}
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-6">What You'll Get in Your Free Consultation:</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-yellow-400 text-xl mr-4 mt-1">✓</div>
                <div>
                  <h4 className="font-semibold text-lg">Complete Marketing Audit</h4>
                  <p className="text-navy-100">We'll analyze your current online presence and identify opportunities for growth</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-yellow-400 text-xl mr-4 mt-1">✓</div>
                <div>
                  <h4 className="font-semibold text-lg">Custom Strategy Roadmap</h4>
                  <p className="text-navy-100">Get a personalized plan tailored specifically to your business and market</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-yellow-400 text-xl mr-4 mt-1">✓</div>
                <div>
                  <h4 className="font-semibold text-lg">Competitor Analysis</h4>
                  <p className="text-navy-100">See how you stack up against competitors and find your competitive advantage</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-yellow-400 text-xl mr-4 mt-1">✓</div>
                <div>
                  <h4 className="font-semibold text-lg">ROI Projections</h4>
                  <p className="text-navy-100">Understand the potential return on your marketing investment</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-navy-700 rounded-lg">
              <div className="flex items-center">
                <div className="text-yellow-400 text-2xl mr-4">🎯</div>
                <div>
                  <h4 className="font-bold text-lg">100% Free - No Strings Attached</h4>
                  <p className="text-navy-100 text-sm">This consultation is completely free with no obligation to work with us.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Consultation</h3>
            
            {state.succeeded && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                <div className="flex">
                  <div className="text-green-400 text-xl mr-3">✅</div>
                  <div>
                    <h4 className="text-green-800 font-semibold">Request Submitted Successfully!</h4>
                    <p className="text-green-700 text-sm mt-1">
                      Thank you! I'll contact you within 24 hours to schedule your free consultation.
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
                      There was an error sending your request. Please try again or call me directly.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="consultation-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="consultation-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent text-sm"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="consultation-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="consultation-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="consultation-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="consultation-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent text-sm"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="consultation-company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="consultation-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent text-sm"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="consultation-service" className="block text-sm font-medium text-gray-700 mb-1">
                  Type of Service Business
                </label>
                <select
                  id="consultation-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent text-sm"
                >
                  <option value="">Select your business type</option>
                  <option value="HVAC">HVAC Company</option>
                  <option value="Plumbing">Plumbing Services</option>
                  <option value="Electrical">Electrical Contractor</option>
                  <option value="General Contractor">General Contractor</option>
                  <option value="Construction">Construction Company</option>
                  <option value="Cleaning">Cleaning Services</option>
                  <option value="Other">Other Home Service</option>
                </select>
              </div>

              <div>
                <label htmlFor="consultation-message" className="block text-sm font-medium text-gray-700 mb-1">
                  What are your biggest marketing challenges?
                </label>
                <textarea
                  id="consultation-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent text-sm"
                  placeholder="Tell me about your current marketing challenges and goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className={`w-full py-3 px-6 rounded-md transition-colors font-semibold text-lg ${
                  state.submitting 
                    ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
                    : 'bg-navy-600 text-white hover:bg-navy-700'
                }`}
              >
                {state.submitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Requesting Consultation...
                  </span>
                ) : (
                  'Get My Free Consultation'
                )}
              </button>
              
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="text-red-600 text-sm mt-1"
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="text-red-600 text-sm mt-1"
              />
            </form>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                By submitting this form, you agree to receive marketing communications from Paul Silva Marketing. 
                You can unsubscribe at any time.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FreeConsultation; 