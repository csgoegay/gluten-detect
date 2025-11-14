"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  return (
    <section className="px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-40 flex flex-1 justify-center py-10 md:py-20">
      <div className="layout-content-container flex flex-col max-w-7xl w-full flex-1">
        <div className="@container">
          <div className={`flex flex-col gap-10 lg:gap-16 lg:items-center ${reverseLayout ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <div
              ref={useScrollAnimation({ type: 'fade-in-up', config: { duration: 500, delay: 0, easing: 'ease-out' } })}
              className="flex flex-col gap-6 lg:gap-8 lg:w-1/2"
            >
              <div className="flex flex-col gap-4 text-left">
                <h1 className="text-heading-dark dark:text-slate-200 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  {headline}
                </h1>
                <p className="text-body-dark dark:text-slate-400 text-base font-normal leading-relaxed sm:text-lg">
                  {description}
                </p>
              </div>
              <Link href={buttonLink}>
                <button className="flex w-full sm:w-auto max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-cta-secondary text-white text-base font-bold leading-normal tracking-wide hover:bg-cta-secondary-hover transition-colors duration-300">
                  <span className="truncate">{buttonText}</span>
                </button>
              </Link>
            </div>
            <div
              ref={useScrollAnimation({ type: 'scale-in', config: { duration: 500, delay: 100, easing: 'ease-out' } })}
              className="lg:w-1/2"
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-square sm:aspect-video lg:aspect-square bg-cover rounded-xl"
                role="img"
                aria-label={imageAlt}
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextWithImageSection;