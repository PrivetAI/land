'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, User, Clock, CheckCircle, Send, Bot } from 'lucide-react';
import { Input, Textarea } from '../ui/Input';
import { Button } from '../ui/Button';
import { ChatMessage } from '../chat/ChatMessage';

interface ChatMessageType {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ContactForm {
  name: string;
  telegram: string;
  message: string;
}

const steps = [
  { icon: MessageSquare, title: 'Заполните форму', description: 'Расскажите о ваших задачах' },
  { icon: Clock, title: 'Получите ответ', description: 'В течение 2 часов' },
  { icon: User, title: 'Консультация', description: 'Обсудим детали проекта' },
  { icon: CheckCircle, title: 'Начинаем работу', description: 'Приступаем к решению' }
];

const chatResponses = [
  'Отлично! Для автоматизации этого процесса нам потребуется интеграция с вашими системами. Какие у вас сейчас используются платформы?',
  'Понятно. Такие задачи мы решаем через создание ИИ-ассистента и настройку автоматических уведомлений. Это сократит время обработки на 70%.',
  'Хорошая идея! Это поможет сэкономить до 40% времени сотрудников. Средняя окупаемость таких решений - 3 месяца.',
  'Интересный кейс. Подобные решения окупаются за 2-3 месяца и дают ROI до 300%. Хотите получить детальный план внедрения?',
  'Такую автоматизацию мы уже делали для 15+ компаний. Обычно результат превышает ожидания в 2 раза. Расскажете больше о специфике?'
];

export const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({ name: '', telegram: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessageType[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Привет! Расскажите о ваших задачах по автоматизации. Какие процессы хотите оптимизировать?',
      timestamp: new Date()
    }
  ]);
  const [isChatTyping, setIsChatTyping] = useState(false);
  const [chatInput, setChatInput] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.telegram || !formData.message) return;
    
    setIsSubmitting(true);
    
    const formMessage: ChatMessageType = {
      id: Date.now().toString(),
      role: 'user',
      content: `Спасибо за интерес! Меня зовут ${formData.name}, мой телеграм: ${formData.telegram}. ${formData.message}`,
      timestamp: new Date()
    };
    
    setChatMessages(prev => [...prev, formMessage]);
    setIsChatTyping(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const botResponse: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Отлично, ${formData.name}! Я записал ваш телеграм ${formData.telegram}. По вашему запросу "${formData.message}" - это очень интересная задача. Обычно такие проекты окупаются за 2-3 месяца. Наш менеджер свяжется с вами в течение 2 часов для обсуждения деталей.`,
        timestamp: new Date()
      };
      
      setChatMessages(prev => [...prev, botResponse]);
      setFormData({ name: '', telegram: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
      setIsChatTyping(false);
    }
  };

  const handleChatMessage = async (content: string) => {
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date()
    };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setIsChatTyping(true);

    setTimeout(() => {
      const botMessage: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: chatResponses[Math.floor(Math.random() * chatResponses.length)],
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, botMessage]);
      setIsChatTyping(false);
    }, 1500);
  };

  const sendChatMessage = () => {
    if (chatInput.trim() && !isChatTyping) {
      handleChatMessage(chatInput.trim());
    }
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
            Оставьте заявку или пообщайтесь с нашим ИИ-консультантом
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md text-gray-900 mb-6">Оставить заявку</h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <Input
                label="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Как к вам обращаться?"
                required
              />
              <Input
                label="Телеграм"
                value={formData.telegram}
                onChange={(e) => setFormData({...formData, telegram: e.target.value})}
                placeholder="@username или +7xxxxxxxxxx"
                required
              />
              <Textarea
                label="Опишите вашу задачу"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Какие процессы хотите автоматизировать?"
                rows={4}
                required
              />
              <Button type="submit" loading={isSubmitting} fullWidth>
                Отправить заявку
              </Button>
            </form>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-primary text-white p-4 flex items-center">
              <Bot className="h-5 w-5 mr-2" />
              <h3 className="heading-sm">ИИ-консультант</h3>
            </div>
            
            <div className="flex-1 h-80 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isChatTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mr-2">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
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
            
            <div className="border-t border-gray-200 p-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Задайте вопрос о вашем проекте..."
                  disabled={isChatTyping}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none disabled:opacity-50"
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), sendChatMessage())}
                />
                <motion.button
                  type="button"
                  onClick={sendChatMessage}
                  disabled={isChatTyping || !chatInput.trim()}
                  className="bg-gradient-primary text-white p-2 rounded-lg disabled:opacity-50"
                  whileHover={!(isChatTyping || !chatInput.trim()) ? { scale: 1.05 } : {}}
                  whileTap={!(isChatTyping || !chatInput.trim()) ? { scale: 0.95 } : {}}
                >
                  <Send className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

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