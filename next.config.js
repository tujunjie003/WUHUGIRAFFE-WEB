/** @type {import('next').NextConfig} */
/**
 * Next.js 配置文件
 * @description 配置 Next.js 构建选项
 */
const nextConfig = {
  reactStrictMode: true,
  // 输出静态导出，用于 GitHub Pages
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
