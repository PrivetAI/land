'use client';
import { AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { ChatMessageComponent } from '../chat/ChatMessage';
import { TelegramLink } from '../chat/TelegramLink';
import { TypingIndicator } from '../chat/TypingIndicator';
import { useChat } from '@/lib/hooks';

export const Contact = () => {
  const {
    messages,
    inputMessage,
    setInputMessage,
    userMessageCount,
    showTelegramLink,
    isTyping,
    isSending,
    messagesEndRef,
    handleSendMessage
  } = useChat();

  const isInputDisabled = showTelegramLink || isSending;
  const placeholder = showTelegramLink
    ? 'Продолжите в Telegram...'
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
              {messages.map((message) => (
                <ChatMessageComponent 
                  key={message.id} 
                  message={message} 
                  isUser={message.role === 'user'} 
                />
              ))}
              
              {isTyping && <TypingIndicator />}
              
              <AnimatePresence>
                {showTelegramLink && <TelegramLink />}
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
              
              {!showTelegramLink && (
                <div className="mt-2 text-xs text-gray-500 text-center">
                  Осталось сообщений: {Math.max(0, 3 - userMessageCount)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};