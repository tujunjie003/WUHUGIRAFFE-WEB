'use client'

/**
 * 卡片组件
 */

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -4, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)' } : undefined}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`
        relative overflow-hidden rounded-3xl
        bg-white backdrop-blur-sm
        border border-stone-200
        ${hover ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      <div className="absolute inset-0 rounded-3xl border border-stone-100" />
      {children}
    </motion.div>
  )
}
