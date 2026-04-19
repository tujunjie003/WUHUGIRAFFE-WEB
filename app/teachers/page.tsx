'use client'

/**
 * 师资团队页面
 */

import { GraduationCap, Medal, BookOpen, Certificate } from '@phosphor-icons/react'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'
import { motion } from 'framer-motion'

const TEACHERS = [
  {
    name: 'Sarah 老师',
    title: '英语戏剧课程总监',
    experience: '6年教学经验',
    education: '英国伦敦大学教育学硕士',
    certifications: ['TESOL认证', '戏剧教育导师'],
    desc: '拥有丰富的海外教学经历，将沉浸式戏剧教学带入课堂，让孩子在快乐中掌握纯正英语。',
    image: '/WUHUGIRAFFE-WEB/images/teacher-sarah-1.jpg',
  },
  {
    name: '张明远 老师',
    title: '思维数学主讲教师',
    experience: '10年教学经验',
    education: '北京大学数学与应用数学',
    certifications: ['奥赛金牌教练', '儿童心理指导师'],
    desc: '坚信"数学是思维的体操"，擅长用趣味方式让孩子爱上数学思维。',
    image: '/WUHUGIRAFFE-WEB/images/teacher-2.jpg',
  },
  {
    name: '王思雨 老师',
    title: '创意美术课程主管',
    experience: '6年教学经验',
    education: '中央美术学院绘本创作专业',
    certifications: ['国家教师资格证', '艺术治疗师（初级）'],
    desc: '作品曾获多项儿童绘本大奖，课堂充满想象力和创造力。',
    image: '/WUHUGIRAFFE-WEB/images/teacher-3.jpg',
  },
  {
    name: '李浩然 老师',
    title: '科学实验营主讲教师',
    experience: '5年教学经验',
    education: '中国科学院物理研究所',
    certifications: ['青少年科技辅导员', 'STEM教育认证'],
    desc: '用简单有趣的实验激发孩子对科学的热爱，培养探索精神。',
    image: '/WUHUGIRAFFE-WEB/images/teacher-1.jpg',
  },
]

const STATS = [
  { value: '100%', label: '持证上岗' },
  { value: '9+', label: '专业教师' },
  { value: '6年', label: '平均教龄' },
  { value: '98%', label: '家长好评' },
]

export default function TeachersPage() {
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
            师资团队
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            专业的力量，源自热爱与专业
            <br />
            每一位老师都是我们最珍贵的财富
          </p>
        </div>
      </section>

      {/* 数据 */}
      <section className="pb-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="text-3xl font-semibold text-orange-400 mb-1">{stat.value}</div>
                <div className="text-sm text-stone-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 教师列表 */}
      <section className="pb-20 bg-orange-50/500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEACHERS.map((teacher, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="flex flex-col sm:flex-row gap-6 p-6">
                  {/* 头像 */}
                  <div className="relative w-full sm:w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* 信息 */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-stone-900 mb-1">{teacher.name}</h3>
                    <div className="text-sm text-orange-500 mb-3">{teacher.title}</div>
                    
                    <div className="flex flex-wrap gap-3 mb-4 text-xs text-stone-600">
                      <span className="flex items-center gap-1">
                        <Medal size={12} /> {teacher.experience}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen size={12} /> {teacher.education}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {teacher.certifications.map((cert, j) => (
                        <span key={j} className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-orange-50/50 text-stone-500 text-xs">
                          <Certificate size={10} className="text-orange-500" />
                          {cert}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-sm text-stone-600 leading-relaxed">{teacher.desc}</p>
                  </div>
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
