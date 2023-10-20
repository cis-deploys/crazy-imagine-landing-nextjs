/** @type {import('next').NextConfig} */
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ['blogadmin.s3.amazonaws.com'],
  },

}

module.exports = withOptimizedImages({
  handleImages: true
});

module.exports = nextConfig
