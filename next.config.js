/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for production deployment
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 