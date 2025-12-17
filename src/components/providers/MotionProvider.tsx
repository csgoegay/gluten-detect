'use client';

import { LazyMotion, domAnimation, m, useMotionValue, useSpring } from 'framer-motion';

/**
 * Motion provider that uses Framer Motion's LazyMotion feature
 * to reduce bundle size by only loading animation features when needed
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  );
}

// Export m and hooks for components to use
export { m, useMotionValue, useSpring };