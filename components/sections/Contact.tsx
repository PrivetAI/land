'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send, User, Edit3 } from 'lucide-react';
import { useChatStore } from '@/lib/chat-store';
import { ChatAPI } from '@/lib/api';
import { validateTelegram } from '@/lib/api';
import { ChatMessage } from '../chat/ChatMessage';

interface ChatMessageType {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const Contact = () => {
  const { 
    isAuthenticated, 
    telegram, 
    messages, 
    authenticate, 
    addMessage, 
    clearChat 
  } = useChatStore();

  const [telegramInput, setTelegramInput] = useState('');
  const [telegramError, setTelegramError] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChatTyping, setIsChatTyping] = useState(false);

  const handleTelegramAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!telegramInput.trim()) {
      setTelegramError('Введите ваш телеграм');
      return;
    }

    if (!validateTelegram(telegramInput.trim())) {
      setTelegramError('Введите корректный телеграм (@username или +7xxxxxxxxxx)');
      return;
    }

    setTelegramError('');
    setIsSubmitting(true);

    try {
      // Имитация проверки телеграма
      await new Promise(resolve => setTimeout(resolve, 500));
      authenticate(telegramInput.trim());
    } catch (error) {
      setTelegramError('Произошла ошибка. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChangeTelegram = () => {
    clearChat();
    setTelegramInput('');
    setTelegramError('');
  };

  const sendChatMessage = async () => {
    if (!chatInput.trim() || isChatTyping) return;

    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      role: 'user',
      content: chatInput.trim(),
      timestamp: new Date()
    };

    addMessage(userMessage);
    setChatInput('');
    setIsChatTyping(true);

    try {
      // В реальном проекте здесь будет API запрос
      const response = await ChatAPI.sendMessage({
        message: chatInput.trim(),
        telegram,
        history: messages
      });

      const botMessage: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.message,
        timestamp: new Date(response.timestamp)
      };

      addMessage(botMessage);
    } catch (error) {
      // Fallback с заготовленными ответами
      const responses = [
        'Отлично! Для автоматизации этого процесса нам потребуется интеграция с вашими системами. Какие у вас сейчас используются платформы?',
        'Понятно. Такие задачи мы решаем через создание ИИ-ассистента и настройку автоматических уведомлений. Это сократит время обработки на 70%.',
        'Хорошая идея! Это поможет сэкономить до 40% времени сотрудников. Средняя окупаемость таких решений - 3 месяца.',
        'Интересный кейс. Подобные решения окупаются за 2-3 месяца и дают ROI до 300%. Хотите получить детальный план внедрения?',
        'Такую автоматизацию мы уже делали для 15+ компаний. Обычно результат превышает ожидания в 2 раза. Расскажете больше о специфике?'
      ];

      const botMessage: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date()
      };

      addMessage(botMessage);
    } finally {
      setIsChatTyping(false);
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
            <TelegramForm 
              telegram={telegramInput}
              error={telegramError}
              isSubmitting={isSubmitting}
              onTelegramChange={setTelegramInput}
              onSubmit={handleTelegramAuth}
            />
          ) : (
            <ChatInterface 
              telegram={telegram}
              messages={messages}
              chatInput={chatInput}
              isChatTyping={isChatTyping}
              onChangeTelegram={handleChangeTelegram}
              onChatInputChange={setChatInput}
              onSendMessage={sendChatMessage}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

// Компонент формы ввода телеграма
const TelegramForm = ({ 
  telegram, 
  error, 
  isSubmitting, 
  onTelegramChange, 
  onSubmit 
}: {
  telegram: string;
  error: string;
  isSubmitting: boolean;
  onTelegramChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}) => (
  <div className="p-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="h-8 w-8 text-white" />
        </div>
        <h3 className="heading-md text-gray-900 mb-2">Начать консультацию</h3>
        <p className="body text-gray-600">
          Укажите ваш телеграм для персонализированной консультации
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={telegram}
            onChange={(e) => onTelegramChange(e.target.value)}
            placeholder="@username или +7xxxxxxxxxx"
            disabled={isSubmitting}
            className={`w-full px-4 py-3 border rounded-lg transition-colors outline-none disabled:opacity-50 ${
              error ? 'border-error focus:border-error' : 'border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary'
            }`}
          />
          {error && <p className="mt-2 text-sm text-error">{error}</p>}
        </div>
        
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50"
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting && (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
          )}
          Начать чат
        </motion.button>
      </form>

      <div className="text-xs text-gray-500 text-center">
        Мы используем ваш телеграм только для персонализации консультации
      </div>
    </motion.div>
  </div>
);

// Компонент интерфейса чата
const ChatInterface = ({ 
  telegram, 
  messages, 
  chatInput, 
  isChatTyping, 
  onChangeTelegram, 
  onChatInputChange, 
  onSendMessage 
}: {
  telegram: string;
  messages: ChatMessageType[];
  chatInput: string;
  isChatTyping: boolean;
  onChangeTelegram: () => void;
  onChatInputChange: (value: string) => void;
  onSendMessage: () => void;
}) => (
  <>
    <div className="bg-gradient-primary text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Bot className="h-5 w-5 mr-2" />
        <h3 className="heading-sm">ИИ-консультант AutoTeam</h3>
      </div>
    </div>
    
    <div className="p-4 bg-gray-50 border-b">
      <div className="flex items-center justify-between bg-white px-4 py-3 rounded-lg border">
        <div className="flex items-center space-x-2">
          <User className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-700">{telegram}</span>
        </div>
        <button
          onClick={onChangeTelegram}
          className="flex items-center space-x-1 text-primary hover:text-secondary transition-colors text-sm"
        >
          <Edit3 className="h-3 w-3" />
          <span>Изменить</span>
        </button>
      </div>
    </div>
    
    <div className="h-96 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      {isChatTyping && <TypingIndicator />}
    </div>
    
    <div className="border-t border-gray-200 p-4">
      <div className="flex space-x-2">
        <input
          type="text"
          value={chatInput}
          onChange={(e) => onChatInputChange(e.target.value)}
          placeholder="Расскажите о ваших задачах автоматизации..."
          disabled={isChatTyping}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none disabled:opacity-50"
          onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), onSendMessage())}
        />
        <motion.button
          type="button"
          onClick={onSendMessage}
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
);


// Компонент индикатора печати
const TypingIndicator = () => (
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
);