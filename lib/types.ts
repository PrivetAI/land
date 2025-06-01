export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatState {
  isAuthenticated: boolean;
  telegram: string;
  messages: ChatMessage[];
  isTyping: boolean;
}

export interface ChatRequest {
  message: string;
  telegram: string;
  history: ChatMessage[];
}

export interface ChatResponse {
  message: string;
  timestamp: string;
}