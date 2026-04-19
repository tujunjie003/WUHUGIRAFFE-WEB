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
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-stone-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-right">
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
      <section className="pb-20 bg-orange-50/50">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          {COURSES.map((course, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center flex-shrink-0`}>
                  <GraduationCap size={24} weight="fill" className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-xs text-orange-500 font-medium">{course.category}</span>
                      <h3 className="text-xl font-semibold text-stone-900">{course.name}</h3>
                      <span className="text-sm text-stone-500">适合：{course.age}</span>
                    </div>
                    <div className="text-right text-sm text-stone-500">
                      <div className="flex items-center gap-1"><Clock size={12} /> {course.duration}</div>
                      <div className="flex items-center gap-1"><Users size={12} /> {course.size}</div>
                    </div>
                  </div>
                  <p className="text-stone-600 text-sm mb-3">{course.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {course.highlights.map((h, j) => (
                      <span key={j} className="inline-flex items-center gap-1 text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded-lg">
                        <CheckCircle size={10} className="text-orange-500" />{h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-right">
          <h2 className="text-2xl font-semibold text-stone-900 mb-4">不知道该选什么课程？</h2>
          <p className="text-stone-600 mb-6">预约一次免费咨询，我们的课程顾问会为您推荐最适合孩子的课程组合</p>
          <Button size="lg">预约免费咨询</Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
