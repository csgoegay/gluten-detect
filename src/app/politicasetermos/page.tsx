"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, FileText, Cookie, Search, Menu, X, ChevronRight, ArrowUp } from "lucide-react";

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
        id: "information-we-collect",
        title: "Informações que Recolhemos",
        content: `
          <p class="mb-4">Na GlutenDetect, estamos comprometidos em proteger a sua privacidade. Recolhemos apenas as informações necessárias para fornecer os nossos serviços e melhorar a sua experiência.</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Informações Pessoais</h4>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Nome e informações de contacto (email, telefone)</li>
            <li>Endereço de entrega para envio de produtos</li>
            <li>Informações de pagamento (processadas de forma segura)</li>
            <li>Informações de saúde relacionadas com a doença celíaca (opcional)</li>
          </ul>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Informações Técnicas</h4>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Endereço IP e dados de navegação</li>
            <li>Tipo de navegador e sistema operativo</li>
            <li>Páginas visitadas e tempo de navegação</li>
            <li>Informações do dispositivo para otimização</li>
          </ul>
        `
      },
      {
        id: "how-we-use-information",
        title: "Como Utilizamos as Suas Informações",
        content: `
          <p class="mb-4">Utilizamos as suas informações para fornecer, manter e melhorar os nossos serviços, bem como para comunicar consigo sobre os nossos produtos.</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Finalidades Principais</h4>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Processar e entregar os seus pedidos</li>
            <li>Fornecer suporte ao cliente</li>
            <li>Enviar informações sobre produtos e atualizações</li>
            <li>Personalizar a sua experiência no nosso site</li>
            <li>Melhorar os nossos produtos e serviços</li>
          </ul>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Base Legal</h4>
          <p class="mb-4">A nossa base legal para processar as suas informações inclui consentimento, execução de contrato, interesse legítimo e obrigações legais.</p>
        `
      },
      {
        id: "data-sharing",
        title: "Partilha de Dados",
        content: `
          <p class="mb-4">Não vendemos as suas informações pessoais a terceiros. Partilhamos dados apenas nas circunstâncias descritas abaixo.</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Parceiros de Serviço</h4>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Processadores de pagamento (Stripe, PayPal)</li>
            <li>Serviços de entrega (CTT, DHL)</li>
            <li>Plataformas de email marketing</li>
            <li>Provedores de alojamento web</li>
          </ul>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Requisitos Legais</h4>
          <p class="mb-4">Podemos divulgar as suas informações se exigido por lei, ordem judicial ou para proteger os nossos direitos legais.</p>
        `
      },
      {
        id: "data-security",
        title: "Segurança dos Dados",
        content: `
          <p class="mb-4">Implementamos medidas de segurança robustas para proteger as suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Medidas de Segurança</h4>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Encriptação SSL/TLS para todas as transmissões</li>
            <li>Servidores seguros com firewalls avançados</li>
            <li>Acesso restrito às informações pessoais</li>
            <li>Auditorias de segurança regulares</li>
            <li>Conformidade com GDPR e outras regulamentações</li>
          </ul>
        `
      },
      {
        id: "your-rights",
        title: "Os Seus Direitos",
        content: `
          <p class="mb-4">Ao abrigo do GDPR, tem direitos específicos sobre as suas informações pessoais. Estamos comprometidos em respeitar esses direitos.</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Direitos do Utilizador</h4>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Acesso:</strong> Solicitar uma cópia das suas informações</li>
            <li><strong>Retificação:</strong> Corrigir informações incorretas</li>
            <li><strong>Eliminação:</strong> Solicitar a remoção das suas informações</li>
            <li><strong>Portabilidade:</strong> Transferir as suas informações para outro serviço</li>
            <li><strong>Oposição:</strong> Opor-se ao processamento das suas informações</li>
            <li><strong>Restrição:</strong> Limitar o processamento das suas informações</li>
          </ul>
          
          <p class="mb-4">Para exercer estes direitos, contacte-nos através de privacy@glutendetect.pt</p>
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
        id: "what-are-cookies",
        title: "O que são Cookies",
        content: `
          <p class="mb-4">Cookies são pequenos ficheiros de texto que são armazenados no seu dispositivo quando visita um website. Eles permitem-nos reconhecê-lo e recordar as suas preferências.</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Como Funcionam</h4>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>O website envia um cookie para o seu navegador</li>
            <li>O navegador armazena o cookie localmente</li>
            <li>O navegador envia o cookie de volta em visitas futuras</li>
            <li>O website reconhece o cookie e personaliza a experiência</li>
          </ul>
        `
      },
      {
        id: "types-of-cookies",
        title: "Tipos de Cookies que Utilizamos",
        content: `
          <p class="mb-4">Utilizamos diferentes tipos de cookies para várias finalidades, todos concebidos para melhorar a sua experiência.</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Cookies Essenciais</h4>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Autenticação e segurança</li>
            <li>Gestão de sessões</li>
            <li>Proteção contra CSRF</li>
            <li>Manutenção do estado do utilizador</li>
          </ul>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Cookies de Desempenho</h4>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Análise de tráfego do website</li>
            <li>Medição de desempenho</li>
            <li>Identificação de problemas técnicos</li>
            <li>Otimização da velocidade do site</li>
          </ul>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Cookies Funcionais</h4>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Memorização de preferências</li>
            <li>Personalização de conteúdo</li>
            <li>Funcionalidades de redes sociais</li>
            <li>Sugestões personalizadas</li>
          </ul>
        `
      },
      {
        id: "cookie-categories",
        title: "Categorias e Finalidades",
        content: `
          <p class="mb-4">Os nossos cookies estão organizados por categoria de acordo com a sua finalidade específica.</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Categoria 1: Estritamente Necessários</h4>
          <p class="mb-4">Essenciais para o funcionamento do website. Não podem ser desativados.</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Categoria 2: Desempenho e Análise</h4>
          <p class="mb-4">Ajudam-nos a entender como os utilizadores interagem com o nosso site.</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Categoria 3: Funcionalidade</h4>
          <p class="mb-4">Permitem funcionalidades avançadas e personalização.</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Categoria 4: Publicidade e Marketing</h4>
          <p class="mb-4">Utilizados para publicidade personalizada e marketing.</p>
        `
      },
      {
        id: "managing-cookies",
        title: "Gerir as Suas Preferências de Cookies",
        content: `
          <p class="mb-4">Tem controlo sobre os cookies que aceita no nosso website.</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Configurações do Navegador</h4>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Bloquear todos os cookies</li>
            <li>Aceitar apenas cookies de primeira parte</li>
            <li>Eliminar cookies existentes</li>
            <li>Notificar quando os cookies são definidos</li>
          </ul>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">O Nosso Banner de Cookies</h4>
          <p class="mb-4">Quando visita o nosso site pela primeira vez, verá um banner de cookies onde pode:</p>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Aceitar todos os cookies</li>
            <li>Rejeitar cookies não essenciais</li>
            <li>Personalizar as suas preferências</li>
            <li>Saber mais sobre cada tipo de cookie</li>
          </ul>
        `
      },
      {
        id: "third-party-cookies",
        title: "Cookies de Terceiros",
        content: `
          <p class="mb-4">Alguns cookies no nosso website são definidos por serviços de terceiros que utilizamos.</p>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Serviços de Terceiros</h4>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Google Analytics:</strong> Análise de tráfego e comportamento</li>
            <li><strong>Facebook Pixel:</strong> Publicidade personalizada</li>
            <li><strong>Hotjar:</strong> Mapas de calor e gravações de sessão</li>
            <li><strong>Stripe:</strong> Processamento de pagamentos</li>
          </ul>
          
          <h4 class="font-semibold text-lg mb-2 mt-6">Políticas de Terceiros</h4>
          <p class="mb-4">Cada serviço de terceiros tem a sua própria política de privacidade. Recomendamos que reveja estas políticas para entender como utilizam os seus dados.</p>
        `
      }
    ]
  }
};

export default function PoliticasETermos() {
  const [activeSection, setActiveSection] = useState("privacy-policy");
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

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

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle expanded items
  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  // Filter content based on search
  const filterContent = (content: string) => {
    if (!searchTerm) return content;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return content.replace(regex, '<mark class="bg-yellow-200 text-yellow-900">$1</mark>');
  };

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
      {/* Header */}
      <header className="bg-section-dark-blue text-white py-16 px-4">
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

      {/* Search Bar */}
      <section className="py-8 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Pesquisar nas políticas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-gold"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
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

              <div className="space-y-4">
                {legalContent.privacyPolicy.sections.map((section) => (
                  <details
                    key={section.id}
                    id={section.id}
                    open={expandedItems.has(section.id)}
                    onToggle={(e) => {
                      if (e.currentTarget.open) {
                        toggleExpanded(section.id);
                      }
                    }}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                  >
                    <summary className="px-6 py-4 bg-gray-50 dark:bg-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-primary dark:text-white">
                          {section.title}
                        </h3>
                        <span className={`material-symbols-outlined text-accent-gold transform transition-transform ${
                          expandedItems.has(section.id) ? "rotate-180" : ""
                        }`}>
                          expand_more
                        </span>
                      </div>
                    </summary>
                    <div 
                      className="px-6 py-4 bg-white dark:bg-gray-900 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: filterContent(section.content) }}
                    />
                  </details>
                ))}
              </div>
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

              <div className="space-y-4">
                {legalContent.termsOfService.sections.map((section) => (
                  <details
                    key={section.id}
                    id={section.id}
                    open={expandedItems.has(section.id)}
                    onToggle={(e) => {
                      if (e.currentTarget.open) {
                        toggleExpanded(section.id);
                      }
                    }}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                  >
                    <summary className="px-6 py-4 bg-gray-50 dark:bg-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-primary dark:text-white">
                          {section.title}
                        </h3>
                        <span className={`material-symbols-outlined text-accent-gold transform transition-transform ${
                          expandedItems.has(section.id) ? "rotate-180" : ""
                        }`}>
                          expand_more
                        </span>
                      </div>
                    </summary>
                    <div 
                      className="px-6 py-4 bg-white dark:bg-gray-900 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: filterContent(section.content) }}
                    />
                  </details>
                ))}
              </div>
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

              <div className="space-y-4">
                {legalContent.cookiesPolicy.sections.map((section) => (
                  <details
                    key={section.id}
                    id={section.id}
                    open={expandedItems.has(section.id)}
                    onToggle={(e) => {
                      if (e.currentTarget.open) {
                        toggleExpanded(section.id);
                      }
                    }}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                  >
                    <summary className="px-6 py-4 bg-gray-50 dark:bg-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-primary dark:text-white">
                          {section.title}
                        </h3>
                        <span className={`material-symbols-outlined text-accent-gold transform transition-transform ${
                          expandedItems.has(section.id) ? "rotate-180" : ""
                        }`}>
                          expand_more
                        </span>
                      </div>
                    </summary>
                    <div 
                      className="px-6 py-4 bg-white dark:bg-gray-900 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: filterContent(section.content) }}
                    />
                  </details>
                ))}
              </div>
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
                <p className="text-gray-600 dark:text-gray-400">Campos do Lumiar IAPMEI Edf. F<br />Estrada do Lumiar, 1649-038 Lisboa</p>
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