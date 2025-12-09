"use client";

import { motion } from "framer-motion";
import { EASINGS } from "@/utils/easing";

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  initialDelay?: number;
}

export const StaggerContainer = ({ 
  children, 
  staggerDelay = 0.2,
  className = "",
  initialDelay = 0
}: StaggerContainerProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: initialDelay,
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: EASINGS.smooth,
      duration: 0.5
    }
  },
};