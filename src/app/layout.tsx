import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marketing for Home Services | Paul Silva Marketing - Los Angeles Digital Marketing Expert",
  description: "Paul Silva Marketing specializes in digital marketing for home service businesses in Los Angeles. Expert in SEO, Google Ads, social media marketing, and lead generation for HVAC, plumbing, electrical, construction, and cleaning companies. Proven results with 300%+ lead increases.",
  keywords: "home service marketing, HVAC marketing, plumber marketing, contractor marketing, electrician marketing, construction marketing, cleaning company marketing, Los Angeles digital marketing, local SEO, Google Ads, PPC, lead generation, Paul Silva",
  authors: [{ name: "Paul Silva" }],
  creator: "Paul Silva",
  publisher: "Paul Silva Marketing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.paulsilvamarketing.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Marketing for Home Services | Paul Silva Marketing",
    description: "Expert digital marketing consultant for home service businesses in Los Angeles. Specializing in SEO, Google Ads, and lead generation for HVAC, plumbing, electrical, construction companies.",
    url: 'https://www.paulsilvamarketing.com',
    siteName: 'Paul Silva Marketing',
    images: [
      {
        url: '/images/digital marketing strategist.png',
        width: 1200,
        height: 630,
        alt: 'Paul Silva Marketing - Digital Marketing for Home Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Marketing for Home Services | Paul Silva Marketing",
    description: "Expert digital marketing consultant for home service businesses in Los Angeles. Proven results with 300%+ lead increases.",
    images: ['/images/digital marketing strategist.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'nOYemrRshtU27XVdPVRpH2qNYF4DvWP5tgQebMdV56o',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Viewport Meta Tag for Mobile Responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2VNFLK6KFL"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2VNFLK6KFL', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true
              });
            `,
          }}
        />
        
        {/* Service Worker Registration for Mobile Performance */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
        
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#1d4ed8" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Structured Data for Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.paulsilvamarketing.com",
              "name": "Paul Silva Marketing",
              "alternateName": "Paul Silva Digital Marketing",
              "description": "Expert digital marketing consultant specializing in marketing for home service businesses including HVAC, plumbing, electrical, construction, and cleaning companies in Los Angeles.",
              "url": "https://www.paulsilvamarketing.com",
              "telephone": "+1-323-522-1424",
              "email": "paul@paulsilvamarketing.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Los Angeles",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 34.0522,
                "longitude": -118.2437
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Los Angeles"
                },
                {
                  "@type": "State",
                  "name": "California"
                }
              ],
              "serviceType": [
                "Digital Marketing",
                "SEO Services",
                "Google Ads Management",
                "Social Media Marketing",
                "Lead Generation",
                "Home Service Marketing"
              ],
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-17:00",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61556683949079",
                "https://www.youtube.com/channel/UCOtINTtA4z1V2Om6XbE-3-Q",
                "https://x.com/p_s_marketing_",
                "https://www.instagram.com/paulsilvamarket"
              ]
            })
          }}
        />
        
        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Paul Silva",
              "jobTitle": "Digital Marketing Consultant",
              "description": "Expert digital marketing consultant specializing in marketing strategies for home service businesses. Proven track record of increasing leads by 300%+ for HVAC, plumbing, electrical, construction, and cleaning companies.",
              "url": "https://www.paulsilvamarketing.com/about",
              "email": "paul@paulsilvamarketing.com",
              "telephone": "+1-323-522-1424",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Los Angeles",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "Paul Silva Marketing"
              },
              "knowsAbout": [
                "Digital Marketing",
                "Search Engine Optimization",
                "Google Ads",
                "PPC Advertising",
                "Social Media Marketing",
                "Lead Generation",
                "Home Service Marketing",
                "HVAC Marketing",
                "Plumber Marketing",
                "Contractor Marketing"
              ],
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61556683949079",
                "https://www.youtube.com/channel/UCOtINTtA4z1V2Om6XbE-3-Q",
                "https://x.com/p_s_marketing_",
                "https://www.instagram.com/paulsilvamarket"
              ]
            })
          }}
        />

        {/* Structured Data for Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Digital Marketing for Home Services",
              "description": "Comprehensive digital marketing services specifically designed for home service businesses including HVAC, plumbing, electrical, construction, and cleaning companies.",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Paul Silva Marketing"
              },
              "areaServed": "Los Angeles, CA",
              "serviceType": "Digital Marketing",
              "category": [
                "SEO Services",
                "Google Ads Management",
                "Social Media Marketing",
                "Lead Generation",
                "Website Optimization",
                "Content Marketing"
              ],
              "offers": {
                "@type": "Offer",
                "description": "Free marketing consultation and audit for home service businesses"
              }
            })
          }}
        />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Paul Silva Marketing",
              "alternateName": "Paul Silva Digital Marketing",
              "url": "https://paulsilvamarketing.com",
              "logo": "https://paulsilvamarketing.com/images/digital marketing strategist.png",
              "description": "Expert digital marketing agency specializing in marketing for home service businesses including HVAC, plumbing, electrical, construction, and cleaning companies in Los Angeles.",
              "foundingDate": "2020",
              "founder": {
                "@type": "Person",
                "name": "Paul Silva"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-323-522-1424",
                  "contactType": "Customer Service",
                  "email": "paul@paulsilvamarketing.com",
                  "areaServed": "US",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-323-522-1424",
                  "contactType": "Sales",
                  "email": "paul@paulsilvamarketing.com",
                  "areaServed": "US",
                  "availableLanguage": "English"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Los Angeles",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Los Angeles"
                },
                {
                  "@type": "State",
                  "name": "California"
                }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 34.0522,
                  "longitude": -118.2437
                },
                "geoRadius": "50000"
              },
              "knowsAbout": [
                "Digital Marketing",
                "Search Engine Optimization",
                "Google Ads Management",
                "Social Media Marketing",
                "Lead Generation",
                "Home Service Marketing",
                "HVAC Marketing",
                "Plumber Marketing",
                "Contractor Marketing",
                "Electrician Marketing",
                "Construction Marketing",
                "Cleaning Company Marketing"
              ],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Marketing Consultation",
                    "description": "Free marketing consultation and audit for home service businesses"
                  },
                  "price": "0",
                  "priceCurrency": "USD"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SEO Services",
                    "description": "Search engine optimization for home service businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Google Ads Management",
                    "description": "Professional Google Ads campaign management and optimization"
                  }
                }
              ],
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61556683949079",
                "https://www.youtube.com/channel/UCOtINTtA4z1V2Om6XbE-3-Q",
                "https://x.com/p_s_marketing_",
                "https://www.instagram.com/paulsilvamarket"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
} 