'use client'

/**
 * 师资团队页面 - 高端优雅设计
 */

import { Medal, BookOpen, Certificate, Star } from '@phosphor-icons/react'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'
import { motion } from 'framer-motion'

const STATS = [
  { value: '100%', label: '持证上岗', icon: <Certificate size={24} /> },
  { value: '9+', label: '专业教师', icon: <Medal size={24} /> },
  { value: '6年', label: '办学经验', icon: <Star size={24} /> },
  { value: '98%+', label: '家长好评', icon: <BookOpen size={24} /> },
]

const TEACHERS = [
  {
    name: 'Sarah 老师',
    title: '英语戏剧课程总监',
    experience: '8年教学经验',
    education: '英国伦敦大学教育学硕士',
    certifications: ['TESOL认证', '戏剧教育导师'],
    desc: '拥有丰富的海外教学经历，将沉浸式戏剧教学带入课堂。',
    image: '/images/teacher-sarah-1.jpg',
    accent: 'from-orange-400 to-amber-400',
  },
  {
    name: '张明远 老师',
    title: '思维数学主讲教师',
    experience: '10年教学经验',
    education: '北京大学数学与应用数学',
    certifications: ['奥赛金牌教练', '儿童心理指导师'],
    desc: '坚信"数学是思维的体操"，擅长用趣味方式让孩子爱上数学。',
    image: '/images/teacher-2.jpg',
    accent: 'from-blue-400 to-indigo-400',
  },
  {
    name: '王思雨 老师',
    title: '创意美术课程主管',
    experience: '6年教学经验',
    education: '中央美术学院绘本创作专业',
    certifications: ['国家教师资格证', '艺术治疗师（初级）'],
    desc: '作品曾获多项儿童绘本大奖，课堂充满想象力和创造力。',
    image: '/images/teacher-3.jpg',
    accent: 'from-purple-400 to-pink-400',
  },
  {
    name: '李浩然 老师',
    title: '科学实验营主讲教师',
    experience: '5年教学经验',
    education: '中国科学院物理研究所',
    certifications: ['青少年科技辅导员', 'STEM教育认证'],
    desc: '用简单有趣的实验激发孩子对科学的热爱，培养探索精神。',
    image: '/images/teacher-1.jpg',
    accent: 'from-green-400 to-emerald-400',
  },
]

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-amber-200/30 to-orange-200/20 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6">
              专业 · 热爱 · 责任
            </span>
            <h1 className="text-5xl md:text-6xl font-semibold text-stone-900 tracking-tight mb-6">
              师资团队
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              每一位老师都是我们最珍贵的财富
            </p>
          </motion.div>
        </div>
      </section>

      {/* 统计数据 */}
      <section className="pb-16 -mt-8 relative z-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center mx-auto mb-3 text-white">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-stone-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-stone-500">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 教师列表 */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEACHERS.map((teacher, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex flex-col sm:flex-row gap-6 p-6">
                    {/* 头像 */}
                    <div className="relative w-28 h-28 flex-shrink-0">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${teacher.accent} p-0.5`}>
                        <div className="relative w-full h-full rounded-2xl overflow-hidden">
                          <Image src={teacher.image} alt={teacher.name} fill className="object-cover" />
                        </div>
                      </div>
                    </div>
                    
                    {/* 信息 */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-stone-900 mb-1">{teacher.name}</h3>
                      <p className="text-orange-500 font-medium mb-3">{teacher.title}</p>
                      
                      <div className="flex flex-wrap gap-3 mb-4 text-xs text-stone-500">
                        <span className="flex items-center gap-1">
                          <Medal size={12} className="text-orange-400" />{teacher.experience}
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen size={12} className="text-orange-400" />{teacher.education}
                        </span>
                      </div>
                      
                      <p className="text-stone-600 text-sm leading-relaxed mb-4">{teacher.desc}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {teacher.certifications.map((cert, j) => (
                          <span
                            key={j}
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-orange-50 border border-orange-200 text-orange-600 text-xs"
                          >
                            <Certificate size={10} />
                            {cert}
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

      <Footer />
    </div>
  )
}
