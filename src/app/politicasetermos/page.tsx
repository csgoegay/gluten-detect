"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, FileText, Cookie, Menu, X, ChevronRight, ArrowUp } from "lucide-react";
import DOMPurify from "dompurify";
import TopNavBar from "@/components/TopNavBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Navigation item type
interface NavItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  subsections?: { id: string; title: string }[];
}

// Legal content data
const legalContent = {
  privacyPolicy: {
    title: "Política de Privacidade",
    subtitle: "Como recolhemos, utilizamos e protegemos as suas informações pessoais",
    lastUpdated: "15 de Dezembro de 2024",
    sections: [
      {
        id: "gdpr-introduction",
        title: "Introdução ao Regulamento Geral de Proteção de Dados",
        content: `
          <p class="mb-4">A partir de 25 de maio de 2018 é aplicável em todo o espaço da União Europeia o Regulamento (UE) 2016/679 ("Regulamento Geral de Proteção de Dados Pessoais"). O Regulamento Geral de Proteção de Dados Pessoais introduz alterações muito significativas no que diz respeito ao reforço dos direitos dos titulares dos dados pessoais e no que diz respeito às medidas que devem ser adotadas pelas empresas e entidades públicas para proteção dos dados pessoais.</p>
          
          <p class="mb-4">A presente declaração de privacidade e tratamento de dados pessoais é um compromisso da Dietadvance, pessoa colectiva número 517593734, com sede em Rua das Figueiras Vila Pateo, LA – 2430-187 Marinha Grande, proprietária do site www.dietadvance.pt</p>
          
          <p class="mb-4">Ao disponibilizar os seus dados pessoais à Dietadvance o utilizador reconhece e consente que os mesmos sejam processados de acordo com os termos desta declaração.</p>
          
          <p class="mb-4">O uso do site www.dietadvance.pt pressupõe a aceitação da nossa politica de privacidade.</p>
          
          <p class="mb-4">A Dietadvance reserva-se ao direito de alterar a política de privacidade sem aviso prévio, assim sendo, solicitamos ao utilizador que reveja periodicamente a nossa política de privacidade e proteção de dados, para se manter informado sobre como ajudar a proteger os dados pessoais que recolhemos.</p>
        `
      },
      {
        id: "data-purposes",
        title: "Para que finalidades tratamos os seus Dados Pessoais?",
        content: `
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Identificação (Nome)</strong></li>
            <li><strong>Contacto (E-mail – telemóvel – morada)</strong></li>
            <li><strong>Gestão de cliente</strong></li>
            <li><strong>Fichas de Identificação pessoal</strong></li>
            <li><strong>Gestão de contactos, informações ou pedidos</strong></li>
            <li><strong>Gestão de reclamações</strong></li>
            <li><strong>Divulgação de ações – Envio de informação útil, comercial, marketing e promoções</strong></li>
            <li><strong>Gestão de faturação, cobrança e pagamento</strong></li>
            <li><strong>Resposta a solicitações de pedidos de informação</strong></li>
          </ul>
        `
      },
      {
        id: "data-collection",
        title: "Como recolhemos os seus dados pessoais?",
        content: `
          <p class="mb-4">Recolhemos os dados pessoais mediante o seu consentimento quando adquire serviços ou produtos Dietadvance. Essa recolha pode ser feita oralmente, por escrito ou através do nosso website.</p>
          
          <p class="mb-4">Adicionalmente, com o seu consentimento, podemos enviar informações comerciais sobre produtos e serviços da Dietadvance e dos seus Parceiros.</p>
          
          <p class="mb-4">Os dados pessoais que fornece não serão partilhados com terceiros responsáveis por tratamentos dos dados sem a sua permissão.</p>
          
          <p class="mb-4">A Dietadvance poderá contratar outras empresas para fornecerem serviços em nome daquela, como, por exemplo, alojamento do Site, correio electrónico, resposta a questões de utilizadores sobre os serviços, envio de informações sobre novos serviços e produtos, ofertas especiais. São fornecidas a estas empresas apenas os dados pessoais necessários para a prestação do serviço em causa. As empresas estão obrigadas a manter a confidencialidade das informações e estão proibidas de utilizar as informações para outros fins, actuando como subcontratantes da Dietadvance.</p>
        `
      },
      {
        id: "data-security",
        title: "Segurança dos dados",
        content: `
          <p class="mb-4">A Dietadvance está empenhada em proteger a segurança dos seus dados pessoais.</p>
          
          <p class="mb-4">Utilizamos uma variedade de tecnologias e procedimentos de segurança para ajudar a proteger os seus dados pessoais contra o acesso, a utilização ou a divulgação não autorizadas.</p>
          
          <p class="mb-4">Por exemplo, armazenamos os dados pessoais fornecidos em computadores e servidores com acesso limitado, localizados em instalações controladas.</p>
        `
      },
      {
        id: "data-protection-rights",
        title: "Direitos de proteção de dados e Direitos dos clientes",
        content: `
          <h4 class="font-semibold text-lg mb-2 mt-6">– Direito de acesso</h4>
          <p class="mb-4">Direito a obter a confirmação de quais são os seus dados pessoais que são tratados e informação sobre os mesmos, como por exemplo, quais as finalidades do tratamento, quais os prazos de conservação, entre outros. Direito a ver/ouvir ou obter cópia, por exemplo das faturas ou dos acordos escritos em que é interveniente.</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">– Direito de retificação</h4>
          <p class="mb-4">Direito a solicitar a retificação dos seus dados pessoais que se encontrem inexatos ou solicitar que os dados pessoais incompletos sejam completados, como por exemplo a morada, o email, os contactos telefónicos, ou outros.</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">– Direito a conhecer o anulamento</h4>
          <p class="mb-4">Direito a obter o anulamento dos seus dados pessoais, desde que não se verifiquem fundamentos válidos para a sua conservação, como por exemplo, os casos em que a Dietadvance tem de conservar os dados por exigência de entidades oficiais.</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">– Direito à portabilidade</h4>
          <p class="mb-4">Direito da receber os dados que nos forneceu em formato digital de uso corrente e de leitura automática ou de solicitar a transmissão direta dos seus dados para outra entidade que passe a ser o novo responsável pelos seus dados pessoais.</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">– Direito a retirar o consentimento ou direito de oposição</h4>
          <p class="mb-4">Direito a se opor ou retirar o seu consentimento, a qualquer momento a um tratamento de dados, como por exemplo, no caso de tratamento de dados para fins de marketing, desde que não se verifiquem interesses legítimos que prevalecem sobre os seus interesses, direitos e liberdades.</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">– Direito de limitação</h4>
          <p class="mb-4">Direito a solicitar a limitação do tratamento dos seus dados pessoais, sob a forma de:</p>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Suspensão do tratamento;</li>
            <li>Limitação do âmbito do tratamento a certas categorias de dados ou finalidades de tratamento.</li>
          </ul>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">– Perfil e decisões automatizadas</h4>
          <p class="mb-4">A Dietadvance pode traçar o perfil dos clientes com base, por exemplo, nas suas preferências, interesses pessoais, utilização de serviço, localização, entre outros indicadores, nomeadamente para prestar serviços, aumentar a qualidade e a experiência dos produtos e serviços, adequar comunicações de marketing e de divulgação de ações. No entanto, esse tratamento deve estar baseado no consentimento do titular.</p>
          
          <p class="mb-4">Conforme descrito infra, pode aceder aos seus dados pessoais e pedir a sua atualização ou eliminação, nos termos da lei, dirigindo um pedido para: geral@dietadvance.pt</p>
        `
      },
      {
        id: "site-usage",
        title: "Uso do site",
        content: `
          <p class="mb-4">Este site deve ser usado exclusivamente para seu uso pessoal. É proibida a sua modificação, reprodução, duplicação, cópia, distribuição, venda, revenda e outras formas de exploração, com fins comerciais ou não.</p>
          
          <p class="mb-4">Todos os direitos de propriedade intelectual sobre o Site e os seus conteúdos pertencem à Dietadvance.</p>
          
          <p class="mb-4">A Dietadvance concede-lhe apenas uma licença limitada, não exclusiva e não transferível, para visualizar ou imprimir o conteúdo do Site para uso exclusivamente pessoal, e não comercial.</p>
          
          <p class="mb-4">O utilizador compromete-se a não utilizar este Site para fins ilegais ou proibidos.</p>
        `
      }
    ]
  },
  termsOfService: {
    title: "Termos e Condições Gerais de Venda",
    subtitle: "As condições que regem a compra de produtos no nosso website",
    lastUpdated: "15 de Dezembro de 2024",
    sections: [
      {
        id: "general-information",
        title: "1. Informação Geral",
        content: `
          <p class="mb-4">A titularidade deste website é detida por: DietAdvance, com sede em Campos do Lumiar IAPMEI Edf. F, Estrada do Lumiar, 1649-038 Lisboa, e NIF [INSERIR NIF].</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Dados de Contacto:</h4>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Email:</strong> geral@dietadvance.pt</li>
            <li><strong>Telefone:</strong> +351 915 721 069 (Chamada para a rede móvel nacional)</li>
            <li><strong>Horário de Atendimento:</strong> Segunda a Sexta, das 9:30h às 18:30h.</li>
          </ul>
          
          <p class="mb-4">Este documento regula as condições de uso deste Website e a compra de produtos no mesmo (doravante "Condições"). A atividade principal desenvolvida através do Website consiste na revenda de produtos de diagnóstico rápido para a deteção de glúten (GlutenDetect).</p>
          
          <p class="mb-4">Ao utilizar este Website ou ao realizar uma encomenda, o Utilizador consente em ficar vinculado por estas Condições e pela nossa Política de Privacidade.</p>
        `
      },
      {
        id: "user",
        title: "2. O Utilizador",
        content: `
          <p class="mb-4">O acesso e uso do Website confere a condição de Utilizador. O Utilizador declara ser maior de 18 anos e ter capacidade legal para celebrar contratos. O Utilizador compromete-se a:</p>
          
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Fazer uso deste Website apenas para consultas ou encomendas legalmente válidas.</li>
            <li>Não realizar encomendas falsas ou fraudulentas.</li>
            <li>Facilitar dados de contacto (email, morada, telefone) verdadeiros e exatos.</li>
          </ul>
        `
      },
      {
        id: "purchase-process",
        title: "3. Processo de Compra",
        content: `
          <p class="mb-4">Para realizar uma encomenda, o Utilizador deve seguir o procedimento de compra online: selecionar o produto (Teste de Urina GlutenDetect), adicionar ao carrinho e completar os passos de pagamento. Após a conclusão, o Utilizador receberá um email de "Confirmação de Encomenda". Posteriormente, será informado via email quando a encomenda for expedida ("Confirmação de Envio").</p>
          
          <p class="mb-4">Ao finalizar a compra, o Utilizador aceita que a fatura seja emitida em formato eletrónico. Caso deseje a fatura em papel, poderá solicitá-la através do email geral@dietadvance.pt.</p>
        `
      },
      {
        id: "product-availability",
        title: "4. Disponibilidade dos Produtos",
        content: `
          <p class="mb-4">Todas as encomendas estão sujeitas à disponibilidade dos produtos. Em caso de dificuldade de fornecimento ou rutura de stock, a DietAdvance compromete-se a reembolsar qualquer montante que o Utilizador já tenha pago, no prazo máximo de 14 dias.</p>
        `
      },
      {
        id: "prices-payment",
        title: "5. Preços e Pagamento",
        content: `
          <p class="mb-4">Os preços apresentados incluem IVA à taxa legal em vigor em Portugal. Os portes de envio são calculados à parte e apresentados antes da finalização da compra. O pagamento é processado de forma segura.</p>
          
          <p class="mb-4">Ao clicar em "Autorizar Pagamento" ou "Finalizar Compra", o Utilizador confirma que o meio de pagamento utilizado lhe pertence.</p>
        `
      },
      {
        id: "delivery",
        title: "6. Entrega",
        content: `
          <p class="mb-4">As entregas são realizadas em Portugal Continental e Ilhas (Açores e Madeira). Salvo circunstâncias extraordinárias, a encomenda será entregue no prazo estimado indicado no momento da compra.</p>
          
          <p class="mb-4">Se não for possível entregar a encomenda por ausência do Utilizador, a transportadora deixará indicação sobre como proceder para levantar a encomenda ou agendar nova entrega.</p>
        `
      },
      {
        id: "returns-policy",
        title: "7. Política de Devoluções e Direito de Livre Resolução",
        content: `
          <p class="mb-4">De acordo com o Decreto-Lei n.º 24/2014, o Utilizador tem o direito de resolver o contrato (devolver o produto) no prazo de 14 dias seguidos sem necessidade de justificação.</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Exceção Importante (Produtos de Higiene/Saúde):</h4>
          <p class="mb-4">O produto GlutenDetect é um dispositivo médico de diagnóstico in vitro selado. Por motivos de proteção da saúde e higiene, o Utilizador perde o direito de livre resolução se a embalagem do teste tiver sido aberta ou o selo de segurança violado após a entrega, nos termos do artigo 17.º, n.º 1, alínea e) do Decreto-Lei n.º 24/2014.</p>
          
          <p class="mb-4">Para exercer o direito de devolução (apenas em embalagens seladas e intactas), o Utilizador deve contactar-nos através do email geral@dietadvance.pt. Os custos de devolução do bem ficam a cargo do Utilizador.</p>
        `
      },
      {
        id: "legal-warranty",
        title: "8. Garantia Legal",
        content: `
          <p class="mb-4">Nos termos do Decreto-Lei n.º 84/2021, os produtos beneficiam de uma garantia de conformidade de 3 anos a contar da entrega. Se o produto apresentar defeito de fabrico (ex: o teste não funcionar conforme as instruções técnicas, apesar de corretamente executado), o Utilizador deve contactar a DietAdvance para procedermos à análise e eventual substituição ou reembolso.</p>
          
          <p class="mb-4">Esta garantia não cobre defeitos causados por má utilização, negligência ou incumprimento das instruções de uso (ex: não recolher a amostra de urina corretamente ou não aguardar o tempo indicado).</p>
        `
      },
      {
        id: "liability-medical-disclaimer",
        title: "9. Responsabilidade e Isenção Médica",
        content: `
          <p class="mb-4">A DietAdvance atua como revendedora autorizada.</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Aviso Médico:</h4>
          <p class="mb-4">O GlutenDetect é uma ferramenta de monitorização dietética e não substitui o aconselhamento, diagnóstico ou tratamento médico profissional. Um resultado positivo ou negativo não deve ser usado como base única para decisões de saúde críticas sem consultar um médico gastroenterologista.</p>
          
          <p class="mb-4">A DietAdvance não se responsabiliza por interpretações erradas dos resultados ou alterações de dieta realizadas sem supervisão médica.</p>
        `
      },
      {
        id: "intellectual-property",
        title: "10. Propriedade Intelectual",
        content: `
          <p class="mb-4">O Utilizador reconhece que todos os direitos de autor, marcas registadas (incluindo "Biomedal" e "GlutenDetect") e demais direitos de propriedade intelectual sobre os materiais ou conteúdos que fazem parte do Website pertencem aos seus licenciadores.</p>
        `
      },
      {
        id: "communications",
        title: "11. Comunicações",
        content: `
          <p class="mb-4">A comunicação entre o Utilizador e a DietAdvance será feita preferencialmente por via eletrónica (email).</p>
        `
      },
      {
        id: "applicable-law",
        title: "12. Legislação Aplicável e Jurisdição",
        content: `
          <p class="mb-4">A utilização do nosso Website e os contratos de compra através dele regem-se pela legislação portuguesa. Em caso de litígio, o consumidor pode recorrer a uma Entidade de Resolução Alternativa de Litígios de Consumo (RAL) da sua área geográfica ou usar a Plataforma Europeia de Resolução de Litígios em Linha (RLL).</p>
        `
      },
      {
        id: "complaints-book",
        title: "13. Livro de Reclamações",
        content: `
          <p class="mb-4">A DietAdvance dispõe de Livro de Reclamações Eletrónico. O Utilizador pode aceder ao mesmo através do endereço: www.livroreclamacoes.pt.</p>
        `
      }
    ]
  },
  cookiesPolicy: {
    title: "Política de Cookies",
    subtitle: "Como utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência",
    lastUpdated: "15 de Dezembro de 2024",
    sections: [
      {
        id: "cookie-introduction",
        title: "O que são Cookies e Como os Utilizamos",
        content: `
          <p class="mb-4">Para prestar um melhor serviço ao utilizador, utilizamos cookies, ou seja, pequenas etiquetas de software que podem ser armazenadas no seu computador através do navegador de internet (browser), retendo apenas informação relacionada com as suas preferências.</p>
          
          <p class="mb-4">Estes cookies serão apenas utilizados pelo site www.dietadvance.pt e a sua utilização limita-se às seguintes finalidades:</p>
          
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Permitir saber quem é o visitante</strong> e, dessa forma, prestar um serviço melhor, mais seguro e personalizado;</li>
            <li><strong>Recolher direções IP dos utilizadores.</strong> A informação do cookie identifica o utilizador e se ele estiver inscrito em algum serviço, promoção, concurso ou evento promovido por nós, dá uma ordem para o sistema aceder à informação sobre o utilizador que temos armazenada. Assim, podemos personalizar as preferências do utilizador e facilitar a utilização dos seus serviços.</li>
            <li><strong>Realizar estudos estatísticos</strong> que permitam distinguir entre utilizadores regulares, para assim poder calcular a quantidade de utilizadores e o seu crescimento.</li>
            <li><strong>Reconhecer se os utilizadores visualizaram</strong> uma determinada parte do Site e assim evitar a aparição repetitiva da própria.</li>
          </ul>
        `
      },
      {
        id: "cookie-management",
        title: "Gestão de Cookies",
        content: `
          <p class="mb-4">O visitante do site tem o poder de desligar os seus cookies, nas opções do seu browser, ou efetuando alterações nas ferramentas de programas Anti-Virus. No entanto, isso poderá alterar a forma como interage com o nosso website, ou outros websites. Isso poderá afetar ou não permitir que faça logins em programas, sites ou fóruns da nossa e de outras redes.</p>
          
          <p class="mb-4">Em algumas ocasiões, recolhemos informação no nosso Site por meio de cookies temporários ou de sessão. Estes cookies desaparecem quando se fecha o navegador da Internet. Não se guardam no disco rígido do utilizador; armazenam-se apenas na memória temporária que se apaga depois de fechado o navegador. Utilizamos cookies temporários para determinar, por exemplo, como é usado o nosso Site, para assim poder melhorar o design e a utilidade do mesmo. Os cookies temporários não estão associados a nenhum tipo de informação sua identificável ao nível pessoal.</p>
          
          <p class="mb-4">Em qualquer caso, pode limitar ou restringir a admissão de cookies através das opções do seu navegador.</p>
        `
      },
      {
        id: "liability-limitation",
        title: "Limitação de responsabilidade",
        content: `
          <p class="mb-4">O site www.dietadvance.pt pode possuir ligações para outros sites. A nossa política de privacidade não é aplicada a sites de terceiros, pelo que, caso visite outro site a partir do nosso deverá ler a política de privacidade do mesmo para estar informado. Não nos responsabilizamos pela política de privacidade ou conteúdo presente nesses mesmos sites.</p>
          
          <p class="mb-4">O utilizador reconhece ainda que: a Internet é uma rede mundial de computadores e que qualquer informação enviada ou transmitida por si será necessariamente encaminhada por computadores de terceiros; a Dietadvance não é responsável por falhas na segurança das comunicações e não assume qualquer responsabilidade pelo uso indevido da sua informação por terceiros.</p>
        `
      }
    ]
  }
};

