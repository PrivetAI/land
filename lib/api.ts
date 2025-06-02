import { ChatRequest, ChatResponse, ChatMessage } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export class ChatAPI {
  static async sendMessage(request: ChatRequest): Promise<ChatResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Chat API error:', error);
      throw new Error('Не удалось отправить сообщение. Попробуйте еще раз.');
    }
  }

  static formatHistory(messages: ChatMessage[]): ChatMessage[] {
    return messages.map(msg => ({
      ...msg,
      timestamp: new Date(msg.timestamp)
    }));
  }
}

// Валидация телеграма - поддержка любых номеров телефонов и username
export const validateTelegram = (telegram: string): boolean => {
  const usernameRegex = /^@[a-zA-Z0-9_]{5,32}$/;
  const phoneRegex = /^\+\d{1,4}\d{4,14}$/; // Международный формат
  const localPhoneRegex = /^\d{10,15}$/; // Локальный формат
  
  return usernameRegex.test(telegram) || 
         phoneRegex.test(telegram) || 
         localPhoneRegex.test(telegram);
};