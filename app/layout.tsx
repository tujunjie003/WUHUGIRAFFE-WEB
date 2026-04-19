/**
 * 根布局组件
 * @description 定义文档结构、全局字体、全局样式
 */

import type { Metadata } from 'next'
import './globals.css'

/**
 * 页面元数据配置
 */
export const metadata: Metadata = {
  title: '芜湖长颈鹿成长中心 - 幼少儿教育平台',
  description: '专注3-12岁幼少儿教育，培养孩子的创造力、表达力和思维力',
}

/**
 * 根布局组件
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
