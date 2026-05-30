import React from 'react';
import { motion } from 'framer-motion';
import { Languages, Code, Brain, Rocket, Cpu, Wrench, Users } from 'lucide-react';

const LearningCard = ({ icon: Icon, title, desc, emoji, color, index, className = "", pointers = [] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`glass-card p-8 rounded-[32px] border-white/5 relative overflow-hidden group hover:border-white/20 ${className}`}
  >
    <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}/10 blur-[50px] -mr-16 -mt-16 group-hover:bg-${color}/20 transition-all duration-700`}></div>
    
    <div className="relative z-10 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className={`p-4 rounded-2xl bg-white/5 text-${color} group-hover:bg-${color} group-hover:text-white transition-all duration-500 shadow-xl`}>
          <Icon size={24} />
        </div>
      </div>
      
      <h4 className="text-xl font-black text-white uppercase italic tracking-tight mb-3 group-hover:text-primary transition-colors">{title}</h4>
      <p className="text-gray-400 text-sm font-light leading-relaxed italic mb-6">{desc}</p>

      {pointers.length > 0 && (
        <ul className="space-y-3 mb-8">
          {pointers.map((pointer, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-400 font-light group-hover:text-white transition-colors">
              <span className={`w-1.5 h-1.5 rounded-full bg-${color} mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(var(--color-primary-rgb),0.5)]`}></span>
              {pointer}
            </li>
          ))}
        </ul>
      )}
      
      <div className="mt-auto pt-6 flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full bg-${color} animate-pulse`}></div>
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-black">In Progress</span>
      </div>
    </div>
  </motion.div>
);

const CurrentlyLearning = () => {
  const topics = [
    { 
      icon: Languages, 
      title: "German Language", 
      emoji: "🇩🇪",
      desc: "Improving communication skills and learning a global language alongside technical education.",
      pointers: [
        "Mastering A1/A2 level vocabulary and grammar rules",
        "Practicing conversational German for professional environments",
        "Understanding cultural nuances for global collaboration",
        "Enhancing cognitive flexibility through multilingual learning",
        "Learning sentence structure and common idiomatic expressions",
        "Focusing on listening comprehension and clear pronunciation"
      ],
      color: "primary",
      size: "lg"
    },
    { 
      icon: Code, 
      title: "React JS", 
      emoji: "⚛️",
      desc: "Building modern, responsive, and interactive frontend applications.",
      pointers: [
        "Deep diving into React Hooks (useState, useEffect, useMemo)",
        "Mastering performance optimization and memoization",
        "Implementing complex state management with Context API",
        "Exploring Next.js for server-side rendering and SEO",
        "Building reusable and scalable component architectures"
      ],
      color: "secondary",
      size: "sm"
    },
    { 
      icon: Brain, 
      title: "Data Structures & Algorithms", 
      emoji: "🧠",
      desc: "Strengthening logical thinking and problem-solving skills through DSA practice.",
      pointers: [
        "Practicing daily problems on LeetCode and CodeStudio",
        "Mastering complex algorithms like DP and Graphs",
        "Optimizing time and space complexity for all solutions",
        "Strong focus on recursion, backtracking, and trees",
        "Understanding memory management and data organization"
      ],
      color: "accent",
      size: "sm"
    },
    { 
      icon: Brain, 
      title: "Aptitude & Problem Solving", 
      emoji: "📊",
      desc: "Enhancing analytical thinking, reasoning, and quantitative skills.",
      pointers: [
        "Developing speed and accuracy in quantitative analysis",
        "Mastering logical reasoning and pattern recognition",
        "Preparing for technical assessment and aptitude rounds",
        "Applying systematic approaches to solve complex puzzles",
        "Focusing on data interpretation and mental mathematics"
      ],
      color: "accent",
      size: "sm"
    },
    { 
      icon: Rocket, 
      title: "Product Thinking", 
      emoji: "🚀",
      desc: "Learning how real-world digital products are designed, developed, and improved for users.",
      pointers: [
        "Analyzing user behavior and UX research methodologies",
        "Understanding product lifecycle and iterative design",
        "Focusing on user-centric feature development and MVP",
        "Learning to balance technical feasibility and business goals",
        "Studying market trends and user retention strategies"
      ],
      color: "primary",
      size: "sm"
    }
  ];

  return (
    <section id="learning" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-20">
        <h2 className="text-[10px] uppercase tracking-[0.8em] text-gray-500 font-black mb-4">Evolution</h2>
        <h3 className="text-5xl font-black italic tracking-tighter uppercase">Currently <span className="text-primary">Learning</span></h3>
        <div className="w-16 h-1 bg-primary mt-6 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic, i) => (
          <LearningCard 
            key={i} 
            {...topic} 
            index={i} 
            className={topic.title === "Aptitude & Problem Solving" ? "border-accent/30 shadow-[0_0_20px_rgba(34,211,238,0.1)]" : ""}
          />
        ))}
      </div>
    </section>
  );
};

export default CurrentlyLearning;
