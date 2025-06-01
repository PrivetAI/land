import { Bot, Edit3, User } from "lucide-react";

export const ChatHeader = ({ 
  isAuthenticated, 
  telegram, 
  onChangeTelegram 
}: {
  isAuthenticated: boolean;
  telegram: string;
  onChangeTelegram: () => void;
}) => (
  <div className="bg-gradient-primary text-white p-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Bot className="h-5 w-5 mr-2" />
        <h3 className="heading-sm">ИИ-консультант AutoTeam</h3>
      </div>
      {isAuthenticated && (
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full">
            <User className="h-3 w-3" />
            <span className="text-xs">{telegram}</span>
          </div>
          <button
            onClick={onChangeTelegram}
            className="flex items-center space-x-1 hover:bg-white/10 px-2 py-1 rounded transition-colors text-xs"
          >
            <Edit3 className="h-3 w-3" />
            <span>Изменить</span>
          </button>
        </div>
      )}
    </div>
  </div>
);