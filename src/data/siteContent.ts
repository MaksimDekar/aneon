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
  eyebrow: 'Современное решение для уникальной атмосферы',
  title: 'Вывески из гибкого неона',
  cta: {
    label: 'Рассчитать проект',
    href: '#estimate',
  },
  secondaryCta: {
    label: 'Наши работы',
    href: '#gallery',
  },
  stats: ['Все вывески собираются вручную', 'Отправляем по всей России', 'Делаем с 2020 года'],
};

export const productionContent: ProductionContent = {
  title: 'Все вывески собираются вручную',
  description:
    'Только внимание к каждой детали и персональный подход являются главным гарантом качества. Мы используем светодиодный (холодный) неон: он экономичнее, безопаснее стеклянного и отлично переносит доставку.',
};

export const benefitsContent: BenefitItem[] = [
  {
    title: 'Экономичнее стеклянного неона',
    description:
      'Светодиодный неон потребляет меньше энергии и позволяет получить выразительный результат при более разумном бюджете.',
    accent: 'blue',
  },
  {
    title: 'Безопаснее в эксплуатации',
    description:
      'Гибкий неон не бьется как стекло, поэтому надежнее в доставке, монтаже и ежедневной работе в коммерческих пространствах.',
    accent: 'pink',
  },
  {
    title: 'Чистая и стабильная линия света',
    description:
      'Свечение выглядит ровным и заметным в кадре, поэтому такие вывески отлично работают в окнах, фотозонах и интерьерах.',
    accent: 'green',
  },
  {
    title: 'Подходит для любой ниши',
    description:
      'Реклама в окно, стильная фотозона или современный декор: подбираем формат под ваш тип бизнеса и задачу.',
    accent: 'red',
  },
];

export const estimateContent: EstimateContent = {
  title: 'Рассчитать вывеску',
  description:
    'Для расчета вывески пройдите короткий опрос. Так мы получим всю необходимую информацию и подготовим макет с ценой.',
  fields: [
    { id: 'size', label: 'Размер вывески', placeholder: 'Например: 120x60 см' },
    { id: 'neonLength', label: 'Длина неона', placeholder: 'Например: 4.5 м' },
    { id: 'elements', label: 'Количество элементов', placeholder: 'Например: 3 контура' },
  ],
  ctaLabel: 'Получить расчет',
};

export const infoBlockContent: InfoBlockContent = {
  title: 'Неоновая вывеска - это',
  paragraphs: [
    'Реклама в окна: привлекайте посетителей прямо с улицы. Неоновая реклама отлично справляется с задачей первого контакта.',
    'Стильная фотозона и современный декор: посетители чаще фотографируются, отмечают заведение и усиливают узнаваемость бренда.',
  ],
};

export const consultationContent: ConsultationContent = {
  title: 'Консультация по вашему проекту',
  description:
    'Готовы ответить на все вопросы. Заполните форму, и менеджер свяжется с вами в ближайшее время.',
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
  legalText:
    'Информация на сайте не является публичной офертой. Любое копирование материалов допускается только с обязательной ссылкой на источник.',
};

export const sectionText = {
  benefits: {
    overline: 'Преимущества',
    title: 'Нет, это не стеклянный неон',
    description:
      'Мы используем светодиодный гибкий неон: безопасный, экономичный и практичный для ежедневного использования.',
  } satisfies SectionText,
  gallery: {
    overline: 'Галерея',
    title: 'Наши работы',
    description: 'Актуальные архивные примеры реализованных проектов: интерьерные и коммерческие решения.',
  } satisfies SectionText,
  cases: {
    overline: 'Для бизнеса',
    title: 'Неон для любой ниши',
    description: 'Нам есть что предложить для разных форматов бизнеса: от локальных точек до сетевых проектов.',
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
