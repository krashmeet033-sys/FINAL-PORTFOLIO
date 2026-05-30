import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, CheckCircle2, Star, Target, TrendingUp, Cpu, Globe, Zap } from 'lucide-react';

const AchievementItem = ({ icon: Icon, text, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="flex items-center gap-6 p-6 glass rounded-[32px] border-white/5 hover:border-primary/20 transition-all group"
  >
    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
      <Icon size={24} />
    </div>
    <p className="text-gray-300 font-light tracking-tight group-hover:text-white transition-colors">{text}</p>
  </motion.div>
);

const Achievements = () => {
  const achievements = [
    "Built multiple responsive projects using modern web technologies",
    "Solved 100+ DSA problems consistently on coding platforms",
    "Continuously learning and implementing modern tech stacks",
    "Developed interactive web interfaces with fluid user experiences",
    "Improved frontend architecture and problem-solving skills",
    "Successfully integrated AI models into web applications",
    "Optimized web performance and accessibility for better UX",
    "Contributed to collaborative team projects using Git/GitHub"
  ];

  const icons = [CheckCircle2, Target, Star, Trophy, TrendingUp, Cpu, Globe, Zap];

  return (
    <section id="achievements" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-[10px] uppercase tracking-[0.8em] text-gray-500 font-black mb-4">Milestones</h2>
        <h3 className="text-5xl font-black italic tracking-tighter uppercase mb-6">Key <span className="text-primary">Achievements</span></h3>
        <p className="text-gray-500 text-sm font-light italic">"Growth is a slow process, but it's always worth it."</p>
      </div>

      <div className="grid gap-6">
        {achievements.map((text, i) => (
          <AchievementItem key={i} icon={icons[i]} text={text} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
