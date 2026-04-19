# 长颈鹿学堂 (WUHUGIRAFFE)

> 面向教育的现代化家校互动平台

## 项目简介

长颈鹿学堂是一个基于 Next.js 14 + Tailwind CSS 构建的家校互动平台，为教育机构提供学生管理、课程跟踪、数据统计等功能。

## 功能特性

- **Dashboard 统计面板** - 实时展示关键业务指标
- **学生管理** - 学员信息管理、课程分配
- **动态消息** - 最新咨询与报名动态
- **课程班级** - 班级管理与满班预警
- **响应式设计** - 适配桌面端与移动端

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 14.x | React 框架 |
| React | 18.x | UI 库 |
| Tailwind CSS | 3.x | 原子化 CSS |
| Framer Motion | 11.x | 动画库 |
| Phosphor Icons | 最新 | 图标库 |
| Geist Font | - | 字体 |

## 开始使用

### 环境要求

- Node.js >= 18.0
- npm / yarn / pnpm

### 安装步骤

```bash
# 克隆仓库
git clone https://github.com/tujunjie003/WUHUGIRAFFE-WEB.git
cd WUHUGIRAFFE-WEB

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000 查看效果。

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
WUHUGIRAFFE-WEB/
├── app/                    # Next.js App Router 页面
│   ├── page.tsx           # 首页 / Dashboard
│   ├── layout.tsx         # 根布局
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Dashboard.tsx      # 主仪表盘组件
│   ├── Sidebar.tsx        # 侧边导航栏
│   ├── StatCard.tsx       # 统计卡片
│   └── ...
├── styles/                # 样式文件
├── public/               # 静态资源
├── SPEC.md              # 项目规格说明书
└── README.md            # 本文件
```

## 设计规范

本项目遵循 taste skill 设计规范：

- **DESIGN_VARIANCE**: 8 (不对称布局)
- **MOTION_INTENSITY**: 6 (流畅动画)
- **VISUAL_DENSITY**: 4 (日常使用密度)
- **字体**: Geist (fallback: system-ui)
- **色系**: Zinc/Slate 底色 + Emerald 强调色
- **图标**: Phosphor Icons (无 emoji)
- **动画**: Framer Motion (spring physics)

详见 [SPEC.md](./SPEC.md)

## License

MIT
