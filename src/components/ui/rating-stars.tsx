"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const RatingStars = ({ 
  rating = 5, 
  size = "md",
  className = ""
}: RatingStarsProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  return (
    <div className={cn("flex gap-1", className)}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            sizeClasses[size],
            index < rating
              ? "fill-amber-400 text-amber-400"
              : "text-gray-300 dark:text-gray-600"
          )}
        />
      ))}
    </div>
  );
};