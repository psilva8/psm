import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Digital Marketing Services | Paul Silva Marketing',
  description: 'Comprehensive digital marketing services for contractors, including SEO, PPC, social media, and content marketing. Get more leads and grow your business.',
};

const services = [
  {
    title: 'HVAC Marketing',
    description: 'Specialized digital marketing solutions for HVAC companies to generate more leads and grow your business.',
    href: '/services/hvac-marketing',
    image: '/images/hvac marketing.jpg',
  },
  {
    title: 'Plumber Marketing',
    description: 'Targeted marketing strategies for plumbing businesses to reach more customers and increase service calls.',
    href: '/services/plumber-marketing',
    image: '/images/plumber marketing.jpg',
  },
  {
    title: 'Contractor Marketing',
    description: 'Comprehensive marketing solutions for general contractors to showcase projects and attract new clients.',
    href: '/services/contractor-marketing',
    image: '/images/contractor marketing.jpg',
  },
  {
    title: 'Electrician Marketing',
    description: 'Digital marketing services tailored for electrical contractors to expand their customer base.',
    href: '/services/electrician-marketing',
    image: '/images/electrician marketing.jpg',
  },
  {
    title: 'Construction Marketing',
    description: 'Strategic marketing solutions for construction companies to showcase expertise and win more projects.',
    href: '/services/construction-marketing',
    image: '/images/construction marketing.jpg',
  },
  {
    title: 'Cleaning Companies Marketing',
    description: 'Effective marketing strategies for cleaning businesses to attract residential and commercial clients.',
    href: '/services/cleaning-companies-marketing',
    image: '/images/cleaning companies marketing.jpg',
  },
  {
    title: 'Roofing Marketing',
    description: 'Specialized digital marketing for roofing companies to generate quality leads and grow your business.',
    href: '/services/roofing-marketing',
    image: '/images/roofing marketing compressed.jpg',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src="/images/services hero.jpg"
          alt="Digital Marketing Services"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Digital Marketing Services
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive marketing solutions tailored for your industry
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our marketing services can help you reach more customers and increase your revenue.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
} 