/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/WUHUGIRAFFE-WEB',
  assetPrefix: '/WUHUGIRAFFE-WEB/',
}

module.exports = nextConfig
