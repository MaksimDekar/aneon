import { images } from '@/data/images';
import type { CaseItem, GalleryItem } from '@/types/content';

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Wine bar',
    subtitle: 'Неон для бара и летней веранды',
    image: images.gallery.bokaleWide,
    alt: 'Неоновые вывески в интерьере бара',
  },
  {
    id: 'g2',
    title: 'Нос в бокале',
    subtitle: 'Акцентная вывеска на кирпичной стене',
    image: images.gallery.bokaleSign,
    alt: 'Крупный план вывески Нос в бокале',
  },
  {
    id: 'g3',
    title: 'НиЖуй',
    subtitle: 'Неон в формате островка',
    image: images.gallery.nizhniy,
    alt: 'Зеленая неоновая вывеска НиЖуй на стойке',
  },
  {
    id: 'g4',
    title: 'Pho Piccolino',
    subtitle: 'Оконная композиция с иконками',
    image: images.gallery.phoWindow,
    alt: 'Яркая неоновая вывеска в окне заведения',
  },
  {
    id: 'g5',
    title: 'Create your own reality',
    subtitle: 'Сценарная надпись для интерьера',
    image: images.gallery.createReality,
    alt: 'Неоновая надпись create your own reality',
  },
  {
    id: 'g6',
    title: 'MAD',
    subtitle: 'Вертикальная вывеска в зоне мастера',
    image: images.gallery.madTattoo,
    alt: 'Вертикальная красная вывеска MAD',
  },
  {
    id: 'g7',
    title: 'Райский кокос',
    subtitle: 'Брендовая вывеска с пиктограммой',
    image: images.gallery.rayskiyKokos,
    alt: 'Белая неоновая вывеска Райский кокос',
  },
  {
    id: 'g8',
    title: 'Accuzo',
    subtitle: 'Логотип с желтым контуром',
    image: images.gallery.accuzo,
    alt: 'Желтая неоновая вывеска Accuzo',
  },
];

export const caseItems: CaseItem[] = [
  {
    id: 'c1',
    title: 'NOODLES',
    description: 'Серия тематических неоновых символов для food-проекта.',
    image: images.gallery.noodles,
    metrics: ['Срок: 6 дней', 'Монтаж: 1 вечер', 'Формат: интерьер'],
  },
  {
    id: 'c2',
    title: 'Ha Chile',
    description: 'Контрастная вывеска для фотогеничной лестничной зоны.',
    image: images.gallery.hachime,
    metrics: ['Срок: 5 дней', 'Гарантия: 12 месяцев', 'Формат: интерьер'],
  },
  {
    id: 'c3',
    title: 'Smoking Shop',
    description: 'Логотип и графика для фасадной точки продаж.',
    image: images.gallery.smokingShop,
    metrics: ['Срок: 7 дней', 'Формат: фасад', 'Подключение: 220В'],
  },
  {
    id: 'c4',
    title: 'Black Smoke',
    description: 'Крупная надпись с мягким синим свечением в бренд-цветах.',
    image: images.gallery.blackSmoke,
    metrics: ['Срок: 4 дня', 'Формат: интерьер', 'Блок питания: скрытый'],
  },
  {
    id: 'c5',
    title: 'Счастье',
    description: 'Двухцветная композиция для арт-пространства.',
    image: images.gallery.happinessCn,
    metrics: ['Срок: 8 дней', 'Диаметр: 80 см', 'Формат: фотозона'],
  },
];

