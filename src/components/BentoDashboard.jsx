import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, Target, Cpu } from 'lucide-react';

const BentoCard = ({ title, value, icon: Icon, description, className, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`glass-card p-10 rounded-[40px] border-white/5 flex flex-col justify-between group overflow-hidden relative ${className}`}
  >
    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
      <Icon size={120} />
    </div>
    
    <div className="relative z-10">
      <div className="p-4 rounded-2xl bg-white/5 text-primary w-fit mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
        <Icon size={24} />
      </div>
      <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-500 mb-2">{title}</h3>
      <div className="text-4xl font-black text-white tracking-tighter mb-4">{value}</div>
      <p className="text-gray-400 text-sm font-light leading-relaxed max-w-[200px]">{description}</p>
    </div>

    <div className="relative z-10 mt-10">
       <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '70%' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-primary to-secondary"
          ></motion.div>
       </div>
    </div>
  </motion.div>
);

const BentoDashboard = () => {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <BentoCard 
          index={0}
          title="Learning Path"
          value="Advanced AI"
          icon={Cpu}
          description="Currently exploring Neural Networks and Deep Learning architectures."
          className="md:col-span-2"
        />
        <BentoCard 
          index={1}
          title="DSA Progress"
          value="100+ Solved"
          icon={Target}
          description="Mastering algorithms and complex data structures on LeetCode."
          className="md:row-span-2"
        />
        <BentoCard 
          index={2}
          title="Achievements"
          value="5+ Awards"
          icon={Trophy}
          description="Recognition in hackathons and technical competitions."
        />
        <BentoCard 
          index={3}
          title="Certifications"
          value="8 Completed"
          icon={BookOpen}
          description="Verified expertise in Cloud, Web, and Software Engineering."
        />
      </div>
    </section>
  );
};

export default BentoDashboard;
