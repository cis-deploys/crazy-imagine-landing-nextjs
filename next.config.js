/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ['blogadmin.s3.amazonaws.com'],
  }
}

module.exports = nextConfig
