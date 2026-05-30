import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className={`flex items-center justify-between w-full mb-16 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
  >
    <div className="hidden md:block w-5/12"></div>
    
    <div className="z-20 flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-[0_0_20px_rgba(56,189,248,0.5)]">
      <div className="w-3 h-3 bg-white rounded-full"></div>
    </div>

    <div className="w-full md:w-5/12 glass-card p-8 rounded-[32px] border-white/5 hover:border-primary/20 transition-all">
      <span className="text-primary font-black text-sm uppercase tracking-widest mb-2 block">{year}</span>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed font-light">{description}</p>
    </div>
  </motion.div>
);

const Timeline = () => {
  const events = [
    {
      year: "2023",
      title: "The Beginning",
      description: "Discovered the passion for technology and started with fundamental programming concepts. Mastered HTML5 and CSS3 to build the first few static web pages, focusing on layout and design principles."
    },
    {
      year: "2024",
      title: "Frontend Mastery",
      description: "Dived deep into modern JavaScript and started working with React. Focused on creating responsive, user-friendly interfaces and mastered CSS frameworks like Tailwind for efficient styling. Built several landing pages and interactive components."
    },
    {
      year: "2025",
      title: "Problem Solving",
      description: "Dedicated significant time to mastering Data Structures and Algorithms. Solved 100+ problems on various platforms, improving logic and efficiency in coding. Started integrating APIs and managing complex application states."
    },
    {
      year: "2026",
      title: "Advanced Horizons",
      description: "Exploring the intersection of Web Development and Artificial Intelligence. Currently working on Full Stack applications, integrating LLMs, and focusing on scalable architecture and performance optimization."
    }
  ];

  return (
    <section id="journey" className="py-16 px-4 max-w-5xl mx-auto relative">
      <div className="text-center mb-24">
        <h2 className="text-6xl font-black tracking-tighter uppercase italic mb-6">Coding Journey</h2>
        <p className="text-gray-500 text-lg font-light">The evolution of a developer, milestone by milestone.</p>
      </div>

      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-primary via-secondary to-transparent"></div>

        <div className="flex flex-col">
          {events.map((event, i) => (
            <TimelineItem key={i} {...event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
