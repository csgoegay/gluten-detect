import TopNavBar from "@/components/TopNavBar";
import HeroSection from "@/components/HeroSection";
import TextWithImageSection from "@/components/TextWithImageSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ValidationSection from "@/components/ValidationSection";
import BenefitsSection from "@/components/BenefitsSection";
import FaqSection from "@/components/FaqSection";
import SocialProofSection from "@/components/SocialProofSection";
import ProductSection from "@/components/ProductSection";
import { MadeWithDyad } from "@/components/made-with-dyad";

const navLinks = [
  { label: 'Como Funciona', href: '#how-it-works' },
  { label: 'Ciência', href: '#science' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Comprar Agora', href: '/buy' },
];

const processSteps = [
  {
    iconName: 'science',
    title: '1. Recolha',
    description: 'Recolha de forma fácil e privada uma amostra de urina ou fezes em casa.',
  },
  {
    iconName: 'colorize',
    title: '2. Teste',
    description: 'Aplique a amostra na cassete de teste.',
  },
  {
    iconName: 'timer',
    title: '3. Resultados',
    description: 'Obtenha um resultado visual e claro em menos de 15 minutos.',
  },
];

const benefitsData = [
  {
    iconName: 'search',
    title: 'Deteção Precoce',
    description: 'Detete o Glúten Oculto. Identifique a exposição acidental ao glúten, seja por contaminação cruzada ou ao comer fora, antes que cause danos duradouros.',
  },
  {
    iconName: 'monitoring',
    title: 'Monitorização Objetiva',
    description: 'Acompanhe o Sucesso da Sua Dieta. Obtenha provas científicas e objetivas de que o seu estilo de vida sem glúten está verdadeiramente a funcionar.',
  },
  {
    iconName: 'health_and_safety',
    title: 'Proteção da Saúde',
    description: 'Previna Danos a Longo Prazo. Pare o ciclo de danos intestinais silenciosos e reduza o risco de complicações de saúde graves no futuro.',
  },
  {
    iconName: 'sentiment_satisfied',
    title: 'Paz de Espírito',
    description: 'Viva com Confiança. Coma, viaje e viva sem o medo e a incerteza constantes da exposição acidental ao glúten.',
  },
];

const endorsementData = {
  title: 'Recomendado Por',
  items: [
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoLrzlwfNS1ra7NhtAuc2BIxlTjSZBpbNIA6rQLq7b8O3hvSwec_TWbJC6_TQwvTiFc87O9t21yYokBzuCcGJT-tldk_iapnop3l1lqCrB3lr5vGLxBPYEU_t97WQQ5HBzfO49jI0tfRCtvQubjr7WQhXq6w_mKTscrLaXJWAsoCf4LvF1i8SwsbdCJ99dIYLvvLaPV_5wQtYGFyHnuJftF3IudBwi5dVQCcTGC-ji0AxQDWlb57ZxEyVcfsf4nqqteKg3MDaFfC8',
      imageAlt: 'Sociedade Espanhola de Doença Celíaca Logo',
      name: 'Sociedade Espanhola de Doença Celíaca (SEEC)',
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBR_rY1e02n5i2eOaSYFHlQio3f6ilUanpgt3mc8ko62CL6LXj53tdrG8Ojwf3rAAWU-NkLelMqU_Oi4qO9HDVBnfG2w5s8l0DkohFA75qqw2fOLl1kUif76Lvl757WwmUc9u1UNP9uOpxAVDsu1oNZpjcuSkLoeU-4HybTs_B5PeH10pNg73ftPNeE5hEIBk_A7xFNpI7eSwdjzYXmUtex7PxqOxdyMecZD50K5uiJjY9sMhSQjGyoXPYSfm4gRNiyzE6ieLL4OrU',
      imageAlt: 'Associação de Celíacos de Aragão Logo',
      name: 'Associação de Celíacos de Aragão',
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoLrzlwfNS1ra7NhtAuc2BIxlTjSZBpbNIA6rQLq7b8O3hvSwec_TWbJC6_TQwvTiFc87O9t21yYokBzuCcGJT-tldk_iapnop3l1lqCrB3lr5vGLxBPYEU_t97WQQ5HBzfO49jI0tfRCtvQubjr7WQhXq6w_mKTscrLaXJWAsoCf4LvF1i8SwsbdCJ99dIYLvvLaPV_5wQtYGFyHnuJftF3IudBwi5dVQCcTGC-ji0AxQDWlb57ZxEyVcfsf4nqqteKg3MDaFfC8',
      imageAlt: 'Universidade de Vigo Logo',
      name: 'Grupo de Investigação da Universidade de Vigo',
    },
  ],
};

