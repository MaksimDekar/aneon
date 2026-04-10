import type { ContactsContent } from '@/types/content';

export const contactsContent: ContactsContent = {
  phone: {
    label: 'Телефон',
    value: '+7 905 935 83 89',
    href: 'tel:+79059358389',
  },
  messenger: [
    {
      label: 'Telegram',
      value: '@aneon_369',
      href: 'https://t.me/aneon_369',
    },
    {
      label: 'Instagram',
      value: '@a.neon369',
      href: 'https://www.instagram.com/a.neon369/',
    },
  ],
  email: {
    label: 'Email',
    value: 'hello@aneon369.ru',
    href: 'mailto:hello@aneon369.ru',
  },
  address: 'Новосибирск, ул. Немировича-Данченко, 104',
  schedule: 'Ежедневно: 10:00 - 20:00',
  labels: {
    messengers: 'Мессенджеры',
    contacts: 'Контакты',
  },
};
