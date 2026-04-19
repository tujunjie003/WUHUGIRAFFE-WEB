'use client'

/**
 * 页脚组件
 */

import Link from 'next/link'
import { GraduationCap, MapPin, Phone, EnvelopeSimple } from '@phosphor-icons/react'

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* 品牌介绍 */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center">
                <GraduationCap size={20} weight="fill" className="text-white" />
              </div>
              <span className="font-semibold text-white text-lg">芜湖长颈鹿成长中心</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-md">
              芜湖长颈鹿成长中心专注于3-12岁幼少儿素质教育，致力于培养孩子的创造力、表达力和思维力。让每一个孩子都能在快乐中成长，在探索中进步。
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-white font-medium mb-4">快速链接</h4>
            <ul className="space-y-3">
              {['关于我们', '课程体系', '师资团队', '联系我们', '预约体验'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-stone-400 text-sm hover:text-orange-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="text-white font-medium mb-4">联系我们</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-stone-400 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>芜湖市弋江区新时代商业街19# 221 223号</span>
              </li>
              <li className="flex items-center gap-3 text-stone-400 text-sm">
                <Phone size={16} className="flex-shrink-0" />
                <span>19315393167</span>
              </li>
              <li className="flex items-center gap-3 text-stone-400 text-sm">
                <EnvelopeSimple size={16} className="flex-shrink-0" />
                <span>19315393167@giraffe-edu.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 text-center">
          <p className="text-stone-500 text-sm">
            © 2024 芜湖长颈鹿成长中心 Giraffe Education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
