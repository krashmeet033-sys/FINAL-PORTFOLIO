import React from 'react';
import MagneticButton from './MagneticButton';

const Footer = () => {
  return (
    <footer className="py-24 px-4 border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black tracking-tighter mb-4 italic">RASHMEET KAUR</h2>
            <div className="flex flex-col gap-2 mb-6">
               <p className="text-[10px] uppercase tracking-widest text-primary font-black">B.Tech CSE Student</p>
               <p className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Frontend & AI Enthusiast</p>
               <p className="text-[10px] uppercase tracking-widest text-gray-700 font-black">ITM Skills University</p>
            </div>
            
            {/* Daily Quote Section */}
            <div className="mt-8 p-6 glass rounded-2xl border-white/5 relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-1 h-full bg-primary/30"></div>
               <p className="text-xs text-gray-400 italic font-light leading-relaxed">
                 "Code. Create. Innovate. Creativity meets logic in every project I build."
               </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="text-right mb-4 hidden md:block">
               <h4 className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-black mb-2">Digital Identity</h4>
               <div className="p-4 glass rounded-2xl border-white/5 text-right">
                  <p className="text-sm font-bold text-white mb-1">RASHMEET KAUR</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Full Stack Developer</p>
                  <p className="text-[10px] text-primary mt-2 font-mono">krashmeet033@gmail.com</p>
               </div>
            </div>
            <MagneticButton>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-16 h-16 rounded-full glass border-white/10 flex items-center justify-center hover:bg-white/5 transition-all group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up group-hover:-translate-y-1 transition-transform"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
              </button>
            </MagneticButton>
            <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
              <a href="https://github.com/krashmeet033-sys" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/rashmeet-kaur-738281396" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="mailto:krashmeet033@gmail.com" className="hover:text-white transition-colors">Email</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold">
          <p>© 2026 RASHMEET KAUR. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-2">
            Built with 
            <span className="text-primary animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </span>
            and modern tech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
