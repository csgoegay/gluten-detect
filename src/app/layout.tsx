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
  title: "GlutenDetect - Teste Caseiro de Glúten",
  description: "O primeiro e único teste caseiro para monitorizar a sua dieta sem glúten e proteger a sua saúde.",
};

// Footer data
const footerLinkColumns = [
  {
    title: 'Navegar',
    links: [
      { label: 'Início', href: '/' },
      { label: 'Como Funciona', href: '/#how-it-works' },
      { label: 'Benefícios', href: '/#benefits' },
      { label: 'FAQ', href: '/#faq' },
    ],
  },
  {
    title: 'Apoio',
    links: [
      { label: 'Contacte-nos', href: '/contact' },
      { label: 'Envio e Devoluções', href: '/shipping' },
      { label: 'A Minha Conta', href: '/account' },
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
    <html lang="pt-PT" className={inter.variable}>
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
            brandDescription="Capacitar os doentes celíacos com as ferramentas para gerir com confiança a sua dieta sem glúten."
            linkColumns={footerLinkColumns}
            socialLinks={footerSocialLinks}
            copyrightText={`© ${new Date().getFullYear()} ${companyName}. Todos os Direitos Reservados.`}
            disclaimerText="Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Consulte o seu profissional de saúde para qualquer aconselhamento médico."
          />
        </div>
      </body>
    </html>
  );
}