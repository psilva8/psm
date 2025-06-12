/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Disabled for development - enable for production build
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 