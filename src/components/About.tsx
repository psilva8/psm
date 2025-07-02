import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-navy-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center mb-4 sm:mb-6">
            <div className="relative mb-4 md:mb-0 md:mr-4">
              <img 
                src="/images/Local SEO Los Angeles.jpg" 
                alt="Paul Silva - Digital Marketing Consultant"
                className="h-24 w-24 sm:h-32 sm:w-32 rounded-full object-cover object-top border-2 border-navy-600 shadow-md"
              />
              <div className="absolute -bottom-0.5 -right-0.5 bg-navy-600 text-white rounded-full p-0.5">
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Digital Marketing Consultant
                <span className="block text-navy-600">Paul Silva</span>
              </h2>
              <div className="inline-flex items-center bg-navy-100 text-navy-800 px-2 py-1 rounded-full font-medium text-xs sm:text-sm">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Growing Home Service Businesses
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mb-8 sm:mb-12">
          <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">About Me</h3>
            <div className="w-12 h-0.5 bg-navy-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 max-w-3xl mx-auto">
            <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p className="font-medium">
                I'm <span className="text-navy-600 font-bold">Paul Silva</span>, a dedicated digital marketing consultant specializing in helping home service businesses thrive online.
              </p>
              
              <p>
                With years of experience working with contractors, roofers, pressure washers, and other service professionals, I craft comprehensive 
                digital marketing strategies that drive real results and measurable growth.
              </p>
              
              <p>
                My approach combines organic SEO, paid advertising, social media marketing, and email campaigns to create a powerful marketing 
                ecosystem that generates consistent leads and grows your business.
              </p>
              
              <p>
                I understand the unique challenges home service businesses face and create tailored solutions that connect you with customers 
                who need your services most.
              </p>
            </div>
          </div>
        </div>

        {/* Home Service Marketing Expertise Section */}
        <div className="mb-8 sm:mb-12">
          <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Home Service Marketing Expertise</h3>
            <div className="w-12 h-0.5 bg-navy-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="rounded-lg shadow-sm p-4 sm:p-6 text-white max-w-3xl mx-auto" style={{ backgroundColor: '#111827' }}>
            <p className="text-sm sm:text-base leading-relaxed">
              My digital marketing experience spans across all major channels - from SEO and Google Ads to Facebook advertising and email marketing. 
              I specialize in creating integrated campaigns that maximize ROI for home service businesses. Whether you're a contractor looking to 
              dominate local search or a service company wanting to scale through paid advertising, I deliver strategies that work.
            </p>
          </div>
        </div>

        {/* Digital Marketing Tools & Platforms Section */}
        <div>
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Digital Marketing Tools & Platforms</h3>
            <div className="w-12 h-0.5 bg-navy-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  title: "Google Ads & PPC",
                  description: "Create and optimize pay-per-click campaigns to drive immediate leads and maximize return on ad spend.",
                  icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                },
                {
                  title: "SEO & Local Search",
                  description: "Optimize websites for search engines and local visibility using tools like Ahrefs, SEMrush, and Google Search Console.",
                  icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                },
                {
                  title: "Social Media Advertising",
                  description: "Develop targeted Facebook and Instagram ad campaigns to reach homeowners in your service area.",
                  icon: "M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"
                },
                {
                  title: "Email Marketing",
                  description: "Build and nurture customer relationships through strategic email campaigns and automated follow-up sequences.",
                  icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                },
                {
                  title: "Analytics & Tracking",
                  description: "Monitor campaign performance and ROI using Google Analytics, conversion tracking, and custom reporting dashboards.",
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                },
                {
                  title: "Landing Page Optimization",
                  description: "Create high-converting landing pages and optimize user experience to maximize lead generation.",
                  icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                }
              ].map((tool, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-3 sm:p-4 hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start space-x-3">
                    <div className="bg-navy-100 text-navy-600 rounded-lg p-2 flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tool.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">{tool.title}</h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{tool.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="space-y-4 sm:space-y-6 w-full max-w-sm">
                <div className="relative">
                  <img 
                    src="/images/Digital Marketing Consultant.jpg" 
                    alt="Digital Marketing Consultant Paul Silva"
                    className="w-full rounded-lg shadow-sm object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent rounded-lg"></div>
                </div>
                
                <div className="relative">
                  <img 
                    src="/images/marketing for home services.jpg" 
                    alt="Marketing for Home Services"
                    className="w-full rounded-lg shadow-sm object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent rounded-lg"></div>
                </div>
                
                <div className="relative">
                  <img 
                    src="/images/marketing for contractors.jpg" 
                    alt="Marketing for Contractors"
                    className="w-full rounded-lg shadow-sm object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 