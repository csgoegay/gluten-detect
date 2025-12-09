"use client";

import { cn } from "@/lib/utils";

interface PaginationDotProps {
  page: number;
  total: number;
  size?: "sm" | "md" | "lg";
  onPageChange: (page: number) => void;
  className?: string;
}

export const PaginationDot = ({ 
  page, 
  total, 
  size = "md", 
  onPageChange,
  className = ""
}: PaginationDotProps) => {
  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3", 
    lg: "w-4 h-4"
  };

  return (
    <div className={cn("flex gap-2", className)}>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={cn(
            "rounded-full transition-all duration-300",
            sizeClasses[size],
            page === index + 1
              ? "bg-accent-gold scale-110"
              : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
          )}
          aria-label={`Go to testimonial ${index + 1}`}
        />
      ))}
    </div>
  );
};