'use client';
import { motion } from 'framer-motion';
import { Clock, Zap, Cog, Rocket } from 'lucide-react';

const steps = [
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
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-purple-600 hidden sm:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => {
              const icons = [Clock, Zap, Cog, Rocket];
              const IconComponent = icons[index];
              
              return (
                <motion.div
                  key={step.step}
                  className="relative flex flex-col sm:flex-row items-start sm:space-x-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 mb-4 sm:mb-0">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Этап {step.step}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                        {step.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-base text-gray-600 mb-4">{step.description}</p>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Результаты этапа:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.deliverables.map((deliverable, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
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
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Готовы начать?</h3>
            <p className="text-base text-gray-600 mb-6">
              Первый экспресс-аудит проводим бесплатно
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
              Получить бесплатный аудит
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};