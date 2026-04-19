'use client'

/**
 * 师资团队页面
 */

import { GraduationCap, Medal, BookOpen, Certificate } from '@phosphor-icons/react'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'

const STATS = [
  { value: '100%', label: '持证上岗' },
  { value: '9+', label: '专业教师' },
  { value: '6年', label: '办学经验' },
  { value: '98%+', label: '家长好评' },
]

const TEACHERS = [
  { name: 'Sarah 老师', title: '英语戏剧课程总监', experience: '8年教学经验', education: '英国伦敦大学教育学硕士', certifications: ['TESOL认证', '戏剧教育导师'], desc: '拥有丰富的海外教学经历，将沉浸式戏剧教学带入课堂。', image: '/WUHUGIRAFFE-WEB/images/teacher-sarah-1.jpg' },
  { name: '张明远 老师', title: '思维数学主讲教师', experience: '10年教学经验', education: '北京大学数学与应用数学', certifications: ['奥赛金牌教练', '儿童心理指导师'], desc: '坚信"数学是思维的体操"，擅长用趣味方式让孩子爱上数学。', image: '/WUHUGIRAFFE-WEB/images/teacher-2.jpg' },
  { name: '王思雨 老师', title: '创意美术课程主管', experience: '6年教学经验', education: '中央美术学院绘本创作专业', certifications: ['国家教师资格证', '艺术治疗师（初级）'], desc: '作品曾获多项儿童绘本大奖，课堂充满想象力和创造力。', image: '/WUHUGIRAFFE-WEB/images/teacher-3.jpg' },
  { name: '李浩然 老师', title: '科学实验营主讲教师', experience: '5年教学经验', education: '中国科学院物理研究所', certifications: ['青少年科技辅导员', 'STEM教育认证'], desc: '用简单有趣的实验激发孩子对科学的热爱。', image: '/WUHUGIRAFFE-WEB/images/teacher-1.jpg' },
]

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-stone-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-right">
          <h1 className="text-4xl sm:text-5xl font-semibold text-stone-900 tracking-tight mb-6">师资团队</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            专业的力量，源自热爱与专业
            <br />
            每一位老师都是我们最珍贵的财富
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16 bg-orange-50/50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-4">
            {STATS.map((stat, i) => (
              <Card key={i} className="p-4 text-right">
                <div className="text-2xl font-semibold text-orange-500 mb-1">{stat.value}</div>
                <div className="text-sm text-stone-500">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="pb-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          {TEACHERS.map((teacher, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src={teacher.image} alt={teacher.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-stone-900">{teacher.name}</h3>
                  <p className="text-sm text-orange-500 mb-2">{teacher.title}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-stone-500 mb-2">
                    <span className="flex items-center gap-1"><Medal size={10} />{teacher.experience}</span>
                    <span className="flex items-center gap-1"><BookOpen size={10} />{teacher.education}</span>
                  </div>
                  <p className="text-sm text-stone-600">{teacher.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
