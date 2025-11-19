import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { chatWithPortfolioAI } from '../services/geminiService';
import { ChatMessage, MessageRole } from '../types';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: MessageRole.MODEL, text: "Hi! I'm DevBot, an AI assistant powered by Gemini. Ask me anything about Alex's experience, skills, or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: MessageRole.USER, text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Convert chat history to Gemini format
    const historyForGemini = messages.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    try {
      const responseText = await chatWithPortfolioAI(userMessage.text, historyForGemini);
      setMessages(prev => [...prev, { role: MessageRole.MODEL, text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: MessageRole.MODEL, text: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-20 right-4 md:right-8 w-[350px] h-[500px] bg-white dark:bg-dark-card rounded-2xl shadow-2xl z-50 flex flex-col border border-slate-200 dark:border-slate-700 overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-accent-light to-blue-600 dark:from-accent-dark dark:to-purple-700 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <h3 className="font-bold">DevBot AI</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-[#0f172a]">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-2 ${msg.role === MessageRole.USER ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.role === MessageRole.USER ? 'bg-slate-300 text-slate-700' : 'bg-accent-light dark:bg-accent-dark text-white'
                  }`}>
                    {msg.role === MessageRole.USER ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                  </div>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === MessageRole.USER 
                      ? 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-tr-none' 
                      : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-tl-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2">
                   <div className="w-8 h-8 rounded-full bg-accent-light dark:bg-accent-dark text-white flex items-center justify-center">
                     <Bot className="w-5 h-5" />
                   </div>
                   <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700 flex gap-1 items-center">
                     <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                     <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100" />
                     <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200" />
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-white dark:bg-dark-card border-t border-slate-200 dark:border-slate-700">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about my skills..."
                  disabled={isLoading}
                  className="w-full pl-4 pr-12 py-3 bg-slate-100 dark:bg-slate-800 rounded-full focus:outline-none focus:ring-2 focus:ring-accent-light dark:text-white text-sm"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-accent-light dark:bg-accent-dark text-white rounded-full hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-4 md:right-8 z-50 w-14 h-14 bg-accent-light dark:bg-accent-dark text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-accent-light/50 transition-shadow"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>
    </>
  );
};
