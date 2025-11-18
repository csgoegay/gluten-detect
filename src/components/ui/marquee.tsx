"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
}

const Marquee = ({ 
  children, 
  className, 
  speed = 30, 
  pauseOnHover = true,
  direction = "left"
}: MarqueeProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [contentWidth, setContentWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (contentRef.current) {
        setContentWidth(contentRef.current.scrollWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [children]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="flex"
        style={{
          animation: isPaused ? 'none' : `marquee-${direction} ${speed}s linear infinite`,
          width: contentWidth * 2, // Double width for seamless loop
        }}
      >
        {/* First set of content */}
        <div ref={contentRef} className="flex items-stretch gap-6">
          {children}
        </div>
        {/* Duplicate content for seamless loop */}
        <div className="flex items-stretch gap-6">
          {children}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;