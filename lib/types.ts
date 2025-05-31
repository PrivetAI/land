export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  isOpen: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: Date;
  category: string;
  readTime: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
}

export interface ChatRequest {
  message: string;
  context: 'landing_page';
  history: ChatMessage[];
}

export interface ChatResponse {
  message: string;
  timestamp: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}