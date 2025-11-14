# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start the development server (http://localhost:3000)
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Project Architecture

This is a **Next.js 15.3.4** project using the **App Router** architecture with **React 19.0.0** and **TypeScript**.

### Core Architecture
- **Router**: Next.js App Router (not Pages Router)
- **Styling**: Tailwind CSS with custom animations and container queries
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **State Management**: React hooks (no external state management)
- **Type Safety**: Full TypeScript implementation

### Directory Structure
```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/                # Radix UI primitives (36 components)
│   ├── icons/             # Social media icons
│   └── [section components] # Page sections
├── lib/                   # Utility functions
└── hooks/                 # Custom React hooks
```

### Component Architecture
The project follows a **section-based marketing page architecture**:

- **Data-driven components**: All content defined as data objects in `page.tsx`
- **Section components**: HeroSection, TextWithImageSection, HowItWorksSection, ValidationSection, BenefitsSection, FaqSection, SocialProofSection, ProductSection
- **Reusable UI components**: Button, Card, Dialog, etc. in `components/ui/`

### Key Dependencies
- **UI Framework**: Radix UI + shadcn/ui components
- **Styling**: Tailwind CSS + Tailwind CSS Animations
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React + Material Symbols
- **Theming**: next-themes for dark/light mode

### Configuration Notes
- **Images**: Optimized for Google Photos CDN (`lh3.googleusercontent.com`)
- **Dyad Integration**: Uses `@dyad-sh/nextjs-webpack-component-tagger`
- **Locale**: Portuguese market (pt-PT)

### Development Patterns
- **Props-driven components**: All sections accept data as props
- **TypeScript interfaces**: Strong typing for all component props
- **Responsive design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Radix UI primitives ensure accessibility compliance

### Content Structure
This is a **single-page medical product marketing site** for GlutenDetect (gluten testing kit) targeting Portuguese-speaking users with celiac disease or gluten sensitivity.

The page follows a progressive content flow:
Hero → Problem → Solution → Validation → Benefits → FAQ → Social Proof → Product