import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Cpu, Globe, Rocket } from 'lucide-react';

const CaseStudy = () => {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      
      <div className="flex flex-col gap-16">
        <div className="text-center md:text-left">
          <h2 className="text-[10px] uppercase tracking-[0.6em] text-primary font-black mb-6 ml-1">Deep Dive Showcase</h2>
          <h3 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-10">
            Featured <span className="text-white/20">Case Study</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card rounded-[48px] p-12 h-[600px] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 opacity-50"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:scale-110 transition-transform duration-500">
                     <Rocket size={32} />
                   </div>
                   <div>
                     <h4 className="text-3xl font-black italic uppercase">FAQify</h4>
                     <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Enterprise SaaS Architecture</p>
                   </div>
                </div>
                
                <div className="space-y-6 max-w-md">
                   <h5 className="text-xl font-bold text-white">The Challenge</h5>
                   <p className="text-gray-400 font-light leading-relaxed">
                     Building a highly performant, accessible, and aesthetically pleasing FAQ system that could handle dynamic data search with zero latency.
                   </p>
                </div>
              </div>

              <div className="flex gap-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex-1 h-32 glass rounded-3xl border-white/5 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                    <Code2 size={24} className="text-primary/50" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Details Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-[40px] border-white/5"
            >
              <h5 className="text-sm font-black uppercase tracking-widest text-primary mb-8">Solution & Impact</h5>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    <span className="text-white font-bold">State Management:</span> Implemented advanced React hooks for fluid accordion transitions.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    <span className="text-white font-bold">Aesthetic UI:</span> Custom Framer Motion orchestrations for "buttery smooth" interactions.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    <span className="text-white font-bold">Search Engine:</span> Fuzzy-search integration for instant results as you type.
                  </p>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-10 rounded-[40px] border-white/5"
            >
              <h5 className="text-sm font-black uppercase tracking-widest text-secondary mb-8">Tech Stack</h5>
              <div className="flex flex-wrap gap-3">
                {["React 19", "Framer Motion", "Tailwind v4", "Lucide Icons", "Vite"].map((tech, i) => (
                  <span key={i} className="text-[10px] px-4 py-2 rounded-full glass border-white/5 text-gray-400 font-black uppercase tracking-widest">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
