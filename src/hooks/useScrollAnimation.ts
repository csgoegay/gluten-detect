"use client";

import { useEffect, useRef, useState } from 'react';

interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
}

export interface AnimationType {
  type: 'fade-in' | 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in';
  config?: AnimationConfig;
}

const defaultConfigs = {
  'fade-in': {
    duration: 500,
    delay: 0,
    easing: 'ease-out'
  },
  'fade-in-up': {
    duration: 300,
    delay: 0,
    easing: 'ease-in-out'
  },
  'fade-in-left': {
    duration: 500,
    delay: 0,
    easing: 'ease-out'
  },
  'fade-in-right': {
    duration: 500,
    delay: 0,
    easing: 'ease-out'
  },
  'scale-in': {
    duration: 500,
    delay: 0,
    easing: 'ease-out'
  }
};

export const useScrollAnimation = (
  animationType: AnimationType,
  options: IntersectionObserverInit = {}
) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const config = { ...defaultConfigs[animationType.type], ...animationType.config };

    // Set initial styles
    const applyInitialStyles = () => {
      switch (animationType.type) {
        case 'fade-in-up':
          element.style.opacity = '0';
          element.style.transform = 'translateY(20px)';
          break;
        case 'fade-in-left':
          element.style.opacity = '0';
          element.style.transform = 'translateX(30px)';
          break;
        case 'fade-in-right':
          element.style.opacity = '0';
          element.style.transform = 'translateX(-30px)';
          break;
        case 'scale-in':
          element.style.opacity = '0';
          element.style.transform = 'scale(0.98)';
          break;
        case 'fade-in':
        default:
          element.style.opacity = '0';
          element.style.transform = 'none';
          break;
      }
      element.style.transition = `opacity ${config.duration}ms ${config.easing}, transform ${config.duration}ms ${config.easing}`;
      element.style.transitionDelay = `${config.delay}ms`;
    };

    applyInitialStyles();

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      observerOptions
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [animationType, options]);

  useEffect(() => {
    if (isVisible && ref.current) {
      // Trigger animation
      ref.current.style.opacity = '1';
      ref.current.style.transform = 'none';
    }
  }, [isVisible]);

  return ref;
};

export const useStaggeredScrollAnimation = (
  animationType: AnimationType,
  staggerDelay: number = 100
) => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());

  const setRef = (index: number) => (element: HTMLDivElement | null) => {
    refs.current[index] = element;
  };

  useEffect(() => {
    const elements = refs.current.filter(Boolean) as HTMLDivElement[];

    elements.forEach((element, index) => {
      if (!element) return;

      const config = { ...defaultConfigs[animationType.type], ...animationType.config };
      const delay = config.delay + (index * staggerDelay);

      // Set initial styles
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = `opacity ${config.duration}ms ${config.easing}, transform ${config.duration}ms ${config.easing}`;
      element.style.transitionDelay = `${delay}ms`;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleIndices(prev => new Set([...prev, index]));
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    });
  }, [animationType, staggerDelay]);

  useEffect(() => {
    visibleIndices.forEach(index => {
      const element = refs.current[index];
      if (element) {
        element.style.opacity = '1';
        element.style.transform = 'none';
      }
    });
  }, [visibleIndices]);

  return { setRef };
};