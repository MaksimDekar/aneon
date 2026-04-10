export interface CTA {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: CTA;
  secondaryCta: CTA;
  stats: string[];
}

export interface ProductionContent {
  title: string;
  description: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  accent: 'blue' | 'pink' | 'green' | 'red';
}

export interface EstimateField {
  id: string;
  label: string;
  placeholder: string;
}

export interface EstimateContent {
  title: string;
  description: string;
  fields: EstimateField[];
  ctaLabel: string;
}

export interface InfoBlockContent {
  title: string;
  paragraphs: string[];
}

export interface ConsultationField {
  id: string;
  label: string;
  placeholder: string;
  type: 'text' | 'tel';
}

export interface ConsultationContent {
  title: string;
  description: string;
  fields: ConsultationField[];
  commentLabel: string;
  commentPlaceholder: string;
  ctaLabel: string;
}

export interface FooterContent {
  copyright: string;
  legalText: string;
}

export interface SectionText {
  overline?: string;
  title: string;
  description?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

export interface CaseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  metrics: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface ContactsContent {
  phone: ContactLink;
  messenger: ContactLink[];
  email: ContactLink;
  address: string;
  schedule: string;
  labels: {
    messengers: string;
    contacts: string;
  };
}
