"use client";

import { m } from "@/components/providers/MotionProvider";
import { staggerItemVariants } from "./animations/StaggerContainer";
import { EASINGS } from "@/utils/easing";
import { Droplet, FlaskConical, Pipette, ClipboardCheck } from "lucide-react";

// Icon mapping from Material Symbols to Lucide React
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'water_drop': Droplet,
  'science': FlaskConical,
  'colorize': Pipette,
  'fact_check': ClipboardCheck,
};

interface Step {
  iconName: string;
  title: string;
  description: React.ReactNode;
}

interface HowItWorksSectionProps {
  headline: string;
  subtitle?: string;
  steps: Step[];
}

const HowItWorksSection = ({ headline, subtitle, steps }: HowItWorksSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section id="how-it-works" className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-14 sm:py-17 md:py-20 bg-section-dark-blue">
      <div className="layout-content-container flex flex-col max-w-7xl flex-1">
        <div className="flex flex-col gap-10 lg:gap-12 px-4 py-0 @container">
          <div className="text-center">
            <m.h1
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
            </m.h1>
            {subtitle && (
              <m.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                  ease: EASINGS.smooth
                }}
                className="text-gray-300 text-lg font-normal leading-relaxed mt-4 max-w-2xl mx-auto"
              >
                {subtitle}
              </m.p>
            )}
          </div>

          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => {
              const IconComponent = iconMap[step.iconName] || Droplet; // Fallback to Droplet

              return (
                <m.div
                  key={index}
                  variants={staggerItemVariants}
                  whileHover={{
                    y: -10,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="flex flex-col gap-4 rounded-xl p-6 bg-white/10 backdrop-blur-sm cursor-pointer group"
                >
                  <div className="flex items-center justify-center h-16 w-16 mb-4 rounded-full bg-accent-gold/20 group-hover:bg-accent-gold/30 transition-colors duration-300">
                    <m.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-accent-gold"
                    >
                      <IconComponent className="w-8 h-8" />
                    </m.div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white text-xl font-bold leading-tight">{step.title}</h3>
                    <div className="text-gray-300 text-base font-normal leading-relaxed">
                      {step.description}
                    </div>
                  </div>
                </m.div>
              );
            })}
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;