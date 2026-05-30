import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'command', text: 'whoami' },
    { type: 'response', text: 'RASHMEET KAUR - B.Tech CSE Student & Creative Developer' },
    { type: 'command', text: 'skills' },
    { type: 'response', text: 'React | C++ | AI | UI/UX | Node.js | Python' },
    { type: 'command', text: 'help' },
    { type: 'response', text: 'Available commands: whoami, skills, currently_learning, future_goal, socials, clear, help' }
  ]);

  const commands = {
    whoami: 'RASHMEET KAUR - B.Tech CSE Student & Creative Developer',
    skills: 'React | C++ | AI | UI/UX | Node.js | Python',
    currently_learning: 'Machine Learning & Full Stack Development',
    future_goal: 'Software Engineer focused on AI-driven web ecosystems',
    socials: 'GitHub: @krashmeet033-sys | LinkedIn: RASHMEET KAUR',
    quote: '"Creativity meets logic in every project I build."',
    secret: '🌟 EASTER EGG FOUND: You just discovered the secret vault! You are officially an ultra-pro visitor. 🚀',
    matrix: 'Initiating Matrix mode... 01010101010101010101010101010101',
    clear: 'clear',
    help: 'Available commands: whoami, skills, currently_learning, future_goal, socials, quote, secret, matrix, clear, help'
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.toLowerCase().trim();
      if (cmd === 'clear') {
        setHistory([]);
      } else if (commands[cmd]) {
        setHistory([...history, { type: 'command', text: cmd }, { type: 'response', text: commands[cmd] }]);
      } else if (cmd !== '') {
        setHistory([...history, { type: 'command', text: cmd }, { type: 'response', text: `Command not found: ${cmd}. Type 'help' for available commands.` }]);
      }
      setInput('');
      // Scroll to bottom after new command
      setTimeout(() => {
        const terminalBody = document.querySelector('.terminal-body');
        if (terminalBody) {
          terminalBody.scrollTop = terminalBody.scrollHeight;
        }
      }, 50);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-24 relative group">
      {/* Intense Outer Glow Effects */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.02, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-[40px] blur-3xl -z-10"
      />
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40 rounded-[32px] blur-2xl opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 -z-10"></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-[24px] blur-md opacity-20 group-hover:opacity-80 transition duration-1000 -z-10"></div>
      
      <div className="relative bg-background/95 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(56,189,248,0.15)] group-hover:shadow-[0_0_80px_rgba(56,189,248,0.25)] transition-all duration-700">
        {/* Terminal Header */}
        <div className="bg-slate-800/50 px-4 py-3 flex items-center gap-2 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <div className="flex-1 text-center text-gray-500 text-[10px] uppercase tracking-widest font-bold">developer-terminal</div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 h-[400px] overflow-y-auto scrollbar-hide bg-black/40 backdrop-blur-xl custom-scrollbar terminal-body">
          <div className="text-primary mb-4">Welcome to RASHMEET KAUR's Interactive Terminal. Type 'help' to start.</div>
          
          {history.map((item, i) => (
            <div key={i} className={`mb-2 ${item.type === 'command' ? 'text-white' : 'text-gray-400'}`}>
              {item.type === 'command' && <span className="text-primary mr-2">❯</span>}
              {item.text}
            </div>
          ))}

          <div className="flex items-center text-white pb-4">
            <span className="text-primary mr-2">❯</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="bg-transparent border-none outline-none flex-1"
              autoFocus
            />
            <motion.div 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-2 h-5 bg-primary ml-1"
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
