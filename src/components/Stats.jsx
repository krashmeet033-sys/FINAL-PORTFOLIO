import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const StatCard = ({ label, value, suffix = "", index }) => {
  // Use CountUp as a component, but handle potential CJS/ESM interop
  const CountUpComp = CountUp.default || CountUp;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card p-8 rounded-[32px] text-center border-white/5 hover:border-primary/20 transition-all duration-500 group"
    >
      <div className="text-4xl md:text-5xl font-black text-white mb-3 group-hover:text-primary transition-colors">
        <CountUpComp end={value} duration={2.5} separator="," suffix={suffix} enableScrollSpy scrollSpyOnce />
      </div>
      <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">{label}</div>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    { label: "Projects Built", value: 20, suffix: "+" },
    { label: "GitHub Commits", value: 500, suffix: "+" },
    { label: "Technologies", value: 15, suffix: "+" },
    { label: "Coding Hours", value: 2000, suffix: "+" },
    { label: "Certifications", value: 1, suffix: "" }
  ];

  return (
    <section id="stats" className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
