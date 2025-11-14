"use client";

interface HeroSectionProps {
  backgroundImageUrl: string;
  mainHeadline: string;
  subHeadline: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSection = ({
  backgroundImageUrl,
  mainHeadline,
  subHeadline,
  buttonText,
  buttonLink,
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {mainHeadline}
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          {subHeadline}
        </p>
        <a
          href={buttonLink}
          className="inline-flex items-center justify-center px-8 py-4 bg-accent-gold text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {buttonText}
          <span className="material-symbols-outlined ml-2">arrow_forward</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;