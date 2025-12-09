"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  duration?: string;
  [key: string]: any;
}

const Marquee = ({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = "40s",
  ...props
}: MarqueeProps) => {
  return (
    <div
      {...props}
      className={cn(
        // Added w-full and max-w-full to prevent horizontal overflow
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] w-full max-w-full select-none",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
      style={{
        "--duration": duration,
      } as React.CSSProperties}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)] min-w-full", // Changed min-w-0 to min-w-full for smoother looping
              {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
              }
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

const MarqueeItem = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <div
      {...props}
      className={cn(
        "flex-shrink-0 px-4", 
        className
      )}
    >
      {children}
    </div>
  );
};

export { Marquee, MarqueeItem };
export default Marquee;