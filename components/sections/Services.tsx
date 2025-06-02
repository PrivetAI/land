'use client';
import { motion } from 'framer-motion';
import { Bot, Link, BarChart3, Workflow, ShoppingCart, Building } from 'lucide-react';
import { Card } from '../ui/Card';

const services = [
  {
    icon: Bot,
    title: 'AI-ассистенты и автоматизация коммуникаций',
    description: 'Чат-боты, голосовые помощники, автоматизация клиентского сервиса и внутренних коммуникаций'
  },
  {
    icon: Link,
    title: 'Интеграции и синхронизация данных',
    description: 'Связываем разрозненные системы, настраиваем автоматический обмен данными между сервисами'
  },
  {
    icon: BarChart3,
    title: 'Аналитика и дашборды',
    description: 'Автоматические отчеты, визуализация KPI, системы мониторинга бизнес-процессов'
  },
  {
    icon: Workflow,
    title: 'Процессная автоматизация',
    description: 'Автоматизация документооборота, утверждений, уведомлений и бизнес-процессов'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce автоматизация',
    description: 'Управление складом, обработка заказов, синхронизация с маркетплейсами'
  },
  {
    icon: Building,
    title: 'Комплексная цифровизация',
    description: 'Полная автоматизация бизнес-процессов, создание цифровой экосистемы компании'
  }
];

export const Services = () => (
  <section id="services" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="heading-lg text-gray-900 mb-4">Наши услуги</h2>
        <p className="body-lg text-gray-600 max-w-2xl mx-auto">
          Комплексные решения для автоматизации любых бизнес-процессов
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="heading-sm text-gray-900 mb-3">{service.title}</h3>
                <p className="body text-gray-600">{service.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);