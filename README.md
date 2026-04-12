# aneon369.ru

Одностраничный сайт-визитка для производства неоновых вывесок.

Технологии:
- React + TypeScript
- Vite
- Tailwind CSS

## Быстрый старт

```bash
npm install
npm run dev
```

Локально сайт откроется на `http://localhost:5173`.

Сборка production:

```bash
npm run build
npm run preview
```

## Структура проекта

```text
src/
  assets/images/                # все изображения
  components/
    sections/                   # секции лендинга
    ui/                         # переиспользуемые UI-компоненты
  data/                         # весь редактируемый контент
  lib/
    leads.ts                    # отправка заявок с форм
  types/                        # типы контента
```

## Где редактировать контент

Основной принцип: тексты и медиа вынесены в `src/data/*`, а не разбросаны по JSX.

- Тексты hero, производство, формы, footer:  
  `src/data/siteContent.ts`
- Галерея и карточки работ:  
  `src/data/gallery.ts`
- FAQ:  
  `src/data/faq.ts`
- Контакты (телефон, мессенджеры, адрес):  
  `src/data/contacts.ts`
- Реестр изображений:  
  `src/data/images.ts`

## Как заменить фото

1. Добавьте файл в `src/assets/images/`.
2. Подключите файл в `src/data/images.ts`.
3. Используйте его в нужном data-файле (`gallery.ts` или `siteContent.ts`).

## Формы и заявки

На сайте 2 формы:
- «Рассчитать проект»
- «Консультация»

Обе отправляют данные на email через `src/lib/leads.ts`.
Текущий email получателя: `a.neon369@mail.ru`.

Если нужно сменить почту, поменяйте значение `LEADS_EMAIL` в:
- `src/lib/leads.ts`

## Навигация

Верхнее меню (dropdown) находится в:
- `src/components/sections/TopNav.tsx`

Переходы к секциям плавные (`smooth scroll`) настроены в:
- `src/styles.css`

## Деплой

Проект деплоится из GitHub (`main`).

Важные файлы конфигурации:
- `netlify.toml` (если используете Netlify)
- настройки домена/DNS в Cloudflare или у регистратора

## Git workflow

```bash
git add .
git commit -m "Описание изменений"
git push
```

---

Если нужно, можно расширить README отдельными блоками:
- чеклист перед релизом,
- инструкция для контент-менеджера,
- карта всех секций с точками редактирования.
