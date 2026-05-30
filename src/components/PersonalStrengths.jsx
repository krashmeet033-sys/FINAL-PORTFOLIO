import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Zap, Brain, Palette, Rocket, Globe, Smartphone, LayoutGrid } from 'lucide-react';

const StrengthCard = ({ icon: Icon, title, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="glass-card p-6 rounded-3xl border-white/5 flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-500"
  >
    <div className="p-4 rounded-2xl bg-white/5 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(56,189,248,0.1)]">
      <Icon size={24} />
    </div>
    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gray-200">{title}</h3>
  </motion.div>
);

const PersonalStrengths = () => {
  const strengths = [
    { icon: Lightbulb, title: "Creative Thinker" },
    { icon: Zap, title: "Quick Learner" },
    { icon: Brain, title: "Problem Solver" },
    { icon: Palette, title: "UI/UX Enthusiast" },
    { icon: Rocket, title: "Growth Mindset" },
    { icon: Globe, title: "Frontend Developer" },
    { icon: Smartphone, title: "Mobile First" },
    { icon: LayoutGrid, title: "Detail Oriented" }
  ];

  return (
    <section id="strengths" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-[8vw] font-black opacity-[0.02] absolute leading-none select-none pointer-events-none uppercase italic">POTENTIAL</h2>
        <h3 className="text-4xl font-black italic tracking-tighter uppercase z-10">Personal <span className="text-primary">Strengths</span></h3>
        <div className="w-16 h-1 bg-primary mt-4 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {strengths.map((s, i) => (
          <StrengthCard key={i} {...s} index={i} />
        ))}
      </div>
    </section>
  );
};

export default PersonalStrengths;
