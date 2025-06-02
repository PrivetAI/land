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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[0.9] transform-gpu">
            <div
              className="block opacity-0 translate-y-8"
              style={{
                animation: 'slideUpFade 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                animationDelay: '0.2s'
              }}
            >
              <span className="text-gray-900" style={{ background: 'none', backgroundClip: 'unset' }}>
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
              <span className="text-blue-600" style={{ background: 'none', backgroundClip: 'unset' }}>
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
              <span className="text-gray-800" style={{ background: 'none', backgroundClip: 'unset' }}>
                бизне са
              </span>
            </div>
          </h2>


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
        `
      }} />
    </section>
  );
} 