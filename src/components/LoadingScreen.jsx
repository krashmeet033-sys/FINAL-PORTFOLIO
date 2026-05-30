import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing Portfolio...');
  const phrases = [
    'Initializing Portfolio...',
    'Loading Creative Experience...',
    'Connecting to Neural Network...',
    'Welcome Developer...'
  ];

  useEffect(() => {
    let currentPhrase = 0;
    const textInterval = setInterval(() => {
      currentPhrase = (currentPhrase + 1) % phrases.length;
      setLoadingText(phrases[currentPhrase]);
    }, 1500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <div className="text-9xl font-black text-white tracking-tighter italic relative z-10">
            RK<span className="text-primary">.</span>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] uppercase tracking-[1em] text-gray-500 font-black mt-4 ml-4"
          >
            RASHMEET KAUR
          </motion.div>
        </motion.div>
        
        {/* Advanced glowing animations */}
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 -m-12 border border-primary/20 rounded-full blur-sm"
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 -m-16 border border-white/5 rounded-full border-dashed"
        />
        
        {/* Glow behind monogram */}
        <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-0 rounded-full animate-pulse"></div>
      </div>

      <div className="flex flex-col items-center gap-8">
        <div className="relative w-80 h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-primary shadow-[0_0_20px_rgba(56,189,248,0.8)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <motion.div
            key={loadingText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-[12px] uppercase tracking-[0.6em] text-white font-black"
          >
            {loadingText}
          </motion.div>
          <div className="text-[10px] font-mono text-primary/50 tabular-nums">
            {progress.toString().padStart(3, '0')}%
          </div>
        </div>
      </div>

      {/* Grid background effect */}
      <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
    </motion.div>
  );
};

export default LoadingScreen;
