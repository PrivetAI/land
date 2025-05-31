'use client';
import { motion } from 'framer-motion';
import { Target, Clock, Shield, Lightbulb, Users, Trophy, Zap, Heart } from 'lucide-react';

const advantages = [
  { icon: Target, title: 'Фокус на ROI', description: 'Каждое решение приносит измеримую прибыль' },
  { icon: Clock, title: 'Быстрый результат', description: 'Первые результаты уже через 1-2 недели' },
  { icon: Shield, title: 'Надежность', description: 'Используем проверенные технологии и подходы' },
  { icon: Lightbulb, title: 'Инновации', description: 'Применяем последние достижения ИИ и автоматизации' }
];

const principles = [
  { icon: Users, title: 'Клиентоориентированность', description: 'Ваш успех - наш главный приоритет' },
  { icon: Trophy, title: 'Качество', description: 'Высокие стандарты в каждом проекте' },
  { icon: Zap, title: 'Скорость', description: 'Быстрое внедрение без потери качества' },
  { icon: Heart, title: 'Энтузиазм', description: 'Мы любим то, что делаем' }
];

export const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-gray-900 mb-4">Почему выбирают нас</h2>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            Команда профессионалов, которая превращает идеи в работающие решения
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md text-gray-900 mb-8">Наши преимущества</h3>
            <div className="space-y-6">
              {advantages.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="heading-sm text-gray-900 mb-1">{item.title}</h4>
                    <p className="body text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md text-gray-900 mb-8">Принципы работы</h3>
            <div className="space-y-6">
              {principles.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="heading-sm text-gray-900 mb-1">{item.title}</h4>
                    <p className="body text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};