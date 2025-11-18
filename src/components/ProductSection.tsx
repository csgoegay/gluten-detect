"use client";

import Link from "next/link";

interface ProductSectionProps {
  headline: string;
  description: string;
  features: string[];
  originalPrice: string;
  discountedPrice: string;
  discountPercentage: number;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  imageAlt: string;
  reverseLayout?: boolean;
}

const ProductSection = ({
  headline,
  description,
  features,
  originalPrice,
  discountedPrice,
  discountPercentage,
  buttonText,
  buttonLink,
  imageUrl,
  imageAlt,
  reverseLayout = false,
}: ProductSectionProps) => {
  return (
    <section className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6 md:px-8 lg:py-20">
      <div className="layout-content-container flex w-full max-w-5xl flex-col">
        <div className="@container">
          <div className={`flex flex-col gap-8 lg:items-center lg:gap-12 ${reverseLayout ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <div className="w-full flex-1">
              <div 
                className="aspect-[4/3] w-full rounded-xl bg-gray-100 bg-cover bg-center bg-no-repeat dark:bg-gray-800"
                role="img"
                aria-label={imageAlt}
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
            </div>
            <div className="flex flex-1 flex-col gap-6 sm:gap-8">
              <div className="flex flex-col gap-3 text-left">
                <h1 className="text-4xl font-black leading-tight tracking-tight text-primary dark:text-white sm:text-5xl">
                  {headline}
                </h1>
                <p className="text-base font-normal leading-relaxed text-primary/80 dark:text-gray-300">
                  {description}
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-base text-primary/90 dark:text-gray-200">
                    <span className="material-symbols-outlined text-accent-gold">check_circle</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col items-start gap-4">
                {/* Pricing Display */}
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-price-green dark:text-green-400">
                        {discountedPrice}
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                        -{discountPercentage}%
                      </span>
                    </div>
                    <span className="text-lg text-gray-500 line-through">
                      {originalPrice}
                    </span>
                  </div>
                </div>
                <Link href={buttonLink}>
                  <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-button-cta px-5 py-3 text-base font-bold leading-normal text-white transition-colors hover:bg-button-cta-hover sm:w-auto sm:px-8 sm:py-4">
                    <span className="truncate">{buttonText}</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;