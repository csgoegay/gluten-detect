import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import GoToTopButton from "@/components/GoToTopButton";
import MotionProvider from "@/components/providers/MotionProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GlutenDetect - Teste Caseiro de Glúten",
  description: "O primeiro e único teste caseiro para monitorizar a sua dieta sem glúten e proteger a sua saúde.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={inter.variable}>
      <head>
        {/* Google Fonts removed - migrating to Lucide React icons */}
      </head>
      <body className="bg-background-light dark:bg-background-dark font-display antialiased">
        <MotionProvider>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <GoToTopButton />
        </MotionProvider>
      </body>
    </html>
  );
}