'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(event.target as Node)) {
        setIsOpen(false);
        setIsServicesOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isMobile]);

  const handleMobileMenuToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleServicesToggle = useCallback(() => {
    setIsServicesOpen(!isServicesOpen);
  }, [isServicesOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, []);

  const services = [
    { name: 'HVAC Marketing', href: '/services/hvac-marketing' },
    { name: 'Plumber Marketing', href: '/services/plumber-marketing' },
    { name: 'Contractor Marketing', href: '/services/contractor-marketing' },
    { name: 'Electrician Marketing', href: '/services/electrician-marketing' },
    { name: 'Construction Marketing', href: '/services/construction-marketing' },
    { name: 'Cleaning Companies Marketing', href: '/services/cleaning-companies-marketing' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 mobile-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-xl font-bold text-gray-800 touch-manipulation"
              onClick={closeMobileMenu}
            >
              Paul Silva Marketing
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => !isMobile && setIsServicesOpen(true)}
              onMouseLeave={() => !isMobile && setIsServicesOpen(false)}
            >
              <button 
                className="text-gray-600 hover:text-navy-600 transition-colors flex items-center py-2 touch-manipulation"
                onClick={() => isMobile && handleServicesToggle()}
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-1 w-64 gpu-accelerated">
                  <div className="bg-white rounded-md shadow-lg border border-gray-200 py-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-navy-50 hover:text-navy-600 transition-colors touch-manipulation"
                        onClick={closeMobileMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/portfolio" 
              className="text-gray-600 hover:text-navy-600 transition-colors touch-manipulation"
            >
              Portfolio
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-600 hover:text-navy-600 transition-colors touch-manipulation"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-navy-600 transition-colors touch-manipulation"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-navy-600 transition-colors touch-manipulation"
            >
              Contact
            </Link>
            <Link 
              href="/#contact" 
              className="bg-navy-600 text-white px-6 py-2 rounded-md hover:bg-navy-700 transition-colors font-semibold touch-manipulation"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleMobileMenuToggle}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2 touch-manipulation"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden gpu-accelerated">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t max-h-screen overflow-y-auto">
              {/* Mobile Services Menu */}
              <div>
                <button
                  onClick={handleServicesToggle}
                  className="flex items-center justify-between w-full px-3 py-3 text-gray-600 hover:text-navy-600 transition-colors touch-manipulation"
                  aria-expanded={isServicesOpen}
                >
                  Services
                  <svg 
                    className={`h-4 w-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div className="pl-6 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-3 py-3 text-sm text-gray-600 hover:text-navy-600 transition-colors touch-manipulation"
                        onClick={closeMobileMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                href="/portfolio" 
                className="block px-3 py-3 text-gray-600 hover:text-navy-600 transition-colors touch-manipulation"
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-3 text-gray-600 hover:text-navy-600 transition-colors touch-manipulation"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-3 text-gray-600 hover:text-navy-600 transition-colors touch-manipulation"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-3 text-gray-600 hover:text-navy-600 transition-colors touch-manipulation"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <Link 
                href="/#contact" 
                className="block mx-3 my-2 bg-navy-600 text-white px-6 py-3 rounded-md hover:bg-navy-700 transition-colors font-semibold text-center touch-manipulation"
                onClick={closeMobileMenu}
              >
                Free Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 