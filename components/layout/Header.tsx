'use client'

/**
 * 顶部导航栏组件
 */

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'

const NAV_LINKS = [
  { href: '/', label: '首页' },
  { href: '/about', label: '关于我们' },
  { href: '/courses', label: '课程体系' },
  { href: '/teachers', label: '师资团队' },
  
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/90 backdrop-blur-lg border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/30"
          >
            <span className="text-white font-bold text-lg">鹿</span>
          </motion.div>
          <div>
            <span className="font-semibold text-stone-900 tracking-tight">芜湖长颈鹿成长中心</span>
            <span className="hidden sm:block text-xs text-stone-500">幼少儿教育的领航者</span>
          </div>
        </Link>

        {/* 桌面端导航 */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-stone-600 hover:text-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
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
              className="px-5 py-2 bg-orange-500 text-white text-sm font-medium rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
            >
              预约体验
            </motion.button>
          </Link>
          
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-stone-600 hover:text-orange-600"
          >
            {mobileOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-stone-200"
        >
          <nav className="p-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-stone-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-colors"
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
