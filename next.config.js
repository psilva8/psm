/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only enable static export for production builds, not development
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 