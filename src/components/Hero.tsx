import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/digital marketing strategist.png')"
      }}
      role="banner"
      aria-label="Paul Silva Marketing Hero Section - Digital Marketing for Home Services"
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="flex flex-col justify-center items-start min-h-screen pt-20 pb-8">
          <header className="mb-6 space-y-1">
            <p className="text-sm sm:text-base md:text-lg text-blue-200 font-semibold">
              EMAIL: <a href="mailto:paul@paulsilvamarketing.com" className="hover:text-white transition-colors" title="Email Paul Silva Marketing">paul@paulsilvamarketing.com</a>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-blue-200 font-semibold">
              PHONE: <a href="tel:3235221424" className="hover:text-white transition-colors" title="Call Paul Silva Marketing">(323) 522-1424</a>
            </p>
          </header>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="tracking-wider">Marketing for </span><br />
            Home Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
            As a Digital Marketing consultant providing marketing for home services, I understand that having a business is a complex journey filled with countless tasks and critical decisions. You must carve out a unique market position and I can help you navigate these challenges with a customized plan tailored to your specific goals, ensuring your business stands out and thrives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="tel:3235221424"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              title="Call Paul Silva Marketing for immediate consultation"
            >
              Contact Me
            </a>
            <Link 
              href="/portfolio"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
              title="View Paul Silva Marketing portfolio and case studies"
            >
              View Work Sample
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 