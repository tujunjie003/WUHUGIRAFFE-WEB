'use client'

/**
 * 关于我们页面
 */

import { GraduationCap, Heart, Lightbulb, Target } from '@phosphor-icons/react'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'

const MILESTONES = [
  { year: '2019', title: '梦想启航', desc: '芜湖长颈鹿成长中心成立，开启幼少儿教育新篇章' },
  { year: '2020', title: '共克时艰', desc: '疫情期间坚持线上教学，守护每一位孩子的成长' },
  { year: '2024', title: '规模扩张', desc: '在读学员突破300人，师资团队持续壮大' },
  { year: '2026', title: '品质升级', desc: '持续优化课程体系，打造精品教学服务' },
]

const VALUES = [
  { icon: <Heart size={24} weight="fill" />, title: '爱与尊重', desc: '尊重每一个孩子的独特性，用爱浇灌每一颗心灵' },
  { icon: <Lightbulb size={24} weight="fill" />, title: '探索精神', desc: '鼓励孩子保持好奇心，在探索中学习成长' },
  { icon: <Target size={24} weight="fill" />, title: '全面发展', desc: '注重知识、能力、品格的全方位培养' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-stone-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-stone-900 tracking-tight mb-6">关于我们</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            2019年，芜湖长颈鹿成长中心成立。
            <br />
            六年来，我们始终坚持"小而美"的办学理念，用心对待每一个孩子。
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-orange-50/50">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-stone-900 mb-6 text-center">我们的故事</h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>2019年，芜湖长颈鹿成长中心成立，致力于为3-12岁幼少儿提供优质的教育。我们相信，每一个孩子都有独特的潜能，而好的教育，应该像阳光和雨露，滋养而不是塑造。</p>
              <p>从最初的十几个孩子，到如今的三百名在读学员；从单一的英语课程，到涵盖语言、思维等多维度的课程体系；长颈鹿成长中心始终坚持"小而美"的办学理念，用心对待每一个孩子。</p>
              <p>我们不追求规模最大，但追求品质最优。每一门课程，都经过精心研发；每一位老师，都经过严格培训；每一个家庭，都获得贴心专业的服务支持。</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-stone-900 mb-8 text-center">我们的价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-4 text-orange-500">{v.icon}</div>
                <h3 className="text-lg font-medium text-stone-900 mb-2">{v.title}</h3>
                <p className="text-sm text-stone-600">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-orange-50/50">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-stone-900 mb-8 text-center">发展历程</h2>
          <div className="space-y-4">
            {MILESTONES.map((m, i) => (
              <Card key={i} className="p-4 flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">{m.year}</span>
                </div>
                <div>
                  <h3 className="font-medium text-stone-900">{m.title}</h3>
                  <p className="text-sm text-stone-500">{m.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
