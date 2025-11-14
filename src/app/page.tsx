import TopNavBar from "@/components/TopNavBar";
import { MadeWithDyad } from "@/components/made-with-dyad";

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Science', href: '#science' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Buy Now', href: '/buy' },
];

export default function Home() {
  return (
    <>
      <TopNavBar brandName="GlutenDetect" navLinks={navLinks} />
      <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-1 items-center sm:items-start">
          <h1 className="text-4xl font-bold text-center">Welcome to GlutenDetect</h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl">
            Your trusted companion for gluten detection and management. 
            Navigate through our site to learn more about how our technology works.
          </p>
        </main>
        <MadeWithDyad />
      </div>
    </>
  );
}