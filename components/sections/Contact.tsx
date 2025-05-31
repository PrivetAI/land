'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MessageCircle, Calendar, CheckCircle } from 'lucide-react';
import { api } from '@/lib/api';
import { ContactFormData } from '@/lib/types';
import { useChatStore } from '@/lib/chat-store';

const steps = [
  { icon: MessageCircle, title: 'Обсуждение', description: 'Рассказываете о задаче' },
  { icon: Calendar, title: 'Аудит', description: 'Анализируем процессы' },
  { icon: CheckCircle, title: 'Предложение', description: 'Готовим план решения' },
  { icon: Mail, title: 'Договор', description: 'Фиксируем условия' }
];

export const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const toggleChat = useChatStore(state => state.toggleChat);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await api.submitContact(formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-gray-900 mb-4">Начнем работать</h2>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом для обсуждения вашего проекта
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md text-gray-900 mb-6">Оставьте заявку</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
                <h4 className="heading-sm text-gray-900 mb-2">Спасибо за заявку!</h4>
                <p className="body text-gray-600">Мы свяжемся с вами в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block body-sm font-medium text-gray-700 mb-2">Имя</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block body-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block body-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50"
                >
                  {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
                </button>
              </form>
            )}
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="body-sm text-gray-600 mb-4">Или задайте вопрос в чате:</p>
              <button
                onClick={toggleChat}
                className="w-full btn-outline"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Открыть чат
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md text-gray-900 mb-8">Как мы начинаем работу</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="heading-sm text-gray-900 mb-1">{step.title}</h4>
                    <p className="body text-gray-600">{step.description}</p>
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