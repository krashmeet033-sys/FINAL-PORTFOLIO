import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi! I'm Rashmeet's AI assistant. Ask me anything about her projects or skills!" }
  ]);
  const [input, setInput] = useState('');

  const responses = {
    projects: "Rashmeet has built several high-impact projects like FAQify, Geography Quiz, and a Bus Booking System. Check the 'Works' section for details!",
    skills: "She is proficient in React, C++, Node.js, and Python, with a strong focus on AI and UI/UX design.",
    contact: "You can reach Rashmeet via email at krashmeet033@gmail.com or through her LinkedIn profile.",
    default: "I'm not sure about that, but you can check out the sections above or contact Rashmeet directly for more info!"
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input.toLowerCase();
    setMessages([...messages, { type: 'user', text: input }]);
    setInput('');

    setTimeout(() => {
      let botResponse = responses.default;
      if (userMsg.includes('project')) botResponse = responses.projects;
      else if (userMsg.includes('skill') || userMsg.includes('tech')) botResponse = responses.skills;
      else if (userMsg.includes('contact') || userMsg.includes('email')) botResponse = responses.contact;

      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="glass-card w-80 md:w-96 rounded-[32px] overflow-hidden border-white/10 shadow-2xl mb-6"
          >
            <div className="bg-primary p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="text-white font-black text-sm uppercase tracking-widest">AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-[10px] text-white/70 font-bold uppercase">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-6 flex flex-col gap-4 bg-slate-950/40">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.type === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'glass border-white/5 text-gray-300 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-900/50 border-t border-white/5 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me something..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/50 transition-all"
              />
              <button onClick={handleSend} className="p-3 bg-primary text-white rounded-xl hover:bg-primary/80 transition-all">
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.4)] relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20"></div>
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;
