"use client";

import { m } from "@/components/providers/MotionProvider";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { EASINGS } from "@/utils/easing";

interface HeroSectionProps {
  backgroundImageUrl: string;
  mainHeadline: string;
  subHeadline: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSection = ({
  backgroundImageUrl,
  mainHeadline,
  subHeadline,
  buttonText,
  buttonLink,
}: HeroSectionProps) => {
  // Split the headline into words for staggered animation
  const headlineWords = mainHeadline.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 1, y: 0 }, // Start visible to prevent hydration blocking
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: EASINGS.smooth,
        duration: 0.6
      }
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized Background Image with Next.js Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImageUrl}
          alt="Hero Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Animated Headline with staggered words */}
        <m.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {headlineWords.map((word, index) => (
              <m.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-2"
              >
                {word}
              </m.span>
            ))}
          </h1>
        </m.div>

        {/* Subheadline with fade-in animation */}
        <m.p
          initial={{ opacity: 1, y: 0 }} // Start visible to prevent hydration blocking
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.6,
            ease: EASINGS.smooth
          }}
          className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          {subHeadline}
        </m.p>

        {/* CTA Button with shimmer effect and hover animation */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.1,
            duration: 0.6,
            ease: EASINGS.smooth
          }}
          className="relative inline-block"
        >
          <Link href="/api/redirect-to-product?type=gluten-detect">
            <m.button
              className="relative inline-flex items-center justify-center px-8 py-4 bg-accent-gold text-white font-semibold rounded-lg overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>

              <span className="relative z-10 flex items-center">
                {buttonText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </m.button>
          </Link>
        </m.div>
      </div>
    </section>
  );
};

export default HeroSection;