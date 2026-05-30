import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Globe, 
  Github, 
  Database, 
  Layout, 
  Terminal, 
  Zap,
  Framer
} from 'lucide-react';

const TechIcon = ({ Icon, color, delay, radius, speed }) => {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        position: 'absolute',
        width: radius * 2,
        height: radius * 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`p-3 rounded-2xl glass border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-xl group hover:border-${color}/50 transition-colors`}
        style={{
          position: 'absolute',
          top: 0,
        }}
      >
        <Icon size={24} className={`text-white group-hover:text-${color} transition-colors`} />
      </motion.div>
    </motion.div>
  );
};

const TechOrbit = () => {
  const icons = [
    { Icon: Code2, color: "primary", radius: 120, speed: 20 },
    { Icon: Cpu, color: "secondary", radius: 180, speed: 25 },
    { Icon: Globe, color: "accent", radius: 150, speed: 15 },
    { Icon: Github, color: "white", radius: 200, speed: 30 },
    { Icon: Database, color: "primary", radius: 100, speed: 12 },
    { Icon: Layout, color: "secondary", radius: 220, speed: 35 },
    { Icon: Terminal, color: "accent", radius: 130, speed: 18 },
    { Icon: Framer, color: "primary", radius: 160, speed: 22 },
  ];

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden py-20">
      {/* Center Profile/Logo Placeholder */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        className="relative z-10 w-32 h-32 rounded-full glass border-2 border-primary/30 flex items-center justify-center overflow-hidden group shadow-[0_0_50px_rgba(56,189,248,0.2)]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse"></div>
        <span className="text-4xl font-black text-white italic tracking-tighter group-hover:scale-110 transition-transform">RK.</span>
        
        {/* Glowing Orbs */}
        <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
      </motion.div>

      {/* Orbit Rings */}
      {[100, 150, 200, 250].map((radius, i) => (
        <div 
          key={i}
          className="absolute border border-white/5 rounded-full pointer-events-none"
          style={{ width: radius * 2, height: radius * 2 }}
        ></div>
      ))}

      {/* Icons */}
      {icons.map((item, i) => (
        <TechIcon 
          key={i}
          Icon={item.Icon}
          color={item.color}
          radius={item.radius}
          speed={item.speed}
        />
      ))}

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/5 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default TechOrbit;
