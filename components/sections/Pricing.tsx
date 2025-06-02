'use client';
import { motion } from 'framer-motion';
import { Check, Clock, Sparkles, Layers, Rocket } from 'lucide-react';

const plans = [
  {
    name: 'Быстрые',
    price: '60-120k',
    duration: '1-2 недели',
    description: 'Простые автоматизации с быстрым ROI',
    features: [
      'Чатбот для одной платформы',
      'Базовая CRM интеграция', 
      'Простые уведомления',
      'Документация и инструкции',
      '1 месяц технической поддержки'
    ],
    icon: Sparkles,
    gradient: 'from-blue-500 to-cyan-500',
    popular: false
  },
  {
    name: 'Средние',
    price: '100-200k',
    duration: '2-4 недели', 
    description: 'Комплексные решения с аналитикой',
    features: [
      'Мультиплатформенные чат-боты',
      'Продвинутые интеграции систем',
      'Отчеты и бизнес-аналитика',
      'Workflow автоматизация процессов',
      'Обучение команды',
      '2 месяца поддержки и доработок'
    ],
    icon: Layers,
    gradient: 'from-purple-500 to-pink-500',
    popular: true
  },
  {
    name: 'Комплексные',
    price: '200-400k',
    duration: '1-2 месяца',
    description: 'Полная цифровизация бизнеса',
    features: [
      'Проектирование IT-архитектуры',
      'Множественные интеграции',
      'Кастомные разработки под задачи',
      'Поэтапное внедрение с обучением',
      '3 месяца поддержки и развития'
    ],
    icon: Rocket,
    gradient: 'from-orange-500 to-red-500',
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-400/10 to-orange-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">Тарифы и стоимость</h2>
          <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
            Прозрачные цены • Гарантированный результат • Поэтапная оплата
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={plan.name}
                className={`relative group ${
                  plan.popular ? 'md:scale-105 md:z-10' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className={`
                  relative h-full bg-white/70 backdrop-blur-xl rounded-2xl border border-white/20 
                  shadow-xl shadow-gray-200/50 overflow-hidden
                  ${plan.popular 
                    ? 'ring-2 ring-blue-500/30 shadow-blue-200/30' 
                    : 'hover:shadow-2xl hover:shadow-gray-300/50'
                  }
                  transition-all duration-500 group-hover:border-white/40
                `}>
                  
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon header */}
                  <div className="relative pt-8 pb-6 text-center">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.gradient} shadow-lg mb-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  </div>
                  
                  <div className="px-8 pb-8">
                    {/* Цена */}
                    <div className="text-center mb-6">
                      <div className="flex items-baseline justify-center mb-2">
                        <span className={`text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                          {plan.price}
                        </span>
                        <span className="text-gray-500 ml-1 text-lg">₽</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600 font-medium">{plan.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm leading-relaxed text-gray-600 text-center mb-8 leading-relaxed">
                      {plan.description}
                    </p>
                    
                    {/* Список функций */}
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start text-sm text-gray-700"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                        >
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center mr-3 mt-0.5`}>
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Hover effect border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};