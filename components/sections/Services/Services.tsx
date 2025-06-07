'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Target, MessageSquare, Megaphone, Network, Link2, Cog, ShoppingBag, Zap } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'AI-агенты для продаж',
    description: 'Автоматизация всей воронки продаж от лидогенерации до сделки. Скоринг и квалификация лидов, персонализация предложений, автоматические follow-up, прогнозирование закрытия сделок и распределение лидов между менеджерами'
  },
  {
    icon: MessageSquare,
    title: 'AI-ассистенты и автоматизация коммуникаций',
    description: 'Умные чат-боты и голосовые помощники для клиентского сервиса. Автоматизация обработки обращений, мгновенные ответы клиентам, эскалация сложных вопросов и автоматизация внутренних коммуникаций компании'
  },
  {
    icon: Megaphone,
    title: 'AI-агенты для маркетинга',
    description: 'Интеллектуальная автоматизация маркетинговых кампаний и контента. Генерация персонализированного контента, оптимизация рекламных кампаний, AI-сегментация аудитории, A/B тестирование на автопилоте и анализ настроений в соцсетях',
  },
  {
    icon: Network,
    title: 'Мультиагентные системы',
    description: 'Команда AI-агентов работает синхронно для решения комплексных задач. Координация между агентами, автоматическое делегирование задач, обмен данными между системами, масштабирование под нагрузку и непрерывное самообучение'
  },
  {
    icon: Link2,
    title: 'Интеграции и синхронизация данных',
    description: 'Связываем разрозненные системы бизнеса в единую AI-экосистему. API интеграции с CRM/ERP, синхронизация данных в реальном времени, автоматический обмен информацией между сервисами и умные уведомления'
  },
  {
    icon: Cog,
    title: 'Процессная автоматизация',
    description: 'Автоматизация бизнес-процессов с использованием искусственного интеллекта. Умная обработка документооборота, автоматические утверждения и согласования, интеллектуальные уведомления и оптимизация рабочих процессов'
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce автоматизация',
    description: 'AI-решения для интернет-торговли и маркетплейсов. Умное управление складом и ассортиментом, автоматическая обработка заказов, синхронизация с маркетплейсами, динамическое ценообразование и персонализация предложений'
  },
  {
    icon: Zap,
    title: 'Комплексная AI-трансформация',
    description: 'Полная цифровизация бизнеса с внедрением искусственного интеллекта. Аудит и стратегия внедрения AI, поэтапная автоматизация всех процессов, создание цифровой экосистемы компании, обучение команды и постоянная оптимизация'
  }
];

export default function Services() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-transparent to-primary/5 pointer-events-none" />
      
      <div 
        className="absolute w-96 h-96 rounded-full opacity-20 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          filter: 'blur(60px)'
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <div className="relative">
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 leading-[0.9] ${isVisible ? 'animate-title-reveal' : 'opacity-0'}`}>
              <div className="title-line">
                <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent relative font-black">
                  Революция
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent opacity-0 animate-title-glow" />
                </span>
              </div>
              <div className="title-line title-line-highlight" style={{ animationDelay: '0.3s' }}>
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent relative title-highlight font-black">
                  автоматизации
                </span>
              </div>
              <div className="title-line" style={{ animationDelay: '0.6s' }}>
                <span className="bg-gradient-to-r from-slate-800 to-slate-950 bg-clip-text text-transparent font-black">
                  бизнеса
                </span>
              </div>
            </h2>
          </div>

          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '1.2s' }}>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-600 max-w-4xl mx-auto font-normal tracking-wide">
              Трансформируем ваш бизнес с помощью передовых AI-технологий и
              <span className="text-slate-900 font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-text-shimmer"> интеллектуальной автоматизации процессов</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
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
                <div className="h-full relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/60 p-8 shadow-xl">
                  {/* Градиентный фон */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/5 opacity-60" />
                  
                  {/* Полоска сверху */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
                  
                  <div className="relative z-10">
                    {/* Иконка */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Заголовок */}
                    <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Описание */}
                    <p className="text-base leading-7 text-slate-600 font-normal tracking-wide">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Декоративные элементы */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tl from-primary/10 to-transparent rounded-full opacity-50" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary/10 to-transparent rounded-full opacity-50" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes title-reveal {
            0% {
              opacity: 0;
              transform: translateY(40px) scale(0.95);
            }
            60% {
              opacity: 0.9;
              transform: translateY(-4px) scale(1.01);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          @keyframes title-reveal-highlight {
            0% {
              opacity: 0;
              transform: translateY(40px) scale(0.95);
            }
            60% {
              opacity: 0.9;
              transform: translateY(-4px) scale(1.01);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          @keyframes title-glow {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.6; }
          }
          
          @keyframes fade-up {
            0% { opacity: 0; transform: translateY(1rem); }
            100% { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slideUp {
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          @keyframes text-shimmer {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes highlight-sweep {
            0% { left: -100%; }
            50% { left: 100%; }
            100% { left: 100%; }
          }
          
          .animate-title-reveal {
            animation: title-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          
          .title-line {
            display: block;
            animation: title-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
            isolation: isolate;
          }
          
          .title-line-highlight {
            animation: title-reveal-highlight 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            z-index: 1;
            position: relative;
          }
          
          @media (max-width: 768px) {
            .title-line {
              font-size: 2.5rem;
              line-height: 1.1;
            }
          }
          
          @media (min-width: 769px) and (max-width: 1024px) {
            .title-line {
              font-size: 3.5rem;
              line-height: 1;
            }
          }
          
          @media (min-width: 1025px) {
            .title-line {
              font-size: 4rem;
              line-height: 0.9;
            }
          }
          
          .animate-title-glow {
            animation: title-glow 4s ease-in-out infinite 2s;
          }
          
          .title-highlight {
            position: relative;
            overflow: hidden;
            display: inline-block;
            isolation: isolate;
          }
          
          .title-highlight::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            animation: highlight-sweep 3s ease-in-out infinite 1.5s;
            z-index: 1;
          }
          
          .animate-fade-up {
            animation: fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          
          .animate-text-shimmer {
            background: linear-gradient(45deg, #334155, #2563eb, #7c3aed, #334155);
            background-size: 300% 300%;
            background-clip: text;
            -webkit-background-clip: text;
            animation: text-shimmer 4s ease-in-out infinite;
          }
        `
      }} />
    </section>
  );
}