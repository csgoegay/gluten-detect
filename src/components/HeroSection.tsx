"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        ease: [0.25, 0.46, 0.45, 0.94],
        duration: 0.6
      }
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Animated Headline with staggered words */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {headlineWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Subheadline with fade-in animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.8,
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          {subHeadline}
        </motion.p>

        {/* CTA Button with shimmer effect and hover animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1.1,
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="relative inline-block"
        >
          <Link href="https://dietadvance.pt/loja/saude-gastro-intestinal/gluten-detect/">
            <motion.button
              className="relative inline-flex items-center justify-center px-8 py-4 bg-accent-gold text-white font-semibold rounded-lg overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
              
              <span className="relative z-10 flex items-center">
                {buttonText}
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;