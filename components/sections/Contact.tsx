'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send } from 'lucide-react';
import { ChatMessage } from '../chat/ChatMessage';
import { TelegramInput } from '../chat/TelegramInput';

interface ChatMessageType {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const chatResponses = [
  'Отлично! Для автоматизации этого процесса нам потребуется интеграция с вашими системами. Какие у вас сейчас используются платформы?',
  'Понятно. Такие задачи мы решаем через создание ИИ-ассистента и настройку автоматических уведомлений. Это сократит время обработки на 70%.',
  'Хорошая идея! Это поможет сэкономить до 40% времени сотрудников. Средняя окупаемость таких решений - 3 месяца.',
  'Интересный кейс. Подобные решения окупаются за 2-3 месяца и дают ROI до 300%. Хотите получить детальный план внедрения?',
  'Такую автоматизацию мы уже делали для 15+ компаний. Обычно результат превышает ожидания в 2 раза. Расскажете больше о специфике?'
];

export const Contact = () => {
  const [telegram, setTelegram] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessageType[]>([]);
  const [isChatTyping, setIsChatTyping] = useState(false);
  const [chatInput, setChatInput] = useState('');

  const handleTelegramAuth = async (telegramValue: string) => {
    setTelegram(telegramValue);
    setIsAuthenticated(true);
    
    // Добавляем приветственное сообщение
    const welcomeMessage: ChatMessageType = {
      id: '1',
      role: 'assistant',
      content: `Привет! Я ИИ-консультант AutoTeam. Расскажите, какие процессы в вашем бизнесе хотите автоматизировать? Я помогу оценить возможности и подберу оптимальное решение.`,
      timestamp: new Date()
    };
    setChatMessages([welcomeMessage]);
  };

  const handleChangeTelegram = () => {
    setIsAuthenticated(false);
    setTelegram('');
    setChatMessages([]);
    setChatInput('');
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

    // Здесь будет реальный API запрос
    // const response = await fetch('/api/chat', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     message: content,
    //     telegram: telegram,
    //     history: chatMessages
    //   })
    // });

    // Имитация ответа бота
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
    if (chatInput.trim() && !isChatTyping && isAuthenticated) {
      handleChatMessage(chatInput.trim());
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-gray-900 mb-4">
            Консультация с ИИ-ассистентом
          </h2>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            Получите персонализированные рекомендации по автоматизации вашего бизнеса
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {!isAuthenticated ? (
            <div className="p-8">
              <TelegramInput onAuth={handleTelegramAuth} />
            </div>
          ) : (
            <>
              <div className="bg-gradient-primary text-white p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <Bot className="h-5 w-5 mr-2" />
                  <h3 className="heading-sm">ИИ-консультант AutoTeam</h3>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 border-b">
                <TelegramInput 
                  currentTelegram={telegram}
                  onChangeTelegram={handleChangeTelegram}
                  onAuth={handleTelegramAuth}
                />
              </div>
              
              <div className="h-96 overflow-y-auto p-4 space-y-4">
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
                    placeholder="Расскажите о ваших задачах автоматизации..."
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
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};