const navLinks = [
  { label: 'Como Funciona', href: '/#how-it-works' },
  { label: 'Ciência', href: '/#science' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Comprar Agora', href: '/buy' },
];

export default function PoliticasETermos() {
  const [activeSection, setActiveSection] = useState("privacy-policy");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Navigation items
  const navItems: NavItem[] = [
    {
      id: "privacy-policy",
      title: "Política de Privacidade",
      icon: <Shield className="w-5 h-5" />,
      subsections: legalContent.privacyPolicy.sections.map(section => ({
        id: section.id,
        title: section.title
      }))
    },
    {
      id: "terms-of-service",
      title: "Termos e Condições Gerais de Venda",
      icon: <FileText className="w-5 h-5" />,
      subsections: legalContent.termsOfService.sections.map(section => ({
        id: section.id,
        title: section.title
      }))
    },
    {
      id: "cookies-policy",
      title: "Política de Cookies",
      icon: <Cookie className="w-5 h-5" />,
      subsections: legalContent.cookiesPolicy.sections.map(section => ({
        id: section.id,
        title: section.title
      }))
    }
  ];

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  // Get current content
  const getCurrentContent = () => {
    switch (activeSection) {
      case "privacy-policy":
        return legalContent.privacyPolicy;
      case "terms-of-service":
        return legalContent.termsOfService;
      case "cookies-policy":
        return legalContent.cookiesPolicy;
      default:
        return legalContent.privacyPolicy;
    }
  };

  const currentContent = getCurrentContent();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Sticky Navigation Bar */}
      <TopNavBar brandName="GlutenDetect" navLinks={navLinks} />

      {/* Header */}
      <header className="bg-section-dark-blue text-white py-16 px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Informações Legais e Políticas
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Tudo o que precisa de saber sobre como protegemos os seus dados e governamos os nossos serviços
            </p>
            <div className="flex items-center justify-center gap-2 text-accent-gold">
              <span className="text-sm">Última atualização:</span>
              <span className="text-sm font-semibold">{currentContent.lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Quick Navigation Cards */}
      <section className="py-12 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => scrollToSection(item.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  activeSection === item.id
                    ? "border-accent-gold bg-accent-gold/10"
                    : "border-gray-200 dark:border-gray-700 hover:border-accent-gold/50"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${
                    activeSection === item.id ? "bg-accent-gold text-white" : "bg-gray-100 dark:bg-gray-800 text-accent-gold"
                  }`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-left">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-left">
                  {item.id === "privacy-policy" && "Como protegemos as suas informações pessoais"}
                  {item.id === "terms-of-service" && "Termos que regem a compra de produtos no nosso website"}
                  {item.id === "cookies-policy" && "Como utilizamos cookies para melhorar a sua experiência"}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-8">
        {/* Sidebar Navigation */}
        <aside className="lg:w-64 lg:sticky lg:top-20 lg:h-fit lg:pr-8 mb-8 lg:mb-0">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-between w-full p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 mb-4"
          >
            <span className="font-semibold">Navegação</span>
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Navigation Menu */}
          <nav className={`${isMobileMenuOpen ? "block" : "hidden"} lg:block bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700`}>
            {navItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors ${
                    activeSection === item.id
                      ? "bg-accent-gold/10 text-accent-gold border-l-4 border-accent-gold"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.title}</span>
                </button>
                {activeSection === item.id && item.subsections && (
                  <div className="bg-gray-50 dark:bg-gray-800">
                    {item.subsections.map((subsection) => (
                      <button
                        key={subsection.id}
                        onClick={() => {
                          const element = document.getElementById(subsection.id);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }}
                        className="w-full px-8 py-2 text-left text-sm text-gray-600 dark:text-gray-400 hover:text-accent-gold transition-colors flex items-center gap-2"
                      >
                        <ChevronRight className="w-3 h-3" />
                        {subsection.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 lg:pl-8">
          {/* Privacy Policy Section */}
          <section id="privacy-policy" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary dark:text-white mb-2">
                  {legalContent.privacyPolicy.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {legalContent.privacyPolicy.subtitle}
                </p>
              </div>

              <Accordion type="multiple" className="space-y-4">
                {legalContent.privacyPolicy.sections.map((section) => (
                  <AccordionItem key={section.id} value={section.id} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                    <AccordionTrigger className="px-6 py-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left">
                      <h3 className="text-lg font-semibold text-primary dark:text-white">
                        {section.title}
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-white dark:bg-gray-900">
                      <div
                        className="prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{
                          __html: isClient ? DOMPurify.sanitize(section.content) : section.content
                        }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </section>

          {/* Terms of Service Section */}
          <section id="terms-of-service" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary dark:text-white mb-2">
                  {legalContent.termsOfService.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {legalContent.termsOfService.subtitle}
                </p>
              </div>

              <Accordion type="multiple" className="space-y-4">
                {legalContent.termsOfService.sections.map((section) => (
                  <AccordionItem key={section.id} value={section.id} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                    <AccordionTrigger className="px-6 py-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left">
                      <h3 className="text-lg font-semibold text-primary dark:text-white">
                        {section.title}
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-white dark:bg-gray-900">
                      <div
                        className="prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{
                          __html: isClient ? DOMPurify.sanitize(section.content) : section.content
                        }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </section>

          {/* Cookies Policy Section */}
          <section id="cookies-policy" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary dark:text-white mb-2">
                  {legalContent.cookiesPolicy.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {legalContent.cookiesPolicy.subtitle}
                </p>
              </div>

              <Accordion type="multiple" className="space-y-4">
                {legalContent.cookiesPolicy.sections.map((section) => (
                  <AccordionItem key={section.id} value={section.id} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                    <AccordionTrigger className="px-6 py-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left">
                      <h3 className="text-lg font-semibold text-primary dark:text-white">
                        {section.title}
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-white dark:bg-gray-900">
                      <div
                        className="prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{
                          __html: isClient ? DOMPurify.sanitize(section.content) : section.content
                        }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">
              Tem Alguma Pergunta?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Se tiver alguma dúvida sobre as nossas políticas ou necessitar de mais informações, não hesite em contactar-nos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-primary dark:text-white mb-2">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">geral@dietadvance.pt</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary dark:text-white mb-2">Telefone</h4>
                <p className="text-gray-600 dark:text-gray-400">+351 915 721 069</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary dark:text-white mb-2">Morada</h4>
                <p className="text-gray-600 dark:text-gray-400">Rua das Figueiras Vila Pateo, LA<br />2430-187 Marinha Grande</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary dark:text-white mb-2">Horário</h4>
                <p className="text-gray-600 dark:text-gray-400">Segunda a Sexta: 9:30h - 18:30h</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 p-3 bg-accent-gold text-white rounded-full shadow-lg hover:bg-accent-gold/90 transition-colors z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
}