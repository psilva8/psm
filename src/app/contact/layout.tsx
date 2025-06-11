import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Paul Silva Marketing - Free Consultation',
  description: 'Ready to grow your home service business? Contact Paul Silva Marketing for a free consultation and discover how we can help you dominate your local market.',
  openGraph: {
    title: 'Contact Paul Silva Marketing - Free Consultation',
    description: 'Ready to grow your home service business? Contact Paul Silva Marketing for a free consultation and discover how we can help you dominate your local market.',
    images: [
      {
        url: 'https://www.paulsilvamarketing.com/images/marketing services.jpg',
        width: 1200,
        height: 630,
        alt: 'Paul Silva Marketing - Digital Marketing for Home Service Businesses',
      },
    ],
    url: 'https://www.paulsilvamarketing.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Paul Silva Marketing - Free Consultation',
    description: 'Ready to grow your home service business? Contact Paul Silva Marketing for a free consultation and discover how we can help you dominate your local market.',
    images: ['https://www.paulsilvamarketing.com/images/marketing services.jpg'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 