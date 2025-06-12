import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Local SEO Strategies That Actually Work for Home Service Businesses",
      excerpt: "Discover the proven local SEO tactics that help HVAC, plumbing, and electrical companies dominate their local markets.",
      date: "December 15, 2024",
      category: "SEO",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "How to Generate Emergency Service Calls with Google Ads",
      excerpt: "Learn the exact Google Ads strategies we use to help plumbers and electricians capture high-value emergency calls.",
      date: "December 10, 2024",
      category: "PPC",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Building Trust Online: Reputation Management for Contractors",
      excerpt: "Why online reviews matter more than ever and how to systematically build a 5-star reputation.",
      date: "December 5, 2024",
      category: "Reputation",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "The Complete Guide to HVAC Marketing in 2024",
      excerpt: "Everything HVAC companies need to know about digital marketing, from seasonal campaigns to emergency service promotion.",
      date: "November 28, 2024",
      category: "Industry Guide",
      readTime: "12 min read"
    },
    {
      id: 5,
      title: "Why Your Cleaning Company Needs a Mobile-First Website",
      excerpt: "Mobile optimization isn't optional anymore. Here's how to create a website that converts mobile visitors into customers.",
      date: "November 20, 2024",
      category: "Web Design",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Seasonal Marketing Strategies for Home Service Businesses",
      excerpt: "How to adjust your marketing strategy throughout the year to maximize revenue during peak and off-seasons.",
      date: "November 15, 2024",
      category: "Strategy",
      readTime: "9 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/seo strategist.jpg')",
          backgroundPosition: "center 60%"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Marketing Insights
            </h1>
            <p className="text-xl md:text-2xl text-navy-100 mb-8 max-w-3xl mx-auto">
              Expert tips, strategies, and insights to help your home service business grow through effective digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map(post => (
            <div key={post.id} className="mb-16">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-navy-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        Featured
                      </span>
                      <span className="text-navy-600 font-semibold text-sm">{post.category}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h2>
                    <p className="text-gray-600 mb-6 text-lg">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Link 
                        href="#" 
                        className="bg-navy-600 text-white px-6 py-2 rounded-md hover:bg-navy-700 transition-colors font-semibold"
                      >
                        Read Article
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-navy-200 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="text-6xl text-navy-600 mb-4">📊</div>
                      <p className="text-gray-700 font-semibold">Local SEO Guide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Blog Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Latest Articles</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map(post => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl text-navy-600 mb-2">
                        {post.category === 'PPC' && '💰'}
                        {post.category === 'Reputation' && '⭐'}
                        {post.category === 'Industry Guide' && '📖'}
                        {post.category === 'Web Design' && '📱'}
                        {post.category === 'Strategy' && '🎯'}
                      </div>
                      <span className="text-navy-600 font-semibold text-sm">{post.category}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Link 
                      href="#" 
                      className="text-navy-600 font-semibold hover:text-navy-700 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated with Marketing Tips</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get weekly insights, case studies, and actionable marketing strategies delivered to your inbox. 
              Join 500+ home service business owners who trust our expertise.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-500"
              />
              <button className="bg-navy-600 text-white px-6 py-3 rounded-md hover:bg-navy-700 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-3">No spam. Unsubscribe anytime.</p>
          </div>

        </div>
      </section>
    </div>
  );
} 