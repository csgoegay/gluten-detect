import TopNavBar from "@/components/TopNavBar";
import HeroSection from "@/components/HeroSection";
import TextWithImageSection from "@/components/TextWithImageSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ValidationSection from "@/components/ValidationSection";
import BenefitsSection from "@/components/BenefitsSection";
import FaqSection from "@/components/FaqSection";
import SocialProofSection from "@/components/SocialProofSection";
import ProductSection from "@/components/ProductSection";
import { Science, Colorize, Timer } from "lucide-react";

const navLinks = [
  { label: 'Como Funciona', href: '#how-it-works' },
  { label: 'Ciência', href: '#science' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Comprar Agora', href: '/buy' },
];

const howItWorksSteps = [
  {
    iconName: 'water_drop',
    title: '1. Recolha',
    description: (
      <>
        Utilize o copo de recolha fornecido no kit para recolher uma pequena amostra de urina.
        <br/><br/>
        <span className="font-bold text-white">Dica:</span> Para obter a máxima sensibilidade e precisão, recomenda-se a utilização da primeira urina da manhã.
      </>
    )
  },
  {
    iconName: 'science',
    title: '2. Preparação',
    description: 'Com a seringa incluída, transfira 2 ml da sua amostra para o tubo da solução condicionadora. Feche a tampa e agite o tubo suavemente durante 5 a 10 segundos para misturar bem.'
  },
  {
    iconName: 'colorize',
    title: '3. Aplicação',
    description: 'Retire a tira de teste da embalagem e coloque-a numa superfície plana. Inverta o tubo da solução e adicione 4 gotas na zona marcada com a letra "S" (Sample) da tira de teste.'
  },
  {
    iconName: 'fact_check',
    title: '4. Resultado',
    description: (
      <>
        Aguarde 15 minutos sem mexer na tira.
        <br/><br/>
        <strong className="text-green-400">Negativo:</strong> Apenas uma linha verde (C).
        <br/>
        <strong className="text-red-400">Positivo:</strong> Duas linhas (Verde na zona C + Vermelha na zona T), indicando que houve ingestão de glúten nas últimas 24 horas.
      </>
    )
  }
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
    quote: "Levo sempre um teste na mala quando viajo. A paz de espírito de ver um resultado negativo depois de jantar num restaurante novo não tem preço.",
    author: "Miguel Santos, Porto"
  },
  {
    rating: 5,
    quote: "Sempre que tenho dúvidas sobre um sintoma, faço o teste. É um alívio imediato saber se ingeri glúten ou não. É muito fácil de usar.",
    author: "Ana Silva, Lisboa"
  },
  {
    rating: 5,
    quote: "Fundamental para festas de aniversário. Como mãe, uso para garantir que o meu filho não ingeriu glúten acidentalmente fora de casa.",
    author: "Sofia Martins, Coimbra"
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
    question: 'Como funciona o GlutenDetect?',
    answer: 'É semelhante a um teste de COVID ou de gravidez. Se consumiu glúten, aparecerá uma linha vermelha na zona de teste (T) juntamente com uma linha verde na zona de controlo (C). Se não consumiu glúten, aparecerá apenas uma linha verde na zona de controlo (C). O resultado é obtido em 15-30 minutos.'
  },
  {
    question: 'Qual devo usar, o teste de fezes ou o de urina?',
    answer: 'Para a monitorização de uma Dieta Isenta de Glúten, ambos são igualmente eficazes. De acordo com a Sociedade Espanhola de Doença Celíaca, para um controlo eficaz de uma Dieta Isenta de Glúten, devem ser realizados 3 testes de urina ou 2 testes de fezes na mesma semana, a cada 3 ou 6 meses. O teste de urina consegue detetar glúten 2-15 horas após a ingestão, enquanto o teste de fezes consegue detetar 1-6 dias após a ingestão.'
  },
  {
    question: 'Quanto glúten preciso de consumir para obter um resultado positivo?',
    answer: 'O teste consegue detetar ingestões a partir de 50 mg de glúten/dia, que é, segundo o consenso científico, a quantidade mínima de glúten prejudicial para doentes celíacos.'
  },
  {
    question: 'O que faço se obtiver um resultado positivo?',
    answer: 'Verifique os seus hábitos alimentares para detetar a origem da transgressão com glúten.'
  },
  {
    question: 'Os meus filhos estão a cumprir a dieta isenta de glúten adequada na escola?',
    answer: 'Para determinar se os seus filhos estão a seguir uma dieta isenta de glúten adequada na escola, recomendamos a utilização de um teste de urina, que pode detetar glúten 2-15 horas após a ingestão, ou um teste de fezes, que pode detetar glúten 1-6 dias após a ingestão.'
  },
  {
    question: 'Com que frequência recomendamos a utilização do GlutenDetect?',
    answer: 'A Sociedade Espanhola de Doença Celíaca recomenda a análise de 3 amostras de urina na mesma semana, preferencialmente uma delas ao fim de semana, utilizando a última urina do dia ou a primeira da manhã. Alternativamente, pode analisar 2 amostras de fezes com 3-4 dias de intervalo na mesma semana. De acordo com estudos clínicos recentes, 97% dos doentes celíacos que obtêm resultados negativos em todos os testes não apresentam lesão intestinal.'
  },
  {
    question: 'Apareceu uma linha vermelha ténue no meu teste, isso significa que o resultado é negativo ou positivo?',
    answer: 'O teste é qualitativo. Uma linha vermelha, independentemente da sua intensidade, indica a presença de glúten e um resultado positivo.'
  },
  {
    question: 'Gostaria de saber mais sobre a quantidade de contaminação que um doente celíaco pode sofrer por ano. Existem estudos sobre isso?',
    answer: 'Segundo vários estudos, a ingestão de glúten, seja voluntária ou involuntária, é comum entre doentes celíacos. Estima-se que quase 90% dos celíacos possam ingerir glúten pelo menos uma vez por mês. Seguir uma dieta isenta de glúten todos os dias é um desafio, mas é importante avaliar o nível de exposição ao glúten nos hábitos diários ou em circunstâncias ambientais variáveis (por exemplo: depois de comer fora).'
  },
  {
    question: 'Se eu tomar alguma medicação, isso pode interferir com o resultado?',
    answer: 'Até à data, não foi detetada qualquer interferência medicamentosa.'
  },
  {
    question: 'É necessária receita médica?',
    answer: 'Não, não se trata de um teste de diagnóstico.'
  },
  {
    question: 'Não tenho quaisquer sintomas de doença celíaca. Porque devo usar o teste?',
    answer: 'Este é um dos erros mais comuns que encontramos. Estudos clínicos recentes mostram que mais de 70% dos doentes celíacos que não apresentam sintomas têm atrofia (danos) na mucosa intestinal. Embora muitos doentes baseiem o cumprimento da sua dieta na ausência de sintomas, podem ainda estar a ingerir glúten sem o saberem. Estas pequenas ingestões só são detetáveis através de fragmentos de glúten excretados nas fezes e na urina. É importante saber que quantidades mínimas de glúten causam danos intestinais aos doentes celíacos. O GlutenDetect verifica estes consumos silenciosos de glúten e ajuda-o a localizar de onde podem estar a vir.'
  },
  {
    question: 'De que forma as ingestões despercebidas de glúten podem afetar o meu intestino delgado?',
    answer: 'Os danos causados por ingestões pequenas e contínuas de glúten são cumulativos e, a longo prazo, impedem a recuperação da mucosa intestinal. Estes danos fazem com que as vilosidades percam a sua capacidade de absorver nutrientes e aumentam a probabilidade de futuras doenças mais graves, tais como linfomas, doenças autoimunes e fraqueza óssea.'
  },
  {
    question: 'Como devo conservar o GlutenDetect?',
    answer: 'O GlutenDetect deve ser conservado à temperatura ambiente.'
  }
];

