"use client";

import Link from "next/link";

interface HeroSectionProps {
  backgroundImageUrl: string;
  notificationText: string;
  mainHeadline: string;
  subHeadline: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSection = ({
  backgroundImageUrl,
  notificationText,
  mainHeadline,
  subHeadline,
  buttonText,
  buttonLink,
}: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center font-display text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-6 py-20 text-center">
        <div className="absolute top-8 left-8 sm:top-12 sm:left-12">
          <div className="animate-pulse flex max-w-xs items-center gap-3 rounded-lg bg-white/10 backdrop-blur-sm p-3 border border-white/20">
            <span className="material-symbols-outlined text-yellow-300">warning</span>
            <p className="text-left text-sm font-medium text-white">{notificationText}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight" style={{ color: '#ffffff' }}>
            {mainHeadline}
          </h1>
          <h2 className="text-lg md:text-xl font-normal text-white/90 max-w-2xl">
            {subHeadline}
          </h2>
          <Link href={buttonLink}>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 mt-4 text-base font-bold leading-normal tracking-wide transition-transform hover:scale-105 bg-button-cta text-white">
              <span className="truncate">{buttonText}</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;