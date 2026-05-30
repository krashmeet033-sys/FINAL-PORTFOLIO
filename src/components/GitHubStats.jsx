import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code2, GitPullRequest, Star } from 'lucide-react';

const StatBox = ({ icon: Icon, label, value, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="glass-card p-8 rounded-3xl border-white/5 flex flex-col items-center text-center relative overflow-hidden group"
  >
    <div className={`p-4 rounded-2xl bg-white/5 text-${color} mb-4 group-hover:scale-110 transition-transform`}>
      <Icon size={24} />
    </div>
    <div className="text-3xl font-black text-white mb-1">{value}</div>
    <div className="text-[10px] uppercase tracking-widest text-gray-500 font-black">{label}</div>
  </motion.div>
);

const GitHubStats = () => {
  return (
    <section id="github" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-20">
        <div className="p-4 rounded-full bg-white/5 text-white mb-6 border border-white/10">
          <Github size={32} />
        </div>
        <h3 className="text-5xl font-black italic tracking-tighter uppercase mb-4">Open Source <span className="text-primary">Activity</span></h3>
        <p className="text-gray-500 max-w-xl text-sm font-light">
          My digital footprint on GitHub, showcasing consistent contributions and a passion for building software.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatBox icon={Code2} label="Repositories" value="20+" color="primary" index={0} />
        <StatBox icon={GitPullRequest} label="Commits" value="500+" color="secondary" index={1} />
        <StatBox icon={Star} label="Stars Earned" value="10+" color="accent" index={2} />
        <StatBox icon={Github} label="Contributions" value="Active" color="white" index={3} />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card p-4 rounded-[40px] border-white/5 overflow-hidden flex items-center justify-center bg-black/40"
      >
        <img 
          src="https://ghchart.rshah.org/38bdf8/krashmeet033-sys" 
          alt="GitHub Contributions" 
          className="w-full opacity-80 hover:opacity-100 transition-opacity duration-700 invert hue-rotate-180"
        />
      </motion.div>
    </section>
  );
};

export default GitHubStats;
