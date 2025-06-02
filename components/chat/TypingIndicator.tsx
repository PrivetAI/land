import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

export const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    className="flex items-center space-x-2 p-3 bg-gray-100 rounded-lg max-w-xs"
  >
    <Bot className="h-4 w-4 text-gray-500" />
    <div className="flex space-x-1">
      {Array.from({ length: 3 }, (_, i) => (
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