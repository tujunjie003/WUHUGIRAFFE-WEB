'use client'

import { motion } from 'framer-motion'
import { 
  House, GraduationCap, ChartLine, Users, Gear, 
  Bell, MagnifyingGlass, SignOut, 
  Books, Calculator, Star, Phone, MapPin, Clock
} from '@phosphor-icons/react'

// Taste Skill Config: DESIGN_VARIANCE=8, MOTION_INTENSITY=6, VISUAL_DENSITY=4
// Font: Geist (fallback: system-ui)
// Colors: Zinc/Slate base + Emerald accent (NO purple/blue/emoji)

interface StatCardProps {
  label: string
  value: string | number
  change: string
  changeType: 'positive' | 'negative' | 'neutral'
  icon: React.ReactNode
}

interface CourseCardProps {
  name: string
  description: string
  students: number
  rating: number
  tags: string[]
  icon: React.ReactNode
}

interface RecentEnquiry {
  name: string
  course: string
  phone: string
  time: string
  status: 'pending' | 'contacted' | ' enrolled'
}

const SidebarItem = ({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) => (
  <motion.button
    whileHover={{ x: 4 }}
    whileTap={{ scale: 0.98 }}
    className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
      active 
        ? 'bg-emerald-500/10 text-emerald-600' 
        : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
    }`}
  >
    <span className="text-lg">{icon}</span>
    <span>{label}</span>
  </motion.button>
)

const StatCard = ({ label, value, change, changeType, icon }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/80 p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
  >
    {/* Liquid glass edge effect */}
    <div className="absolute inset-0 rounded-3xl border border-white/[0.03]" />
    
    <div className="flex items-start justify-between">
      <div>
        <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">{label}</p>
        <p className="text-3xl font-semibold text-zinc-100 mt-2 tracking-tight">{value}</p>
      </div>
      <div className="w-10 h-10 rounded-2xl bg-zinc-800/80 flex items-center justify-center text-zinc-400">
        {icon}
      </div>
    </div>
    
    <div className="mt-4 flex items-center gap-1.5">
      <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${
        changeType === 'positive' ? 'bg-emerald-500/10 text-emerald-500' : 
        changeType === 'negative' ? 'bg-red-500/10 text-red-500' : 
        'bg-zinc-800 text-zinc-400'
      }`}>
        {change}
      </span>
      <span className="text-zinc-600 text-xs">vs last month</span>
    </div>
  </motion.div>
)

const CourseCard = ({ name, description, students, rating, tags, icon }: CourseCardProps) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.01 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="group relative overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.25)]"
  >
    <div className="absolute inset-0 rounded-3xl border border-white/[0.03]" />
    
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-zinc-300 border border-zinc-700/50">
          {icon}
        </div>
        <div className="flex items-center gap-1 text-amber-400">
          <Star weight="fill" size={14} />
          <span className="text-sm font-semibold">{rating}</span>
        </div>
      </div>
      
      <h3 className="text-zinc-100 font-semibold text-lg tracking-tight">{name}</h3>
      <p className="text-zinc-500 text-sm mt-1.5 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map(tag => (
          <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-zinc-800/50">
        <div className="flex items-center gap-1.5 text-zinc-500 text-sm">
          <Users size={14} />
          <span>{students} students</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 rounded-xl bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition-colors"
        >
          Enroll
        </motion.button>
      </div>
    </div>
  </motion.div>
)

const EnquiryRow = ({ name, course, phone, time, status }: RecentEnquiry) => (
  <div className="flex items-center justify-between py-3 border-b border-zinc-800/30 last:border-0">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 text-xs font-medium">
        {name.charAt(0)}
      </div>
      <div>
        <p className="text-sm font-medium text-zinc-200">{name}</p>
        <p className="text-xs text-zinc-500">{course} · {phone}</p>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <span className="text-xs text-zinc-500">{time}</span>
      <span className={`text-xs px-2 py-1 rounded-lg font-medium ${
        status === 'enrolled' ? 'bg-emerald-500/10 text-emerald-500' :
        status === 'contacted' ? 'bg-amber-500/10 text-amber-500' :
        'bg-zinc-800 text-zinc-400'
      }`}>
        {status === 'enrolled' ? 'Enrolled' : status === 'contacted' ? 'Contacted' : 'Pending'}
      </span>
    </div>
  </div>
)

