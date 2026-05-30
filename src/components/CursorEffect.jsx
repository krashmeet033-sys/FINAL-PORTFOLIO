import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Glow Cursor Circle */}
      <motion.div
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: isPointer ? 2.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
        className="fixed top-0 left-0 w-6 h-6 border-2 border-primary rounded-full z-[9999] pointer-events-none mix-blend-difference hidden md:block"
      />
      {/* Main Dot */}
      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isPointer ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 300, mass: 0.8 }}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full z-[9999] pointer-events-none hidden md:block shadow-[0_0_10px_rgba(56,189,248,0.8)]"
      />
      {/* Large Gradient Shadow Follower */}
      <motion.div
        animate={{
          x: position.x - 200,
          y: position.y - 200,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] z-[0] pointer-events-none hidden md:block"
      />
    </>
  );
};

export default CursorEffect;
