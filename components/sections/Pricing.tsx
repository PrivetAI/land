'use client';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Быстрые решения',
    price: '60-120k',
    duration: '1-2 недели',
    description: 'Простые автоматизации и интеграции',
    features: [
      'Чатбот для одной платформы',
      'Базовая CRM интеграция',
      'Простые уведомления',
      'Документация',
      'Месяц поддержки'
    ],
    popular: false
  },
  {
    name: 'Средние проекты',
    price: '100-200k',
    duration: '2-4 недели',
    description: 'Комплексные решения с аналитикой',
    features: [
      'Мультиплатформенные боты',
      'Продвинутые интеграции',
      'Дашборды и аналитика',
      'Workflow автоматизация',
      'Обучение команды',
      '3 месяца поддержки'
    ],
    popular: true
  },
  {
    name: 'Комплексные проекты',
    price: '200-400k',
    duration: '1-2 месяца',
    description: 'Полная цифровизация процессов',
    features: [
      'Архитектура решения',
      'Множественные интеграции',
      'ИИ и машинное обучение',
      'Кастомные разработки',
      'Поэтапное внедрение',
      '6 месяцев поддержки'
    ],
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-gray-900 mb-4">Тарифы и стоимость</h2>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            Прозрачное ценообразование для проектов любой сложности
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`card relative ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white px-4 py-1 rounded-full body-sm font-medium flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  Популярный
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="heading-md text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-gray-500 ml-1">руб</span>
                </div>
                <div className="bg-gray-100 rounded-full px-3 py-1 body-sm text-gray-600 inline-block">
                  {plan.duration}
                </div>
                <p className="body text-gray-600 mt-3">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center body-sm text-gray-600">
                    <Check className="h-4 w-4 text-success mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full ${plan.popular ? 'btn-primary' : 'btn-outline'} text-center`}>
                Выбрать план
              </button>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="body text-gray-600 mb-4">
            Нужно что-то особенное? Обсудим индивидуальное решение
          </p>
          <button className="btn-outline">Обсудить проект</button>
        </motion.div>
      </div>
    </section>
  );
};