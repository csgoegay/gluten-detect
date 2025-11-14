import TopNavBar from "@/components/TopNavBar";
import HeroSection from "@/components/HeroSection";
import TextWithImageSection from "@/components/TextWithImageSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ValidationSection from "@/components/ValidationSection";
import { MadeWithDyad } from "@/components/made-with-dyad";

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Science', href: '#science' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Buy Now', href: '/buy' },
];

const processSteps = [
  {
    iconName: 'science',
    title: '1. Collect Sample',
    description: 'Easily collect a urine or stool sample in the comfort of your home.',
  },
  {
    iconName: 'colorize',
    title: '2. Perform the Test',
    description: 'Apply the sample to the test strip, just like a pregnancy test.',
  },
  {
    iconName: 'timer',
    title: '3. Get Results',
    description: 'Read the clear, reliable results in just 15 minutes.',
  },
];

const endorsementData = {
  title: 'Endorsed By',
  items: [
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoLrzlwfNS1ra7NhtAuc2BIxlTjSZBpbNIA6rQLq7b8O3hvSwec_TWbJC6_TQwvTiFc87O9t21yYokBzuCcGJT-tldk_iapnop3l1lqCrB3lr5vGLxBPYEU_t97WQQ5HBzfO49jI0tfRCtvQubjr7WQhXq6w_mKTscrLaXJWAsoCf4LvF1i8SwsbdCJ99dIYLvvLaPV_5wQtYGFyHnuJftF3IudBwi5dVQCcTGC-ji0AxQDWlb57ZxEyVcfsf4nqqteKg3MDaFfC8',
      imageAlt: 'Spanish Society of Celiac Disease Logo',
      name: 'Spanish Society of Celiac Disease (SEEC)',
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBR_rY1e02n5i2eOaSYFHlQio3f6ilUanpgt3mc8ko62CL6LXj53tdrG8Ojwf3rAAWU-NkLelMqU_Oi4qO9HDVBnfG2w5s8l0DkohFA75qqw2fOLl1kUif76Lvl757WwmUc9u1UNP9uOpxAVDsu1oNZpjcuSkLoeU-4HybTs_B5PeH10pNg73ftPNeE5hEIBk_A7xFNpI7eSwdjzYXmUtex7PxqOxdyMecZD50K5uiJjY9sMhSQjGyoXPYSfm4gRNiyzE6ieLL4OrU',
      imageAlt: 'Celiac Disease Association of Aragon Logo',
      name: 'Celiac Disease Association of Aragon',
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoLrzlwfNS1ra7NhtAuc2BIxlTjSZBpbNIA6rQLq7b8O3hvSwec_TWbJC6_TQwvTiFc87O9t21yYokBzuCcGJT-tldk_iapnop3l1lqCrB3lr5vGLxBPYEU_t97WQQ5HBzfO49jI0tfRCtvQubjr7WQhXq6w_mKTscrLaXJWAsoCf4LvF1i8SwsbdCJ99dIYLvvLaPV_5wQtYGFyHnuJftF3IudBwi5dVQCcTGC-ji0AxQDWlb57ZxEyVcfsf4nqqteKg3MDaFfC8',
      imageAlt: 'University of Vigo Logo',
      name: 'University of Vigo Research Group',
    },
  ],
};

const featureData = {
  title: 'Based on Patented GIP Detection Technology',
  description: 'GlutenDetect is based on a patented technology that detects gluten immunogenic peptides (GIP) in urine and stool. Its efficacy is supported by multiple peer-reviewed clinical studies, ensuring reliable and accurate results for monitoring a gluten-free diet.',
  items: [
    { iconName: 'check_circle', text: 'Patented technology for non-invasive gluten detection.' },
    { iconName: 'science', text: 'Validated through extensive, peer-reviewed clinical trials.' },
    { iconName: 'verified_user', text: 'Recommended by celiac disease experts and associations.' },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopNavBar brandName="GlutenDetect" navLinks={navLinks} />
      <main className="flex-grow">
        <HeroSection
          backgroundImageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDoLrzlwfNS1ra7NhtAuc2BIxlTjSZBpbNIA6rQLq7b8O3hvSwec_TWbJC6_TQwvTiFc87O9t21yYokBzuCcGJT-tldk_iapnop3l1lqCrB3lr5vGLxBPYEU_t97WQQ5HBzfO49jI0tfRCtvQubjr7WQhXq6w_mKTscrLaXJWAsoCf4LvF1i8SwsbdCJ99dIYLvvLaPV_5wQtYGFyHnuJftF3IudBwi5dVQCcTGC-ji0AxQDWlb57ZxEyVcfsf4nqqteKg3MDaFfC8"
          notificationText="70% of celiac patients have intestinal damage WITHOUT symptoms."
          mainHeadline="Are you sure your gluten-free diet is really working?"
          subHeadline="The first and only home test to monitor your gluten-free diet compliance."
          buttonText="Learn How It Works"
          buttonLink="#how-it-works"
        />
        <TextWithImageSection
          headline="The Silent Damage of Inadvertent Gluten Exposure"
          description="Studies show that 60-88% of celiac patients on a gluten-free diet continue to consume gluten without realizing it, leading to asymptomatic intestinal damage. Awareness and monitoring are key to preventing long-term complications."
          buttonText="Learn How It Works"
          buttonLink="#how-it-works"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBR_rY1e02n5i2eOaSYFHlQio3f6ilUanpgt3mc8ko62CL6LXj53tdrG8Ojwf3rAAWU-NkLelMqU_Oi4qO9HDVBnfG2w5s8l0DkohFA75qqw2fOLl1kUif76Lvl757WwmUc9u1UNP9uOpxAVDsu1oNZpjcuSkLoeU-4HybTs_B5PeH10pNg73ftPNeE5hEIBk_A7xFNpI7eSwdjzYXmUtex7PxqOxdyMecZD50K5uiJjY9sMhSQjGyoXPYSfm4gRNiyzE6ieLL4OrU"
          imageAlt="A thoughtful person carefully reading the ingredients label on a food product in a bright, modern kitchen."
        />
        <HowItWorksSection
          headline="A Simple 3-Step Process to Peace of Mind"
          steps={processSteps}
        />
        <ValidationSection
          headline="Medically Validated and Recommended by Experts"
          endorsements={endorsementData}
          features={featureData}
          buttonText="View Clinical Studies"
          buttonLink="/studies"
        />
      </main>
      <MadeWithDyad />
    </div>
  );
}