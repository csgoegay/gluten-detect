"use client";

import React from "react";
import { Star, StarHalf } from "lucide-react";
import { Marquee, MarqueeItem, MarqueeFade, MarqueeContent } from "@/components/ui/marquee";

interface Testimonial {
  rating: number;
  quote: string;
  author: string;
}

interface Logo {
  src: string;
  alt: string;
}

interface FeaturedIn {
  title: string;
  logos: Logo[];
}

interface SocialProofSectionProps {
  headline: string;
  testimonials: Testimonial[];
  featuredIn?: FeaturedIn;
}

// --- LUCIDE STAR RATING ---
const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <Star 
          key={`full-${i}`} 
          className="w-5 h-5 fill-amber-400 text-amber-400" 
        />
      ))}
      {hasHalfStar && (
        <StarHalf className="w-5 h-5 fill-amber-400 text-amber-400" />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star 
          key={`empty-${i}`} 
          className="w-5 h-5 text-gray-300 dark:text-gray-600" 
        />
      ))}
    </div>
  );
};

const SocialProofSection = ({
  headline,
  testimonials,
}: SocialProofSectionProps) => {
  return (
    <section className="flex flex-1 justify-center py-14 md:py-24">
      <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1 px-4 md:px-8">
        <h1 className="text-primary tracking-tight text-3xl md:text-4xl font-bold leading-tight text-center pb-8 md:pb-12">
          {headline}
        </h1>

        {/* New marquee implementation with better mobile support */}
        <Marquee className="w-full">
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent
            speed={30}
            pauseOnHover={true}
            autoFill={true}
          >
            {testimonials.map((testimonial, index) => (
              <MarqueeItem key={index} className="w-72 sm:w-80">
                <div className="flex h-full flex-col gap-4 rounded-xl bg-white dark:bg-gray-800 p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                  <StarRating rating={testimonial.rating} />
                  <div className="flex flex-col flex-1">
                    <p className="text-text-main dark:text-gray-100 text-sm sm:text-base font-normal leading-relaxed mb-3 line-clamp-4">
                      {testimonial.quote}
                    </p>
                    <p className="text-text-subtle dark:text-gray-400 text-xs sm:text-sm font-medium mt-auto">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </section>
  );
};

export default SocialProofSection;