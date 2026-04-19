'use client'

/**
 * 页脚组件
 */

import { GraduationCap, MapPin, Phone, Clock } from '@phosphor-icons/react'

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* 品牌介绍 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center">
                <GraduationCap size={20} weight="fill" className="text-white" />
              </div>
              <span className="font-semibold text-white text-lg">芜湖长颈鹿成长中心</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              专注3-12岁幼少儿教育，以爱为底色，用专业浇灌，助力孩子全面成长。
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-white font-medium mb-4">快速链接</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="text-stone-400 hover:text-orange-400 transition-colors">首页</a></li>
              <li><a href="/about" className="text-stone-400 hover:text-orange-400 transition-colors">关于我们</a></li>
              <li><a href="/courses" className="text-stone-400 hover:text-orange-400 transition-colors">课程体系</a></li>
              <li><a href="/teachers" className="text-stone-400 hover:text-orange-400 transition-colors">师资团队</a></li>
              <li><a href="/enroll" className="text-stone-400 hover:text-orange-400 transition-colors">预约体验</a></li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
            <h4 className="text-white font-medium mb-4">联系我们</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-stone-400">
                <MapPin size={14} className="flex-shrink-0" />
                <span>芜湖市弋江区新时代商业街19# 221 223号</span>
              </li>
              <li className="flex items-center gap-2 text-stone-400">
                <Phone size={14} className="flex-shrink-0" />
                <span>19315393167（微信同号）</span>
              </li>
              <li className="flex items-start gap-2 text-stone-400">
                <Clock size={14} className="flex-shrink-0 mt-0.5" />
                <span>周二至周五 13:30-20:30<br />周六 9:00-20:30<br />周日 8:00-18:30</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 text-center">
          <p className="text-stone-500 text-sm">
            © 2024 芜湖长颈鹿成长中心. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
