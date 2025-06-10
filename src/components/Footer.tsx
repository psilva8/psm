import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61556683949079',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCOtINTtA4z1V2Om6XbE-3-Q',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'X',
      url: 'https://x.com/p_s_marketing_',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/paulsilvamarket',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.02.43a5.105 5.105 0 0 0-1.852 1.207 5.105 5.105 0 0 0-1.207 1.852C1.734 4.02 1.612 4.594 1.578 5.541 1.544 6.49 1.53 6.896 1.53 10.517s.013 4.027.048 4.975c.034.947.156 1.521.43 2.021a5.105 5.105 0 0 0 1.207 1.852 5.105 5.105 0 0 0 1.852 1.207c.5.226 1.074.348 2.021.43.948.035 1.355.048 4.976.048s4.027-.013 4.975-.048c.947-.034 1.521-.156 2.021-.43a5.105 5.105 0 0 0 1.852-1.207 5.105 5.105 0 0 0 1.207-1.852c.226-.5.348-1.074.43-2.021.035-.948.048-1.355.048-4.976s-.013-4.027-.048-4.975c-.034-.947-.156-1.521-.43-2.021a5.105 5.105 0 0 0-1.207-1.852A5.105 5.105 0 0 0 19.462.478c-.5-.226-1.074-.348-2.021-.43C16.493.013 16.086 0 12.017 0zm0 2.17c3.691 0 4.128.013 5.058.048.834.035 1.287.166 1.589.276.4.156.686.343.987.644.301.301.488.587.644.987.11.302.241.755.276 1.589.035.93.048 1.367.048 5.058s-.013 4.128-.048 5.058c-.035.834-.166 1.287-.276 1.589-.156.4-.343.686-.644.987-.301.301-.587.488-.987.644-.302.11-.755.241-1.589.276-.93.035-1.367.048-5.058.048s-4.128-.013-5.058-.048c-.834-.035-1.287-.166-1.589-.276a2.678 2.678 0 0 1-.987-.644 2.678 2.678 0 0 1-.644-.987c-.11-.302-.241-.755-.276-1.589-.035-.93-.048-1.367-.048-5.058s.013-4.128.048-5.058c.035-.834.166-1.287.276-1.589.156-.4.343-.686.644-.987.301-.301.587-.488.987-.644.302-.11.755-.241 1.589-.276.93-.035 1.367-.048 5.058-.048z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M12.017 7.783a4.734 4.734 0 1 0 0 9.468 4.734 4.734 0 0 0 0-9.468zm0 7.81a3.076 3.076 0 1 1 0-6.152 3.076 3.076 0 0 1 0 6.152z" clipRule="evenodd" />
          <path d="m17.99 6.17a1.106 1.106 0 1 1-2.212 0 1.106 1.106 0 0 1 2.212 0z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-xl font-bold">Paul Silva Marketing</h3>
            <p className="text-gray-400">Digital Marketing Strategist for Home Services</p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-6">
            <div className="text-center">
              <a 
                href="tel:3235221424" 
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                title="Call Paul Silva Marketing"
              >
                +1 (323) 522-1424
              </a>
            </div>
            <div className="text-center">
              <a 
                href="mailto:paul@paulsilvamarketing.com" 
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                title="Email Paul Silva Marketing"
              >
                paul@paulsilvamarketing.com
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mb-6">
            <p className="text-gray-400 mb-4">Follow us on social media</p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                  title={`Follow Paul Silva Marketing on ${social.name}`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 Paul Silva Marketing - Top Local SEO in Los Angeles
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 