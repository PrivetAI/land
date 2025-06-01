'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, User, Clock, CheckCircle, Send, Bot } from 'lucide-react';
import { Input, Textarea } from '../ui/Input';
import { Button } from '../ui/Button';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const steps = [
  { icon: MessageSquare, title: 'Заполните форму', description: 'Расскажите о ваших задачах' },
  { icon: Clock, title: 'Получите ответ', description: 'В течение 2 часов' },
  { icon: User, title: 'Консультация', description: 'Обсудим детали проекта' },
  { icon: CheckCircle, title: 'Начинаем работу', description: 'Приступаем к решению' }
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Привет! Расскажите о ваших задачах по автоматизации. Какие процессы хотите оптимизировать?',
      timestamp: new Date()
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isChatTyping, setIsChatTyping] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isChatTyping) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: chatInput.trim(),
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setIsChatTyping(true);

    setTimeout(() => {
      const responses = [
        'Отлично! Для автоматизации этого процесса нам потребуется интеграция с вашими системами.',
        'Понятно. Такие задачи мы решаем через создание ИИ-ассистента и настройку автоматических уведомлений.',
        'Хорошая идея! Это поможет сэкономить до 40% времени сотрудников. Давайте обсудим детали.',
        'Интересный кейс. Подобные решения окупаются за 2-3 месяца. Хотите получить детальный план?'
      ];
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date()
      };
      
      setChatMessages(prev => [...prev, botMessage]);
      setIsChatTyping(false);
    }, 1500);
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
          <h2 className="heading-lg text-gray-900 mb-4">Готовы автоматизировать ваш бизнес?</h2>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            Начните с бесплатной консультации или пообщайтесь с нашим ИИ-помощником
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Форма обратной связи */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md text-gray-900 mb-6">Получить консультацию</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <Input
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              <Textarea
                label="Расскажите о ваших задачах"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                required
              />
              <Button 
                type="submit" 
                loading={isSubmitting}
                fullWidth
              >
                Отправить заявку
              </Button>
            </form>
          </motion.div>

          {/* ИИ-чатбот */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-primary text-white p-4">
              <h3 className="heading-sm flex items-center">
                <Bot className="h-5 w-5 mr-2" />
                ИИ-консультант
              </h3>
            </div>
            
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${
                    message.role === 'user'
                      ? 'bg-gradient-primary text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-900 rounded-bl-sm'
                  } px-4 py-2 rounded-lg`}>
                    <p className="body-sm">{message.content}</p>
                  </div>
                </motion.div>
              ))}
              {isChatTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 rounded-lg px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
            
            <form onSubmit={handleChatSubmit} className="border-t border-gray-200 p-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Опишите вашу задачу..."
                  disabled={isChatTyping}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none disabled:opacity-50"
                />
                <motion.button
                  type="submit"
                  disabled={isChatTyping || !chatInput.trim()}
                  className="bg-gradient-primary text-white p-2 rounded-lg disabled:opacity-50"
                  whileHover={!(isChatTyping || !chatInput.trim()) ? { scale: 1.05 } : {}}
                  whileTap={!(isChatTyping || !chatInput.trim()) ? { scale: 0.95 } : {}}
                >
                  <Send className="h-5 w-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Процесс начала работы */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-md text-gray-900 text-center mb-12">Как мы начинаем работу</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="heading-sm text-gray-900 mb-2">{step.title}</h4>
                  <p className="body-sm text-gray-600">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};