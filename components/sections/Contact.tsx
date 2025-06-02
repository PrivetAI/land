'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Bot, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

import { ChatAPI, validateTelegram } from '@/lib/api';
import { ChatMessage } from '@/lib/types';
import { ChatMessageComponent } from '../chat/ChatMessage';

interface ChatStore {
  isAuthenticated: boolean;
  telegram: string;
  messages: ChatMessage[];
  userMessageCount: number;
  showTelegramPrompt: boolean;
  isTyping: boolean;
}

const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    className="flex items-center space-x-2 p-3 bg-gray-100 rounded-lg max-w-xs"
  >
    <Bot className="h-4 w-4 text-gray-500" />
    <div className="flex space-x-1">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-gray-400 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  </motion.div>
);



const TelegramPrompt = ({ onSubmit }: { onSubmit: (telegram: string) => void }) => {
  const [telegram, setTelegram] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!telegram.trim()) {
      setError('Введите ваш телеграм');
      return;
    }

    if (!validateTelegram(telegram.trim())) {
      setError('Введите корректный телеграм (@username или номер телефона)');
      return;
    }

    setError('');
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      onSubmit(telegram.trim());
    } catch (error) {
      setError('Произошла ошибка. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4"
    >
      <div className="text-center mb-4">
        <MessageCircle className="h-6 w-6 text-blue-500 mx-auto mb-2" />
        <p className="text-sm text-blue-700 font-medium">
          Укажите ваш телеграм, чтобы запомнить историю нашего общения
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="text"
          value={telegram}
          onChange={(e) => setTelegram(e.target.value)}
          placeholder="@username или +7xxxxxxxxxx"
          error={error}
          disabled={isSubmitting}
        />
        <Button type="submit" loading={isSubmitting} size="sm" fullWidth>
          Продолжить
        </Button>
      </form>
    </motion.div>
  );
};

export const Contact = () => {
  const [chatState, setChatState] = useState<ChatStore>({
    isAuthenticated: false,
    telegram: '',
    messages: [
      {
        id: '1',
        role: 'assistant',
        content: 'Привет! Я AI-ассистент команды автоматизаторов. Расскажите, какие задачи хотите автоматизировать в вашем бизнесе?',
        timestamp: new Date()
      }
    ],
    userMessageCount: 0,
    showTelegramPrompt: false,
    isTyping: false
  });

  const [inputMessage, setInputMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom,   [chatState.messages, chatState.showTelegramPrompt]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isSending) return;

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    const newUserMessageCount = chatState.userMessageCount + 1;

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, newUserMessage],
      userMessageCount: newUserMessageCount,
      showTelegramPrompt: !prev.isAuthenticated && newUserMessageCount >= 3,
      isTyping: true
    }));

    setInputMessage('');
    setIsSending(true);

    try {
      const response = await ChatAPI.sendMessage({
        message: newUserMessage.content,
        telegram: chatState.telegram,
        history: [...chatState.messages, newUserMessage]
      });

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.message,
        timestamp: new Date(response.timestamp)
      };

      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isTyping: false
      }));
    } catch (error) {
      console.error('Chat error:', error);
      setChatState(prev => ({
        ...prev,
        isTyping: false
      }));
    } finally {
      setIsSending(false);
    }
  };

  const handleTelegramAuth = (telegram: string) => {
    setChatState(prev => ({
      ...prev,
      isAuthenticated: true,
      telegram,
      showTelegramPrompt: false
    }));
  };

  const isInputDisabled = chatState.showTelegramPrompt || isSending;
  const placeholder = chatState.showTelegramPrompt
    ? 'Укажите телеграм для продолжения...'
    : 'Напишите ваш вопрос...';

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-gray-900 mb-4">
            Консультация с AI-ассистентом
          </h2>
          <p className="body text-gray-600 max-w-2xl mx-auto">
            Получите персонализированную консультацию по автоматизации вашего бизнеса
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {chatState.messages.map((message) => (
                <ChatMessageComponent 
                  key={message.id} 
                  message={message} 
                  isUser={message.role === 'user'} 
                />
              ))}
              
              {chatState.isTyping && <TypingIndicator />}
              
              <AnimatePresence>
                {chatState.showTelegramPrompt && (
                  <TelegramPrompt onSubmit={handleTelegramAuth} />
                )}
              </AnimatePresence>
              
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder={placeholder}
                    disabled={isInputDisabled}
                    onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                  />
                </div>
                <Button
                  onClick={handleSendMessage}
                  disabled={isInputDisabled || !inputMessage.trim()}
                  loading={isSending}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              
              {!chatState.isAuthenticated && (
                <div className="mt-2 text-xs text-gray-500 text-center">
                  Осталось сообщений без регистрации: {Math.max(0, 3 - chatState.userMessageCount)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};