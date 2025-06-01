'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
      <div className="flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Введите сообщение..."
          disabled={disabled}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none disabled:opacity-50"
        />
        <motion.button
          type="submit"
          disabled={disabled || !message.trim()}
          className="bg-gradient-primary text-white p-2 rounded-lg disabled:opacity-50"
          whileHover={!(disabled || !message.trim()) ? { scale: 1.05 } : {}}
          whileTap={!(disabled || !message.trim()) ? { scale: 0.95 } : {}}
        >
          <Send className="h-5 w-5" />
        </motion.button>
      </div>
    </form>
  );
};