# Giraffe Growth Center Dashboard

A modern dashboard application for Wuhu Giraffe Education Center, built with Next.js 14, Tailwind CSS, and Framer Motion.

## Design

This dashboard follows the **design-taste-frontend** skill principles:
- **Typography**: Geist font family (no Inter)
- **Colors**: Zinc/Slate neutral base + Emerald accent (no purple/blue)
- **Icons**: Phosphor Icons (no emoji)
- **Motion**: Framer Motion with spring physics (MOTION_INTENSITY=6)
- **Materiality**: Liquid Glass effects with inner refraction borders

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: @phosphor-icons/react
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
dashboard/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Geist font
│   ├── page.tsx           # Dashboard page
│   └── globals.css        # Tailwind imports + custom styles
├── components/
│   └── Dashboard.tsx      # Main dashboard component (358 lines)
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Features

- Dark-themed admin dashboard
- Student/course/revenue statistics cards
- Course enrollment cards with ratings
- Recent enquiry tracking
- Contact information display
- Responsive layout
- Liquid glass UI effects
- Spring physics animations

## Screenshots

The dashboard replicates the design shown in the education center screenshot, with modern taste-skill-compliant styling.
