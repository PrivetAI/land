import { motion, AnimatePresence } from 'framer-motion';
export const AuthForm = ({ 
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
  <div className="p-6 border-t border-gray-200">
    <div className="text-center mb-4">
      <p className="text-sm text-gray-600">
        Введите ваш телеграм для персонализированной консультации
      </p>
    </div>

    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <input
          type="text"
          value={telegram}
          onChange={(e) => onTelegramChange(e.target.value)}
          placeholder="@username или +7xxxxxxxxxx"
          disabled={isSubmitting}
          className={`w-full px-4 py-3 border rounded-lg transition-colors outline-none disabled:opacity-50 ${
            error 
              ? 'border-error focus:border-error' 
              : 'border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary'
          }`}
        />
        {error && <p className="mt-1 text-sm text-error">{error}</p>}
      </div>
      
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 flex items-center justify-center"
        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
      >
        {isSubmitting && (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
        )}
        Начать персонализированный чат
      </motion.button>
    </form>

    <div className="text-xs text-gray-500 text-center mt-3">
      Мы используем ваш телеграм только для персонализации консультации
    </div>
  </div>
);