const featureData = {
  title: 'Baseado em Tecnologia Patenteada de Deteção de GIP',
  description: 'O GlutenDetect baseia-se numa tecnologia patenteada para detetar Peptídeos Imunogénicos do Glúten (GIP) e é validada por ensaios clínicos revistos por pares (peer-reviewed). Temos orgulho em ser reconhecidos e recomendados por instituições de renome como a Sociedade Espanhola de Doença Celíaca (SEEC), que destaca os testes GIP como uma ferramenta vital para monitorizar a adesão à dieta.',
  items: [
    { iconName: 'check_circle', text: 'Tecnologia patenteada para deteção não invasiva de glúten.' },
    { iconName: 'science', text: 'Validado através de extensos ensaios clínicos revistos por pares.' },
    { iconName: 'verified_user', text: 'Recomendado por especialistas em doença celíaca e associações.' },
  ],
};

const testimonialsData = [
  {
    rating: 5,
    quote: "Este teste deu-me a paz de espírito que desesperadamente procurava. Muito fácil de usar e os resultados são rápidos. Altamente recomendado!",
    author: "David R."
  },
  {
    rating: 5,
    quote: "Finalmente encontrei as respostas de que precisava. O GlutenDetect mudou tudo. Ajudou-me a aprender e a confirmar que os meus novos hábitos estavam realmente a funcionar.",
    author: "Michael P."
  },
  {
    rating: 4.5,
    quote: "Eu não tenho sintomas fortes, por isso nunca sabia se estava a ser contaminado acidentalmente. A primeira vez que usei o teste de fezes, deu positivo. Ajudou-me a identificar um produto 'sem glúten' que estava a contaminar a minha dieta.",
    author: "Jessica L."
  },
  {
    rating: 5,
    quote: "Gerir a doença celíaca do meu filho era uma fonte constante de ansiedade. O GlutenDetect deu-nos o poder de saber com certeza. É simples, fiável e trouxe tanta paz à nossa família.",
    author: "David R."
  },
  {
    rating: 5,
    quote: "Este produto é incrivelmente preciso. É indispensável para qualquer pessoa com sensibilidade ao glúten. A clareza que este teste proporciona é incomparável.",
    author: "Sarah K."
  },
  {
    rating: 4.5,
    quote: "Vale cada cêntimo. A confiança que tenho na minha dieta agora é impagável. Sinto-me com muito mais controlo sobre a minha saúde agora.",
    author: "Robert M."
  },
];

const featuredInData = {
  title: "Destacado Em",
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
    question: 'Qual é a precisão do teste?',
    answer: 'O GlutenDetect é uma ferramenta cientificamente validada com elevada especificidade e sensibilidade na deteção de fragmentos de glúten. O teste de fezes é mais sensível para detetar pequenas quantidades de glúten, enquanto o teste de urina é ideal para identificar uma exposição significativa.',
  },
  {
    question: 'Com que frequência devo fazer o teste?',
    answer: 'Para uma monitorização de rotina, a Sociedade Espanhola de Doença Celíaca recomenda um controlo a cada 6 meses. Se foi recentemente diagnosticado, é aconselhável testar a cada 3 meses durante o primeiro ano. Pode também testar sempre que suspeitar que foi exposto.',
  },
  {
    question: 'Qual o teste certo para mim: urina ou fezes?',
    answer: 'O Teste de Urina é o melhor para detetar uma exposição significativa ao glúten nas últimas 24 horas (por exemplo, após uma refeição suspeita num restaurante). O Teste de Fezes é mais sensível e pode detetar vestígios mais pequenos de glúten consumidos até 4 dias antes, tornando-o ideal para a monitorização de rotina.',
  },
  {
    question: 'Preciso de receita médica?',
    answer: 'Não, o GlutenDetect é um teste caseiro de venda livre que pode ser encomendado diretamente e enviado para sua casa.',
  },
  {
    question: 'Enviamos para Portugal?',
    answer: 'Sim, enviamos para Portugal e muitos outros países. Para verificar se enviamos para a sua localização, por favor prossiga para o checkout e introduza o seu endereço.',
  },
];

