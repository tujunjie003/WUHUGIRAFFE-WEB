'use client'

/**
 * 页脚组件
 * @description 高端优雅的页脚设计
 */

import Link from 'next/link'
import { GraduationCap, MapPin, Phone, EnvelopeSimple, InstagramLogo, WechatLogo } from '@phosphor-icons/react'

/** 备案信息 */
const RECORDS = [
  { label: '津ICP备XXXXXXXX号' },
  { label: '津ICP备XXXXXXXX号-1' },
]

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* 品牌介绍 */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <GraduationCap size={20} weight="fill" className="text-white" />
              </div>
              <span className="font-semibold text-zinc-100 text-lg">长颈鹿学堂</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-md">
              长颈鹿学堂专注于3-12岁幼少儿素质教育，致力于培养孩子的创造力、表达力和思维力。让每一个孩子都能在快乐中成长，在探索中进步。
            </p>
            {/* 社交媒体 */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-emerald-500/20 hover:text-emerald-500 transition-colors">
                <WechatLogo size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-emerald-500/20 hover:text-emerald-500 transition-colors">
                <InstagramLogo size={18} />
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-zinc-100 font-medium mb-4">快速链接</h4>
            <ul className="space-y-3">
              {['关于我们', '课程体系', '师资团队', '联系我们', '预约体验'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-zinc-500 text-sm hover:text-emerald-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="text-zinc-100 font-medium mb-4">联系我们</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-zinc-500 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>天津市河西区下瓦房恒华园1-2-301</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-500 text-sm">
                <Phone size={16} className="flex-shrink-0" />
                <span>138-0000-1111</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-500 text-sm">
                <EnvelopeSimple size={16} className="flex-shrink-0" />
                <span>hello@giraffe-edu.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            © 2024 长颈鹿学堂 Giraffe Education. All rights reserved.
          </p>
          <div className="flex gap-6">
            {RECORDS.map((record) => (
              <span key={record.label} className="text-zinc-600 text-xs">
                {record.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
