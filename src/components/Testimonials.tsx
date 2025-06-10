import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimonial
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What Luis Medina says about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-lg p-8 relative">
            <div className="absolute top-0 left-8 transform -translate-y-4">
              <svg className="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
            
            <blockquote className="text-lg text-gray-700 mb-6 italic">
              "Paul Silva Marketing helped us with the website, GMB, did  SEO and run google ads for our Pressure Washing Business. Our cliental has increase 7 times. 
              He provided great customer service and is very knowledgable with all things marketing. I'm very grateful. 
              Would recommend working with him 100 percent."
            </blockquote>
            
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img 
                  src="/images/luis medina.jpg" 
                  alt="Luis Medina"
                  className="h-20 w-20 rounded-full object-cover border-2 border-blue-600"
                />
              </div>
              <div className="ml-4">
                <div className="text-lg font-semibold text-gray-900">Luis Medina</div>
                <div className="text-gray-600">Business Owner</div>
                <div className="text-blue-600 font-medium">(818) 424-2591</div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="mt-4 text-center">
              <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full">
                <svg className="h-5 w-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-green-800 font-semibold">7x Client Increase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 