const productData = {
  headline: "O Seu Kit Completo de Monitorização de Glúten em Casa",
  description: "Tudo o que precisa para monitorizar a sua dieta sem glúten com confiança. Este kit fornece uma forma simples, fiável e rápida de detetar glúten oculto no seu sistema.",
  features: [
    "Inclui 5 Testes Individuais",
    "Resultados em Menos de 15 Minutos",
    "Tecnologia Medicalmente Validada",
  ],
  price: "€79,99",
  buttonText: "Adicionar ao Carrinho",
  buttonLink: "/cart/add?product_id=123",
  imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoLrzlwfNS1ra7NhtAuc2BIxlTjSZBpbNIA6rQLq7b8O3hvSwec_TWbJC6_TQwvTiFc87O9t21yYokBzuCcGJT-tldk_iapnop3l1lqCrB3lr5vGLxBPYEU_t97WQQ5HBzfO49jI0tfRCtvQubjr7WQhXq6w_mKTscrLaXJWAsoCf4LvF1i8SwsbdCJ99dIYLvvLaPV_5wQtYGFyHnuJftF3IudBwi5dVQCcTGC-ji0AxQDWlb57ZxEyVcfsf4nqqteKg3MDaFfC8",
  imageAlt: "Imagem de alta qualidade da caixa do Kit Caseiro GlutenDetect, cassete de teste e outros conteúdos exibidos de forma organizada.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopNavBar brandName="GlutenDetect" navLinks={navLinks} />
      <main className="flex-grow">
        <HeroSection
          backgroundImageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDoLrzlwfNS1ra7NhtAuc2BIxlTjSZBpbNIA6rQLq7b8O3hvSwec_TWbJC6_TQwvTiFc87O9t21yYokBzuCcGJT-tldk_iapnop3l1lqCrB3lr5vGLxBPYEU_t97WQQ5HBzfO49jI0tfRCtvQubjr7WQhXq6w_mKTscrLaXJWAsoCf4LvF1i8SwsbdCJ99dIYLvvLaPV_5wQtYGFyHnuJftF3IudBwi5dVQCcTGC-ji0AxQDWlb57ZxEyVcfsf4nqqteKg3MDaFfC8"
          mainHeadline="Está *Realmente* Sem Glúten? O Glúten Oculto que Não Vê Está a Prejudicá-lo."
          subHeadline="Apresentamos o GlutenDetect: O Primeiro e Único Teste Caseiro para Monitorizar a Exposição ao Glúten e Proteger a Sua Saúde."
          buttonText="Assuma o Controlo da Sua Dieta Hoje"
          buttonLink="#how-it-works"
        />
        <TextWithImageSection
          headline="O Perigo que Não Sente"
          description="Você segue a sua dieta. Verifica os rótulos. Faz as perguntas certas. Mas os estudos revelam uma verdade assustadora: até 88% das pessoas em dieta sem glúten continuam a consumir glúten sem o saber. Este glúten oculto, consumido através de contaminação cruzada e alimentos mal rotulados, pode causar danos silenciosos e cumulativos nos seus intestinos."
          buttonText="Saiba Mais"
          buttonLink="#how-it-works"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBR_rY1e02n5i2eOaSYFHlQio3f6ilUanpgt3mc8ko62CL6LXj53tdrG8Ojwf3rAAWU-NkLelMqU_Oi4qO9HDVBnfG2w5s8l0DkohFA75qqw2fOLl1kUif76Lvl757WwmUc9u1UNP9uOpxAVDsu1oNZpjcuSkLoeU-4HybTs_B5PeH10pNg73ftPNeE5hEIBk_A7xFNpI7eSwdjzYXmUtex7PxqOxdyMecZD50K5uiJjY9sMhSQjGyoXPYSfm4gRNiyzE6ieLL4OrU"
          imageAlt="Uma pessoa atenta a ler cuidadosamente o rótulo dos ingredientes de um produto alimentar numa cozinha moderna e iluminada."
        />
        <HowItWorksSection
          headline="A Sua Saúde, Nas Suas Mãos. Paz de Espírito em 15 Minutos."
          steps={processSteps}
        />
        <ValidationSection
          headline="Comprovado Clinicamente, Recomendado por Especialistas."
          endorsements={endorsementData}
          features={featureData}
          buttonText="Ver Estudos Clínicos"
          buttonLink="/studies"
        />
        <BenefitsSection
          headline="Porquê Adivinhar Quando Pode Ter a Certeza?"
          benefits={benefitsData}
        />
        <FaqSection
          headline="As Suas Perguntas, Respondidas."
          faqItems={faqData}
          contactText="Ainda tem perguntas?"
          contactLinkText="Contacte a nossa equipa de apoio."
          contactLinkHref="/contact"
        />
        <SocialProofSection
          headline="A Comunidade Celíaca Confia no GlutenDetect."
          testimonials={testimonialsData}
          featuredIn={featuredInData}
        />
        <ProductSection {...productData} />
      </main>
    </div>
  );
}