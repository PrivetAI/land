'use client';
import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

const phrases = [
  'AI - агенты для бизнеса',
  'Измеримый ROI за 2-4 недели', 
  'ИИ-решения для роста',
  'Замещаем 80% рутины AI-агентами',
  'Автоматизация бизнеса с AI за недели'
];


export const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < phrase.length) {
          setDisplayText(phrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(phrase.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden py-8 md:py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 py-4 md:py-8 animate-fade-in">
        <div className="mb-6 md:mb-8 animate-slide-up">
          <h1 className="heading-xl text-gray-900 mb-4 md:mb-6 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] flex items-center justify-center">
            <span className="gradient-text">{displayText}</span>
            <span className="animate-pulse">|</span>
          </h1>
          <h2 className="heading-lg text-gray-600 mb-6 md:mb-8 mx-auto px-2 sm:px-0">
            Команда по внедрению ИИ в бизнес-процессы
          </h2>
        </div>
       
        <p className="body text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12 px-2 sm:px-0 animate-slide-up-delay-1">
          Автоматизируем процессы, внедряем ИИ-решения и создаем интеграции, 
          которые приносят реальную прибыль уже через 2-4 недели
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 md:mb-16 px-4 sm:px-0 animate-slide-up-delay-2">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Получить консультацию
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Посмотреть услуги
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto px-4 sm:px-0 animate-slide-up-delay-3">
          {[
            { number: 'до 80%', label: 'Экономии времени' },
            { number: '2-4', label: 'Недели на результат' },
            { number: '24/7', label: 'Работают ваши агенты' }
          ].map((stat, index) => (
            <div key={index} className="text-center py-4 sm:py-0 animate-scale-in" style={{animationDelay: `${1.6 + index * 0.2}s`}}>
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.number}</div>
              <div className="text-gray-600 mt-2 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(10px) translateX(-50%); }
        }
        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s ease-out 0.2s backwards; }
        .animate-slide-up-delay-1 { animation: slide-up 0.8s ease-out 0.6s backwards; }
        .animate-slide-up-delay-2 { animation: slide-up 0.8s ease-out 1s backwards; }
        .animate-slide-up-delay-3 { animation: slide-up 0.8s ease-out 1.4s backwards; }
        .animate-scale-in { animation: scale-in 0.6s ease-out backwards; }
        .animate-bounce-slow { animation: bounce-slow 2s infinite; }
        .animate-scroll-indicator { animation: scroll-indicator 2s infinite; }
      `}</style>
    </section>
  );
};