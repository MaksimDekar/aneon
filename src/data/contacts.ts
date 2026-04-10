import type { ContactsContent } from '@/types/content';

export const contactsContent: ContactsContent = {
  phone: {
    label: 'Телефон',
    value: '+7 (900) 000-00-00',
    href: 'tel:+79000000000',
  },
  messenger: [
    {
      label: 'WhatsApp',
      value: '@neonatelier',
      href: 'https://wa.me/79000000000',
    },
    {
      label: 'Telegram',
      value: '@neonatelier',
      href: 'https://t.me/neonatelier',
    },
  ],
  email: {
    label: 'Email',
    value: 'hello@neonatelier.ru',
    href: 'mailto:hello@neonatelier.ru',
  },
  address: 'г. Новосибирск, производство и шоурум по предварительной записи',
  schedule: 'Ежедневно: 10:00 - 20:00',
  labels: {
    messengers: 'Мессенджеры',
    contacts: 'Контакты',
  },
};
