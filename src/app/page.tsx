import TopNavBar from "@/components/TopNavBar";
import HeroSection from "@/components/HeroSection";
import { MadeWithDyad } from "@/components/made-with-dyad";

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Science', href: '#science' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Buy Now', href: '/buy' },
];

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
      </main>
      <MadeWithDyad />
    </div>
  );
}