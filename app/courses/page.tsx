'use client'

/**

 * 课程体系页面 - 高端优雅设计
 */

import { GraduationCap, Clock, Users, CheckCircle } from '@phosphor-icons/react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

const COURSES = [
  {
    category: '语言表达',
    name: '英语戏剧表演',
    age: '3-12岁',
    duration: '幼儿90分钟 / 少儿120分钟',
    size: '10-12人',
    desc: '通过经典童话剧目，让孩子在角色扮演中感受英语魅力，培养表达力和自信心。',
    highlights: ['沉浸式英语环境', '舞台表演训练', '情感表达能力', '团队协作'],
    gradient: 'from-orange-400 to-amber-400',
    bgLight: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    category: '逻辑思维',
    name: '思维数学',
    age: '大班-6年级',
    duration: '幼儿90分钟 / 少儿120分钟',
    size: '10-12人',
    desc: '摒弃死记硬背，用游戏和故事的方式，带孩子发现数学的乐趣和美感。',
    highlights: ['趣味数学游戏', '空间想象训练', '逻辑推理', '问题解决'],
    gradient: 'from-blue-400 to-indigo-400',
    bgLight: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    category: '同步培优',
    name: '小学英语数学同步',
    age: '3-6年级',
    duration: '120分钟',
    size: '10-12人',
    desc: '与学校课程同步，巩固课堂知识，查漏补缺，提升学业成绩。',
    highlights: ['教材同步', '难点突破', '作业辅导', '定期测评'],
    gradient: 'from-green-400 to-emerald-400',
    bgLight: 'bg-green-50',
    borderColor: 'border-green-200',
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/30 to-orange-200/20 rounded-full blur-[100px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6">
              精品课程 · 科学分龄
            </span>
            <h1 className="text-5xl md:text-6xl font-semibold text-stone-900 tracking-tight mb-6">
              课程体系
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              让每一个孩子都能找到适合自己的成长之路
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-8">
            {COURSES.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row">
                    <div className={`lg:w-2 flex items-center justify-center p-8 lg:p-12 bg-gradient-to-br ${course.gradient}`}>
                      <GraduationCap size={64} className="text-white/90" weight="fill" />
                    </div>
                    <div className="flex-1 p-8 lg:p-10">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-medium mb-3">
                            {course.category}
                          </span>
                          <h3 className="text-2xl font-semibold text-stone-900 mb-2">{course.name}</h3>
                          <p className="text-stone-500">适合 {course.age}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2 text-sm text-stone-500">
                          <span className="flex items-center gap-2">
                            <Clock size={16} className="text-orange-400" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-2">
                            <Users size={16} className="text-orange-400" />
                            {course.size}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-stone-600 mb-6 leading-relaxed">{course.desc}</p>
                      
                      <div className="flex flex-wrap gap-3">
                        {course.highlights.map((h, j) => (
                          <span
                            key={j}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm ${course.bgLight} ${course.borderColor} border text-stone-700`}
                          >
                            <CheckCircle size={14} className="text-orange-500" weight="fill" />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-orange-500 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            不知道该选什么课程？
          </h2>
          <p className="text-orange-100 mb-8 text-lg">
            预约一次免费咨询，我们的课程顾问会为您推荐最适合孩子的课程组合
          </p>
          <button className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-colors shadow-xl text-lg">
            预约免费咨询
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
