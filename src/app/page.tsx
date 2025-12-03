"use client";

import HeroSection from "@/components/HeroSection";
import TopNavBar from "@/components/TopNavBar";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductSection from "@/components/ProductSection";
import TextWithImageSection from "@/components/TextWithImageSection";
import ValidationSection from "@/components/ValidationSection";
import SocialProofSection from "@/components/SocialProofSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const productData = {
  headline: "O Seu Kit Completo de Monitorização de Glúten em Casa",
  description: "Tudo o que precisa para monitorizar a sua dieta sem glúten com confiança. Este kit fornece uma forma simples, fiável e rápida de detetar glúten oculto no seu sistema.",
  features: [
    "Inclui 5 Testes Individuais",
    "Resultados em Menos de 15 Minutos",
    "Tecnologia Medicalmente Validada",
  ],
  originalPrice: "€50,00",
  discountedPrice: "€33,85",
  discountPercentage: 32,
  buttonText: "Adicionar ao Carrinho",
  buttonLink: "/cart/add?product_id=123",
  imageUrl: "/img/GlutenDetectTesteUrina.webp",
  imageAlt: "Imagem de alta qualidade da caixa do Kit Caseiro GlutenDetect, cassete de teste e outros conteúdos exibidos de forma organizada.",
};

const navLinks = [
  { label: "Como Funciona", href: "#how-it-works" },
  { label: "Benefícios", href: "#benefits" },
  { label: "Produto", href: "#produto" },
  { label: "FAQ", href: "#faq" },
];

const heroData = {
  backgroundImageUrl: "/img/upscalemedia-transformed.webp",
  mainHeadline: "Teste Caseiro de Glúten para Monitorizar a Sua Dieta",
  subHeadline: "O primeiro e único teste caseiro para monitorizar a sua dieta sem glúten e proteger a sua saúde.",
  buttonText: "Comprar Agora",
  buttonLink: "#produto",
};

const howItWorksData = {
  headline: "Como Funciona",
  subtitle: "Simples, rápido e fiável - obtenha resultados em minutos",
  steps: [
    {
      iconName: "science",
      title: "Recolha a Amostra",
      description: "Recolha uma pequena amostra de urina com o kit fornecido",
    },
    {
      iconName: "biotech",
      title: "Adicione o Reactivo",
      description: "Adicione algumas gotas do reactivo especializado à amostra",
    },
    {
      iconName: "timer",
      title: "Aguarde 15 Minutos",
      description: "Aguarde o tempo de desenvolvimento para obter resultados precisos",
    },
    {
      iconName: "check_circle",
      title: "Leia o Resultado",
      description: "Leia facilmente o resultado - positivo ou negativo para glúten",
    },
  ],
};

const benefitsData = {
  headline: "Benefícios do GlutenDetect",
  benefits: [
    {
      iconName: "verified",
      title: "Precisão Médica",
      description: "Validado clinicamente com mais de 95% de precisão na deteção de glúten",
    },
    {
      iconName: "speed",
      title: "Resultados Rápidos",
      description: "Obtenha resultados em menos de 15 minutos na comodidade da sua casa",
    },
    {
      iconName: "savings",
      title: "Económico",
      description: "Custo acessível com 5 testes por kit para monitorização contínua",
    },
    {
      iconName: "health_and_safety",
      title: "Segurança Alimentar",
      description: "Coma com confiança sabendo que a sua comida está realmente livre de glúten",
    },
  ],
};

const textWithImageData = {
  headline: "Proteja a Sua Saúde com Monitorização Regular",
  description: "A contaminação por glúten pode ocorrer mesmo com os cuidados mais rigorosos. O GlutenDetect permite-lhe monitorizar regularmente a sua exposição ao glúten, ajudando-o a identificar fontes ocultas de contaminação e a tomar decisões informadas sobre a sua dieta. Com testes regulares, pode manter o controlo sobre a sua saúde e evitar os sintomas desconfortáveis associados à exposição ao glúten.",
  buttonText: "Saber Mais",
  buttonLink: "#how-it-works",
  imageUrl: "/img/GlutenDetectTesteUrina.webp",
  imageAlt: "Pessoa a usar o kit de teste GlutenDetect em casa",
  reverseLayout: true,
};

