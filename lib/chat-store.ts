// lib/chat-store.ts
import { create } from 'zustand';
import { ChatMessage, ChatState } from './types';

interface ChatStore extends ChatState {
  setTelegram: (telegram: string) => void;
  addMessage: (message: ChatMessage) => void;
  setMessages: (messages: ChatMessage[]) => void;
  clearChat: () => void;
  authenticate: (telegram: string) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  isAuthenticated: false,
  telegram: '',
  messages: [],
  
  setTelegram: (telegram: string) => 
    set({ telegram }),
  
  addMessage: (message: ChatMessage) => 
    set((state) => ({ messages: [...state.messages, message] })),
  
  setMessages: (messages: ChatMessage[]) => 
    set({ messages }),
  
  clearChat: () => 
    set({ messages: [], isAuthenticated: false, telegram: '' }),
  
  authenticate: (telegram: string) => {
    const welcomeMessage: ChatMessage = {
      id: '1',
      role: 'assistant',
      content: 'Привет! Я ИИ-консультант AutoTeam. Расскажите, какие процессы в вашем бизнесе хотите автоматизировать? Я помогу оценить возможности и подберу оптимальное решение.',
      timestamp: new Date()
    };
    
    set({ 
      telegram, 
      isAuthenticated: true, 
      messages: [welcomeMessage] 
    });
  }
}));