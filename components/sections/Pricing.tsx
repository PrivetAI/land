'use client';
import { motion } from 'framer-motion';
import { Check, Star, Zap, TrendingUp } from 'lucide-react';

const plans = [
  {
    name: 'Быстрые',
    price: '60-120k',
    duration: '1-2 недели',
    description: 'Простые автоматизации с быстрым ROI',
    roi: 'Окупается за 1-2 месяца',
    features: [
      'Чатбот для одной платформы',
      'Базовая CRM интеграция', 
      'Простые уведомления',
      'Документация и инструкции',
      '1 месяц технической поддержки'
    ],
    popular: false,
    badge: 'Старт'
  },
  {
    name: 'Средние',
    price: '100-200k',
    duration: '2-4 недели', 
    description: 'Комплексные решения с аналитикой',
    roi: 'ROI 200-300% за полгода',
    features: [
      'Мультиплатформенные чат-боты',
      'Продвинутые интеграции систем',
      'Отчеты и бизнес-аналитика',
      'Workflow автоматизация процессов',
      'Обучение команды',
      '2 месяца поддержки и доработок'
    ],
    popular: true,
    badge: 'Хит продаж'
  },
  {
    name: 'Комплексные',
    price: '200-400k',
    duration: '1-2 месяца',
    description: 'Полная цифровизация бизнеса',
    roi: '+40% эффективности',
    features: [
      'Проектирование IT-архитектуры',
      'Множественные интеграции',
      'Кастомные разработки под задачи',
      'Поэтапное внедрение с обучением',
      '3 месяца поддержки и развития'
    ],
    popular: false,
    badge: 'Максimum'
  }
];

export const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-gray-900 mb-4">Тарифы и стоимость</h2>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            Прозрачные цены • Гарантированный результат • Поэтапная оплата
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative ${
                plan.popular 
                  ? 'md:scale-110 md:z-10' 
                  : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className={`
                card h-full relative overflow-hidden
                ${plan.popular 
                  ? 'ring-2 ring-primary shadow-xl border-primary/20' 
                  : 'hover:shadow-lg'
                }
              `}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 text-sm font-semibold">
                    <Star className="inline h-4 w-4 mr-1" />
                    {plan.badge}
                  </div>
                )}
                
                <div className={`${plan.popular ? 'pt-12' : 'pt-6'} pb-6`}>
                  {/* Бейдж для непопулярных планов */}
                  {!plan.popular && (
                    <div className="mb-4">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  
                  <h3 className="heading-md text-gray-900 mb-2">{plan.name}</h3>
                  
                  {/* Цена и сроки */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center mb-1">
                      <span className="text-3xl font-bold gradient-text">{plan.price}</span>
                      <span className="text-gray-500 ml-1">₽</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <Zap className="h-4 w-4 text-orange-500" />
                      <span className="text-gray-600">{plan.duration}</span>
                    </div>
                  </div>
                  
                  {/* ROI метрика */}
                  <div className="mb-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                      <TrendingUp className="h-4 w-4 text-green-600 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-green-800">{plan.roi}</div>
                    </div>
                  </div>
                  
                  <p className="body-sm text-gray-600 text-center mb-6">{plan.description}</p>
                  
                  {/* Список функций */}
                  <ul className="space-y-2 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <Check className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA кнопка */}
                  <button 
                    className={`w-full ${
                      plan.popular ? 'btn-primary' : 'btn-outline'
                    } text-center`}
                    onClick={() => {
                      // Scroll to contact section or open chat
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {plan.popular ? 'Выбрать план' : 'Узнать подробнее'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        
      
      </div>
    </section>
  );
};