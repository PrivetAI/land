'use client';
import { motion } from 'framer-motion';
import { Bot, Workflow, BarChart3, Cog, ShoppingCart, Building2 } from 'lucide-react';
import { Service } from '@/lib/types';

const services: Service[] = [
  {
    id: '1',
    title: 'ИИ-ассистенты и автоматизация коммуникаций',
    description: 'Чатботы для клиентов, автоответчики, CRM-интеграции',
    icon: 'Bot',
    features: ['Telegram/WhatsApp боты', 'Голосовые ассистенты', 'Email автоматизация']
  },
  {
    id: '2',
    title: 'Интеграции и синхронизация данных',
    description: 'Связываем ваши системы в единую экосистему',
    icon: 'Workflow',
    features: ['API интеграции', 'Синхронизация баз данных', 'Миграция данных']
  },
  {
    id: '3',
    title: 'Аналитика и дашборды',
    description: 'Визуализация данных для принятия решений',
    icon: 'BarChart3',
    features: ['Интерактивные дашборды', 'Отчеты в реальном времени', 'Прогнозная аналитика']
  },
  {
    id: '4',
    title: 'Процессная автоматизация',
    description: 'Автоматизация рутинных бизнес-процессов',
    icon: 'Cog',
    features: ['Workflow автоматизация', 'Документооборот', 'Уведомления']
  },
  {
    id: '5',
    title: 'E-commerce автоматизация',
    description: 'Автоматизация интернет-магазинов и маркетплейсов',
    icon: 'ShoppingCart',
    features: ['Управление товарами', 'Обработка заказов', 'Маркетинг автоматизация']
  },
  {
    id: '6',
    title: 'Комплексная цифровизация',
    description: 'Полная трансформация бизнес-процессов',
    icon: 'Building2',
    features: ['Стратегия цифровизации', 'Поэтапное внедрение', 'Обучение персонала']
  }
];

const iconMap = { Bot, Workflow, BarChart3, Cog, ShoppingCart, Building2 };

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-gray-900 mb-4">Наши услуги</h2>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            Полный спектр решений для автоматизации вашего бизнеса
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                className="card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="heading-sm text-gray-900 mb-3">{service.title}</h3>
                <p className="body text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="body-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};