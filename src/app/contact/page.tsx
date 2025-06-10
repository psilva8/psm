'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function Contact() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Marketing Consultation Request from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service Type: ${formData.service}

Message:
${formData.message}
    `;
    
    const mailtoLink = `mailto:paul@paulsilvamarketing.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/contact marketing for home services.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ready to grow your home service business? Let's discuss how we can help you dominate your local market.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Consultation</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and I'll get back to you within 24 hours to discuss your marketing goals and how we can help achieve them.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Service Business
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell me about your marketing goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What are your biggest marketing challenges? What results are you looking to achieve?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Direct Contact */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Direct Contact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="text-blue-600 text-xl mr-4">📧</div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <a href="mailto:paul@paulsilvamarketing.com" className="text-blue-600 hover:text-blue-700">
                        paul@paulsilvamarketing.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="text-blue-600 text-xl mr-4">📞</div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <a href="tel:3235221424" className="text-blue-600 hover:text-blue-700">
                        (323) 522-1424
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="text-blue-600 text-xl mr-4">📍</div>
                    <div>
                      <div className="font-semibold text-gray-900">Service Area</div>
                      <div className="text-gray-600">Los Angeles & Surrounding Areas</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Business Hours</h3>
                
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Emergency consultations available.</strong> If you have an urgent marketing need, 
                    don't hesitate to call or email outside business hours.
                  </p>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">What to Expect</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-blue-600 text-lg mr-3 mt-1">1️⃣</div>
                    <div>
                      <div className="font-semibold text-gray-900">Initial Consultation</div>
                      <div className="text-gray-600 text-sm">Free 30-minute discussion about your business goals and challenges</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-blue-600 text-lg mr-3 mt-1">2️⃣</div>
                    <div>
                      <div className="font-semibold text-gray-900">Marketing Audit</div>
                      <div className="text-gray-600 text-sm">Comprehensive review of your current online presence and opportunities</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-blue-600 text-lg mr-3 mt-1">3️⃣</div>
                    <div>
                      <div className="font-semibold text-gray-900">Custom Strategy</div>
                      <div className="text-gray-600 text-sm">Tailored marketing plan designed specifically for your business</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
} 