import { useState, useRef, useEffect } from 'react';
import { ChatAPI } from '@/lib/api';
import { ChatMessage } from '@/lib/types';

interface UseChatReturn {
  messages: ChatMessage[];
  inputMessage: string;
  setInputMessage: (value: string) => void;
  userMessageCount: number;
  showTelegramLink: boolean;
  isTyping: boolean;
  isSending: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
  handleSendMessage: () => Promise<void>;
}

export const useChat = (): UseChatReturn => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Привет! Я AI-ассистент команды автоматизаторов. Расскажите, какие задачи хотите автоматизировать в вашем бизнесе?',
      timestamp: new Date()
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState('');
  const [userMessageCount, setUserMessageCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const showTelegramLink = userMessageCount >= 3;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, showTelegramLink]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isSending || showTelegramLink) return;

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setUserMessageCount(prev => prev + 1);
    setInputMessage('');
    setIsSending(true);
    setIsTyping(true);

    try {
      const response = await ChatAPI.sendMessage({
        message: newUserMessage.content,
        telegram: '',
        history: [...messages, newUserMessage]
      });

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.message,
        timestamp: new Date(response.timestamp)
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setIsTyping(false);
      setIsSending(false);
    }
  };

  return {
    messages,
    inputMessage,
    setInputMessage,
    userMessageCount,
    showTelegramLink,
    isTyping,
    isSending,
    messagesEndRef,
    handleSendMessage
  };
};