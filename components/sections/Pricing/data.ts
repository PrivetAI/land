import { Sparkles, Layers, Rocket } from 'lucide-react';
import { PricingPlan } from './types';

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Старт',
    price: '80-120k',
    duration: '1-2 недели',
    description: 'Быстрая автоматизация для бизнеса',
    features: [
      'AI-ассистент для обработки входящих запросов',
      'Автоматизация повторяющихся процессов',
      'FAQ-база на 50+ вопросов',
      'Базовая CRM интеграция',
      'Простая аналитика и отчеты',
      'Автоматизация отчетности',
      'Документация и инструкции',
      '2 недели технической поддержки'
    ],
    icon: Sparkles,
    popular: false,
    tag: 'Старт'
  },
  {
    name: 'Оптимальный',
    price: '120-250k',
    duration: '2-4 недели', 
    description: 'Комплексные AI-решения для роста',
    features: [
      'Мультиплатформенные AI-ассистенты',
      'Интеграция email + мессенджеры + CRM + календарь',
      'Автоматическое планирование встреч',
      'Продвинутые интеграции систем',
      'AI-ассистенты для продаж',
      'Умная сегментация клиентов',
      'Отчеты и бизнес-аналитика',
      'Обработка документов с AI',
      'Обучение сотрудников работе с AI',
      '1 месяц оптимизации'
    ],
    icon: Layers,
    popular: true,
    tag: 'Популярный'
  },
  {
    name: 'Продвинутый',
    price: '250-600k',
    duration: '1-2 месяца',
    description: 'Полная AI-трансформация компании',
    features: [
      'Индивидуальная стратегия внедрения ИИ',
      'Экосистема AI-агентов для разных департаментов',
      'Автоматизация сложных многоэтапных процессов',
      'Кастомные решения под уникальные задачи',
      'Интеграция со всеми системами компании',
      'AI-оптимизация бизнес-процессов',
      'Техническое сопровождение проекта',
      'Поэтапное внедрение с обучением',
      '2 месяца развития и масштабирования'
    ],
    icon: Rocket,
    popular: false,
    tag: 'Премиум'
  }
];
