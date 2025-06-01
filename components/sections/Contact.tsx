'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useChatStore } from '@/lib/chat-store';
import { validateTelegram } from '@/lib/api';
import { AuthForm } from '../chat/AuthForm';
import { ChatHeader } from '../chat/ChatHeader';
import { ChatInput } from '../chat/ChatInput';
import { ChatMessage } from '../chat/ChatMessage';
import { TypingIndicator } from '../chat/TypingIndicator';

export const Contact = () => {
  const { 
    isAuthenticated, 
    telegram, 
    messages, 
    isTyping,
    authenticate, 
    clearChat,
    sendMessage
  } = useChatStore();
  
  const [telegramInput, setTelegramInput] = useState('');
  const [telegramError, setTelegramError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Автоскролл к последнему сообщению
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleAuth = async (e: React.FormEvent) => {
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
      await new Promise(resolve => setTimeout(resolve, 500));
      authenticate(telegramInput.trim());
      setTelegramInput('');
    } catch {
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

  const handleSendMessage = (content: string) => {
    sendMessage(content, telegram);
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
          <ChatHeader 
            isAuthenticated={isAuthenticated}
            telegram={telegram}
            onChangeTelegram={handleChangeTelegram}
          />
          
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
          
          {!isAuthenticated ? (
            <AuthForm
              telegram={telegramInput}
              error={telegramError}
              isSubmitting={isSubmitting}
              onTelegramChange={setTelegramInput}
              onSubmit={handleAuth}
            />
          ) : (
            <div className="border-t border-gray-200 p-4">
              <ChatInput
                onSendMessage={handleSendMessage}
                disabled={isTyping}
                placeholder="Расскажите о ваших задачах автоматизации..."
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};