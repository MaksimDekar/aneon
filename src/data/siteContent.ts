import { images } from '@/data/images';
import type {
  BenefitItem,
  ConsultationContent,
  EstimateContent,
  FooterContent,
  HeroContent,
  InfoBlockContent,
  ProductionContent,
  SectionText,
} from '@/types/content';

export const heroContent: HeroContent = {
  eyebrow: 'Производство неоновых вывесок',
  title: 'Вывески из гибкого неона для бизнеса и интерьера',
  subtitle:
    'Создаем заметные вывески под задачу: от идеи и макета до изготовления, подключения и сопровождения.',
  cta: {
    label: 'Рассчитать проект',
    href: '#estimate',
  },
  secondaryCta: {
    label: 'Смотреть работы',
    href: '#gallery',
  },
  stats: ['Собираем вручную', 'Работаем по России', 'Поддержка после запуска'],
};

export const productionContent: ProductionContent = {
  title: 'Все вывески собираются вручную',
  description:
    'Мы не ставим производство на поток ради скорости. Каждая вывеска проходит ручную сборку, проверку света и тест подключения, чтобы итог выглядел аккуратно и работал стабильно.',
};

export const benefitsContent: BenefitItem[] = [
  {
    title: 'Низкое энергопотребление',
    description:
      'Гибкий неон заметно экономичнее классических решений и подходит для ежедневной работы в заведениях.',
    accent: 'blue',
  },
  {
    title: 'Безопасность и надежность',
    description:
      'Материал не нагревается до критичных температур и устойчив к вибрациям, поэтому подходит для коммерческих пространств.',
    accent: 'pink',
  },
  {
    title: 'Чистый свет без мерцания',
    description:
      'Линия свечения выглядит плотной и равномерной. Это важно для витрин, фотозон и оформления интерьеров.',
    accent: 'green',
  },
  {
    title: 'Гибкость форм и шрифтов',
    description:
      'Можно реализовать сложные формы, фирменные логотипы и индивидуальные надписи без потери качества.',
    accent: 'red',
  },
];

export const estimateContent: EstimateContent = {
  title: 'Рассчитать стоимость вывески',
  description:
    'Оставьте базовые параметры, и мы подготовим ориентир по цене и срокам в удобном для вас формате.',
  fields: [
    { id: 'size', label: 'Размер вывески', placeholder: 'Например: 120x60 см' },
    { id: 'neonLength', label: 'Длина неона', placeholder: 'Например: 4.5 м' },
    { id: 'elements', label: 'Количество элементов', placeholder: 'Например: 3 контура' },
  ],
  ctaLabel: 'Получить расчет',
};

export const infoBlockContent: InfoBlockContent = {
  title: 'Неоновая вывеска - это инструмент внимания',
  paragraphs: [
    'Она работает как визуальный якорь: выделяет точку на фоне конкурентов, помогает запоминать бренд и формирует атмосферу пространства.',
    'Для бизнеса это практичный способ увеличить узнаваемость, а для интерьера - выразительный акцент, который остается актуальным годами.',
  ],
};

export const consultationContent: ConsultationContent = {
  title: 'Консультация по вашему проекту',
  description:
    'Опишите идею в свободной форме - поможем с форматом, подскажем материалы и предложим оптимальное решение по бюджету.',
  fields: [
    { id: 'name', label: 'Имя', placeholder: 'Как к вам обращаться?', type: 'text' },
    { id: 'contact', label: 'Телефон / мессенджер', placeholder: '+7 (___) ___-__-__', type: 'tel' },
  ],
  commentLabel: 'Комментарий',
  commentPlaceholder: 'Опишите задачу: стиль, размер, место установки, сроки',
  ctaLabel: 'Отправить заявку',
};

export const footerContent: FooterContent = {
  copyright: `© ${new Date().getFullYear()} Neon Atelier`,
  legalText: 'Производство неоновых вывесок и световых инсталляций под ключ',
};

export const sectionText = {
  benefits: {
    overline: 'Преимущества',
    title: 'Почему бизнес выбирает гибкий неон',
    description:
      'Гибкий неон сочетает выразительный внешний вид, практичность и ресурс для ежедневной коммерческой эксплуатации.',
  } satisfies SectionText,
  gallery: {
    overline: 'Галерея',
    title: 'Наши работы',
    description: 'Актуальные архивные примеры реализованных проектов: интерьерные и коммерческие решения.',
  } satisfies SectionText,
  cases: {
    overline: 'Кейсы',
    title: 'Реализованные проекты',
    description: 'Реальные примеры с разными форматами вывесок и задачами бизнеса.',
  } satisfies SectionText,
  faq: {
    overline: 'FAQ',
    title: 'Частые вопросы',
  } satisfies SectionText,
};

export const staticSectionImages = {
  heroMain: images.heroMain,
  heroSecondary: images.heroSecondary,
  production: images.productionHandmade,
  infoBlock: images.showcaseNetflix,
};
