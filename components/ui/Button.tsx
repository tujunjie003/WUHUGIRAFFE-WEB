'use client'

/**
 * 按钮组件
 */

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variantStyles = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600 active:scale-[0.98] shadow-lg shadow-orange-500/25',
    secondary: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-50 active:scale-[0.98]',
    ghost: 'text-stone-500 hover:text-stone-900 hover:bg-stone-100',
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`
        inline-flex items-center justify-center gap-2 rounded-xl font-medium
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </motion.button>
  )
}
