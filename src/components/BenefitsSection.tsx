"use client";

import { motion } from "framer-motion";
import { staggerItemVariants } from "./animations/StaggerContainer";
import { EASINGS } from "@/utils/easing";

interface Benefit {
  iconName: string;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  headline: string;
  benefits: Benefit[];
}

const BenefitsSection = ({ headline, benefits }: BenefitsSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section id="benefits" className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-14 sm:py-17 md:py-20 bg-section-dark-blue">
      <div className="layout-content-container flex flex-col max-w-7xl flex-1">
        <div className="flex flex-col gap-10 lg:gap-12 px-4 py-0 @container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              ease: EASINGS.smooth
            }}
            className="text-white tracking-tight text-center text-3xl font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-3xl mx-auto"
          >
            {headline}
          </motion.h1>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={staggerItemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="flex flex-col gap-4 rounded-xl p-6 bg-white/10 backdrop-blur-sm cursor-pointer group hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center justify-center h-16 w-16 mb-4 rounded-full bg-accent-gold/20 group-hover:bg-accent-gold/30 transition-colors duration-300">
                  <motion.span 
                    className="material-symbols-outlined text-accent-gold text-2xl"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {benefit.iconName}
                  </motion.span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-bold leading-tight">{benefit.title}</h3>
                  <p className="text-gray-300 text-base font-normal leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;