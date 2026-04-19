'use client'

/**
 * 首页
 * @description 芜湖长颈鹿成长中心首页 - 温暖的橙白色调幼少儿教育平台
 */

import { GraduationCap, Clock, Users, Star, ArrowRight, Play } from '@phosphor-icons/react'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

const HERO_STATS = [
  { icon: <Users size={20} />, value: '300+', label: '在读学员' },
  { icon: <GraduationCap size={20} />, value: '98%', label: '家长满意度' },
  { icon: <Star size={20} />, value: '3门核心课程', label: '精品课程' },
  { icon: <Clock size={20} />, value: '6年', label: '办学经验' },
]

const FEATURES = [
  { title: '素质教育体系', desc: '科学完善的课程体系，涵盖语言表达、逻辑思维等多个维度', color: 'from-orange-400 to-amber-500' },
  { title: '专业师资团队', desc: '全部教师持证上岗，资深教育专家领衔研发课程', color: 'from-blue-400 to-indigo-500' },
  { title: '小班精品教学', desc: '10-12人小班制，确保每位孩子都能得到充分的关注和指导', color: 'from-purple-400 to-pink-500' },
  { title: '家校共育', desc: '完善的家长沟通机制，定期成长报告，让家长全程参与', color: 'from-green-400 to-emerald-500' },
]

const COURSE_PREVIEW = [
  { name: '英语戏剧表演', age: '4-6岁', desc: '通过戏剧形式培养英语表达力和自信心', color: 'bg-orange-50 border-orange-200' },
  { name: '逻辑思维训练', age: '5-7岁', desc: '趣味数学游戏，开发逻辑思维和问题解决能力', color: 'bg-blue-50 border-blue-200' },
  { name: '创意美术', age: '3-8岁', desc: '多元材料探索，激发艺术创造力与审美素养', color: 'bg-purple-50 border-purple-200' },
  { name: '科学探索', age: '6-10岁', desc: '动手实验+原理讲解，培养科学思维和探索精神', color: 'bg-green-50 border-green-200' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero 区域 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-200/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-amber-200/20 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 左侧文字内容 */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-sm mb-8"
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                2026年火热招生中
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-semibold text-stone-900 tracking-tight leading-tight mb-6"
              >
                让每一个孩子
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  都能成为更好的自己
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-stone-600 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              >
                芜湖长颈鹿成长中心，专注3-12岁幼少儿教育，以爱为底色，用专业浇灌，助力孩子全面成长，以爱为底色，用专业浇灌，
                <br className="hidden sm:block" />
                助力孩子全面成长。
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16"
              >
                <Button size="lg">
                  预约免费体验课
                  <ArrowRight size={18} />
                </Button>
                <Button variant="secondary" size="lg">
                  <Play size={18} weight="fill" />
                  观看介绍视频
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {HERO_STATS.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-stone-200 shadow-sm mb-3 text-orange-500">
                      {stat.icon}
                    </div>
                    <div className="text-2xl sm:text-3xl font-semibold text-stone-900">{stat.value}</div>
                    <div className="text-sm text-stone-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* 右侧图片 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/WUHUGIRAFFE-WEB/images/hero.jpg"
                  alt="芜湖长颈鹿成长中心 - 孩子们在教室中学习"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200/50 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-stone-300 flex justify-center">
            <div className="w-1.5 h-3 bg-stone-300 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* 特色介绍 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight mb-4">
              为什么选择长颈鹿
            </h2>
            <p className="text-stone-600 max-w-xl mx-auto">
              八年深耕幼少儿教育，我们深知每一个孩子都是独特的
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, i) => (
              <Card key={i} className="p-6 bg-white border border-stone-200">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <GraduationCap size={24} weight="fill" className="text-white" />
                </div>
                <h3 className="text-lg font-medium text-stone-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 课程预览 */}
      <section className="py-24 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight mb-2">
                精品课程
              </h2>
              <p className="text-stone-600">发现适合您孩子的课程</p>
            </div>
            <a href="/courses" className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors">
              查看全部课程
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COURSE_PREVIEW.map((course, i) => (
              <Card key={i} className={`p-6 border ${course.color}`}>
                <div className="text-xs text-orange-600 mb-2">{course.age}</div>
                <h3 className="text-lg font-medium text-stone-900 mb-2">{course.name}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{course.desc}</p>
              </Card>
            ))}
          </div>

          <a href="/courses" className="sm:hidden flex items-center justify-center gap-2 text-orange-500 hover:text-orange-600 mt-8">
            查看全部课程
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
            准备好让孩子开始这段旅程了吗？
          </h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            预约一节免费体验课，让您的孩子感受芜湖长颈鹿成长中心的独特魅力
          </p>
          <button className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-colors shadow-lg">
            立即预约体验
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
