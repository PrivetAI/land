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

const icons = [Clock, Zap, Cog, Rocket];
const colors = [
  'from-blue-600 to-blue-700',
  'from-cyan-600 to-blue-600', 
  'from-purple-600 to-cyan-600',
  'from-purple-700 to-purple-600'
];
const glowColors = [
  'shadow-blue-500/25',
  'shadow-cyan-500/25',
  'shadow-purple-500/25', 
  'shadow-purple-600/25'
];

export const Process = () => {
  return (
    <section 
      id="process" 
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [-20, 20, -20]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/3 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl"
          animate={{ 
            y: [-10, 10, -10],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        <motion.div
          className="absolute top-1/2 right-1/5 w-6 h-6 border-2 border-blue-300/40 rotate-45"
          animate={{ 
            rotate: [45, 405],
            y: [-20, 20, -20]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-purple-300/40 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            x: [0, 30, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-10 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-3 sm:mb-6 px-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Процесс работы
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            От идеи до результата за 4 простых этапа
          </motion.p>
        </motion.div>
        
        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-purple-600 rounded-full" />
          
          <div className="space-y-6 sm:space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              const IconComponent = icons[index];
              
              return (
                <motion.div
                  key={step.step}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <motion.div 
                    className={`relative w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br ${colors[index]} rounded-xl sm:rounded-3xl flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0 mr-4 sm:mr-6 lg:mr-8 shadow-lg ${glowColors[index]} overflow-hidden`}
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/10 rounded-xl sm:rounded-3xl"
                    />
                    
                    <motion.div
                      animate={{ 
                        y: [0, -2, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      <IconComponent className="h-6 w-6 sm:h-10 sm:w-10 text-white relative z-10" />
                    </motion.div>
                    
                    <motion.div
                      className={`absolute inset-0 rounded-xl sm:rounded-3xl bg-gradient-to-br ${colors[index]} opacity-0`}
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: index * 0.7
                      }}
                    />
                    
                    <motion.div
                      className="absolute inset-0"
                      animate={{ rotate: 360 }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5
                      }}
                    >
                      <div className="absolute -top-1 left-1/2 w-1 h-1 bg-white/60 rounded-full transform -translate-x-1/2" />
                      <div className="absolute top-1/2 -right-1 w-1 h-1 bg-white/60 rounded-full transform -translate-y-1/2" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex-1 bg-white/90 backdrop-blur-sm rounded-xl lg:rounded-3xl shadow-md border border-gray-200/50 p-4 sm:p-8 lg:p-10 relative overflow-hidden w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div className="relative z-10">
                      <div className="flex flex-col xs:flex-row xs:items-center justify-start mb-3 sm:mb-6 gap-2 sm:gap-3">
                        <span className={`bg-gradient-to-r ${colors[index]} text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-base font-semibold shadow-lg inline-block w-fit`}>
                          Этап {step.step}
                        </span>
                        <span className="bg-gray-100/80 text-gray-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-base font-medium inline-block w-fit">
                          {step.duration}
                        </span>
                      </div>
                      
                      <motion.h3 
                        className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        {step.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-sm sm:text-lg text-gray-600 mb-4 sm:mb-8 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                      >
                        {step.description}
                      </motion.p>
                      
                      <div>
                        <motion.h4 
                          className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.7 }}
                        >
                          Результаты этапа:
                        </motion.h4>
                        <motion.ul 
                          className="grid grid-cols-1 gap-1.5 sm:gap-3"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.8 }}
                        >
                          {step.deliverables.map((deliverable, i) => (
                            <motion.li 
                              key={i} 
                              className="text-xs sm:text-base text-gray-700 flex items-center"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + 0.9 + i * 0.1 }}
                            >
                              <motion.div 
                                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r ${colors[index]} rounded-full mr-2 sm:mr-3 flex-shrink-0 relative`}
                                animate={{ 
                                  scale: [1, 1.2, 1],
                                }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity,
                                  delay: i * 0.3
                                }}
                              >
                                <motion.div
                                  className={`absolute inset-0 bg-gradient-to-r ${colors[index]} rounded-full opacity-50`}
                                  animate={{
                                    scale: [1, 1.8, 1],
                                    opacity: [0.5, 0, 0.5]
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                  }}
                                />
                              </motion.div>
                              <span className="font-medium">
                                {deliverable}
                              </span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};