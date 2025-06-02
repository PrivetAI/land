import { motion } from 'framer-motion';
import { MessageCircle, ExternalLink, Zap } from 'lucide-react';
import { Button } from '@/ui/Button';

const TELEGRAM_BOT_URL = 'https://t.me/your_bot_username';

export const TelegramLink = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 shadow-sm"
  >
    <div className="text-center mb-4">
      <div className="flex items-center justify-center gap-2 mb-3">
        <MessageCircle className="h-7 w-7 text-primary" />
        <Zap className="h-5 w-5 text-secondary" />
      </div>
      
      <h3 className="heading-sm gradient-text mb-2">
        Продолжим консультацию
      </h3>
      
      <p className="body-sm text-gray-600 mb-1">
        Автоматизируем ваш бизнес с AI
      </p>
      <p className="text-xs text-gray-500">
        Быстрые решения с измеримым ROI за недели
      </p>
    </div>

    <Button
      as="a"
      href={TELEGRAM_BOT_URL}
      target="_blank"
      rel="noopener noreferrer"
      size="sm"
      fullWidth
      className="btn-primary flex items-center justify-center gap-2"
    >
      Получить консультацию
      <ExternalLink className="h-4 w-4" />
    </Button>
  </motion.div>
);