const validationData = {
  headline: "Validado por Profissionais de Saúde",
  endorsements: {
    title: "Aprovado por",
    items: [
      {
        imageUrl: "/img/upscalemedia-transformed.webp",
        imageAlt: "Associação Celíaca",
        name: "Associação Celíaca Portuguesa",
      },
      {
        imageUrl: "/img/upscalemedia-transformed.webp",
        imageAlt: "Gastroenterologia",
        name: "Sociedade Portuguesa de Gastroenterologia",
      },
    ],
  },
  features: {
    title: "Por que confiar no GlutenDetect?",
    description: "O nosso teste é desenvolvido com base nas mais recentes pesquisas científicas e validado por especialistas em saúde.",
    items: [
      {
        iconName: "verified",
        text: "Validado clinicamente com mais de 95% de precisão",
      },
      {
        iconName: "science",
        text: "Baseado em tecnologia de imunoensaio avançada",
      },
      {
        iconName: "health_and_safety",
        text: "Seguro e fácil de usar em casa",
      },
      {
        iconName: "support_agent",
        text: "Suporte técnico disponível 24/7",
      },
    ],
  },
  buttonText: "Ver Estudos Clínicos",
  buttonLink: "#studies",
};

const socialProofData = {
  headline: "O Que Os Nossos Clientes Dizem",
  testimonials: [
    {
      rating: 5,
      quote: "Finalmente posso comer fora com confiança! O GlutenDetect mudou a minha vida. Já não me preocupo com contaminação cruzada.",
      author: "Ana Silva, Lisboa",
    },
    {
      rating: 5,
      quote: "Como mãe de uma criança celíaca, este kit dá-me tranquilidade. Fácil de usar e os resultados são sempre precisos.",
      author: "Maria Costa, Porto",
    },
    {
      rating: 4.5,
      quote: "Excelente produto! Uso regularmente para verificar se os restaurantes são realmente seguros para a minha condição.",
      author: "João Santos, Faro",
    },
    {
      rating: 5,
      quote: "A melhor compra que fiz para a minha saúde. Vale cada cêntimo pela paz de espírito que proporciona.",
      author: "Carolina Ferreira, Coimbra",
    },
    {
      rating: 5,
      quote: "Recomendo a todos os celíacos! Simples, rápido e extremamente fiável. Mudou completamente a forma como lido com a minha dieta.",
      author: "Pedro Martins, Braga",
    },
  ],
};

const faqData = {
  headline: "Perguntas Frequentes",
  faqItems: [
    {
      question: "Quão preciso é o teste GlutenDetect?",
      answer: "O GlutenDetect tem uma precisão superior a 95% na deteção de glúten, validada através de estudos clínicos independentes.",
    },
    {
      question: "Quanto tempo demoram os resultados?",
      answer: "Os resultados estão disponíveis em menos de 15 minutos após a recolha da amostra.",
    },
    {
      question: "É seguro usar em casa?",
      answer: "Sim, o GlutenDetect é completamente seguro para uso doméstico. Todos os materiais são estéreis e as instruções são claras e fáceis de seguir.",
    },
    {
      question: "Quantos testes vêm num kit?",
      answer: "Cada kit GlutenDetect inclui 5 testes individuais, permitindo monitorização regular durante vários meses.",
    },
    {
      question: "O teste deteta todos os tipos de glúten?",
      answer: "Sim, o teste deteta a presença de proteínas de glúten de todas as fontes comuns, incluindo trigo, cevada e centeio.",
    },
  ],
  contactText: "Ainda tem dúvidas? Estamos aqui para ajudar.",
  contactLinkText: "Contacte-nos",
  contactLinkHref: "/contact",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopNavBar navLinks={navLinks} />
      <HeroSection {...heroData} />
      <HowItWorksSection {...howItWorksData} />
      <BenefitsSection {...benefitsData} />
      <ProductSection {...productData} />
      <TextWithImageSection {...textWithImageData} />
      <ValidationSection {...validationData} />
      <SocialProofSection {...socialProofData} />
      <FaqSection {...faqData} />
    </main>
  );
}