/** @type {import('next').NextConfig} */
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  env: {
    CRAZY_STRAPI_URL: process.env.CRAZY_STRAPI_URL,
  },
  images: {
    domains: ['blogadmin.s3.amazonaws.com'],
  },

}

module.exports = withOptimizedImages({
  handleImages: true
});

module.exports = nextConfig
