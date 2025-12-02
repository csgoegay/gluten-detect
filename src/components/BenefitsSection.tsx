"use client";

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
  return (
    <section id="benefits" className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-14 sm:py-17 md:py-20 bg-section-dark-blue">
      <div className="layout-content-container flex flex-col max-w-7xl flex-1">
        <div className="flex flex-col gap-10 lg:gap-12 px-4 py-0 @container">
          <h1 className="text-white tracking-tight text-center text-3xl font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-3xl mx-auto">
            {headline}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col gap-4 rounded-xl p-6 bg-white/10 backdrop-blur-sm">
                <div className="flex items-center justify-center h-16 w-16 mb-4 rounded-full bg-accent-gold/20">
                  <span className="material-symbols-outlined text-accent-gold text-2xl">
                    {benefit.iconName}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-bold leading-tight">{benefit.title}</h3>
                  <p className="text-gray-300 text-base font-normal leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;