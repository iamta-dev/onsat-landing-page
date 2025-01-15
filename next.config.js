/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Enable SWC minification for better performance
  swcMinify: true,
  // Disable x-powered-by header for security
  poweredByHeader: false,
}

module.exports = nextConfig
