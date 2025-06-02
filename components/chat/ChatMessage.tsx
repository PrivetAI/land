import { ChatMessage } from "@/lib/types";
import { Bot, User } from "lucide-react";
import { motion } from 'framer-motion';

export const ChatMessageComponent = ({ message, isUser }: { message: ChatMessage; isUser: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
  >
    <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isUser ? 'bg-primary' : 'bg-gray-200'}`}>
        {isUser ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-gray-600" />}
      </div>
      <div className={`px-4 py-2 rounded-lg ${isUser ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800'}`}>
        <p className="text-sm">{message.content}</p>
      </div>
    </div>
  </motion.div>
);