"use client";

import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  const footerLinks = [
    {
      title: "Produto",
      links: [
        { name: "Benefícios", href: "#benefits" }, // Updated to match BenefitsSection ID
        { name: "Como Funciona", href: "#how-it-works" },
        { name: "Comprar", href: "#produto" },
        { name: "Perguntas Frequentes", href: "#faq" }, // Updated to match FaqSection ID
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Política de Privacidade", href: "/politicasetermos#privacy-policy" },
        { name: "Termos de Serviço", href: "/politicasetermos#terms-of-service" },
        { name: "Política de Cookies", href: "/politicasetermos#cookies-policy" },
      ],
    },
  ];

  return (
    <footer className="bg-section-dark-blue text-white">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Coluna 1: Marca & Newsletter */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-14 w-auto">
                  <img
                    src="/img/glutendetect.png"
                    alt="GlutenDetect"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                O seu companheiro de confiança para refeições seguras sem glúten.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Introduza o seu email"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-gold"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-accent-gold text-white rounded-md hover:bg-accent-gold/90 transition-colors"
                >
                  Subscrever
                </button>
              </form>
              {isSubscribed && (
                <p className="text-green-400 text-sm">Subscrito com sucesso!</p>
              )}
            </div>

            {/* Coluna 2: Ligações do Produto */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Produto</h3>
              <ul className="space-y-2">
                {footerLinks[0].links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3: Ligações Legais */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="space-y-2">
                {footerLinks[1].links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 GlutenDetect. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;