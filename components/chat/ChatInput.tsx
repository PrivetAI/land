'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export const ChatInput = ({ onSendMessage, disabled, placeholder = "Введите сообщение..." }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <motion.button
        type="submit"
        disabled={disabled || !message.trim()}
        className="bg-gradient-primary text-white p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[40px]"
        whileHover={!(disabled || !message.trim()) ? { scale: 1.05 } : {}}
        whileTap={!(disabled || !message.trim()) ? { scale: 0.95 } : {}}
      >
        <Send className="h-5 w-5" />
      </motion.button>
    </form>
  );
};