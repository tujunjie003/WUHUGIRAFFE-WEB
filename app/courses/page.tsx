'use client'

import { motion } from 'framer-motion'


/**
 * 课程体系页面
 */

import { GraduationCap, Clock, Users, CheckCircle } from '@phosphor-icons/react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const AGE_GROUPS = [
  { label: '3-4岁', desc: '幼儿启蒙期', color: 'bg-pink-500/10 border-pink-500/20' },
  { label: '4-6岁', desc: '语言爆发期', color: 'bg-emerald-500/10 border-emerald-500/20' },
  { label: '6-8岁', desc: '思维发展期', color: 'bg-blue-500/10 border-blue-500/20' },
  { label: '8-12岁', desc: '综合成长期', color: 'bg-purple-500/10 border-purple-500/20' },
]

const COURSES = [
  {
    category: '语言表达',
    name: '英语戏剧表演',
    age: '4-6岁',
    duration: '60分钟/课时',
    size: '8-12人',
    desc: '通过经典童话剧目，让孩子在角色扮演中感受英语魅力，培养表达力和自信心。',
    highlights: ['沉浸式英语环境', '舞台表演训练', '情感表达能力', '团队协作意识'],
    color: 'from-emerald-400 to-teal-500',
    bg: 'bg-emerald-500/10',
  },
  {
    category: '逻辑思维',
    name: '思维数学',
    age: '5-8岁',
    duration: '60分钟/课时',
    size: '10-14人',
    desc: '摒弃死记硬背，用游戏和故事的方式，带孩子发现数学的乐趣和美感。',
    highlights: ['趣味数学游戏', '空间想象训练', '问题解决能力', '逻辑推理思维'],
    color: 'from-blue-400 to-indigo-500',
    bg: 'bg-blue-500/10',
  },
  {
    category: '艺术创造',
    name: '创意美术',
    age: '3-8岁',
    duration: '75分钟/课时',
    size: '12-16人',
    desc: '多元材料探索，从水彩到陶艺，从拼贴到装置，激发无限创造力。',
    highlights: ['多元材料体验', '艺术鉴赏培养', '动手实践能力', '审美素养提升'],
    color: 'from-purple-400 to-pink-500',
    bg: 'bg-purple-500/10',
  },
  {
    category: '科学探索',
    name: '科学实验营',
    age: '6-10岁',
    duration: '90分钟/课时',
    size: '10-15人',
    desc: '动手实验+原理讲解，在探索中培养科学思维和严谨态度。',
    highlights: ['动手实验操作', '科学原理讲解', '观察记录习惯', '探索精神培养'],
    color: 'from-orange-400 to-red-500',
    bg: 'bg-orange-500/10',
  },
  {
    category: '体能运动',
    name: '感统体能',
    age: '3-6岁',
    duration: '45分钟/课时',
    size: '8-10人',
    desc: '专业感统训练器材，促进孩子平衡、协调、专注力的全面发展。',
    highlights: ['感统综合训练', '运动能力提升', '专注力培养', '身体协调性'],
    color: 'from-teal-400 to-cyan-500',
    bg: 'bg-teal-500/10',
  },
  {
    category: '综合素养',
    name: '全脑开发',
    age: '4-7岁',
    duration: '60分钟/课时',
    size: '8-12人',
    desc: '左右脑协同训练，全面提升记忆力、想象力、专注力和创造力。',
    highlights: ['记忆技巧训练', '想象空间拓展', '专注力培养', '创造力激发'],
    color: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-500/10',
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-zinc-100 tracking-tight mb-6">
            课程体系
          </h1>
          <p className="text-xl text-zinc-500 leading-relaxed">
            科学分龄，循序渐进
            <br />
            让每一个孩子都能找到适合自己的成长之路
          </p>
        </div>
      </section>

      {/* 年龄段 */}
      <section className="pb-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {AGE_GROUPS.map((group, i) => (
              <Card key={i} className={`p-6 border ${group.color} text-center`}>
                <div className="text-2xl font-semibold text-zinc-100 mb-1">{group.label}</div>
                <div className="text-sm text-zinc-500">{group.desc}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 课程列表 */}
      <section className="pb-20 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {COURSES.map((course, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* 左侧色块 */}
                  <div className={`lg:w-2 ${course.bg} flex items-center justify-center p-8 lg:p-12`}>
                    <GraduationCap size={48} className="text-emerald-500/50" />
                  </div>
                  
                  {/* 右侧内容 */}
                  <div className="flex-1 p-6 lg:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="text-sm text-emerald-500 mb-1">{course.category}</div>
                        <h3 className="text-2xl font-semibold text-zinc-100 tracking-tight">{course.name}</h3>
                      </div>
                      <div className="flex gap-4 text-sm text-zinc-500">
                        <span className="flex items-center gap-1">
                          <Clock size={14} /> {course.age}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users size={14} /> {course.size}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-zinc-500 leading-relaxed mb-6">{course.desc}</p>
                    
                    <div className="flex flex-wrap gap-3">
                      {course.highlights.map((h, j) => (
                        <span key={j} className="inline-flex items-center gap-1.5 text-sm text-zinc-400">
                          <CheckCircle size={14} className="text-emerald-500" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-zinc-100 tracking-tight mb-4">
            不知道该选什么课程？
          </h2>
          <p className="text-zinc-500 mb-8">
            预约一次免费咨询，我们的课程顾问会为您推荐最适合孩子的课程组合
          </p>
          <Button size="lg">预约免费咨询</Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
