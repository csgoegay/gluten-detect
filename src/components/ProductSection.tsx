"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

interface ProductSectionProps {
  headline: string;
  description: string;
  features: string[];
  originalPrice: string;
  discountedPrice: string;
  discountPercentage: number;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  imageAlt: string;
  reverseLayout?: boolean;
}

const ProductSection = ({
  headline,
  description,
  features,
  originalPrice,
  discountedPrice,
  discountPercentage,
  buttonText,
  buttonLink,
  imageUrl,
  imageAlt,
  reverseLayout = false,
}: ProductSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // For 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    const rotateXValue = (deltaY / rect.height) * -10;
    const rotateYValue = (deltaX / rect.width) * 10;
    
    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  };

  return (
    <section id="produto" className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6 md:px-8 lg:py-20">
      <div className="layout-content-container flex w-full max-w-5xl flex-col">
        <div className="@container">
          <div className={`flex flex-col gap-8 lg:items-center lg:gap-12 ${reverseLayout ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <div className="w-full flex-1">
              <motion.div 
                className="aspect-[4/3] w-full rounded-xl bg-gray-100 bg-cover bg-center bg-no-repeat dark:bg-gray-800 shadow-xl"
                role="img"
                aria-label={imageAlt}
                style={{ backgroundImage: `url(${imageUrl})` }}
                style={{
                  transform: `perspective(1000px) rotateX(${rotateX.get()}deg) rotateY(${rotateY.get()}deg) scale(${isHovered ? 1.05 : 1})`,
                  transition: "transform 0.1s ease-out"
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: reverseLayout ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="flex flex-1 flex-col gap-6 sm:gap-8"
            >
              <div className="flex flex-col gap-3 text-left">
                <h1 className="text-4xl font-black leading-tight tracking-tight text-primary dark:text-white sm:text-5xl">
                  {headline}
                </h1>
                <p className="text-base font-normal leading-relaxed text-primary/80 dark:text-gray-300">
                  {description}
                </p>
              </div>
              
              <ul className="flex flex-col gap-3">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-3 text-base text-primary/90 dark:text-gray-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      delay: 0.1 * index + 0.2,
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <motion.span 
                      className="material-symbols-outlined text-accent-gold text-2xl leading-none mt-0.5 shrink-0"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      check_circle
                    </motion.span>
                    <span className="leading-snug">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="flex flex-col items-start gap-4">
                {/* Pricing Display */}
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-price-green dark:text-green-400">
                        {discountedPrice}
                      </span>
                      <motion.span 
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ 
                          delay: 0.8,
                          type: "spring",
                          stiffness: 200,
                          damping: 10
                        }}
                      >
                        -{discountPercentage}%
                      </motion.span>
                    </div>
                    <span className="text-lg text-gray-500 line-through">
                      {originalPrice}
                    </span>
                  </div>
                </div>
                
                <Link href={buttonLink}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-button-cta px-5 py-3 text-base font-bold leading-normal text-white transition-colors hover:bg-button-cta-hover sm:w-auto sm:px-8 sm:py-4"
                  >
                    <span className="truncate">{buttonText}</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;