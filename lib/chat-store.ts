import { create } from 'zustand';
import { ChatMessage, ChatState } from './types';
import { api } from './api';

interface ChatStore extends ChatState {
  toggleChat: () => void;
  sendMessage: (content: string) => Promise<void>;
  addMessage: (message: ChatMessage) => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
  messages: [],
  isLoading: false,
  isOpen: false,

  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),

  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),

  sendMessage: async (content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    set((state) => ({
      messages: [...state.messages, userMessage],
      isLoading: true,
    }));

    try {
      const { messages } = get();
      const response = await api.sendMessage({
        message: content,
        context: 'landing_page',
        history: messages.slice(-5),
      });

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.message,
        timestamp: new Date(response.timestamp),
      };

      set((state) => ({
        messages: [...state.messages, assistantMessage],
        isLoading: false,
      }));
    } catch (error) {
      set((state) => ({
        messages: [...state.messages, {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Извините, произошла ошибка. Попробуйте позже.',
          timestamp: new Date(),
        }],
        isLoading: false,
      }));
    }
  },
}));