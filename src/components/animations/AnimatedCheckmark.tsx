"use client";

import { motion } from "framer-motion";

interface AnimatedCheckmarkProps {
  className?: string;
  size?: number;
}

export const AnimatedCheckmark = ({ className = "", size = 24 }: AnimatedCheckmarkProps) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8, 
          ease: "easeInOut",
          delay: 0.2
        }}
      />
    </motion.svg>
  );
};