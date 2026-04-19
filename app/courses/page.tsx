'use client'

/**
 * 课程体系页面
 */

import { GraduationCap, Clock, Users, CheckCircle } from '@phosphor-icons/react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const COURSES = [
  {
    category: '语言表达',
    name: '英语戏剧表演',
    age: '3-12岁',
    duration: '幼儿90分钟/课时，少儿120分钟/课时',
    size: '10-12人',
    desc: '通过经典童话剧目，让孩子在角色扮演中感受英语魅力，培养表达力和自信心。',
    highlights: ['沉浸式英语环境', '舞台表演训练', '情感表达能力', '团队协作意识'],
    color: 'from-orange-400 to-amber-500',
    bg: 'bg-orange-50',
  },
  {
    category: '逻辑思维',
    name: '思维数学',
    age: '大班-6年级',
    duration: '幼儿90分钟/课时，少儿120分钟/课时',
    size: '10-12人',
    desc: '摒弃死记硬背，用游戏和故事的方式，带孩子发现数学的乐趣和美感。',
    highlights: ['趣味数学游戏', '空间想象训练', '问题解决能力', '逻辑推理思维'],
    color: 'from-blue-400 to-indigo-500',
    bg: 'bg-blue-50',
  },
  {
    category: '同步培优',
    name: '小学英语数学同步',
    age: '3-6年级',
    duration: '120分钟/课时',
    size: '10-12人',
    desc: '与学校课程同步，巩固课堂知识，查漏补缺，提升学业成绩。',
    highlights: ['教材同步', '难点突破', '作业辅导', '定期测评'],
    color: 'from-green-400 to-emerald-500',
    bg: 'bg-green-50',
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-stone-900 tracking-tight mb-6">
            课程体系
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            科学分龄，循序渐进
            <br />
            让每一个孩子都能找到适合自己的成长之路
          </p>
        </div>
      </section>

      {/* 课程列表 */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {COURSES.map((course, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* 左侧色块 */}
                  <div className={`lg:w-2 ${course.bg} flex items-center justify-center p-8 lg:p-12`}>
                    <GraduationCap size={48} className="text-orange-500/50" />
                  </div>
                  
                  {/* 右侧内容 */}
                  <div className="flex-1 p-6 lg:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="text-sm text-orange-500 mb-1">{course.category}</div>
                        <h3 className="text-2xl font-semibold text-stone-900 tracking-tight">{course.name}</h3>
                        <div className="text-sm text-stone-500 mt-1">适合：{course.age}</div>
                      </div>
                      <div className="flex flex-col items-end gap-2 text-sm text-stone-500">
                        <span className="flex items-center gap-1">
                          <Clock size={14} /> {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users size={14} /> {course.size}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-stone-600 leading-relaxed mb-6">{course.desc}</p>
                    
                    <div className="flex flex-wrap gap-3">
                      {course.highlights.map((h, j) => (
                        <span key={j} className="inline-flex items-center gap-1.5 text-sm text-stone-600">
                          <CheckCircle size={14} className="text-orange-500" />
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
      <section className="py-20 bg-gradient-to-br from-orange-500 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-white tracking-tight mb-4">
            不知道该选什么课程？
          </h2>
          <p className="text-orange-100 mb-8">
            预约一次免费咨询，我们的课程顾问会为您推荐最适合孩子的课程组合
          </p>
          <Button size="lg">预约免费咨询</Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
