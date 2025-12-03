"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TextWithImageSectionProps {
  headline: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  imageAlt: string;
  reverseLayout?: boolean;
}

const TextWithImageSection = ({
  headline,
  description,
  buttonText,
  buttonLink,
  imageUrl,
  imageAlt,
  reverseLayout = false,
}: TextWithImageSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect for the image
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={ref} className="px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-40 flex flex-1 justify-center py-10 md:py-20">
      <div className="layout-content-container flex flex-col max-w-7xl w-full flex-1">
        <div className="@container">
          <div className={`flex flex-col gap-10 lg:gap-16 lg:items-center ${reverseLayout ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <motion.div 
              initial={{ opacity: 0, x: reverseLayout ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="flex flex-col gap-6 lg:gap-8 lg:w-1/2"
            >
              <div className="flex flex-col gap-4 text-left">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    delay: 0.2,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="text-heading-dark dark:text-slate-200 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                >
                  {headline}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    delay: 0.3,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="text-body-dark dark:text-slate-400 text-base font-normal leading-relaxed sm:text-lg"
                >
                  {description}
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  delay: 0.4,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <Link href={buttonLink}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="flex w-full sm:w-auto max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-cta-secondary text-white text-base font-bold leading-normal tracking-wide hover:bg-cta-secondary-hover transition-colors duration-300"
                  >
                    <span className="truncate">{buttonText}</span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              style={{ y }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: 0.2,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <div 
                className="w-full bg-center bg-no-repeat aspect-square sm:aspect-video lg:aspect-square bg-cover rounded-xl shadow-lg"
                role="img"
                aria-label={imageAlt}
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextWithImageSection;