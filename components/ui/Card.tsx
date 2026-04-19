'use client'

/**
 * 卡片组件
 * @description taste skill 高端卡片设计
 */

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

/**
 * 高端卡片组件
 * @param hover - 是否启用悬浮动效
 */
export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -4, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.3)' } : undefined}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`
        relative overflow-hidden rounded-3xl
        bg-white/5 backdrop-blur-sm
        border border-white/10
        ${hover ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {/* 玻璃边缘效果 */}
      <div className="absolute inset-0 rounded-3xl border border-white/[0.03]" />
      {children}
    </motion.div>
  )
}
