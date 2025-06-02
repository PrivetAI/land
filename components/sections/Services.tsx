'use client';
import React from 'react';
import { Bot, Link, BarChart3, Workflow, ShoppingCart, Building } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI-агенты для продаж',
    description: 'Автоматизация всей воронки продаж от лидогенерации до сделки. Скоринг и квалификация лидов, персонализация предложений, автоматические follow-up, прогнозирование закрытия сделок и распределение лидов между менеджерами'
  },
  {
    icon: Bot,
    title: 'AI-ассистенты и автоматизация коммуникаций',
    description: 'Умные чат-боты и голосовые помощники для клиентского сервиса. Автоматизация обработки обращений, мгновенные ответы клиентам, эскалация сложных вопросов и автоматизация внутренних коммуникаций компании'
  },
  {
    icon: Link,
    title: 'AI-агенты для маркетинга',
    description: 'Интеллектуальная автоматизация маркетинговых кампаний и контента. Генерация персонализированного контента, оптимизация рекламных кампаний, AI-сегментация аудитории, A/B тестирование на автопилоте и анализ настроений в соцсетях',
  },
  {
    icon: BarChart3,
    title: 'Мультиагентные системы',
    description: 'Команда AI-агентов работает синхронно для решения комплексных задач. Координация между агентами, автоматическое делегирование задач, обмен данными между системами, масштабирование под нагрузку и непрерывное самообучение'
  },
  {
    icon: Link,
    title: 'Интеграции и синхронизация данных',
    description: 'Связываем разрозненные системы бизнеса в единую AI-экосистему. API интеграции с CRM/ERP, синхронизация данных в реальном времени, автоматический обмен информацией между сервисами и умные уведомления'
  },
  {
    icon: Workflow,
    title: 'Процессная автоматизация',
    description: 'Автоматизация бизнес-процессов с использованием искусственного интеллекта. Умная обработка документооборота, автоматические утверждения и согласования, интеллектуальные уведомления и оптимизация рабочих процессов'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce автоматизация',
    description: 'AI-решения для интернет-торговли и маркетплейсов. Умное управление складом и ассортиментом, автоматическая обработка заказов, синхронизация с маркетплейсами, динамическое ценообразование и персонализация предложений'
  },
  {
    icon: Building,
    title: 'Комплексная AI-трансформация',
    description: 'Полная цифровизация бизнеса с внедрением искусственного интеллекта. Аудит и стратегия внедрения AI, поэтапная автоматизация всех процессов, создание цифровой экосистемы компании, обучение команды и постоянная оптимизация'
  }
];

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}>
    {children}
  </div>
);

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Анимированные частицы для всей секции */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Частицы в заголовке */}
        <div className="absolute top-32 left-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-0" style={{
          animation: 'float 4s ease-in-out infinite, fadeIn 0.5s ease-out 1.5s forwards'
        }} />
        <div className="absolute top-24 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0" style={{
          animation: 'float 3s ease-in-out infinite 1s, fadeIn 0.5s ease-out 2s forwards'
        }} />
        <div className="absolute top-40 left-1/3 w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-0" style={{
          animation: 'float 3.5s ease-in-out infinite 0.5s, fadeIn 0.5s ease-out 2.5s forwards'
        }} />
        
        {/* Частицы в области карточек */}
        <div className="absolute top-1/2 left-12 w-1 h-1 bg-indigo-300 rounded-full opacity-0" style={{
          animation: 'orbit 8s linear infinite, fadeIn 0.8s ease-out 3s forwards'
        }} />
        <div className="absolute top-3/4 right-16 w-0.5 h-0.5 bg-pink-300 rounded-full opacity-0" style={{
          animation: 'drift 6s ease-in-out infinite, fadeIn 0.8s ease-out 3.5s forwards'
        }} />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-emerald-300 rounded-full opacity-0" style={{
          animation: 'pulse 4s ease-in-out infinite, fadeIn 0.8s ease-out 4s forwards'
        }} />
        <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-orange-300 rounded-full opacity-0" style={{
          animation: 'zigzag 7s ease-in-out infinite, fadeIn 0.8s ease-out 4.5s forwards'
        }} />
        <div className="absolute top-2/3 left-2/3 w-0.5 h-0.5 bg-teal-300 rounded-full opacity-0" style={{
          animation: 'spiral 5s linear infinite, fadeIn 0.8s ease-out 5s forwards'
        }} />
        
        {/* Дополнительные частицы */}
        <div className="absolute top-1/4 left-3/4 w-1 h-1 bg-violet-300 rounded-full opacity-0" style={{
          animation: 'float 3.2s ease-in-out infinite 2s, fadeIn 0.8s ease-out 5.5s forwards'
        }} />
        <div className="absolute bottom-1/4 right-1/5 w-0.5 h-0.5 bg-rose-300 rounded-full opacity-0" style={{
          animation: 'wave 6s sine infinite, fadeIn 0.8s ease-out 6s forwards'
        }} />
        <div className="absolute top-3/5 left-1/6 w-1.5 h-1.5 bg-sky-300 rounded-full opacity-0" style={{
          animation: 'breathe 4.5s ease-in-out infinite, fadeIn 0.8s ease-out 6.5s forwards'
        }} />
        <div className="absolute bottom-2/5 right-2/5 w-1 h-1 bg-amber-300 rounded-full opacity-0" style={{
          animation: 'pendulum 5.5s ease-in-out infinite, fadeIn 0.8s ease-out 7s forwards'
        }} />
        <div className="absolute top-4/5 left-1/2 w-0.5 h-0.5 bg-lime-300 rounded-full opacity-0" style={{
          animation: 'rotate 8s linear infinite, fadeIn 0.8s ease-out 7.5s forwards'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative overflow-hidden">
          <div className="relative">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[0.9] transform-gpu">
              <div 
                className="block opacity-0 translate-y-8"
                style={{
                  animation: 'slideUpFade 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                  animationDelay: '0.2s'
                }}
              >
                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                  Революция
                </span>
              </div>
              <div 
                className="block opacity-0 translate-y-8"
                style={{
                  animation: 'slideUpFade 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                  animationDelay: '0.5s'
                }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  автоматизации
                </span>
              </div>
              <div 
                className="block opacity-0 translate-y-8"
                style={{
                  animation: 'slideUpFade 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                  animationDelay: '0.8s'
                }}
              >
                <span className="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                  бизнеса
                </span>
              </div>
            </h2>
          </div>

          <div 
            className="opacity-0 translate-y-6"
            style={{
              animation: 'slideUpFade 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              animationDelay: '1.2s'
            }}
          >
            <p className="text-xl md:text-2xl leading-relaxed text-gray-600 max-w-4xl mx-auto font-medium">
              Трансформируем ваш бизнес с помощью передовых AI-технологий и 
              <span className="text-gray-800 font-semibold"> интеллектуальной автоматизации процессов</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="opacity-0 translate-y-4"
                style={{
                  animation: `slideUp 0.6s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <Card className="h-full group hover:shadow-xl hover:border-blue-100 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideUp {
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          @keyframes slideUpFade {
            from {
              opacity: 0;
              transform: translateY(2rem);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          
          @keyframes orbit {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(20px, -10px) rotate(90deg); }
            50% { transform: translate(0, -20px) rotate(180deg); }
            75% { transform: translate(-20px, -10px) rotate(270deg); }
            100% { transform: translate(0, 0) rotate(360deg); }
          }
          
          @keyframes drift {
            0%, 100% { transform: translateX(0px) translateY(0px); }
            25% { transform: translateX(-15px) translateY(-8px); }
            50% { transform: translateX(10px) translateY(-5px); }
            75% { transform: translateX(8px) translateY(3px); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.3); opacity: 0.4; }
          }
          
          @keyframes zigzag {
            0% { transform: translateX(0px) translateY(0px); }
            25% { transform: translateX(15px) translateY(-10px); }
            50% { transform: translateX(-10px) translateY(-20px); }
            75% { transform: translateX(12px) translateY(-15px); }
            100% { transform: translateX(0px) translateY(0px); }
          }
          
          @keyframes spiral {
            0% { transform: rotate(0deg) translateX(15px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(15px) rotate(-360deg); }
          }
          
          @keyframes wave {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-8px) translateX(5px); }
            50% { transform: translateY(0px) translateX(10px); }
            75% { transform: translateY(8px) translateX(5px); }
          }
          
          @keyframes breathe {
            0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.6; }
            50% { transform: scale(1.4) rotate(180deg); opacity: 0.3; }
          }
          
          @keyframes pendulum {
            0%, 100% { transform: rotate(0deg) translateY(0px); }
            25% { transform: rotate(15deg) translateY(-5px); }
            50% { transform: rotate(0deg) translateY(-8px); }
            75% { transform: rotate(-15deg) translateY(-5px); }
          }
          
          @keyframes rotate {
            0% { transform: rotate(0deg) translateX(12px); }
            100% { transform: rotate(360deg) translateX(12px); }
          }
        `
      }} />
    </section>
  );
}