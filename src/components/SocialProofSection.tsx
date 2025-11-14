"use client";

import React, { useRef } from "react";
import Image from "next/image";

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
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const firstCard = carouselRef.current.children[0].children[0] as HTMLElement;
      const scrollAmount = firstCard.offsetWidth + 24; // card width + gap
      carouselRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const firstCard = carouselRef.current.children[0].children[0] as HTMLElement;
      const scrollAmount = firstCard.offsetWidth + 24; // card width + gap
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="flex flex-1 justify-center py-16 md:py-24">
      <div className="layout-content-container flex flex-col max-w-6xl flex-1 px-4 md:px-8">
        <h1 className="text-primary tracking-tight text-3xl md:text-4xl font-bold leading-tight text-center pb-8 md:pb-12">
          {headline}
        </h1>
        
        {/* Testimonial Carousel */}
        <div className="relative w-full">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous testimonials"
          >
            <span className="material-symbols-outlined text-gray-700 dark:text-gray-300">
              chevron_left
            </span>
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next testimonials"
          >
            <span className="material-symbols-outlined text-gray-700 dark:text-gray-300">
              chevron_right
            </span>
          </button>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-4"
          >
            <div className="flex items-stretch p-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex h-full flex-1 flex-col gap-4 rounded-xl min-w-[280px] bg-white dark:bg-gray-800 p-6 shadow-md"
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
            </div>
          </div>
        </div>

        {/* Featured In Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center mt-16 md:mt-24">
          {featuredIn.logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={128}
              height={32}
              className="h-8 w-auto filter grayscale opacity-60 dark:invert dark:opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;