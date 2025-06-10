import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Get found when customers search for your services. Dominate local search results and attract customers actively looking for what you offer.",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      features: [
        "Google My Business optimization",
        "Local keyword targeting",
        "Website technical improvements",
        "Content optimization",
        "Online review management"
      ]
    },
    {
      title: "Google Ads (Pay-Per-Click)",
      description: "Get immediate results with targeted advertising. Show up at the top of search results and only pay when customers click.",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      features: [
        "Search ad campaigns",
        "Local service ads setup",
        "Conversion tracking",
        "Ad copy optimization",
        "Budget management"
      ]
    },
    {
      title: "Social Media Marketing",
      description: "Build your brand and generate leads through Facebook and Instagram. Reach homeowners in your area with targeted campaigns.",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
        </svg>
      ),
      features: [
        "Facebook & Instagram ads",
        "Audience targeting",
        "Creative development",
        "Lead generation campaigns",
        "Social media management"
      ]
    },
    {
      title: "Email Marketing",
      description: "Stay connected with past customers and nurture new leads. Automated campaigns that drive repeat business and referrals.",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Welcome email sequences",
        "Follow-up campaigns",
        "Customer retention emails",
        "Newsletter management",
        "Performance tracking"
      ]
    },
    {
      title: "Website Optimization",
      description: "Turn more visitors into customers with a website that converts. Fast, mobile-friendly, and designed to generate leads.",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Landing page creation",
        "Conversion optimization",
        "Mobile responsiveness",
        "Speed improvements",
        "User experience design"
      ]
    },
    {
      title: "Analytics & Reporting",
      description: "See exactly how your marketing is performing. Clear reports showing leads, revenue, and return on investment.",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: [
        "Monthly performance reports",
        "ROI tracking",
        "Lead source analysis",
        "Campaign optimization",
        "Strategy recommendations"
      ]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Digital Marketing Solutions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to grow your home service business online. From getting found on Google to converting leads into customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{service.description}</p>
              <ul className="space-y-2 sm:space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 sm:mt-12">
          <a 
            href="/#contact" 
            className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Your Free Marketing Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services; 