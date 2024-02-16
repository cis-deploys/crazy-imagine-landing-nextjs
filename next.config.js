/** @type {import('next').NextConfig} */
const withOptimizedImages = require('next-optimized-images');

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_CRAZY_STRAPI_URL: process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL,
  },
  images: {
    domains: ['blogadmin.s3.amazonaws.com'],
  },
  i18n,
}

module.exports = withOptimizedImages({
  handleImages: true
});

module.exports = nextConfig
