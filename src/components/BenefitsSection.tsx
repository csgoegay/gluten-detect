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
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-16 sm:py-20 md:py-24 bg-section-dark-blue">
      <div className="layout-content-container flex flex-col max-w-7xl flex-1">
        <div className="flex flex-col gap-10 lg:gap-12 px-4 py-10 @container">
          <h1 className="text-white tracking-tight text-center text-3xl font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-3xl mx-auto">
            {headline}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-0">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col flex-1 gap-4 rounded-lg bg-white/5 p-6 text-center sm:text-left transition-transform hover:scale-105 hover:bg-white/10">
                <span className="material-symbols-outlined mx-auto sm:mx-0 text-[36px] text-accent-gold">
                  {benefit.iconName}
                </span>
                <div className="flex flex-col gap-1">
                  <h2 className="text-white text-lg font-bold leading-tight">{benefit.title}</h2>
                  <p className="text-gray-300 text-sm font-normal leading-normal">{benefit.description}</p>
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