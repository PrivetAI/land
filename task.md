# ТЗ: Лендинг с AI-чатботом (Обновлено v3)

## Цель
Маркетинговый лендинг для команды разработчиков-автоматизаторов с AI-чатботом для консультаций.

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
├── chat/                      # ChatMessage, ChatInput, TypingIndicator
├── blog/                      # BlogCard, BlogPost, BlogList
└── ui/                        # Button, Card, Input
```

## Типы данных
```typescript
interface ChatMessage { 
  id: string; 
  role: 'user' | 'assistant'; 
  content: string; 
  timestamp: Date; 
}

interface ChatState {
  isAuthenticated: boolean;
  telegram: string;
  messages: ChatMessage[];
  userMessageCount: number;
}
```

## Секции лендинга

### Hero
- H1: "Автоматизация бизнеса с AI за недели, а не месяцы"
- H2: "Команда разработчиков, которая увеличивает прибыль малого и среднего бизнеса"
- 2 CTA: "Получить консультацию" / "Посмотреть услуги"
- Анимации: печатающийся эффект, fade-in

### Services (сетка 2x3)
1. AI-ассистенты и коммуникации (*Результат: 80% обращений без участия человека*)
2. Интеграции и синхронизация данных (*Результат: экономия 20+ часов в неделю*)
3. Аналитика и дашборды (*Результат: +25% точность планирования*)
4. Процессная автоматизация (*Результат: в 5 раз быстрее обработка*)
5. E-commerce автоматизация (*Результат: +40% средний чек*)
6. Комплексная цифровизация (*Результат: +40% эффективность*)

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
- "Почему мы лучше конкурентов" (4 пункта):
  - Быстрее крупных компаний - нет бюрократии
  - Опытнее фрилансеров - команда с разными компетенциями
  - Дешевле системных интеграторов - меньше накладных расходов
  - Современнее старых IT-компаний - актуальный стек
- Принципы работы (5 преимуществ):
  - Скоростное преимущество - MVP за неделю
  - Технологическое преимущество - AI-first подход
  - Экономическое преимущество - фиксированная стоимость
  - Процессное преимущество - Agile и прозрачность
  - Экспертное преимущество - энтузиазм к технологиям

### Contact (ОБНОВЛЕНО v3)

**логика взаимодействия:**
1. Пользователь может сразу начать общение с ИИ
2. После 3 сообщений от пользователя появляется диплинк на телеграм бота
3. Подпись: "Продолжите общение в Telegram для получения персональных рекомендаций"
4. История предыдущих сообщений остается видимой
5. Поле ввода блокируется с призывом перейти в Telegram

**Макет:**
- Заголовок: "Консультация с ИИ-ассистентом"
- Область чата (фиксированная высота с прокруткой)
- Блок с диплинком на Telegram (появляется в чате после 3 сообщений)
- Кнопка "Продолжить в Telegram" с иконкой

**Ограничения:**
- Лимит: 3 сообщения от пользователя на сайте
- После лимита поле ввода блокируется
- Placeholder меняется на "Продолжите общение в Telegram..."

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
```

## AI-чатбот (ОБНОВЛЕНО v3)

### Новый процесс взаимодействия
1. Пользователь попадает в секцию Contact
2. Видит пустой чат с приглашением к общению
3. Может сразу отправить сообщение (счетчик: 1/3)
4. После 3-го сообщения появляется блок с диплинком на Telegram бота
5. Поле ввода блокируется с призывом перейти в Telegram
6. Кнопка "Продолжить в Telegram" открывает бота

### Диплинк на Telegram бота
- URL: `https://t.me/your_bot_name?start=web_chat`
- Кнопка с иконкой Telegram
- Текст: "Продолжить в Telegram"
- Подпись: "Получите персональные рекомендации и детальную консультацию"

### API
```typescript
// POST /api/chat
interface ChatRequest { 
  message: string; 
  history: ChatMessage[]; 
}
interface ChatResponse { 
  message: string; 
  timestamp: string; 
  shouldRedirectToTelegram?: boolean; // После 3 сообщений
}
```

### UX улучшения
- Анимация появления блока с диплинком
- Индикатор печати бота
- Блокировка ввода при достижении лимита
- Плавный переход к Telegram кнопке

### Состояние чата
```typescript
interface ChatStore {
  userMessageCount: number; // Счетчик сообщений пользователя
  showTelegramRedirect: boolean; // Показать диплинк на Telegram
  // ... остальные поля
}
```

## Блог
- /blog - список статей
- /blog/[slug] - отдельная статья
- MDX файлы в content/blog/

## Технические требования
- Без модалов, все встроено в страницу
- Mobile-first responsive дизайн
- SEO оптимизация
- Время загрузки < 3 сек
- История чата сохраняется в текущей сессии
- Диплинк на Telegram бота после 3 сообщений
- Плавные анимации переходов состояний чата