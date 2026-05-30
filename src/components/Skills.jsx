import React from 'react';
import { motion } from 'framer-motion';

const SkillCategory = ({ title, skills, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="glass-card p-10 rounded-[40px] border-white/5 relative group overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
      <h4 className="text-8xl font-black italic select-none uppercase tracking-tighter">{title[0]}</h4>
    </div>
    
    <h3 className="text-xl font-black uppercase tracking-[0.2em] mb-12 text-primary">{title}</h3>
    
    <div className="grid grid-cols-2 gap-8">
      {skills.map((skill, i) => (
        <div key={i} className="flex flex-col items-center gap-4 group/item">
          <div className="relative w-20 h-20">
            {/* Background Circle */}
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="36"
                className="fill-none stroke-white/5 stroke-[4]"
              />
              <motion.circle
                cx="40"
                cy="40"
                r="36"
                initial={{ strokeDasharray: "0 226.2" }}
                whileInView={{ strokeDasharray: `${(skill.level / 100) * 226.2} 226.2` }}
                transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                className="fill-none stroke-primary stroke-[4] stroke-round shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                style={{ filter: 'drop-shadow(0 0 8px var(--color-primary))' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xs font-black text-white">{skill.level}%</span>
            </div>
          </div>
          <span className="text-[10px] uppercase tracking-widest font-black text-gray-500 group-hover/item:text-white transition-colors text-center">{skill.name}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 85 },
        { name: "TypeScript", level: 75 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 85 },
        { name: "MongoDB", level: 70 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Systems",
      skills: [
        { name: "C++", level: 85 },
        { name: "DSA", level: 80 },
        { name: "Algorithms", level: 75 },
        { name: "Git/GitHub", level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-[10vw] font-black opacity-[0.03] absolute leading-none select-none pointer-events-none uppercase italic">EXPERTISE</h2>
        <h2 className="text-5xl font-black tracking-tighter uppercase italic z-10">Technical Toolkit</h2>
        <div className="w-16 h-1.5 bg-primary mt-6"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <SkillCategory key={i} title={cat.title} skills={cat.skills} index={i} />
        ))}
      </div>
      
      {/* Decorative Brand Bar */}
      <div className="mt-20 py-12 border-y border-white/5 overflow-hidden flex whitespace-nowrap gap-20 opacity-20 italic font-black text-2xl select-none">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="tracking-tighter">RASHMEET KAUR × FULL STACK DEVELOPER × CREATIVE CODING</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
