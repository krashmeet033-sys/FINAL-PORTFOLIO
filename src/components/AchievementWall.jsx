import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck, Verified, ExternalLink } from 'lucide-react';

const AchievementCard = ({ title, issuer, date, image, code, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="glass-card p-10 rounded-[48px] border-white/5 relative group overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
      <Award size={150} />
    </div>
    
    <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
      {/* Certificate Preview Placeholder */}
      <div className="w-full md:w-80 h-56 bg-slate-900 rounded-[32px] overflow-hidden border border-white/5 relative group/img">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <ShieldCheck size={48} className="text-white/20" />
        </div>
        <img src={image} alt={title} className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" />
        <a 
          href={image} 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm"
        >
          <span className="text-[10px] font-black uppercase tracking-widest bg-white text-black px-6 py-3 rounded-full">View Certificate</span>
        </a>
      </div>

      <div className="flex-1 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
          <Verified size={20} className="text-primary" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-black">Official Certification</span>
        </div>
        <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-4 text-white">
          {title}
        </h3>
        <p className="text-gray-400 text-lg font-light mb-8">
          Issued by <span className="text-white font-bold">{issuer}</span> • {date}
        </p>
        
        <div className="inline-flex items-center gap-6 px-8 py-4 glass rounded-2xl border-white/5">
          <div>
            <p className="text-[8px] uppercase tracking-widest text-gray-500 mb-1 font-black">Credential ID</p>
            <p className="text-xs font-mono text-gray-300">{code}</p>
          </div>
          <div className="w-[1px] h-8 bg-white/5"></div>
          <a href="#" className="p-2 hover:text-primary transition-colors">
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

const AchievementWall = () => {
  return (
    <section id="certifications" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic opacity-5 absolute select-none">RECOGNITION</h2>
        <h3 className="text-5xl font-black italic tracking-tighter uppercase z-10">Professional <span className="text-primary">Certifications</span></h3>
        <div className="w-24 h-1.5 bg-primary mt-6 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.5)]"></div>
      </div>

      <div className="space-y-12">
        <AchievementCard 
          index={0}
          title="Introduction to HTML"
          issuer="Simplilearn | SkillUp"
          date="24th February 2026"
          code="9883985"
          image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
        />
        
        {/* Verification Link Example */}
        <div className="flex justify-center mt-12">
           <a 
             href="https://www.simplilearn.com/skillup-certificate-landing" 
             target="_blank" 
             rel="noopener noreferrer"
             className="px-10 py-4 glass border border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] text-primary hover:bg-primary/10 transition-all flex items-center gap-4"
           >
             Verify Credentials <ExternalLink size={14} />
           </a>
        </div>
      </div>
    </section>
  );
};

export default AchievementWall;
