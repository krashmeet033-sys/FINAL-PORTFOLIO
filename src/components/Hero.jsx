import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

import MagneticButton from './MagneticButton';

const Hero = () => {
  // Handle potential CJS/ESM interop for Typewriter
  const TypewriterComp = Typewriter.default || Typewriter;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-20 px-4 relative overflow-hidden bg-background">
      {/* Animated Space Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/5 to-transparent pointer-events-none" />
      </div>

      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDuration: Math.random() * 10 + 10 + 's',
              animationDelay: Math.random() * 5 + 's'
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10 max-w-5xl mt-24"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-6 py-2 mb-16 rounded-full glass border-white/10 text-[12px] uppercase tracking-[0.4em] text-primary font-black shadow-[0_0_20px_rgba(56,189,248,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
          Open to Collaboration
        </motion.div>
        
        <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter mb-8 leading-[0.85] select-none">
          <span className="block text-foreground">RASHMEET</span>
          <span className="block text-foreground drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]">KAUR</span>
        </h1>

        <div className="h-12 md:h-16 mb-20">
          <p className="text-2xl md:text-4xl font-light text-gray-300 tracking-tight italic">
            <TypewriterComp
              words={['Designing modern digital experiences', 'With creativity & code', 'Full Stack Developer', 'Problem Solver']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 mb-24"
        >
          <MagneticButton href="#projects">
            <div className="group relative px-10 py-5 bg-white text-black rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all overflow-hidden">
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0"></div>
              <span className="relative z-10 group-hover:text-white transition-colors">Explore Work</span>
            </div>
          </MagneticButton>
          
          <MagneticButton href="#contact">
            <div className="px-10 py-5 glass rounded-2xl font-black text-sm uppercase tracking-[0.2em] border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-white">
              Get In Touch
            </div>
          </MagneticButton>
        </motion.div>

        {/* Available For Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mt-20"
        >
          <span className="text-white">🚀 Available For:</span>
          {['Internships', 'Collaborations', 'Freelance Projects', 'Team Projects'].map((item, i) => (
            <span key={i} className="px-3 py-1 glass rounded-full border-white/5 text-primary/70">{item}</span>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating Cinematic Cards */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[5%] p-6 glass rounded-3xl border-white/5 backdrop-blur-3xl hidden lg:block"
        >
          <div className="w-12 h-1.5 bg-primary/40 rounded-full mb-4"></div>
          <div className="w-24 h-1.5 bg-white/10 rounded-full mb-2"></div>
          <div className="w-16 h-1.5 bg-white/10 rounded-full"></div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[5%] p-6 glass rounded-3xl border-white/5 backdrop-blur-3xl hidden lg:block"
        >
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-primary/40"></div>
            <div className="w-3 h-3 rounded-full bg-secondary/40"></div>
            <div className="w-3 h-3 rounded-full bg-accent/40"></div>
          </div>
          <div className="w-32 h-1.5 bg-white/10 rounded-full"></div>
        </motion.div>
      </div>

      {/* Cinematic Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 animate-pulse">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary via-primary/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
