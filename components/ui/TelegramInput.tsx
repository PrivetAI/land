'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Edit3 } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

interface TelegramInputProps {
  onAuth: (telegram: string) => void;
  currentTelegram?: string;
  onChangeTelegram?: () => void;
}

export const TelegramInput = ({ onAuth, currentTelegram, onChangeTelegram }: TelegramInputProps) => {
  const [telegram, setTelegram] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateTelegram = (value: string): boolean => {
    // Проверяем @username или номер телефона
    const usernameRegex = /^@[a-zA-Z0-9_]{5,32}$/;
    const phoneRegex = /^\+7\d{10}$/;
    return usernameRegex.test(value) || phoneRegex.test(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!telegram.trim()) {
      setError('Введите ваш телеграм');
      return;
    }

    if (!validateTelegram(telegram.trim())) {
      setError('Введите корректный телеграм (@username или +7xxxxxxxxxx)');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 500)); // Имитация запроса
      onAuth(telegram.trim());
    } catch (error) {
      setError('Произошла ошибка. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (currentTelegram) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg border"
      >
        <div className="flex items-center space-x-2">
          <User className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-700">{currentTelegram}</span>
        </div>
        {onChangeTelegram && (
          <button
            onClick={onChangeTelegram}
            className="flex items-center space-x-1 text-primary hover:text-secondary transition-colors text-sm"
          >
            <Edit3 className="h-3 w-3" />
            <span>Изменить</span>
          </button>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
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

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          value={telegram}
          onChange={(e) => setTelegram(e.target.value)}
          placeholder="@username или +7xxxxxxxxxx"
          error={error}
          disabled={isSubmitting}
        />
        <Button type="submit" loading={isSubmitting} fullWidth>
          Начать чат
        </Button>
      </form>

      <div className="text-xs text-gray-500 text-center">
        Мы используем ваш телеграм только для персонализации консультации
      </div>
    </motion.div>
  );
};