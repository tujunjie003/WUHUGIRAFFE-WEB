'use client'

/**
 * 关于我们页面
 */

import { GraduationCap, Heart, Lightbulb, Target } from '@phosphor-icons/react'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'
import { motion } from 'framer-motion'

const MILESTONES = [
  { year: '2018', title: '梦想启航', desc: '芜湖长颈鹿成长中心成立，开启幼少儿素质教育新篇章' },
  { year: '2018', title: '课程升级', desc: '引进国际先进教育理念，课程体系全面升级' },
  { year: '2020', title: '线上线下融合', desc: '疫情期间率先实现OMO教学模式' },
  { year: '2023', title: '规模扩张', desc: '在读学员突破5000人，师资团队超100人' },
]

const VALUES = [
  {
    icon: <Heart size={24} weight="fill" />,
    title: '爱与尊重',
    desc: '尊重每一个孩子的独特性，用爱浇灌每一颗心灵',
  },
  {
    icon: <Lightbulb size={24} weight="fill" />,
    title: '探索精神',
    desc: '鼓励孩子保持好奇心，在探索中学习成长',
  },
  {
    icon: <Target size={24} weight="fill" />,
    title: '全面发展',
    desc: '注重知识、能力、品格的全方位培养',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-stone-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-stone-900 tracking-tight mb-6">
            关于芜湖长颈鹿成长中心
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            八年前，一个关于教育的梦想在这里启航。
            <br />
            今天，芜湖长颈鹿成长中心已成为万千家庭的信赖之选。
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-orange-50/500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-stone-900 tracking-tight mb-6">
                我们的故事
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  2018年，几位有着共同教育理想的海归妈妈，在天津创办了芜湖长颈鹿成长中心。
                  她们相信，每一个孩子都有独特的潜能，而好的教育，应该像阳光和雨露，
                  滋养而不是塑造。
                </p>
                <p>
                  从最初的十几个孩子，到如今的几千名在读学员；
                  从单一的英语课程，到涵盖语言、思维、艺术、科学等多维度的课程体系；
                  芜湖长颈鹿成长中心始终坚持"小而美"的办学理念，用心对待每一个孩子。
                </p>
                <p>
                  我们不追求规模最大，但追求品质最优。
                  每一门课程，都经过精心研发和反复打磨；
                  每一位老师，都经过严格培训和持续成长；
                  每一个家庭，都获得贴心专业的服务支持。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
                <Image
                  src="/WUHUGIRAFFE-WEB/images/about-team.jpg"
                  alt="芜湖长颈鹿成长中心团队"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-stone-900 tracking-tight mb-4">
              我们的价值观
            </h2>
            <p className="text-stone-600">指引我们前行的力量</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value, i) => (
              <Card key={i} className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-6 text-orange-400">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium text-stone-900 mb-3">{value.title}</h3>
                <p className="text-stone-600 leading-relaxed">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-orange-50/500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-stone-900 tracking-tight mb-4">
              发展历程
            </h2>
            <p className="text-stone-600">一路走来，感恩有你</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-orange-50" />
            
            <div className="space-y-12">
              {MILESTONES.map((m, i) => (
                <div key={i} className={`flex items-center gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                    <Card className="p-6 inline-block">
                      <div className="text-orange-500 font-semibold mb-2">{m.year}</div>
                      <h3 className="text-lg font-medium text-stone-900 mb-2">{m.title}</h3>
                      <p className="text-sm text-stone-600">{m.desc}</p>
                    </Card>
                  </div>
                  <div className="hidden md:block w-3 h-3 rounded-full bg-orange-500 border-4 border-stone-950 flex-shrink-0" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
