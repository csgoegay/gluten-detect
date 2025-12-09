"use client";

import { useState } from "react";
import { AnimatePresence, type Transition, motion } from "framer-motion";
import { PaginationDot } from "@/components/ui/pagination-dot";

interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    title: string;
  };
}

interface SocialProofSectionProps {
  headline: string;
  testimonials: Testimonial[];
}

const reviews: Testimonial[] = [
  {
    id: "review-01",
    quote: "Levo sempre um teste na mala quando viajo. A paz de espírito de ver um resultado negativo depois de jantar num restaurante novo não tem preço.",
    author: {
      name: "Miguel Santos",
      title: "Porto",
    },
  },
  {
    id: "review-02",
    quote: "Sempre que tenho dúvidas sobre um sintoma, faço o teste. É um alívio imediato saber se ingeri glúten ou não. É muito fácil de usar.",
    author: {
      name: "Ana Silva", 
      title: "Lisboa",
    },
  },
  {
    id: "review-03",
    quote: "Fundamental para festas de aniversário. Como mãe, uso para garantir que o meu filho não ingeriu glúten acidentalmente fora de casa.",
    author: {
      name: "Sofia Martins",
      title: "Coimbra",
    },
  },
];

const transition: Transition = {
  type: "spring",
  duration: 0.8,
};

const SocialProofSection = ({
  headline,
  testimonials = reviews,
}: SocialProofSectionProps) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  return (
    <section className="bg-white dark:bg-gray-900 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white text-center">
            {headline}
          </h1>
          
          <figure className="flex max-w-3xl flex-col gap-8 text-center">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.blockquote
                key={currentReviewIndex + "-quote"}
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    ...transition,
                    delay: 0.4,
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                  y: 20,
                  transition: {
                    ...transition,
                    delay: 0.06,
                  },
                }}
                className="origin-bottom text-lg md:text-xl font-medium text-balance text-primary dark:text-white will-change-transform"
              >
                "{testimonials[currentReviewIndex].quote}"
              </motion.blockquote>
              
              <motion.figcaption
                key={currentReviewIndex + "-author"}
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    ...transition,
                    delay: 0.5,
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                  y: 20,
                  transition,
                }}
                className="flex origin-bottom flex-col items-center gap-2 will-change-transform"
              >
                <div className="flex flex-col items-center gap-2">
                  <p className="text-lg font-semibold text-primary dark:text-white">
                    {testimonials[currentReviewIndex].author.name}
                  </p>
                  <cite className="text-md text-gray-600 dark:text-gray-400 not-italic">
                    {testimonials[currentReviewIndex].author.title}
                  </cite>
                </div>
              </motion.figcaption>
            </AnimatePresence>
          </figure>

          <PaginationDot 
            page={currentReviewIndex + 1} 
            total={testimonials.length} 
            size="lg" 
            onPageChange={(page) => setCurrentReviewIndex(page - 1)} 
          />
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;