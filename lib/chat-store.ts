import { create } from 'zustand';
import { ChatMessage, ChatState } from './types';

interface ChatStore extends ChatState {
  authenticate: (telegram: string) => void;
  clearChat: () => void;
  addMessage: (message: ChatMessage) => void;
  setTyping: (typing: boolean) => void;
  sendMessage: (content: string, telegram: string) => Promise<void>;
}

export const useChatStore = create<ChatStore>((set, get) => ({
  isAuthenticated: false,
  telegram: '',
  messages: [],
  isTyping: false,

  authenticate: (telegram) => set({ 
    isAuthenticated: true, 
    telegram,
    messages: [{
      id: 'welcome',
      role: 'assistant',
      content: 'Привет! Я ИИ-консультант AutoTeam. Расскажите о ваших задачах автоматизации, и я подберу оптимальное решение для вашего бизнеса.',
      timestamp: new Date()
    }]
  }),

  clearChat: () => set({ 
    isAuthenticated: false, 
    telegram: '', 
    messages: [],
    isTyping: false
  }),

  addMessage: (message) => set(state => ({ 
    messages: [...state.messages, message] 
  })),

  setTyping: (typing) => set({ isTyping: typing }),

  sendMessage: async (content, telegram) => {
    const { messages, addMessage, setTyping } = get();
    
    // Добавляем сообщение пользователя
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date()
    };
    addMessage(userMessage);
    
    // Показываем индикатор печати
    setTyping(true);
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: content,
          telegram,
          history: messages
        })
      });
      
      if (!response.ok) throw new Error('Ошибка сервера');
      
      const data = await response.json();
      
      // Добавляем ответ бота
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date(data.timestamp)
      };
      addMessage(botMessage);
      
    } catch (error) {
      // Добавляем сообщение об ошибке
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Извините, произошла ошибка. Попробуйте еще раз.',
        timestamp: new Date()
      };
      addMessage(errorMessage);
    } finally {
      setTyping(false);
    }
  }
}));