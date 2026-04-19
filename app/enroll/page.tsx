'use client'

import { motion } from 'framer-motion'

/**
 * 预约体验页面
 */

import { useState } from 'react'
import { GraduationCap, CheckCircle } from '@phosphor-icons/react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const COURSES = [
  '英语戏剧表演',
  '思维数学',
  '创意美术',
  '科学实验营',
  '感统体能',
  '全脑开发',
  '还未确定',
]

export default function EnrollPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    parentName: '',
    phone: '',
    childName: '',
    childAge: '',
    course: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 模拟提交
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-zinc-100 tracking-tight mb-6">
            预约体验课
          </h1>
          <p className="text-xl text-zinc-500 leading-relaxed">
            填写以下信息，我们的课程顾问将在24小时内与您联系
          </p>
        </div>
      </section>

      {/* 表单 */}
      <section className="pb-20 bg-zinc-900/50">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-emerald-500" />
                </div>
                <h2 className="text-2xl font-semibold text-zinc-100 mb-4">提交成功！</h2>
                <p className="text-zinc-500 mb-8">
                  感谢您的预约，我们的课程顾问将在24小时内与您联系。
                  <br />
                  请保持电话畅通。
                </p>
                <Button onClick={() => setSubmitted(false)}>继续预约</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">家长姓名 *</label>
                    <input
                      type="text"
                      required
                      value={form.parentName}
                      onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">联系电话 *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                      placeholder="138-0000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">孩子姓名 *</label>
                    <input
                      type="text"
                      required
                      value={form.childName}
                      onChange={(e) => setForm({ ...form, childName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                      placeholder="请输入孩子姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">孩子年龄 *</label>
                    <select
                      required
                      value={form.childAge}
                      onChange={(e) => setForm({ ...form, childAge: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-100 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    >
                      <option value="">请选择年龄</option>
                      {['3岁', '4岁', '5岁', '6岁', '7岁', '8岁', '9岁', '10岁', '11岁', '12岁'].map((age) => (
                        <option key={age} value={age}>{age}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">意向课程</label>
                  <select
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-100 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  >
                    <option value="">请选择课程（可选）</option>
                    {COURSES.map((course) => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">留言（可选）</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                    placeholder="您有什么想告诉我们的吗？"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <GraduationCap size={18} />
                  提交预约
                </Button>

                <p className="text-xs text-zinc-600 text-center">
                  提交即表示您同意我们的隐私政策，我们不会向第三方透露您的信息。
                </p>
              </form>
            )}
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
