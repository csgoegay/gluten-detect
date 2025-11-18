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

  return (
    <div 
      ref={containerRef}
      className={cn("relative w-full overflow-hidden", className)}
    >
      <div 
        className={cn(
          "flex",
          pauseOnHover && "hover:pause-animation"
        )}
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
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

        .hover\\:pause-animation:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};

export default Marquee;