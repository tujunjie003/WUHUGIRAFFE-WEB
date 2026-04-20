'use client'

/**
 * 关于我们页面 - 高端优雅设计
 */

import { Heart, Lightbulb, Target, GraduationCap } from '@phosphor-icons/react'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'
import { motion } from 'framer-motion'

const VALUES = [
  {
    icon: <Heart size={28} weight="fill" />,
    title: '爱与尊重',
    desc: '尊重每一个孩子的独特性，用爱浇灌每一颗心灵'
  },
  {
    icon: <Lightbulb size={28} weight="fill" />,
    title: '探索精神',
    desc: '鼓励孩子保持好奇心，在探索中学习成长'
  },
  {
    icon: <Target size={28} weight="fill" />,
    title: '全面发展',
    desc: '注重知识、能力、品格的全方位培养'
  },
]

const MILESTONES = [
  { year: '2019', title: '梦想启航', desc: '芜湖长颈鹿成长中心成立' },
  { year: '2020', title: '共克时艰', desc: '疫情期间坚持线上教学' },
  { year: '2024', title: '规模扩张', desc: '在读学员突破300人' },
  { year: '2026', title: '品质升级', desc: '持续优化课程体系' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero - 优雅渐变背景 */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-200/30 to-amber-200/20 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6">
              六年深耕 · 品质教育
            </span>
            <h1 className="text-5xl md:text-6xl font-semibold text-stone-900 tracking-tight mb-6">
              关于我们
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
              2019年，芜湖长颈鹿成长中心成立，致力于为3-12岁幼少儿提供优质教育。
              六年来，我们始终坚持"小而美"的办学理念。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 品牌故事 - 左右布局 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/images/about-team.jpg" alt="长颈鹿成长中心" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full blur-3xl opacity-40" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-semibold text-stone-900 mb-6">我们的故事</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>我们相信，每一个孩子都有独特的潜能。好的教育，应该像阳光和雨露，滋养而不是塑造。</p>
                <p>从最初的十几个孩子，到如今的三百名在读学员；长颈鹿成长中心始终坚持"小而美"的办学理念。</p>
                <p>每一门课程，都经过精心研发；每一位老师，都经过严格培训；每一个家庭，都获得贴心专业的服务支持。</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 价值观 - 卡片网格 */}
      <section className="py-24 bg-gradient-to-b from-white to-orange-50/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-stone-900 mb-4">我们的价值观</h2>
            <p className="text-stone-500">指引我们前行的力量</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-8 text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/20">
                    <div className="text-white">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">{value.title}</h3>
                  <p className="text-stone-600">{value.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 发展历程 - 时间线 */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-stone-900 mb-4">发展历程</h2>
            <p className="text-stone-500">一路走来，感恩有你</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-300 via-amber-300 to-orange-300 -translate-x-1/2" />
            
            <div className="space-y-10">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className={`flex items-stretch ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full max-w-2xl flex items-stretch ${i % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                      {/* Year block */}
                      <div className={`w-28 flex-shrink-0 flex items-center justify-center ${i % 2 === 0 ? 'pr-6 text-right' : 'pl-6 text-left'}`}>
                        <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent leading-none">{m.year}</div>
                      </div>
                      
                      {/* Accent bar */}
                      <div className="w-1 flex-shrink-0 bg-gradient-to-b from-orange-400 to-amber-400 rounded-full" />
                      
                      {/* Content block */}
                      <div className={`flex-1 ${i % 2 === 0 ? 'pl-6' : 'pr-6'} py-4`}>
                        <div className="bg-white rounded-2xl border border-stone-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5">
                          <h3 className="text-xl font-semibold text-stone-900 mb-2">{m.title}</h3>
                          <p className="text-stone-500 text-sm leading-relaxed">{m.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 border-4 border-white shadow-lg z-10" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </section>

      <Footer />
    </div>
  )
}
