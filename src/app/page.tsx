import TopNavBar from "@/components/TopNavBar";
import HeroSection from "@/components/HeroSection";
import TextWithImageSection from "@/components/TextWithImageSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ValidationSection from "@/components/ValidationSection";
import BenefitsSection from "@/components/BenefitsSection";
import FaqSection from "@/components/FaqSection";
import SocialProofSection from "@/components/SocialProofSection";
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

const benefitsData = [
  {
    iconName: 'search',
    title: 'Early Detection',
    description: 'Identify hidden gluten exposure before it causes long-term damage.',
  },
  {
    iconName: 'monitoring',
    title: 'Objective Monitoring',
    description: 'Get objective data on your diet\'s effectiveness.',
  },
  {
    iconName: 'health_and_safety',
    title: 'Health Protection',
    description: 'Prevent long-term complications associated with celiac disease.',
  },
  {
    iconName: 'sentiment_satisfied',
    title: 'Peace of Mind',
    description: 'Live with confidence knowing your diet is truly working.',
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

const testimonialsData = [
  { 
    rating: 5, 
    quote: "This gave me the peace of mind I was desperately looking for. So easy to use and the results are fast. Highly recommend!", 
    author: "Sarah K." 
  },
  { 
    rating: 5, 
    quote: "Finally found the answers I needed. GlutenDetect was a game-changer for my diet and well-being.", 
    author: "Michael P." 
  },
  { 
    rating: 4.5, 
    quote: "I was skeptical at first, but this product is incredibly accurate. It's a must-have for anyone with gluten sensitivity.", 
    author: "Jessica L." 
  },
  { 
    rating: 5, 
    quote: "As a parent, this has been an invaluable tool for managing my child's diet. Simple, reliable, and trustworthy.", 
    author: "David R." 
  },
  { 
    rating: 5, 
    quote: "The clarity this test provides is unmatched. No more guessing about hidden gluten in my food.", 
    author: "Emily T." 
  },
  { 
    rating: 4.5, 
    quote: "Worth every penny. The confidence I have in my diet now is priceless.", 
    author: "Robert M." 
  },
];

const featuredInData = {
  title: "As Featured In",
  logos: [
    { 
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoLrzlwfNS1ra7NhtAuc2BIxlTjSZBpbNIA6rQLq7b8O3hvSwec_TWbJC6_TQwvTiFc87O9t21yYokBzuCcGJT-tldk_iapnop3l1lqCrB3lr5vGLxBPYEU_t97WQQ5HBzfO49jI0tfRCtvQubjr7WQhXq6w_mKTscrLaXJWAsoCf4LvF1i8SwsbdCJ99dIYLvvLaPV_5wQtYGFyHnuJftF3IudBwi5dVQCcTGC-ji0AxQDWlb57ZxEyVcfsf4nqqteKg3MDaFfC8', 
      alt: 'Forbes Logo' 
    },
    { 
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBR_rY1e02n5i2eOaSYFHlQio3f6ilUanpgt3mc8ko62CL6LXj53tdrG8Ojwf3rAAWU-NkLelMqU_Oi4qO9HDVBnfG2w5s8l0DkohFA75qqw2fOLl1kUif76Lvl757WwmUc9u1UNP9uOpxAVDsu1oNZpjcuSkLoeU-4HybTs_B5PeH10pNg73ftPNeE5hEIBk_A7xFNpI7eSwdjzYXmUtex7PxqOxdyMecZD50K5uiJjY9sMhSQjGyoXPYSfm4gRNiyzE6ieLL4OrU', 
      alt: 'Medical News Today Logo' 
    },
    { 
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoLrzlwfNS1ra7NhtAuc2BIxlTjSZBpbNIA6rQLq7b8O3hvSwec_TWbJC6_TQwvTiFc87O9t21yYokBzuCcGJT-tldk_iapnop3l1lqCrB3lr5vGLxBPYEU_t97WQQ5HBzfO49jI0tfRCtvQubjr7WQhXq6w_mKTscrLaXJWAsoCf4LvF1i8SwsbdCJ99dIYLvvLaPV_5wQtYGFyHnuJftF3IudBwi5dVQCcTGC-ji0AxQDWlb57ZxEyVcfsf4nqqteKg3MDaFfC8', 
      alt: 'Healthline Logo' 
    },
    { 
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoLrzlwfNS1ra7NhtAuc2BIxlTjSZBpbNIA6rQLq7b8O3hvSwec_TWbJC6_TQwvTiFc87O9t21yYokBzuCcGJT-tldk_iapnop3l1lqCrB3lr5vGLxBPYEU_t97WQQ5HBzfO49jI0tfRCtvQubjr7WQhXq6w_mKTscrLaXJWAsoCf4LvF1i8SwsbdCJ99dIYLvvLaPV_5wQtYGFyHnuJftF3IudBwi5dVQCcTGC-ji0AxQDWlb57ZxEyVcfsf4nqqteKg3MDaFfC8', 
      alt: 'WebMD Logo' 
    },
    { 
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBR_rY1e02n5i2eOaSYFHlQio3f6ilUanpgt3mc8ko62CL6LXj53tdrG8Ojwf3rAAWU-NkLelMqU_Oi4qO9HDVBnfG2w5s8l0DkohFA75qqw2fOLl1kUif76Lvl757WwmUc9u1UNP9uOpxAVDsu1oNZpjcuSkLoeU-4HybTs_B5PeH10pNg73ftPNeE5hEIBk_A7xFNpI7eSwdjzYXmUtex7PxqOxdyMecZD50K5uiJjY9sMhSQjGyoXPYSfm4gRNiyzE6ieLL4OrU', 
      alt: 'Celiac Foundation Logo' 
    },
  ]
};

const faqData = [
  {
    question: 'How accurate is the test?',
    answer: 'Our GlutenDetect home-testing kit is highly accurate, utilizing advanced immunochromatographic technology to detect gluten peptides with over 99% specificity and sensitivity, ensuring reliable results you can trust.',
  },
  {
    question: 'How often should I test myself?',
    answer: 'The frequency of testing depends on your lifestyle and dietary habits. For ongoing monitoring, testing after potential gluten exposure or on a regular schedule (e.g., monthly) can help ensure you are maintaining a gluten-free diet.',
  },
  {
    question: 'Which test is better, urine or stool?',
    answer: 'Both urine and stool tests are effective. Urine tests are ideal for identifying recent exposure (within 24-48 hours), while stool tests can detect gluten consumed over a longer period (up to several days).',
  },
  {
    question: 'Do I need a prescription?',
    answer: 'No, a prescription is not required to purchase the GlutenDetect home-testing kit. You can order it directly from our website.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to many countries worldwide. To see if we ship to your location, please proceed to checkout and enter your address.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopNavBar brandName="GlutenDetect" navLinks={navLinks} />
      <main className="flex-grow">
        <HeroSection
          backgroundImageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDoLrzlwfNS1ra7NhtAuc2BIxlTjSZBpbNIA6rQLq7b8O3hvSwec_TWbJC6_TQwvTiFc87O9t21yYokBzuCcGJT-tldk_iapnop3l1lqCrB3lr5vGLxBPYEU_t97WQQ5HBzfO49jI0tfRCtvQubjr7WQhXq6w_mKTscrLaXJWAsoCf4LvF1i8SwsbdCJ99dIYLvvLaPV_5wQtYGFyHnuJftF3IudBwi5dVQCcTGC-ji0AxQDWlb57ZxEyVcfsf4nqqteKg3MDaFfC8"
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
        <BenefitsSection
          headline="Take Control of Your Gluten-Free Diet"
          benefits={benefitsData}
        />
        <FaqSection
          id="faq"
          headline="Have Questions? We Have Answers."
          faqItems={faqData}
          contactText="Still have questions?"
          contactLinkText="Contact our support team."
          contactLinkHref="/contact"
        />
        <SocialProofSection
          headline="Join Thousands of Confident Users"
          testimonials={testimonialsData}
          featuredIn={featuredInData}
        />
      </main>
      <MadeWithDyad />
    </div>
  );
}