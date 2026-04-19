'use client'

import { motion } from 'framer-motion'


/**
 * 联系我们页面
 */

import { MapPin, Phone, EnvelopeSimple, Clock, WechatLogo, InstagramLogo } from '@phosphor-icons/react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function ContactPage() {
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
      <section className="pb-20 bg-orange-50/500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 联系卡片 */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-stone-900 font-medium mb-1">校区地址</h3>
                    <p className="text-stone-600 text-sm">天津市河西区下瓦房恒华园1-2-301</p>
                    <p className="text-stone-700 text-xs mt-1">近地铁1号线南楼站，停车方便</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-stone-900 font-medium mb-1">联系电话</h3>
                    <p className="text-stone-600 text-sm">138-0000-1111</p>
                    <p className="text-stone-700 text-xs mt-1">微信同号 (工作时间 9:00-21:00)</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <EnvelopeSimple size={20} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-stone-900 font-medium mb-1">电子邮箱</h3>
                    <p className="text-stone-600 text-sm">hello@giraffe-edu.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-stone-900 font-medium mb-1">营业时间</h3>
                    <p className="text-stone-600 text-sm">周二至周日 9:00-21:00</p>
                    <p className="text-stone-700 text-xs mt-1">周一休息（节假日除外）</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* 地图占位 */}
            <Card className="p-6 min-h-[400px]">
              <div className="w-full h-full min-h-[360px] rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center border border-white/5">
                <div className="text-center">
                  <MapPin size={48} className="text-orange-500/30 mx-auto mb-4" />
                  <p className="text-stone-600 text-sm">地图加载中...</p>
                  <p className="text-stone-700 text-xs mt-1">天津市河西区下瓦房恒华园</p>
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
