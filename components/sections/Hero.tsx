'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button'

const typewriterPhrases = [
  'AI - агенты для бизнеса',
  'Измеримый ROI за 2-4 недели',
  'ИИ-решения для роста',
  "Замещаем 80% рутины AI-агентами",
  'Автоматизация бизнеса с AI за недели, а не месяцы',

];

export const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = typewriterPhrases[currentPhrase];
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
          setCurrentPhrase((prev) => (prev + 1) % typewriterPhrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
      
      <motion.div 
        className="container mx-auto px-4 text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="heading-xl text-gray-900 mb-4">
            <span className="gradient-text">{displayText}</span>
            <span className="animate-pulse">|</span>
          </h1>
           <h2 className="heading-lg text-gray-600 mb-8 mx-auto">
            Команда по внедрению ИИ в бизнес-процессы
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="body text-xl text-gray-600 max-w-3xl mx-auto mb-12"
        >
          Автоматизируем процессы, внедряем ИИ-решения и создаем интеграции, 
          которые приносят реальную прибыль уже через 2-4 недели
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          
          {[
            { number: 'до 80%', label: 'Экономии времени' },
            { number: '2-4', label: 'Недели на результат' },
            { number: '24/7', label: 'Работают ваши агенты' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold gradient-text">{stat.number}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </motion.div>
      </div>
    </section>
  );
};