import React from 'react';
import Image from 'next/image';

const SocialProofSection = () => {
  const featuredIn = {
    title: "As Featured In",
    logos: [
      { src: "/placeholder-logo.svg", alt: "TechCrunch", width: 120, height: 40 },
      { src: "/placeholder-logo.svg", alt: "Forbes", width: 120, height: 40 },
      { src: "/placeholder-logo.svg", alt: "Wired", width: 120, height: 40 },
      { src: "/placeholder-logo.svg", alt: "The Verge", width: 120, height: 40 },
      { src: "/placeholder-logo.svg", alt: "Business Insider", width: 120, height: 40 }
    ]
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-8">
          {featuredIn.title}
        </h2>
        
        {featuredIn.logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="opacity-60 hover:opacity-100 transition-opacity"
          />
        ))}
      </div>
    </section>
  );
};

export default SocialProofSection;