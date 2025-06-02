'use client';
import { motion } from 'framer-motion';
import { Check, Clock, Sparkles, Layers, Rocket, Star } from 'lucide-react';

const plans = [
  {
    name: 'Быстрые',
    price: '60-120k',
    duration: '1-2 недели',
    description: 'Простые автоматизации с быстрым ROI для малого бизнеса',
    features: [
      'Чатбот для одной платформы',
      'Базовая CRM интеграция', 
      'Простые уведомления',
      'Документация и инструкции',
      '1 месяц технической поддержки'
    ],
    icon: Sparkles,
    popular: false,
    tag: 'Старт'
  },
  {
    name: 'Средние',
    price: '100-200k',
    duration: '2-4 недели', 
    description: 'Комплексные решения с углубленной аналитикой и интеграциями',
    features: [
      'Мультиплатформенные чат-боты',
      'Продвинутые интеграции систем',
      'Отчеты и бизнес-аналитика',
      'Workflow автоматизация процессов',
      'Обучение команды',
      '2 месяца поддержки и доработок',
      'Техническое сопровождение внедрения'
    ],
    icon: Layers,
    popular: true,
    tag: 'Популярный'
  },
  {
    name: 'Комплексные',
    price: '200-400k',
    duration: '1-2 месяца',
    description: 'Полная цифровизация бизнеса',
    features: [
      'Проектирование индивидуальной IT-архитектуры',
      'Множественные интеграции',
      'Кастомные разработки под уникальные задачи',
      'Поэтапное внедрение с глубоким обучением',
      '3 месяца поддержки и развития решения',
      'Гарантия результата и масштабирования'
    ],
    icon: Rocket,
    popular: false,
    tag: 'Премиум'
  }
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/3 via-secondary/3 to-accent/3" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/6 rounded-full blur-2xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-6">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Прозрачное ценообразование</span>
          </div>
          
          <h2 className="heading-xl text-gray-900 mb-6">
            Тарифы и <span className="gradient-text">стоимость</span>
          </h2>
          
          <p className="body-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Выберите оптимальное решение для автоматизации вашего бизнеса.<br />
            Гарантированный результат • Поэтапная оплата • Постоянная поддержка
          </p>
          
          {/* Benefits bar */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            {['Без скрытых платежей', 'Гарантия результата', 'Бесплатная консультация'].map((benefit, i) => (
              <motion.div 
                key={benefit}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Check className="h-4 w-4 text-primary" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const isPopular = plan.popular;
            
            return (
              <motion.div
                key={plan.name}
                className={`relative group ${isPopular ? 'lg:scale-105 lg:z-20' : 'lg:z-10'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                whileHover={{ 
                  y: isPopular ? -5 : -8, 
                  transition: { duration: 0.3 } 
                }}
              >
                {/* Popular badge */}
                {isPopular && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {plan.tag}
                    </div>
                  </motion.div>
                )}
                
                <div className={`
                  relative h-full bg-white/90 backdrop-blur-xl rounded-3xl border-2
                  ${isPopular 
                    ? 'border-primary/30 shadow-2xl shadow-primary/20 bg-gradient-to-b from-white via-white to-primary/5' 
                    : 'border-white/40 shadow-xl shadow-gray-200/60'
                  }
                  overflow-hidden transition-all duration-500 group-hover:border-primary/40
                  ${isPopular ? 'ring-4 ring-primary/10' : ''}
                `}>
                  
                  {/* Animated background gradient */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-700
                  `} />
                  
                  {/* Header section */}
                  <div className="relative pt-10 pb-8 text-center">
                    {/* Tag for all plans */}
                    <div className={`
                      inline-block px-3 py-1 rounded-full text-xs font-medium mb-4
                      ${isPopular 
                        ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                        : 'bg-gray-100 text-gray-600'
                      }
                    `}>
                      {plan.tag}
                    </div>
                    
                    {/* Icon */}
                    <div className={`
                      inline-flex p-5 rounded-2xl mb-6 shadow-lg
                      ${isPopular 
                        ? 'bg-gradient-to-br from-primary to-secondary shadow-primary/30' 
                        : 'bg-gradient-to-br from-gray-600 to-gray-700 shadow-gray-400/30'
                      }
                    `}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    
                    <h3 className="heading-md text-gray-900 mb-3">{plan.name}</h3>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline justify-center mb-2">
                        <span className={`
                          text-5xl font-bold
                          ${isPopular 
                            ? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent' 
                            : 'text-gray-900'
                          }
                        `}>
                          {plan.price}
                        </span>
                        <span className="text-gray-500 ml-2 text-xl">₽</span>
                      </div>
                      
                      <div className="flex items-center justify-center gap-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600 font-medium">{plan.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-8 pb-8">
                    <p className="body text-gray-600 text-center mb-8 leading-relaxed">
                      {plan.description}
                    </p>
                    
                    {/* Features list */}
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-start body-sm text-gray-700"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.08 }}
                        >
                          <div className={`
                            flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-0.5
                            ${isPopular 
                              ? 'bg-gradient-to-br from-primary to-secondary shadow-sm' 
                              : 'bg-gradient-to-br from-gray-600 to-gray-700'
                            }
                          `}>
                            <Check className="h-3.5 w-3.5 text-white" />
                          </div>
                          <span className="leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Animated border effect */}
                  <div className={`
                    absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none
                    transition-opacity duration-500
                    ${isPopular ? 'bg-gradient-to-br from-primary/20 to-secondary/20' : 'bg-gradient-to-br from-gray-400/10 to-gray-600/10'}
                  `} />
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Bottom section */}
        <motion.div 
          className="text-center mt-16 pt-12 border-t border-gray-200/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="body text-gray-600 mb-6">
            Не нашли подходящий тариф? Мы создадим индивидуальное решение под ваши задачи
          </p>
          
          <motion.button
            className="btn-outline hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Получить персональное предложение
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};