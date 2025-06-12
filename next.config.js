/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Commented out for development - uncomment for production build
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 