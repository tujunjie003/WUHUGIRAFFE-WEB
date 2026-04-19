# 长颈鹿学堂 - 项目规格说明书

## 1. 项目概述

### 1.1 项目名称
长颈鹿学堂 (WUHUGIRAFFE)

### 1.2 项目类型
教育管理 SaaS 平台 (B端管理后台 + C端家长端)

### 1.3 核心价值
为教育机构提供一站式的数字化管理解决方案，提升家校沟通效率和学生服务质量。

### 1.4 目标用户
- 教育机构管理者
- 班主任/教师
- 学员家长

---

## 2. UI/UX 规格

### 2.1 布局结构

**整体布局**: 侧边栏 + 顶部栏 + 主内容区

```
┌─────────────────────────────────────────────────────┐
│ [侧边栏 240px]  │ [顶部栏 64px]                     │
│                 │─────────────────────────────────────│
│ Logo            │ 搜索框  通知  用户头像              │
│ ─────────────   │─────────────────────────────────────│
│ 仪表盘 ●        │                                     │
│ 学生管理        │         主内容区                     │
│ 课程管理        │                                     │
│ 消息通知        │   (统计卡片 / 数据列表 / 表单)        │
│ 数据报表        │                                     │
│ 系统设置        │                                     │
│                 │                                     │
│ ─────────────   │                                     │
│ [折叠按钮]      │                                     │
└─────────────────────────────────────────────────────┘
```

**响应式策略**:
- 桌面端 (>= 1024px): 完整侧边栏
- 平板端 (768-1023px): 折叠侧边栏 (图标模式)
- 移动端 (< 768px): 隐藏侧边栏，汉堡菜单触发

### 2.2 视觉设计

**颜色系统**:
| 用途 | 色值 | 说明 |
|------|------|------|
| 主背景 | `#fafaf8` | 温暖米白 |
| 卡片背景 | `#ffffff` | 纯白 |
| 主文字 | `#18181b` | Zinc-900 |
| 次要文字 | `#71717a` | Zinc-500 |
| 边框线 | `#e4e4e7` | Zinc-200 |
| 强调色 | `#10b981` | Emerald-500 |
| 强调浅色 | `#d1fae5` | Emerald-100 |
| 危险色 | `#ef4444` | Red-500 |

**字体系统**:
- 主字体: Geist (fallback: system-ui, -apple-system, sans-serif)
- 等宽字体: Geist Mono (fallback: ui-monospace, monospace)
- 标题: 600 weight, tracking-tight
- 正文: 400 weight, leading-relaxed

**间距系统**: 4px 基准网格，常用间距 8/12/16/24/32/48px

**圆角**:
- 卡片: 24px (rounded-3xl)
- 按钮: 12px (rounded-xl)
- 输入框: 8px (rounded-lg)

### 2.3 组件清单

**Sidebar (侧边栏)**
- 宽度: 240px (展开) / 64px (折叠)
- 状态: default / hover / active
- 动画: 展开/折叠过渡 300ms

**StatCard (统计卡片)**
- 显示: 标题、数值、变化率、图标
- 变化率颜色: positive(绿) / negative(红) / neutral(灰)
- 悬浮效果: 微妙上浮 + 阴影加深

**DataTable (数据表格)**
- 表头: 固定，背景略深
- 行高: 56px
- 斑马纹: 可选
- 分页: 底部居中

**Button (按钮)**
- 尺寸: sm(32px) / md(40px) / lg(48px)
- 类型: primary / secondary / ghost / danger
- 状态: default / hover / active / disabled / loading

---

## 3. 功能模块

### 3.1 Dashboard (仪表盘)

**统计数据** (4个卡片):
1. 在读学员数 - 当前在校学生总数
2. 本月新增 - 本月新报名学员
3. 续费率 - 续费学员/总学员 × 100%
4. 出勤率 - 实际出勤/应出勤 × 100%

**最新动态** (RecentActivity)
- 列表展示最近咨询/报名动态
- 每条包含: 姓名、课程、电话、时间、状态标签
- 状态: pending(待联系) / contacted(已联系) / enrolled(已报名)

**班级列表** (ClassList)
- 展示所有班级
- 每班: 名称、人数、容量、状态
- 满班预警: 人数 >= 90% 容量时显示警告

### 3.2 学生管理

- 学生列表 (搜索/筛选/分页)
- 学生详情 (基本信息 + 课程记录)
- 新增学生表单
- 编辑/删除学生

### 3.3 课程管理

- 课程列表 (名称、描述、授课老师、状态)
- 班级管理 (班级名、所属课程、容量、学生列表)
- 课时记录

### 3.4 消息中心

- 通知列表 (系统通知、活动通知)
- 咨询列表 (来自网站的咨询信息)
- 已读/未读状态

### 3.5 数据报表

- 招生报表 (月度/季度/年度)
- 营收报表
- 出勤统计

---

## 4. 动效规格

### 4.1 页面过渡
- 淡入: opacity 0→1, 200ms ease-out
- 滑入: translateY(20px)→0, 300ms cubic-bezier(0.16, 1, 0.3, 1)

### 4.2 微交互
- 按钮点击: scale(0.98), 100ms
- 卡片悬浮: translateY(-2px), shadow加深, 200ms
- 侧边栏展开: width变化, 300ms cubic-bezier(0.16, 1, 0.3, 1)

### 4.3 动画原则
- 使用 spring physics: stiffness(100), damping(20)
- 避免线性动画
- 动画时长: 短交互 100-200ms, 页面过渡 200-400ms

---

## 5. 技术实现

### 5.1 技术选型

```json
{
  "framework": "Next.js 14 (App Router)",
  "ui": "React 18",
  "styling": "Tailwind CSS 3",
  "animation": "Framer Motion 11",
  "icons": "@phosphor-icons/react",
  "fonts": "Geist (next/font)",
  "language": "TypeScript"
}
```

### 5.2 目录结构

```
app/
├── layout.tsx          # 根布局 (Font + Global CSS)
├── page.tsx           # 首页 (Dashboard)
├── globals.css        # Tailwind 指令 + CSS 变量
components/
├── Dashboard.tsx       # 主仪表盘容器
├── Sidebar.tsx        # 侧边栏
├── StatCard.tsx       # 统计卡片
├── RecentActivity.tsx  # 最新动态列表
├── ClassList.tsx      # 班级列表
├── Header.tsx         # 顶部栏
utils/
├── constants.ts       # 常量数据 (模拟数据)
```

### 5.3 数据模拟

本版本使用静态模拟数据，后续版本接入真实 API。

---

## 6. 验收标准

- [ ] 页面加载时间 < 2s
- [ ] 所有交互有视觉反馈
- [ ] 响应式布局正常 (桌面/平板/移动)
- [ ] 无 console error
- [ ] Lighthouse 性能评分 > 80
- [ ] 中文注释完整覆盖率 100%
