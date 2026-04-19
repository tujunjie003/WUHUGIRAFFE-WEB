'use client'

/**
 * 顶部导航栏组件
 * @description 高端优雅的导航设计
 */

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { List, X, Bell, User } from '@phosphor-icons/react'

/** 导航链接配置 */
const NAV_LINKS = [
  { href: '/', label: '首页' },
  { href: '/about', label: '关于我们' },
  { href: '/courses', label: '课程体系' },
  { href: '/teachers', label: '师资团队' },
  { href: '/contact', label: '联系我们' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-zinc-950/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30"
          >
            <span className="text-white font-bold text-lg">鹿</span>
          </motion.div>
          <div>
            <span className="font-semibold text-zinc-100 tracking-tight">长颈鹿学堂</span>
            <span className="hidden sm:block text-xs text-zinc-500">幼少儿素质教育的领航者</span>
          </div>
        </Link>

        {/* 桌面端导航 */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-zinc-400 hover:text-zinc-100 rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 右侧操作 */}
        <div className="flex items-center gap-3">
          <Link href="/enroll">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2 bg-emerald-500 text-white text-sm font-medium rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
            >
              预约体验
            </motion.button>
          </Link>
          
          {/* 移动端菜单按钮 */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100"
          >
            {mobileOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-zinc-950/95 backdrop-blur-lg border-b border-white/5"
        >
          <nav className="p-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-zinc-300 hover:text-zinc-100 hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  )
}
