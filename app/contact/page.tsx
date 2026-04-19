'use client'

/**
 * 联系我们页面
 */

import { MapPin, Phone, Clock } from '@phosphor-icons/react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'

export default function ContactPage() {
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
            联系我们
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            期待与您相遇
            <br />
            任何问题，我们都在这里为您解答
          </p>
        </div>
      </section>

      {/* 联系信息 */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 联系卡片 */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-stone-900 font-medium mb-1">校区地址</h3>
                    <p className="text-stone-600 text-sm">芜湖市弋江区新时代商业街19# 221 223号</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-stone-900 font-medium mb-1">联系电话</h3>
                    <p className="text-stone-600 text-sm">19315393167（微信同号）</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-stone-900 font-medium mb-1">营业时间</h3>
                    <p className="text-stone-600 text-sm">周二至周五 13:30-20:30</p>
                    <p className="text-stone-600 text-sm">周六 9:00-20:30</p>
                    <p className="text-stone-600 text-sm">周日 8:00-18:30</p>
                    <p className="text-stone-400 text-xs mt-1">周一休息（节假日除外）</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* 地图占位 */}
            <Card className="p-6 min-h-[400px]">
              <div className="w-full h-full min-h-[360px] rounded-2xl bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center border border-stone-200">
                <div className="text-center">
                  <MapPin size={48} className="text-orange-400/30 mx-auto mb-4" />
                  <p className="text-stone-500 text-sm">芜湖市弋江区新时代商业街19# 221 223号</p>
                  <p className="text-stone-400 text-xs mt-1">复制地址到地图APP查看</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
