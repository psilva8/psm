'use client';

import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of home service businesses does Paul Silva Marketing work with?",
      answer: "I specialize in digital marketing for HVAC companies, plumbing contractors, electricians, construction companies, and cleaning services in Los Angeles. My strategies are specifically tailored for home service businesses that need to attract local customers."
    },
    {
      question: "How much can I expect to increase my leads with Paul Silva Marketing?",
      answer: "My clients typically see a 300%+ increase in qualified leads within 6-12 months. Results vary based on your current digital presence, competition level, and service area, but I focus on generating high-quality leads that convert to paying customers."
    },
    {
      question: "How do you advertise your home service business?",
      answer: "The most effective ways to advertise your home service business include: 1) Google Ads for immediate visibility when customers search for your services, 2) Local SEO to rank higher in 'near me' searches, 3) Google My Business optimization for local discovery, 4) Facebook and Instagram ads targeting homeowners in your service area, 5) Professional website with clear calls-to-action, 6) Online reviews and reputation management, 7) Email marketing to past customers for repeat business, and 8) Content marketing like blog posts and videos showing your expertise. I help home service businesses implement all these strategies effectively."
    },
    {
      question: "How to promote a new service business?",
      answer: "For new service businesses, start with these essential promotional strategies: 1) Claim and optimize your Google My Business listing immediately, 2) Build a professional website with clear service descriptions and contact information, 3) Start collecting customer reviews from day one, 4) Use Google Ads to get immediate visibility while your SEO builds up, 5) Network with local businesses and join community groups, 6) Offer introductory discounts or free estimates to attract first customers, 7) Create social media profiles and post regularly about your work, 8) Ask satisfied customers for referrals and testimonials, 9) Consider local partnerships with complementary businesses, and 10) Invest in vehicle wraps or signage for brand awareness. I help new home service businesses establish a strong digital foundation from the start."
    },
    {
      question: "What digital marketing services does Paul Silva offer?",
      answer: "I provide comprehensive digital marketing including SEO (search engine optimization), Google Ads management, social media marketing, website optimization, content marketing, email marketing, and analytics tracking. All services are specifically designed for home service businesses."
    },
    {
      question: "How much does Paul Silva Marketing cost?",
      answer: "My pricing varies based on your specific needs and goals. I offer customized marketing packages for different business sizes and budgets. Contact me for a free consultation and custom quote based on your home service business requirements."
    },
    {
      question: "Do you offer local SEO services in Los Angeles?",
      answer: "Yes, local SEO is one of my specialties. I help home service businesses dominate local search results in Los Angeles, optimize Google My Business profiles, build local citations, and improve visibility for 'near me' searches."
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "SEO typically takes 3-6 months to show significant results, while Google Ads can generate leads immediately. Most clients see meaningful improvements in lead generation within 90 days, with substantial growth by 6 months."
    },
    {
      question: "Do you provide marketing for emergency home services?",
      answer: "Absolutely! I create specialized campaigns for emergency services like 24/7 plumbing, emergency HVAC repair, and urgent electrical services. These campaigns are designed to capture high-value emergency calls when customers need immediate help."
    },
    {
      question: "Can you help with website design for home service companies?",
      answer: "Yes, I provide website optimization and design services specifically for home service businesses. This includes mobile-responsive design, fast loading speeds, conversion optimization, and SEO-friendly structure to maximize lead generation."
    },
    {
      question: "What makes Paul Silva Marketing different from other digital marketing agencies?",
      answer: "I specialize exclusively in home service businesses and understand the unique challenges you face. Unlike generic agencies, I create industry-specific strategies, understand seasonal patterns, and focus on generating qualified leads that convert to paying customers."
    },
    {
      question: "Do you offer free consultations for home service businesses?",
      answer: "Yes, I offer free marketing consultations and audits for home service businesses. During this consultation, I'll analyze your current digital presence, identify opportunities, and provide actionable recommendations to improve your marketing results."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-50" id="faq">
      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Common questions about digital marketing services for home service businesses
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full text-left p-4 sm:p-6 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-inset"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div 
                  id={`faq-answer-${index}`}
                  className="px-4 sm:px-6 pb-4 sm:pb-6"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Have more questions about digital marketing for your home service business?
          </p>
          <a
            href="tel:3235221424"
            className="inline-block bg-navy-600 text-white px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-navy-700 transition-colors"
            title="Call Paul Silva Marketing for answers to your questions"
          >
            Call (323) 522-1424
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 