"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedCheckmark } from "./animations/AnimatedCheckmark";

interface EndorsementItem {
  imageUrl: string;
  imageAlt: string;
  name: string;
}

interface FeatureItem {
  iconName: string;
  text: string;
}

interface ValidationSectionProps {
  headline: string;
  endorsements: {
    title: string;
    items: EndorsementItem[];
  };
  features: {
    title: string;
    description: string;
    items: FeatureItem[];
  };
  buttonText: string;
  buttonLink: string;
}

const ValidationSection = ({
  headline,
  endorsements,
  features,
  buttonText,
  buttonLink,
}: ValidationSectionProps) => {
  return (
    <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center gap-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="text-3xl font-black text-primary dark:text-white sm:text-4xl md:text-5xl"
          >
            {headline}
          </motion.h2>
        </div>
        <div className="@container mt-12 w-full lg:mt-16">
          <div className="grid grid-cols-1 gap-12 @[1024px]:grid-cols-2 @[1024px]:gap-16">
            {/* Endorsements Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: 0.2,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="flex flex-col items-center justify-center rounded-xl bg-white p-8 dark:bg-background-dark/50 @[1024px]:items-start @[1024px]:p-0 @[1024px]:bg-transparent @[1024px]:dark:bg-transparent"
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                {endorsements.title}
              </h3>
              <div className="mt-8 flex w-full flex-col items-center gap-8 @[1024px]:items-start">
                {endorsements.items.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      delay: 0.1 * index,
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white p-2 shadow-sm filter grayscale hover:grayscale-0 transition-all duration-500">
                      <Image
                        src="/img/Seec.png"
                        alt={item.imageAlt}
                        width={64}
                        height={64}
                        className="h-auto w-full object-contain"
                      />
                    </div>
                    <span className="text-left text-base font-semibold text-slate-700 dark:text-slate-300">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features Column */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: 0.4,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="flex flex-col justify-center gap-6 text-left"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                  {features.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  {features.description}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {features.items.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      delay: 0.1 * index + 0.6,
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <AnimatedCheckmark 
                      className="mt-1 text-primary dark:text-accent-sky flex-shrink-0"
                      size={20}
                    />
                    <p className="text-slate-600 dark:text-slate-400">{item.text}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                <Link href={buttonLink}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/90"
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

export default ValidationSection;