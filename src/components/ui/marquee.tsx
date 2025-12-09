"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      {...props}
      className={cn(
        // Core constraints to prevent overflow
        "w-full max-w-full overflow-hidden select-none",
        // Animation classes
        "group flex",
        {
          "[--duration:40s]": !props.duration,
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
      style={{
        // Ensure to container never exceeds parent width
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        // Prevent text selection on mobile for better UX
        WebkitUserSelect: "none",
        userSelect: "none",
        // Performance optimization for smooth animations
        willChange: "transform",
        ...props.style,
      }}
    >
      <div
        className={cn("flex shrink-0 justify-around gap-[var(--gap)]", {
          "animate-marquee": !reverse,
          "animate-marquee-reverse": reverse,
          "flex-row": !vertical,
          "flex-col": vertical,
          "min-w-full": true, // Ensure track covers full width to prevent jitter
          "[--gap:1rem]": !props.gap,
          "group-hover:[animation-play-state:paused]": pauseOnHover,
        })}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="flex shrink-0 justify-around gap-[var(--gap)]">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

export const MarqueeItem = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        // Ensure items don't force container expansion
        "shrink-0",
        className
      )}
      style={{
        // Prevent flex item from growing beyond container
        flexShrink: 0,
        minWidth: 0, // Allow item to shrink if needed
        ...props.style,
      }}
    />
  );
};

export default Marquee;