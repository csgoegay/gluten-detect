"use client";

import React from "react";
import Image from "next/image";
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "@/components/ui/marquee";

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
  featuredIn: FeaturedIn;
}

// Star Rating helper component
const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="material-symbols-outlined text-2xl">
          star
        </span>
      ))}
      {hasHalfStar && (
        <span className="material-symbols-outlined text-2xl">
          star_half
        </span>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="material-symbols-outlined text-2xl">
          star_outline
        </span>
      ))}
    </div>
  );
};

const SocialProofSection = ({
  headline,
  testimonials,
  featuredIn,
}: SocialProofSectionProps) => {
  return (
    <section className="flex flex-1 justify-center py-16 md:py-24">
      <div className="layout-content-container flex flex-col max-w-6xl flex-1 px-4 md:px-8">
        <h1 className="text-primary tracking-tight text-3xl md:text-4xl font-bold leading-tight text-center pb-8 md:pb-12">
          {headline}
        </h1>
        
        {/* Testimonial Marquee */}
        <div className="relative w-full py-4">
          <Marquee>
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
            <MarqueeContent speed={40} pauseOnHover={true}>
              {testimonials.map((testimonial, index) => (
                <MarqueeItem key={index} className="w-80 h-64">
                  <div className="flex h-full flex-col gap-4 rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg mb-4">
                    <StarRating rating={testimonial.rating} />
                    <div className="flex flex-col flex-1">
                      <p className="text-text-main dark:text-gray-100 text-base font-normal leading-relaxed mb-3 line-clamp-4">
                        {testimonial.quote}
                      </p>
                      <p className="text-text-subtle dark:text-gray-400 text-sm font-medium mt-auto">
                        {testimonial.author}
                      </p>
                    </div>
                  </div>
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>
        </div>

      </div>
    </section>
  );
};

export default SocialProofSection;