export default function Dashboard() {
  const stats = [
    { label: 'Total Students', value: '247', change: '+12.5%', changeType: 'positive' as const, icon: <Users size={20} /> },
    { label: 'Active Courses', value: '8', change: '+2', changeType: 'positive' as const, icon: <GraduationCap size={20} /> },
    { label: 'Revenue (CNY)', value: '¥38.6K', change: '+8.2%', changeType: 'positive' as const, icon: <ChartLine size={20} /> },
    { label: 'Pending Enquiries', value: '14', change: '-3', changeType: 'positive' as const, icon: <Bell size={20} /> },
  ]

  const courses = [
    {
      name: 'Giraffe English',
      description: 'Professional English enlightenment from beginners to advanced, using situational interactive teaching.',
      students: 124,
      rating: 4.9,
      tags: ['Small Class', 'Ages 3-12', 'Situational'],
      icon: <Books size={24} />,
    },
    {
      name: 'Future Math School',
      description: 'Mathematical thinking development and tutoring for Grades 1-6, building logic and problem-solving skills.',
      students: 89,
      rating: 4.8,
      tags: ['Grade 1-6', 'Critical Thinking', 'Dual Track'],
      icon: <Calculator size={24} />,
    },
  ]

  const recentEnquiries = [
    { name: 'Chen Xiaoming', course: 'English', phone: '138****6721', time: '2h ago', status: 'pending' as const },
    { name: 'Wang Lili', course: 'Math', phone: '139****8834', time: '4h ago', status: 'contacted' as const },
    { name: 'Zhang Jiamin', course: 'English', phone: '158****2209', time: '5h ago', status: 'enrolled' as const },
    { name: 'Liu Yang', course: 'Math', phone: '186****4451', time: '1d ago', status: 'pending' as const },
  ]

  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-100 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 flex flex-col border-r border-zinc-800/60 bg-zinc-900/40 backdrop-blur-xl">
        {/* Logo area */}
        <div className="p-6 border-b border-zinc-800/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <GraduationCap size={20} weight="fill" className="text-white" />
            </div>
            <div>
              <h1 className="text-sm font-semibold text-zinc-100 tracking-tight">Giraffe</h1>
              <p className="text-[10px] text-zinc-500">Education Center</p>
            </div>
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 p-4 space-y-1">
          <SidebarItem icon={<House size={18} weight="fill" />} label="Dashboard" active />
          <SidebarItem icon={<GraduationCap size={18} />} label="Courses" />
          <SidebarItem icon={<Users size={18} />} label="Students" />
          <SidebarItem icon={<ChartLine size={18} />} label="Analytics" />
          <SidebarItem icon={<Bell size={18} />} label="Enquiries" />
        </nav>

        {/* Bottom section */}
        <div className="p-4 border-t border-zinc-800/60 space-y-1">
          <SidebarItem icon={<Gear size={18} />} label="Settings" />
          <SidebarItem icon={<SignOut size={18} />} label="Sign Out" />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-zinc-800/60 bg-zinc-900/20 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <h2 className="text-zinc-400 text-sm">Wuhu Giraffe Growth Center</h2>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <MagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input 
                type="text"
                placeholder="Search..."
                className="w-64 h-9 pl-9 pr-4 rounded-xl bg-zinc-800/60 border border-zinc-700/50 text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
              />
            </div>
            
            {/* Notifications */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-9 h-9 rounded-xl bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              <Bell size={18} />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 text-[10px] text-white font-bold flex items-center justify-center">
                3
              </span>
            </motion.button>

            {/* User avatar */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-800 border border-zinc-600/50 flex items-center justify-center text-sm font-semibold text-zinc-300">
              T
            </div>
          </div>
        </header>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-8">
          {/* Page title */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-zinc-100 tracking-tight">Dashboard</h1>
            <p className="text-zinc-500 text-sm mt-1">Welcome back. Here is your center overview.</p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <StatCard {...stat} />
              </motion.div>
            ))}
          </div>

          {/* Main grid: Courses + Recent enquiries */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Courses (2/3 width) */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-zinc-200 font-semibold">Active Courses</h3>
                <button className="text-sm text-emerald-500 hover:text-emerald-400 transition-colors">
                  View all
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.map((course, i) => (
                  <motion.div
                    key={course.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <CourseCard {...course} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recent enquiries (1/3 width) */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-zinc-200 font-semibold">Recent Enquiries</h3>
                <button className="text-sm text-emerald-500 hover:text-emerald-400 transition-colors">
                  View all
                </button>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="rounded-3xl border border-zinc-800/50 bg-zinc-900/80 p-5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.25)]"
              >
                <div className="absolute inset-0 rounded-3xl border border-white/[0.03]" />
                {recentEnquiries.map(enquiry => (
                  <EnquiryRow key={enquiry.phone} {...enquiry} />
                ))}
              </motion.div>

              {/* Contact info card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 rounded-3xl border border-zinc-800/50 bg-zinc-900/80 p-5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.25)]"
              >
                <div className="absolute inset-0 rounded-3xl border border-white/[0.03]" />
                <h4 className="text-zinc-300 font-semibold text-sm mb-3">Contact Info</h4>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-zinc-400 text-sm">
                    <Phone size={14} className="text-zinc-500" />
                    <span>193 1539 3167</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-zinc-400 text-sm">
                    <MapPin size={14} className="text-zinc-500" />
                    <span>Wuhu Yijiang, New Era Commercial Street 19#221</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-zinc-400 text-sm">
                    <Clock size={14} className="text-zinc-500" />
                    <span>Tue-Fri 13:30-20:30, Sat 09:00-20:30</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
