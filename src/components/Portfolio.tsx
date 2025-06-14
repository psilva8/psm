import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Improve your Google Maps Ranking
          </h2>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Improving you Google maps ranking increases traffic and quote calls to your business since customers tend to choose the first listing</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-red-800 mb-4">Before</h4>
              <p className="text-gray-700 mb-12">
                Using SEMRush to show Local Map Tracking. We can see how in <strong>08/12/2024</strong> this site was with an average ranking for the key phrase <em>"pressure washing near me"</em> at <strong className="text-red-600">14.09</strong> in the county of Los Angeles.
              </p>
              <div className="mb-4 mt-4 h-[300px]">
                <img 
                  src="/images/google ranking before.png" 
                  alt="Google ranking before SEO optimization"
                  className="w-full h-full object-contain rounded-md shadow-sm"
                />
              </div>
              <div className="bg-white p-3 rounded border-2 border-red-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">14.09</div>
                  <div className="text-sm text-gray-600">Average Ranking</div>
                  <div className="text-sm text-gray-500">08/12/2024</div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-green-800 mb-4">After</h4>
              <p className="text-gray-700 mb-12">
                With Local SEO, On Page SEO and Link Building applied. Now by <strong>12/01/2024</strong> the ranking for the same phrase is now <strong className="text-green-600">5.92</strong> in Los Angeles. Technical SEO was applied also to improve site loading speed. Resulting in this site ranking <strong className="text-green-600">1st</strong> in many cities of Los Angeles.
              </p>
              <div className="mb-4 mt-4 h-[300px]">
                <img 
                  src="/images/google ranking after.png" 
                  alt="Google ranking after SEO optimization"
                  className="w-full h-full object-contain rounded-md shadow-sm"
                />
              </div>
              <div className="bg-white p-3 rounded border-2 border-green-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5.92</div>
                  <div className="text-sm text-gray-600">Average Ranking</div>
                  <div className="text-sm text-gray-500">12/01/2024</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center bg-navy-100 px-6 py-3 rounded-lg">
              <svg className="h-6 w-6 text-navy-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-navy-800 font-semibold">
                Ranking Improvement: From 14.09 to 5.92 (58% improvement)
              </span>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-navy-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-navy-600">Local SEO</div>
              <div className="text-sm text-gray-600">Applied</div>
            </div>
            <div className="bg-navy-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-navy-600">Technical SEO</div>
              <div className="text-sm text-gray-600">Site Speed Improved</div>
            </div>
            <div className="bg-navy-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-navy-600">Link Building</div>
              <div className="text-sm text-gray-600">Authority Increased</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center bg-navy-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-navy-700 transition-colors"
          >
            Get Similar Results
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 