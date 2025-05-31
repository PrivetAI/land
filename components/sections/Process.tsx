'use client';
import { motion } from 'framer-motion';
import { Clock, Zap, Cog, Rocket } from 'lucide-react';
import { ProcessStep } from '@/lib/types';

const steps: ProcessStep[] = [
  {
    step: 1,
    title: 'Экспресс-аудит',
    description: 'Анализируем текущие процессы и выявляем точки роста',
    duration: '2-3 дня',
    deliverables: ['Карта процессов', 'Приоритезация задач', 'Техническое предложение']
  },
  {
    step: 2,
    title: 'Быстрое прототипирование',
    description: 'Создаем MVP решение для демонстрации результата',
    duration: '3-7 дней',
    deliverables: ['Рабочий прототип', 'Техническая архитектура', 'План внедрения']
  },
  {
    step: 3,
    title: 'Полноценное внедрение',
    description: 'Разрабатываем и интегрируем финальное решение',
    duration: '1-4 недели',
    deliverables: ['Готовое решение', 'Интеграции', 'Документация', 'Обучение']
  },
  {
    step: 4,
    title: 'Запуск и оптимизация',
    description: 'Запускаем систему и настраиваем под реальную нагрузку',
    duration: '1-2 недели',
    deliverables: ['Производственный запуск', 'Мониторинг', 'Оптимизация', 'Поддержка']
  }
];

const iconMap = { Clock, Zap, Cog, Rocket };

export const Process = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-gray-900 mb-4">Процесс работы</h2>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            От идеи до результата за 4 простых этапа
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => {
              const icons = [Clock, Zap, Cog, Rocket];
              const Icon = icons[index];
              
              return (
                <motion.div
                  key={step.step}
                  className="relative flex items-start space-x-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1 card">
                    <div className="flex items-center mb-4">
                      <span className="bg-gradient-primary text-white px-3 py-1 rounded-full body-sm font-medium mr-4">
                        Этап {step.step}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full body-sm">
                        {step.duration}
                      </span>
                    </div>
                    
                    <h3 className="heading-md text-gray-900 mb-3">{step.title}</h3>
                    <p className="body text-gray-600 mb-4">{step.description}</p>
                    
                    <div>
                      <h4 className="heading-sm text-gray-900 mb-2">Результаты этапа:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.deliverables.map((deliverable, i) => (
                          <li key={i} className="body-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
            <h3 className="heading-md text-gray-900 mb-4">Готовы начать?</h3>
            <p className="body text-gray-600 mb-6">
              Первый экспресс-аудит проводим бесплатно
            </p>
            <button className="btn-primary">
              Получить бесплатный аудит
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};