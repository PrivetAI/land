# ТЗ: Лендинг с AI-чатботом

## Цель
Маркетинговый лендинг для команды разработчиков-автоматизаторов с AI-чатботом и блогом.

## Стек
- Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- MDX для блога, Zustand для стейта, Lucide React для иконок
- Интеграция с FastAPI backend

## Структура
```
app/
├── page.tsx                    # Главная
├── blog/page.tsx              # Список статей  
├── blog/[slug]/page.tsx       # Статья
└── layout.tsx                 # Layout

components/
├── sections/                  # Hero, Services, Process, Pricing, About, Contact
├── chat/                      # ChatBot, ChatMessage, ChatInput, ChatButton
├── blog/                      # BlogCard, BlogPost, BlogList
└── ui/                        # Button, Card, Modal, Input

lib/
├── api.ts                     # API клиент
├── types.ts                   # Типы
└── utils.ts                   # Утилиты
```

## Типы данных
```typescript
interface ChatMessage { id: string; role: 'user'|'assistant'; content: string; timestamp: Date; }
interface ChatState { messages: ChatMessage[]; isLoading: boolean; isOpen: boolean; }
interface BlogPost { slug: string; title: string; excerpt: string; content: string; publishedAt: Date; category: string; readTime: number; }
interface Service { id: string; title: string; description: string; icon: string; features: string[]; }
interface ProcessStep { step: number; title: string; description: string; duration: string; deliverables: string[]; }
```

## Секции лендинга

### Hero
- H1: "Быстрая автоматизация бизнеса с измеримым ROI"
- H2: "Команда разработчиков-энтузиастов"
- 2 CTA: "Получить консультацию" / "Посмотреть услуги"
- Анимации: печатающийся эффект, fade-in

### Services (сетка 2x3)
1. ИИ-ассистенты и автоматизация коммуникаций
2. Интеграции и синхронизация данных
3. Аналитика и дашборды
4. Процессная автоматизация
5. E-commerce автоматизация
6. Комплексная цифровизация

### Process (временная шкала)
1. Экспресс-аудит (2-3 дня)
2. Быстрое прототипирование (3-7 дней)
3. Полноценное внедрение (1-4 недели)
4. Запуск и оптимизация (1-2 недели)

### Pricing (3 тарифа)
- Быстрые решения: 60-120k руб | 1-2 недели
- Средние проекты: 100-200k руб | 2-4 недели
- Комплексные проекты: 200-400k руб | 1-2 месяца

### About
- "Почему мы лучше конкурентов" (4 пункта)
- Принципы работы (5 преимуществ)

### Contact
- Процесс начала работы (4 шага)
- инпуты для ввода сообщения и имени
- пространство для ответов аи чат бота

## Дизайн система

### Цвета
```css
:root {
  --primary: #2563eb; --secondary: #7c3aed; --accent: #06b6d4;
  --gray-50: #f8fafc; --gray-100: #f1f5f9; --gray-900: #0f172a;
  --success: #10b981; --warning: #f59e0b; --error: #ef4444;
  --gradient-primary: linear-gradient(135deg, var(--primary), var(--secondary));
}
```

### Стили
```css
.heading-xl { @apply text-4xl md:text-6xl font-bold tracking-tight; }
.heading-lg { @apply text-2xl md:text-4xl font-semibold tracking-tight; }
.body { @apply text-base leading-relaxed; }
.gradient-text { @apply bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent; }
.btn-primary { @apply bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105; }
.btn-outline { @apply border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary hover:text-white; }
.card { @apply bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1; }
.fade-in { @apply animate-in fade-in duration-500; }
.slide-up { @apply animate-in slide-in-from-bottom-4 duration-500; }
```

## AI-чатбот

### Функции
- отображение истории сообщений
- Отправка на backend, получение ответов
- Сохранение истории в сессии

### API
```typescript
// POST /api/chat
interface ChatRequest { message: string; context: 'landing_page'; history: ChatMessage[]; }
interface ChatResponse { message: string; timestamp: string; }
```

### UX
- Анимация печати, автоскролл
- Индикатор отправки, счетчик непрочитанных

## Блог
- /blog - список статей
- /blog/[slug] - отдельная статья
- MDX файлы в content/blog/
- Метаданные в frontmatter

### Примеры статей
- "Как ИИ меняет автоматизацию бизнеса в 2025 году"
- "5 процессов, которые нужно автоматизировать в первую очередь"
- "Интеграция CRM и мессенджеров: пошаговое руководство"
- "ROI автоматизации: как измерить эффективность"
- "Чатботы для бизнеса: от идеи до внедрения"

## Технические требования
- Время загрузки < 3 сек
- Mobile-first, 320px-2560px
- SEO: semantic HTML, Open Graph, JSON-LD, sitemap
- Браузеры: Chrome/Firefox/Safari/Edge 100+