const productData = {
  headline: "O Seu Kit Completo de Monitorização de Glúten em Casa",
  description: "Tudo o que precisa para monitorizar a sua dieta sem glúten com confiança. Este kit fornece uma forma simples, fiável e rápida de detetar glúten oculto no seu sistema.",
  features: [
    "Kit de uso único pronto a usar",
    "Resultados em Menos de 15 Minutos",
    "Tecnologia Medicamente Validada",
  ],
  originalPrice: "€50,00",
  discountedPrice: "€33,85",
  discountPercentage: 32,
  buttonText: "Adicionar ao Carrinho",
  buttonLink: "/cart/add?product_id=123",
  imageUrl: "/img/GlutenDetectTesteUrina.webp",
  imageAlt: "Imagem de alta qualidade da caixa do Kit Caseiro GlutenDetect, cassete de teste e outros conteúdos exibidos de forma organizada.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopNavBar brandName="GlutenDetect" navLinks={navLinks} />
      <main className="flex-grow">
        <HeroSection
          backgroundImageUrl="/img/upscalemedia-transformed.webp"
          mainHeadline="Está Realmente Sem Glúten? O Glúten Oculto que Não Vê Está a Prejudicá-lo."
          subHeadline="Apresentamos o GlutenDetect: O Primeiro e Único Teste Caseiro para Monitorizar a Exposição ao Glúten e Proteger a Sua Saúde."
          buttonText="Assuma o Controlo da Sua Dieta Hoje"
          buttonLink="#how-it-works"
        />
        <TextWithImageSection
          headline="O Perigo que Não Sente"
          description="Você segue a sua dieta. Verifica os rótulos. Faz as perguntas certas. Mas os estudos revelam uma verdade assustadora: até 88% das pessoas em dieta sem glúten continuam a consumir glúten sem o saber. Este glúten oculto, consumido através de contaminação cruzada e alimentos mal rotulados, pode causar danos silenciosos e cumulativos nos seus intestinos."
          buttonText="Saiba Mais"
          buttonLink="#how-it-works"
          imageUrl="/img/JantarDeAmigosSemGluten.webp"
          imageAlt="Uma pessoa atenta a ler cuidadosamente o rótulo dos ingredientes de um produto alimentar numa cozinha moderna e iluminada."
        />
        <HowItWorksSection
          headline="O Processo Simples em 4 Passos"
          subtitle="Monitorize a sua dieta sem glúten com confiança em menos de 15 minutos"
          steps={howItWorksSteps}
        />
        <ValidationSection
          headline="Comprovado Clinicamente, Recomendado por Especialistas."
          endorsements={endorsementData}
          features={featureData}
          buttonText="Ver Estudos Clínicos"
          buttonLink="/estudos"
        />
        <BenefitsSection
          headline="Porquê Adivinhar Quando Pode Ter a Certeza?"
          benefits={benefitsData}
        />
        <FaqSection
          headline="As Suas Perguntas, Aqui Respondidas."
          faqItems={faqData}
          contactText="Ainda tem perguntas?"
          contactLinkText="Contacte a nossa equipa de apoio."
          contactLinkHref="/contactos"
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