import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GlutenDetect - Home Gluten Test",
  description: "The first and only home test to monitor your gluten-free diet compliance.",
};

// Footer data
const footerLinkColumns = [
  {
    title: 'Navigate',
    links: [
      { label: 'Home', href: '/' },
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'Benefits', href: '/#benefits' },
      { label: 'FAQ', href: '/#faq' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Shipping & Returns', href: '/shipping' },
      { label: 'My Account', href: '/account' },
    ],
  },
];

const footerSocialLinks = [
  { name: 'Facebook', href: '#', icon: <FacebookIcon /> },
  { name: 'Instagram', href: '#', icon: <InstagramIcon /> },
  { name: 'Twitter', href: '#', icon: <TwitterIcon /> },
];

const companyName = "GlutenDetect";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark font-display antialiased">
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Footer
            brandName={companyName}
            brandDescription="Empowering celiac patients with the tools to confidently manage their gluten-free diet."
            linkColumns={footerLinkColumns}
            socialLinks={footerSocialLinks}
            copyrightText={`© ${new Date().getFullYear()} ${companyName}. All Rights Reserved.`}
            disclaimerText="This product is not intended to diagnose, treat, cure, or prevent any disease. Consult with your healthcare provider for any medical advice."
          />
        </div>
      </body>
    </html>
  );
}