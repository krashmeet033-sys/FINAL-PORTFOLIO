import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Zap } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-8 pointer-events-none"
    >
      <div className="glass px-10 py-4 rounded-[32px] flex items-center gap-16 backdrop-blur-3xl border-white/10 pointer-events-auto">
        <div className="text-2xl font-black tracking-tighter cursor-pointer hover:text-primary transition-all duration-300 select-none">
          RK<span className="text-primary">.</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
          <a href="#about" className="hover:text-white transition-colors cursor-pointer">About</a>
          <a href="#strengths" className="hover:text-white transition-colors cursor-pointer">Strengths</a>
          <a href="#skills" className="hover:text-white transition-colors cursor-pointer">Toolkit</a>
          <a href="#projects" className="hover:text-white transition-colors cursor-pointer">Works</a>
          <a href="#learning" className="hover:text-white transition-colors cursor-pointer">Learning</a>
          <a href="#contact" className="hover:text-white transition-colors cursor-pointer">Contact</a>
        </div>
        <div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>
        <div className="flex items-center gap-4">
          <MagneticButton>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl glass hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </MagneticButton>
          <MagneticButton>
            <button className="p-2 rounded-xl glass hover:bg-white/10 transition-colors">
              <Zap size={18} className="text-primary" />
            </button>
          </MagneticButton>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
