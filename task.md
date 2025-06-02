# ТЗ: Лендинг с AI-чатботом (v3)

## Стек
Next.js 14, TypeScript, Tailwind CSS, Framer Motion, MDX, Zustand, Lucide React, FastAPI

## Структура
```
app/
├── page.tsx, blog/page.tsx, blog/[slug]/page.tsx, layout.tsx
components/
├── sections/ # Hero, Services, Process, Pricing, About, Contact
├── chat/ # ChatMessage, ChatInput, TypingIndicator
├── blog/ # BlogCard, BlogPost, BlogList
└── ui/ # Button, Card, Input
```

## Типы
```typescript
interface ChatMessage { id: string; role: 'user'|'assistant'; content: string; timestamp: Date; }
interface ChatState { isAuthenticated: boolean; telegram: string; messages: ChatMessage[]; userMessageCount: number; }
```

## Секции

### Hero
- H1: "Автоматизация бизнеса с AI за недели, а не месяцы"
- H2: "Команда разработчиков, которая увеличивает прибыль малого и среднего бизнеса"
- CTA: "Получить консультацию" / "Посмотреть услуги"

### Services (2x3)
1. AI-ассистенты (*80% обращений без человека*)
2. Интеграции данных (*экономия 20+ часов/неделю*)
3. Аналитика (*+25% точность планирования*)
4. Процессная автоматизация (*в 5 раз быстрее*)
5. E-commerce (*+40% средний чек*)
6. Комплексная цифровизация (*+40% эффективность*)

### Process
1. Экспресс-аудит (2-3 дня)
2. Прототипирование (3-7 дней)
3. Внедрение (1-4 недели)
4. Запуск (1-2 недели)

### Pricing
- Быстрые: 60-120k | 1-2 недели
- Средние: 100-200k | 2-4 недели
- Комплексные: 200-400k | 1-2 месяца

### About
**Наши преимущества:**
- Фокус на ROI - каждое решение приносит измеримую прибыль
- Быстрый результат - первые результаты через 1-2 недели
- Надежность - проверенные технологии и подходы
- Инновации - последние достижения ИИ и автоматизации

**Принципы работы:**
- Клиентоориентированность - ваш успех наш приоритет
- Качество - высокие стандарты в каждом проекте
- Скорость - быстрое внедрение без потери качества
- Энтузиазм - мы любим то, что делаем

### Contact - AI-чат
**Логика:**
1. Пользователь начинает общение
2. После 3 сообщений появляется диплинк Telegram
3. Поле блокируется с призывом перейти в Telegram
4. История остается видимой

**Лимиты:** 3 сообщения на сайте, затем редирект в Telegram

## Дизайн
```css
:root {
  --primary: #2563eb; --secondary: #7c3aed; --accent: #06b6d4;
  --gray-50: #f8fafc; --gray-900: #0f172a;
}
.btn-primary { @apply bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105; }
.card { @apply bg-white rounded-xl shadow-sm border p-6 hover:shadow-md hover:-translate-y-1; }
```

## API
```typescript
// POST /api/chat
interface ChatRequest { message: string; history: ChatMessage[]; }
interface ChatResponse { message: string; timestamp: string; shouldRedirectToTelegram?: boolean; }
```

**Диплинк:** `https://t.me/your_bot_name?start=web_chat`