"use client";

import React from "react";
import Image from "next/image";
import Marquee from "@/components/ui/marquee";

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
        <div className="relative w-full py-5">
          <Marquee speed={40} pauseOnHover={true}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex h-full flex-col gap-4 rounded-xl min-w-[280px] bg-white dark:bg-gray-800 p-6 shadow-md"
              >
                <StarRating rating={testimonial.rating} />
                <div>
                  <p className="text-text-main dark:text-gray-100 text-base font-normal leading-relaxed mb-3">
                    {testimonial.quote}
                  </p>
                  <p className="text-text-subtle dark:text-gray-400 text-sm font-medium">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

      </div>
    </section>
  );
};

export default SocialProofSection;