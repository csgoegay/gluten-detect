"use client";

interface Step {
  iconName: string;
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  headline: string;
  steps: Step[];
}

const HowItWorksSection = ({ headline, steps }: HowItWorksSectionProps) => {
  return (
    <section className="flex flex-1 justify-center py-16 sm:py-24 bg-section-dark-blue">
      <div className="layout-content-container flex flex-col w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-white tracking-tight text-3xl sm:text-4xl font-bold leading-tight text-center pb-10 sm:pb-16">
          {headline}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-1 gap-4 rounded-xl p-[1.1rem] flex-col items-center text-center">
              <div className="flex items-center justify-center h-[4.4rem] w-[4.4rem] mb-[1.1rem] rounded-full bg-white/10">
                <span className="material-symbols-outlined text-accent-gold text-[1.1rem]">{step.iconName}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-white text-[1.1rem] font-bold leading-tight">{step.title}</h2>
                <p className="text-gray-300 text-[1.1rem] font-normal leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;